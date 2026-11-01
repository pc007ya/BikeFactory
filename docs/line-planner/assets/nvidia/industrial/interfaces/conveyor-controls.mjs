/** Visual joint adapter for converted NVIDIA a02/a05 rollers. NOT a transport or physics solver.
 * Call before running any evaluation AnimationMixer, or stop that mixer and reset bind pose.
 * Source USD joint +Y becomes runtime glTF local -Z, verified from exported quaternion tracks.
 */
export function createRollerController(assetRoot, THREE) {
  const controls = new Map();
  assetRoot.traverse(node => {
    if (node.name.startsWith('roller_control_')) controls.set(node.name, {node, rest:node.quaternion.clone()});
  });
  if (!controls.size) throw new Error('No converted NVIDIA roller controls found');
  const axis = new THREE.Vector3(0,0,-1), delta = new THREE.Quaternion();
  const setAngle = (name, radians) => {
    if (!Number.isFinite(radians)) throw new TypeError('Angle must be finite radians');
    const c=controls.get(name); if (!c) throw new Error('Unknown roller control '+name);
    c.node.quaternion.copy(c.rest).multiply(delta.setFromAxisAngle(axis,radians));
  };
  return {
    names:[...controls.keys()],
    setAngle,
    setAllAngles(radians){ for(const name of controls.keys()) setAngle(name,radians); },
    reset(){for(const c of controls.values()) c.node.quaternion.copy(c.rest);},
    limits:'visual-only; caller owns speed/radius coupling, payload contact, queues, safety and collision'
  };
}
