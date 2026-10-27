import * as THREE from 'three';
// Architectural context is an assumed scene, not engineering/clearance geometry.
const materials={concrete:new THREE.MeshStandardMaterial({color:0x8d969b,roughness:.93,metalness:0}),wall:new THREE.MeshStandardMaterial({color:0xe2e6e7,roughness:.8}),steel:new THREE.MeshStandardMaterial({color:0x364650,roughness:.55,metalness:.75}),yellow:new THREE.MeshStandardMaterial({color:0xd6b333,roughness:.8}),light:new THREE.MeshStandardMaterial({color:0xffffff,emissive:0xdceeff,emissiveIntensity:.8})};
function block(g,size,position,mat){const m=new THREE.Mesh(new THREE.BoxGeometry(...size),materials[mat]||mat);m.position.set(...position);m.castShadow=true;m.receiveShadow=true;g.add(m);return m;}
export function createArchitecture(){const g=new THREE.Group();g.name='Assumed_factory_architecture';
 // Low, cut-away enclosure keeps equipment and workpieces visible.
 block(g,[80,.12,50],[0,-.1,0],'concrete');block(g,[80,6,.24],[0,3,-25],'wall');block(g,[.24,1.15,50],[-40,.575,0],'wall');block(g,[.24,1.15,18],[40,.575,-16],'wall');block(g,[.24,1.15,25],[40,.575,12.5],'wall');
 block(g,[80,.65,.25],[0,.325,-24.85],new THREE.MeshStandardMaterial({color:0x31525e,roughness:.7}));
 for(const x of [-36,-24,-12,0,12,24,36]){block(g,[.35,7,.35],[x,3.5,-24.5],'steel');block(g,[.65,.1,.65],[x,.05,-24.5],'steel');}
 block(g,[76,.3,.3],[0,6.8,-24.5],'steel');
 // High windows and realistic-size overhead luminaire bars, no opaque roof.
 for(const x of [-30,-18,-6,6,18,30]){block(g,[8,1.6,.09],[x,4.8,-24.83],new THREE.MeshStandardMaterial({color:0x8eafbf,roughness:.25,metalness:.2}));for(const z of [-11,8]){block(g,[5.5,.08,.22],[x,6.5,z],'steel');block(g,[5.2,.045,.16],[x,6.44,z],'light');}}
 // Walkways are restrained markings, not broad opaque yellow slabs.
 for(const z of [-5,7])for(const dz of [-1,1])block(g,[76,.008,.065],[0,.015,z+dz],'yellow');
 for(const z of [-5,7])for(let x=-37;x<38;x+=2.4)block(g,[.75,.009,.06],[x,.02,z],'yellow');
 // Loading-bay apron and dock lines at the open front edge.
 for(const x of [-28,-16]){block(g,[5,.012,6],[x,.012,21],new THREE.MeshStandardMaterial({color:0x73828a,roughness:.9}));for(const dx of [-2.5,2.5])block(g,[.06,.016,6],[x+dx,.022,21],'yellow');}
 return g;
}
export function tuneIndustrialMaterials(root){root.traverse(o=>{if(!o.isMesh)return;o.castShadow=true;o.receiveShadow=true;if(o.material){for(const m of Array.isArray(o.material)?o.material:[o.material]){if(m.color&&!o.userData.nvidiaAsset){if(m.metalness>.1)m.roughness=Math.max(.35,m.roughness);}}}});}
