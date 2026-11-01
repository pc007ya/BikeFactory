// Visual articulation adapter only. Caller imports matching THREE revision.
// Call immediately after GLTFLoader parse, before any test AnimationMixer plays.
export function createIwHubControls(THREE, scene) {
 const spec={left_wheel:[0,0,-1],right_wheel:[0,0,-1],left_swivel:[0,1,0],right_swivel:[0,1,0],left_caster:[0,0,-1],right_caster:[0,0,-1],lift:[0,1,0]};
 const joints={};for(const [name,axis]of Object.entries(spec)){const node=scene.getObjectByName('control_'+name+'_joint');if(!node)throw Error('Missing iw_hub joint '+name);joints[name]={node,axis:new THREE.Vector3(...axis),restQ:node.quaternion.clone(),restP:node.position.clone()};}
 return {setAngle(name,radians){const j=joints[name];if(!j||name==='lift'||!Number.isFinite(radians))throw Error('Invalid revolute control');j.node.quaternion.copy(j.restQ).multiply(new THREE.Quaternion().setFromAxisAngle(j.axis,radians));},setLift(metres){if(!Number.isFinite(metres))throw Error('Invalid lift');const j=joints.lift;const d=Math.max(0,Math.min(.03999999910593033,metres));j.node.position.copy(j.restP).add(j.axis.clone().applyQuaternion(j.restQ).multiplyScalar(d));return d;},reset(){for(const j of Object.values(joints)){j.node.position.copy(j.restP);j.node.quaternion.copy(j.restQ);}},joints};
}
