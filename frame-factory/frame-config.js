import { DEFAULT_FRAME_CONFIG } from './default-config.js';

export const MATCHING_KEYS = Object.freeze(['frameSpecId', 'sizeCode', 'drawingRevision', 'surfaceCondition']);
export const SUPPLY_MODES = Object.freeze(['purchased_frame', 'manufactured_qualified_frame']);
export const SAFETY_BADGE = '概念演示：工時、批量與品質結果為合成規劃假設，非實測、非製程操作規範。';
export const clone = value => structuredClone(value);
export function assert(condition, message) { if (!condition) throw new TypeError(message); }
export function textId(value, label) { assert(typeof value === 'string' && value.trim().length > 0 && value.length <= 160, `Invalid ${label}`); return value; }
export function finite(value, label, min = 0, max = 86400) { assert(Number.isFinite(value) && value >= min && value <= max, `Invalid ${label}`); return value; }
export function integer(value, label, min = 1, max = 10000) { finite(value, label, min, max); assert(Number.isSafeInteger(value), `Invalid ${label}`); return value; }
export function specOf(value) { return Object.fromEntries(MATCHING_KEYS.map(key => [key, textId(value?.[key], key)])); }
export function specMatches(a, b) { return MATCHING_KEYS.every(key => a[key] === b[key]); }
export function freezeDeep(value) { if (value && typeof value === 'object') { Object.freeze(value); Object.values(value).forEach(freezeDeep); } return value; }

function validateRoute(recipe, stations) {
  textId(recipe.id, 'recipe id'); textId(recipe.version, 'recipe version');
  assert(recipe.approvedForProduction === false, 'Only non-production demonstration routes are supported');
  assert(typeof recipe.enabledInDemo === 'boolean', 'Invalid enabledInDemo');
  assert(Array.isArray(recipe.materialCompatibilityGroups) && recipe.materialCompatibilityGroups.length, 'Missing material compatibility groups');
  recipe.materialCompatibilityGroups.forEach(v => textId(v, 'material compatibility group'));
  assert(Array.isArray(recipe.steps) && recipe.steps.length >= 13 && recipe.steps.length <= 100, 'Incomplete or excessive manufacturing route');
  const ids = new Set();
  recipe.steps.forEach((step, index) => {
    textId(step.stepId, 'step id'); textId(step.operationKey, 'operation key');
    assert(!ids.has(step.stepId), 'Duplicate route step id'); ids.add(step.stepId);
    assert(stations.has(step.stationId), 'Unknown route station');
    if (step.stationId === 'F04') assert(recipe.steps[index + 1]?.stationId === 'F05', 'Chemical cleaning must be followed by drying');
    if (['F09', 'F10'].includes(step.stationId)) assert(recipe.steps[index + 1]?.stationId === 'F08', 'Alignment and each heat stage require geometry inspection');
    if (step.stationId === 'F10') textId(step.batchStage, 'thermal batch stage');
    if (step.stationId === 'F13') assert(index === recipe.steps.length - 1, 'Handoff must be last');
    if (step.stationId === 'F12') assert(index === recipe.steps.length - 2, 'Final quality must immediately precede handoff');
  });
  for (const id of ['F01', 'F02', 'F03', 'F04', 'F05', 'F06', 'F07', 'F08', 'F09', 'F10', 'F11', 'F12', 'F13']) assert(recipe.steps.some(s => s.stationId === id), `Missing required station ${id}`);
  const position = id => recipe.steps.findIndex(s => s.stationId === id);
  for (const id of ['F01', 'F02', 'F03', 'F04', 'F05', 'F06', 'F07', 'F09', 'F11', 'F12', 'F13']) assert(recipe.steps.filter(s => s.stationId === id).length === 1, `Unexpected duplicate operation ${id}`);
  assert(position('F02') < position('F03') && position('F03') < position('F06'), 'Cutting and cleaning must precede welding');
  assert(position('F07') === position('F06') + 1 && recipe.steps[position('F07') + 1]?.stationId === 'F08', 'Welding requires weld inspection and geometry before downstream work');
  assert(recipe.steps.every((s, i) => s.stationId !== 'F10' || (i > position('F07') && i < position('F11'))), 'Heat stages must follow weld inspection and precede finishing');
  assert(recipe.steps.every((s, i) => !['F08', 'F09'].includes(s.stationId) || i < position('F11')), 'Geometry/alignment gates must precede finishing');
  assert(recipe.steps[0].stationId === 'F01', 'Route must begin with incoming inspection');
  assert(recipe.steps.at(-1).stationId === 'F13' && recipe.steps.at(-2).stationId === 'F12', 'Missing final release gate');
}

