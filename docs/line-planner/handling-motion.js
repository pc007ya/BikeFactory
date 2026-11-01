import {sampleLogistics,LOGISTICS_GEOMETRY,WAREHOUSE_WORKER_ID} from './logistics.js?v=fcf14d41d228';
import {compilePlantLayout,shortestAngle} from './plant-layout.js?v=fcf14d41d228';
const PI=Math.PI, clamp=x=>Math.max(0,Math.min(1,x)), smooth=x=>{x=clamp(x);return x*x*(3-2*x)}, lerp=(a,b,u)=>a+(b-a)*u, mix=(a,b,u)=>a.map((v,i)=>lerp(v,b[i],u));
const distance=(a,b)=>Math.hypot(b[0]-a[0],b[2]-a[2]), forward=h=>[Math.sin(h),0,Math.cos(h)];
const offset=(p,v,amount=1)=>p.map((x,i)=>x+v[i]*amount);
const rotate=(p,h)=>[p[0]*Math.cos(h)+p[2]*Math.sin(h),p[1],-p[0]*Math.sin(h)+p[2]*Math.cos(h)];
const neutral=(position,heading)=>({position:[...position],heading,crouch:0,grip:false,handBlend:0});
const cargo=(owner,position,heading,materialId,phase)=>({owner,position:[...position],heading,materialId,transactionState:phase==='load'?'reserved-until-load-complete':phase==='unload'?'reserved-until-unload-complete':'committed'});
function palms(payload){return {L:offset(payload.position,rotate([-.35,.19,.20],payload.heading)),R:offset(payload.position,rotate([.35,.19,.20],payload.heading))};}
function carrying(pose,materialId,phase){return cargo('handler',offset([pose.position[0],.95,pose.position[2]],forward(pose.heading),.35),pose.heading-PI,materialId,phase)}
function withHands(pose,payload,{blend=1,grip=true,contact=true}={}){return {pose:{...pose,handTargets:palms(payload),handBlend:blend,grip},contactExpected:contact&&blend===1}}

