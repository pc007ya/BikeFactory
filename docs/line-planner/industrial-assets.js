import * as THREE from './vendor/three.module.min.js';
import {GLTFLoader} from './vendor/addons/loaders/GLTFLoader.js';
import {sampleLogistics} from './logistics.js?v=fcf14d41d228';
import {createIwHubControls} from './assets/nvidia/industrial/interfaces/iwhub-controls.mjs?v=fcf14d41d228';

export const INDUSTRIAL_ASSET_INFO=Object.freeze({
  assetId:'amr:iwhub:1',payloadId:'payload:kit:1',url:'./assets/nvidia/industrial/nvidia-iwhub-runtime.glb',
  sha256:'7880e27a2d95d05c7527fd53a7d05fb7289bc3094d9cd51c6ca357bcd359bb1a',bytes:37701148,
  source:'https://omniverse-content-production.s3-us-west-2.amazonaws.com/Assets/Isaac/5.1/Isaac/Robots/Idealworks/iwhub/iw_hub.usd',
  units:'Y-up metres, original +0.081065843m ground-frame offset preserved',forward:[1,0,0],
  wheelTrack:.579259974,leftWheelRadius:.08107086549315215,rightWheelRadius:.08107071864078907,casterRadius:.06729439584997846,
  liftMaximum:.03999999910593033,cartActualDeckY:.297060997998841,
  claims:'NVIDIA visual rigid links and application event/route articulation; no traction, collision, load-capacity or stability solver. No smoke-test AnimationMixer is played.'
});
const PAD_CENTERS=[[-.55,-.28],[-.55,.28],[.1,-.28],[.1,.28]];

// The footprint and every corner of each pad are tested against actual native
// lift triangles. Neither chassis/lift bbox maxima nor manifest candidate planes
// are substituted for geometric support hits.
export function measureIwHubSupport(scene,{halfPad=.012,tolerance=.0001}={}){
  const lift=scene.getObjectByName('lift');if(!lift)throw Error('iw_hub lacks original lift link');
  scene.updateMatrixWorld(true);
  const ray=new THREE.Raycaster(),direction=new THREE.Vector3(0,-1,0).applyQuaternion(scene.getWorldQuaternion(new THREE.Quaternion()));
  const up=direction.clone().negate(),pads=[];
  for(const [x,z] of PAD_CENTERS){
    const samples=[];
    for(const dx of [-halfPad,0,halfPad])for(const dz of [-halfPad,0,halfPad]){
      ray.set(scene.localToWorld(new THREE.Vector3(x+dx,.6,z+dz)),direction);ray.near=0;ray.far=1;
      const hit=ray.intersectObject(lift,true).find(item=>{
        if(!item.face)return false;
        const normal=item.face.normal.clone().applyMatrix3(new THREE.Matrix3().getNormalMatrix(item.object.matrixWorld)).normalize();
        return normal.dot(up)>.99;
      });
      if(!hit)throw Error(`iw_hub payload support ray missed lift at ${x+dx},${z+dz}`);
      const point=scene.worldToLocal(hit.point.clone());samples.push({point:point.toArray(),faceIndex:hit.faceIndex,node:hit.object.name});
    }
    const heights=samples.map(sample=>sample.point[1]),bottomY=Math.max(...heights),minY=Math.min(...heights);
    if(bottomY-minY>tolerance)throw Error('iw_hub support pad is not sufficiently coplanar');
    pads.push({x,z,bottomY,halfPad,samples,maxGap:bottomY-minY});
  }
  const supportOriginY=Math.max(...pads.map(pad=>pad.bottomY));
  return {method:'36 actual triangle rays over four 24mm support pads',pads,supportOriginY,tolerance,rayCount:36,allHits:true,stableLoadClaim:false};
}

