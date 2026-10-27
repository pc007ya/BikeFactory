import test from 'node:test';
import assert from 'node:assert/strict';
import { FrameSimulation, createFrameConfig, validateFrameConfig } from '../index.js';

const STATES = ['incoming', 'queued', 'processing', 'batch_wait', 'qc_hold', 'released', 'transfer', 'consumed', 'scrapped'];
function fast(overrides = {}) {
  const base = createFrameConfig();
  return createFrameConfig({ initialQuantity: 4, stations: base.stations.map(s => ({ id: s.id, cycleSeconds: 1, maxWaitSeconds: 0 })), logistics: { enabled: false }, ...overrides });
}
function runUntil(sim, predicate, max = 3000) {
  sim.start();
  for (let i = 0; i <= max; i++) { const s = sim.snapshot(); if (predicate(s)) return s; sim.advance(1); }
  assert.fail(`Condition not met by ${sim.time}`);
}
function conservation(sim) {
  const s = sim.snapshot();
  assert.equal(STATES.reduce((n, k) => n + s.counts[k], 0), s.counts.admitted);
  assert.equal(new Set(s.frames.map(f => f.frameId)).size, s.counts.admitted);
  assert.deepEqual(sim.audit().errors, []);
}
function passManual(sim, except = () => false) {
  const s = sim.snapshot();
  for (const b of s.batches.filter(b => ['processed_quality_hold', 'rejected_hold'].includes(b.qualityState))) if (!except(b)) sim.recordBatchInspection(b.loadId, { result: 'pass', evidenceRef: 'TEST-SYNTHETIC-BATCH' });
  for (const f of sim.snapshot().frames.filter(f => f.status === 'qc_hold' && f.hold.kind === 'inspection')) if (!except(f)) sim.recordInspection(f.frameId, { result: 'pass', evidenceRef: 'TEST-SYNTHETIC-QA' });
}

test('default demonstration finishes 12 kits, retains every identity and full acceptance evidence', () => {
  const sim = new FrameSimulation(); sim.start(); sim.advance(2000);
  const s = sim.snapshot(); assert.equal(s.counts.assemblyReady, 12); assert.equal(s.counts.admitted, 12);
  for (const f of s.frames) {
    assert.equal(f.finalRelease, 'accepted'); assert.equal(f.supplySource, 'manufactured_qualified_frame');
    assert.equal(f.thermalLoadIds.length, 2); assert.equal(f.chemicalLoadIds.length, 1);
    assert(f.routeStepInstances.filter(r => r.valid).every(r => r.qualityState === 'accepted' && r.synthetic));
    assert(f.history.find(e => e.kind === 'final_release_accepted').time < f.history.find(e => e.kind === 'assembly_stock_received').time);
  }
  conservation(sim);
});

test('start, pause, fractional advance and reset share one deterministic clock', () => {
  const sim = new FrameSimulation(fast()); const initial = sim.snapshot(); sim.advance(10); assert.deepEqual(sim.snapshot(), initial);
  sim.start(); sim.advance(0.4); assert.equal(sim.time, 0); sim.advance(0.6); assert.equal(sim.time, 1);
  sim.pause(); const paused = sim.snapshot(); sim.advance(100); assert.deepEqual(sim.snapshot(), paused);
  const oldIds = paused.frames.map(f => f.frameId); sim.reset();
  assert.equal(sim.time, 0); assert.equal(sim.running, false); assert.equal(sim.snapshot().counts.admitted, 4);
  assert(sim.snapshot().frames.every(f => !oldIds.includes(f.frameId))); conservation(sim);
});

