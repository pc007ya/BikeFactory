import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {gunzipSync} from 'node:zlib';
import * as THREE from 'three';
import {projectContinuous} from '../../slice-g2_1/state-projection.js';
import {attachmentPhase} from '../../slice-g2_1/pose-itinerary.js';
import {adaptState} from '../state-adapter.js';
import {createSliceScene} from '../scene.js';
test('actual shortage attach/detach traces have reachable fixed-length arms across all 101 progress samples',()=>{
 const record=JSON.parse(gunzipSync(fs.readFileSync(new URL('../records/shortage.json.gz',import.meta.url))));const starts=new Map();
 for(const e of record.events)for(const a of e.state.actions)if(['CART_ATTACH','CART_DETACH'].includes(a.type)&&a.remaining===a.duration&&!starts.has(a.id))starts.set(a.id,{s:e.state,a});
 assert([...starts.values()].some(v=>v.a.type==='CART_ATTACH'));assert([...starts.values()].some(v=>v.a.type==='CART_DETACH'));
 const scene=createSliceScene(THREE);let samples=0;
 try{for(const {s,a}of starts.values())for(let i=0;i<=100;i++){
  const state=structuredClone(s),p=i/100,cartBefore=structuredClone(state.cart),payload=a.payload;
  projectContinuous(state,a.duration*p);const vm=adaptState(state),w=vm.workers.find(w=>w.id===payload.workerId);assert(w);assert.equal(w.operation.mode,'cart-handle');assert(Math.abs(w.operation.contactWeight-attachmentPhase(a.type,p).contactWeight)<1e-10);assert.deepEqual(state.cart.position,cartBefore.position);assert.equal(state.cart.heading,cartBefore.heading);
  // Isolate the actual operated worker for a numerical arm/handle probe; no production mutation.
  scene.update({...vm,workers:[w]});let arms=0;
  scene.scene.traverse(o=>{const u=o.userData;if(!u.shoulderWorld||u.operationMode!=='cart-handle')return;arms++;const d=Math.hypot(...u.wristWorld.map((x,j)=>x-u.shoulderWorld[j]));assert(d<=.460000001,`${a.id} p${p}: reach ${d}`);if(w.operation.contactWeight===1)for(let j=0;j<3;j++)assert(Math.abs(u.wristWorld[j]-u.targetWorld[j])<1e-8);});assert.equal(arms,2);samples++;
  const paused=structuredClone(state);paused.paused=true;const before=JSON.stringify(paused);projectContinuous(paused,123);assert.equal(JSON.stringify(paused),before);
 }
 assert(samples>=202);
 }finally{scene.dispose();}
});
