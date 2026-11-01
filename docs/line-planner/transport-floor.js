import * as THREE from './vendor/three.module.js';

export function corridorCells(paths,platforms,width=1.2){
  const rectangles=[];
  for(const path of paths)for(let i=1;i<path.length;i++){
    const a=path[i-1],b=path[i];if(Math.hypot(a[0]-b[0],a[2]-b[2])<1e-7)continue;
    rectangles.push({x0:Math.min(a[0],b[0])-width/2,x1:Math.max(a[0],b[0])+width/2,z0:Math.min(a[2],b[2])-width/2,z1:Math.max(a[2],b[2])+width/2});
  }
  const cuts=platforms.map(s=>({x0:s.position[0]-s.width/2,x1:s.position[0]+s.width/2,z0:-s.depth/2,z1:s.depth/2}));
  const xs=[...new Set([...rectangles,...cuts].flatMap(r=>[r.x0,r.x1]))].sort((a,b)=>a-b),zs=[...new Set([...rectangles,...cuts].flatMap(r=>[r.z0,r.z1]))].sort((a,b)=>a-b),inside=(r,x,z)=>x>r.x0&&x<r.x1&&z>r.z0&&z<r.z1,cells=[];
  for(let i=1;i<xs.length;i++)for(let j=1;j<zs.length;j++){const x=(xs[i-1]+xs[i])/2,z=(zs[j-1]+zs[j])/2;if(rectangles.some(r=>inside(r,x,z))&&!cuts.some(r=>inside(r,x,z)))cells.push({x0:xs[i-1],x1:xs[i],z0:zs[j-1],z1:zs[j]});}
  return cells;
}

export function createTransportFloor(){
  const root=new THREE.Group();root.name='planned-logistics-corridors';root.userData.kind='floor';
  const material=new THREE.MeshStandardMaterial({color:0x244b54,roughness:.95,metalness:0}),lineMaterial=new THREE.LineBasicMaterial({color:0x6ed3d0});
  const benchMaterial=new THREE.MeshStandardMaterial({color:0x3a6b78,roughness:.72,metalness:.15});
  let signature='',geometries=[],motionBounds=null,cells=[],benches=[];
  function clear(){for(const geometry of geometries)geometry.dispose();geometries=[];root.clear();}
  return {root,
    sync(config,plan,landings=[]){const key=JSON.stringify((config.logistics?.enabled||config.manualCart?.enabled)?[plan?.layout,landings]:null);if(key===signature)return;signature=key;clear();root.visible=!!(config.logistics?.enabled||config.manualCart?.enabled);motionBounds=null;cells=[];benches=[];if(!root.visible||!plan?.layout)return;
      const l=plan.layout,paths=[l.route,l.warehouseLoadPath,...Object.values(l.unloadPaths||{}),...(l.extraPaths||[])].filter(Boolean);cells=corridorCells(paths,l.stations,config.manualCart?.enabled?3.2:1.2);
      const positions=[],normals=[];
      for(const r of cells){positions.push(r.x0,0,r.z0,r.x1,0,r.z1,r.x1,0,r.z0,r.x0,0,r.z0,r.x0,0,r.z1,r.x1,0,r.z1);for(let i=0;i<6;i++)normals.push(0,1,0);}
      const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geometry.setAttribute('normal',new THREE.Float32BufferAttribute(normals,3));geometries.push(geometry);const mesh=new THREE.Mesh(geometry,material);mesh.receiveShadow=true;mesh.userData.kind='floor';root.add(mesh);
      const lineGeometry=new THREE.BufferGeometry().setFromPoints(l.route.map(p=>new THREE.Vector3(p[0],.012,p[2])));geometries.push(lineGeometry);const line=new THREE.Line(lineGeometry,lineMaterial);line.userData.kind='route';root.add(line);
      for(const landing of landings){const group=new THREE.Group();group.name=`landing:${landing.workerId}`;group.position.fromArray(landing.position);group.rotation.y=landing.heading;group.userData={kind:'landing-bench',workerId:landing.workerId,projectOriginal:true};const part=(size,position)=>{const g=new THREE.BoxGeometry(...size);geometries.push(g);const mesh=new THREE.Mesh(g,benchMaterial);mesh.position.set(...position);mesh.castShadow=true;mesh.receiveShadow=true;group.add(mesh);};part([.82,.05,.66],[0,-.025,0]);for(const x of [-.34,.34])for(const z of [-.25,.25])part([.045,.8,.045],[x,-.45,z]);root.add(group);benches.push({workerId:landing.workerId,position:[...landing.position],heading:landing.heading,deckY:landing.deckY});}
      const points=paths.flat(),xs=points.map(p=>p[0]),zs=points.map(p=>p[2]);motionBounds={min:[Math.min(...xs)-(config.manualCart?.enabled?1.7:1.1),0,Math.min(...zs)-(config.manualCart?.enabled?1.7:1.1)],max:[Math.max(...xs)+(config.manualCart?.enabled?1.7:1.1),2,Math.max(...zs)+(config.manualCart?.enabled?1.7:1.1)]};
    },snapshot(){return {motionBounds,cells:cells.length,benches:structuredClone(benches),groundY:0,meaning:'規劃通道平面；不代表動態碰撞或自主導航'};},dispose(){clear();material.dispose();lineMaterial.dispose();benchMaterial.dispose();motionBounds=null;}
  };
}