test('invalid inputs reject atomically without clock, id sequence, configuration or state changes', () => {
  const sim = new FrameSimulation(fast()); sim.start(); sim.advance(4);
  const invalid = [
    () => sim.advance(-1), () => sim.advance(NaN), () => sim.advance(Infinity),
    () => sim.receiveKits({ quantity: 0 }), () => sim.receiveKits({ quantity: 1.5 }),
    () => sim.receiveKits({ quantity: 2, tubeLotIds: [] }),
    () => sim.receiveKits({ materialCompatibilityGroupId: '7005' }),
    () => sim.receiveKits({ recipeId: 'supplier_7005_route_template_v1' }),
    () => sim.receiveKits({ alignmentRequired: true }),
    () => sim.setQualityOutcome('F99', 'pass'), () => sim.setQualityOutcome('F10', 'maybe'),
    () => sim.recordInspection('bad', { result: 'pass', evidenceRef: 'test' }),
    () => sim.takeFrame({}, 'O', 'V'), () => sim.takeFrame(sim.config.defaultKit, '', 'V'),
    () => sim.configure({ ...sim.config, stations: [] }),
  ];
  for (const action of invalid) { const before = sim.snapshot(), config = sim.config; assert.throws(action); assert.deepEqual(sim.snapshot(), before); assert.deepEqual(sim.config, config); }
});

test('snapshot/config outputs are isolated from external mutation', () => {
  const sim = new FrameSimulation(fast()); const before = sim.snapshot(), view = sim.snapshot();
  view.frames[0].status = 'released'; view.frames[0].tubeLotIds[0] = 'EVIL'; view.stations.F10.capacity = 100;
  const config = sim.config; config.qualityMode = 'manual'; config.stations[0].cycleSeconds = -2;
  assert.deepEqual(sim.snapshot(), before); assert.equal(sim.config.qualityMode, 'synthetic_pass');
});

test('configuration is serializable and enforces chemistry/drying, heat/geometry and final QA gates', () => {
  const config = fast(); assert.deepEqual(validateFrameConfig(JSON.parse(JSON.stringify(config))), config);
  const variants = [
    c => { c.recipes[0].steps = c.recipes[0].steps.filter(s => s.stationId !== 'F05'); },
    c => { c.recipes[0].steps.splice(9, 1); },
    c => { c.recipes[0].steps = c.recipes[0].steps.filter(s => s.stationId !== 'F12'); },
    c => { c.stations.find(s => s.id === 'F10').mode = 'single'; },
    c => { c.stations.find(s => s.id === 'F02').mode = 'transfer'; },
    c => { const steps = c.recipes[0].steps; [steps[1], steps[5]] = [steps[5], steps[1]]; },
    c => { c.recipes[0].approvedForProduction = true; },
    c => { c.qualityReviewSeconds = 0; },
  ];
  for (const change of variants) { const c = structuredClone(config); change(c); assert.throws(() => validateFrameConfig(c)); }
  assert.throws(() => createFrameConfig({ stations: [{ id: 'F10' }, { id: 'F10' }] }));
});

test('thermal batches are per-batch duration, partial dispatch waits, and cycle end is QC hold', () => {
  const c = fast({ initialQuantity: 2 }); Object.assign(c.stations.find(s => s.id === 'F10'), { cycleSeconds: 5, capacity: 4, maxWaitSeconds: 10 });
  const sim = new FrameSimulation(c);
  const first = runUntil(sim, s => s.batches.some(b => b.stationId === 'F10'));
  const b = first.batches.find(b => b.stationId === 'F10'); assert.equal(b.memberFrameIds.length, 2);
  assert.equal(b.plannedCompletedAt - b.startedAt, 5);
  sim.advance(5); const held = sim.snapshot().batches.find(x => x.loadId === b.loadId);
  assert.equal(held.qualityState, 'processed_quality_hold');
  for (const id of held.memberFrameIds) { const f = sim.snapshot().frames.find(f => f.frameId === id); assert.equal(f.status, 'qc_hold'); assert.equal(f.finalRelease, 'not_released'); }
  assert.equal(sim.takeFrame(c.defaultKit, 'O', 'V'), null); sim.advance(1);
  assert.equal(sim.snapshot().batches.find(x => x.loadId === b.loadId).qualityState, 'processed_quality_hold');
  sim.advance(1); assert.equal(sim.snapshot().batches.find(x => x.loadId === b.loadId).qualityState, 'accepted'); conservation(sim);
});

