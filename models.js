import * as THREE from 'three';
import {TYPES,ZONES} from './plan.js';
import {assetClone,assetSize} from './equipment-assets.js';
const metal=0x929da4,dark=0x303a40,wood=0x9c8569,rubber=0x202326;
function mat(c){return new THREE.MeshStandardMaterial({color:c,roughness:c===rubber?.82:.46,metalness:[metal,dark].includes(c)?.65:.08});}
function shape(g,geometry,c,x=0,y=0,z=0){const m=new THREE.Mesh(geometry,mat(c));m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;g.add(m);return m;}
function box(g,w,h,d,c,x=0,y=h/2,z=0){return shape(g,new THREE.BoxGeometry(w,h,d),c,x,y,z);}
function rod(g,a,b,r,c){const av=new THREE.Vector3(...a),bv=new THREE.Vector3(...b),v=bv.clone().sub(av);const m=shape(g,new THREE.CylinderGeometry(r,r,v.length(),10),c);m.position.copy(av.add(bv).multiplyScalar(.5));m.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),v.normalize());return m;}
function wheel(g,x,y,z,r=.35){const m=shape(g,new THREE.TorusGeometry(r,.035,8,32),rubber,x,y,z);const rim=shape(g,new THREE.TorusGeometry(r-.055,.014,6,32),metal,x,y,z);for(let a=0;a<Math.PI*2;a+=Math.PI/6)rod(g,[x,y,z],[x+Math.cos(a)*(r-.05),y+Math.sin(a)*(r-.05),z],.006,metal);return m;}
export function bicycle(color=0x49c9c2,frameOnly=false){const g=new THREE.Group();const A=[-.55,.4,0],B=[0,.45,0],C=[-.12,1,0],D=[.55,.93,0],E=[.65,.4,0];if(!frameOnly){wheel(g,...A);wheel(g,...E);}for(const [a,b] of [[A,B],[A,C],[B,C],[C,D],[D,B],[D,E]])rod(g,a,b,.03,color);if(frameOnly)return g;rod(g,C,[-.17,1.15,0],.025,metal);box(g,.3,.055,.16,dark,-.2,1.16);rod(g,D,[.6,1.15,0],.023,metal);rod(g,[.6,1.15,-.23],[.6,1.15,.23],.022,dark);box(g,.22,.04,.08,metal,.04,.36,.18);return g;}
function bench(g,c){box(g,2.6,.12,1.4,wood,0,.95);for(const x of [-1.1,1.1])for(const z of [-.55,.55])box(g,.09,.9,.09,metal,x,.45,z);box(g,.7,.12,.4,c,-.6,1.07);box(g,.55,.3,.4,dark,.6,1.16);}
function stand(g,c){box(g,2.6,.12,1.4,dark);rod(g,[0,.12,0],[0,1.45,0],.06,metal);const bike=bicycle(c);bike.name='fixture-bike';bike.position.set(0,.65,0);g.add(bike);box(g,.6,.07,.4,metal,1.2,.9,.6);}
function fitAsset(role,w,d){const object=assetClone(role),size=assetSize(role);if(!object)return null;const scale=Math.min(1,(w-.08)/size.x,(d-.08)/size.z);object.scale.setScalar(scale);object.userData.displayScale=scale;return object;}
function realEquipment(type,t){const g=new THREE.Group(),tableTypes=['receive','kit','fork','drive','motor','battery','final','torque','pack','wheel'];let asset;
 if(type==='storage'){asset=fitAsset('rack',t.w,t.d);if(asset){g.add(asset);return g;}}
 if(type==='cart'){asset=fitAsset('toolcart',t.w,t.d);if(asset){g.add(asset);return g;}}
 if(type==='conveyor'){asset=fitAsset('conveyor',t.w,t.d);if(asset){g.add(asset);return g;}}
 if(type==='pallet'){asset=fitAsset('pallet',1.65,1.35);if(asset){for(const x of [-.9,.9])for(const z of [-.7,.7]){const p=asset.clone(true);p.position.set(x,0,z);g.add(p);}for(const x of [-.9,.9]){box(g,.62,1.08,2.08,wood,x,.74,0);box(g,.625,.035,2.09,0x6f6252,x,1.08,0);}return g;}}
 if(tableTypes.includes(type)){asset=fitAsset(type==='pack'?'packing':'table',t.w,t.d);if(asset){const assembly=['fork','drive','motor','battery','final','torque'].includes(type);asset.position.z=assembly?-1.15:0;g.add(asset);if(assembly){box(g,.75,.08,.65,0x687b84,0,.04,.65);box(g,.12,1.28,.12,metal,0,.72,.65);rod(g,[-.28,.12,.65],[0,.9,.65],.035,metal);rod(g,[.28,.12,.65],[0,.9,.65],.035,metal);box(g,.16,.1,.72,metal,0,1.43,.31);box(g,.18,.12,.16,dark,0,1.43,0);}if(type==='wheel')wheel(g,0,1.35,.1,.34);return g;}}
 return null;
}
export function createEquipment(type,{useNative=true}={}){const t=TYPES[type],native=useNative?realEquipment(type,t):null;if(native){native.name=type;return native;}const g=new THREE.Group();g.name=type;const c=[0x36b9a6,0xd5a4eb,0xf39474,0x70a6df].includes(t.color)?0x496b76:t.color;
 switch(t.model){
 case 'rack':for(const x of [-1.8,1.8])for(const z of [-.6,.6])box(g,.08,3,.08,c,x,1.5,z);for(const y of [.15,1.1,2.05]){box(g,3.8,.08,1.35,metal,0,y);for(const x of [-1.25,0,1.25])box(g,.95,.65,1,wood,x,y+.365);}break;
 case 'frameRack':box(g,3.7,.12,1.7,dark);for(const x of [-1.6,1.6])rod(g,[x,.1,0],[x,2.6,0],.05,metal);rod(g,[-1.6,2.6,0],[1.6,2.6,0],.05,metal);for(const x of [-1.1,0,1.1]){const b=bicycle(c,true);b.scale.setScalar(.7);b.rotation.y=Math.PI/2;b.position.set(x,.9,0);g.add(b);}break;
 case 'wheel':bench(g,c);for(const x of [-.35,.35])rod(g,[x,1,0],[x,1.75,0],.025,metal);wheel(g,0,1.6,0,.34);break;
 case 'stand':stand(g,c);break;
 case 'motor':stand(g,c);box(g,.4,.3,.3,0x9274c6,0,1.02,.08);break;
 case 'battery':stand(g,c);box(g,.16,.48,.2,0x252d40,.2,1.4,.05);break;
 case 'inspection':stand(g,c);box(g,.65,1.4,.5,metal,1.45,.7,-.85);box(g,.6,.4,.08,0x244e64,1.45,1.5,-.6);break;
 case 'roller':box(g,3,.18,1.6,dark);for(const x of [-.6,.65]){const m=shape(g,new THREE.CylinderGeometry(.13,.13,.8,20),metal,x,.27,0);m.rotation.x=Math.PI/2;}const bike=bicycle(c);bike.name='fixture-bike';g.add(bike);rod(g,[1.3,.1,.55],[1.3,1.5,.55],.04,metal);box(g,.5,.35,.08,0x244e64,1.3,1.55,.55);break;
 case 'pack':bench(g,c);box(g,2.1,1.1,.45,wood,0,1.6,0);box(g,.6,.04,.48,0xd6c09c,0,2.17,0);break;
 case 'pallet':for(const z of [-.8,0,.8])box(g,3.6,.12,.28,wood,0,.08,z);for(const x of [-1.5,-.75,0,.75,1.5])box(g,.3,.1,2.5,wood,x,.19);for(const x of [-1,0,1])box(g,.8,1.8,2,0xb49a7b,x,1.15);break;
 case 'conveyor':for(const x of [-2.8,2.8])for(const z of [-.45,.45])box(g,.08,.7,.08,metal,x,.35,z);for(const z of [-.55,.55])box(g,6,.12,.08,dark,0,.73,z);for(let x=-2.8;x<=2.8;x+=.28){const m=shape(g,new THREE.CylinderGeometry(.055,.055,1,8),metal,x,.74,0);m.rotation.x=Math.PI/2;}break;
 case 'cart':box(g,1.3,.08,.8,metal,0,.25);box(g,1.3,.08,.8,c,0,.9);for(const x of [-.55,.55])for(const z of [-.3,.3]){box(g,.04,.9,.04,metal,x,.65,z);const m=shape(g,new THREE.CylinderGeometry(.08,.08,.05,10),rubber,x,.12,z);m.rotation.x=Math.PI/2;}break;
 default:bench(g,c);
 }return g;
}
export function createFactory(devices,{zones=true}={}){const g=new THREE.Group();g.name='Bicycle_Assembly_Factory_80x50m_ASSUMED';if(zones)for(const z of ZONES){const m=box(g,z.w,.015,z.d,z.color,z.x,.005,z.z);m.material.transparent=true;m.material.opacity=.045;m.name=z.id;}
 // Central logistics strip is a planning guide, not a certified clearance.
 
 const mainNativeIds=new Set(['R01','A01','A02','A03','A04','A05','E01','E02','Q01','B01','B02','R04','R05','P05','B03','B04']);for(const d of devices){const e=createEquipment(d.type,{useNative:mainNativeIds.has(d.id)});e.position.set(d.x,0,d.z);e.rotation.y=(d.rotation||0)*Math.PI/180;e.name=d.id+'_'+d.type;e.userData={...e.userData,id:d.id,type:d.type,dimensionsAssumed:true};g.add(e);}return g;}
