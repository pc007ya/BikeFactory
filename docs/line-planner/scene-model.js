import * as THREE from './vendor/three.module.min.js';

// The configuration owns logical machines. Their visual subtree is purely a
// schematic representation: no visual part creates capacity or simulated work.
export function createSceneModel() {
  const root = new THREE.Group();
  root.name = 'planner-config-root';
  let inventory = { stations: [], machines: [], links: [] };
  let created = 0, disposed = 0, builds = 0, selected = null;
  const resources = new Set(), geometries = new Map(), materials = new Map();
  const own = resource => { resources.add(resource); created++; return resource; };
  const geometry = (key, build) => {
    if (!geometries.has(key)) geometries.set(key, own(build()));
    return geometries.get(key);
  };
  const palettes = {
    paint: {color:0x368b91,roughness:.34,metalness:0},
    lightPaint: {color:0xd2dcdb,roughness:.39,metalness:0},
    darkPaint: {color:0x263947,roughness:.5,metalness:0},
    metal: {color:0xa6b4b9,roughness:.27,metalness:.82},
    brushed: {color:0x73848b,roughness:.4,metalness:.72},
    rubber: {color:0x162229,roughness:.92,metalness:0},
    plastic: {color:0x354b5a,roughness:.62,metalness:0},
    safety: {color:0xe7ad48,roughness:.45,metalness:0},
    blueBin: {color:0x437c9d,roughness:.58,metalness:0},
    blackGlass: {color:0x0c1d2b,roughness:.19,metalness:0},
    screen: {color:0x72d6c7,roughness:.3,metalness:0,emissive:0x2b7c70,emissiveIntensity:.32},
    red: {color:0xb64d44,roughness:.48,metalness:0},
    floor: {color:0x162734,roughness:.94,metalness:0},
    platform: {color:0x334958,roughness:.85,metalness:0},
    flow: {color:0x4aa99f,roughness:.64,metalness:0},
    ring: {color:0xffcd76,roughness:.55,metalness:0,emissive:0xbd842c,emissiveIntensity:.5},
    pendingLamp: {color:0x788a99,roughness:.25,metalness:0},
    greenLamp: {color:0x62c9a5,roughness:.25,metalness:0,emissive:0x297b5b,emissiveIntensity:.45},
    amberLamp: {color:0xe2b25a,roughness:.25,metalness:0,emissive:0x976a24,emissiveIntensity:.4},
    redLamp: {color:0xd46d59,roughness:.25,metalness:0,emissive:0x873c2c,emissiveIntensity:.4}
  };
  function material(key) {
    if (!materials.has(key)) {
      const result = own(new THREE.MeshStandardMaterial(palettes[key] || palettes.paint));
      result.name = key;
      materials.set(key, result);
    }
    return materials.get(key);
  }
  function roundedBox(w,h,d,r=.035) {
    const radius=Math.min(r,w/5,h/5,d/5), bx=w/2-radius/2, by=h/2-radius/2;
    return geometry(`bevel:${w}:${h}:${d}:${radius}`,()=>{
      const shape=new THREE.Shape();
      shape.moveTo(-bx+radius,-by);shape.lineTo(bx-radius,-by);
      shape.quadraticCurveTo(bx,-by,bx,-by+radius);shape.lineTo(bx,by-radius);
      shape.quadraticCurveTo(bx,by,bx-radius,by);shape.lineTo(-bx+radius,by);
      shape.quadraticCurveTo(-bx,by,-bx,by-radius);shape.lineTo(-bx,-by+radius);
      shape.quadraticCurveTo(-bx,-by,-bx+radius,-by);
      const geo=new THREE.ExtrudeGeometry(shape,{depth:d-2*radius,bevelEnabled:true,bevelSegments:2,steps:1,bevelSize:radius/2,bevelThickness:radius,curveSegments:2});
      geo.translate(0,0,-d/2+radius);return geo;
    });
  }
  const unitBox=()=>geometry('unit-box',()=>new THREE.BoxGeometry(1,1,1));
  const cylinder=()=>geometry('unit-cylinder',()=>new THREE.CylinderGeometry(1,1,1,12));
  function transform(position=[0,0,0],scale=[1,1,1],rotation=[0,0,0]) {
    return new THREE.Matrix4().compose(new THREE.Vector3(...position),new THREE.Quaternion().setFromEuler(new THREE.Euler(...rotation)),new THREE.Vector3(...scale));
  }
  // Merge static pieces by material, independently for each logical machine.
  // This keeps raycasting/identity local while avoiding a draw call per bolt.
  function merge(parts) {
    let count=0;
    for(const part of parts) count+=part.geometry.index?.count || part.geometry.attributes.position.count;
    const positions=new Float32Array(count*3),normals=new Float32Array(count*3),uvs=new Float32Array(count*2);
    const point=new THREE.Vector3(),normal=new THREE.Vector3();let at=0;
    for(const part of parts){
      const geo=part.geometry,normalMatrix=new THREE.Matrix3().getNormalMatrix(part.matrix);
      const position=geo.attributes.position,sourceNormal=geo.attributes.normal,uv=geo.attributes.uv;
      const length=geo.index?.count || position.count;
      for(let i=0;i<length;i++){
        const index=geo.index?geo.index.getX(i):i;
        point.fromBufferAttribute(position,index).applyMatrix4(part.matrix);positions.set(point.toArray(),at*3);
        if(sourceNormal)normal.fromBufferAttribute(sourceNormal,index).applyMatrix3(normalMatrix).normalize();else normal.set(0,1,0);
        normals.set(normal.toArray(),at*3);if(uv)uvs.set([uv.getX(index),uv.getY(index)],at*2);at++;
      }
    }
    const geo=own(new THREE.BufferGeometry());
    geo.setAttribute('position',new THREE.BufferAttribute(positions,3));geo.setAttribute('normal',new THREE.BufferAttribute(normals,3));geo.setAttribute('uv',new THREE.BufferAttribute(uvs,2));geo.computeBoundingSphere();return geo;
  }
  function builder() {
    const buckets=new Map();let partCount=0;
    const add=(geo,key,matrix)=>{if(!buckets.has(key))buckets.set(key,[]);buckets.get(key).push({geometry:geo,matrix});partCount++;};
    return {
      box(size,position,key,bevel=false){add(bevel?roundedBox(...size):unitBox(),key,transform(position,bevel?[1,1,1]:size));},
      cylinder(radius,length,position,key,rotation=[0,0,0]){add(cylinder(),key,transform(position,[radius,length,radius],rotation));},
      tube(a,b,radius,key){const start=new THREE.Vector3(...a),end=new THREE.Vector3(...b),direction=end.clone().sub(start);const quaternion=new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0),direction.clone().normalize());add(cylinder(),key,new THREE.Matrix4().compose(start.add(end).multiplyScalar(.5),quaternion,new THREE.Vector3(radius,direction.length(),radius)));},
      finish(parent,metadata){for(const [key,parts] of buckets){const mesh=new THREE.Mesh(merge(parts),material(key));mesh.name=`${metadata.machineId||metadata.kind}:${key}`;mesh.userData={...metadata,visualPart:key,sourceParts:parts.length};mesh.castShadow=key!=='floor';mesh.receiveShadow=true;parent.add(mesh);}return {sourceParts:partCount,drawMeshes:buckets.size};}
    };
  }
  function feet(b,x=.51,z=.43){for(const fx of [-x,x])for(const fz of [-z,z]){b.cylinder(.075,.07,[fx,.045,fz],'rubber');b.cylinder(.032,.12,[fx,.13,fz],'metal');}}
  function table(b){
    feet(b);b.box([1.27,.075,1.04],[0,1.01,0],'metal',true);
    for(const x of [-.51,.51])for(const z of [-.43,.43])b.box([.075,.81,.075],[x,.55,z],'brushed');
    b.box([1.09,.055,.84],[0,.28,0],'darkPaint',true);
    b.box([1.18,.22,.1],[0,.86,.47],'paint',true);
    for(const x of [-.52,.52])b.box([.04,.045,.86],[x,.73,0],'safety');
  }
  function controller(b,x=.66,y=1.17,z=.26){
    b.tube([x,.17,z],[x,y-.15,z],.027,'brushed');b.box([.25,.32,.12],[x,y,z],'plastic',true);
    b.box([.18,.14,.014],[x,y+.045,z+.067],'blackGlass',true);b.box([.14,.025,.018],[x,y+.065,z+.077],'screen');
    b.cylinder(.022,.02,[x-.065,y-.075,z+.073],'red',[Math.PI/2,0,0]);b.cylinder(.018,.02,[x+.025,y-.075,z+.073],'greenLamp',[Math.PI/2,0,0]);
    b.tube([x,y-.17,z],[x,.47,z],.009,'rubber');b.tube([x,.47,z],[.34,.35,0],.009,'rubber');
  }
  function frame(b){
    const points={rear:[-.53,1.24,.04],bottom:[-.12,1.22,.04],seat:[-.23,1.73,.04],head:[.39,1.65,.04],fork:[.49,1.22,.04]};
    for(const [a,c] of [['rear','bottom'],['rear','seat'],['bottom','seat'],['seat','head'],['bottom','head']])b.tube(points[a],points[c],.023,'paint');
    b.tube([.39,1.72,.04],[.41,1.56,.04],.031,'brushed');b.tube([.41,1.57,.04],points.fork,.017,'metal');
    b.tube([-.23,1.7,.04],[-.25,1.83,.04],.016,'metal');b.box([.2,.035,.075],[-.26,1.84,.04],'rubber',true);
    b.tube([.39,1.73,.04],[.43,1.82,.04],.014,'metal');b.tube([.43,1.82,-.07],[.43,1.82,.16],.014,'rubber');
    for(const x of [-.53,-.12,.49]){b.box([.11,.08,.16],[x,1.1,.04],'safety',true);b.tube([x,1.055,.04],[x,1.22,.04],.025,'brushed');}
    b.cylinder(.05,.1,[-.12,1.22,.04],'metal',[Math.PI/2,0,0]);
  }
  function assembly(b){
    table(b);b.box([.94,.055,.46],[0,1.075,0],'darkPaint',true);frame(b);
    // Tool rail, supported at both ends; no floating powered tool.
    for(const x of [-.56,.56])b.box([.055,.68,.055],[x,1.4,-.4],'brushed');
    b.box([1.15,.06,.06],[0,1.74,-.4],'brushed',true);
    b.tube([.48,1.72,-.39],[.48,1.38,-.39],.011,'rubber');b.box([.075,.17,.075],[.48,1.29,-.39],'plastic',true);
    b.box([.34,.09,.22],[-.36,.34,.23],'blueBin',true);
    for(const x of [-.43,-.34,-.25])b.cylinder(.022,.13,[x,.41,.23],'metal',[Math.PI/2,0,0]);
    controller(b);
  }
  function prep(b){
    table(b);
    // Rear rack and lipped picking bins visibly distinguish kitting from assembly.
    for(const x of [-.52,.52])b.box([.055,.84,.055],[x,1.38,-.4],'paint');
    for(const y of [1.3,1.68]){
      b.box([1.12,.045,.3],[0,y,-.39],'brushed',true);
      for(const x of [-.35,0,.35]){
        b.box([.27,.055,.26],[x,y+.055,-.37],'blueBin',true);
        b.box([.27,.12,.035],[x,y+.11,-.49],'blueBin',true);
        for(const side of [-1,1])b.box([.025,.12,.26],[x+side*.125,y+.11,-.37],'blueBin');
        b.box([.27,.065,.025],[x,y+.075,-.25],'blueBin');
        b.box([.12,.03,.012],[x,y+.08,-.232],'lightPaint');
        for(const offset of [-.06,.045])b.cylinder(.026,.09,[x+offset,y+.115,-.36],'metal',[Math.PI/2,0,0]);
      }
    }
    b.box([.47,.035,.35],[-.19,1.07,.17],'rubber',true);
    b.box([.2,.09,.17],[.36,1.095,.15],'plastic',true);b.box([.15,.012,.12],[.36,1.147,.15],'metal',true);
    b.tube([-.43,1.09,.12],[-.19,1.09,.12],.021,'metal');b.tube([-.43,1.09,.22],[-.24,1.09,.22],.021,'metal');
    controller(b,.65,1.21,.3);
  }
  function qc(b){
    feet(b);b.box([1.3,.2,1.06],[0,.28,0],'lightPaint',true);
    for(const x of [-.53,.53])b.box([.1,.7,.1],[x,.65,-.37],'brushed');
    b.box([1.18,.1,.85],[0,1.0,0],'darkPaint',true);
    for(const z of [-.23,.23]){
      b.cylinder(.11,.86,[0,1.13,z],'rubber',[0,0,Math.PI/2]);
      b.cylinder(.045,1.05,[0,1.13,z],'metal',[0,0,Math.PI/2]);
      for(const side of [-1,1])b.box([.13,.2,.16],[side*.52,1.075,z],'lightPaint',true);
    }
    // Low U-shaped inspection guard and a supported gauge/probe.
    for(const x of [-.56,.56]){b.tube([x,1.05,-.3],[x,1.57,-.3],.027,'safety');b.tube([x,1.57,-.3],[x,1.57,.28],.027,'safety');}
    b.tube([-.56,1.57,-.3],[.56,1.57,-.3],.027,'safety');
    b.tube([0,.4,-.45],[0,1.89,-.45],.035,'brushed');b.tube([0,1.85,-.45],[0,1.85,.05],.026,'brushed');
    b.cylinder(.12,.07,[0,1.72,.13],'lightPaint',[Math.PI/2,0,0]);b.cylinder(.095,.009,[0,1.72,.17],'blackGlass',[Math.PI/2,0,0]);
    b.tube([0,1.72,.177],[.047,1.76,.177],.006,'safety');b.tube([0,1.58,.05],[0,1.35,.05],.012,'metal');
    b.box([.48,.19,.35],[0,1.25,.04],'paint',true);controller(b,.67,1.28,.3);
  }
  function generic(b){table(b);b.box([.7,.44,.55],[0,1.27,-.13],'lightPaint',true);b.box([.48,.2,.08],[0,1.28,.19],'blackGlass',true);b.box([.52,.035,.035],[0,1.45,.23],'safety');controller(b);}
  function compact(b,resolvedCategory){
    // Larger planning configurations keep every logical machine visible, but
    // reduce bolts/cabling and control detail rather than inventing capacity.
    feet(b);b.box([1.24,.16,1.03],[0,.43,0],'darkPaint',true);
    for(const x of [-.5,.5])b.box([.1,.5,.75],[x,.74,0],'brushed');
    b.box([1.27,.07,1.03],[0,1.01,0],'metal',true);
    if(resolvedCategory==='assembly'){
      for(const [a,c] of [[[ -.52,1.22,0],[-.2,1.7,0]],[[-.2,1.7,0],[-.1,1.22,0]],[[-.1,1.22,0],[-.52,1.22,0]],[[-.2,1.7,0],[.38,1.63,0]],[[.38,1.63,0],[-.1,1.22,0]],[[.38,1.63,0],[.49,1.22,0]]])b.tube(a,c,.025,'paint');
      b.box([1.08,.06,.14],[0,1.08,0],'darkPaint',true);
    }else if(resolvedCategory==='prep'){
      for(const x of [-.5,.5])b.box([.05,.72,.05],[x,1.42,-.4],'paint');
      for(const y of [1.34,1.7]){b.box([1.1,.04,.27],[0,y,-.4],'metal');for(const x of [-.35,0,.35])b.box([.28,.12,.24],[x,y+.08,-.4],'blueBin',true);}
    }else if(resolvedCategory==='qc'){
      for(const z of [-.22,.22])b.cylinder(.11,.95,[0,1.15,z],'rubber',[0,0,Math.PI/2]);
      b.tube([.5,1.05,-.4],[.5,1.78,-.4],.033,'paint');b.tube([.5,1.76,-.4],[0,1.76,0],.022,'brushed');
      b.box([.23,.17,.1],[0,1.65,.05],'lightPaint',true);
    }else b.box([.78,.48,.6],[0,1.3,0],'lightPaint',true);
  }
  function wheel(b){
    // Original demonstrator support bench; no mounted bicycle/frame decoration.
    for(const x of[-.76,.76])for(const z of[-.36,1.04]){b.box([.065,1.04,.065],[x,.52,z],'brushed');b.cylinder(.055,.04,[x,.02,z],'rubber');}
    b.box([1.72,.07,1.7],[0,1.065,.34],'metal',true);b.box([.24,.028,.24],[0,1.1,0],'rubber',true);b.cylinder(.012,.09,[0,1.155,0],'brushed');
    b.box([1.55,.045,.12],[0,.78,-.42],'paint',true);
  }
  function steerer(b){table(b);b.box([.75,.018,.35],[.05,1.055,0],'rubber',true);b.box([.18,.08,.13],[-.47,1.09,-.32],'paint',true);}
  function category(station,operation){
    if(['prep','assembly','qc','generic','wheel','steerer'].includes(operation.visualType))return operation.visualType;
    const resolve=value=>{
      const label=String(value||'').toLowerCase();
      if(/品管|檢測|檢查|量測|檢驗|inspect|quality|\bqc\b|gauge|roller/.test(label))return 'qc';
      if(/備料|配料|料架|揀料|prep|kit|rack/.test(label))return 'prep';
      if(/組裝|裝配|assembly|fixture|jig|扭力|鎖付/.test(label))return 'assembly';
      return null;
    };
    return resolve(operation.machineType)||resolve(operation.name)||resolve(station.name)||resolve(station.id)||'generic';
  }
  function clear(){for(const resource of resources){resource.dispose();disposed++;}resources.clear();geometries.clear();materials.clear();root.clear();inventory={stations:[],machines:[],links:[]};}
  function select(value){
    selected=value?{...value}:null;
    const matches=data=>!!selected&&data.stationId===selected.stationId&&(!selected.operationId||data.operationId===selected.operationId)&&(!selected.machineId||data.machineId===selected.machineId);
    root.traverse(object=>{if(object.userData.role==='logical-machine')object.userData.selected=matches(object.userData);if(object.userData.role==='selection-ring')object.visible=matches(object.userData);});
    for(const machine of inventory.machines)machine.selected=matches(machine);
  }
  function sync(config,result=null){
    clear();builds++;let x=0;
    const source=Array.isArray(config.stations)?config.stations:[];
    const totalMachines=source.reduce((sum,station)=>sum+(station.operations||[]).reduce((n,op)=>n+(Number.isInteger(op.machines)&&op.machines>0&&op.machines<=50?op.machines:0),0),0);
    const detailLevel=totalMachines>30?'compact':'full';
    for(let si=0;si<source.length;si++){
      const station=source[si],operations=Array.isArray(station.operations)?station.operations:[];
      const count=op=>Number.isInteger(op.machines)&&op.machines>0&&op.machines<=50?op.machines:0;
      const width=Math.max(3,...operations.map(op=>count(op)*1.75+.7)),depth=Math.max(3.7,operations.length*2.4+1.4),center=x+width/2;
      const group=new THREE.Group();group.name=`station:${station.id}`;group.position.x=center;group.userData={stationId:station.id};root.add(group);
      const platform=builder();platform.box([width,.12,depth],[0,-.06,0],'platform',true);
      for(const edge of [-1,1])platform.box([width-.12,.006,.025],[0,.004,edge*(depth/2-.08)],'safety');
      platform.finish(group,{stationId:station.id,kind:'platform'});
      inventory.stations.push({stationId:station.id,name:station.name,index:si,position:[center,0,0],width,depth});
      for(let oi=0;oi<operations.length;oi++){
        const operation=operations[oi],resolvedCategory=category(station,operation);
        for(let mi=0;mi<count(operation);mi++){
          const machineId=`${operation.id}:${mi+1}`,position=[(mi-(count(operation)-1)/2)*1.75,0,(oi-(operations.length-1)/2)*2.4];
          const metadata={stationId:station.id,operationId:operation.id,machineId,kind:'machine',category:resolvedCategory,detailLevel};
          const metrics=result?.stations?.find(s=>s.id===station.id)?.machines?.find(m=>m.id===machineId&&m.operationId===operation.id)||null;
          const status=!metrics?'pending':metrics.down>metrics.busy?'fault-dominant':metrics.blocked>metrics.busy?'blocked-dominant':'available-summary';
          const machine=new THREE.Group();machine.name=machineId;machine.position.set(...position);machine.userData={...metadata,role:'logical-machine',selected:false,status};group.add(machine);
          const visual=new THREE.Group();visual.name=`visual:${resolvedCategory}`;visual.userData={role:'visual',category:resolvedCategory,detailLevel};machine.add(visual);
          const parts=builder();if(detailLevel==='compact')compact(parts,resolvedCategory);else ({assembly,prep,qc,generic,wheel,steerer}[resolvedCategory])(parts);
          // Tower lamp is the only KPI-colored component. It is an observation
          // summary, never presented as the live instantaneous machine state.
          parts.tube([-.6,.23,-.42],[-.6,1.93,-.42],.018,'brushed');
          parts.cylinder(.044,.07,[-.6,1.9,-.42],'rubber');
          parts.cylinder(.038,.11,[-.6,1.99,-.42],status==='pending'?'pendingLamp':status==='fault-dominant'?'redLamp':status==='blocked-dominant'?'amberLamp':'greenLamp');
          const visualStats=parts.finish(visual,metadata);
          const ringGeometry=geometry('selection-ring',()=>new THREE.TorusGeometry(.83,.012,4,48));
          const ring=new THREE.Mesh(ringGeometry,material('ring'));ring.name=`selection:${machineId}`;ring.rotation.x=-Math.PI/2;ring.position.y=.018;ring.visible=false;ring.userData={...metadata,kind:'selection',role:'selection-ring'};machine.add(ring);
          inventory.machines.push({...metadata,name:operation.name,stationName:station.name,type:operation.machineType,seconds:operation.seconds,position:[center+position[0],.95,position[2]],result:metrics?{...metrics}:null,status,selected:false,visual:visualStats});
        }
      }
      x+=width+3;
    }
    const totalWidth=Math.max(4,x-3),totalDepth=Math.max(4,...inventory.stations.map(s=>s.depth));
    const environment=builder();environment.box([totalWidth+5,.15,totalDepth+7],[totalWidth/2,-.21,0],'floor',true);
    // Small, flat aisle markings ground the layouts without architectural walls.
    for(let lane=0;lane<Math.ceil((totalWidth+2)/1.1);lane++)environment.box([.55,.005,.035],[-.5+lane*1.1,-.13,totalDepth/2+2],'brushed');
    environment.finish(root,{kind:'floor'});
    const flowZ=totalDepth/2+1.05;
    for(let i=0;i<inventory.stations.length-1;i++){
      const a=inventory.stations[i],b=inventory.stations[i+1],start=a.position[0],end=b.position[0]-.35;
      const flow=builder();flow.box([end-start,.025,.065],[(start+end)/2,-.11,flowZ],'flow',true);
      flow.tube([end-.23,-.11,flowZ-.16],[end,-.11,flowZ],.032,'flow');flow.tube([end-.23,-.11,flowZ+.16],[end,-.11,flowZ],.032,'flow');flow.finish(root,{kind:'flow'});
      inventory.links.push({from:a.stationId,to:b.stationId,start:[start,-.11,flowZ],end:[end,-.11,flowZ]});
    }
    if(selected&&!inventory.stations.some(s=>s.stationId===selected.stationId))selected=null;
    if(selected?.machineId&&!inventory.machines.some(m=>m.machineId===selected.machineId&&m.stationId===selected.stationId))selected=null;
    if(selected?.operationId&&!inventory.machines.some(m=>m.operationId===selected.operationId&&m.stationId===selected.stationId))selected=null;
    select(selected);root.updateMatrixWorld(true);return snapshot();
  }
  function snapshot(){
    let meshCount=0,visibleMeshCount=0;root.traverse(object=>{if(object.isMesh){meshCount++;if(object.visible)visibleMeshCount++;}});
    return {...structuredClone(inventory),selected:selected?{...selected}:null,resources:{created,disposed,active:resources.size,cachedGeometries:geometries.size,ownedGeometries:[...resources].filter(r=>r.isBufferGeometry).length,materials:materials.size},builds,meshCount,visibleMeshCount};
  }
  return {root,sync,select,snapshot,dispose(){clear();selected=null;}};
}
