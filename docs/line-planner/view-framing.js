import * as THREE from './vendor/three.module.js';

// Decorative surrounding floor must not shrink useful workcells in overview.
// Include complete station/machine groups and flow geometry, then label anchors.
export function framingContentBounds(root,labelAnchors=[]) {
  root.updateMatrixWorld(true);
  const bounds=new THREE.Box3();
  for(const child of root.children)if(child.userData.kind!=='floor')bounds.expandByObject(child);
  if(bounds.isEmpty())bounds.setFromObject(root);
  for(const anchor of labelAnchors)bounds.expandByPoint(new THREE.Vector3(...anchor));
  return bounds;
}

export function boundsCorners(bounds) {
  const points=[];
  for(const x of [bounds.min.x,bounds.max.x])for(const y of [bounds.min.y,bounds.max.y])for(const z of [bounds.min.z,bounds.max.z])points.push(new THREE.Vector3(x,y,z));
  return points;
}

// Solve all perspective-frustum inequalities in the actual camera basis.
// An oblique scene's depth changes the denominator independently at each corner.
export function fitPerspectiveBounds(bounds,{azimuth,elevation,fov=42,width,height,near=.1,minDistance=9}) {
  if(bounds.isEmpty())throw new Error('Cannot fit empty bounds');
  width=Math.max(1,width);height=Math.max(1,height);
  const aspect=width/height,target=bounds.getCenter(new THREE.Vector3());
  const outward=new THREE.Vector3(Math.sin(azimuth)*Math.cos(elevation),Math.sin(elevation),Math.cos(azimuth)*Math.cos(elevation));
  const right=new THREE.Vector3(Math.cos(azimuth),0,-Math.sin(azimuth));
  const up=new THREE.Vector3().crossVectors(outward,right);
  const margins={left:Math.min(84,width*.22),right:Math.min(84,width*.22),top:Math.min(44,height*.15),bottom:Math.min(76,height*.24)};
  const limits={x:1-2*margins.left/width,top:1-2*margins.top/height,bottom:1-2*margins.bottom/height};
  const tanV=Math.tan(THREE.MathUtils.degToRad(fov/2)),tanH=tanV*aspect;
  let distance=minDistance;
  for(const corner of boundsCorners(bounds)){
    const relative=corner.sub(target),depth=relative.dot(outward),horizontal=relative.dot(right),vertical=relative.dot(up);
    distance=Math.max(distance,depth+Math.abs(horizontal)/(tanH*limits.x),depth+(vertical>=0?vertical/(tanV*limits.top):-vertical/(tanV*limits.bottom)),depth+near*1.25);
  }
  // Small numerical slack; no arbitrary distance clamp that could crop a valid layout.
  distance=distance*1.002+.01;
  return {target,distance,far:Math.max(2000,distance+bounds.getSize(new THREE.Vector3()).length()*2+10),margins,limits,bounds:bounds.clone()};
}

export function projectedBounds(bounds,camera,width,height) {
  const points=boundsCorners(bounds).map(point=>point.project(camera));
  return {left:Math.min(...points.map(p=>(p.x*.5+.5)*width)),right:Math.max(...points.map(p=>(p.x*.5+.5)*width)),top:Math.min(...points.map(p=>(-p.y*.5+.5)*height)),bottom:Math.max(...points.map(p=>(-p.y*.5+.5)*height)),near:Math.min(...points.map(p=>p.z)),far:Math.max(...points.map(p=>p.z))};
}
