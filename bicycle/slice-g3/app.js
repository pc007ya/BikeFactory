import {overviewFraming} from './view-framing.js';
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {gunzipSync,strFromU8} from 'three/addons/libs/fflate.module.js';
import {RECORDS} from './records/embedded.js';
import {ViewerController} from './viewer-controller.js';
import {createSliceScene} from './scene.js';
import {mountDashboard} from './dashboard.js';
const host=document.querySelector('#scene'),notice=document.querySelector('#notice');
let renderer=null,controls=null,view=null,controller=null,currentId='normal',last=0,lastPaint=-Infinity,dirty=true;
const camera=new THREE.PerspectiveCamera(43,1,.1,400),raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2();
try{renderer=new THREE.WebGLRenderer({antialias:true,alpha:false});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;renderer.outputColorSpace=THREE.SRGBColorSpace;host.append(renderer.domElement);controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=false;controls.maxPolarAngle=Math.PI*.48;controls.minDistance=3;controls.maxDistance=200;controls.addEventListener('change',()=>dirty=true);}catch(error){notice.textContent='此環境無法初始化 WebGL；仍可查閱同源事件與指標。實際畫面未驗收。 '+error.message;notice.hidden=false;}
const ring=new THREE.Mesh(new THREE.RingGeometry(.65,.73,64),new THREE.MeshBasicMaterial({color:0x6bff8a,side:THREE.DoubleSide,depthWrite:false}));ring.rotation.x=-Math.PI/2;ring.position.y=.035;
const dashboard=mountDashboard(document.querySelector('#dashboard'),{
 onScenario:load,onTogglePlay(){controller.toggle();paint();},onSpeed(n){controller.cursor.setSpeed(n);paint();},onSeek(ms){controller.seek(ms);paint();},onEvent(seq){controller.event(seq);paint();},onSelect(value){controller.select(value);paint();},onCamera(mode){frameCamera(mode);}
});
function position(vm){const s=controller.selected;if(s.kind==='vehicle')return vm.vehicle.position;if(s.kind==='cart')return vm.cart.position;const list=s.kind==='station'?vm.stations:s.kind==='worker'?vm.workers:vm.jobs;return list.find(v=>v.id===s.id)?.position;}
let cameraMode='overview';
function frameCamera(mode='overview'){cameraMode=mode;const vm=controller.frame().vm,p=mode==='selected'?position(vm):null,fit=overviewFraming(camera.aspect),target=new THREE.Vector3(...(p||fit.target));if(p)camera.position.copy(target).add(new THREE.Vector3(5,4.5,6));else camera.position.fromArray(fit.position);camera.lookAt(target);if(controls){controls.target.copy(target);controls.update();}dirty=true;}
function load(id){if(!RECORDS[id])return;try{const packed=Uint8Array.from(atob(RECORDS[id].gzipBase64),c=>c.charCodeAt(0)),record=JSON.parse(strFromU8(gunzipSync(packed)));const next=new ViewerController(record);view?.scene.remove(ring);view?.dispose();controller=next;currentId=id;view=createSliceScene(THREE);view.scene.add(ring);paint();frameCamera();}catch(error){notice.hidden=false;notice.textContent='紀錄載入失敗：'+error.message;}}
function paint(){if(!controller)return;const {vm,context}=controller.frame();view.update(vm);const p=position(vm);ring.visible=!!p&&!(controller.selected.kind==='job'&&vm.jobs.find(j=>j.id===controller.selected.id)?.inSlice===false);if(p)ring.position.set(p[0],.035,p[2]);dashboard.update(vm,{...context,scenarioId:currentId,scenarios:Object.values(RECORDS).map(({id,label})=>({id,label}))});dirty=true;}
function resize(){const w=host.clientWidth,h=host.clientHeight;if(renderer)renderer.setSize(w,h,false);camera.aspect=Math.max(1,w)/Math.max(1,h);camera.updateProjectionMatrix();if(controller)frameCamera(cameraMode);dirty=true;}
let down=null;if(renderer){renderer.domElement.addEventListener('pointerdown',e=>down=[e.clientX,e.clientY]);renderer.domElement.addEventListener('pointerup',e=>{if(!down||Math.hypot(e.clientX-down[0],e.clientY-down[1])>5)return;const rect=renderer.domElement.getBoundingClientRect();pointer.set((e.clientX-rect.left)/rect.width*2-1,-(e.clientY-rect.top)/rect.height*2+1);raycaster.setFromCamera(pointer,camera);for(const hit of raycaster.intersectObjects(view.pickables,true)){let obj=hit.object;while(obj&&!obj.userData.selectionId)obj=obj.parent;const id=obj?.userData.selectionId;if(id&&/^(station|worker|vehicle|cart|job):/.test(id)){const [kind,...parts]=id.split(':');controller.select({kind,id:kind==='cart'?'CART':parts.join(':')});paint();break;}}});}
window.addEventListener('resize',resize);load('normal');resize();
// Only this cursor consumes wall-clock delta. All poses and counters derive from its recorded state.
function loop(now){const delta=last?now-last:0;last=now;if(controller?.cursor.playing){controller.cursor.tick(delta);if(now-lastPaint>=50||!controller.cursor.playing){paint();lastPaint=now;}}if(dirty&&renderer&&view){renderer.render(view.scene,camera);dirty=false;}requestAnimationFrame(loop);}requestAnimationFrame(loop);