// The entire path is normalized into a slice of actual staffed phaseU. Turns
// have their own positive weight and planted-root interval, never snapped yaw.
function path(points,fromHeading,toHeading){const actions=[];let heading=fromHeading;
let position=[...points[0]];
for(let i=1;i<points.length;i++){const a=points[i-1],b=points[i],d=distance(a,b);if(d<1e-9)continue;const target=Math.atan2(b[0]-a[0],b[2]-a[2]),delta=shortestAngle(target-heading);if(Math.abs(delta)>1e-9){actions.push({kind:'turn',position:[...a],fromHeading:heading,toHeading:heading+delta,weight:Math.abs(delta)/1.2});heading+=delta}actions.push({kind:'walk',from:[...a],to:[...b],heading,weight:d/.8,distance:d});position=[...b]}
const delta=shortestAngle(toHeading-heading);if(Math.abs(delta)>1e-9){actions.push({kind:'turn',position,fromHeading:heading,toHeading:heading+delta,weight:Math.abs(delta)/1.2});heading+=delta}
return {actions,weight:actions.reduce((a,x)=>a+x.weight,0),points:points.map(p=>[...p]),fromHeading,endHeading:heading,start:[...points[0]],end:position};}
function samplePath(route,u){let w=clamp(u)*route.weight;for(let i=0;i<route.actions.length;i++){const a=route.actions[i];if(w<=a.weight||i===route.actions.length-1){const q=clamp(w/a.weight);if(a.kind==='turn')return {...neutral(a.position,lerp(a.fromHeading,a.toHeading,q)),turn:{fromHeading:a.fromHeading,toHeading:a.toHeading,u:q}};
// Match native human-motion's final trailing-foot phase exactly.
const steps=Math.max(1,Math.ceil(a.distance/.3-1e-9)),rootU=Math.min(1,q*(steps+1)/steps);return {...neutral(mix(a.from,a.to,rootU),a.heading),walk:{from:[...a.from],to:[...a.to],u:q}}}w-=a.weight}return neutral(route.end,route.endHeading)}
function landing(layout,workerId){const home=layout.stationHomes[workerId];if(!home)throw Error(`Handling: actual reserved worker ${workerId} has no station home`);
for(const heading of [-PI/2,PI/2,0,PI]){const center=offset(home,forward(heading),.55),boxHeading=heading-PI,halfX=Math.abs(Math.cos(boxHeading))*.35+Math.abs(Math.sin(boxHeading))*.27,halfZ=Math.abs(Math.sin(boxHeading))*.35+Math.abs(Math.cos(boxHeading))*.27;
// Actual schematic machine bodies fit .82 x .60 half-extents in XZ; exclude floor selection rings.
const occupied=Object.entries(layout.stationHomes).some(([id,p])=>id!==workerId&&Math.abs(center[0]-p[0])<halfX+.18&&Math.abs(center[2]-p[2])<halfZ+.18)||layout.machines.some(m=>Math.abs(center[0]-m.position[0])<halfX+.82&&Math.abs(center[2]-m.position[2])<halfZ+.60);
const approach=layout.unloadPaths[workerId]||[],pathConflict=approach.slice(1).some((b,i)=>{const a=approach[i],hx=halfX+.18,hz=halfZ+.18;if(Math.abs(a[0]-b[0])<1e-9)return Math.abs(a[0]-center[0])<hx&&Math.max(a[2],b[2])>center[2]-hz&&Math.min(a[2],b[2])<center[2]+hz;return Math.abs(a[2]-center[2])<hz&&Math.max(a[0],b[0])>center[0]-hx&&Math.min(a[0],b[0])<center[0]+hx});
if(!occupied&&!pathConflict)return {position:[center[0],.85,center[2]],heading:boxHeading,actorHeading:heading,home:[...home],workerId,deckY:.85,size:[.7,.54],support:'original planning landing bench; not an existing NVIDIA asset'};
}throw Error(`Handling: no collision-free local landing bench for ${workerId}; dense layout needs an explicit material landing area`)}
function bounds(points){if(!points.length)return null;return {min:[Math.min(...points.map(p=>p[0]))-.6,0,Math.min(...points.map(p=>p[2]))-.6],max:[Math.max(...points.map(p=>p[0]))+.6,1.9,Math.max(...points.map(p=>p[2]))+.6]}}
const progress=(u,a,b)=>smooth((u-a)/(b-a));
function stage(pose,payload,phase,contactExpected=false){return {pose,payload,phase,contactExpected}}
function loadHandling(frame,layout){const amrPosition=[frame.position[0]-.225*Math.cos(frame.heading),LOGISTICS_GEOMETRY.supportRestY+frame.lift,frame.position[2]+.225*Math.sin(frame.heading)];const u=clamp(frame.phaseU),home=layout.cartStand,source=layout.warehouseKitPosition,fromHeading=PI,route=path(layout.warehouseLoadPath,fromHeading,PI),back=path([...layout.warehouseLoadPath].reverse(),route.endHeading,PI),face=route.endHeading;
let pose=neutral(home,fromHeading),payload=cargo('warehouse',source,0,frame.materialId,'load'),phase='load-crouch',contactExpected=false;
if(u<.10){pose.crouch=.54*progress(u,0,.10)}
else if(u<.17){pose.crouch=.54;({pose,contactExpected}=withHands(pose,payload,{blend:progress(u,.10,.17),grip:false,contact:false}));phase='load-reach'}
else if(u<.19){pose.crouch=.54;({pose,contactExpected}=withHands(pose,payload));phase='load-grasp'}
else if(u<.30){const q=progress(u,.19,.30);pose.crouch=.54*(1-q);const target=carrying(neutral(home,fromHeading),frame.materialId,'load');payload=cargo('handler',mix(source,target.position,q),0,frame.materialId,'load');({pose,contactExpected}=withHands(pose,payload));phase='load-lift'}
else if(u<.55){pose=samplePath(route,(u-.30)/.25);payload=carrying(pose,frame.materialId,'load');({pose,contactExpected}=withHands(pose,payload));phase=pose.turn?'load-carry-turn':'load-carry-walk'}
else if(u<.67){const q=progress(u,.55,.67);pose=neutral(layout.pickupStand,face);pose.crouch=.54*q;const carried=carrying(pose,frame.materialId,'load');payload=cargo('handler',mix(carried.position,amrPosition,q),face-PI,frame.materialId,'load');({pose,contactExpected}=withHands(pose,payload));phase='load-lower'}
else if(u<.70){pose=neutral(layout.pickupStand,face);pose.crouch=.54;payload=cargo('amr',amrPosition,face-PI,frame.materialId,'load');({pose,contactExpected}=withHands(pose,payload,{blend:1-progress(u,.67,.70),grip:false,contact:false}));phase='load-release'}
else if(u<.78){pose=neutral(layout.pickupStand,face);pose.crouch=.54*(1-progress(u,.70,.78));payload=cargo('amr',amrPosition,face-PI,frame.materialId,'load');phase='load-rise'}
else if(u<.995){pose=samplePath(back,(u-.78)/.215);payload=cargo('amr',amrPosition,face-PI,frame.materialId,'load');phase=pose.turn?'load-return-turn':'load-return-walk'}
else {pose=neutral(home,back.endHeading);payload=cargo('amr',amrPosition,face-PI,frame.materialId,'load');phase='load-ready'}
return {...stage(pose,payload,phase,contactExpected),routes:[route,back]};}
function unloadHandling(frame,layout,workerId){const home=layout.stationHomes[workerId];if(!home)throw Error(`Handling: unload worker ${workerId} is absent from the layout`);const bench=landing(layout,workerId),toHeading=frame.heading+PI,route=path(layout.unloadPaths[workerId],PI,toHeading),back=path([...layout.unloadPaths[workerId]].reverse(),route.endHeading,bench.actorHeading),finish=path([home],back.endHeading,PI),u=clamp(frame.phaseU),face=route.endHeading;
let pose=neutral(home,PI),payload=cargo('amr',frame.payloadPosition,frame.heading,frame.materialId,'unload'),phase='unload-outward',contactExpected=false;
if(u<.25){pose=samplePath(route,u/.25);phase=pose.turn?'unload-outward-turn':'unload-outward-walk'}
else if(u<.34){pose=neutral(layout.dropStand,face);pose.crouch=.54*progress(u,.25,.34);phase='unload-crouch'}
else if(u<.40){pose=neutral(layout.dropStand,face);pose.crouch=.54;({pose,contactExpected}=withHands(pose,payload,{blend:progress(u,.34,.40),grip:false,contact:false}));phase='unload-reach'}
else if(u<.42){pose=neutral(layout.dropStand,face);pose.crouch=.54;({pose,contactExpected}=withHands(pose,payload));phase='unload-grasp'}
else if(u<.54){const q=progress(u,.42,.54);pose=neutral(layout.dropStand,face);pose.crouch=.54*(1-q);const target=carrying(pose,frame.materialId,'unload');payload=cargo('handler',mix(frame.payloadPosition,target.position,q),face-PI,frame.materialId,'unload');({pose,contactExpected}=withHands(pose,payload));phase='unload-lift'}
else if(u<.78){pose=samplePath(back,(u-.54)/.24);payload=carrying(pose,frame.materialId,'unload');({pose,contactExpected}=withHands(pose,payload));phase=pose.turn?'unload-carry-turn':'unload-carry-walk'}
else if(u<.89){const q=progress(u,.78,.89);pose=neutral(home,back.endHeading);pose.crouch=.14*q;const carried=carrying(pose,frame.materialId,'unload');payload=cargo('handler',mix(carried.position,bench.position,q),back.endHeading-PI,frame.materialId,'unload');({pose,contactExpected}=withHands(pose,payload));phase='unload-lower-bench'}
else if(u<.92){pose=neutral(home,back.endHeading);pose.crouch=.14;payload=cargo('station',bench.position,bench.heading,frame.materialId,'unload');({pose,contactExpected}=withHands(pose,payload,{blend:1-progress(u,.89,.92),grip:false,contact:false}));phase='unload-release'}
else if(u<.96){pose=neutral(home,back.endHeading);pose.crouch=.14*(1-progress(u,.92,.96));payload=cargo('station',bench.position,bench.heading,frame.materialId,'unload');phase='unload-rise'}
else if(u<.995){pose=samplePath(finish,(u-.96)/.035);payload=cargo('station',bench.position,bench.heading,frame.materialId,'unload');phase='unload-return-facing'}
else {pose=neutral(home,finish.endHeading);payload=cargo('station',bench.position,bench.heading,frame.materialId,'unload');phase='unload-ready'}
return {...stage(pose,payload,phase,contactExpected),routes:[route,back,finish],bench};}

