import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {SIMREADY_ASSETS} from './assets/simready/embedded.js';
export const SIMREADY_VIEW={target:[-33.8,.5,-9.1],camera:[-30.4,3.1,-5.2]};
// Actual NVIDIA USD geometry/materials converted to GLB. Visual-only derivatives:
// no PhysX, mass, collision, semantics, FEA, robot integration, or safety claims.
export function createSimReadyScene(scene,onChange=()=>{}){
 const root=new THREE.Group();root.name='NVIDIA_SimReady_Visual_Derivatives';scene.add(root);
 const status={state:'loading',loaded:0,total:SIMREADY_ASSETS.length,instances:0,errors:[],source:'NVIDIA SimReady / visual GLB conversion'};
 const loader=new GLTFLoader();
 const ready=Promise.allSettled(SIMREADY_ASSETS.map(async asset=>{
  const data=Uint8Array.from(atob(asset.base64),c=>c.charCodeAt(0));
  const gltf=await new Promise((resolve,reject)=>loader.parse(data.buffer,'',resolve,reject));
  const locations=asset.id.startsWith('barrier')?[-35.1,-33.85,-32.6].map(x=>[x,.03,-8]):[[0,0,0],[1,0,0],[0,0,1],[1,0,1],[0,1,0],[1,1,0]].map(([x,y,z])=>[-34.35+x*.32,.22+y*.304,-10+z*.32]);
  for(const [x,y,z]of locations){const object=gltf.scene.clone(true);object.name=asset.id;object.position.set(x,y,z);object.userData={source:'NVIDIA SimReady',originalAsset:asset.id,derivativeSha256:asset.sha256,visualOnly:true,meters:true};root.add(object);status.instances++;}
  status.loaded++;onChange();
 })).then(results=>{status.errors=results.filter(x=>x.status==='rejected').map(x=>String(x.reason?.message||x.reason));status.state=status.loaded===status.total?'ready':status.loaded?'partial':'unavailable';onChange();return status;});
 const pallet=new THREE.Mesh(new THREE.BoxGeometry(1.05,.16,.85),new THREE.MeshStandardMaterial({color:0x9f7951,roughness:.8}));pallet.position.set(-34.19,.12,-9.84);pallet.name='assumed_display_pallet';root.add(pallet);
 return {root,ready,status,snapshot:()=>structuredClone(status)};
}