test('incompatible tube/forging lots and different thermal stages never share one load', () => {
  const c = fast({ initialQuantity: 0 }); const sim = new FrameSimulation(c);
  sim.receiveKits({ quantity: 3, tubeLotIds: ['T-A'], forgingLotIds: ['G-A'] });
  sim.receiveKits({ quantity: 3, tubeLotIds: ['T-B'], forgingLotIds: ['G-A'] });
  sim.receiveKits({ quantity: 3, tubeLotIds: ['T-A'], forgingLotIds: ['G-B'] });
  runUntil(sim, s => s.counts.released === 9);
  for (const b of sim.snapshot().batches) {
    const members = sim.snapshot().frames.filter(f => b.memberFrameIds.includes(f.frameId));
    assert.equal(new Set(members.map(f => JSON.stringify([f.tubeLotIds, f.forgingLotIds]))).size, 1);
    assert(members.every(f => f.routeStepInstances.find(r => r.loadId === b.loadId).operationKey === b.batchStage));
  }
  conservation(sim);
});

test('full-only batch waits visibly without creating or losing frames', () => {
  const c = fast({ initialQuantity: 2 }); Object.assign(c.stations.find(s => s.id === 'F10'), { capacity: 4, allowPartial: false });
  const sim = new FrameSimulation(c); sim.start(); sim.advance(500);
  assert.equal(sim.snapshot().counts.batch_wait, 2); assert.equal(sim.snapshot().batches.filter(b => b.stationId === 'F10').length, 0);
  sim.receiveKits({ quantity: 2 }); runUntil(sim, s => s.counts.released === 4); conservation(sim);
});

test('whole thermal-load rejection holds every member and never automatically reheats', () => {
  const sim = new FrameSimulation(fast({ qualityOutcomes: { F10: 'hold' } }));
  const held = runUntil(sim, s => s.batches.some(b => b.stationId === 'F10' && b.qualityState === 'rejected_hold'));
  const b = held.batches.find(b => b.stationId === 'F10' && b.qualityState === 'rejected_hold');
  const count = held.batches.filter(b => b.stationId === 'F10').length; sim.advance(1000);
  assert.equal(sim.snapshot().batches.filter(b => b.stationId === 'F10').length, count);
  assert(b.memberFrameIds.every(id => sim.snapshot().frames.find(f => f.frameId === id).status === 'qc_hold'));
  assert.equal(sim.takeFrame(sim.config.defaultKit, 'O', 'V'), null); conservation(sim);
});

test('manual QC requires explicit synthetic acceptance and can hold one frame after thermal review', () => {
  const sim = new FrameSimulation(fast({ initialQuantity: 2, qualityMode: 'manual' })); sim.start();
  let chosen = null;
  for (let i = 0; i < 500 && !chosen; i++) {
    sim.advance(1); const s = sim.snapshot();
    chosen = s.frames.find(f => f.status === 'qc_hold' && f.stationId === 'F08' && f.thermalLoadIds.length);
    passManual(sim, x => Boolean(chosen && x.frameId === chosen.frameId));
  }
  assert(chosen); sim.recordInspection(chosen.frameId, { result: 'hold', evidenceRef: 'DEMO-GEOMETRY-HOLD' });
  for (let i = 0; i < 200; i++) { sim.advance(1); passManual(sim, x => x.frameId === chosen.frameId); }
  const s = sim.snapshot(); assert.equal(s.counts.released, 1); assert.equal(s.frames.find(f => f.frameId === chosen.frameId).status, 'qc_hold');
  assert.equal(s.frames.find(f => f.frameId === chosen.frameId).finalRelease, 'not_released'); conservation(sim);
});

test('authorized alignment always goes through following geometry', () => {
  const c = fast({ initialQuantity: 2, defaultKit: { alignmentRequired: true, alignmentReviewRef: 'DEMO-REVIEW' } });
  const sim = new FrameSimulation(c); runUntil(sim, s => s.counts.released === 2);
  for (const f of sim.snapshot().frames) {
    const records = f.routeStepInstances.filter(r => r.valid), idx = records.findIndex(r => r.stationId === 'F09');
    assert.equal(records[idx].skipped, undefined); assert.equal(records[idx + 1].stationId, 'F08'); assert(records[idx + 1].startedAt >= records[idx].completedAt);
  }
});

