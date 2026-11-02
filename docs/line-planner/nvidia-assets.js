import {createCartVisual} from './cart-visual.js?v=307311a1019b';
import * as THREE from './vendor/three.module.min.js';
import {GLTFLoader} from './vendor/addons/loaders/GLTFLoader.js';
import {clone as cloneSkeleton} from './vendor/addons/utils/SkeletonUtils.js';
import {createHumanMotion} from './human-motion.js?v=307311a1019b';
import {compilePlantLayout} from './plant-layout.js?v=307311a1019b';

export const NVIDIA_WORKER_RENDER_LIMIT = 40;

export const NVIDIA_ASSET_INFO = Object.freeze({
  redistributionGrantVerified:false,
  units:'Y-up metres, native exported scale; no additional axis or unit conversion',
  worker:{url:'./assets/nvidia/nvidia-worker-threejs.glb',sha256:'1af1e4e18d184d30623659aebce2ee81ed771e1fd656e3cb0af9ef4ed758c4d5',source:'https://omniverse-content-production.s3-us-west-2.amazonaws.com/Assets/Isaac/5.1/Isaac/People/Characters/original_male_adult_construction_03/male_adult_construction_03.usd',bones:101,heightMetres:1.78093466},
  warehouse:{url:'./assets/nvidia/nvidia-warehouse-bay.glb',sha256:'2cf266f385d472cd971677ae9c8d4c57c6e8e88f3c4ac925ce1d27688781d98e',source:'NVIDIA Isaac Sim 5.1 / Isaac/Environments/Simple_Warehouse/Props',rackDeckY:.4500006675720066,palletSourceTranslationY:.45000043511390686,palletSourceLocalBottomY:2.288818308215923e-7},
  notice:'NVIDIA source attribution retained. User-authorized project integration; no CC BY or general redistribution grant claim. evaluation_arm_bend is excluded from production playback.'
});

// Replay is driven exclusively by engine allocation/release events. An operation
// pose says "assigned at a fixed workspot"; it does not assert tool contact,
// locomotion, pallet handling, transport capacity or task completion by animation.
export function replayWorkerStates(config,events,time,{truncated=false}={}){
  const workers=new Map();
  for(const station of config?.stations||[])for(let i=0;i<station.workers;i++){
    const workerId=`worker:${station.id}:${i+1}`;
    workers.set(workerId,{workerId,stationId:station.id,state:'idle',machineId:null,operationId:null,jobId:null,since:0});
  }
  if(config?.logistics?.enabled)for(let i=0;i<(config.logistics.warehouseWorkers||1);i++){const workerId=`worker:warehouse:${i+1}`;workers.set(workerId,{workerId,stationId:'warehouse',state:'idle',machineId:null,operationId:null,jobId:null,since:0});}
  for(const event of events||[]){
    if(event.time>time)break;
    for(const workerId of event.workerIds||[]){
      const worker=workers.get(workerId);if(!worker||worker.stationId!==event.station)continue;
      if(event.kind==='cart-worker-start')Object.assign(worker,{state:'cart-task',machineId:event.machineId,operationId:event.operationId,jobId:event.materialId??null,since:event.time});
      else if(event.kind==='cart-worker-end')Object.assign(worker,{state:'idle',machineId:null,operationId:null,jobId:null,since:event.time});
      else if(event.kind==='logistics-unload-start')Object.assign(worker,{state:'unload',machineId:event.machineId,operationId:event.operationId,jobId:event.materialId??null,since:event.time});
      else if(event.kind==='logistics-unload-end')Object.assign(worker,{state:'idle',machineId:null,operationId:null,jobId:null,since:event.time});
      else if(event.kind==='start'||event.kind==='operation')Object.assign(worker,{state:'operation',machineId:event.machineId,operationId:event.operationId,jobId:event.job??null,since:event.time});
      else if(event.kind==='failure'&&worker.machineId===event.machineId)Object.assign(worker,{state:'fault',since:event.time});
      else if(event.kind==='repair'&&worker.machineId===event.machineId)Object.assign(worker,{state:'operation',since:event.time});
      else if((event.kind==='processed'||event.kind==='complete')&&worker.machineId===event.machineId)Object.assign(worker,{state:'idle',machineId:null,operationId:null,jobId:null,since:event.time});
    }
  }
  const lastTime=events?.at(-1)?.time??0;
  const onShift=(config?.run?.shifts||[]).some(([start,end])=>time>=start&&time<end);
  for(const worker of workers.values()){
    if(truncated&&time>lastTime){worker.state='unknown-truncated';worker.machineId=null;worker.operationId=null;worker.jobId=null;}
    else if(!onShift)worker.state='offshift';
  }
  return [...workers.values()];
}

