import * as THREE from './vendor/three.module.js';
import {fitPerspectiveBounds} from './view-framing.js?v=013e77639fa8';

// Native prop wrappers preserve source pivots; the cart geometry is offset from
// its wrapper origin. Fit all world-space geometry rather than that origin.
export function assetFocusView(root,id,view){
  const object=root.getObjectByName(id);if(!object)return null;
  root.updateMatrixWorld(true);
  const bounds=new THREE.Box3();
  object.traverse(child=>{if(child.isMesh&&!child.userData.selectionMarker)bounds.expandByObject(child,true);});
  if(bounds.isEmpty())return null;
  return fitPerspectiveBounds(bounds,{...view,minDistance:id.startsWith('worker:')?3.8:4.8});
}
