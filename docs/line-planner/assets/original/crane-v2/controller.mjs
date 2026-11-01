/** Original demonstration crane. Visual kinematics only: no load capacity, collision or safety certification. */
export function createCraneController(root, THREE){
 const find=n=>{const o=root.getObjectByName(n);if(!o)throw Error('Missing crane node '+n);return o};
 const bridge=find('BridgeTravel'),trolley=find('TrolleyTravel'),hook=find('HoistTravel'),drum=find('DrumRotation');
 const ropes=[find('HoistRope_Left'),find('HoistRope_Right')];const links=[];root.traverse(o=>{if(/^ChainLink_\d+$/.test(o.name))links.push(o)});links.sort((a,b)=>a.name.localeCompare(b.name));
 const state={bridge:0,trolley:0,hook:2.5},limits={bridge:[-4.3,4.3],trolley:[-3.1,3.1],hook:[.6,5.2]};
 const clamp=(v,k)=>Math.max(limits[k][0],Math.min(limits[k][1],v));
 function setPose(p){for(const k of Object.keys(state)){if(p[k]!==undefined){if(!Number.isFinite(p[k]))throw TypeError(k+' must be finite metres');state[k]=clamp(p[k],k)}}
  bridge.position.z=-state.bridge;trolley.position.x=state.trolley;hook.position.y=state.hook;
  const lower=state.hook+.65,upper=6.85;for(const r of ropes){r.position.y=(lower+upper)/2;r.scale.y=upper-lower;}
  drum.quaternion.setFromAxisAngle(new THREE.Vector3(0,0,-1),2*(state.hook-2.5)/.22);
  const L=8,R=.16,anchor=-3.4,end=state.trolley+.4,B=(L+anchor+end-Math.PI*R)/2,a=B-anchor,low=6.78;
  links.forEach((link,i)=>{const s=(i+.5)*L/links.length;let x,z,angle;if(s<a){x=anchor+s;z=low;angle=0}else if(s<a+Math.PI*R){const v=-Math.PI/2+(s-a)/R;x=B+R*Math.cos(v);z=low+R+R*Math.sin(v);angle=v+Math.PI/2}else{x=B-(s-a-Math.PI*R);z=low+2*R;angle=Math.PI}link.position.set(x,z,.96);link.quaternion.setFromAxisAngle(new THREE.Vector3(0,0,1),angle);});
  root.updateMatrixWorld(true);return {...state};
 }
 setPose(state);return{setPose,getPose:()=>({...state}),limits,hookAttachment:find('HookAttachment'),notes:'Geometric limit clamps only. Emergency stop, interlocks, rigid-body/cable dynamics, collision and rated loads are NOT implemented.'};
}
