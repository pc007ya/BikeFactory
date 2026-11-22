import * as T from './vendor/three.module.min.js';
import {buildFatigueMachine} from './fatigue-machine.js';
import {createSceneModel} from './scene-model.js';

// A rigid fixture with an illustrative axial displacement field. Rear datum is x=0.
export function createRig(host, specimen, onAxle) {
  const renderer = new T.WebGLRenderer({antialias:true});
  renderer.setPixelRatio(Math.min(devicePixelRatio,2));
  host.prepend(renderer.domElement);
  const scene = new T.Scene(), camera = new T.PerspectiveCamera(32,1,.03,30);
  scene.background = new T.Color(0xe1e9e6);
  scene.add(new T.HemisphereLight(0xffffff,0xa9a99a,2.4));
  const light = new T.DirectionalLight(0xfff4dd,2.6);
  light.position.set(-1,4,3); scene.add(light);
  const {root,work,arrow,slide,span,axleY,hitParts}=buildFatigueMachine(createSceneModel(),specimen);
  scene.add(root);
  const floor = new T.Mesh(new T.PlaneGeometry(40,40),new T.MeshStandardMaterial({color:0xcbd5d0}));
  floor.rotation.x=-Math.PI/2; scene.add(floor);
  const surface = new T.GridHelper(10,40,0xb6c3bd,0xc0cdc6);surface.position.y=.001;scene.add(surface);
  const aim=new T.Vector3(.83,1.14,0);
  let yaw=.27,pitch=.20,distance=3.5,delta=0,force=0,gain=10;
  function draw(){
    const w=host.clientWidth,h=host.clientHeight;
    renderer.setSize(w,h,false);camera.aspect=w/h;
    const radius=distance*Math.max(1,1.48/camera.aspect);
    camera.position.set(aim.x+radius*Math.sin(yaw)*Math.cos(pitch),aim.y+radius*Math.sin(pitch),radius*Math.cos(yaw)*Math.cos(pitch));
    camera.lookAt(aim);camera.updateProjectionMatrix();
    const dx=delta*.001*gain;
    work.scale.x=1+dx/span;slide.position.x=span+dx;
    arrow.visible=Math.abs(force)>.01;arrow.position.set(span+dx,axleY+.095,.15);
    arrow.setDirection(new T.Vector3(force<0?-1:1,0,0));
    renderer.render(scene,camera);
  }
  new ResizeObserver(draw).observe(host);
  const canvas=renderer.domElement, ray=new T.Raycaster();let drag=null;
  canvas.onpointerdown=e=>{drag={x:e.clientX,y:e.clientY,startX:e.clientX,startY:e.clientY};canvas.setPointerCapture(e.pointerId);};
  canvas.onpointermove=e=>{
    if(!drag)return;
    yaw-=(e.clientX-drag.x)*.008;pitch=T.MathUtils.clamp(pitch+(e.clientY-drag.y)*.006,-.07,1.15);
    drag.x=e.clientX;drag.y=e.clientY;draw();
  };
  canvas.onpointerup=e=>{
    if(drag && Math.hypot(e.clientX-drag.startX,e.clientY-drag.startY)<6){
      const rect=canvas.getBoundingClientRect();
      ray.setFromCamera({x:2*(e.clientX-rect.left)/rect.width-1,y:1-2*(e.clientY-rect.top)/rect.height},camera);
      if(ray.intersectObjects(hitParts).length)onAxle();
    }drag=null;
  };
  canvas.onpointercancel=()=>drag=null;
  canvas.addEventListener('wheel',e=>{e.preventDefault();distance=T.MathUtils.clamp(distance*Math.exp(e.deltaY*.001),1.9,6);draw();},{passive:false});
  draw();
  return {
    update(sample,displayGain){delta=sample.displacement;force=sample.force;gain=displayGain;draw();},
    view(side){yaw=side?0:.27;pitch=side?.035:.20;distance=3.5;draw();}
  };
}
