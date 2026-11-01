import * as THREE from './vendor/three.module.js';
import {fitPerspectiveBounds} from './view-framing.js?v=ba4c9d3625ce';

export function fitTransportView({amrBounds,handlerBounds=[],payloadBounds=null,pathPoints=[],view}){
  const bounds=amrBounds?.clone()||new THREE.Box3();
  for(const box of handlerBounds)if(box&&!box.isEmpty())bounds.union(box);
  if(payloadBounds&&!payloadBounds.isEmpty())bounds.union(payloadBounds);
  // Reserve the full handler's next walking/standing envelope, so a crouched
  // grasp does not frame away the same person's head as they stand and carry.
  for(const point of pathPoints){bounds.expandByPoint(new THREE.Vector3(point[0]-.8,0,point[2]-.8));bounds.expandByPoint(new THREE.Vector3(point[0]+.8,1.95,point[2]+.8));}
  if(bounds.isEmpty())return null;
  return fitPerspectiveBounds(bounds,{...view,minDistance:4.8});
}
