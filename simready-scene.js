import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {SIMREADY_ASSETS} from './assets/simready/embedded.js';
import {registerEquipmentAsset,EQUIPMENT_ASSET_IDS} from './equipment-assets.js';
export const SIMREADY_VIEW={target:[-22,1,-16],camera:[-13,8,-5]};
async function verifyBytes(data,bytes,expected,label){if(bytes&&data.byteLength!==bytes)throw Error(label+'長度不符，請重試');if(expected){if(!globalThis.crypto?.subtle)throw Error('完整性驗證需要 HTTPS／安全瀏覽器來源');const digest=await crypto.subtle.digest('SHA-256',data),actual=[...new Uint8Array(digest)].map(b=>b.toString(16).padStart(2,'0')).join('');if(actual!==expected)throw Error(label+' SHA-256 不符，已拒絕載入');}}
export async function decodedAssetBuffer(asset,onProgress=()=>{}){
 let data;const online=!!(asset.url||asset.chunks?.length);
 if(online){const specs=asset.chunks?.length?asset.chunks:[{url:asset.url,bytes:asset.compressedBytes,sha256:asset.compressedSha256}],parts=[];let totalReceived=0;
  for(const spec of specs){const response=await fetch(spec.url,{cache:'force-cache'});if(!response.ok)throw Error('素材下載失敗（HTTP '+response.status+'）');let part;if(response.body?.getReader){const reader=response.body.getReader(),chunks=[];let received=0;for(;;){const{value,done}=await reader.read();if(done)break;chunks.push(value);received+=value.length;totalReceived+=value.length;onProgress(asset.compressedBytes?Math.min(1,totalReceived/asset.compressedBytes):0,totalReceived);}part=new Uint8Array(received);let at=0;for(const chunk of chunks){part.set(chunk,at);at+=chunk.length;}}else{part=new Uint8Array(await response.arrayBuffer());totalReceived+=part.length;onProgress(Math.min(1,totalReceived/asset.compressedBytes),totalReceived);}await verifyBytes(part,spec.bytes,spec.sha256,'素材分片');parts.push(part);}
  data=new Uint8Array(parts.reduce((n,p)=>n+p.length,0));let at=0;for(const part of parts){data.set(part,at);at+=part.length;}await verifyBytes(data,asset.compressedBytes,asset.compressedSha256,'完整gzip');
 }else data=Uint8Array.from(atob(asset.base64),c=>c.charCodeAt(0));
 let buffer=data.buffer;if(asset.encoding==='gzip'&&!(data[0]===0x67&&data[1]===0x6c)){if(typeof DecompressionStream==='undefined')throw Error('瀏覽器缺少 gzip DecompressionStream；請改用支援此功能的新版桌面瀏覽器，設備並未載入');buffer=await new Response(new Blob([data]).stream().pipeThrough(new DecompressionStream('gzip'))).arrayBuffer();}
 if(online)await verifyBytes(buffer,asset.byteLength,asset.sha256,'GLB素材');return buffer;
}

// Authentic NVIDIA visual derivatives; never claim retained physical semantics.
export function createSimReadyScene(scene,onChange=()=>{}){
 const root=new THREE.Group();root.name='NVIDIA_SimReady_Visual_Derivatives';scene.add(root);
 const status={state:'loading',loaded:0,total:SIMREADY_ASSETS.length,instances:0,errors:[],version:0,source:'NVIDIA SimReady / visual GLB conversion',assets:SIMREADY_ASSETS.map(a=>({id:a.id,label:a.label,state:'queued',progress:0,received:0,error:''}))};
 const loader=new GLTFLoader();let active;
 async function loadOne(asset){const item=status.assets.find(x=>x.id===asset.id);item.state='loading';item.error='';item.progress=0;onChange();try{let notifiedAt=0;const buffer=await decodedAssetBuffer(asset,(p,n)=>{item.progress=p;item.received=n;const now=performance.now();if(now-notifiedAt>100){notifiedAt=now;onChange();}});item.state='decoding';item.progress=1;onChange();const gltf=await new Promise((resolve,reject)=>loader.parse(buffer,'',resolve,reject));registerEquipmentAsset(asset.id,gltf.scene);
   const equipment=Object.values(EQUIPMENT_ASSET_IDS).includes(asset.id),locations=asset.id==='pallet_wood_recycled_a05'?[[-34.84,0,-18.64]]:equipment?[]:asset.id.startsWith('barrier')?[-37.4,-36.15,-34.9].map(x=>[x,.03,-7.2]):[[0,0,0],[1,0,0],[0,0,1],[1,0,1],[0,1,0],[1,1,0]].map(([x,y,z])=>[-35+x*.32,.1212+y*.304,-18.8+z*.32]);
   for(const [x,y,z]of locations){const object=gltf.scene.clone(true);object.name=asset.id;object.position.set(x,y,z);object.userData={source:'NVIDIA SimReady',assetId:asset.id,originalAsset:asset.id,derivativeSha256:asset.sha256,visualOnly:true,meters:true,sharedAsset:true};root.add(object);status.instances++;}
   item.state='ready';status.loaded++;status.version++;
  }catch(e){item.state='failed';item.error=String(e?.message||e);}onChange();
 }
 async function run(){status.state='loading';const pending=SIMREADY_ASSETS.filter(a=>status.assets.find(x=>x.id===a.id).state!=='ready');let next=0;const worker=async()=>{while(next<pending.length)await loadOne(pending[next++]);};await Promise.all([worker(),worker()]);status.errors=status.assets.filter(x=>x.state==='failed').map(x=>x.label+'：'+x.error);status.state=status.loaded===status.total?'ready':status.loaded?'partial':'unavailable';onChange();return status;}
 active=Promise.resolve().then(run);
 return {root,get ready(){return active;},status,snapshot:()=>structuredClone(status),retry(){if(status.state==='loading')return active;active=Promise.resolve().then(run);return active;}};
}
