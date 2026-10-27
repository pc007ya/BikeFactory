export const sequence = ['cnc','weld','paint','assembly','qc'];
export class Simulation {
  constructor(devices, {seed=42, failure=0, arrival=105, route=sequence}={}) {
    this.sequence=[...route]; this.devices=structuredClone(devices); this.seed=seed>>>0; this.failure=failure; this.arrival=arrival;
    this.time=0; this.remainder=0; this.completed=0; this.released=0;
    this.queues=Object.fromEntries(this.sequence.map(s=>[s,0]));
    this.states=Object.fromEntries(devices.map(d=>[d.id,{remaining:0,busy:false,down:0,busySeconds:0,downSeconds:0}]));
  }
  random(){this.seed=(Math.imul(1664525,this.seed)+1013904223)>>>0;return this.seed/4294967296;}
  advance(seconds){
    if(!Number.isFinite(seconds)||seconds<0)throw Error('Invalid elapsed time');
    this.remainder+=seconds;
    while(this.remainder>=1-1e-9){this.remainder=Math.max(0,this.remainder-1);this.step();}
  }
  step(){
    this.time++;
    if(!this.sequence.every(s=>this.devices.some(d=>d.type===s)))return;
    if(this.time%this.arrival===0){this.queues[this.sequence[0]]++;this.released++;}
    // Finish all work first; assign new work afterwards to avoid device-order bias.
    for(const d of this.devices){
      if(!this.sequence.includes(d.type))continue;
      const p=this.states[d.id];
      if(p.down>0){p.down--;p.downSeconds++;continue;}
      if(this.random()<1-Math.exp(-this.failure/3600)){p.down=60;p.downSeconds++;continue;}
      if(p.busy){p.busySeconds++;p.remaining--;if(p.remaining<=0){p.busy=false;const i=this.sequence.indexOf(d.type);if(i===this.sequence.length-1)this.completed++;else this.queues[this.sequence[i+1]]++;}}
    }
    for(const d of this.devices){if(!this.sequence.includes(d.type))continue;const p=this.states[d.id];if(!p.busy&&p.down===0&&this.queues[d.type]>0){this.queues[d.type]--;p.busy=true;p.remaining=Math.ceil(d.cycle);}}
  }
  get wip(){return this.released-this.completed;}
  get throughput(){return this.time?this.completed*3600/this.time:0;}
}
