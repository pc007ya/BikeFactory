import {validateMobilityRecord} from '../slice-g2_1/record-contract.js';
import {projectContinuous} from '../slice-g2_1/state-projection.js';
// Read-only browser projection derived from the frozen G2 replay contract.
// No scheduling, inventory mutation, random outcomes or simulation clocks.
const clone=x=>structuredClone(x);
const OUT={outP:'P_OUT',outA:'A_OUT',outGood:'Q_GOOD',outScrap:'Q_SCRAP'};
const STATION={prep:'P',assembly:'A',qc:'Q',rework:'Q',loadA:'A',loadQ:'Q',outP:'P',outA:'A',outGood:'Q',outScrap:'Q'};
export class RecordPlayer {
 constructor(record){
  if(record?.schema==='bicycle-slice-record-v2')validateMobilityRecord(record);
  if(!['bicycle-slice-record-v1','bicycle-slice-record-v2'].includes(record?.schema)||!Array.isArray(record.events)||!record.events.length)throw Error('Unsupported G2 recording');
  let seq=0,time=-1;for(const e of record.events){if(e.seq!==++seq||!Number.isSafeInteger(e.time)||e.time<time||e.state?.time!==e.time||!Array.isArray(e.state.jobs)||!Array.isArray(e.state.actions))throw Error('Invalid recording sequence');time=e.time;}
  this.schema=record.schema;this.events=record.events;this.now=time;this.config=record.config;this.configHash=record.configHash;this.slotMaps=this.deriveSlots();this.headings=this.deriveHeadings();
 }
 indexAt(time){let low=0,high=this.events.length;while(low<high){const mid=(low+high)>>>1;if(this.events[mid].time<=time)low=mid+1;else high=mid;}return Math.max(0,low-1);}
 deriveSlots(){const maps={},history=[];for(const e of this.events){for(const[id,b]of Object.entries(e.state.buffers)){const desired=new Set(b.jobs);for(const owner of b.reserved){const jobId=e.state.tasks.find(t=>t.id===owner)?.jobId;if(jobId)desired.add(jobId);}const map=maps[id]||={};for(const j of Object.keys(map))if(!desired.has(j))delete map[j];for(const j of [...desired].sort())if(map[j]===undefined){const used=new Set(Object.values(map));let slot=0;while(used.has(slot))slot++;if(slot>=b.capacity)throw Error('Display slot capacity mismatch '+id);map[j]=slot;}}history.push(clone(maps));}return history;}
 deriveHeadings(){const headings={W1:0,W2:0,V1:0};return this.events.map(e=>{for(const a of e.state.actions)if(a.type==='TRAVEL'){const p=a.payload;headings[p.entity]=Math.atan2(p.end[0]-p.start[0],-(p.end[1]-p.start[1]));}return {...headings};});}
 sequence(seq){const index=seq-1,e=this.events[index];if(!e||e.seq!==seq)throw Error('Unknown recorded event');return clone(e.state);}
 sample(time,{seq=null}={}){const index=seq===null?this.indexAt(time):seq-1;if(!this.events[index])throw Error('Unknown recorded event');const state=seq===null?this.at(time):this.sequence(seq);state.presentation={slotAssignments:clone(this.slotMaps[index]),headings:clone(this.headings[index]),derivedFromEventSeq:this.events[index].seq,assumed:true};return {state,eventSeq:this.events[index].seq,event:{seq:this.events[index].seq,time:this.events[index].time,type:this.events[index].type},events:this.events.slice(Math.max(0,index-100),index+1).map(({seq,time,type})=>({seq,time,type}))};}
 at(time){
  if(!Number.isInteger(time)||time<0||time>this.now)throw Error('Replay time outside recorded run');
  const e=this.events[this.indexAt(time)],s=clone(e.state),dt=time-e.time;if(!dt||s.paused)return s;if(this.schema==='bicycle-slice-record-v2')return projectContinuous(s,dt);
  // No event lies in this interval: project continuous motion/counters only.
  // This never dispatches, consumes material, samples quality, or changes ownership.
  const blocked=a=>{if(a.type==='TRAVEL')return !!s.routing.blocked[`${a.payload.network}:${a.payload.edge}`];const t=s.tasks.find(t=>t.id===a.payload.taskId);if(!t)return false;if(a.type==='VEHICLE_LOAD'||a.type==='VEHICLE_UNLOAD')return !!s.stations[(a.type==='VEHICLE_LOAD'?t.pick:t.drop).split('-')[0]]?.interlock;if(a.type==='SERVICE'&&['loadA','loadQ',...Object.keys(OUT)].includes(t.type))return !!s.stations[STATION[t.type]].interlock;return false;};
  for(const [id,m]of Object.entries(s.metrics.workers)){const actor=s.actors[id],task=s.tasks.find(t=>t.id===actor.task),action=s.actions.find(a=>a.payload.taskId===task?.id),w=s.personnel.workers.find(w=>w.id===id),on=w.shifts.some(([a,b])=>s.time>=a&&s.time<b);if(task&&action?.type==='TRAVEL'&&!blocked(action)){m.travel+=dt;if(!on)m.overtimeTravel+=dt;}else if(task&&['SERVICE','REPLENISH_LOAD','REPLENISH_UNLOAD'].includes(action?.type)&&!blocked(action))m.service+=dt;else if(task)m.waiting+=dt;else{const rest=s.time<w.availableAfterRest||w.shifts.some((v,i)=>i>0&&s.time>=w.shifts[i-1][1]&&s.time<v[0]);m[rest?'break':on?'idle':'offShift']+=dt;}}
  const va=s.actions.find(a=>a.payload.taskId===s.vehicle.task),v=s.metrics.vehicle;if(va?.type==='TRAVEL'&&!blocked(va))v[s.vehicle.cargo?'loadedTravel':'emptyTravel']+=dt;else if(va?.type==='VEHICLE_LOAD'&&!blocked(va))v.loading+=dt;else if(va?.type==='VEHICLE_UNLOAD'&&!blocked(va))v.unloading+=dt;else v[s.vehicle.task?'waiting':'idle']+=dt;
  for(const[id,station]of Object.entries(s.stations)){const t=s.tasks.find(t=>t.id===station.task),a=s.actions.find(a=>a.payload.taskId===t?.id),m=s.metrics.stations[id];if(a?.type==='SERVICE'&&!blocked(a))m[['prep','assembly','qc','rework'].includes(t.type)?'service':'transfer']+=dt;else m[station.fixture?'blocked':'idle']+=dt;}
  for(const a of s.actions){if(blocked(a))continue;a.remaining=Math.max(0,a.remaining-dt);if(a.type==='TRAVEL'){const p=a.payload,actor=p.entity==='V1'?s.vehicle:s.actors[p.entity],k=1-a.remaining/a.duration;actor.position=p.start.map((v,i)=>v+(p.end[i]-v)*k);const t=s.tasks.find(t=>t.id===p.taskId);if(t.type==='replenish'&&s.cart.task===t.id){s.cart.node='IN_TRANSIT';s.cart.position=[...actor.position];}}}
  s.time=time;return s;
 }

}

export class ReplayCursor {
 constructor(duration){if(!Number.isSafeInteger(duration)||duration<0)throw Error('Invalid duration');this.duration=duration;this.time=0;this.speed=8;this.playing=false;this.fraction=0;}
 seek(ms){if(!Number.isFinite(ms))throw Error('Invalid seek');this.time=Math.max(0,Math.min(this.duration,Math.round(ms)));this.fraction=0;this.playing=false;return this.time;}
 setSpeed(speed){if(![1,2,4,8,16,32,60].includes(speed))throw Error('Unsupported replay speed');this.speed=speed;}
 tick(realDeltaMs){if(!Number.isFinite(realDeltaMs)||realDeltaMs<0)throw Error('Invalid playback delta');if(!this.playing)return this.time;this.fraction+=Math.min(realDeltaMs,250)*this.speed;const whole=Math.floor(this.fraction);this.fraction-=whole;this.time=Math.min(this.duration,this.time+whole);if(this.time===this.duration)this.playing=false;return this.time;}
}
