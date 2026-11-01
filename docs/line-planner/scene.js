import {createCraneScene} from './crane-scene.js?v=a523bf62b7df';
import {sampleCartHandling} from './cart-handling.js?v=a523bf62b7df';
import {compileManualCart} from './manual-cart.js?v=a523bf62b7df';
import {createConveyorScene} from './conveyor-scene.js?v=a523bf62b7df';
import * as THREE from './vendor/three.module.js';
import {createSceneModel} from './scene-model.js?v=a523bf62b7df';
import {createNvidiaAssets} from './nvidia-assets.js?v=a523bf62b7df';
import {createIndustrialAssets} from './industrial-assets.js?v=a523bf62b7df';
import {compileLogistics,sampleLogistics} from './logistics.js?v=a523bf62b7df';
import {sampleHandling,plannedLandingPoints} from './handling-motion.js?v=a523bf62b7df';
import {createTransportFloor} from './transport-floor.js?v=a523bf62b7df';
import {fitTransportView} from './transport-framing.js?v=a523bf62b7df';
import {assetFocusView,assetGeometryBounds} from './asset-framing.js?v=a523bf62b7df';
import {fitPerspectiveBounds,projectedBounds,framingContentBounds} from './view-framing.js?v=a523bf62b7df';

// Rendering is deliberately independent of scheduling: no fabricated machine motion.
export function createPlannerScene(container, {onSelect = () => {},onAssetSelect=()=>{},onAssetsChange=()=>{}} = {}) {
  const renderer = new THREE.WebGLRenderer({antialias:true,alpha:false,powerPreference:'high-performance'});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x152333);
  renderer.outputColorSpace=THREE.SRGBColorSpace;
  renderer.toneMapping=THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure=1.05;
  renderer.shadowMap.enabled=true;
  renderer.shadowMap.type=THREE.PCFShadowMap;
  renderer.shadowMap.autoUpdate=false;
  const canvas=renderer.domElement;
  canvas.setAttribute('aria-label','可互動 3D 產線機台，拖曳旋轉、滾輪縮放，點選機台反向選取表單');
  canvas.tabIndex=0;canvas.style.cssText='display:block;width:100%;height:100%;touch-action:none';
  const overlay=document.createElement('div');overlay.className='scene-labels';
  overlay.style.cssText='position:absolute;inset:0;overflow:hidden;pointer-events:none';
  const tooltip=document.createElement('div');tooltip.className='scene-tooltip';
  tooltip.style.cssText='position:absolute;left:12px;bottom:12px;max-width:calc(100% - 24px);background:#0d1c2fe8;border:1px solid #3a627b;border-radius:7px;padding:9px 12px;color:#dceaf3;font-size:12px;white-space:pre-wrap;pointer-events:none';
  container.style.position='relative';container.append(canvas,overlay,tooltip);
  const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(42,1,.1,2000);
  scene.add(new THREE.HemisphereLight(0xd9e8f5,0x65716e,.8));
  const keyLight=new THREE.DirectionalLight(0xfff0dc,2.2);
  keyLight.castShadow=true;keyLight.shadow.mapSize.set(2048,2048);
  keyLight.shadow.bias=-.00012;keyLight.shadow.normalBias=.025;
  scene.add(keyLight,keyLight.target);
  const fill=new THREE.DirectionalLight(0xc4dff4,.6);fill.position.set(8,5,-5);scene.add(fill);

  // Original procedural studio: no third-party image, HDR file or network request.
  // r187 PMREM returns a cube render target; its texture and target are owned here.
  const studio=new THREE.Scene();studio.background=new THREE.Color(0x9aa6b0);
  const envResources=[];
  function panel(size,position,rotation,intensity){
    const geometry=new THREE.PlaneGeometry(...size);
    const material=new THREE.MeshBasicMaterial({color:new THREE.Color(0xffffff).multiplyScalar(intensity),side:THREE.DoubleSide});
    envResources.push(geometry,material);const mesh=new THREE.Mesh(geometry,material);
    mesh.position.set(...position);mesh.rotation.set(...rotation);studio.add(mesh);
  }
  panel([12,5],[0,9,0],[-Math.PI/2,0,0],3);
  panel([7,6],[-8,3,2],[0,Math.PI/2,0],1.4);
  panel([5,8],[7,4,-3],[0,-Math.PI/2,0],.7);
  const pmrem=new THREE.PMREMGenerator(renderer);
  const environmentTarget=pmrem.fromScene(studio,0,.1,100,{size:256});
  scene.environment=environmentTarget.texture;scene.environmentIntensity=.65;
  pmrem.dispose();for(const resource of envResources)resource.dispose();studio.clear();

  const model=createSceneModel();scene.add(model.root);
  const nvidia=createNvidiaAssets({onChange:()=>{if(!disposed){if(currentConfig&&inventory.stations.length){updateLights();if(!selection)fit(false);else draw();}onAssetsChange(nvidia.snapshot());}}});scene.add(nvidia.root);
  let currentConfig=null,replayTime=0,lastHandling=null;
  const conveyors=createConveyorScene({onChange:()=>{if(!disposed&&currentConfig){applyTransportTime();updateLights();if(!selection)fit(false);else draw();onAssetsChange(nvidia.snapshot());}}});scene.add(conveyors.root);
  const crane=createCraneScene({onChange:()=>{if(!disposed&&currentConfig){applyTransportTime();updateLights();if(!selection)fit(false);else select(selection,true);onAssetsChange();}}});scene.add(crane.root);
  const routeFloor=createTransportFloor();scene.add(routeFloor.root);
  const industrial=createIndustrialAssets({onChange:()=>{if(!disposed&&currentConfig){if(currentConfig.logistics?.enabled){industrial.sync(currentConfig,inventory);applyTransportTime();updateLights();if(!selection)fit(false);else draw();}onAssetsChange(nvidia.snapshot());}},sampleTransport:(seconds,result)=>{const base=sampleLogistics(result?.logistics,seconds);if(!base)return null;const handling=sampleHandling(currentConfig,inventory,result,seconds);return {...base,payloadOwner:handling.payload?.owner??base.payloadOwner,payloadPosition:handling.payload?.position??base.payloadPosition,payloadHeading:handling.payload?.heading??base.heading,payloadMaterialId:handling.payload?.materialId??null,stationPayloads:handling.stationPayloads||[],abstractStoredCount:handling.abstractStoredCount||0,handlingWarnings:handling.warnings||[]};}});scene.add(industrial.root);industrial.root.visible=false;
  function applyTransportTime(){crane.setTime(replayTime,lastResult);conveyors.setTime(replayTime,lastResult);const handling=currentConfig?.manualCart?.enabled?sampleCartHandling(currentConfig,lastResult,replayTime):sampleHandling(currentConfig,inventory,lastResult,replayTime);lastHandling=handling;industrial.setTime(replayTime,lastResult);nvidia.setTime(replayTime,lastResult,handling);return handling;}

  const target=new THREE.Vector3();
  let azimuth=.35,elevation=.75,distance=18,inventory=model.snapshot(),selection=null,labels=[];
  let disposed=false,hasFit=false,transition=null,frame=0,renderCount=0,performanceSample=null;
  let lastWidth=0,lastHeight=0,lastResult=null,drag=null,probeFrame=0,probeResolve=null,lastSyncCpuMs=0,lastFullFit=null,lastTransportBounds=null,lastCartBounds=null;
  const drawDurations=[],raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2();
  const reducedMotion=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  function updateCamera(){
    camera.position.set(target.x+distance*Math.sin(azimuth)*Math.cos(elevation),target.y+distance*Math.sin(elevation),target.z+distance*Math.cos(azimuth)*Math.cos(elevation));
    camera.lookAt(target);camera.updateMatrixWorld();
  }
  function updateTooltip(){
    const m=selection&&(inventory.machines.find(m=>m.machineId===selection.machineId&&m.stationId===selection.stationId)||inventory.machines.find(m=>m.operationId===selection.operationId&&m.stationId===selection.stationId));
    if(m){tooltip.textContent=`${m.stationName} / ${m.name} · ${m.type} · ${m.seconds} 秒/件\n${m.machineId}${m.result?` · uptime ${(m.result.availability*100).toFixed(1)}% · 利用率 ${(m.result.utilization*100).toFixed(1)}%`:' · 待重新模擬，無有效結果'}`;return;}
    if(selection?.craneId){const c=crane.snapshot();tooltip.textContent=`原創天車 v2 · ${c.state?.phase||'待重算'} · ${c.id}\n${c.state?.materialId||'未掛載'} · 幾何／事件示範，非承載安全驗證`;return;}
    if(selection?.conveyorId){tooltip.textContent=`${selection.conveyorId} · 滾筒有限區域物流\n同事件時鐘／物料ID · 非承載物理驗證`;return;}
    if(selection?.assetId){const a=industrial.snapshot();tooltip.textContent=`NVIDIA iw_hub · ${a.state?.phase||'待重算'} · ${a.assetId}\n真事件取樣／預定路徑 · 非自主導航或承載驗證`;return;}
    if(selection?.propId==='warehouse:cart'&&currentConfig?.manualCart?.enabled){const a=nvidia.snapshot().manualCart;tooltip.textContent=`人工板車 · ${a?.state?.phase||'待重算'} · ${a?.state?.workerId||'未保留人員'}\n原生車身／四輪＋原創推把 · 事件派工／單件車載，非承載物理驗證`;return;}
    if(selection?.workerId||selection?.propId){const a=nvidia.snapshot(),item=selection.workerId?a.workers.find(w=>w.workerId===selection.workerId):a.props.find(p=>p.id===selection.propId);if(item){tooltip.textContent=selection.workerId?`${item.workerId} · ${item.state} · ${item.materialId||item.machineId||'未分配機台'}\n${item.motion?'事件步態／解析接點 · 非動力學或人體工學驗證':'生產原位姿態 · 示範模型'}`:`${item.name} · ${item.id}\n原生米制模型 · 倉儲配置不影響產能`;return;}}
    const station=inventory.stations.find(s=>s.stationId===selection?.stationId);
    tooltip.textContent=station?`${station.index+1}. ${station.name} · 工站近看 · 機台造型為規劃假設`:'拖曳旋轉 · 滾輪縮放 · 點機台選回表單 · 彙總視圖，無假加工動畫';
  }
  function placeLabels(width,height){
    const occupied=[];
    for(const item of [...labels].sort((a,b)=>b.priority-a.priority)){
      const v=new THREE.Vector3(...item.position).project(camera);
      const x=(v.x*.5+.5)*width,y=(-v.y*.5+.5)*height;
      const visible=v.z>=-1&&v.z<=1&&x>8&&x<width-8&&y>10&&y<height-58&&(!item.machineId||distance<22||item.machineId===selection?.machineId);
      item.el.style.display=visible?'block':'none';if(!visible)continue;
      const w=item.el.offsetWidth,h=item.el.offsetHeight,rect={x:x-w/2-3,y:y-h-3,w:w+6,h:h+6};
      const overlaps=occupied.some(r=>rect.x<r.x+r.w&&rect.x+rect.w>r.x&&rect.y<r.y+r.h&&rect.y+rect.h>r.y);
      item.el.style.display=overlaps?'none':'block';if(overlaps)continue;
      occupied.push(rect);item.el.style.left=`${x}px`;item.el.style.top=`${y}px`;
    }
  }
  function draw(){
    if(disposed)return;const start=performance.now();
    const width=Math.max(1,container.clientWidth),height=Math.max(1,container.clientHeight);
    if(width!==lastWidth||height!==lastHeight){renderer.setSize(width,height,false);lastWidth=width;lastHeight=height;camera.aspect=width/height;camera.updateProjectionMatrix();}
    updateCamera();canvas.dataset.camera=JSON.stringify({azimuth,elevation,distance,target:target.toArray()});canvas.dataset.threeRevision=THREE.REVISION;if(lastFullFit)canvas.dataset.fitProjection=JSON.stringify({margins:lastFullFit.margins,projection:projectedBounds(lastFullFit.bounds,camera,width,height)});renderer.render(scene,camera);placeLabels(width,height);updateTooltip();if(lastCartBounds&&selection?.propId==='warehouse:cart')canvas.dataset.cartProjection=JSON.stringify(projectedBounds(lastCartBounds,camera,width,height));if(lastTransportBounds&&selection?.assetId)canvas.dataset.transportProjection=JSON.stringify(projectedBounds(lastTransportBounds,camera,width,height));
    const assetState=nvidia.snapshot(),rect=canvas.getBoundingClientRect();canvas.dataset.assetTargets=JSON.stringify([...assetState.workers,...assetState.props.filter(p=>!p.hidden)].map(item=>{let p=new THREE.Vector3(...item.position);if(item.workerId)p.y+=1;else{const bounds=assetGeometryBounds(nvidia.root,item.id);if(bounds)p=bounds.getCenter(new THREE.Vector3());}p.project(camera);return {id:item.workerId||item.id,kind:item.workerId?'worker':'warehouse',x:rect.left+(p.x*.5+.5)*width,y:rect.top+(-p.y*.5+.5)*height};}));
    renderCount++;drawDurations.push(performance.now()-start);if(drawDurations.length>180)drawDurations.shift();
  }
  function stopTransition(){if(frame)cancelAnimationFrame(frame);frame=0;transition=null;}
  function moveCamera(next,smooth=true){
    stopTransition();
    if(!smooth||reducedMotion){target.copy(next.target);distance=next.distance;draw();return;}
    transition={start:performance.now(),from:target.clone(),to:next.target.clone(),fromDistance:distance,toDistance:next.distance};
    const step=now=>{
      if(disposed||!transition)return;const t=Math.min(1,(now-transition.start)/420),ease=t*t*(3-2*t);
      target.lerpVectors(transition.from,transition.to,ease);distance=THREE.MathUtils.lerp(transition.fromDistance,transition.toDistance,ease);draw();
      if(t<1)frame=requestAnimationFrame(step);else{transition=null;frame=0;}
    };frame=requestAnimationFrame(step);
  }
  function transportView(){
    const amrBounds=assetGeometryBounds(industrial.root,'amr:iwhub:1',{precise:false}),active=(lastHandling?.handlers||[]).filter(h=>h.phase!=='warehouse-idle'),handlerBounds=active.map(h=>assetGeometryBounds(nvidia.root,h.workerId,{precise:false}));
    const object=industrial.root.getObjectByName('payload:kit:1'),includePayload=object?.visible&&(active.length||industrial.snapshot().payload.owner==='amr'),payloadBounds=includePayload?assetGeometryBounds(industrial.root,'payload:kit:1',{precise:false}):null;
    const l=lastResult?.logistics?.layout;let pathPoints=[];if(l&&lastHandling?.enginePhase==='load')pathPoints=l.warehouseLoadPath;else if(l&&lastHandling?.enginePhase==='unload'){const id=active.find(h=>h.role==='station-unloader')?.workerId;pathPoints=l.unloadPaths[id]||[];}
    const fitted=fitTransportView({amrBounds,handlerBounds,payloadBounds,pathPoints,view:{azimuth,elevation,fov:camera.fov,width:container.clientWidth,height:container.clientHeight,near:camera.near}});lastTransportBounds=fitted?.bounds||null;return fitted;
  }
  function craneView(){const bounds=crane.focusBounds(selection?.focusPart);return bounds?fitPerspectiveBounds(bounds,{azimuth,elevation,fov:camera.fov,width:container.clientWidth,height:container.clientHeight,near:camera.near,minDistance:selection?.focusPart==='hook'?3.5:9}):null;}
  function cartView(){const cartBounds=assetGeometryBounds(nvidia.root,'warehouse:cart',{precise:false}),handlers=(lastHandling?.handlers||[]).filter(h=>h.workerId),handlerBounds=handlers.map(h=>assetGeometryBounds(nvidia.root,h.workerId,{precise:false})),payload=lastHandling?.payload?.owner!=='none'?assetGeometryBounds(nvidia.root,'manual-cart:payload:1',{precise:false}):null;const fitted=fitTransportView({amrBounds:cartBounds,handlerBounds,payloadBounds:payload,pathPoints:handlers.map(h=>h.pose.position),view:{azimuth,elevation,fov:camera.fov,width:container.clientWidth,height:container.clientHeight,near:camera.near}});lastCartBounds=fitted?.bounds||null;return fitted;}
  function fullView(){
    const bounds=framingContentBounds(model.root,labels.map(label=>label.position));
    if(currentConfig?.manualCart?.enabled&&routeFloor.snapshot().motionBounds){const b=routeFloor.snapshot().motionBounds;bounds.union(new THREE.Box3(new THREE.Vector3(...b.min),new THREE.Vector3(...b.max)));}
    if(crane.root.visible&&crane.snapshot().ready)bounds.union(new THREE.Box3().setFromObject(crane.root));
    if(conveyors.root.visible&&conveyors.root.children.length)bounds.union(new THREE.Box3().setFromObject(conveyors.root));
    if(nvidia.root.children.length)bounds.union(framingContentBounds(nvidia.root));
    if(industrial.root.visible){const assetBounds=assetGeometryBounds(industrial.root,'amr:iwhub:1');if(assetBounds)bounds.union(assetBounds);const envelope=routeFloor.snapshot().motionBounds;if(envelope)bounds.union(new THREE.Box3(new THREE.Vector3(...envelope.min),new THREE.Vector3(...envelope.max)));}
    // Pixel margins reserve label half-widths and the bottom inspector.
    lastFullFit=fitPerspectiveBounds(bounds,{azimuth,elevation,fov:camera.fov,width:container.clientWidth,height:container.clientHeight,near:camera.near});
    camera.far=lastFullFit.far;camera.updateProjectionMatrix();
    return {target:lastFullFit.target,distance:lastFullFit.distance};
  }
  function fit(smooth=true){hasFit=true;moveCamera(fullView(),smooth);}
  function updateLights(){
    const b=new THREE.Box3().setFromObject(model.root);if(crane.root.visible&&crane.snapshot().ready)b.expandByObject(crane.root);if(nvidia.root.children.length)b.expandByObject(nvidia.root);if(conveyors.root.visible&&conveyors.root.children.length)b.expandByObject(conveyors.root);if(industrial.root.visible){b.expandByObject(industrial.root);const envelope=routeFloor.snapshot().motionBounds;if(envelope)b.union(new THREE.Box3(new THREE.Vector3(...envelope.min),new THREE.Vector3(...envelope.max)));}const size=b.getSize(new THREE.Vector3()),center=b.getCenter(new THREE.Vector3());
    keyLight.position.set(center.x-6,12,center.z+8);keyLight.target.position.copy(center);
    const extent=Math.max(8,size.length()*.58),sc=keyLight.shadow.camera;
    sc.left=-extent;sc.right=extent;sc.top=extent;sc.bottom=-extent;sc.near=.1;sc.far=Math.max(60,extent*4);sc.updateProjectionMatrix();
    keyLight.shadow.needsUpdate=true;renderer.shadowMap.needsUpdate=true;
  }
  function makeLabels(){
    overlay.replaceChildren();labels=[];
    for(const station of inventory.stations){
      const el=document.createElement('span'),metric=lastResult?.stations.find(s=>s.id===station.stationId);
      el.textContent=`${station.index+1}. ${station.name}${metric?` · 均WIP ${metric.wip.toFixed(1)}件`:' · 待算'}`;
      el.style.cssText='position:absolute;transform:translate(-50%,-100%);color:#e4f5ff;background:#162c3ce8;border:1px solid #426c82;border-radius:5px;padding:5px 8px;font:600 12px system-ui;white-space:nowrap';
      el.dataset.sceneStation=station.stationId;overlay.append(el);
      labels.push({el,priority:5,position:[station.position[0],2.5,-station.depth/2]});
    }
    for(const m of inventory.machines){
      const el=document.createElement('span');el.textContent=`${m.name} #${m.machineId.split(':').at(-1)}`;
      Object.assign(el.dataset,{sceneMachine:m.machineId,sceneStationId:m.stationId,sceneOperationId:m.operationId});
      el.style.cssText='position:absolute;transform:translate(-50%,-100%);color:#c0d8e6;background:#112432cf;border-radius:3px;padding:3px 5px;font:11px system-ui;white-space:nowrap';
      overlay.append(el);labels.push({el,machineId:m.machineId,priority:m.machineId===selection?.machineId?10:1,position:[m.position[0],.12,m.position[2]+.88]});
    }
  }
  function select(value,focus=true){
    selection=value?{...value}:null;model.select(selection);nvidia.select(selection);industrial.select(selection);conveyors.select(selection);crane.select(selection);makeLabels();
    if(focus&&selection?.craneId){const view=craneView();if(view){camera.far=view.far;camera.updateProjectionMatrix();moveCamera(view);return;}}
    if(focus&&(selection?.workerId||selection?.propId||selection?.assetId||selection?.conveyorId)){const view=currentConfig?.manualCart?.enabled&&selection.propId==='warehouse:cart'?cartView():selection.conveyorId?assetFocusView(conveyors.root,selection.conveyorId,{azimuth,elevation,fov:camera.fov,width:container.clientWidth,height:container.clientHeight,near:camera.near}):selection.assetId?transportView():assetFocusView(nvidia.root,selection.workerId||selection.propId,{azimuth,elevation,fov:camera.fov,width:container.clientWidth,height:container.clientHeight,near:camera.near});if(view){camera.far=view.far;camera.updateProjectionMatrix();moveCamera(view);return;}}
    if(focus&&!selection)fit();
    else if(focus&&selection){
      const machine=selection.operationId&&inventory.machines.find(m=>m.stationId===selection.stationId&&m.operationId===selection.operationId&&(!selection.machineId||m.machineId===selection.machineId));
      const station=inventory.stations.find(s=>s.stationId===selection.stationId);
      if(machine)moveCamera({target:new THREE.Vector3(...machine.position),distance:4.8});
      else if(station)moveCamera({target:new THREE.Vector3(station.position[0],.95,0),distance:Math.max(6.2,station.width/(2*Math.tan(THREE.MathUtils.degToRad(21))*Math.max(.4,camera.aspect))*1.18,station.depth*1.3)});
      else draw();
    }else draw();
  }
  function pick(event){
    const rect=canvas.getBoundingClientRect();pointer.set((event.clientX-rect.left)/rect.width*2-1,-(event.clientY-rect.top)/rect.height*2+1);raycaster.setFromCamera(pointer,camera);
    const assetHit=raycaster.intersectObjects([nvidia.root,...(industrial.root.visible?[industrial.root]:[]),...(conveyors.root.visible?[conveyors.root]:[]),...(crane.root.visible?[crane.root]:[])],true).find(x=>['worker','warehouse','amr','payload','conveyor','crane'].includes(x.object.userData.kind));
    const machineHit=raycaster.intersectObject(model.root,true).find(x=>x.object.userData.kind==='machine');
    if(assetHit&&(!machineHit||assetHit.distance<machineHit.distance)){const data=assetHit.object.userData;const entity=data.kind==='crane'?{craneId:data.craneId,...(selection?.craneId===data.craneId&&selection.focusPart?{focusPart:selection.focusPart}:{})}:data.kind==='conveyor'?{conveyorId:data.conveyorId}:data.kind==='worker'?{workerId:data.workerId,stationId:data.stationId}:data.kind==='warehouse'?{propId:data.propId}:{assetId:'amr:iwhub:1',payloadId:data.payloadId};select(entity,false);onAssetSelect(entity);return;}
    const hit=machineHit;
    if(hit){const {stationId,operationId,machineId}=hit.object.userData;select({stationId,operationId,machineId},false);onSelect({stationId,operationId,machineId});}
  }
  const down=e=>{stopTransition();drag={x:e.clientX,y:e.clientY,lastX:e.clientX,lastY:e.clientY,moved:false};canvas.setPointerCapture(e.pointerId);};
  const move=e=>{if(!drag)return;const dx=e.clientX-drag.lastX,dy=e.clientY-drag.lastY;drag.lastX=e.clientX;drag.lastY=e.clientY;if(Math.hypot(e.clientX-drag.x,e.clientY-drag.y)>4)drag.moved=true;if(drag.moved){azimuth-=dx*.007;elevation=THREE.MathUtils.clamp(elevation+dy*.007,.18,1.45);draw();}};
  const up=e=>{if(!drag)return;const click=!drag.moved;drag=null;if(canvas.hasPointerCapture(e.pointerId))canvas.releasePointerCapture(e.pointerId);if(click)pick(e);};
  const wheel=e=>{e.preventDefault();stopTransition();distance=THREE.MathUtils.clamp(distance*Math.exp(e.deltaY*.001),3,1200);draw();};
  const key=e=>{if(e.key==='Home')fit();};
  canvas.addEventListener('pointerdown',down);canvas.addEventListener('pointermove',move);canvas.addEventListener('pointerup',up);canvas.addEventListener('wheel',wheel,{passive:false});canvas.addEventListener('keydown',key);
  const resize=()=>{if(disposed)return;const previousAspect=camera.aspect;draw();if(hasFit&&Math.abs(previousAspect-camera.aspect)>.005){if(!selection)fit(false);else if(!selection.machineId)select(selection,true);}};
  const observer=new ResizeObserver(resize);observer.observe(container);draw();
  nvidia.load().then(()=>{if(!disposed&&currentConfig){nvidia.sync(currentConfig,inventory);applyTransportTime();updateLights();fit(false);onAssetsChange(nvidia.snapshot());}}).catch(()=>{});
  return {
    sync(config,result=null){
      const syncStart=performance.now();
      const order=inventory.stations.map(s=>s.stationId).join('|'),count=inventory.machines.length;
      performanceSample=null;lastResult=result;currentConfig=config;replayTime=0;inventory=model.sync(config,result);crane.sync(config);if(config.crane?.enabled)crane.load().catch(()=>{});conveyors.sync(config);if(config.conveyor?.enabled)conveyors.load().catch(()=>{});nvidia.sync(config,inventory);industrial.root.visible=!!config.logistics?.enabled;routeFloor.sync(config,config.manualCart?.enabled?(result?.manualCart||compileManualCart(config)):config.logistics?.enabled?(result?.logistics||compileLogistics(config)):null,plannedLandingPoints(result?.manualCart||result?.logistics));industrial.sync(config,inventory);if(config.logistics?.enabled)industrial.load().catch(()=>{});applyTransportTime();selection=inventory.selected;makeLabels();updateLights();
      if(!hasFit||!selection||order!==inventory.stations.map(s=>s.stationId).join('|')||count!==inventory.machines.length)fit(false);else draw();
      lastSyncCpuMs=performance.now()-syncStart;return this.snapshot();
    },
    select,
    setReplayTime(seconds){replayTime=seconds;applyTransportTime();if(selection?.craneId&&selection.focusPart==='hook'){stopTransition();const view=craneView();if(view){target.copy(view.target);distance=view.distance;camera.far=view.far;camera.updateProjectionMatrix();}}else if(selection?.assetId&&industrial.snapshot().state){stopTransition();const desired=transportView();if(desired){const nextTarget=target.clone().lerp(desired.target,.2),safe=fitPerspectiveBounds(desired.bounds,{azimuth,elevation,fov:camera.fov,width:container.clientWidth,height:container.clientHeight,near:camera.near,minDistance:4.8,target:nextTarget});target.copy(nextTarget);distance=Math.max(safe.distance,THREE.MathUtils.lerp(distance,safe.distance,.2));camera.far=safe.far;camera.updateProjectionMatrix();canvas.dataset.transportCoverage=JSON.stringify({phase:lastHandling?.enginePhase,bounds:{min:desired.bounds.min.toArray(),max:desired.bounds.max.toArray()}});}}else if(currentConfig?.manualCart?.enabled&&selection?.propId==='warehouse:cart'){stopTransition();const desired=cartView();if(desired){const nextTarget=target.clone().lerp(desired.target,.2),safe=fitPerspectiveBounds(desired.bounds,{azimuth,elevation,fov:camera.fov,width:container.clientWidth,height:container.clientHeight,near:camera.near,minDistance:4.8,target:nextTarget});target.copy(nextTarget);distance=Math.max(safe.distance,THREE.MathUtils.lerp(distance,safe.distance,.2));camera.far=safe.far;camera.updateProjectionMatrix();}}else if(selection?.workerId){const w=nvidia.snapshot().workers.find(w=>w.workerId===selection.workerId);if(w)target.set(w.position[0],w.position[1]+.9-(w.motion?.crouch||0)*.5,w.position[2]);}keyLight.shadow.needsUpdate=true;renderer.shadowMap.needsUpdate=true;draw();return nvidia.snapshot();},
    moveProp(id,dx,dz){return nvidia.moveProp(id,dx,dz);},
    fit(){fit();},
    async samplePerformance(duration=2000){
      stopTransition();const intervals=[],cpu=[],start=performance.now(),startBuild=inventory.builds,startCount=inventory.machines.length;let last=start,cancelled=false;
      await new Promise(resolve=>{probeResolve=resolve;const step=now=>{if(disposed||inventory.builds!==startBuild||now-start>=duration){cancelled=disposed||inventory.builds!==startBuild;resolve();return;}intervals.push(now-last);last=now;const before=performance.now();draw();cpu.push(performance.now()-before);probeFrame=requestAnimationFrame(step);};probeFrame=requestAnimationFrame(step);});probeFrame=0;probeResolve=null;
      const elapsed=performance.now()-start,sorted=cpu.toSorted((a,b)=>a-b);
      if(cancelled||disposed)return {cancelled:true,machineCount:startCount};
      performanceSample={durationMs:elapsed,frames:cpu.length,fps:cpu.length/elapsed*1000,meanFrameIntervalMs:intervals.reduce((a,b)=>a+b,0)/Math.max(1,intervals.length),p95CpuDrawMs:sorted[Math.min(sorted.length-1,Math.floor(sorted.length*.95))]||0,machineCount:inventory.machines.length,viewport:[lastWidth,lastHeight],pixelRatio:renderer.getPixelRatio(),note:'實際 rAF 連續重繪樣本；含瀏覽器排程，CPU draw 計時不是 GPU 執行時間。'};return {...performanceSample};
    },
    snapshot(){
      const rect=canvas.getBoundingClientRect(),gl=renderer.getContext();
      const assets=nvidia.snapshot();
      for(const item of [...assets.workers,...assets.props]){let v=new THREE.Vector3(...item.position);if(item.workerId)v.y+=1;else{const bounds=assetGeometryBounds(nvidia.root,item.id);if(bounds)v=bounds.getCenter(new THREE.Vector3());}v.project(camera);item.screenPosition=[rect.left+(v.x*.5+.5)*rect.width,rect.top+(-v.y*.5+.5)*rect.height];}
      return {...model.snapshot(),nvidia:assets,crane:crane.snapshot(),conveyor:conveyors.snapshot(),industrial:industrial.snapshot(),corridors:routeFloor.snapshot(),replayTime,machines:inventory.machines.map(m=>{const p=new THREE.Vector3(...m.position).project(camera);return {...structuredClone(m),screen:{x:(p.x*.5+.5)*rect.width,y:(-p.y*.5+.5)*rect.height},screenPosition:[rect.left+(p.x*.5+.5)*rect.width,rect.top+(-p.y*.5+.5)*rect.height]};}),renderer:{revision:THREE.REVISION,type:'WebGLRenderer',userAgent:navigator.userAgent,windowViewport:[window.innerWidth,window.innerHeight],webglVersion:gl.getParameter(gl.VERSION),geometries:renderer.info.memory.geometries,textures:renderer.info.memory.textures,programs:renderer.info.programs?.length,calls:renderer.info.render.calls,triangles:renderer.info.render.triangles,renderCount,lastSyncCpuMs,pixelRatio:renderer.getPixelRatio(),toneMapping:'ACESFilmic',exposure:renderer.toneMappingExposure,shadows:'PCFShadowMap 2048',environment:'owned procedural studio PMREM cube 256',performanceSample},camera:{azimuth,elevation,distance,target:target.toArray(),transitioning:!!transition,fullViewFit:lastFullFit?{margins:lastFullFit.margins,worldBounds:{min:lastFullFit.bounds.min.toArray(),max:lastFullFit.bounds.max.toArray()},projection:projectedBounds(lastFullFit.bounds,camera,rect.width,rect.height)}:null},canvas:{width:rect.width,height:rect.height,left:rect.left,top:rect.top},selected:selection?{...selection}:null};
    },
    dispose(){
      if(disposed)return;disposed=true;stopTransition();if(probeFrame)cancelAnimationFrame(probeFrame);probeResolve?.();observer.disconnect();
      for(const [type,fn] of [['pointerdown',down],['pointermove',move],['pointerup',up],['wheel',wheel],['keydown',key]])canvas.removeEventListener(type,fn);
      crane.dispose();conveyors.dispose();industrial.dispose();routeFloor.dispose();nvidia.dispose();model.dispose();inventory=model.snapshot();selection=null;labels=[];scene.environment=null;environmentTarget.dispose();keyLight.shadow.dispose();renderer.renderLists.dispose();renderer.dispose();renderer.forceContextLoss();canvas.remove();overlay.remove();tooltip.remove();
    }
  };
}
