import {pathPose,walkLength} from './cart-path.js?v=a523bf62b7df';
import * as THREE from './vendor/three.module.min.js';

const Y = new THREE.Vector3(0, 1, 0);
const V = value => new THREE.Vector3(...value);
const clamp01 = value => Math.max(0, Math.min(1, Number(value) || 0));
const smooth = value => value * value * (3 - 2 * value);
const xyz = vector => vector.toArray();

// Analytic pose sampling for the original NVIDIA 101-joint, +Z-forward actor.
// No clip, wall clock, bone scaling, retargeted G3 lengths or physics is used.
export function createHumanMotion({ actor, wrapper }) {
  if (!actor || !wrapper) throw new Error('human motion requires actor and wrapper');
  const bones = new Map(), rest = new Map(), skins = [], boots = [];
  actor.traverse(object => {
    if (object.isBone) {
      bones.set(object.name, object);
      rest.set(object, { position: object.position.clone(), quaternion: object.quaternion.clone(), scale: object.scale.clone() });
    }
    if (object.isSkinnedMesh) {
      skins.push(object);
      if (/workboots/i.test(object.name)) boots.push(object);
    }
  });
  const bone = name => {
    const found = bones.get(name);
    if (!found) throw new Error(`native human bone missing: ${name}`);
    return found;
  };
  if (bones.size !== 101 || skins.length !== 8) throw new Error('human motion expects original NVIDIA 101 bones / 8 skins');
  const hip = bone('Hip');
  const originalWrapper = { position: wrapper.position.clone(), quaternion: wrapper.quaternion.clone() };
  wrapper.updateWorldMatrix(true, true);
  const nativeScale = actor.getWorldScale(new THREE.Vector3());
  if ([nativeScale.x, nativeScale.y, nativeScale.z].some(value => Math.abs(value - 1) > 1e-5)) throw new Error('native human IK requires unit world scale; do not scale bone lengths');
  const inverseWrapper = wrapper.matrixWorld.clone().invert();
  const inverseHeading = wrapper.getWorldQuaternion(new THREE.Quaternion()).invert();
  const worldPosition = object => object.getWorldPosition(new THREE.Vector3());
  const restFeet = {}, chains = {}, palms = {};
  for (const side of ['L', 'R']) {
    const foot = bone(`${side}_Foot`);
    restFeet[side] = {
      offset: worldPosition(foot).applyMatrix4(inverseWrapper),
      quaternion: inverseHeading.clone().multiply(foot.getWorldQuaternion(new THREE.Quaternion()))
    };
    const arm = [bone(`${side}_Upperarm`), bone(`${side}_Forearm`), bone(`${side}_Hand`)];
    const leg = [bone(`${side}_Thigh`), bone(`${side}_Calf`), foot];
    const lengths = chain => [worldPosition(chain[0]).distanceTo(worldPosition(chain[1])), worldPosition(chain[1]).distanceTo(worldPosition(chain[2]))];
    chains[`${side}Arm`] = { bones: arm, lengths: lengths(arm) };
    chains[`${side}Leg`] = { bones: leg, lengths: lengths(leg) };
    const middle = bone(`${side}_Mid1`), index = bone(`${side}_Index1`), pinky = bone(`${side}_Pinky1`);
    const finger = middle.position.clone().normalize();
    const lateral = index.position.clone().sub(pinky.position).normalize();
    // Native left/right hand axes are mirrored; choose the anatomical palm-facing
    // normal using the original T-pose's down-facing palm convention.
    let normal = finger.clone().cross(lateral).normalize();
    const worldNormal = normal.clone().applyQuaternion(arm[2].getWorldQuaternion(new THREE.Quaternion()));
    if (worldNormal.dot(new THREE.Vector3(0, -1, 0)) < 0) normal.negate();
    palms[side] = { offset: middle.position.clone().multiplyScalar(.5), finger, normal };
  }
  const bootVertices = [];
  for (const mesh of boots) {
    mesh.skeleton.update();
    for (let i = 0; i < mesh.geometry.attributes.position.count; i++) {
      const point = mesh.getVertexPosition(i, new THREE.Vector3()).applyMatrix4(mesh.matrixWorld).applyMatrix4(inverseWrapper);
      bootVertices.push({ mesh, index: i, side: point.x >= 0 ? 'L' : 'R' });
    }
  }
  let state = null;
  const baselineSole = { L: Infinity, R: Infinity };
  for (const entry of bootVertices) {
    const point = entry.mesh.getVertexPosition(entry.index, new THREE.Vector3()).applyMatrix4(entry.mesh.matrixWorld).applyMatrix4(inverseWrapper);
    baselineSole[entry.side] = Math.min(baselineSole[entry.side], point.y);
  }

  function update() {
    wrapper.updateWorldMatrix(true, true);
    for (const skin of skins) skin.skeleton.update();
  }
  function resetBones() {
    for (const [object, transform] of rest) {
      object.position.copy(transform.position);
      object.quaternion.copy(transform.quaternion);
      object.scale.copy(transform.scale);
    }
  }
  function setWorldQuaternion(object, desired) {
    const parent = object.parent.getWorldQuaternion(new THREE.Quaternion()).invert();
    object.quaternion.copy(parent.multiply(desired));
    object.updateWorldMatrix(false, true);
  }
  function pointBone(object, child, target) {
    const start = worldPosition(object), end = worldPosition(child);
    const current = end.sub(start).normalize(), desired = target.clone().sub(start).normalize();
    const world = object.getWorldQuaternion(new THREE.Quaternion());
    setWorldQuaternion(object, new THREE.Quaternion().setFromUnitVectors(current, desired).multiply(world));
  }
  function solve(chain, requested, pole) {
    const [upper, lower, end] = chain.bones, [a, b] = chain.lengths;
    const origin = worldPosition(upper), direction = requested.clone().sub(origin);
    const requestedDistance = direction.length(), minimum = Math.abs(a - b) + 1e-7, maximum = a + b - 1e-7;
    const distance = Math.max(minimum, Math.min(maximum, requestedDistance));
    if (requestedDistance < 1e-9) direction.set(0, -1, 0); else direction.divideScalar(requestedDistance);
    const target = origin.clone().addScaledVector(direction, distance);
    const bend = pole.clone().sub(origin);
    bend.addScaledVector(direction, -bend.dot(direction));
    if (bend.lengthSq() < 1e-10) bend.copy(new THREE.Vector3(0, 0, 1).cross(direction));
    if (bend.lengthSq() < 1e-10) bend.copy(new THREE.Vector3(1, 0, 0).cross(direction));
    bend.normalize();
    const cos = Math.max(-1, Math.min(1, (a * a + distance * distance - b * b) / (2 * a * distance)));
    const elbow = origin.clone().addScaledVector(direction, a * cos).addScaledVector(bend, a * Math.sqrt(Math.max(0, 1 - cos * cos)));
    pointBone(upper, lower, elbow);
    pointBone(lower, end, target);
    const actual = worldPosition(end);
    return { target: xyz(requested), achieved: xyz(actual), residual: actual.distanceTo(requested), reachClamped: Math.abs(distance - requestedDistance) > 1e-6, requestedDistance, reachableDistance: distance };
  }
  function orientHand(side, heading, customNormal=null) {
    const palm = palms[side], hand = bone(`${side}_Hand`);
    const desiredFinger = new THREE.Vector3(0, -1, 0);
    const desiredNormal = (customNormal?V(customNormal):new THREE.Vector3(side === 'L' ? -1 : 1, 0, 0)).applyQuaternion(heading);
    const basis = (finger, normal) => new THREE.Matrix4().makeBasis(finger, normal, finger.clone().cross(normal).normalize());
    const localNormal = palm.normal.clone().addScaledVector(palm.finger, -palm.normal.dot(palm.finger)).normalize();
    const desired = basis(desiredFinger, desiredNormal).multiply(basis(palm.finger, localNormal).invert());
    const quaternion = new THREE.Quaternion().setFromRotationMatrix(desired);
    setWorldQuaternion(hand, quaternion);
    return { quaternion, desiredFinger, desiredNormal };
  }
  function walkTargets(walk, heading) {
    const from = V(walk.from), to = V(walk.to), delta = to.clone().sub(from), u = clamp01(walk.u);
    const distance = walkLength(walk);
    if (distance < 1e-8) return {
      position: from, feet: Object.fromEntries(['L', 'R'].map(side => [side, { target: from.clone().add(restFeet[side].offset.clone().applyQuaternion(heading)), stance: true, swingPhase: null, groundY: from.y }])),
      u, phase: 0, phases: 0, steps: 0, rootU: 1, distance: 0, dip: 0, horizontal: true
    };
    const count = Math.max(1, Math.ceil(distance / .3-1e-9)), phases = count + 1;
    const phase = Math.min(count, Math.floor(u * phases)), p = u === 1 ? 1 : u * phases - phase;
    const progress = { L: 0, R: 0 };
    for (let i = 0; i < phase; i++) progress[i % 2 ? 'R' : 'L'] = Math.min(1, (i + 1) / count);
    const swing = phase % 2 ? 'R' : 'L', start = progress[swing], destination = Math.min(1, (phase + 1) / count);
    progress[swing] = start + (destination - start) * smooth(p);
    if (u === 1) progress.L = progress.R = 1;
    const rootU = Math.min(1, u * phases / count);
    const position = walk.arc?V(pathPose(walk,rootU).position):from.clone().addScaledVector(delta, rootU), feet = {};
    for (const side of ['L', 'R']) {
      const footPose=walk.arc?pathPose(walk,progress[side]):null,footYaw=footPose?new THREE.Quaternion().setFromAxisAngle(Y,footPose.heading):heading;
      const target = (footPose?V(footPose.position):from.clone().addScaledVector(delta, progress[side])).add(restFeet[side].offset.clone().applyQuaternion(footYaw));
      const stance = u === 0 || u === 1 || side !== swing;
      if (!stance) target.y += Math.sin(Math.PI * p) * .085;
      feet[side] = { target, stance, quaternion:footYaw.clone().multiply(restFeet[side].quaternion), swingPhase: side === swing ? p : null, groundY: from.y + delta.y * progress[side] };
    }
    return { position, feet, u, phase, phases, steps: count, rootU, distance, dip: .07 * Math.min(1, u * phases * 3, (1 - u) * phases * 3), horizontal: Math.abs(delta.y) < 1e-7 };
  }

  function turnTargets(turn, root) {
    const u = clamp01(turn.u), delta = Math.atan2(Math.sin(turn.toHeading - turn.fromHeading), Math.cos(turn.toHeading - turn.fromHeading));
    const bodyHeading = turn.fromHeading + delta * u;
    const from = new THREE.Quaternion().setFromAxisAngle(Y, turn.fromHeading);
    const to = new THREE.Quaternion().setFromAxisAngle(Y, turn.fromHeading + delta);
    const feet = {};
    for (const side of ['L', 'R']) {
      const phase = clamp01(side === 'L' ? u * 2 : u * 2 - 1);
      const progress = smooth(phase);
      const start = restFeet[side].offset.clone().applyQuaternion(from).add(root);
      const end = restFeet[side].offset.clone().applyQuaternion(to).add(root);
      const stance = Math.abs(delta) < 1e-8 || (side === 'L' ? u === 0 || u >= .5 : u <= .5 || u === 1);
      const target = start.lerp(end, progress);
      if (!stance) target.y += Math.sin(Math.PI * phase) * .06;
      feet[side] = {
        target, stance, groundY: root.y, swingPhase: stance ? null : phase,
        quaternion: from.clone().multiply(restFeet[side].quaternion).slerp(to.clone().multiply(restFeet[side].quaternion), progress)
      };
    }
    return { feet, u, delta, bodyHeading, phase: u < .5 ? 'left-foot' : 'right-foot', fromHeading: turn.fromHeading, toHeading: turn.toHeading, dip: Math.abs(delta) < 1e-8 ? 0 : .04 * Math.sin(Math.PI * u) };
  }

  function apply({ position = [0, 0, 0], heading = 0, walk = null, turn = null, crouch = 0, handTargets = null, handBlend = 1, grip = false, handNormals=null } = {}) {
    for (const [name, value] of [['position', position], ...(walk ? [['walk.from', walk.from], ['walk.to', walk.to]] : []), ...Object.entries(handTargets || {}).map(([side, value]) => [`handTargets.${side}`, value])]) if (!Array.isArray(value) || value.length !== 3 || !value.every(Number.isFinite)) throw new Error(`${name} must contain three finite world coordinates`);
    if (walk && turn) throw new Error('walking and turning are separate motion phases');
    if (turn && ![turn.fromHeading, turn.toHeading, turn.u].every(Number.isFinite)) throw new Error('turn headings and turn.u must be finite');
    if (!Number.isFinite(heading) || !Number.isFinite(crouch) || !Number.isFinite(handBlend) || (walk && !Number.isFinite(walk.u))) throw new Error('heading, crouch, handBlend and walk.u must be finite');
    resetBones();
    const turning = turn ? turnTargets(turn, V(position)) : null;
    const bodyHeading = turning?.bodyHeading ?? heading;
    const yaw = new THREE.Quaternion().setFromAxisAngle(Y, bodyHeading);
    const walking = walk ? walkTargets(walk, yaw) : null;
    const root = walking?.position || V(position);
    wrapper.position.copy(wrapper.parent ? wrapper.parent.worldToLocal(root.clone()) : root);
    const parentQuaternion = wrapper.parent ? wrapper.parent.getWorldQuaternion(new THREE.Quaternion()).invert() : new THREE.Quaternion();
    wrapper.quaternion.copy(parentQuaternion.multiply(yaw));
    update();
    const amount = Math.max(0, Math.min(.55, Number(crouch) || 0));
    const hipWorld = worldPosition(hip).add(new THREE.Vector3(0, -amount - (walking?.dip || 0) - (turning?.dip || 0), 0));
    hip.position.copy(hip.parent.worldToLocal(hipWorld));
    update();
    if (amount > 0) {
      const bend = amount / .55;
      for (const [name, angle] of [['Waist', .55], ['Spine01', .1]]) {
        const object = bone(name), axis = new THREE.Vector3(1, 0, 0).applyQuaternion(yaw);
        const desired = new THREE.Quaternion().setFromAxisAngle(axis, angle * bend).multiply(object.getWorldQuaternion(new THREE.Quaternion()));
        setWorldQuaternion(object, desired);
      }
    }
    const feet = {}, hands = {}, warnings = [];
    if (amount !== crouch) warnings.push('Crouch request limited to native demonstration range 0–0.55m.');
    if (walking && !walking.horizontal) warnings.push('Non-level walking path is not ground-contact calibrated.');
    for (const side of ['L', 'R']) {
      const target = turning?.feet[side].target || walking?.feet[side].target || root.clone().add(restFeet[side].offset.clone().applyQuaternion(yaw));
      const pole = worldPosition(bone(`${side}_Thigh`)).add(new THREE.Vector3(0, -.1, .8).applyQuaternion(yaw));
      const solveResult = solve(chains[`${side}Leg`], target, pole);
      const footQuaternion = turning?.feet[side].quaternion || walking?.feet[side].quaternion || yaw.clone().multiply(restFeet[side].quaternion);
      setWorldQuaternion(bone(`${side}_Foot`), footQuaternion);
      feet[side] = { ...solveResult, ankle: xyz(worldPosition(bone(`${side}_Foot`))), stance: turning?.feet[side].stance ?? walking?.feet[side].stance ?? true, quaternion: bone(`${side}_Foot`).getWorldQuaternion(new THREE.Quaternion()).toArray(), targetQuaternion: footQuaternion.toArray(), soleMinY: null, groundY: turning?.feet[side].groundY ?? walking?.feet[side].groundY ?? root.y };
      if (solveResult.reachClamped) warnings.push(`${side} leg target outside native reach; residual reported, no stretch.`);
    }
    // With no contact request, keep arms beside the body instead of showing the
    // native T-pose. The contralateral swing is sampled from walk.u only.
    const neutralTargets = Object.fromEntries(['L', 'R'].map(side => {
      const shoulder = worldPosition(bone(`${side}_Upperarm`));
      const swing = walking ? Math.sin(walking.u * walking.phases * Math.PI) * (side === 'L' ? -1 : 1) * .12 : 0;
      return [side, xyz(shoulder.add(new THREE.Vector3(side === 'L' ? .04 : -.04, -.47, .04 + swing).applyQuaternion(yaw)))];
    }));
    const blend = handTargets ? clamp01(handBlend) : 0;
    const contactTargets = Object.fromEntries(['L', 'R'].map(side => [side,
      handTargets?.[side] ? xyz(V(neutralTargets[side]).lerp(V(handTargets[side]), blend)) : neutralTargets[side]
    ]));
    if (contactTargets) {
      for (const side of ['L', 'R']) {
        if (!contactTargets[side]) continue;
        const target = V(contactTargets[side]), orientation = orientHand(side, yaw, handNormals?.[side]);
        const wristTarget = target.clone().sub(palms[side].offset.clone().applyQuaternion(orientation.quaternion));
        const shoulder = worldPosition(bone(`${side}_Upperarm`));
        const pole = shoulder.clone().add(new THREE.Vector3(side === 'L' ? .7 : -.7, -.25, .1).applyQuaternion(yaw));
        const solveResult = solve(chains[`${side}Arm`], wristTarget, pole);
        orientHand(side, yaw, handNormals?.[side]);
        const hand = bone(`${side}_Hand`), palm = hand.localToWorld(palms[side].offset.clone());
        hands[side] = { ...solveResult, contactRequested: !!handTargets?.[side], contactExpected: !!handTargets?.[side] && blend === 1, handBlend: handTargets?.[side] ? blend : 0, neutralTarget: [...neutralTargets[side]], requestedTarget: handTargets?.[side] ? [...handTargets[side]] : null, target: xyz(target), achieved: xyz(palm), wristResidual: solveResult.residual, wristTarget: xyz(wristTarget), wrist: xyz(worldPosition(hand)), palm: xyz(palm), residual: palm.distanceTo(target), contactResidual: handTargets?.[side] ? palm.distanceTo(V(handTargets[side])) : null, palmNormal: xyz(palms[side].normal.clone().applyQuaternion(hand.getWorldQuaternion(new THREE.Quaternion()))), fingerDirection: xyz(palms[side].finger.clone().applyQuaternion(hand.getWorldQuaternion(new THREE.Quaternion()))) };
        if (solveResult.reachClamped) warnings.push(`${side} palm target outside native arm reach; residual reported, no stretch.`);
        if (grip && handTargets?.[side] && blend > 0) {
          // Modest deterministic curl at finger joints; palm contact is unchanged.
          for (const digit of ['Thumb', 'Index', 'Mid', 'Ring', 'Pinky']) for (let joint = 1; joint <= 3; joint++) {
            const object = bones.get(`${side}_${digit}${joint}`);
            if (!object) continue;
            const axis = orientation.desiredFinger.clone().cross(orientation.desiredNormal).normalize();
            const desired = new THREE.Quaternion().setFromAxisAngle(axis, (joint === 1 ? .16 : .22) * blend).multiply(object.getWorldQuaternion(new THREE.Quaternion()));
            setWorldQuaternion(object, desired);
          }
        }
      }
    }
    update();
    for (const entry of bootVertices) {
      const point = entry.mesh.getVertexPosition(entry.index, new THREE.Vector3()).applyMatrix4(entry.mesh.matrixWorld);
      feet[entry.side].soleMinY = Math.min(feet[entry.side].soleMinY ?? Infinity, point.y);
    }
    for (const side of ['L', 'R']) feet[side].soleGroundError = feet[side].soleMinY === null ? null : feet[side].soleMinY - feet[side].groundY;
    const lengths = Object.fromEntries(Object.entries(chains).map(([key, chain]) => [key, { native: [...chain.lengths], actual: [worldPosition(chain.bones[0]).distanceTo(worldPosition(chain.bones[1])), worldPosition(chain.bones[1]).distanceTo(worldPosition(chain.bones[2]))] }]));
    state = { position: xyz(root), requestedPosition: [...position], heading: bodyHeading, turn: turning ? { u: turning.u, fromHeading: turning.fromHeading, toHeading: turning.toHeading, delta: turning.delta, bodyHeading: turning.bodyHeading, phase: turning.phase } : null, crouch: amount, requestedCrouch: crouch, grip: !!grip, handBlend: blend, walk: walking ? { u: walking.u, phase: walking.phase, phases: walking.phases, steps: walking.steps, rootU: walking.rootU, distance: walking.distance } : null, feet, hands, chains: lengths, palmContactDefinition: 'Native midpoint from Hand origin to Mid1 origin; local measured offset, not wrist proxy.', palmOffsets: Object.fromEntries(['L', 'R'].map(side => [side, xyz(palms[side].offset)])), baselineSole: { ...baselineSole }, skinnedBootVertices: bootVertices.length, warnings };
    return snapshot();
  }
  function reset() {
    resetBones();wrapper.position.copy(originalWrapper.position);wrapper.quaternion.copy(originalWrapper.quaternion);update();state = null;
  }
  function snapshot() { return state ? structuredClone(state) : null; }
  return { apply, reset, snapshot };
}
