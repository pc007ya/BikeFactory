import * as THREE from 'three';
import {visualJobs} from './process-config.js';
const COLORS={moving:0x55deff,processing:0x57e3a3,queued:0xf2c56c,blocked:0xff7878,idle:0x657d92};
export class ProductionAnimation{
 constructor(scene,board){this.board=board;this.tokens=new THREE.InstancedMesh(new THREE.BoxGeometry(.95,.65,.75),new THREE.MeshStandardMaterial({roughness:.45,metalness:.2}),256);this.tokens.instanceMatrix.setUsage(THREE.DynamicDrawUsage);this.tokens.count=0;this.tokens.frustumCulled=false;scene.add(this.tokens);this.lights=new THREE.InstancedMesh(new THREE.SphereGeometry(.26,8,6),new THREE.MeshBasicMaterial(),1000);this.lights.count=0;this.lights.frustumCulled=false;scene.add(this.lights);this.matrix=new THREE.Matrix4();this.color=new THREE.Color();this.elements=new Map();}
 configure(steps,devices){this.steps=steps;this.devices=devices;this.board.replaceChildren();this.elements.clear();this.width=Math.max(800,steps.length*170+100);this.board.setAttribute('viewBox',`0 0 ${this.width} 200`);this.board.style.minWidth=this.width+'px';const ns='http://www.w3.org/2000/svg';this.ns=ns;const add=(tag,attrs,text)=>{const e=document.createElementNS(ns,tag);for(const[k,v]of Object.entries(attrs))e.setAttribute(k,v);if(text)e.textContent=text;this.board.append(e);return e;};
  steps.forEach((s,i)=>{const x=60+i*170;if(i<steps.length-1)add('path',{d:`M${x+55} 86H${x+155}`,stroke:'#35617a','stroke-width':3,fill:'none'});add('rect',{x:x-40,y:45,width:125,height:80,rx:12,fill:'#162d40',stroke:'#42718a'});add('text',{x:x-28,y:69,fill:'#bde3f0','font-size':12},`${i+1} · ${s.name}`);const t=add('text',{x:x-28,y:111,fill:'#9bb9c9','font-size':11},'');s.boardText=t;});
 }
 update(sim){const jobs=visualJobs(sim,this.devices),shown=jobs.slice(0,256);this.jobs=jobs;this.tokens.count=shown.length;
  shown.forEach((j,i)=>{this.matrix.makeTranslation(j.x,j.y,j.z);this.tokens.setMatrixAt(i,this.matrix);this.tokens.setColorAt(i,this.color.setHex(COLORS[j.status]));});this.tokens.instanceMatrix.needsUpdate=true;if(this.tokens.instanceColor)this.tokens.instanceColor.needsUpdate=true;
  this.lights.count=this.devices.length;this.devices.forEach((d,i)=>{const p=sim.states[d.id],status=!this.steps.some(s=>s.type===d.type)?'idle':p?.busy?(p.remaining===0?'blocked':'processing'):'idle';this.matrix.makeTranslation(d.x,3.6,d.z);this.lights.setMatrixAt(i,this.matrix);this.lights.setColorAt(i,this.color.setHex(COLORS[status]));});this.lights.instanceMatrix.needsUpdate=true;if(this.lights.instanceColor)this.lights.instanceColor.needsUpdate=true;
  const live=new Set();for(const j of shown){live.add(j.serial);let e=this.elements.get(j.serial);if(!e){e=document.createElementNS(this.ns,'circle');e.setAttribute('r',6);e.setAttribute('stroke','#071724');e.setAttribute('stroke-width',2);const title=document.createElementNS(this.ns,'title');title.textContent=j.serial;e.append(title);this.board.append(e);this.elements.set(j.serial,e);}const i=this.steps.findIndex(s=>s.type===j.type);let x=60+i*170+17,y=86;
   if(j.status==='moving'){const tr=sim.transfers.find(t=>t.job.serial===j.serial);const from=this.devices.find(d=>d.id===tr?.from);const k=this.steps.findIndex(s=>s.type===from?.type);x=60+(k+(i-k)*j.progress)*170+17;y=145;}
   if(j.status==='queued'){const q=sim.waiting[j.type].findIndex(a=>a.serial===j.serial);x+=q%8*13-40;y=167+Math.floor(q/8)*13;}
   e.setAttribute('cx',x);e.setAttribute('cy',y);e.setAttribute('fill','#'+COLORS[j.status].toString(16));
  }for(const[id,e]of this.elements)if(!live.has(id)){e.remove();this.elements.delete(id);}
  this.steps.forEach(s=>{const ds=this.devices.filter(d=>d.type===s.type),active=ds.filter(d=>sim.states[d.id]?.busy).length;s.boardText.textContent=`${active}/${ds.length} 加工 · 等待${sim.queues[s.type]}`;});
  return {total:jobs.length,visible:shown.length};
 }
}