export function sampleHandling(config,inventory,result,time){
const frame=sampleLogistics(result?.logistics,time);if(!frame)return {handlers:[],payload:{owner:'none',position:null,heading:0,materialId:null},stationPayloads:[],abstractStoredCount:0,bounds:null,pathPoints:[],landingPoints:[],warnings:[]};
const layout=result.logistics.layout||compilePlantLayout(config),warnings=[],handlers=[],pathPoints=[],landingPoints=[];
if(!layout.cartStand||!layout.warehouseKitPosition)throw Error('Handling: logistics layout lacks the measured cart staging contract');
let payload=cargo(frame.payloadOwner,frame.payloadPosition,frame.heading,frame.materialId,frame.phase),warehouse=neutral(layout.cartStand,PI);
if(frame.phase==='load'){const sampled=loadHandling(frame,layout);warehouse=sampled.pose;payload=sampled.payload;handlers.push({workerId:WAREHOUSE_WORKER_ID,stationId:null,role:'warehouse-handler',pose:warehouse,phase:sampled.phase,contactExpected:sampled.contactExpected});for(const p of sampled.routes)pathPoints.push(...p.points)}
else handlers.push({workerId:WAREHOUSE_WORKER_ID,stationId:null,role:'warehouse-handler',pose:warehouse,phase:'warehouse-idle',contactExpected:false});
if(frame.phase==='unload'){if(!frame.handlerWorkerId)throw Error('Handling: unload phase has no reserved engine worker ID');const sampled=unloadHandling(frame,layout,frame.handlerWorkerId);payload=sampled.payload;handlers.push({workerId:frame.handlerWorkerId,stationId:config.stations[0].id,role:'station-unloader',pose:sampled.pose,phase:sampled.phase,contactExpected:sampled.contactExpected});landingPoints.push(sampled.bench);for(const p of sampled.routes)pathPoints.push(...p.points)}
else if(frame.payloadOwner==='station'&&frame.materialId){const trip=result.logistics.trips.find(t=>t.materialId===frame.materialId);if(trip?.unloadWorkerId){const bench=landing(layout,trip.unloadWorkerId);payload=cargo('station',bench.position,bench.heading,frame.materialId,frame.phase);landingPoints.push(bench)}}
const started=new Set((result.events||[]).filter(e=>e.kind==='start'&&e.station===config.stations[0].id&&e.time<=time&&e.materialId).map(e=>e.materialId));
if(payload.materialId&&started.has(payload.materialId))payload={...payload,owner:'none',position:null,transactionState:'in-production'};
const pending=(result.logistics.trips||[]).filter(trip=>trip.unloadEnd!==null&&trip.unloadEnd<=time&&!started.has(trip.materialId));
const stationPayloads=pending.map((trip,index)=>{const bench=landing(layout,trip.unloadWorkerId);if(!landingPoints.some(p=>p.workerId===bench.workerId))landingPoints.push(bench);return {...cargo('station',bench.position,bench.heading,trip.materialId,'buffer'),workerId:trip.unloadWorkerId,visible:index===0,abstractStorage:index>0}});
if(!frame.materialId)payload=stationPayloads[0]||{owner:'none',position:null,heading:0,materialId:null,transactionState:'complete'};
if(frame.phase!=='unload'&&payload.owner==='station'&&stationPayloads.length)payload=stationPayloads[0];
if(stationPayloads.length>1)warnings.push(`站前等待 ${stationPayloads.length} 件：只顯示首件規劃料位，另 ${stationPayloads.length-1} 件以抽象緩衝台帳／數量呈現，尚未配置實體多料位。`);
for(const handler of handlers){if(handler.contactExpected&&!handler.pose.handTargets)throw Error(`Handling: ${handler.workerId} contact phase lacks targets`);if(handler.pose.handTargets&&handler.pose.handBlend<1)handler.contactExpected=false;}
if(frame.phase==='load'||frame.phase==='unload'){warnings.push('裝卸採實際事件 phaseU 的示範路徑；步速與轉速隨設定工時改變，尚非實測人體作業能力。接觸須以原生骨架回報的 residual/reachClamped 驗證。');if(frame.phase==='load'&&config.logistics?.loadSeconds<24||frame.phase==='unload'&&config.logistics?.unloadSeconds<30)warnings.push('工時短於目前示範路徑建議值（裝料24秒／卸料30秒），步行與轉向會被壓縮，請以現場測時校準。');}
pathPoints.push(layout.cartStand,layout.pickupStand,layout.dropStand,...landingPoints.map(p=>p.position));
return {handlers,payload,stationPayloads,abstractStoredCount:Math.max(0,stationPayloads.length-1),bounds:bounds(pathPoints),pathPoints,landingPoints,warnings,enginePhase:frame.phase,phaseU:frame.phaseU,materialId:frame.materialId,transactionState:payload.transactionState,notice:'物料所有權於引擎裝卸完成時提交；畫面抓取／放置期間是同一保留料件的交接，不另增投料。'};
}

export function plannedLandingPoints(logistics){if(!logistics?.enabled)return [];const ids=[...new Set((logistics.trips||[]).map(t=>t.unloadWorkerId).filter(Boolean))];return ids.map(id=>landing(logistics.layout,id));}

// Shared native-rig handling primitives; cart and AMR retain independent task clocks.
export {path as createHandlingPath,samplePath as sampleHandlingPath,landing as handlingLanding,carrying as handlingCarry,withHands as handlingContact};
