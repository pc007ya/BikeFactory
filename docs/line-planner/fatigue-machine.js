import * as T from './vendor/three.module.min.js';

export function buildFatigueMachine(factory,specimen=null){
  const scene=new T.Group();
  const bench = factory.fixturePart('bench');
  const axleY = 1.29, span = specimen ? specimen.span : Math.hypot(1.02,.02);
  bench.scale.x=2.02; bench.position.x=.85; scene.add(bench);
  const steel=0x83989e, graphite=0x35474c, gold=0xffb735, green=0x186963;
  function mesh(parent,geometry,color,x,y,z) {
    const object=new T.Mesh(geometry,new T.MeshStandardMaterial({color,roughness:.4,metalness:.38}));
    object.position.set(x,y,z);parent.add(object);return object;
  }
  function box(parent,x,y,z,w,h,d,color) {return mesh(parent,new T.BoxGeometry(w,h,d),color,x,y,z);}
  function shaft(parent,x,y,z,r,length,color,axis) {
    const obj=mesh(parent,new T.CylinderGeometry(r,r,length,32),color,x,y,z);
    if(axis==='x')obj.rotation.z=Math.PI/2;
    if(axis==='z')obj.rotation.x=Math.PI/2;
    return obj;
  }
  const work = new T.Group();work.position.y=axleY;scene.add(work);
  if(specimen) {
    work.add(specimen.model);
  } else {
    const frame=factory.fixturePart('specimen'), level=new T.Group();
    frame.position.set(.53,-1.24,-.04);level.rotation.z=Math.atan2(.02,1.02);
    level.add(frame);work.add(level);
  }
  // Bed surface is at 1.0475 m. Two ears support each axle in double shear.
  box(scene,0,1.068,0,.28,.04,.46,graphite);
  for(const z of [-.15,.15]){
    box(scene,0,1.18,z,.12,.2,.045,steel);
    shaft(scene,0,axleY,z,.066,.048,graphite,'z');
  }
  shaft(scene,0,axleY,0,.022,.39,steel,'z');
  const slide=new T.Group();slide.position.set(span,axleY,0);scene.add(slide);
  const hitParts=[];
  for(const z of [-.13,.13]){
    box(scene,span,1.072,z,.45,.048,.046,steel);
    box(slide,0,-.14,z,.14,.085,.076,graphite);
    box(slide,0,-.058,z,.07,.15,.04,steel);
    hitParts.push(shaft(slide,0,0,z,.043,.052,gold,'z'));
  }
  hitParts.push(shaft(slide,0,0,0,.022,.34,gold,'z'));
  box(slide,.08,0,0,.06,.055,.29,graphite);
  for(const z of [-.13,.13])box(slide,.04,0,z,.11,.05,.042,graphite);
  shaft(slide,.215,0,0,.021,.24,steel,'x');
  shaft(slide,.24,0,0,.038,.083,green,'x'); // axial load cell
  const cylinderX=span+.53;
  shaft(scene,cylinderX,axleY,0,.085,.4,green,'x');
  for(const end of [-.19,.19]){
    box(scene,cylinderX+end,axleY,0,.05,.18,.18,graphite);
    box(scene,cylinderX+end,1.15,0,.06,.17,.14,steel);
    box(scene,cylinderX+end,1.068,0,.14,.041,.23,graphite);
  }
  const arrow=new T.ArrowHelper(new T.Vector3(1,0,0),new T.Vector3(),.23,gold,.065,.052);
  scene.add(arrow);
  arrow.visible=false;
  return {root:scene,work,arrow,slide,span,axleY,hitParts};
}
