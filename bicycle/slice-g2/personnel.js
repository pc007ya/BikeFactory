/** Finite personnel resources. Synthetic planning only; no timers, RNG or route locks. */
const copy = value => structuredClone(value);
const validTime = value => Number.isSafeInteger(value) && value >= 0;
export class Personnel {
  constructor(config, emit = () => {}) {
    this.config = config;
    this.emit = emit;
    this.speed = config.speed ?? 1.2;
    this.breakNode = config.breakNode ?? 'HB';
    if (!(Number.isFinite(this.speed) && this.speed > 0)) throw Error('Invalid walking speed');
    this.workers = (config.workers ?? []).map(w => ({id:w.id, skills:[...w.skills], node:w.node,
      shifts:copy(w.shifts), task:null, lastShiftIndex:null, restedThroughShift:-1,
      availableAfterRest:0, history:[{at:0,state:'AVAILABLE'}]}));
    this.assertInvariants();
  }
  worker(id) { const w=this.workers.find(w=>w.id===id); if (!w) throw Error(`Unknown worker ${id}`); return w; }
  shiftAt(w, now) { return w.shifts.findIndex(([start,end])=>now>=start && now<end); }
  isBreak(w, now) { return w.shifts.some((s,i)=>i>0 && now>=w.shifts[i-1][1] && now<s[0]); }
  path(from,to) {
    if (from===to) return {nodes:[from],distance:0,durationMs:0};
    if (this.config.plan) { const p=this.config.plan(from,to,this.speed); return p ? {...p,durationMs:Math.ceil(p.durationMs)} : null; }
    const graph=this.config.graph;
    if (!graph?.nodes?.[from] || !graph?.nodes?.[to]) return null;
    const distance=new Map([[from,0]]), previous=new Map(), unvisited=new Set(Object.keys(graph.nodes));
    while (unvisited.size) {
      const current=[...unvisited].sort((a,b)=>(distance.get(a)??Infinity)-(distance.get(b)??Infinity)||a.localeCompare(b))[0];
      if (!Number.isFinite(distance.get(current))) break;
      if (current===to) break;
      unvisited.delete(current);
      for (const edge of graph.edges) {
        const [a,b]=Array.isArray(edge)?edge:[edge.from,edge.to];
        const next=a===current?b:b===current?a:null;
        if (!next || !unvisited.has(next)) continue;
        const pa=graph.nodes[current],pb=graph.nodes[next];
        const length=Math.hypot((pa.x??pa[0])-(pb.x??pb[0]),(pa.y??pa[1])-(pb.y??pb[1]));
        const candidate=distance.get(current)+length;
        if (candidate<(distance.get(next)??Infinity)) {distance.set(next,candidate);previous.set(next,current);}
      }
    }
    if (!distance.has(to)) return null;
    const nodes=[to]; while(nodes[0]!==from) nodes.unshift(previous.get(nodes[0]));
    return {nodes,distance:distance.get(to),durationMs:Math.ceil(distance.get(to)/this.speed*1000)};
  }
  reason(w,skill,now,durationMs,targetNode) {
    if (!validTime(now)||!validTime(durationMs)) throw Error('Integer millisecond time required');
    if (w.task) return {reason:'WORKER_BUSY'};
    if(now<w.availableAfterRest)return {reason:'REST_REQUIRED',availableAfterRest:w.availableAfterRest};
    if (!w.skills.includes(skill)) return {reason:'NO_SKILL'};
    const shiftIndex=this.shiftAt(w,now);
    if (shiftIndex<0) return {reason:this.isBreak(w,now)?'BREAK':'OFF_SHIFT'};
    if (w.lastShiftIndex!==null && shiftIndex>w.lastShiftIndex && w.restedThroughShift<w.lastShiftIndex && w.node!==this.breakNode) return {reason:'RETURN_REQUIRED'};
    const travel=this.path(w.node,targetNode),back=this.path(targetNode,this.breakNode);
    if (!travel||!back) return {reason:'NO_HUMAN_PATH'};
    if (now+travel.durationMs+durationMs+back.durationMs>w.shifts[shiftIndex][1]) return {reason:'INSUFFICIENT_SHIFT',travelMs:travel.durationMs,returnMs:back.durationMs};
    return {reason:null,workerId:w.id,travelMs:travel.durationMs,returnMs:back.durationMs,shiftIndex};
  }
  diagnostics(skill,now,durationMs,targetNode) {return this.workers.map(w=>({workerId:w.id,...this.reason(w,skill,now,durationMs,targetNode)}));}
  choose(skill,now,durationMs,targetNode) {
    const choices=this.diagnostics(skill,now,durationMs,targetNode).filter(c=>c.reason===null).sort((a,b)=>a.travelMs-b.travelMs||a.workerId.localeCompare(b.workerId));
    if (!choices.length) return null;
    const {workerId,travelMs,returnMs}=choices[0]; return {workerId,travelMs,returnMs};
  }
  transition(w,state,now) {
    if (!validTime(now)||now<w.history.at(-1).at) throw Error('Nonmonotonic personnel time');
    w.history.push({at:now,state});
  }
  reserve(workerId,taskId,skill,now,durationMs,targetNode) {
    const w=this.worker(workerId), eligibility=this.reason(w,skill,now,durationMs,targetNode);
    if (eligibility.reason || this.workers.some(w=>w.task?.id===taskId)) return false;
    if (typeof taskId!=='string'||!taskId) throw Error('Task ID required');
    this.transition(w,'RESERVED',now);
    w.lastShiftIndex=eligibility.shiftIndex;
    w.task={id:taskId,kind:'WORK',skill,targetNode,state:'RESERVED',durationMs,reservedAt:now,
      travelMs:eligibility.travelMs,plannedArrivalAt:now+eligibility.travelMs,shiftIndex:eligibility.shiftIndex,shiftEnd:w.shifts[eligibility.shiftIndex][1],returnMs:eligibility.returnMs};
    this.emit('WORKER_RESERVED',{workerId,taskId,skill,targetNode,...eligibility}); return true;
  }
  owned(workerId,taskId) {const w=this.worker(workerId);if(w.task?.id!==taskId) throw Error(`Worker owner mismatch ${workerId}/${taskId}`);return w;}
  depart(workerId,taskId,now) {const w=this.owned(workerId,taskId);if(!['RESERVED','WAIT_ROUTE'].includes(w.task.state)) throw Error('Worker cannot depart');this.transition(w,w.task.kind==='RETURN'?'RETURNING':'WALKING',now);w.task.state=w.task.kind==='RETURN'?'RETURNING':'WALKING';w.task.departedAt=now;w.task.plannedArrivalAt=now+w.task.travelMs;this.emit('WORKER_DEPARTED',{workerId,taskId,from:w.node,to:w.task.targetNode});}
  waitRoute(workerId,taskId,now) {const w=this.owned(workerId,taskId);if(!['RESERVED','WAIT_ROUTE'].includes(w.task.state))throw Error('Only unstarted movement may wait here');this.transition(w,'WAIT_ROUTE',now);w.task.state='WAIT_ROUTE';}
  arrive(workerId,taskId,node,now) {
    const w=this.owned(workerId,taskId),t=w.task; now??=t.plannedArrivalAt;
    if (node!==t.targetNode || !['RESERVED','WAIT_ROUTE','WALKING','RETURNING'].includes(t.state)) throw Error('Unexpected worker arrival');
    if(now<t.plannedArrivalAt)throw Error('Worker arrived before travel elapsed');
    this.transition(w,'READY',now);w.node=node;t.arrivedAt=now;t.state='READY';
    if(t.kind==='RETURN'){w.restedThroughShift=Math.max(w.restedThroughShift,t.originShiftIndex??-1);const previous=w.shifts[t.originShiftIndex],next=w.shifts[(t.originShiftIndex??-2)+1];if(previous&&next){const breakDuration=next[0]-previous[1];w.availableAfterRest=Math.max(w.availableAfterRest,Math.max(now,previous[1])+breakDuration);}}
    this.emit('WORKER_ARRIVED',{workerId,taskId,node});
  }
  begin(workerId,taskId,now) {
    const w=this.owned(workerId,taskId),t=w.task;now??=t.arrivedAt;
    if(t.kind!=='WORK'||t.state!=='READY')throw Error('Worker must arrive before service');
    if(!validTime(now))throw Error('Service start time required');
    const back=this.path(w.node,this.breakNode);
    if(this.shiftAt(w,now)!==t.shiftIndex || !back || now+t.durationMs+back.durationMs>t.shiftEnd) return false;
    this.transition(w,'WORKING',now);t.state='WORKING';t.startedAt=now;
    this.emit('WORKER_SERVICE_STARTED',{workerId,taskId});return true;
  }
  release(workerId,taskId,now) {
    const w=this.owned(workerId,taskId),t=w.task;
    if(t.kind==='WORK' && (t.state!=='WORKING'||now<t.startedAt+t.durationMs))throw Error('Cannot release unfinished work; use cancel only before service');
    if(['RETURN','MOVE'].includes(t.kind) && t.state!=='READY')throw Error('Cannot release worker before physical return/move');
    this.transition(w,'AVAILABLE',now);w.task=null;this.emit('WORKER_RELEASED',{workerId,taskId,node:w.node});
  }
  cancel(workerId,taskId,now) {
    const w=this.owned(workerId,taskId),t=w.task;now??=w.history.at(-1).at;
    if(!['RESERVED','WAIT_ROUTE','READY'].includes(t.state))throw Error('Cannot cancel in-transit or started work');
    this.transition(w,'AVAILABLE',now);w.task=null;this.emit('WORKER_RESERVATION_CANCELLED',{workerId,taskId});
  }
  /** A relocation is a real trip, but does not credit rest or perform service. */
  reserveMove(workerId,taskId,now,targetNode) {
    const w=this.worker(workerId);
    if(!validTime(now))throw Error('Integer millisecond time required');
    if(typeof taskId!=='string'||!taskId)throw Error('Task ID required');
    if(w.task||this.workers.some(w=>w.task?.id===taskId)||now<w.availableAfterRest)return false;
    const shiftIndex=this.shiftAt(w,now),route=this.path(w.node,targetNode),back=this.path(targetNode,this.breakNode);
    if(shiftIndex<0||!route||!back)return false;
    if(w.lastShiftIndex!==null&&shiftIndex>w.lastShiftIndex&&w.restedThroughShift<w.lastShiftIndex&&w.node!==this.breakNode)return false;
    if(now+route.durationMs+back.durationMs>w.shifts[shiftIndex][1])return false;
    this.transition(w,'RESERVED',now);w.lastShiftIndex=shiftIndex;
    w.task={id:taskId,kind:'MOVE',state:'RESERVED',targetNode,reservedAt:now,travelMs:route.durationMs,
      plannedArrivalAt:now+route.durationMs,shiftIndex,shiftEnd:w.shifts[shiftIndex][1]};
    this.emit('WORKER_MOVE_RESERVED',{workerId,taskId,from:w.node,to:targetNode,travelMs:route.durationMs});
    return {workerId,travelMs:route.durationMs,returnMs:back.durationMs};
  }
  /** Owned work may contain travel (e.g. loaded/empty replenishment legs).
   * durationMs budget and startedAt remain unchanged; core owns route locks.
   * travelMs is explicit because a loaded cart can use a different speed.
   */
  moveDuringTask(workerId,taskId,now,targetNode,travelMs) {
    const w=this.owned(workerId,taskId),t=w.task;
    if(t.kind!=='WORK'||t.state!=='WORKING')throw Error('Embedded trip requires active work ownership');
    if(!validTime(now)||!validTime(travelMs)||typeof targetNode!=='string'||(targetNode!==w.node&&travelMs===0))throw Error('Invalid embedded trip');
    if(!this.path(w.node,targetNode))throw Error('No human path for embedded trip');
    // Late external road delays may exceed the proposal budget; never pretend
    // completion or release ownership. Core must diagnose and return safely.
    this.transition(w,'WALKING',now);
    t.leg={from:w.node,to:targetNode,departedAt:now,travelMs,readyAt:now+travelMs};
    t.state='WORK_MOVING';
    this.emit('WORKER_TASK_LEG_STARTED',{workerId,taskId,...t.leg});
    return copy(t.leg);
  }
  arriveDuringTask(workerId,taskId,node,now) {
    const w=this.owned(workerId,taskId),t=w.task;
    if(t.kind!=='WORK'||t.state!=='WORK_MOVING'||!t.leg||node!==t.leg.to)throw Error('Unexpected embedded arrival');
    if(!validTime(now)||now<t.leg.readyAt)throw Error('Embedded trip has not elapsed');
    this.transition(w,'WORKING',now);w.node=node;t.state='WORKING';t.lastLeg=copy(t.leg);delete t.leg;
    this.emit('WORKER_TASK_LEG_ARRIVED',{workerId,taskId,node});
  }
  reserveReturn(workerId,taskId,now) {
    const w=this.worker(workerId);if(w.task||this.workers.some(w=>w.task?.id===taskId))return false;
    const route=this.path(w.node,this.breakNode);if(!route)return false;
    this.transition(w,'RESERVED',now);w.task={id:taskId,kind:'RETURN',state:'RESERVED',targetNode:this.breakNode,reservedAt:now,travelMs:route.durationMs,plannedArrivalAt:now+route.durationMs,originShiftIndex:w.lastShiftIndex};
    this.emit('WORKER_RETURN_RESERVED',{workerId,taskId,from:w.node,to:this.breakNode,travelMs:route.durationMs});return {workerId,travelMs:route.durationMs,returnMs:0};
  }
  status(now) {
    if(!validTime(now))throw Error('Integer millisecond time required');
    return this.workers.map(w=>{
      const shiftIndex=this.shiftAt(w,now),back=this.path(w.node,this.breakNode);
      let state=w.task?.state ?? (shiftIndex>=0?'AVAILABLE':this.isBreak(w,now)?'BREAK':'OFF_SHIFT');
      if(w.task?.kind==='RETURN'&&shiftIndex<0)state='RETURN_DELAY';
      const returnRequired=!w.task && w.node!==this.breakNode && w.lastShiftIndex!==null &&
        (shiftIndex<0 || shiftIndex>w.lastShiftIndex || (back && now+back.durationMs>=w.shifts[shiftIndex][1]));
      if(returnRequired)state='RETURN_REQUIRED';else if(!w.task&&now<w.availableAfterRest)state='REST_REQUIRED';
      return {id:w.id,node:w.node,skills:[...w.skills],task:copy(w.task),state,shiftIndex,returnRequired,availableAfterRest:w.availableAfterRest};
    });
  }
  snapshot() {return {version:1,workers:copy(this.workers)};}
  restore(snapshot) {
    if(snapshot?.version!==1||!Array.isArray(snapshot.workers))throw Error('Invalid personnel snapshot');
    const old=this.workers;this.workers=copy(snapshot.workers);
    try {this.assertInvariants();if(this.workers.map(w=>w.id).join('|')!==old.map(w=>w.id).join('|'))throw Error('Snapshot roster mismatch');}catch(e){this.workers=old;throw e;}
  }
  assertInvariants() {
    const ids=new Set(),tasks=new Set();
    for(const w of this.workers){
      if(typeof w.id!=='string'||!w.id||ids.has(w.id))throw Error('Duplicate/invalid worker');ids.add(w.id);
      if(!Array.isArray(w.skills)||w.skills.some(s=>typeof s!=='string')||typeof w.node!=='string')throw Error('Invalid worker data');
      if(!Array.isArray(w.shifts)||w.shifts.some(([a,b],i)=>!validTime(a)||!validTime(b)||a>=b||(i&&a<w.shifts[i-1][1])))throw Error('Invalid shift windows');
      if(w.task){if(tasks.has(w.task.id))throw Error('Task owns multiple workers');tasks.add(w.task.id);if(w.task.kind==='WORK'&&!w.skills.includes(w.task.skill))throw Error('Task skill mismatch');}
      if(!w.history?.length||w.history.some((h,i)=>!validTime(h.at)||(i&&h.at<w.history[i-1].at)))throw Error('Invalid worker history');
    }
    return true;
  }
}
