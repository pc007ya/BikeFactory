import {attachmentPhase} from '../slice-g2_1/pose-itinerary.js';
import {transferRoute} from './transfer-route.js';
import {transferMotion} from './transfer-motion.js';
import {STATION_ANCHORS,PRESENTATION_ASSUMPTIONS,toWorld,fixtureAnchor,bufferSlotAnchor,materialAnchor,vehicleCargoAnchor,processContactAnchors,transferControlAnchors,BOUNDARY_ANCHORS,cartHandleAnchors} from './anchors.js';
const detached=x=>structuredClone(x);
const fraction=a=>a?Math.max(0,Math.min(1,a.duration?1-a.remaining/a.duration:1)):0;
const OUT={outP:'P_OUT',outA:'A_OUT',outGood:'Q_GOOD',outScrap:'Q_SCRAP'};
const SID={prep:'P',outP:'P',loadA:'A',assembly:'A',outA:'A',loadQ:'Q',qc:'Q',rework:'Q',outGood:'Q',outScrap:'Q'};
const assembledStages=new Set(['ASSEMBLED','A_OUTPUT','Q_INPUT','Q_READY','INSPECTING','REWORK','REWORKING','REINSPECT','GOOD','SCRAP','Q_GOOD','Q_SCRAP','FG_STORED','SCRAP_STORED']);
const cargoHeading=h=>Math.atan2(Math.sin(h-Math.PI/2),Math.cos(h-Math.PI/2));
const headingOf=a=>a?.type==='TRAVEL'?Math.atan2(a.payload.end[0]-a.payload.start[0],-(a.payload.end[1]-a.payload.start[1])):0;
const handledType=t=>t&&(t.type==='loadA'||t.type==='loadQ'||Object.hasOwn(OUT,t.type));
const smoothstep=x=>{const k=Math.max(0,Math.min(1,x));return k*k*(3-2*k);};
const contactEnvelope=(progress,edge)=>Math.min(smoothstep(progress/edge),smoothstep((1-progress)/edge));
function operationFor(task,action){
 if(action?.type!=='SERVICE'||!task||!SID[task.type])return null;
 const progress=fraction(action),stationId=SID[task.type],control=handledType(task);
 if(!control&&!['prep','assembly','qc','rework'].includes(task.type))return null;
 return {mode:control?'transfer-control':'process',stationId,jobId:task.jobId,actionProgress:progress,contactWeight:contactEnvelope(progress,control ? .10 : .12),...(control?transferControlAnchors(stationId):processContactAnchors(stationId))};
}
/** Pure render projection. No dispatch, mutation, wall-clock, timers or randomness. */
export function adaptState(state){
 if(!state||!Number.isFinite(state.time))throw Error('Recorded G2 snapshot required');
 const tasks=new Map(state.tasks.map(t=>[t.id,t]));const actionFor=id=>state.actions.find(a=>a.payload.taskId===id);
 const warnings=[PRESENTATION_ASSUMPTIONS[0],PRESENTATION_ASSUMPTIONS[2]];if(!state.presentation?.slotAssignments)warnings.push(PRESENTATION_ASSUMPTIONS[1]);
 const isBlocked=a=>{if(!a)return false;if(Array.isArray(state.blockedActionIds))return state.blockedActionIds.includes(a.id);if(typeof a.blocked==='boolean')return a.blocked;const t=tasks.get(a.payload.taskId);if(a.type==='TRAVEL')return !!state.routing.blocked[a.payload.network+':'+a.payload.edge];if(a.type==='VEHICLE_LOAD'||a.type==='VEHICLE_UNLOAD')return !!state.stations[(a.type==='VEHICLE_LOAD'?t?.pick:t?.drop)?.split('-')[0]]?.interlock;if(a.type==='SERVICE'&&handledType(t))return !!state.stations[SID[t.type]]?.interlock;return false;};
 const buffers=Object.entries(state.buffers).map(([id,b])=>{
   const entries=[...b.jobs.map(jobId=>({jobId,reservedBy:null,key:jobId})),...b.reserved.map(reservedBy=>({jobId:null,reservedBy,key:tasks.get(reservedBy)?.jobId||'~'+reservedBy}))].sort((a,b)=>a.key.localeCompare(b.key));
   if(entries.length>b.capacity)throw Error('Recorded buffer exceeds capacity '+id);
   const mapping=state.presentation?.slotAssignments?.[id], assigned=new Map();
   for(const entry of entries){let index=mapping?.[entry.key];if(mapping&&(!Number.isInteger(index)||index<0||index>=b.capacity||assigned.has(index)))throw Error('Invalid presentation slot identity '+id+'/'+entry.key);if(index===undefined){index=0;while(assigned.has(index))index++;}assigned.set(index,entry);}
   return {id,capacity:b.capacity,boundaryLedger:Object.hasOwn(BOUNDARY_ANCHORS,id),occupied:b.jobs.length,reserved:b.reserved.length,slots:Array.from({length:b.capacity},(_,index)=>({index,position:bufferSlotAnchor(id,index),jobId:assigned.get(index)?.jobId||null,reservedBy:assigned.get(index)?.reservedBy||null}))};
 });
 const slotPosition=(id,jobId,taskId)=>{const b=buffers.find(b=>b.id===id);const slot=b?.slots.find(s=>s.jobId===jobId||(taskId&&s.reservedBy===taskId));if(!slot)throw Error(`No recorded slot for ${jobId}/${taskId} in ${id}`);return [...slot.position];};
 const vehicleAction=actionFor(state.vehicle.task),vehiclePosition=toWorld(state.vehicle.position);
 const vehicle={id:'V1',position:vehiclePosition,heading:Number.isFinite(state.vehicle.heading)?state.vehicle.heading:vehicleAction?.type==='TRAVEL'?headingOf(vehicleAction):(state.presentation?.headings?.V1??0),phase:state.vehicle.phase,status:state.paused?'PAUSED':isBlocked(vehicleAction)?'BLOCKED':state.vehicle.phase,cargo:state.vehicle.cargo,progress:fraction(vehicleAction),wheelPhase:(Number.isFinite(state.vehicle.travelDistanceSigned)?state.vehicle.travelDistanceSigned/.16:(state.metrics.vehicle.emptyTravel+state.metrics.vehicle.loadedTravel)/1000*.6/.16)%(Math.PI*2)};
 const locationPosition=(location,jobId,taskId)=>BOUNDARY_ANCHORS[location]?[...BOUNDARY_ANCHORS[location].exitTarget]:location==='V1'?vehicleCargoAnchor(vehicle.position):location.endsWith('_FIXTURE')?fixtureAnchor(location.split('_')[0]):slotPosition(location,jobId,taskId);
 const mechanisms=Object.entries(STATION_ANCHORS).map(([id,s])=>({id,stationId:id,actionId:null,taskId:null,jobId:null,workerId:null,type:null,portOwner:state.stations[id].port,progress:0,status:'IDLE',phase:'IDLE',hookPhase:'HOME',hookPosition:[s.position[0],2.15,-6],hookYaw:0,loaded:false}));
 const jobs=state.jobs.filter(j=>j.releasedAt!==null).map(j=>{
   const task=tasks.get(j.task),action=actionFor(j.task);let position=locationPosition(j.location,j.id,j.task),handling=false,assumedPath=false,progress=fraction(action),rotationY=j.location==='V1'?cargoHeading(vehicle.heading):0;
   const terminalUnload=action?.type==='VEHICLE_UNLOAD'&&Object.hasOwn(BOUNDARY_ANCHORS,task?.dest);
   let from,to;
   if(action?.type==='SERVICE'&&handledType(task)){
     if(task.type==='loadA'||task.type==='loadQ'){from=slotPosition(task.type==='loadA'?'A_IN':'Q_IN',j.id,j.task);to=fixtureAnchor(SID[task.type]);}
     else{from=fixtureAnchor(SID[task.type]);to=slotPosition(OUT[task.type],j.id,j.task);}
   }else if(action?.type==='VEHICLE_LOAD'){from=slotPosition(task.source,j.id,j.task);to=vehicleCargoAnchor(vehicle.position);}
   else if(action?.type==='VEHICLE_UNLOAD'){from=vehicleCargoAnchor(vehicle.position);to=terminalUnload?[...BOUNDARY_ANCHORS[task.dest].exitTarget]:slotPosition(task.dest,j.id,j.task);}
   let handlingPhase=null,pendingCommit=false;
   if(from&&to){
     handling=true;assumedPath=true;
     const cargoYaw=cargoHeading(vehicle.heading);
     if(terminalUnload){rotationY=cargoYaw;const k=smoothstep(progress);position=progress===0?[...from]:progress===1?[...to]:from.map((v,i)=>v+(to[i]-v)*k);handlingPhase='BOUNDARY_HANDOFF';pendingCommit=progress===1;}
     else{
       const stationId=action.type==='SERVICE'?SID[task.type]:(action.type==='VEHICLE_LOAD'?task.pick:task.drop).split('-')[0];
       const index=mechanisms.findIndex(m=>m.stationId===stationId);
       if(index<0)throw Error('No station mechanism '+stationId);
       if(mechanisms[index].actionId!==null)throw Error('Multiple active transfers at station '+stationId);
       const portOwner=state.stations[stationId].port;
       if(portOwner!==task.id)throw Error('Transfer lacks recorded station port ownership '+stationId+'/'+task.id);
       const fromYaw=action.type==='VEHICLE_UNLOAD'?cargoYaw:0,toYaw=action.type==='VEHICLE_LOAD'?cargoYaw:0;
       const route=transferRoute({stationId,kind:action.type,taskType:task.type,from,to,fromYaw,toYaw});
       const motion=transferMotion({stationId,kind:action.type,actionId:action.id,jobId:j.id,from,to,fromYaw,toYaw,durationMs:action.duration,progress,...route});
       mechanisms[index]={...motion,routeVersion:route.version,id:stationId,stationId,actionId:action.id,taskId:task.id,jobId:j.id,workerId:task.worker??null,type:action.type,portOwner,progress,status:state.paused?'PAUSED':isBlocked(action)?'BLOCKED':motion.phase};
       position=[...motion.trayPosition];rotationY=motion.trayYaw;handlingPhase=motion.phase;pendingCommit=motion.placedPendingCommit;
     }
   }
   const built=assembledStages.has(j.stage);const form=j.quality==='SCRAP'?'scrap':built?'bike':'kit';
   return {id:j.id,stage:j.stage,location:j.location,inSlice:!Object.hasOwn(BOUNDARY_ANCHORS,j.location),position,rotationY,progress,status:isBlocked(action)?'BLOCKED':task?.reason||task?.state||j.quality||j.stage,form,parts:{frame:true,fork:built,wheels:built,drive:built},handling,handlingPhase,pendingCommit,assumedPath};
 });
 if(new Set(jobs.map(j=>j.id)).size!==jobs.length)throw Error('Duplicate released serial');
 if(jobs.length!==state.kpi.released)throw Error('Released serial count disagrees with KPI');
 const workers=state.personnel.workers.map(w=>{const actor=state.actors[w.id];if(!actor)throw Error('Missing persistent actor '+w.id);const t=tasks.get(actor.task),a=actionFor(actor.task),operation=(()=>{const handling=['CART_ATTACH','CART_DETACH'].includes(a?.type)&&t?.worker===w.id,attached=state.cart.attachedWorker===w.id;if((handling||attached)&&Number.isFinite(state.cart.heading)){const p=fraction(a),weight=['CART_ATTACH','CART_DETACH'].includes(a?.type)?attachmentPhase(a.type,p).contactWeight:1;return {mode:'cart-handle',stationId:null,jobId:null,cartId:state.cart.id??'CART',actionProgress:p,contactWeight:weight,...cartHandleAnchors(toWorld(state.cart.position),state.cart.heading,state.layout?.handleLocalWorld??state.layout?.cart?.handleLocalWorld,state.layout?.palmRadius??state.layout?.cart?.palmRadius)};}return operationFor(t,a);})();const shift=w.shifts.some(([start,end])=>state.time>=start&&state.time<end),rest=state.time<w.availableAfterRest||w.shifts.some(([start],i)=>i>0&&state.time>=w.shifts[i-1][1]&&state.time<start);
   return {id:w.id,position:toWorld(actor.position),heading:Number.isFinite(actor.heading)?actor.heading:operation?0:a?.type==='TRAVEL'?headingOf(a):(state.presentation?.headings?.[w.id]??0),operation,actionType:a?.type||null,status:state.paused&&t?'PAUSED':isBlocked(a)?'BLOCKED':t?.reason||t?.state||(rest?'REST':shift?'AVAILABLE':'OFF_SHIFT'),taskId:actor.task,taskType:t?.type||null,progress:fraction(a),gait:a?.type==='TRAVEL'?Math.sin((state.metrics.workers[w.id]?.travel||0)/1000*6):operation?.mode==='cart-handle'&&['TURN','CART_ATTACH','CART_DETACH'].includes(a?.type)?Math.sin(fraction(a)*Math.PI*2):0,skills:[...w.skills]};});
 const stations=Object.entries(state.stations).map(([id,s])=>{const t=tasks.get(s.task),a=actionFor(s.task);return {id,position:[...STATION_ANCHORS[id].position],status:state.paused&&a?'PAUSED':s.interlock?'INTERLOCK':isBlocked(a)?'BLOCKED':a?.type==='SERVICE'?(handledType(t)?'HANDLING':'PROCESSING'):t?.reason||t?.state||(s.fixture?'WAITING':'IDLE'),actionType:a?.type||null,fixture:s.fixture,taskId:s.task,taskType:t?.type||null,progress:fraction(a),interlock:detached(s.interlock)};});
 const inv=state.inventory;
 const materials=Object.keys(inv.capacity).sort().map(id=>({id,stock:inv.stock[id],reserved:Object.values(inv.kitReservations).reduce((n,b)=>n+(b[id]||0),0),inTransit:Object.values(inv.replenishments).filter(r=>r.material===id&&r.phase==='IN_TRANSIT').reduce((n,r)=>n+r.quantity,0),held:Object.values(inv.held).reduce((n,b)=>n+(b[id]||0),0),capacity:inv.capacity[id],position:state.layout?.materialRackAnchorsCore?.[id]?toWorld(state.layout.materialRackAnchorsCore[id]):materialAnchor(id)}));
 const routes=Object.entries(state.routing.networks).flatMap(([network,g])=>g.edges.map(([a,b])=>{const key=network+':'+[a,b].sort().join('|');return {id:key,network,from:toWorld(g.nodes[a],.015),to:toWorld(g.nodes[b],.015),owner:state.routing.locks[key]||null,blocked:!!state.routing.blocked[key],reason:state.routing.blocked[key]||null};}));
 const waiting=state.tasks.filter(t=>!['COMPLETED','CANCELLED'].includes(t.state)&&(t.reason||['WAITING','WAIT_ROUTE','READY'].includes(t.state))).map(t=>({taskId:t.id,jobId:t.jobId||null,type:t.type,reason:t.reason||t.state}));
 return {time:state.time,paused:state.paused,runId:state.runId,configHash:state.configHash,kpi:detached(state.kpi),jobs,offSliceJobs:jobs.filter(j=>!j.inSlice).map(detached),workers,vehicle,mechanisms,cart:{position:toWorld(state.cart.position),heading:Number.isFinite(state.cart.heading)?state.cart.heading:workers.find(w=>w.id===tasks.get(state.cart.task)?.worker)?.heading??0,loaded:state.cart.loaded,visible:true,id:state.cart.id??'CART',bodyRoot:Number.isFinite(state.cart.heading),state:state.cart.state??(state.cart.task?'ASSIGNED':'PARKED'),status:state.paused&&state.cart.task?'PAUSED':isBlocked(actionFor(state.cart.task))?'BLOCKED':state.cart.state??(state.cart.task?'ASSIGNED':'PARKED'),phase:state.cart.state??null,taskId:state.cart.task,attachedWorker:state.cart.attachedWorker??null,operatorOffset:detached(state.cart.operatorOffset??null),material:tasks.get(state.cart.task)?.material??null,quantity:tasks.get(state.cart.task)?.quantity??0},stations,buffers,materials,routes,waiting,warnings};
}