test('final release can be quarantined, rework preserves ID and invalidates downstream acceptance', () => {
  const sim = new FrameSimulation(fast({ initialQuantity: 1, maxReworkCount: 1 })); runUntil(sim, s => s.counts.released === 1);
  const f = sim.snapshot().frames[0]; sim.holdFrame(f.frameId, 'DEMO-FINISH-NC');
  assert.equal(sim.snapshot().counts.released, 0);
  const finish = sim.config.recipes[0].steps.find(s => s.stationId === 'F11');
  sim.authorizeRework(f.frameId, { fromStepId: finish.stepId, reviewRef: 'DEMO-FINISH-REVIEW' });
  assert.equal(sim.snapshot().frames[0].finalRelease, 'not_released');
  assert(sim.snapshot().frames[0].routeStepInstances.filter(r => ['F11', 'F12'].includes(r.stationId)).every(r => !r.valid));
  runUntil(sim, s => s.counts.released === 1); assert.equal(sim.snapshot().frames[0].frameId, f.frameId);
  const before = sim.snapshot(); assert.throws(() => sim.authorizeRework(f.frameId, { fromStepId: finish.stepId, reviewRef: 'SECOND' })); assert.deepEqual(sim.snapshot(), before); conservation(sim);
});

test('reviewed scrap conserves identity and cannot be supplied', () => {
  const sim = new FrameSimulation(fast({ initialQuantity: 1 })); runUntil(sim, s => s.counts.released === 1);
  sim.scrapFrame(sim.snapshot().frames[0].frameId, 'DEMO-SCRAP-REVIEW'); assert.equal(sim.snapshot().counts.scrapped, 1);
  assert.equal(sim.reserveReleasedFrames({ quantity: 1, spec: sim.config.defaultKit, orderId: 'O' }), null); conservation(sim);
});

test('manual handoff is exactly once; wrong spec, insufficient qty and out-of-order calls do not mutate', () => {
  const sim = new FrameSimulation(fast({ initialQuantity: 2 })); runUntil(sim, s => s.counts.released === 2);
  const spec = sim.config.defaultKit, before = sim.snapshot();
  assert.equal(sim.reserveReleasedFrames({ quantity: 3, spec, orderId: 'A' }), null);
  assert.equal(sim.reserveReleasedFrames({ quantity: 1, spec: { ...spec, sizeCode: 'XL' }, orderId: 'A' }), null); assert.deepEqual(sim.snapshot(), before);
  const request = { quantity: 2, spec, orderId: 'A', transferId: 'TEST-XFER' }, transfer = sim.reserveReleasedFrames(request);
  assert.deepEqual(sim.reserveReleasedFrames(request), transfer); assert.equal(sim.snapshot().counts.released, 0);
  let prior = sim.snapshot(); assert.throws(() => sim.receiveTransfer(transfer.transferId, spec)); assert.deepEqual(sim.snapshot(), prior);
  sim.dispatchTransfer(transfer.transferId); prior = sim.snapshot();
  assert.throws(() => sim.receiveTransfer(transfer.transferId, { ...spec, surfaceCondition: 'painted' })); assert.deepEqual(sim.snapshot(), prior);
  sim.receiveTransfer(transfer.transferId, spec); assert.equal(sim.snapshot().counts.assemblyReady, 2);
  const receipt = sim.takeFrame(spec, 'ORDER', 'BIKE-1'); assert(receipt.trace.thermalLoadIds.length === 2);
  assert.deepEqual(sim.takeFrame(spec, 'ORDER', 'BIKE-1'), receipt); assert.equal(sim.snapshot().counts.consumed, 1);
  prior = sim.snapshot(); assert.throws(() => sim.takeFrame({ ...spec, drawingRevision: 'NEW' }, 'ORDER', 'BIKE-1')); assert.deepEqual(sim.snapshot(), prior);
  assert(sim.takeFrame(spec, 'ORDER', 'BIKE-2')); assert.equal(sim.takeFrame(spec, 'ORDER', 'BIKE-3'), null);
  assert.equal(sim.snapshot().transfers[0].state, 'consumed'); conservation(sim);
});