export function createNvidiaAssets({onChange=()=>{},workerURL=NVIDIA_ASSET_INFO.worker.url,warehouseURL=NVIDIA_ASSET_INFO.warehouse.url,loader=new GLTFLoader()}={}){
  const root=new THREE.Group();root.name='nvidia-project-assets';root.userData={kind:'nvidia-assets',redistributionGrantVerified:false};
  let ready=false,loading=false,error=null,disposed=false,loadPromise=null,workerTemplate=null,warehouseTemplate=null;
  let config={stations:[],run:{shifts:[]}},inventory={stations:[],machines:[]},time=0,result=null,lastHandling=null,selected=null;
  const workers=new Map(),props=new Map(),sharedResources=new Set(),sourceImages=new Set();
  const stats={loads:0,workerClonesCreated:0,workerClonesRemoved:0,boneTexturesDisposed:0,sharedResourcesDisposed:0};
  const warnings=[];let pads=null,lastConfigSignature='';let workerAnatomy={bones:0,skinnedMeshes:0,sourceTriangles:0};
  let rearBoundary=-3,rearAnchor=[0,0,-6],cartVisual=null;
  const emit=()=>{if(!disposed)onChange(snapshot());};
  const own=resource=>{sharedResources.add(resource);return resource;};
  const markerGeometry=own(new THREE.RingGeometry(.27,.29,40));
  const markerMaterial=own(new THREE.MeshBasicMaterial({color:0xffd079,side:THREE.DoubleSide,depthWrite:false}));
  const padGeometry=own(new THREE.BoxGeometry(1,1,1));
  const padMaterial=own(new THREE.MeshStandardMaterial({color:0x273845,roughness:.9,metalness:0}));
  function updatePads(){
    if(!pads){pads={storage:new THREE.Mesh(padGeometry,padMaterial),workers:new THREE.Mesh(padGeometry,padMaterial)};for(const [key,pad] of Object.entries(pads)){pad.name=`nvidia-original-${key}-floor`;pad.receiveShadow=true;pad.userData={kind:'floor',originalProcedural:true,nvidiaPad:true};root.add(pad);}}
    const minX=Math.min(0,...(inventory.stations||[]).map(station=>station.position[0]-station.width/2)),maxX=Math.max(4,...(inventory.stations||[]).map(station=>station.position[0]+station.width/2));
    const storageBounds=new THREE.Box3();for(const prop of props.values())if(prop.wrapper.visible)storageBounds.union(boxOf(prop));
    pads.storage.visible=!storageBounds.isEmpty();
    if(pads.storage.visible){storageBounds.expandByVector(new THREE.Vector3(.5,0,.5));storageBounds.max.z=Math.min(storageBounds.max.z,rearBoundary);const size=storageBounds.getSize(new THREE.Vector3()),center=storageBounds.getCenter(new THREE.Vector3());pads.storage.position.set(center.x,-.095,center.z);pads.storage.scale.set(Math.max(.1,size.x),.16,Math.max(.1,size.z));}
    const maxWorkerZ=Math.max(2,...[...workers.values()].map(worker=>worker.wrapper.position.z));
    pads.workers.position.set((minX+maxX)/2,-.095,(maxWorkerZ+1)/2);pads.workers.scale.set(maxX-minX+2,.16,maxWorkerZ+1);
  }
  function rememberResources(object){object.traverse(child=>{
    if(child.geometry)sharedResources.add(child.geometry);
    const list=Array.isArray(child.material)?child.material:[child.material];
    for(const material of list){if(!material)continue;sharedResources.add(material);for(const value of Object.values(material))if(value?.isTexture){sharedResources.add(value);if(value.source?.data?.close)sourceImages.add(value.source.data);}}
  });}
  function metadata(object,data){object.traverse(child=>{child.userData={...child.userData,...data};if(child.isMesh){child.castShadow=true;child.receiveShadow=true;}});}
  function marker(parent,data){const ring=new THREE.Mesh(markerGeometry,markerMaterial);ring.rotation.x=-Math.PI/2;ring.position.y=.012;ring.visible=false;ring.name=`select:${data.workerId||data.propId}`;ring.userData={...data,kind:'selection',selectionMarker:true};parent.add(ring);return ring;}
  function disposeSkeletons(actor){const skeletons=new Set();actor.traverse(child=>{if(child.isSkinnedMesh)skeletons.add(child.skeleton);});for(const skeleton of skeletons){if(skeleton.boneTexture){skeleton.boneTexture.dispose();stats.boneTexturesDisposed++;}skeleton.boneTexture=null;}}
  function removeWorker(worker){disposeSkeletons(worker.actor);root.remove(worker.wrapper);workers.delete(worker.workerId);stats.workerClonesRemoved++;}
  function createWorker(workerId,stationId){
    const wrapper=new THREE.Group();wrapper.name=workerId;
    const actor=cloneSkeleton(workerTemplate);actor.name=`native-model:${workerId}`;
    const data={kind:'worker',workerId,stationId,assetSource:'NVIDIA Isaac Sim 5.1',model:'original_male_adult_construction_03'};
    wrapper.userData={...data};metadata(actor,data);wrapper.add(actor);const ring=marker(wrapper,data);root.add(wrapper);
    const bones=new Map(),rest=new Map();actor.traverse(child=>{if(child.isBone){bones.set(child.name,child);rest.set(child.name,child.quaternion.clone());}});
    const motion=createHumanMotion({actor,wrapper});
    const worker={workerId,stationId,wrapper,actor,ring,bones,rest,motion,motionActive:false,homePosition:[0,0,0],homeHeading:Math.PI,machineId:null,operationId:null,state:'pending',since:0};workers.set(workerId,worker);stats.workerClonesCreated++;return worker;
  }
  function aim(worker,boneName,childName,direction){
    const bone=worker.bones.get(boneName),child=worker.bones.get(childName);if(!bone||!child)return;
    worker.wrapper.updateWorldMatrix(true,true);
    const start=bone.getWorldPosition(new THREE.Vector3()),end=child.getWorldPosition(new THREE.Vector3());
    const current=end.sub(start).normalize(),desired=new THREE.Vector3(...direction).normalize().applyQuaternion(worker.wrapper.getWorldQuaternion(new THREE.Quaternion()));
    const world=bone.getWorldQuaternion(new THREE.Quaternion()),rotation=new THREE.Quaternion().setFromUnitVectors(current,desired).multiply(world);
    const parentWorld=bone.parent.getWorldQuaternion(new THREE.Quaternion()).invert();bone.quaternion.copy(parentWorld.multiply(rotation));
  }
  function pose(worker,state){
    // Rest transforms/segment lengths are native asset data. No old G3 limb
    // lengths, root animation, evaluation clip or hidden AnimationMixer clock.
    for(const [name,bone] of worker.bones)bone.quaternion.copy(worker.rest.get(name));
    const operation=state==='operation';
    // Bounded illustrative gesture phase comes from the actual allocation or
    // repair event time. Seeking the same event time gives the identical pose.
    const gesture=operation?Math.sin(Math.max(0,time-worker.since)*Math.PI*1.3)*.012:0;
    for(const side of ['L','R']){
      const sign=side==='L'?1:-1;
      aim(worker,`${side}_Upperarm`,`${side}_Forearm`,operation?[sign*.12,-.18+gesture*.3,.25+gesture]:[sign*.09,-.35,.05]);
      aim(worker,`${side}_Forearm`,`${side}_Hand`,operation?[-sign*.04+gesture*.2,-.045-gesture,.30]:[-sign*.035,-.25,.06]);
    }
    worker.actor.updateMatrixWorld(true);worker.actor.traverse(child=>{if(child.isSkinnedMesh)child.skeleton.update();});
  }
  function sourceProp(id,kind,name,sourceNodes){
    const wrapper=new THREE.Group();wrapper.name=id;wrapper.userData={kind:'warehouse',propId:id,warehouseKind:kind,name,assetSource:'NVIDIA Isaac Sim 5.1'};
    for(const node of sourceNodes){const copy=node.clone(true);metadata(copy,wrapper.userData);wrapper.add(copy);}
    const ring=marker(wrapper,wrapper.userData);root.add(wrapper);const prop={id,kind,name,wrapper,ring};props.set(id,prop);return prop;
  }
  function makeProps(){
    const nodes=warehouseTemplate.children;
    sourceProp('warehouse:rack','rack','NVIDIA 貨架（2 框架／3 層板）',nodes.filter(node=>/^(Frame|Shelf)/.test(node.name)));
    sourceProp('warehouse:pallet','pallet','NVIDIA 原生棧板',nodes.filter(node=>/^Pallet/.test(node.name)));
    sourceProp('warehouse:cart','cart','NVIDIA 原生推車（靜態）',nodes.filter(node=>/^Cart/.test(node.name)));
    cartVisual=createCartVisual({root,prop:props.get('warehouse:cart'),own});
    if(props.get('warehouse:rack').wrapper.children.length!==14)throw Error('NVIDIA warehouse nodes differ from expected 13 rack meshes plus marker');
  }
  function sync(nextConfig,nextInventory){
    if(nextConfig){const signature=JSON.stringify({stations:nextConfig.stations,run:nextConfig.run,logistics:nextConfig.logistics,manualCart:nextConfig.manualCart,warehouse:nextConfig.warehouse});if(signature!==lastConfigSignature){result=null;lastHandling=null;lastConfigSignature=signature;}config=nextConfig;}if(nextInventory)inventory=nextInventory;
    if(!ready)return snapshot();
    const wanted=new Set();
    if(config.logistics?.enabled){const layout=compilePlantLayout(config);for(let i=0;i<(config.logistics.warehouseWorkers||1)&&wanted.size<NVIDIA_WORKER_RENDER_LIMIT;i++){const workerId=`worker:warehouse:${i+1}`;wanted.add(workerId);const worker=workers.get(workerId)||createWorker(workerId,'warehouse');worker.role='warehouse-handler';worker.homePosition=[layout.warehouseHandlerHome[0]+i*.8,0,layout.warehouseHandlerHome[2]+(i?1:0)];worker.homeHeading=Math.PI;worker.wrapper.position.fromArray(worker.homePosition);worker.wrapper.rotation.y=worker.homeHeading;}}
    for(const station of config.stations||[]){
      const sceneStation=inventory.stations?.find(s=>s.stationId===station.id);if(!sceneStation)continue;
      const machines=inventory.machines?.filter(m=>m.stationId===station.id)||[];
      for(let i=0;i<station.workers;i++){
        if(wanted.size>=NVIDIA_WORKER_RENDER_LIMIT)break;
        const workerId=`worker:${station.id}:${i+1}`;wanted.add(workerId);
        const worker=workers.get(workerId)||createWorker(workerId,station.id);
        const columns=Math.max(1,Math.floor((sceneStation.width-.5)/.75));
        const column=i%columns,row=Math.floor(i/columns),rowCount=Math.min(columns,station.workers-row*columns);
        const x=sceneStation.position[0]+(column-(rowCount-1)/2)*.75;
        const z=sceneStation.depth/2-.65+row*.9;
        worker.homePosition=[x,0,z];worker.homeHeading=Math.PI;worker.role='production';worker.wrapper.position.set(x,0,z);worker.wrapper.rotation.y=Math.PI;
        worker.homeMachineId=machines[Math.min(i,machines.length-1)]?.machineId||null;
      }
    }
    for(const [id,worker] of workers)if(!wanted.has(id))removeWorker(worker);
    rearBoundary=Math.min(-2,...(inventory.stations||[]).map(s=>s.position[2]-s.depth/2))-1.1;
    const minX=Math.min(0,...(inventory.stations||[]).map(s=>s.position[0]-s.width/2));
    const maxX=Math.max(4,...(inventory.stations||[]).map(s=>s.position[0]+s.width/2));
    rearAnchor=[(minX+maxX)/2,0,rearBoundary-2.8];
    // Parking validation must inspect the configured source pose, never the
    // previous moving yaw/cargo transform. Restore valid event pose afterwards.
    cartVisual?.apply(config,null);
    for(const prop of props.values()){
      const offset=config.warehouse?.offsets?.[prop.id]||[0,0];
      prop.wrapper.position.set(rearAnchor[0]+(Number(offset[0])||0),0,rearAnchor[2]+(Number(offset[1])||0));
      prop.wrapper.visible=!(config.warehouse?.hidden||[]).includes(prop.id);prop.layoutInvalid=false;prop.layoutInvalidReason=null;
    }
    root.updateMatrixWorld(true);
    for(const prop of props.values()){prop.layoutInvalidReason=layoutReason(boxOf(prop));prop.layoutInvalid=!!prop.layoutInvalidReason;if(prop.layoutInvalid)prop.wrapper.visible=false;}
    // Imported offsets receive the same conservative whole-object checks as UI moves.
    // Suppress a conflicting cart rather than rendering it inside the rack.
    const cart=props.get('warehouse:cart');
    if(cart.wrapper.visible){for(const other of props.values())if(other.id!==cart.id&&other.wrapper.visible&&boxOf(cart).intersectsBox(boxOf(other))){cart.layoutInvalid=true;cart.layoutInvalidReason=`與 ${other.name} 包圍盒重疊`;cart.wrapper.visible=false;break;}}
    const rack=props.get('warehouse:rack'),pallet=props.get('warehouse:pallet');
    const supportCenterX=pallet.wrapper.position.x-rack.wrapper.position.x-.6984589993953705;
    const supportCenterZ=pallet.wrapper.position.z-rack.wrapper.position.z-.0014365613460540771;
    pallet.supportHiddenReason=pallet.layoutInvalid?null:!rack.wrapper.visible?(rack.layoutInvalid?'rack-layout-invalid':'rack-hidden'):Math.abs(supportCenterX)>1.24||Math.abs(supportCenterZ)>.06?'outside-rack-deck':null;
    pallet.supportHidden=!!pallet.supportHiddenReason;if(pallet.supportHidden)pallet.wrapper.visible=false;
    updatePads();root.updateMatrixWorld(true);setTime(time,result,lastHandling);select(selected);return snapshot();
  }
  function setTime(seconds,nextResult,handling=null){
    time=Math.max(0,Number(seconds)||0);result=nextResult||null;handling=result?handling:null;lastHandling=handling;cartVisual?.apply(config,handling);
    const states=result?replayWorkerStates(config,result.events||[],time,{truncated:!!result.eventsTruncated}):[];
    for(const worker of workers.values()){
      const state=states.find(s=>s.workerId===worker.workerId)||{state:'pending',machineId:null,operationId:null,since:0};
      const task=handling?.handlers?.find(h=>h.workerId===worker.workerId);
      const changed=worker.state!==state.state;
      Object.assign(worker,{machineId:state.machineId,operationId:state.operationId,state:task?.phase||state.state,since:state.since,jobId:state.jobId??null,materialId:task?.materialId||(task&&task.phase!=='warehouse-idle'?handling?.materialId:null)||null});
      if(task){worker.motion.apply(task.pose);worker.motionActive=true;worker.taskRole=task.role;}else{if(worker.motionActive){worker.motion.reset();worker.motionActive=false;worker.taskRole=null;}worker.wrapper.position.fromArray(worker.homePosition);worker.wrapper.rotation.y=worker.homeHeading;}
      metadata(worker.actor,{kind:'worker',workerId:worker.workerId,stationId:worker.stationId,machineId:worker.machineId,operationId:worker.operationId,state:worker.state});
      worker.wrapper.userData={...worker.wrapper.userData,machineId:worker.machineId,operationId:worker.operationId,state:worker.state};
      if(!task&&(state.state==='operation'||changed||!worker.poseApplied)){pose(worker,state.state);worker.poseApplied=true;}
    }
    root.updateMatrixWorld(true);return snapshot();
  }
  function select(entity){selected=entity?{...entity}:null;for(const worker of workers.values()){worker.ring.visible=selected?.workerId===worker.workerId;worker.wrapper.userData.selected=worker.ring.visible;}for(const prop of props.values()){prop.ring.visible=selected?.propId===prop.id||selected?.id===prop.id;prop.wrapper.userData.selected=prop.ring.visible;}return snapshot();}
  function boxOf(prop,dx=0,dz=0){
    const box=new THREE.Box3();for(const node of prop.wrapper.children)if(!node.userData.selectionMarker&&!node.userData.excludeGeometryBounds)box.expandByObject(node,true);
    box.translate(new THREE.Vector3(dx,0,dz));return box;
  }
  function layoutReason(box){
    if(![...box.min.toArray(),...box.max.toArray()].every(Number.isFinite))return '物件位置不是有限座標';
    if(box.max.z>rearBoundary+1e-8)return '侵入工站／通道，超出後方倉儲安全區';
    const minX=Math.min(0,...(inventory.stations||[]).map(station=>station.position[0]-station.width/2))-4;
    const maxX=Math.max(4,...(inventory.stations||[]).map(station=>station.position[0]+station.width/2))+4;
    if(box.min.x<minX||box.max.x>maxX||box.min.z<rearAnchor[2]-5)return '超出本機規劃的後方倉儲範圍';
    return null;
  }
  function moveProp(id,dx,dz){
    if(!ready)throw Error('NVIDIA 素材尚未載入');if(config.manualCart?.enabled&&id==='warehouse:cart')throw Error('人工板車模式使用固定來源位；請先關閉此模式再調整來源位置');const prop=props.get(id);if(!prop)throw Error(`未知倉儲物件 ${id}`);
    if(!Number.isFinite(dx)||!Number.isFinite(dz))throw Error('移動量必須為有限數值');
    root.updateMatrixWorld(true);const proposed=boxOf(prop,dx,dz);
    const invalidReason=layoutReason(proposed);if(invalidReason)throw Error(`移動被拒：${invalidReason}`);
    for(const other of props.values()){
      if(other.id===id||!other.wrapper.visible)continue;
      if(new Set([id,other.id]).size===2&&[id,other.id].every(v=>['warehouse:rack','warehouse:pallet'].includes(v)))continue; // intentional deck support
      if(proposed.intersectsBox(boxOf(other)))throw Error(`移動被拒：會與 ${other.name} 包圍盒重疊`);
    }
    const rack=props.get('warehouse:rack'),pallet=props.get('warehouse:pallet');
    if((id==='warehouse:rack'||id==='warehouse:pallet')&&rack.wrapper.visible&&pallet.wrapper.visible){
      const rackPosition=rack.wrapper.position.clone(),palletPosition=pallet.wrapper.position.clone();
      (id==='warehouse:rack'?rackPosition:palletPosition).add(new THREE.Vector3(dx,0,dz));
      // Source pallet is offset -0.7m in the rack. Preserve the authored deck
      // contact datum, not the entire shelf's decorative bounding-box maximum.
      const nativePalletCenter=[-.6984589993953705,-.0014365613460540771];
      const centerX=palletPosition.x-rackPosition.x+nativePalletCenter[0],centerZ=palletPosition.z-rackPosition.z+nativePalletCenter[1];
      if(Math.abs(centerX)>1.24||Math.abs(centerZ)>.06)throw Error('移動被拒：棧板將離開原生貨架 deck 支承區；先隱藏棧板可獨立調整貨架');
    }
    const warehouse=structuredClone(config.warehouse||{});warehouse.offsets={...warehouse.offsets};warehouse.hidden=warehouse.hidden||[];const old=warehouse.offsets[id]||[0,0];warehouse.offsets[id]=[old[0]+dx,old[1]+dz];return warehouse;
  }
  function snapshot(){
    const actorList=[...workers.values()].map(worker=>({workerId:worker.workerId,stationId:worker.stationId,machineId:worker.machineId,homeMachineId:worker.homeMachineId,operationId:worker.operationId,state:worker.state,jobId:worker.jobId,since:worker.since,position:worker.wrapper.position.toArray(),homePosition:[...worker.homePosition],role:worker.taskRole||worker.role,motion:worker.motionActive?worker.motion.snapshot():null,materialId:worker.materialId||null,bones:worker.bones.size,skinnedMeshes:workerAnatomy.skinnedMeshes,sourceTriangles:workerAnatomy.sourceTriangles,clipPlayed:false,selected:!!worker.wrapper.userData.selected}));
    const requestedWorkers=(config.stations||[]).reduce((sum,station)=>sum+(Number.isInteger(station.workers)&&station.workers>0?station.workers:0),0)+(config.logistics?.enabled?(config.logistics.warehouseWorkers||1):0);
    return {ready,loading,error,manualCart:cartVisual?.snapshot()??null,redistributionGrantVerified:false,time,requestedWorkers,renderedWorkers:workers.size,workerRenderLimit:NVIDIA_WORKER_RENDER_LIMIT,workers:actorList,props:[...props.values()].map(prop=>({id:prop.id,kind:prop.kind,name:prop.id==='warehouse:cart'&&config.manualCart?.enabled?'NVIDIA 板車＋原創推把（事件控制）':prop.name,position:prop.wrapper.position.toArray(),hidden:!prop.wrapper.visible,layoutInvalid:!!prop.layoutInvalid,layoutInvalidReason:prop.layoutInvalidReason||null,supportHidden:!!prop.supportHidden,supportHiddenReason:prop.supportHiddenReason||null,sourceMeshNodes:prop.wrapper.children.filter(c=>!c.userData.selectionMarker).map(c=>c.name),selected:!!prop.wrapper.userData.selected})),stats:{...stats,workers:workers.size,requestedWorkers,workerRenderLimit:NVIDIA_WORKER_RENDER_LIMIT,props:props.size,sharedResources:sharedResources.size,bonesPerWorker:workerAnatomy.bones,skinnedMeshesPerWorker:workerAnatomy.skinnedMeshes,trianglesPerWorker:workerAnatomy.sourceTriangles,animationClipPlayed:false},warehouse:{rearBoundary,rearAnchor:[...rearAnchor],floorPads:pads?Object.entries(pads).map(([kind,pad])=>({kind,position:pad.position.toArray(),scale:pad.scale.toArray(),topY:pad.position.y+pad.scale.y/2,visible:pad.visible})):[],deck:{sourceY:NVIDIA_ASSET_INFO.warehouse.rackDeckY,palletSourceTranslationY:NVIDIA_ASSET_INFO.warehouse.palletSourceTranslationY,palletLocalBottomY:NVIDIA_ASSET_INFO.warehouse.palletSourceLocalBottomY,sourceBottomSum:NVIDIA_ASSET_INFO.warehouse.palletSourceTranslationY+NVIDIA_ASSET_INFO.warehouse.palletSourceLocalBottomY}},warnings:[...warnings,...[...props.values()].filter(prop=>prop.layoutInvalid).map(prop=>`${prop.name} 配置不安全已暫隱：${prop.layoutInvalidReason}；請重設位移`),...(props.get('warehouse:pallet')?.supportHidden?['貨架隱藏或棧板離開 deck 支承區：為避免無支承懸浮，棧板同步暫隱；恢復有效支承即依原配置恢復棧板']:[]),...(requestedWorkers>NVIDIA_WORKER_RENDER_LIMIT?[`原生人物顯示 ${workers.size}/${requestedWorkers} 位（渲染上限 ${NVIDIA_WORKER_RENDER_LIMIT}）；引擎人員配置與事件未縮減`]:[]),...(result?.eventsTruncated&&time>(result.events?.at(-1)?.time??0)?['事件紀錄已截斷，此時間的人員狀態標為未知']:[])],notice:NVIDIA_ASSET_INFO.notice};
  }
  function load(){
    if(loadPromise)return loadPromise;
    loading=true;error=null;emit();stats.loads++;
    loadPromise=(async()=>{
      const loaded=await Promise.allSettled([loader.loadAsync(workerURL),loader.loadAsync(warehouseURL)]);
      for(const item of loaded)if(item.status==='fulfilled')rememberResources(item.value.scene);
      const failure=loaded.find(item=>item.status==='rejected');if(failure)throw failure.reason;
      if(disposed)throw Error('NVIDIA 資源已關閉');
      workerTemplate=loaded[0].value.scene;warehouseTemplate=loaded[1].value.scene;
      const bones=new Set();workerTemplate.traverse(child=>{if(child.isBone)bones.add(child);if(child.isSkinnedMesh){workerAnatomy.skinnedMeshes++;workerAnatomy.sourceTriangles+=(child.geometry.index?.count||child.geometry.attributes.position.count)/3;}});workerAnatomy.bones=bones.size;
      if(workerAnatomy.bones!==101||workerAnatomy.skinnedMeshes!==8)throw Error(`NVIDIA 人物骨架不符：${workerAnatomy.bones} bones / ${workerAnatomy.skinnedMeshes} skins`);
      if(loaded[0].value.animations?.length)warnings.push('evaluation_arm_bend 僅為原生變形測試，未播放；生產姿態與物流解析步態採實際事件驅動');
      makeProps();ready=true;loading=false;sync(config,inventory);emit();return snapshot();
    })().catch(cause=>{if(disposed)releaseShared();loading=false;ready=false;error=`NVIDIA 載入失敗：${cause?.message||cause}`;emit();throw new Error(error);});
    return loadPromise;
  }
  function releaseShared(){for(const resource of sharedResources){resource.dispose();stats.sharedResourcesDisposed++;}for(const image of sourceImages)image.close();sharedResources.clear();sourceImages.clear();}
  function dispose(){if(disposed)return;disposed=true;lastHandling=null;cartVisual?.dispose();cartVisual=null;for(const worker of [...workers.values()])removeWorker(worker);for(const prop of props.values())root.remove(prop.wrapper);props.clear();releaseShared();root.clear();ready=false;}
  return {root,load,sync,setTime,select,moveProp,snapshot,dispose};
}
