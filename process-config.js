import {pathPosition} from './operations.js';
import {TYPES} from './plan.js';
export function validateProcess(steps,devices,types=TYPES){
  if(!Array.isArray(steps)||steps.length<1||steps.length>30)throw Error('工序需有1–30站');
  const seen=new Set();
  for(const s of steps){
    if(!s||!Object.hasOwn(types,s.type)||seen.has(s.type))throw Error('工站類型無效或重複');seen.add(s.type);
    if(typeof s.name!=='string'||!s.name.trim()||s.name.length>60)throw Error('工序名稱需為1–60字');
    const ds=devices.filter(d=>d.type===s.type);
    if(!ds.length)throw Error(s.name+'缺少設備，請先新增');
    if(ds.some(d=>!Number.isFinite(d.cycle)||d.cycle<1||d.cycle>86400))throw Error(s.name+'工時需為1–86400秒');
  }
  return steps;
}
export function visualJobs(sim,devices){
 const byId=new Map(devices.map(d=>[d.id,d])),first=t=>devices.find(d=>d.type===t);
 const result=[];
 for(const [type,jobs] of Object.entries(sim.waiting)){const d=first(type);if(!d)continue;for(let i=0;i<jobs.length;i++)result.push({serial:jobs[i].serial,status:'queued',type,x:d.x+(i%4)*.55-1,z:d.z+2.3+Math.floor(i/4)*.55,y:1});}
 for(const [id,p] of Object.entries(sim.states)){if(!p.job)continue;const d=byId.get(id);result.push({serial:p.job.serial,status:p.remaining===0?'blocked':'processing',type:d.type,device:id,x:d.x,y:3,z:d.z,progress:1-p.remaining/Math.ceil(d.cycle)});}
 const now=sim.time+sim.remainder;
 for(const tr of sim.transfers){if(tr.points){const k=Math.max(0,Math.min(1,(now-tr.departAt)/(tr.readyAt-tr.departAt))),p=pathPosition(tr.points,k);result.push({serial:tr.job.serial,status:'moving',type:tr.to,x:p.x,z:p.z,y:1.2,heading:p.heading,mode:tr.mode,progress:k});continue;}const a=byId.get(tr.from),b=first(tr.to);if(!a||!b)continue;const k=Math.max(0,Math.min(1,(now-tr.departAt)/(tr.readyAt-tr.departAt)));const pts=[[a.x,a.z],[a.x,a.z+2.3],[b.x,a.z+2.3],[b.x,b.z+2.3]],lens=pts.slice(1).map((p,i)=>Math.hypot(p[0]-pts[i][0],p[1]-pts[i][1])),total=lens.reduce((a,b)=>a+b,0);let dist=k*total,point=pts[0];for(let i=0;i<lens.length;i++){if(dist<=lens[i]||i===lens.length-1){const q=lens[i]?dist/lens[i]:1;point=pts[i].map((v,j)=>v+(pts[i+1][j]-v)*q);break;}dist-=lens[i];}result.push({serial:tr.job.serial,status:'moving',type:tr.to,x:point[0],z:point[1],y:1.2,progress:k});}
 return result;
}