function shortAngle(delta){return Math.atan2(Math.sin(delta),Math.cos(delta));}
// Fallback for plain recorded route samples. Prefer the simulation sampler passed
// to createIndustrialAssets so phase ownership/timing remains engine-authoritative.
export function sampleIndustrialTrace(logistics,time){
  const frames=logistics?.frames||logistics?.trace;if(!Array.isArray(frames)||!frames.length)return null;
  const valid=frames.filter(frame=>Number.isFinite(frame.time)&&Array.isArray(frame.position)&&frame.position.length===3&&frame.position.every(Number.isFinite));
  if(!valid.length)return null;
  const sorted=[...valid].sort((a,b)=>a.time-b.time),first=sorted[0];
  let state={...first,position:[...first.position],heading:Number(first.heading)||0,leftDistance:Number(first.leftDistance)||0,rightDistance:Number(first.rightDistance)||0,leftCasterDistance:0,rightCasterDistance:0,leftCasterYaw:0,rightCasterYaw:0};
  for(let i=1;i<sorted.length;i++){
    const a=sorted[i-1],b=sorted[i];if(time<a.time)break;
    const duration=b.time-a.time,fraction=duration>0?THREE.MathUtils.clamp((time-a.time)/duration,0,1):time>=b.time?1:0;
    if(fraction<=0)break;
    const dh=shortAngle((Number(b.heading)||0)-(Number(a.heading)||0));
    const dx=b.position[0]-a.position[0],dz=b.position[2]-a.position[2],heading=(Number(a.heading)||0)+dh/2;
    const geometricDistance=Math.hypot(dx,dz)*(dx*Math.cos(heading)-dz*Math.sin(heading)<0?-1:1);
    const ds=Number.isFinite(a.distance)&&Number.isFinite(b.distance)?b.distance-a.distance:geometricDistance;
    const leftDelta=Number.isFinite(a.leftDistance)&&Number.isFinite(b.leftDistance)?b.leftDistance-a.leftDistance:ds-INDUSTRIAL_ASSET_INFO.wheelTrack*dh/2;
    const rightDelta=Number.isFinite(a.rightDistance)&&Number.isFinite(b.rightDistance)?b.rightDistance-a.rightDistance:ds+INDUSTRIAL_ASSET_INFO.wheelTrack*dh/2;
    state.leftDistance+=leftDelta*fraction;state.rightDistance+=rightDelta*fraction;
    for(const [side,z] of [['left',-.0934799936],['right',.0934799936]]){
      const vx=ds+dh*z,vz=-dh*(-.6772199861),travel=Math.hypot(vx,vz);
      if(travel>1e-12)state[`${side}CasterYaw`]=-Math.atan2(vz,vx);
      state[`${side}CasterDistance`]+=travel*fraction;
    }
    const owner=fraction>=1?b:a;
    state={...state,...owner,position:a.position.map((value,k)=>value+(b.position[k]-value)*fraction),heading:(Number(a.heading)||0)+dh*fraction,lift:(Number(a.lift)||0)+((Number(b.lift)||0)-(Number(a.lift)||0))*fraction,leftDistance:state.leftDistance,rightDistance:state.rightDistance,leftCasterDistance:state.leftCasterDistance,rightCasterDistance:state.rightCasterDistance,leftCasterYaw:state.leftCasterYaw,rightCasterYaw:state.rightCasterYaw};
    if(Array.isArray(a.payloadPosition)&&Array.isArray(b.payloadPosition)&&a.payloadOwner===b.payloadOwner)state.payloadPosition=a.payloadPosition.map((value,k)=>value+(b.payloadPosition[k]-value)*fraction);
    if(fraction<1)break;
  }
  return state;
}

