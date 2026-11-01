import * as THREE from '../slice-g3/node_modules/three/build/three.module.js';
// Independent world-space geometric inspection; no renderer or model mutation.
export function meshBounds(root,{visibleOnly=true}={}) {
 root.updateWorldMatrix(true,true);const result=[];
 root.traverse(object=>{if(!object.isMesh)return;let visible=true;for(let p=object;p;p=p.parent)visible=visible&&p.visible;if(visibleOnly&&!visible)return;result.push({object,box:new THREE.Box3().setFromObject(object,true)});});return result;
}
export function pointToMeshDistance(point,root,{filter=()=>true,visibleOnly=true}={}) {
 const p=point.isVector3?point:new THREE.Vector3(...point),triangle=new THREE.Triangle(),closest=new THREE.Vector3();let minimum=Infinity,witness=null;
 for(const {object}of meshBounds(root,{visibleOnly})){if(!filter(object))continue;const geometry=object.geometry,position=geometry.attributes.position,index=geometry.index,count=index?.count??position.count;
  for(let i=0;i<count;i+=3){const ids=[0,1,2].map(j=>index?index.getX(i+j):i+j);triangle.a.fromBufferAttribute(position,ids[0]).applyMatrix4(object.matrixWorld);triangle.b.fromBufferAttribute(position,ids[1]).applyMatrix4(object.matrixWorld);triangle.c.fromBufferAttribute(position,ids[2]).applyMatrix4(object.matrixWorld);triangle.closestPointToPoint(p,closest);const d=closest.distanceTo(p);if(d<minimum){minimum=d;witness={mesh:object.name,selectionId:object.userData.selectionId,triangle:i/3,point:closest.toArray()};}}
 }return {distance:minimum,witness};
}
export function positiveAabbOverlaps(a,b,{epsilon=1e-8,filterA=()=>true,filterB=()=>true}={}) {
 const listA=meshBounds(a).filter(x=>filterA(x.object)),listB=meshBounds(b).filter(x=>filterB(x.object)),result=[];
 for(const x of listA)for(const y of listB){if(!x.box.intersectsBox(y.box))continue;const intersection=x.box.clone().intersect(y.box),size=intersection.getSize(new THREE.Vector3());if(size.x>epsilon&&size.y>epsilon&&size.z>epsilon)result.push({a:x.object,b:y.object,size:size.toArray(),minimum:intersection.min.toArray(),maximum:intersection.max.toArray()});}return result;
}
// Exact triangle-vs-oriented-box surface witness (not just world AABB).
export function meshIntersectsBoxMesh(mesh,boxMesh){
 boxMesh.geometry.computeBoundingBox();const box=boxMesh.geometry.boundingBox,inv=boxMesh.matrixWorld.clone().invert(),g=mesh.geometry,p=g.attributes.position,idx=g.index,n=idx?.count??p.count,tri=new THREE.Triangle();
 for(let i=0;i<n;i+=3){for(const[k,v]of [[0,tri.a],[1,tri.b],[2,tri.c]])v.fromBufferAttribute(p,idx?idx.getX(i+k):i+k).applyMatrix4(mesh.matrixWorld).applyMatrix4(inv);if(tri.intersectsBox(box))return {intersects:true,triangle:i/3};}return {intersects:false};
}