/** Validate the whole candidate before returning an isolated, serializable config. */
export function validateFrameConfig(candidate) {
  assert(candidate && typeof candidate === 'object' && !Array.isArray(candidate), 'Invalid frame configuration');
  const c = clone(candidate);
  assert(c.schemaVersion === '1.0.0', 'Unsupported frame configuration schema');
  textId(c.scenarioId, 'scenario id'); integer(c.initialQuantity, 'initial quantity', 0);
  assert(['manual', 'synthetic_pass'].includes(c.qualityMode), 'Invalid quality mode');
  integer(c.qualityReviewSeconds, 'quality review seconds', 2, 3600);
  integer(c.maxReworkCount, 'max rework count', 0, 20);
  assert(Array.isArray(c.stations) && c.stations.length === 13, 'Exactly F01–F13 are required');
  const stationIds = new Set();
  for (const s of c.stations) {
    textId(s.id, 'station id'); textId(s.name, 'station name');
    assert(/^F(0[1-9]|1[0-3])$/.test(s.id) && !stationIds.has(s.id), 'Duplicate or invalid station id'); stationIds.add(s.id);
    const requiredMode = s.id === 'F01' ? 'lot' : ['F04', 'F05', 'F10'].includes(s.id) ? 'batch' : s.id === 'F13' ? 'transfer' : 'single';
    assert(s.mode === requiredMode, `Station ${s.id} must remain ${requiredMode}`);
    integer(s.cycleSeconds, 'cycle seconds', 1); integer(s.capacity, 'station capacity', 1, 1000);
    integer(s.parallelResources, 'parallel resources', 1, 20); integer(s.bufferCapacity, 'buffer capacity', 1);
    integer(s.maxWaitSeconds, 'batch wait', 0); assert(typeof s.allowPartial === 'boolean', 'Invalid partial batch policy');
    assert(s.productionCycleMinutes === null || (Number.isFinite(s.productionCycleMinutes) && s.productionCycleMinutes > 0), 'Invalid production cycle minutes');
    if (s.mode === 'single') assert(s.capacity === 1, 'Single-part station capacity must be 1; use parallelResources');
    if (['batch', 'lot'].includes(s.mode) && !s.allowPartial) assert(s.bufferCapacity >= s.capacity, 'Full-only batches require waiting capacity at least as large as the batch');
    if (['F04', 'F05', 'F10'].includes(s.id)) assert(s.mode === 'batch', `${s.id} must remain a batch operation`);
    if (s.id === 'F13') assert(s.mode === 'transfer', 'F13 must remain the released handoff');
  }
  assert(Array.isArray(c.recipes) && c.recipes.length, 'Missing routes');
  const recipes = new Set();
  for (const r of c.recipes) { assert(!recipes.has(r.id), 'Duplicate recipe id'); recipes.add(r.id); validateRoute(r, stationIds); }
  assert(c.recipes.some(r => r.id === c.defaultRecipeId && r.enabledInDemo), 'Default route is not enabled in demo');
  validateKit(c.defaultKit, c);
  const l = c.logistics;
  assert(l && typeof l.enabled === 'boolean', 'Invalid logistics enabled');
  integer(l.fleet, 'fleet', 1, 20); integer(l.batchSize, 'transport batch size', 1, 1000);
  assert(typeof l.allowPartial === 'boolean', 'Invalid transport partial policy');
  integer(l.maxWaitSeconds, 'transport batch wait', 0);
  for (const k of ['travelSeconds', 'returnSeconds', 'loadSeconds', 'unloadSeconds']) integer(l[k], k, k.includes('Seconds') && ['travelSeconds', 'returnSeconds'].includes(k) ? 1 : 0);
  assert(Array.isArray(l.waypoints) && l.waypoints.length >= 2 && l.waypoints.length <= 100, 'Invalid logistics waypoints');
  l.waypoints.forEach(p => { finite(p.x, 'waypoint x', -100000, 100000); finite(p.z, 'waypoint z', -100000, 100000); });
  finite(l.speed, 'logistics speed', 0.01, 100);
  assert(c.qualityOutcomes && typeof c.qualityOutcomes === 'object' && !Array.isArray(c.qualityOutcomes), 'Invalid quality outcomes');
  for (const [key, result] of Object.entries(c.qualityOutcomes)) assert(stationIds.has(key) && ['pass', 'hold'].includes(result), 'Invalid quality outcome');
  return c;
}