export function createIndustrialAssets({onChange=()=>{},loader=new GLTFLoader(),url=INDUSTRIAL_ASSET_INFO.url,sampleTransport=null}={}){
  const root=new THREE.Group();root.name='industrial-transport-assets';
  const vehicle=new THREE.Group();vehicle.name=INDUSTRIAL_ASSET_INFO.assetId;vehicle.userData={kind:'amr',assetId:INDUSTRIAL_ASSET_INFO.assetId,amrId:INDUSTRIAL_ASSET_INFO.assetId,source:'NVIDIA Idealworks iw_hub'};root.add(vehicle);
  let ready=false,loading=false,error=null,disposed=false,promise=null,model=null,controls=null,support=null,payload=null,payloadAttachment=null,proxy=null,waitingPayload=null;
  let waitingInfo={abstractCount:0,totalPending:0,representedByPrimary:false};
  let config={stations:[]},inventory={stations:[],machines:[]},time=0,result=null,state=null,selection=null,configSignature='',linkNames=[];
  const resources=new Set(),images=new Set(),stats={loads:0,disposedResources:0};
  const own=resource=>{resources.add(resource);return resource;};
  const emit=()=>{if(!disposed)onChange(snapshot());};
  function capture(object){object.traverse(child=>{if(child.geometry)resources.add(child.geometry);for(const material of Array.isArray(child.material)?child.material:[child.material]){if(!material)continue;resources.add(material);for(const value of Object.values(material))if(value?.isTexture){resources.add(value);if(value.source?.data?.close)images.add(value.source.data);}}});}
  function tag(object,data){object.traverse(child=>{child.userData={...child.userData,...data};if(child.isMesh){child.castShadow=true;child.receiveShadow=true;}});}
  function box(parent,size,position,color,data){const mesh=new THREE.Mesh(own(new THREE.BoxGeometry(...size)),own(new THREE.MeshStandardMaterial({color,roughness:.7,metalness:.05})));mesh.position.set(...position);mesh.userData=data;mesh.castShadow=true;mesh.receiveShadow=true;parent.add(mesh);return mesh;}
  function buildPayload(){
    payload=new THREE.Group();payload.name=INDUSTRIAL_ASSET_INFO.payloadId;payload.userData={kind:'payload',payloadId:INDUSTRIAL_ASSET_INFO.payloadId,projectOriginal:true};
    const origin=support.supportOriginY,centerX=-.225;
    for(const pad of support.pads){const top=origin+.03,height=top-pad.bottomY;box(payload,[pad.halfPad*2,height,pad.halfPad*2],[pad.x-centerX,(pad.bottomY+top)/2-origin,pad.z],0x233137,{...payload.userData,part:'support-pad',contactBottomY:pad.bottomY});}
    box(payload,[.79,.04,.62],[0,.05,0],0x437f91,{...payload.userData,part:'tray'});
    box(payload,[.70,.24,.54],[0,.19,0],0xbda37a,{...payload.userData,part:'kit-container'});
    box(payload,[.035,.003,.545],[0,.311,0],0xeadab8,{...payload.userData,part:'seal'});
    payload.position.set(centerX,origin,0);vehicle.add(payload);root.updateMatrixWorld(true);
    controls.joints.lift.node.attach(payload);
    payloadAttachment={position:payload.position.clone(),quaternion:payload.quaternion.clone(),scale:payload.scale.clone()};
    payload.visible=false;
    waitingPayload=payload.clone(true);waitingPayload.name='payload:buffer:1';waitingPayload.position.set(0,0,0);waitingPayload.quaternion.identity();waitingPayload.scale.set(1,1,1);waitingPayload.visible=false;
    tag(waitingPayload,{kind:'payload',payloadId:'payload:buffer:1',projectOriginal:true,owner:'station',materialId:null});root.add(waitingPayload);
  }
  function sync(nextConfig,nextInventory){if(nextConfig){const signature=JSON.stringify(nextConfig);if(signature!==configSignature){result=null;configSignature=signature;}config=nextConfig;}if(nextInventory)inventory=nextInventory;setTime(time,result);return snapshot();}
  function updateOdometry(frame){
    controls.setAngle('left_wheel',(Number(frame.leftDistance)||0)/INDUSTRIAL_ASSET_INFO.leftWheelRadius);
    controls.setAngle('right_wheel',(Number(frame.rightDistance)||0)/INDUSTRIAL_ASSET_INFO.rightWheelRadius);
    controls.setAngle('left_caster',(Number(frame.leftCasterDistance)||0)/INDUSTRIAL_ASSET_INFO.casterRadius);
    controls.setAngle('right_caster',(Number(frame.rightCasterDistance)||0)/INDUSTRIAL_ASSET_INFO.casterRadius);
    controls.setAngle('left_swivel',Number(frame.leftCasterYaw)||0);controls.setAngle('right_swivel',Number(frame.rightCasterYaw)||0);
    controls.setLift(Number(frame.lift)||0);
  }
  function setTime(seconds,nextResult){
    time=Math.max(0,Number(seconds)||0);result=nextResult||null;if(!ready)return snapshot();
    state=sampleTransport?sampleTransport(time,result):result?.logistics?.segments?sampleLogistics(result.logistics,time):sampleIndustrialTrace(result?.logistics,time);
    if(!state){controls.reset();vehicle.position.set(inventory.stations?.[0]?.position?.[0]||0,0,-3);vehicle.rotation.y=0;payload.visible=false;payload.userData={...payload.userData,owner:'none',materialId:null};waitingPayload.visible=false;waitingPayload.userData.materialId=null;waitingInfo={abstractCount:0,totalPending:0,representedByPrimary:false};root.updateMatrixWorld(true);return snapshot();}
    vehicle.position.fromArray(state.position);vehicle.rotation.y=Number(state.heading)||0;updateOdometry(state);
    const owner=state.payloadOwner||(state.loaded?'amr':'none');
    const materialId=Object.hasOwn(state,'payloadMaterialId')?state.payloadMaterialId:state.materialId??null;
    payload.visible=owner!=='none';
    if(owner==='amr'){
      if(payload.parent!==controls.joints.lift.node)controls.joints.lift.node.attach(payload);
      payload.position.copy(payloadAttachment.position);payload.quaternion.copy(payloadAttachment.quaternion);payload.scale.copy(payloadAttachment.scale);
    }else if(payload.visible&&Array.isArray(state.payloadPosition)){
      if(payload.parent!==root)root.attach(payload);payload.position.fromArray(state.payloadPosition);payload.rotation.set(0,Number(state.payloadHeading)||0,0);payload.scale.set(1,1,1);
    }else payload.visible=false; // no invented handoff/position if the engine has not supplied it
    payload.userData={...payload.userData,owner,materialId,tripId:state.tripId??null};
    vehicle.userData.phase=state.phase||null;tag(model,{kind:'amr',assetId:INDUSTRIAL_ASSET_INFO.assetId,amrId:INDUSTRIAL_ASSET_INFO.assetId,phase:state.phase||null});
    tag(payload,{kind:'payload',payloadId:INDUSTRIAL_ASSET_INFO.payloadId,projectOriginal:true,owner,materialId,tripId:state.tripId??null});
    const pending=Array.isArray(state.stationPayloads)?state.stationPayloads:[];
    const visiblePending=pending.find(item=>item.visible!==false&&!item.abstractStorage&&item.materialId!=null&&Array.isArray(item.position)&&item.position.length===3&&item.position.every(Number.isFinite));
    const representedByPrimary=!!visiblePending&&payload.visible&&visiblePending.materialId===materialId;
    waitingInfo={totalPending:pending.length,abstractCount:Number.isInteger(state.abstractStoredCount)?Math.max(0,state.abstractStoredCount):pending.filter(item=>item.abstractStorage).length,representedByPrimary};
    waitingPayload.visible=!!visiblePending&&!representedByPrimary;
    if(waitingPayload.visible){waitingPayload.position.fromArray(visiblePending.position);waitingPayload.rotation.set(0,Number(visiblePending.heading)||0,0);tag(waitingPayload,{kind:'payload',payloadId:'payload:buffer:1',projectOriginal:true,owner:'station',materialId:visiblePending.materialId,tripId:visiblePending.tripId??null});}
    else waitingPayload.userData.materialId=null;
    root.updateMatrixWorld(true);return snapshot();
  }
  function select(entity){selection=entity?{...entity}:null;vehicle.userData.selected=(selection?.assetId||selection?.amrId)===INDUSTRIAL_ASSET_INFO.assetId;if(payload)payload.userData.selected=selection?.payloadId===INDUSTRIAL_ASSET_INFO.payloadId;if(waitingPayload)waitingPayload.userData.selected=selection?.payloadId==='payload:buffer:1';return snapshot();}
  function snapshot(){
    const angles={};if(controls)for(const [name,joint] of Object.entries(controls.joints))angles[name]={axis:joint.axis.toArray(),position:joint.node.position.toArray(),quaternion:joint.node.quaternion.toArray()};
    return {ready,loading,error,time,assetId:INDUSTRIAL_ASSET_INFO.assetId,amrId:INDUSTRIAL_ASSET_INFO.assetId,source:INDUSTRIAL_ASSET_INFO.source,position:vehicle.position.toArray(),heading:vehicle.rotation.y,state:state?structuredClone(state):null,selected:selection,links:ready?linkNames.length:0,linkNames:[...linkNames],joints:angles,support:support?structuredClone(support):null,payload:{payloadId:INDUSTRIAL_ASSET_INFO.payloadId,nativeSupportOrigin:support?[-.225,support.supportOriginY,0]:null,visible:!!payload?.visible,owner:payload?.userData.owner||'none',materialId:payload?.userData.materialId??null,tripId:payload?.userData.tripId??null,worldPosition:payload?payload.getWorldPosition(new THREE.Vector3()).toArray():null},waitingPayload:{payloadId:'payload:buffer:1',visible:!!waitingPayload?.visible,materialId:waitingPayload?.userData.materialId??null,worldPosition:waitingPayload?waitingPayload.getWorldPosition(new THREE.Vector3()).toArray():null,heading:waitingPayload?.rotation.y??0,...waitingInfo},collision:{visible:false,executed:false,semantics:'separate project-original envelope proxy, not NVIDIA collision geometry or a contact solver'},stats:{...stats,resources:resources.size,smokeAnimationPlayed:false},claims:INDUSTRIAL_ASSET_INFO.claims};
  }
  function release(){for(const resource of resources){resource.dispose();stats.disposedResources++;}for(const image of images)image.close();resources.clear();images.clear();}
  function load(){
    if(promise)return promise;loading=true;emit();stats.loads++;
    promise=(async()=>{
      const loaded=await loader.loadAsync(url);capture(loaded.scene);if(disposed)throw Error('Industrial assets disposed during load');
      model=loaded.scene;linkNames=['chassis','left_wheel','right_wheel','left_swivel','right_swivel','left_caster','right_caster','lift'];for(const name of linkNames)if(!model.getObjectByName(name))throw Error(`Missing original iw_hub link ${name}`);controls=createIwHubControls(THREE,model);vehicle.add(model);tag(model,{kind:'amr',assetId:INDUSTRIAL_ASSET_INFO.assetId,amrId:INDUSTRIAL_ASSET_INFO.assetId,source:'NVIDIA Idealworks iw_hub'});
      root.updateMatrixWorld(true);support=measureIwHubSupport(model);buildPayload();
      proxy=box(vehicle,[1.44,.24,.67],[-.317,.12,0],0xffa366,{kind:'collision-proxy',assetId:INDUSTRIAL_ASSET_INFO.assetId,excludeGeometryBounds:true});proxy.visible=false;
      ready=true;loading=false;sync(config,inventory);emit();return snapshot();
    })().catch(cause=>{loading=false;ready=false;error=`Industrial asset load failed: ${cause?.message||cause}`;if(disposed)release();emit();throw Error(error);});return promise;
  }
  function dispose(){if(disposed)return;disposed=true;release();root.clear();if(payload)payload.visible=false;if(waitingPayload){waitingPayload.visible=false;waitingPayload.userData.materialId=null;}waitingInfo={abstractCount:0,totalPending:0,representedByPrimary:false};state=null;ready=false;loading=false;}
  return {root,load,sync,setTime,snapshot,dispose,select};
}
