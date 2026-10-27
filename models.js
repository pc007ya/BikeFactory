import * as THREE from 'three';
import {TYPES,ZONES} from './plan.js';
const metal=0x8995a1,dark=0x28384a,wood=0xb78e60,rubber=0x24313e;
function mat(c){return new THREE.MeshStandardMaterial({color:c,roughness:.65,metalness:.25});}
function shape(g,geometry,c,x=0,y=0,z=0){const m=new THREE.Mesh(geometry,mat(c));m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;g.add(m);return m;}
function box(g,w,h,d,c,x=0,y=h/2,z=0){return shape(g,new THREE.BoxGeometry(w,h,d),c,x,y,z);}
function rod(g,a,b,r,c){const av=new THREE.Vector3(...a),bv=new THREE.Vector3(...b),v=bv.clone().sub(av);const m=shape(g,new THREE.CylinderGeometry(r,r,v.length(),10),c);m.position.copy(av.add(bv).multiplyScalar(.5));m.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),v.normalize());return m;}
function wheel(g,x,y,z,r=.35){const m=shape(g,new THREE.TorusGeometry(r,.035,8,32),rubber,x,y,z);const rim=shape(g,new THREE.TorusGeometry(r-.055,.014,6,32),metal,x,y,z);for(let a=0;a<Math.PI*2;a+=Math.PI/6)rod(g,[x,y,z],[x+Math.cos(a)*(r-.05),y+Math.sin(a)*(r-.05),z],.006,metal);return m;}
export function bicycle(color=0x49c9c2,frameOnly=false){const g=new THREE.Group();const A=[-.55,.4,0],B=[0,.45,0],C=[-.12,1,0],D=[.55,.93,0],E=[.65,.4,0];if(!frameOnly){wheel(g,...A);wheel(g,...E);}for(const [a,b] of [[A,B],[A,C],[B,C],[C,D],[D,B],[D,E]])rod(g,a,b,.03,color);if(frameOnly)return g;rod(g,C,[-.17,1.15,0],.025,metal);box(g,.3,.055,.16,dark,-.2,1.16);rod(g,D,[.6,1.15,0],.023,metal);rod(g,[.6,1.15,-.23],[.6,1.15,.23],.022,dark);box(g,.22,.04,.08,metal,.04,.36,.18);return g;}
function bench(g,c){box(g,2.6,.12,1.4,wood,0,.95);for(const x of [-1.1,1.1])for(const z of [-.55,.55])box(g,.09,.9,.09,metal,x,.45,z);box(g,.7,.12,.4,c,-.6,1.07);box(g,.55,.3,.4,dark,.6,1.16);}
function stand(g,c){box(g,2.6,.12,1.4,dark);rod(g,[0,.12,0],[0,1.45,0],.06,metal);const bike=bicycle(c);bike.name='fixture-bike';bike.position.set(0,.65,0);g.add(bike);box(g,.6,.07,.4,metal,1.2,.9,.6);}
export function createEquipment(type){const t=TYPES[type],g=new THREE.Group();g.name=type;const c=t.color;
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
export function createFactory(devices,{zones=true}={}){const g=new THREE.Group();g.name='Bicycle_Assembly_Factory_80x50m_ASSUMED';box(g,80,.2,50,0x17273b,0,-.14);if(zones)for(const z of ZONES){const m=box(g,z.w,.015,z.d,z.color,z.x,.005,z.z);m.material.transparent=true;m.material.opacity=.16;m.name=z.id;}
 // Central logistics strip is a planning guide, not a certified clearance.
 box(g,76,.012,2,0xbea054,0,.025,7);box(g,76,.012,2,0xbea054,0,.025,-5);
 for(const d of devices){const e=createEquipment(d.type);e.position.set(d.x,0,d.z);e.rotation.y=(d.rotation||0)*Math.PI/180;e.name=d.id+'_'+d.type;e.userData={id:d.id,type:d.type,dimensionsAssumed:true};g.add(e);}return g;}
