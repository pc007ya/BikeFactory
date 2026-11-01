import {agvSegmentDrive,DRIVE_PROFILE_VERSION} from './drive-profile.js';
/** G2.1 bounded mobility integration. Core clock/actions only; no renderer timers. */
import {CART_LAYOUT,makeMobilityNetworks} from './layout.js';
import {headingFor,signedAngle,turnDuration,operatorPosition,planLeg,planItinerary,POSE_VERSION,ATTACHMENT_PROFILE_VERSION} from './pose-itinerary.js';
import {isActionBlocked,projectContinuous} from './state-projection.js';
const clone=x=>structuredClone(x);
const moving=t=>t.entity==='V1'||t.entity==='CART';
const edge=(a,b)=>[a,b].sort().join('|');
export {makeMobilityNetworks};
export function initializeMobility(core){
 core.vehicle.heading=Math.PI/2;core.vehicle.travelDistanceSigned=0;
 core.cart={id:'CART',task:null,node:CART_LAYOUT.homeNode,position:[...core.networks.cart.nodes[CART_LAYOUT.homeNode]],heading:CART_LAYOUT.homeHeading,loaded:false,attachedWorker:null,accessOwner:null,state:'PARKED',operatorOffset:[...CART_LAYOUT.operatorOffset]};
 for(const a of Object.values(core.actors))a.heading=0;
 for(const m of Object.values(core.metrics.workers)){m.turn=0;m.attachDetach=0;}
 core.metrics.vehicle.turnEmpty=0;core.metrics.vehicle.turnLoaded=0;
 core.spatialLocks={['bay:cart:'+CART_LAYOUT.homeNode]:{owner:'CART',taskId:null,node:CART_LAYOUT.homeNode,network:'cart',state:'PARKED'}};
 core.mobilityVersion=POSE_VERSION;core.layoutVersion=CART_LAYOUT.version;
}
export function installMobility(Factory){
 const base=Object.fromEntries(Object.getOwnPropertyNames(Factory.prototype).filter(k=>typeof Object.getOwnPropertyDescriptor(Factory.prototype,k)?.value==='function').map(k=>[k,Factory.prototype[k]]));
 Object.assign(Factory.prototype,{
 schedule(){if(!this.paused){for(const t of this.tasks){if(t.type!=='replenish'||!t.worker||['WAITING','COMPLETED','CANCELLED'].includes(t.state))continue;const owned=this.personnel.worker(t.worker).task;if(!owned||this.now<owned.shiftEnd)continue;const returning=['return','detach','exit'].includes(t.phase),key=returning?'returnOvertimeNoted':'handlingOvertimeNoted';if(!t[key]){t[key]=true;this.commit(returning?'RETURN_OVERTIME':'SAFETY_HANDLING_EXCEPTION',{taskId:t.id,worker:t.worker,phase:t.phase,originShiftEnd:owned.shiftEnd,loaded:this.cart.loaded,reason:'Committed replenishment delayed: preserve material and resources; safely unload, park and walk to the assigned rest seat before new work',blockedActions:this.actions.filter(a=>a.payload.taskId===t.id&&this.blocked(a)).map(a=>a.id)});}}}return base.schedule.call(this);},
 dispatch(t){const seq=this.seq,effects=[...this.effects],result=base.dispatch.call(this,t);if(!result&&this.seq===seq)this.effects=effects;return result;},
 snapshot(){return {...base.snapshot.call(this),spatialLocks:clone(this.spatialLocks),mobilityVersion:this.mobilityVersion,layoutVersion:this.layoutVersion,layout:clone(CART_LAYOUT),blockedActionIds:this.actions.filter(a=>this.blocked(a)).map(a=>a.id)};},
 reservePath(t,network,from,to,speed){if(network==='human'&&this.cart.accessOwner){const plan=this.plan(network,from,to,speed),worker=t.worker||Object.entries(this.actors).find(([,a])=>a.node===from&&!a.task)?.[0];if(plan.edges.includes(edge(CART_LAYOUT.accessNode,CART_LAYOUT.accessClearNode))&&worker!==this.cart.accessOwner)return null;}return base.reservePath.call(this,t,network,from,to,speed);},
 action(type,duration,payload,priority=2){if(type==='TRAVEL'&&payload.entity!=='V1'&&payload.entity!=='CART'){payload.heading=headingFor(payload.start,payload.end);this.actors[payload.entity].heading=payload.heading;}return base.action.call(this,type,duration,payload,priority);},
 mobilityActor(entity){return entity==='V1'?this.vehicle:entity==='CART'?this.cart:this.actors[entity];},
 claimBays(t,network,nodes){const owner=t.entity;for(const node of nodes){const old=this.spatialLocks[`bay:${network}:${node}`];if(old&&old.owner!==owner)return false;}for(const node of nodes)this.spatialLocks[`bay:${network}:${node}`]={owner,taskId:t.id,node,network,state:'JOURNEY_RESERVED'};return true;},
 parkBay(t,node){for(const[key,lock]of Object.entries(this.spatialLocks))if(lock.owner===t.entity&&lock.node!==node){if(t.entity==='CART')lock.state='JOURNEY_RESERVED';else delete this.spatialLocks[key];}this.spatialLocks[`bay:${t.travelNetwork}:${node}`]={owner:t.entity,taskId:t.id,node,network:t.travelNetwork,state:'OCCUPIED'};},
 startTravel(t,entity,network,plan,after,speed){
  if(entity!=='V1'&&entity!=='CART')return base.startTravel.call(this,t,entity,network,plan,after,speed);
  t.state='WALKING';t.destination=plan.nodes.at(-1);t.travelAfter=after;t.travelNetwork=network;t.travelNodes=[...plan.nodes];t.travelIndex=0;t.travelSpeed=speed;t.entity=entity;
  if(!this.claimBays(t,network,plan.nodes))throw Error('Mobility bay reservation conflict');this.nextSegment(t);
 },
 startTurn(t,targetHeading,node){const actor=this.mobilityActor(t.entity),angle=signedAngle(actor.heading,targetHeading);if(Math.abs(angle)<1e-12)return false;
  const graph=this.networks[t.travelNetwork],conflictEdges=t.entity==='CART'?CART_LAYOUT.bays[node].conflicts.filter(k=>k.startsWith('cart:')||k.startsWith('human:')):graph.edges.filter(e=>e.includes(node)).map(e=>`${t.travelNetwork}:${edge(...e)}`),duration=turnDuration(angle,{kind:t.entity==='CART'?'cart':'agv',operatorRadius:t.entity==='CART'?Math.hypot(...CART_LAYOUT.operatorOffset):0});
  const payload={taskId:t.id,entity:t.entity,node,network:t.travelNetwork,center:[...actor.position],startHeading:actor.heading,signedAngle:angle,conflictEdges,workerId:t.entity==='CART'?t.worker:null,operatorOffset:[...CART_LAYOUT.operatorOffset],trajectoryVersion:POSE_VERSION};
  this.action('TURN',duration,payload,1);if(t.entity==='V1')actor.phase=actor.cargo?'TURN_LOADED':'TURN_EMPTY';else actor.state='TURN';this.commit(t.entity==='CART'?'CART_TURN_STARTED':'AGV_TURN_STARTED',{...payload,duration});return true;
 },
 nextSegment(t){
  if(!moving(t))return base.nextSegment.call(this,t);
  const actor=this.mobilityActor(t.entity),network=t.travelNetwork;
  if(t.travelIndex>=t.travelNodes.length-1){
   const node=t.travelNodes.at(-1),finalHeading=t.entity==='CART'&&node===CART_LAYOUT.homeNode?CART_LAYOUT.homeHeading:t.entity==='V1'?({'P-PORT':Math.PI,'A-PORT':Math.PI,'Q-PORT':Math.PI,'V-EXIT':Math.PI,'V-SCRAP':0}[node]):undefined;
   if(finalHeading!==undefined&&this.startTurn(t,finalHeading,node))return;
   actor.node=node;actor.position=[...this.networks[network].nodes[node]];this.parkBay(t,node);
   if(t.entity==='V1'&&t.travelAfter!=='pickup')this.routing.release(t.id);
   if(t.entity==='CART'){actor.state='STOPPED';this.actors[t.worker].node=node;this.actors[t.worker].position=operatorPosition(actor.position,actor.heading,CART_LAYOUT.operatorOffset);this.actors[t.worker].heading=actor.heading;}
   this.travelArrived(t);return;
  }
  const from=t.travelNodes[t.travelIndex],to=t.travelNodes[t.travelIndex+1],a=this.networks[network].nodes[from],b=this.networks[network].nodes[to];
  const drive=t.entity==='V1'?agvSegmentDrive({from,to,start:a,end:b,currentHeading:actor.heading,cargo:actor.cargo}):{heading:headingFor(a,b),driveDirection:1,reverse:false};
  if(this.startTurn(t,drive.heading,from))return;
  const duration=Math.ceil(Math.hypot(a[0]-b[0],a[1]-b[1])/t.travelSpeed*1000);actor.node=from;
  if(t.entity==='V1')actor.phase=drive.reverse?'EMPTY_REVERSE':actor.cargo?'LOADED_TRAVEL':'EMPTY_TRAVEL';else actor.state='TRAVEL';
  this.action('TRAVEL',duration,{taskId:t.id,entity:t.entity,network,from,to,start:[...a],end:[...b],heading:actor.heading,...(t.entity==='V1'?{driveProfileVersion:DRIVE_PROFILE_VERSION,driveDirection:drive.driveDirection,reverse:drive.reverse,startTravelDistanceSigned:actor.travelDistanceSigned,distance:Math.hypot(b[0]-a[0],b[1]-a[1])}:{}),workerId:t.entity==='CART'?t.worker:null,operatorOffset:[...CART_LAYOUT.operatorOffset],edge:edge(from,to)},1);
  this.commit('TRAVEL_SEGMENT_STARTED',{taskId:t.id,entity:t.entity,from,to,edge:edge(from,to),duration,...(t.entity==='V1'?{driveDirection:drive.driveDirection,reverse:drive.reverse}: {})});
 },
 travelArrived(t){if(t.type==='replenish'&&t.phase==='exit'){this.commit('WORKER_RETURNED_HB',{taskId:t.id,worker:t.worker});this.finishWorker(t);return;}return base.travelArrived.call(this,t);},
 releaseCartBays(t){for(const[key,lock]of Object.entries(this.spatialLocks))if(lock.owner==='CART'&&lock.taskId===t.id)delete this.spatialLocks[key];this.spatialLocks['bay:cart:'+CART_LAYOUT.homeNode]={owner:'CART',taskId:null,node:CART_LAYOUT.homeNode,network:'cart',state:'PARKED'};},
 cartItinerary(fromNode,supplyNode,workerId=null){const home=CART_LAYOUT.homeNode,access=CART_LAYOUT.accessNode,approach=this.plan('human',fromNode,access,1.2),out=this.plan('cart',home,supplyNode,.8),back=this.plan('cart',supplyNode,home,.8),exit=this.plan('human',access,workerId?this.personnel.breakNodeFor(workerId):'HB',1.2);
  return planItinerary({approach:{points:approach.points,speed:1.2},outbound:{points:out.points,speed:.8},returnCart:{points:back.points,speed:.8},walkHB:{points:exit.points,speed:1.2},cartHome:{node:home,position:this.networks.cart.nodes[home],heading:CART_LAYOUT.homeHeading,operatorOffset:CART_LAYOUT.operatorOffset,accessPosition:this.networks.human.nodes[access]},loadMs:this.config.cycles.replenishLoad,unloadMs:this.config.cycles.replenishUnload,attachMs:this.config.cycles.cartAttach,detachMs:this.config.cycles.cartDetach});
 },
 dispatchReplenish(t){
  if(this.cart.task)return this.wait(t,'NO_REPLENISH_CART');if(this.cart.accessOwner)return this.wait(t,'CART_ACCESS_OCCUPIED');t.supplyNode=t.material==='repair'?'C-Q':'C-P';const access=CART_LAYOUT.accessNode,itinerary=this.cartItinerary(access,t.supplyNode),duration=itinerary.workBudgetMs,choice=this.personnel.choose('LINE_REPLENISH',this.now,duration,access);
  if(!choice)return this.wait(t,'NO_ELIGIBLE_WORKER');if(!this.nodeAvailable(choice.workerId,access))return this.wait(t,'PERSON_DESTINATION_FULL');
  const p=this.reservePath(t,'human',this.actors[choice.workerId].node,access,1.2);if(!p)return this.wait(t,'WALK_ROUTE_BLOCKED');
  const owner=t.id+':cart',paths=this.routing.reservePaths(owner,'cart',[{from:CART_LAYOUT.homeNode,to:t.supplyNode,speed:.8},{from:t.supplyNode,to:CART_LAYOUT.homeNode,speed:.8}]);
  if(!paths){this.routing.release(t.id);return this.wait(t,'CART_ROUTE_BLOCKED');}
  if(!this.claimBays({...t,entity:'CART'},'cart',[...new Set(paths.flatMap(p=>p.nodes))])){this.routing.release(t.id);this.routing.release(owner);return this.wait(t,'CART_BAY_CONFLICT');}
  if(!this.inventory.reserveReplenish(t.id,t.material,t.quantity)){this.routing.release(t.id);this.routing.release(owner);this.releaseCartBays(t);return this.wait(t,'NO_SOURCE_OR_RACK_CAPACITY');}
  if(!this.personnel.reserve(choice.workerId,t.id,'LINE_REPLENISH',this.now,duration,access)){this.inventory.cancel(t.id);this.routing.release(t.id);this.routing.release(owner);this.releaseCartBays(t);return this.wait(t,'NO_ELIGIBLE_WORKER');}
  t.worker=choice.workerId;t.phase='source';t.reason=null;t.cartRouteOwner=owner;t.cartPlans=paths;t.itinerary=this.cartItinerary(this.actors[t.worker].node,t.supplyNode,t.worker);this.actors[t.worker].task=t.id;this.cart.task=t.id;this.cart.accessOwner=t.worker;this.spatialLocks['attachment:CART_HOME']={owner:t.worker,taskId:t.id,state:'ACCESS_RESERVED'};
  this.commit('REPLENISH_ASSIGNED',{taskId:t.id,worker:t.worker,material:t.material,quantity:t.quantity,itinerary:t.itinerary});this.startTravel(t,t.worker,'human',p,'replenish',1.2);return true;
 },
 beginReplenish(t){
  if(t.phase==='source'){
   if(!this.personnel.begin(t.worker,t.id,this.now)){this.personnel.cancel(t.worker,t.id,this.now);this.actors[t.worker].task=null;this.actors[t.worker].forceReturn=true;this.inventory.cancel(t.id);this.routing.release(t.cartRouteOwner);this.releaseCartBays(t);this.cart.task=null;t.worker=null;t.state='WAITING';this.wait(t,'SHIFT_RECHECK_FAILED');return true;}
   t.phase='attach';t.state='WORKING';this.cart.state='ATTACHING';this.action('CART_ATTACH',this.config.cycles.cartAttach,{profileVersion:ATTACHMENT_PROFILE_VERSION,taskId:t.id,workerId:t.worker,conflictEdges:CART_LAYOUT.bays[CART_LAYOUT.homeNode].conflicts.filter(k=>k.startsWith('cart:')||k.startsWith('human:')),start:[...this.actors[t.worker].position],end:operatorPosition(this.cart.position,this.cart.heading,CART_LAYOUT.operatorOffset),heading:this.cart.heading,startHeading:this.actors[t.worker].heading,signedAngle:signedAngle(this.actors[t.worker].heading,this.cart.heading)});this.commit('CART_ATTACH_STARTED',{taskId:t.id,worker:t.worker});return true;
  }
  if(t.phase==='delivery'){t.state='WORKING';this.cart.state='UNLOADING';this.action('REPLENISH_UNLOAD',this.config.cycles.replenishUnload,{taskId:t.id});this.commit('REPLENISH_UNLOAD_STARTED',{taskId:t.id,destination:t.supplyNode});return true;}
  if(t.phase==='return'){t.phase='detach';t.state='WORKING';this.cart.state='DETACHING';this.action('CART_DETACH',this.config.cycles.cartDetach,{profileVersion:ATTACHMENT_PROFILE_VERSION,taskId:t.id,workerId:t.worker,conflictEdges:CART_LAYOUT.bays[CART_LAYOUT.homeNode].conflicts.filter(k=>k.startsWith('cart:')||k.startsWith('human:')),start:[...this.actors[t.worker].position],end:[...this.networks.human.nodes[CART_LAYOUT.accessNode]],heading:headingFor(this.networks.human.nodes[CART_LAYOUT.accessNode],this.networks.human.nodes[CART_LAYOUT.accessClearNode]),startHeading:this.actors[t.worker].heading,signedAngle:signedAngle(this.actors[t.worker].heading,headingFor(this.networks.human.nodes[CART_LAYOUT.accessNode],this.networks.human.nodes[CART_LAYOUT.accessClearNode]))});this.commit('CART_DOCKED',{taskId:t.id,position:[...this.cart.position],heading:this.cart.heading});return true;}
  return false;
 },
 tryReplenishTravel(t){
  if(t.phase==='exit'){const p=this.reservePath(t,'human',CART_LAYOUT.accessNode,this.personnel.breakNodeFor(t.worker),1.2);if(!p)return this.wait(t,'RETURN_ROUTE_BLOCKED');t.reason=null;this.startTravel(t,t.worker,'human',p,'replenish',1.2);return true;}
  if(!['delivery','return'].includes(t.phase))return false;
  const plan=t.cartPlans[t.phase==='delivery'?0:1];t.reason=null;this.startTravel(t,'CART','cart',plan,'replenish',.8);return true;
 },
 clearIdleActors(){let changed=false;for(const[id,actor]of Object.entries(this.actors)){if(!actor.forceReturn||actor.task)continue;const candidate={id:'T'+String(this.tasks.length+1).padStart(4,'0'),worker:id},path=this.reservePath(candidate,'human',actor.node,this.personnel.breakNodeFor(id),1.2);if(!path)continue;const t=this.createTask('return',null,{key:`access-return:${id}:${this.now}`,worker:id});if(!this.personnel.reserveReturn(id,t.id,this.now)){this.routing.release(t.id);t.state='CANCELLED';continue;}actor.task=t.id;actor.forceReturn=false;this.startTravel(t,id,'human',path,'clear',1.2);changed=true;}return base.clearIdleActors.call(this)||changed;},
 blocked(a){return isActionBlocked(this.snapshotView(),a);},
 snapshotView(){return {time:this.now,paused:this.paused,jobs:this.jobs,stations:this.stations,buffers:this.buffers,actors:this.actors,vehicle:this.vehicle,cart:this.cart,tasks:this.tasks,actions:this.actions,metrics:this.metrics,personnel:{workers:this.personnel.workers},routing:{blocked:this.routing.blocked}};},
 elapse(dt){const state=this.snapshotView();projectContinuous(state,dt);this.now=state.time;},
 completeAction(a){
  const t=this.task(a.payload.taskId);
  if(a.type==='TRAVEL'&&a.payload.network==='human'&&a.payload.to===CART_LAYOUT.accessClearNode&&a.payload.from===CART_LAYOUT.accessNode&&this.cart.accessOwner===a.payload.entity){this.cart.accessOwner=null;delete this.spatialLocks['attachment:CART_HOME'];this.commit('CART_ACCESS_RELEASED',{taskId:t.id,worker:a.payload.entity,node:'ACCESS_REAR'});}
  if(a.type==='TURN'){this.actions=this.actions.filter(x=>x.id!==a.id);const actor=this.mobilityActor(a.payload.entity);actor.heading=a.payload.startHeading+a.payload.signedAngle;this.commit(a.payload.entity==='CART'?'CART_TURN_FINISHED':'AGV_TURN_FINISHED',{taskId:t.id,entity:a.payload.entity,node:a.payload.node,heading:actor.heading});this.nextSegment(t);return;}
  if(a.type==='TRAVEL'&&a.payload.entity==='CART'){this.actions=this.actions.filter(x=>x.id!==a.id);this.cart.node=a.payload.to;this.cart.position=[...a.payload.end];t.travelIndex++;this.commit('TRAVEL_SEGMENT_FINISHED',{taskId:t.id,entity:'CART',node:this.cart.node});this.nextSegment(t);return;}
  if(a.type==='CART_ATTACH'){this.actions=this.actions.filter(x=>x.id!==a.id);this.cart.attachedWorker=t.worker;this.personnel.setAttachment(t.worker,t.id,'CART');t.phase='load';this.cart.state='LOADING';this.action('REPLENISH_LOAD',this.config.cycles.replenishLoad,{taskId:t.id});this.commit('CART_ATTACHED',{taskId:t.id,worker:t.worker});return;}
  if(a.type==='REPLENISH_LOAD'){this.actions=this.actions.filter(x=>x.id!==a.id);this.inventory.pickupReplenish(t.id);this.cart.loaded=true;t.phase='delivery';t.state='WAIT_ROUTE';this.commit('REPLENISH_PICKED_UP',{taskId:t.id});this.tryReplenishTravel(t);return;}
  if(a.type==='REPLENISH_UNLOAD'){this.actions=this.actions.filter(x=>x.id!==a.id);this.inventory.deliverReplenish(t.id);this.cart.loaded=false;t.phase='return';t.state='WAIT_ROUTE';this.commit('REPLENISH_DELIVERED',{taskId:t.id,destination:t.supplyNode});this.tryReplenishTravel(t);return;}
  if(a.type==='CART_DETACH'){this.actions=this.actions.filter(x=>x.id!==a.id);this.cart.attachedWorker=null;this.cart.task=null;this.cart.state='PARKED';this.personnel.setAttachment(t.worker,t.id,null);this.actors[t.worker].node=CART_LAYOUT.accessNode;this.routing.release(t.cartRouteOwner);this.releaseCartBays(t);const lock=this.spatialLocks['bay:cart:'+CART_LAYOUT.homeNode];if(lock){lock.taskId=null;lock.state='PARKED';}t.phase='exit';t.state='WAIT_ROUTE';this.commit('CART_DETACHED',{taskId:t.id,worker:t.worker});this.tryReplenishTravel(t);return;}
  return base.completeAction.call(this,a);
 },
 replayAt(time){if(!Number.isInteger(time)||time<0||time>this.now)throw Error('Replay time outside recorded run');const e=this.events.filter(e=>e.time<=time).at(-1),s=clone(e.state),dt=time-e.time;if(dt&&!s.paused)projectContinuous(s,dt);return s;},
 diagnostics(){const d=base.diagnostics.call(this);d.mobility={cart:clone(this.cart),vehicleHeading:this.vehicle.heading,spatialLocks:clone(this.spatialLocks),blockedTurns:this.actions.filter(a=>a.type==='TURN'&&this.blocked(a)).map(a=>clone(a.payload))};return d;},
 assertInvariants(){base.assertInvariants.call(this);for(const actor of [this.cart,this.vehicle])if(!Number.isFinite(actor.heading)||!actor.position.every(Number.isFinite))throw Error('Invalid persistent mobility pose');if(this.cart.attachedWorker&&!this.actions.some(a=>a.type==='CART_DETACH')){const actor=this.actors[this.cart.attachedWorker],expected=operatorPosition(this.cart.position,this.cart.heading,CART_LAYOUT.operatorOffset);if(Math.hypot(...actor.position.map((v,i)=>v-expected[i]))>1e-8)throw Error('Detached cart handle constraint');if(actor.task!==this.cart.task)throw Error('Cart attachment owner mismatch');}for(const lock of Object.values(this.spatialLocks))if(!['CART','V1',...Object.keys(this.actors)].includes(lock.owner))throw Error('Invalid mobility bay owner');return true;}
 });
}
