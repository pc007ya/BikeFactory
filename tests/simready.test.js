import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {Scene,Box3,Vector3} from 'three';
import {SIMREADY_ASSETS} from '../assets/simready/embedded.js';
import {createSimReadyScene} from '../simready-scene.js';
test('embedded SimReady assets match GLB bytes and contain no external resources',()=>{for(const asset of SIMREADY_ASSETS){const bytes=fs.readFileSync(new URL('../assets/simready/'+asset.id+'.glb',import.meta.url));assert.equal(bytes.toString('base64'),asset.base64);assert.equal(createHash('sha256').update(bytes).digest('hex'),asset.sha256);assert.equal(bytes.toString('utf8',0,4),'glTF');assert.equal(bytes.readUInt32LE(4),2);assert.equal(bytes.readUInt32LE(8),bytes.length);const length=bytes.readUInt32LE(12),json=JSON.parse(bytes.toString('utf8',20,20+length));assert.ok(json.meshes.length);assert.ok(json.images.length);assert.ok(json.images.every(x=>Number.isInteger(x.bufferView)&&!x.uri));assert.ok(json.buffers.every(x=>!x.uri));}});
test('actual GLB loader builds 9 visual instances at original meter dimensions (image decode stub only)',async()=>{
 const saved={self:globalThis.self,createImageBitmap:globalThis.createImageBitmap,ProgressEvent:globalThis.ProgressEvent};
 // No GPU or image rendering is asserted. Khronos/Blender checks are separate.
 globalThis.self=globalThis;globalThis.createImageBitmap=async()=>({width:512,height:512,close(){}});globalThis.ProgressEvent=class{constructor(type,init){Object.assign(this,{type},init);}};
 try{const scene=new Scene(),view=createSimReadyScene(scene);await view.ready;assert.equal(view.status.state,'ready',JSON.stringify(view.status.errors));assert.equal(view.status.loaded,2);assert.equal(view.status.instances,9);const fence=view.root.children.find(o=>o.name==='barrier_fence_metal_a02'),carton=view.root.children.find(o=>o.name==='box_corrugated_brown_b08');const bounds=o=>new Box3().setFromObject(o).getSize(new Vector3());const f=bounds(fence),c=bounds(carton);assert.ok(Math.abs(f.x-1.2298)<.01);assert.ok(Math.abs(f.y-1.07178)<.01);assert.ok(Math.abs(c.x-.29728)<.01);assert.ok(Math.abs(c.y-.30366)<.01);assert.equal(carton.scale.x,1);assert.equal(fence.scale.x,1);assert.ok(fence.position.z<-6);assert.ok(carton.position.z<-6);assert.equal(fence.userData.visualOnly,true);assert.equal(carton.userData.meters,true);}finally{for(const[k,v]of Object.entries(saved)){if(v===undefined)delete globalThis[k];else globalThis[k]=v;}}
});
