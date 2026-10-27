import {validateLogistics,transportPlan} from './operations.js';
// Generic planning experiment inspired by public lean-manufacturing principles.
// Not Giant's proprietary algorithm, operating data, or plant topology.
export class LeanSimulation {
  constructor(devices,{route,arrival=105,wipLimit=Infinity,bufferCapacity=Infinity,transportSeconds=0,logistics=null,orderId='DEMO',targetQuantity=Infinity,materialSource=null}={}){
    if(!Array.isArray(route)||!route.length||new Set(route).size!==route.length)throw Error('Route must contain unique stations');
    if(!Number.isInteger(arrival)||arrival<1)throw Error('Invalid arrival');
    for(const n of [wipLimit,bufferCapacity])if(n!==Infinity&&(!Number.isInteger(n)||n<1))throw Error('Limits must be positive integers');
    if(!Number.isInteger(transportSeconds)||transportSeconds<0||transportSeconds>3600)throw Error('Invalid transport time');if(targetQuantity!==Infinity&&(!Number.isInteger(targetQuantity)||targetQuantity<1))throw Error('Invalid order quantity');this.logistics=logistics?validateLogistics({...logistics}):null;this.orderId=orderId;this.targetQuantity=targetQuantity;this.transportSeconds=transportSeconds;this.transfers=[];this.devices=structuredClone(devices);this.sequence=[...route];this.arrival=arrival;this.wipLimit=wipLimit;this.bufferCapacity=bufferCapacity;
    this.time=0;this.remainder=0;this.completed=0;this.released=0;this.deferred=0;this.wipArea=0;this.leadSum=0;
    this.waiting=Object.fromEntries(route.map(t=>[t,[]]));this.queues=Object.fromEntries(route.map(t=>[t,0]));
    this.states=Object.fromEntries(devices.map(d=>[d.id,{busy:false,remaining:0,busySeconds:0,blockedSeconds:0,job:null}]));
    this.events=[];this.finished=[];this.materialSource=materialSource;this.materialStarved=false;this.materialDeferred=0;
    if(devices.filter(d=>route.includes(d.type)).some(d=>!Number.isFinite(d.cycle)||d.cycle<1))throw Error('Invalid process cycle');
  }
  event(job,kind,device=null){const e={time:this.time,serial:job.serial,kind,device,source:'synthetic-planning'};job.history.push(e);this.events.push(e);}
  advance(seconds){if(!Number.isFinite(seconds)||seconds<0)throw Error('Invalid elapsed time');if(this.orderComplete)return;this.remainder+=seconds;while(this.remainder>=1-1e-9){this.remainder=Math.max(0,this.remainder-1);this.step();if(this.orderComplete){this.remainder=0;break;}}}
  step(){
    this.time++;for(const tr of this.transfers.filter(tr=>tr.readyAt<=this.time)){this.waiting[tr.to].push(tr.job);this.event(tr.job,'arrive',tr.from);}this.transfers=this.transfers.filter(tr=>tr.readyAt>this.time);
    if(!this.sequence.every(t=>this.devices.some(d=>d.type===t)))return;
    if(this.released<this.targetQuantity&&this.time%this.arrival===0){
      if(this.wip<this.wipLimit&&this.occupancy(this.sequence[0])<this.bufferCapacity){
        const serial=this.orderId+'-'+String(this.released+1).padStart(6,'0'),material=this.materialSource?this.materialSource({serial,orderId:this.orderId,time:this.time}):{supplySource:'purchased_frame',synthetic:true};
        this.materialStarved=!material;if(material){this.released++;const job={orderId:this.orderId,serial,releasedAt:this.time,history:[],partsLot:'DEMO-LOT-001',frameMaterial:structuredClone(material)};this.waiting[this.sequence[0]].push(job);this.event(job,'release');}else{this.materialDeferred++;this.deferred++;}
      }else this.deferred++;
    }
    // All machines accrue service before transfers. Reverse-stage transfer gives
    // downstream departures priority without consuming service twice per second.
    for(const d of this.devices){const p=this.states[d.id];if(p.busy&&p.remaining>0){p.remaining--;p.busySeconds++;}}
    for(let i=this.sequence.length-1;i>=0;i--){
      for(const d of this.devices.filter(d=>d.type===this.sequence[i])){
        const p=this.states[d.id];if(!p.busy||p.remaining>0)continue;
        const job=p.job,next=this.sequence[i+1];
        if(next&&this.occupancy(next)>=this.bufferCapacity){p.blockedSeconds++;p.blockReason='下站緩衝已滿';if(!p.wasBlocked)this.event(job,'blocked',d.id);p.wasBlocked=true;continue;}
        if(next&&this.logistics&&this.logistics.mode!=='conveyor'&&this.transfers.length>=this.logistics.fleet){p.blockedSeconds++;p.blockReason='物流忙碌';if(!p.wasBlocked)this.event(job,'blocked',d.id);p.wasBlocked=true;continue;}p.blockReason='';this.event(job,'finish',d.id);
        if(next){const target=this.devices.find(d=>d.type===next);const plan=this.logistics?transportPlan(d,target,this.logistics):null;const seconds=plan?.seconds??this.transportSeconds;if(seconds){this.transfers.push({job,from:d.id,to:next,departAt:this.time,readyAt:this.time+seconds,...(plan||{})});this.event(job,'depart',d.id);}else this.waiting[next].push(job);}else{this.completed++;job.completedAt=this.time;this.leadSum+=this.time-job.releasedAt;this.finished.push(job);this.event(job,'complete');}
        p.busy=false;p.job=null;p.wasBlocked=false;
      }
    }
    for(const d of this.devices){if(!this.sequence.includes(d.type))continue;const p=this.states[d.id];if(!p.busy&&this.waiting[d.type].length){p.job=this.waiting[d.type].shift();p.busy=true;p.remaining=Math.ceil(d.cycle);this.event(p.job,'start',d.id);}}
    for(const t of this.sequence)this.queues[t]=this.waiting[t].length;
    this.wipArea+=this.wip;
  }
  occupancy(type){return this.waiting[type].length+this.transfers.filter(t=>t.to===type).length;}
  get orderComplete(){return this.completed>=this.targetQuantity;}
  get wip(){return this.released-this.completed;}
  get throughput(){return this.time?this.completed*3600/this.time:0;}
  get averageWip(){return this.time?this.wipArea/this.time:0;}
  get averageLeadSeconds(){return this.completed?this.leadSum/this.completed:0;}
}