test('cancel/reject transfer restores inventory only once and never before physical return', () => {
  const sim = new FrameSimulation(fast({ initialQuantity: 2 })); runUntil(sim, s => s.counts.released === 2);
  const req = { quantity: 2, spec: sim.config.defaultKit, orderId: 'A' };
  const first = sim.reserveReleasedFrames(req); sim.cancelTransfer(first.transferId); sim.cancelTransfer(first.transferId); assert.equal(sim.snapshot().counts.released, 2);
  const second = sim.reserveReleasedFrames(req); sim.dispatchTransfer(second.transferId); sim.rejectTransfer(second.transferId, 'WRONG-RECEIVER');
  assert.equal(sim.snapshot().counts.released, 0); assert.equal(sim.snapshot().counts.transfer, 2); sim.returnTransfer(second.transferId); sim.returnTransfer(second.transferId);
  assert.equal(sim.snapshot().counts.released, 2); conservation(sim);
});

test('automatic transport loads, travels, unloads, returns empty and cannot re-use occupied carrier', () => {
  const c = fast({ initialQuantity: 4, logistics: { enabled: true, fleet: 1, batchSize: 1, maxWaitSeconds: 0, loadSeconds: 2, travelSeconds: 3, unloadSeconds: 2, returnSeconds: 20 } });
  const sim = new FrameSimulation(c); const s = runUntil(sim, s => s.logistics.vehicles[0].phase === 'empty_return');
  const v = s.logistics.vehicles[0], trips = s.logistics.trips.length; assert.equal(v.frameIds.length, 0); assert.equal(v.remaining, 20); assert.equal(s.counts.assemblyReady, 1);
  sim.advance(19); assert.equal(sim.snapshot().logistics.trips.length, trips); assert.equal(sim.snapshot().logistics.vehicles[0].phase, 'empty_return');
  sim.advance(1); assert(sim.snapshot().logistics.trips.length > trips); conservation(sim);
});

test('automatic delivery reject follows loaded return; duplicate reject cannot duplicate stock', () => {
  const sim = new FrameSimulation(fast({ initialQuantity: 1, logistics: { enabled: true, fleet: 1, batchSize: 1, maxWaitSeconds: 0, loadSeconds: 1, travelSeconds: 10, unloadSeconds: 1, returnSeconds: 3 } }));
  const s = runUntil(sim, s => s.logistics.vehicles[0].phase === 'outbound'), trip = s.logistics.trips[0];
  sim.rejectTrip(trip.tripId, 'DEMO-REJECT'); assert.equal(sim.snapshot().logistics.vehicles[0].phase, 'loaded_return');
  const prior = sim.snapshot(); assert.throws(() => sim.rejectTrip(trip.tripId, 'AGAIN')); assert.deepEqual(sim.snapshot(), prior);
  sim.advance(2); assert.equal(sim.snapshot().counts.assemblyReady, 0); assert.equal(sim.snapshot().counts.transfer, 1);
  sim.advance(1); assert.equal(sim.snapshot().logistics.trips[0].state, 'returned'); assert.equal(sim.snapshot().counts.admitted, 1); conservation(sim);
});

test('bounded buffers and configurable parallel resources preserve every frame through congestion', () => {
  const c = fast({ initialQuantity: 16 }); c.stations.forEach(s => { s.bufferCapacity = 1; s.parallelResources = s.id === 'F06' ? 3 : 1; });
  const sim = new FrameSimulation(c); sim.start();
  for (let i = 0; i < 1500 && sim.snapshot().counts.released < 16; i++) {
    sim.advance(1); conservation(sim);
    for (const s of Object.values(sim.snapshot().stations)) { assert(s.queue.length <= 1); assert(s.resources.length <= s.parallelResources); }
  }
  assert.equal(sim.snapshot().counts.released, 16);
});

test('geometry waypoint speed changes only planning transport time and configs round-trip', () => {
  const c = createFrameConfig({ logistics: { speed: 1 } }); assert.equal(c.logistics.travelSeconds, 28); assert.equal(c.logistics.returnSeconds, 28);
  assert.deepEqual(validateFrameConfig(JSON.parse(JSON.stringify(c))), c);
});

