import * as THREE from './vendor/three.module.js';
import {fitPerspectiveBounds} from './view-framing.js?v=307311a1019b';

// Native prop wrappers preserve source pivots; the cart geometry is offset from
// its wrapper origin. Fit all world-space geometry rather than that origin.
export function assetGeometryBounds(root,id,{precise=true}={}){
  const object=root.getObjectByName(id);if(!object)return null;
  root.updateMatrixWorld(true);
  const bounds=new THREE.Box3();
  object.traverse(child=>{if(child.isMesh&&!child.userData.selectionMarker&&!child.userData.excludeGeometryBounds)bounds.expandByObject(child,precise);});
  if(bounds.isEmpty())return null;
  return bounds;
}
export function assetFocusView(root,id,view){
  const bounds=assetGeometryBounds(root,id);if(!bounds)return null;
  return fitPerspectiveBounds(bounds,{...view,minDistance:id.startsWith('worker:')?3.8:4.8});
}
