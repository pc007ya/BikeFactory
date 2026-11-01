/** Shared G2.1 continuous projection. Mutates only a supplied detached state.
 * Caller must split at events/shift boundaries; no dispatch, completion, ownership,
 * inventory, quality sampling, KPI commit or event generation occurs here.
 */
import {sampleTurn,attachedWorkerPose,attachmentPhase} from './pose-itinerary.js';
const STATION={prep:'P',outP:'P',loadA:'A',assembly:'A',outA:'A',loadQ:'Q',qc:'Q',rework:'Q',outGood:'Q',outScrap:'Q'};
const HANDLING=new Set(['loadA','loadQ','outP','outA','outGood','outScrap']);
const taskFor=(s,a)=>s.tasks.find(t=>t.id===a?.payload.taskId);
export function isActionBlocked(s,a){
 if(!a)return false;
 const p=a.payload;
 if(a.type==='TRAVEL')return !!s.routing.blocked[`${p.network}:${p.edge}`];
 if(['TURN','CART_ATTACH','CART_DETACH'].includes(a.type))return (p.conflictEdges??[]).some(edge=>!!s.routing.blocked[edge]);
 const task=taskFor(s,a);if(!task)return false;
 if(a.type==='VEHICLE_LOAD'||a.type==='VEHICLE_UNLOAD')return !!s.stations[(a.type==='VEHICLE_LOAD'?task.pick:task.drop).split('-')[0]]?.interlock;
 if(a.type==='SERVICE'&&HANDLING.has(task.type))return !!s.stations[STATION[task.type]]?.interlock;
 return false;
}
const add=(m,key,dt)=>{m[key]=(m[key]??0)+dt;};
const lerp=(a,b,k)=>a.map((v,i)=>v+(b[i]-v)*k);
function attachPose(s,p,body){
 const task=taskFor(s,{payload:p}),workerId=p.workerId??task?.worker;
 const offset=p.operatorOffset??s.cart.operatorOffset;
 if(!workerId||!s.actors[workerId]||!offset)throw Error('CART motion requires worker and operatorOffset');
 Object.assign(s.actors[workerId],attachedWorkerPose(body.position,body.heading,offset));
}
export function projectContinuous(s,dt){
 if(!Number.isFinite(dt)||dt<0||!Number.isFinite(s.time))throw new RangeError('Finite nonnegative dt and state.time required');
 if(!dt||s.paused)return s;
 // Counter buckets partition elapsed time; overtimeTravel is an overlapping subset.
 for(const[id,m]of Object.entries(s.metrics.workers)){
  m.turn??=0;m.attachDetach??=0;
  const actor=s.actors[id],task=s.tasks.find(t=>t.id===actor.task),action=s.actions.find(a=>a.payload.taskId===task?.id),worker=s.personnel.workers.find(w=>w.id===id);
  const on=worker.shifts.some(([a,b])=>s.time>=a&&s.time<b),moving=action&&!isActionBlocked(s,action);
  if(task&&action?.type==='TRAVEL'&&moving){add(m,'travel',dt);if(!on)add(m,'overtimeTravel',dt);}
  else if(task&&action?.type==='TURN'&&moving)add(m,'turn',dt);
  else if(task&&['CART_ATTACH','CART_DETACH'].includes(action?.type)&&moving)add(m,'attachDetach',dt);
  else if(task&&['SERVICE','REPLENISH_LOAD','REPLENISH_UNLOAD'].includes(action?.type)&&moving)add(m,'service',dt);
  else if(task)add(m,'waiting',dt);
  else {const rest=s.time<worker.availableAfterRest||worker.shifts.some((v,i)=>i>0&&s.time>=worker.shifts[i-1][1]&&s.time<v[0]);add(m,rest?'break':on?'idle':'offShift',dt);}
 }
 const va=s.actions.find(a=>a.payload.taskId===s.vehicle.task),v=s.metrics.vehicle;
 v.turnEmpty??=0;v.turnLoaded??=0;
 if(va?.type==='TRAVEL'&&!isActionBlocked(s,va))add(v,s.vehicle.cargo?'loadedTravel':'emptyTravel',dt);
 else if(va?.type==='TURN'&&!isActionBlocked(s,va))add(v,s.vehicle.cargo?'turnLoaded':'turnEmpty',dt);
 else if(va?.type==='VEHICLE_LOAD'&&!isActionBlocked(s,va))add(v,'loading',dt);
 else if(va?.type==='VEHICLE_UNLOAD'&&!isActionBlocked(s,va))add(v,'unloading',dt);
 else add(v,s.vehicle.task?'waiting':'idle',dt);
 for(const[id,station]of Object.entries(s.stations)){
  const task=s.tasks.find(t=>t.id===station.task),action=s.actions.find(a=>a.payload.taskId===task?.id),m=s.metrics.stations[id];
  if(action?.type==='SERVICE'&&!isActionBlocked(s,action))add(m,['prep','assembly','qc','rework'].includes(task.type)?'service':'transfer',dt);
  else add(m,station.fixture?'blocked':'idle',dt);
 }
 for(const action of s.actions){
  if(isActionBlocked(s,action))continue;
  action.remaining=Math.max(0,action.remaining-dt);
  const p=action.payload,k=action.duration?Math.max(0,Math.min(1,1-action.remaining/action.duration)):1;
  if(action.type==='TRAVEL'){
   const body=p.entity==='V1'?s.vehicle:p.entity==='CART'?s.cart:s.actors[p.entity];
   body.position=lerp(p.start,p.end,k);if(Number.isFinite(p.heading))body.heading=p.heading;
   if(p.entity==='V1'&&[p.startTravelDistanceSigned,p.distance,p.driveDirection].some(v=>v!==undefined)){
    if(!Number.isFinite(p.startTravelDistanceSigned)||!Number.isFinite(p.distance)||p.distance<0||![1,-1].includes(p.driveDirection))throw Error('Invalid signed AGV travel odometer payload');
    body.travelDistanceSigned=p.startTravelDistanceSigned+k*p.distance*p.driveDirection;
   }
   if(p.entity==='CART'){s.cart.node='IN_TRANSIT';attachPose(s,p,body);}
  }else if(action.type==='TURN'){
   if(!['V1','CART'].includes(p.entity))throw Error('TURN entity must be V1 or CART');
   const body=p.entity==='V1'?s.vehicle:s.cart;
   body.position=[...p.center];body.heading=sampleTurn(p.startHeading,p.signedAngle,k);
   if(p.entity==='CART')attachPose(s,p,body);
  }else if(['CART_ATTACH','CART_DETACH'].includes(action.type)){
   const actor=s.actors[p.workerId];if(!actor)throw Error('Attach/detach worker missing');
   const phase=attachmentPhase(action.type,k);actor.position=lerp(p.start,p.end,phase.bodyProgress);actor.heading=Number.isFinite(p.startHeading)&&Number.isFinite(p.signedAngle)?p.startHeading+p.signedAngle*phase.bodyProgress:p.heading;
  }
 }
 s.time+=dt;return s;
}