/** Patches stations by id; never silently removes required safety/quality gates. */
export function createFrameConfig(overrides = {}) {
  assert(overrides && typeof overrides === 'object' && !Array.isArray(overrides), 'Invalid configuration overrides');
  const base = clone(DEFAULT_FRAME_CONFIG);
  const c = { ...base, ...clone(overrides), defaultKit: { ...base.defaultKit, ...clone(overrides.defaultKit || {}) }, logistics: { ...base.logistics, ...clone(overrides.logistics || {}) } };
  if (overrides.stations) {
    assert(Array.isArray(overrides.stations), 'Invalid station overrides');
    const ids = overrides.stations.map(s => s.id);
    assert(new Set(ids).size === ids.length && ids.every(id => base.stations.some(s => s.id === id)), 'Duplicate/unknown station override');
    c.stations = base.stations.map(s => ({ ...s, ...(overrides.stations.find(x => x.id === s.id) || {}) }));
  }
  if (overrides.logistics?.speed !== undefined || overrides.logistics?.waypoints !== undefined) {
    const distance = c.logistics.waypoints.slice(1).reduce((sum, p, i) => sum + Math.hypot(p.x - c.logistics.waypoints[i].x, p.z - c.logistics.waypoints[i].z), 0);
    if (overrides.logistics.travelSeconds === undefined) c.logistics.travelSeconds = Math.max(1, Math.ceil(distance / c.logistics.speed));
    if (overrides.logistics.returnSeconds === undefined) c.logistics.returnSeconds = c.logistics.travelSeconds;
  }
  return validateFrameConfig(c);
}

export function validateKit(input, config) {
  assert(input && typeof input === 'object' && !Array.isArray(input), 'Invalid purchased kit');
  const kit = clone(input); specOf(kit); textId(kit.orderId, 'order id');
  for (const key of ['recipeId', 'recipeVersion', 'materialCompatibilityGroupId', 'fillerLotId']) textId(kit[key], key);
  const recipe = config.recipes.find(r => r.id === kit.recipeId);
  assert(recipe?.enabledInDemo && recipe.version === kit.recipeVersion, 'Recipe is unavailable, disabled or has wrong version');
  assert(recipe.materialCompatibilityGroups.includes(kit.materialCompatibilityGroupId), 'Material is not compatible with selected route');
  for (const key of ['tubeLotIds', 'forgingLotIds']) {
    assert(Array.isArray(kit[key]) && kit[key].length > 0 && kit[key].length <= 100, `Missing ${key}`);
    kit[key].forEach(v => textId(v, key)); assert(new Set(kit[key]).size === kit[key].length, `Duplicate ${key}`);
  }
  assert(typeof kit.alignmentRequired === 'boolean', 'Invalid alignment requirement');
  if (kit.alignmentRequired) textId(kit.alignmentReviewRef, 'alignment review reference');
  return kit;
}

export function batchKey(frame, step) {
  return JSON.stringify([frame.recipeId, frame.recipeVersion, step.batchStage || step.operationKey, frame.materialCompatibilityGroupId, [...frame.tubeLotIds].sort(), [...frame.forgingLotIds].sort()]);
}
