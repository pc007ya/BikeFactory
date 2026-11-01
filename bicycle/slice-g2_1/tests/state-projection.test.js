import {test} from 'node:test';
import assert from 'node:assert/strict';
import {isActionBlocked,projectContinuous} from '../state-projection.js';
import {attachedWorkerPose,attachmentPhase} from '../pose-itinerary.js';
function state(type='TRAVEL',entity='CART'){
 const p={taskId:'t',entity,network:'human',edge:'e',start:[0,0],end:[2,0],heading:Math.PI/2,workerId:'W1',operatorOffset:[0,1],center:[0,0],startHeading:0,signedAngle:Math.PI/2,conflictEdges:['human:e','human:f']};
 return {time:0,paused:false,tasks:[{id:'t',type:'replenish',worker:'W1'}],actors:{W1:{task:'t',position:[0,1],heading:0}},personnel:{workers:[{id:'W1',shifts:[[0,10000]],availableAfterRest:0}]},vehicle:{task:entity==='V1'?'t':null,cargo:null,position:[0,0],heading:0},cart:{task:'t',position:[0,0],heading:0,operatorOffset:[0,1],node:'CART_HOME'},routing:{blocked:{}},stations:{P:{task:null,fixture:null,interlock:false}},actions:[{type,duration:1000,remaining:1000,payload:p}],metrics:{workers:{W1:{travel:0,service:0,waiting:0,idle:0,break:0,offShift:0,overtimeTravel:0}},vehicle:{emptyTravel:0,loadedTravel:0,loading:0,unloading:0,waiting:0,idle:0},stations:{P:{service:0,transfer:0,blocked:0,idle:0}}},kpi:{released:1,good:0},buffers:{A_IN:{jobs:[],reserved:['B1']}}};
}
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-10,`${a} != ${b}`);
test('CART travel follows explicit body and rotates attached worker offset, never ordinary walking',()=>{
 const s=state();projectContinuous(s,250);assert.deepEqual(s.cart.position,[.5,0]);assert.deepEqual(s.actors.W1.position,attachedWorkerPose(s.cart.position,Math.PI/2,[0,1]).position);assert.equal(s.cart.node,'IN_TRANSIT');assert.equal(s.metrics.workers.W1.travel,250);assert.equal(s.metrics.vehicle.idle,250);assert.equal(s.time,250);
 const walking=state('TRAVEL','W1'),cart=structuredClone(walking.cart);projectContinuous(walking,500);assert.deepEqual(walking.actors.W1.position,[1,0]);assert.deepEqual(walking.cart,cart);
});
test('TURN uses smoothstep signed heading, fixed body centre and continuous operator arc',()=>{
 for(const entity of ['CART','V1']){const s=state('TURN',entity);s.vehicle.cargo='B1';projectContinuous(s,250);const body=entity==='CART'?s.cart:s.vehicle;near(body.heading,Math.PI/2*.15625);assert.deepEqual(body.position,[0,0]);assert.equal(s.actions[0].remaining,750);if(entity==='CART'){assert.deepEqual(s.actors.W1.position,attachedWorkerPose([0,0],body.heading,[0,1]).position);assert.equal(s.metrics.workers.W1.turn,250);}else assert.equal(s.metrics.vehicle.turnLoaded,250);projectContinuous(s,750);near(body.heading,Math.PI/2);}
 const empty=state('TURN','V1');projectContinuous(empty,100);assert.equal(empty.metrics.vehicle.turnEmpty,100);
});
test('any reserved TURN conflict blocks pose and remaining while counters accrue waiting',()=>{
 const s=state('TURN');s.routing.blocked['human:f']=true;assert.equal(isActionBlocked(s,s.actions[0]),true);const cart=structuredClone(s.cart),actor=structuredClone(s.actors.W1);projectContinuous(s,500);assert.deepEqual(s.cart,cart);assert.deepEqual(s.actors.W1,actor);assert.equal(s.actions[0].remaining,1000);assert.equal(s.metrics.workers.W1.waiting,500);delete s.routing.blocked['human:f'];projectContinuous(s,250);near(s.cart.heading,Math.PI/2*.15625);
 const travel=state();travel.routing.blocked['human:f']=true;assert.equal(isActionBlocked(travel,travel.actions[0]),false);travel.routing.blocked['human:e']=true;assert.equal(isActionBlocked(travel,travel.actions[0]),true);
});
test('attach/detach move only worker with smoothstep position/heading and separate time bucket',()=>{
 for(const type of ['CART_ATTACH','CART_DETACH']){const s=state(type),cart=structuredClone(s.cart);projectContinuous(s,250);const bp=attachmentPhase(type,.25).bodyProgress;assert.deepEqual(s.actors.W1.position,[2*bp,0]);near(s.actors.W1.heading,Math.PI/2*bp);assert.equal(s.metrics.workers.W1.attachDetach,250);assert.deepEqual(s.cart,cart);}
});
test('pause, replay subdivision, resource/KPI preservation and finite dt',()=>{
 const a=state('TURN'),b=structuredClone(a);projectContinuous(a,500);projectContinuous(b,250);projectContinuous(b,250);assert.deepEqual(a,b);assert.deepEqual(a.kpi,{released:1,good:0});assert.deepEqual(a.buffers,{A_IN:{jobs:[],reserved:['B1']}});
 const paused=state();paused.paused=true;const old=structuredClone(paused);projectContinuous(paused,999);assert.deepEqual(paused,old);for(const dt of [-1,NaN,Infinity])assert.throws(()=>projectContinuous(state(),dt));
});
test('original station port interlocks and service/idle metrics retain meanings',()=>{
 const s=state('SERVICE');s.tasks[0].type='outP';s.stations.P.task='t';s.stations.P.fixture='B1';projectContinuous(s,100);assert.equal(s.metrics.stations.P.transfer,100);assert.equal(s.metrics.workers.W1.service,100);s.stations.P.interlock=true;assert.equal(isActionBlocked(s,s.actions[0]),true);projectContinuous(s,100);assert.equal(s.metrics.stations.P.blocked,100);assert.equal(s.actions[0].remaining,900);
 for(const type of ['VEHICLE_LOAD','VEHICLE_UNLOAD']){const v=state(type,'V1');Object.assign(v.tasks[0],{pick:'P-PORT',drop:'A-PORT'});v.stations.A={interlock:true};v.stations.P.interlock=true;assert.equal(isActionBlocked(v,v.actions[0]),true);}
});
test('elapsed worker/vehicle/station partitions conserve time, overtime stays subset',()=>{
 const s=state();s.personnel.workers[0].shifts=[[1000,2000]];projectContinuous(s,500);assert.equal(s.metrics.workers.W1.overtimeTravel,500);near(Object.entries(s.metrics.workers.W1).filter(([k])=>k!=='overtimeTravel').reduce((n,[,v])=>n+v,0),500);near(Object.values(s.metrics.vehicle).reduce((n,v)=>n+v,0),500);near(Object.values(s.metrics.stations.P).reduce((n,v)=>n+v,0),500);
 const idle=state();idle.actions=[];idle.tasks=[];idle.actors.W1.task=null;projectContinuous(idle,200);assert.equal(idle.metrics.workers.W1.idle,200);
});

test('attach and detach freeze the reserved home access when closed',()=>{for(const type of ['CART_ATTACH','CART_DETACH']){const s=state(type);s.routing.blocked['human:f']=true;const actor=structuredClone(s.actors.W1);projectContinuous(s,500);assert.deepEqual(s.actors.W1,actor);assert.equal(s.actions[0].remaining,1000);assert.equal(s.metrics.workers.W1.waiting,500);}});