test('incomplete older transport spec does not starve a full later spec', () => {
  const sim = new FrameSimulation(fast({ initialQuantity: 0, logistics: { enabled: true, batchSize: 2, allowPartial: false, loadSeconds: 0, travelSeconds: 1, unloadSeconds: 0, returnSeconds: 1 } }));
  sim.receiveKits({ quantity: 1, frameSpecId: 'QA-A' }); sim.receiveKits({ quantity: 2, frameSpecId: 'QA-B' });
  sim.start(); sim.advance(300);
  assert.equal(sim.snapshot().counts.assemblyReady, 2); assert.equal(sim.snapshot().ready[0].frameSpecId, 'QA-A');
  assert.equal(sim.snapshot().logistics.trips[0].spec.frameSpecId, 'QA-B'); conservation(sim);
});

test('zero loading/unloading durations do not add phantom transport seconds', () => {
  const sim = new FrameSimulation(fast({ initialQuantity: 1, logistics: { enabled: true, batchSize: 1, loadSeconds: 0, travelSeconds: 3, unloadSeconds: 0, returnSeconds: 2 } }));
  const s = runUntil(sim, s => s.logistics.trips[0]?.receivedAt != null), trip = s.logistics.trips[0];
  assert.equal(trip.departedAt, trip.startedAt); assert.equal(trip.receivedAt - trip.startedAt, 3);
  sim.advance(2); assert.equal(sim.snapshot().logistics.trips[0].returnedAt - trip.startedAt, 5); conservation(sim);
});

test('managed transfer cannot be manually delivered or canceled ahead of its carrier', () => {
  const sim = new FrameSimulation(fast({ initialQuantity: 1, logistics: { enabled: true, batchSize: 1, loadSeconds: 5, travelSeconds: 5, unloadSeconds: 5 } }));
  const s = runUntil(sim, s => s.logistics.vehicles[0].phase === 'loading'), transfer = s.transfers[0];
  for (const action of [() => sim.cancelTransfer(transfer.transferId), () => sim.dispatchTransfer(transfer.transferId), () => sim.receiveTransfer(transfer.transferId, sim.config.defaultKit), () => sim.rejectTransfer(transfer.transferId, 'TEST')]) {
    const before = sim.snapshot(); assert.throws(action); assert.deepEqual(sim.snapshot(), before);
  }
  runUntil(sim, s => s.counts.assemblyReady === 1); conservation(sim);
});

test('post-release weld repair requires explicit thermal requalification review and rechecks all downstream gates', () => {
  const sim = new FrameSimulation(fast({ initialQuantity: 1 })); runUntil(sim, s => s.counts.released === 1);
  const f = sim.snapshot().frames[0], step = sim.config.recipes[0].steps.find(s => s.stationId === 'F06');
  const before = sim.snapshot(); assert.throws(() => sim.authorizeRework(f.frameId, { fromStepId: step.stepId, reviewRef: 'WELD-REVIEW' })); assert.deepEqual(sim.snapshot(), before);
  sim.authorizeRework(f.frameId, { fromStepId: step.stepId, reviewRef: 'WELD-REVIEW', thermalRequalificationReviewRef: 'THERMAL-REQUALIFICATION-REVIEW' });
  assert.equal(sim.snapshot().frames[0].finalRelease, 'not_released');
  runUntil(sim, s => s.counts.released === 1); assert.equal(sim.snapshot().frames[0].thermalLoadIds.length, 4); conservation(sim);
});

test('explicit whole-load scrap resolves batch rejection without deleting or duplicating frame identities', () => {
  const sim = new FrameSimulation(fast({ initialQuantity: 2, qualityOutcomes: { F10: 'hold' } }));
  const s = runUntil(sim, s => s.batches.some(b => b.stationId === 'F10' && b.qualityState === 'rejected_hold'));
  const batch = s.batches.find(b => b.stationId === 'F10' && b.qualityState === 'rejected_hold');
  const ids = s.frames.map(f => f.frameId); sim.scrapBatch(batch.loadId, 'EXPLICIT-BATCH-SCRAP-REVIEW');
  assert.equal(sim.snapshot().counts.scrapped, batch.memberFrameIds.length); assert.deepEqual(sim.snapshot().frames.map(f => f.frameId), ids);
  const before = sim.snapshot(); assert.throws(() => sim.scrapBatch(batch.loadId, 'AGAIN')); assert.deepEqual(sim.snapshot(), before); conservation(sim);
});
