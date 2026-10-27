import { assert, clone, createFrameConfig, validateFrameConfig, validateKit, integer, finite, textId, specOf, specMatches, batchKey, freezeDeep, SAFETY_BADGE } from './frame-config.js';
import { FrameLogistics } from './frame-logistics.js';

const FRAME_STATES = ['incoming', 'queued', 'processing', 'batch_wait', 'qc_hold', 'released', 'transfer', 'consumed', 'scrapped'];
const MANAGED_LOGISTICS = Symbol('managed-logistics-port');
let instanceSequence = 0;

/** Pure deterministic, frame-equivalent planning simulation; no DOM, Three.js or app imports. */
export class FrameSimulation {
  #config; #s; #logistics; #instance = ++instanceSequence; #run = 0;
  constructor(config = createFrameConfig()) {
    this.#config = freezeDeep(validateFrameConfig(config));
    this.reset();
  }
  get config() { return clone(this.#config); }
  get time() { return this.#s.time; }
  get running() { return this.#s.running; }
  get ready() { return this.releasedFrames(); }
  start() { this.#s.running = true; return this; }
  pause() { this.#s.running = false; return this; }
  reset() {
    this.#run++;
    this.#s = { time: 0, remainder: 0, running: false, sequence: 0, frames: [], batches: [], jobs: [], transfers: [], consumptions: [], events: [], admitted: 0, qualityOutcomes: clone(this.#config.qualityOutcomes) };
    this.#logistics = new FrameLogistics(this.#config.logistics);
    if (this.#config.initialQuantity) this.receiveKits({ quantity: this.#config.initialQuantity });
    return this.snapshot();
  }
  /** Explicit full-scenario reset; validates candidate before touching current state. */
  configure(candidate) {
    const valid = freezeDeep(validateFrameConfig(candidate));
    this.#config = valid;
    return this.reset();
  }
  #id(kind) { return `${this.#config.scenarioId}-I${this.#instance}-R${this.#run}-${kind}${String(++this.#s.sequence).padStart(6, '0')}`; }
  #event(kind, frame = null, extra = {}) {
    const event = { time: this.time, kind, frameId: frame?.frameId ?? null, source: 'synthetic-planning', ...extra };
    this.#s.events.push(event); if (frame) frame.history.push(clone(event));
  }
  #frame(frameId) { const f = this.#s.frames.find(f => f.frameId === frameId); assert(f, 'Unknown frame id'); return f; }
  #recipe(frame) { return this.#config.recipes.find(r => r.id === frame.recipeId); }
  #step(frame) { return this.#recipe(frame).steps[frame.routeIndex]; }
  #station(stationId) { return this.#config.stations.find(s => s.id === stationId); }
  #transportPort() {
    return {
      releasedFrames: () => this.releasedFrames(),
      reserveReleasedFrames: request => this.reserveReleasedFrames(request),
      dispatchTransfer: id => this.dispatchTransfer(id, MANAGED_LOGISTICS),
      receiveTransfer: (id, spec) => this.receiveTransfer(id, spec, MANAGED_LOGISTICS),
      rejectTransfer: (id, reason) => this.rejectTransfer(id, reason, MANAGED_LOGISTICS),
      returnTransfer: id => this.returnTransfer(id, MANAGED_LOGISTICS),
    };
  }
  #assertTransferOwner(transferId, authority) {
    assert(!this.#logistics.activeTripForTransfer(transferId) || authority === MANAGED_LOGISTICS, 'Managed deliveries must use carrier/trip operations, not manual transfer operations');
  }
  #record(frame) { return frame.routeStepInstances.findLast(r => r.valid && r.stepId === this.#step(frame)?.stepId); }
  #queue(stationId) { return this.#s.frames.filter(f => ['queued', 'batch_wait'].includes(f.status) && f.stationId === stationId && !f.blockedNextStationId); }

  receiveKits(input = {}) {
    assert(input && typeof input === 'object' && !Array.isArray(input), 'Invalid incoming lot');
    const quantity = integer(input.quantity ?? 1, 'kit quantity', 1);
    assert(this.#s.frames.length + quantity <= 10000, 'Demo limit is 10000 frame-equivalent kits');
    const { quantity: ignored, ...overrides } = input;
    const kit = validateKit({ ...clone(this.#config.defaultKit), ...clone(overrides) }, this.#config);
    const received = [];
    for (let i = 0; i < quantity; i++) {
      const frameId = this.#id('F');
      const frame = { ...clone(kit), frameId, serial: frameId, supplySource: 'manufactured_qualified_frame', status: 'incoming', stationId: 'F01', location: 'factory_incoming', routeIndex: 0, queuedAt: this.time, admittedAt: this.time, releasedAt: null, consumedAt: null, finalRelease: 'not_released', routeStepInstances: [], thermalLoadIds: [], chemicalLoadIds: [], geometryCheckIds: [], nonconformances: [], nonconformanceIds: [], reworkCount: 0, transferId: null, hold: null, blockedNextStationId: null, history: [] };
      this.#s.frames.push(frame); this.#s.admitted++; this.#event('purchased_kit_received', frame); received.push(clone(frame));
    }
    return received;
  }

  advance(seconds) {
    finite(seconds, 'elapsed seconds', 0, 604800);
    if (!this.running) return this.time;
    this.#s.remainder += seconds;
    while (this.#s.remainder >= 1 - 1e-9) { this.#s.remainder = Math.max(0, this.#s.remainder - 1); this.#tick(); }
    return this.time;
  }
  #tick() {
    this.#s.time++;
    const completed = this.#s.jobs.filter(job => job.completedAt <= this.time);
    this.#s.jobs = this.#s.jobs.filter(job => job.completedAt > this.time);
    for (const job of completed) this.#complete(job);
    if (this.#config.qualityMode === 'synthetic_pass') {
      for (const batch of this.#s.batches.filter(b => b.qualityState === 'processed_quality_hold' && !b.inspectionAttempted && b.reviewAt <= this.time)) {
        this.recordBatchInspection(batch.loadId, { result: this.#s.qualityOutcomes[batch.stationId] || 'pass', evidenceRef: 'synthetic-demo-batch-record', synthetic: true });
      }
      for (const frame of this.#s.frames.filter(f => f.status === 'qc_hold' && f.hold?.kind === 'inspection' && !f.hold.inspectionAttempted && f.hold.reviewAt <= this.time)) {
        this.recordInspection(frame.frameId, { result: this.#s.qualityOutcomes[frame.stationId] || 'pass', evidenceRef: 'synthetic-demo-inspection', synthetic: true });
      }
    }
    for (const frame of this.#s.frames) {
      if (frame.status === 'incoming') this.#enqueue(frame);
      else if (frame.blockedNextStationId) this.#enqueue(frame);
    }
    for (const station of this.#config.stations.filter(s => s.mode !== 'transfer')) this.#dispatch(station);
    this.#logistics.step(this.time, this.#transportPort());
  }
  #enqueue(frame) {
    const step = this.#step(frame);
    if (step.stationId === 'F13') { this.#release(frame); return; }
    if (step.stationId === 'F09' && !frame.alignmentRequired) {
      frame.routeStepInstances.push({ recordId: this.#id('Q'), stepId: step.stepId, stationId: step.stationId, operationKey: step.operationKey, startedAt: this.time, completedAt: this.time, qualityState: 'accepted', synthetic: true, skipped: true, skipReason: 'No alignment required in this explicitly synthetic scenario', valid: true, reworkPass: frame.reworkCount });
      frame.routeIndex++; this.#enqueue(frame); return;
    }
    if (this.#queue(step.stationId).filter(f => f !== frame).length >= this.#station(step.stationId).bufferCapacity) {
      frame.blockedNextStationId = step.stationId;
      if (frame.status !== 'incoming') frame.status = 'queued';
      return;
    }
    frame.stationId = step.stationId; frame.location = 'factory_queue'; frame.blockedNextStationId = null;
    frame.status = this.#station(step.stationId).mode === 'batch' ? 'batch_wait' : 'queued'; frame.queuedAt = this.time;
  }
  #dispatch(station) {
    const active = this.#s.jobs.filter(j => j.stationId === station.id);
    const used = new Set(active.map(j => j.resourceIndex));
    for (let resourceIndex = 0; resourceIndex < station.parallelResources; resourceIndex++) {
      if (used.has(resourceIndex)) continue;
      const queue = this.#queue(station.id).sort((a, b) => a.queuedAt - b.queuedAt || a.admittedAt - b.admittedAt);
      if (!queue.length) break;
      let members;
      if (station.mode === 'batch' || station.mode === 'lot') {
        const groups = new Map();
        for (const f of queue) { const key = batchKey(f, this.#step(f)); if (!groups.has(key)) groups.set(key, []); groups.get(key).push(f); }
        members = [...groups.values()].find(g => g.length >= station.capacity || (station.allowPartial && this.time - g[0].queuedAt >= station.maxWaitSeconds));
        if (!members) continue;
        members = members.slice(0, station.capacity);
      } else members = [queue[0]];
      const startedAt = this.time, completedAt = startedAt + station.cycleSeconds, jobId = this.#id('J');
      const job = { jobId, stationId: station.id, resourceIndex, frameIds: members.map(f => f.frameId), startedAt, completedAt, loadId: null };
      if (station.mode === 'batch' || station.mode === 'lot') {
        const first = members[0], step = this.#step(first), loadId = this.#id('B'); job.loadId = loadId;
        this.#s.batches.push({ loadId, stationId: station.id, batchStage: step.batchStage || step.operationKey, recipeId: first.recipeId, recipeVersion: first.recipeVersion, materialCompatibilityGroupId: first.materialCompatibilityGroupId, compatibilityKey: batchKey(first, step), memberFrameIds: [...job.frameIds], capacityFrames: station.capacity, startedAt, completedAt: null, plannedCompletedAt: completedAt, qualityState: 'processing', processRecordRef: null, inspectionAttempted: false, reviewAt: null, synthetic: true });
      }
      for (const frame of members) {
        const step = this.#step(frame), recordId = this.#id('Q');
        frame.routeStepInstances.push({ recordId, stepId: step.stepId, stationId: station.id, operationKey: step.operationKey, batchStage: step.batchStage || null, startedAt, completedAt: null, qualityState: 'pending_inspection', loadId: job.loadId, synthetic: true, valid: true, reworkPass: frame.reworkCount });
        if (station.id === 'F10') frame.thermalLoadIds.push(job.loadId);
        if (station.id === 'F04') frame.chemicalLoadIds.push(job.loadId);
        if (station.id === 'F08') frame.geometryCheckIds.push(recordId);
        frame.status = 'processing'; frame.location = 'factory_station'; frame.hold = null;
        this.#event('process_started', frame, { stationId: station.id, loadId: job.loadId, recordId });
      }
      this.#s.jobs.push(job);
    }
  }
  #complete(job) {
    if (job.loadId) {
      const batch = this.#s.batches.find(b => b.loadId === job.loadId);
      batch.completedAt = this.time; batch.qualityState = 'processed_quality_hold'; batch.reviewAt = this.time + this.#config.qualityReviewSeconds;
    }
    for (const id of job.frameIds) {
      const frame = this.#frame(id), record = this.#record(frame);
      record.completedAt = this.time; frame.status = 'qc_hold'; frame.location = 'factory_quality_hold';
      frame.hold = { kind: job.loadId ? 'batch' : 'inspection', loadId: job.loadId, recordId: record.recordId, reviewAt: this.time + this.#config.qualityReviewSeconds, inspectionAttempted: false };
      this.#event('process_completed_pending_quality', frame, { stationId: job.stationId, loadId: job.loadId });
    }
  }
  #inspectionInput(input) {
    assert(input && ['pass', 'hold'].includes(input.result), 'Inspection result must be pass or hold');
    textId(input.evidenceRef, 'inspection evidence reference');
    assert(input.synthetic === undefined || input.synthetic === true, 'This simulator can only record synthetic quality results');
    return input;
  }
  #nonconformance(frame, reason, loadId = null) {
    const nc = { nonconformanceId: this.#id('N'), stationId: frame.stationId, loadId, openedAt: this.time, resolvedAt: null, state: 'open', reason };
    frame.nonconformances.push(nc); frame.nonconformanceIds.push(nc.nonconformanceId);
  }
  #accept(frame, evidenceRef) {
    const record = this.#record(frame); record.qualityState = 'accepted'; record.inspectedAt = this.time; record.evidenceRef = evidenceRef;
    for (const nc of frame.nonconformances.filter(n => n.state === 'open' && n.stationId === frame.stationId)) { nc.state = 'resolved'; nc.resolvedAt = this.time; }
    this.#event('quality_accepted', frame, { stationId: frame.stationId, recordId: record.recordId, evidenceRef, synthetic: true });
    frame.hold = null; frame.routeIndex++; this.#enqueue(frame);
  }
  recordInspection(frameId, input) {
    const decision = this.#inspectionInput(input), frame = this.#frame(frameId);
    assert(frame.status === 'qc_hold' && frame.hold?.kind === 'inspection', 'Frame is not awaiting an individual inspection');
    frame.hold.inspectionAttempted = true;
    if (decision.result === 'pass') this.#accept(frame, decision.evidenceRef);
    else {
      this.#record(frame).qualityState = 'quality_hold';
      if (!frame.nonconformances.some(n => n.state === 'open' && n.stationId === frame.stationId)) this.#nonconformance(frame, decision.evidenceRef);
      this.#event('quality_held', frame, { stationId: frame.stationId, evidenceRef: decision.evidenceRef });
    }
    return clone(frame);
  }
  recordBatchInspection(loadId, input) {
    const decision = this.#inspectionInput(input), batch = this.#s.batches.find(b => b.loadId === loadId);
    assert(batch && ['processed_quality_hold', 'rejected_hold'].includes(batch.qualityState), 'Batch is not awaiting review');
    const members = batch.memberFrameIds.map(id => this.#frame(id));
    assert(members.every(f => f.status === 'qc_hold' && f.hold?.loadId === loadId), 'Batch membership is no longer intact; engineering disposition required');
    batch.inspectionAttempted = true; batch.processRecordRef = decision.evidenceRef; batch.inspectedAt = this.time;
    batch.qualityState = decision.result === 'pass' ? 'accepted' : 'rejected_hold';
    for (const frame of members) {
      if (decision.result === 'pass') this.#accept(frame, decision.evidenceRef);
      else {
        this.#record(frame).qualityState = 'quality_hold'; frame.hold.inspectionAttempted = true;
        if (!frame.nonconformances.some(n => n.state === 'open' && n.loadId === loadId)) this.#nonconformance(frame, decision.evidenceRef, loadId);
        this.#event('batch_quality_held', frame, { loadId, stationId: batch.stationId });
      }
    }
    return clone(batch);
  }
  setQualityOutcome(stationId, result) {
    assert(this.#station(stationId) && stationId !== 'F13' && ['pass', 'hold'].includes(result), 'Invalid quality outcome');
    this.#s.qualityOutcomes[stationId] = result;
  }
  holdFrame(frameId, reason = 'synthetic-quality-review') {
    textId(reason, 'hold reason'); const frame = this.#frame(frameId);
    assert(['qc_hold', 'released'].includes(frame.status), 'Only held or unreserved released frames can be quarantined');
    if (frame.status === 'released') {
      frame.routeIndex = this.#recipe(frame).steps.length - 2; frame.stationId = 'F12'; frame.status = 'qc_hold'; frame.location = 'factory_quality_hold'; frame.finalRelease = 'not_released'; frame.releasedAt = null;
      frame.hold = { kind: 'inspection', recordId: this.#record(frame).recordId, inspectionAttempted: true, reviewAt: this.time };
      this.#record(frame).qualityState = 'quality_hold';
    }
    if (frame.hold.kind === 'batch') return this.recordBatchInspection(frame.hold.loadId, { result: 'hold', evidenceRef: reason });
    return this.recordInspection(frameId, { result: 'hold', evidenceRef: reason });
  }
  authorizeRework(frameId, { fromStepId, reviewRef, reason = 'synthetic-reviewed-rework', thermalRequalificationReviewRef = null } = {}) {
    textId(reviewRef, 'engineering review reference'); textId(reason, 'rework reason');
    const frame = this.#frame(frameId), recipe = this.#recipe(frame), index = recipe.steps.findIndex(s => s.stepId === fromStepId);
    assert(['qc_hold', 'released'].includes(frame.status) && !frame.transferId, 'Rework requires a held/unreserved frame');
    assert(index >= 0 && index <= frame.routeIndex && !['F10', 'F13'].includes(recipe.steps[index].stationId), 'Invalid rework route; automatic/repeated thermal treatment is prohibited');
    assert(frame.reworkCount < this.#config.maxReworkCount, 'Rework limit reached');
    assert(frame.hold?.kind !== 'batch', 'Resolve whole-load review before individual rework');
    const repeatsHeat = frame.routeStepInstances.some(r => r.valid && r.stationId === 'F10' && recipe.steps.findIndex(s => s.stepId === r.stepId) >= index);
    if (repeatsHeat) textId(thermalRequalificationReviewRef, 'explicit thermal requalification review reference');
    frame.reworkCount++; frame.finalRelease = 'not_released'; frame.releasedAt = null;
    for (const record of frame.routeStepInstances) if (recipe.steps.findIndex(s => s.stepId === record.stepId) >= index) { record.valid = false; record.invalidatedByReview = reviewRef; }
    for (const nc of frame.nonconformances.filter(n => n.state === 'open')) { nc.state = 'rework_authorized'; nc.reviewRef = reviewRef; nc.resolvedAt = this.time; }
    frame.routeIndex = index; frame.hold = null; frame.blockedNextStationId = null;
    if (recipe.steps[index].stationId === 'F09') { frame.alignmentRequired = true; frame.alignmentReviewRef = reviewRef; }
    this.#event('rework_authorized', frame, { fromStepId, reviewRef, reason, thermalRequalificationReviewRef }); this.#enqueue(frame);
    return clone(frame);
  }
  scrapFrame(frameId, reviewRef) {
    textId(reviewRef, 'scrap review reference'); const frame = this.#frame(frameId);
    assert(['qc_hold', 'released'].includes(frame.status) && !frame.transferId, 'Only held or unreserved frames can be scrapped');
    assert(frame.hold?.kind !== 'batch', 'Resolve whole-load review before individual scrapping');
    frame.status = 'scrapped'; frame.location = 'scrap'; frame.finalRelease = 'not_released'; frame.hold = null;
    for (const nc of frame.nonconformances.filter(n => n.state === 'open')) { nc.state = 'scrapped'; nc.resolvedAt = this.time; }
    this.#event('scrapped_after_review', frame, { reviewRef }); return clone(frame);
  }
  scrapBatch(loadId, reviewRef) {
    textId(reviewRef, 'batch scrap review reference');
    const batch = this.#s.batches.find(b => b.loadId === loadId);
    assert(batch && ['processed_quality_hold', 'rejected_hold'].includes(batch.qualityState), 'Only a complete held load can be scrapped');
    const members = batch.memberFrameIds.map(id => this.#frame(id));
    assert(members.every(f => f.status === 'qc_hold' && f.hold?.loadId === loadId), 'Batch members must remain intact for whole-load disposition');
    batch.qualityState = 'scrapped_after_review'; batch.dispositionReviewRef = reviewRef;
    for (const frame of members) {
      frame.status = 'scrapped'; frame.location = 'scrap'; frame.finalRelease = 'not_released'; frame.hold = null;
      this.#record(frame).qualityState = 'scrapped';
      for (const nc of frame.nonconformances.filter(n => n.state === 'open')) { nc.state = 'scrapped'; nc.resolvedAt = this.time; }
      this.#event('batch_scrapped_after_review', frame, { loadId, reviewRef });
    }
    return clone(batch);
  }
  #release(frame) {
    const required = this.#recipe(frame).steps.filter(s => s.stationId !== 'F13');
    assert(required.every(step => frame.routeStepInstances.some(r => r.valid && r.stepId === step.stepId && r.qualityState === 'accepted')), 'Required route/quality record missing');
    assert(!frame.nonconformances.some(n => n.state === 'open'), 'Open nonconformance blocks final release');
    assert(frame.routeStepInstances.filter(r => r.valid && r.loadId).every(r => this.#s.batches.find(b => b.loadId === r.loadId)?.qualityState === 'accepted'), 'Batch records block final release');
    frame.status = 'released'; frame.stationId = 'F13'; frame.location = 'factory_released'; frame.finalRelease = 'accepted'; frame.releasedAt = this.time; frame.blockedNextStationId = null;
    this.#event('final_release_accepted', frame, { synthetic: true });
  }

  releasedFrames(spec = null) { if (spec) spec = specOf(spec); return clone(this.#s.frames.filter(f => f.status === 'released' && (!spec || specMatches(f, spec))).sort((a, b) => a.releasedAt - b.releasedAt)); }
  assemblyFrames(spec = null) { if (spec) spec = specOf(spec); return clone(this.#s.frames.filter(f => f.status === 'transfer' && f.location === 'assembly_received' && (!spec || specMatches(f, spec)))); }
  #transfer(transferId) { const t = this.#s.transfers.find(t => t.transferId === transferId); assert(t, 'Unknown transfer id'); return t; }
  reserveReleasedFrames({ quantity = 1, spec, orderId, transferId = null } = {}) {
    integer(quantity, 'reservation quantity', 1, 1000); const match = specOf(spec); textId(orderId, 'reservation order id');
    if (transferId !== null) textId(transferId, 'transfer id');
    const prior = this.#s.transfers.find(t => t.transferId === transferId);
    if (prior) { assert(prior.orderId === orderId && prior.frameIds.length === quantity && specMatches(prior.spec, match), 'Transfer id reused for a different request'); return clone(prior); }
    const frames = this.#s.frames.filter(f => f.status === 'released' && f.finalRelease === 'accepted' && !f.transferId && specMatches(f, match)).slice(0, quantity);
    if (frames.length < quantity) return null;
    const id = transferId || this.#id('X');
    const transfer = { transferId: id, orderId, spec: match, frameIds: frames.map(f => f.frameId), state: 'reserved', reservedAt: this.time, departedAt: null, receivedAt: null, consumedFrameIds: [], source: 'manufactured_qualified_frame' };
    this.#s.transfers.push(transfer);
    for (const frame of frames) { frame.status = 'transfer'; frame.location = 'factory_reserved'; frame.transferId = id; this.#event('transfer_reserved', frame, { transferId: id }); }
    return clone(transfer);
  }
  dispatchTransfer(transferId, authority = null) {
    const transfer = this.#transfer(transferId);
    this.#assertTransferOwner(transferId, authority);
    if (['in_transit', 'received', 'consumed'].includes(transfer.state)) return clone(transfer);
    assert(transfer.state === 'reserved', 'Transfer cannot depart from this state');
    transfer.state = 'in_transit'; transfer.departedAt = this.time;
    for (const id of transfer.frameIds) { const f = this.#frame(id); f.location = 'road_loaded'; this.#event('transfer_departed', f, { transferId }); }
    return clone(transfer);
  }
  receiveTransfer(transferId, spec, authority = null) {
    const match = specOf(spec), transfer = this.#transfer(transferId);
    this.#assertTransferOwner(transferId, authority);
    assert(specMatches(transfer.spec, match), 'Receiver specification mismatch');
    if (['received', 'consumed'].includes(transfer.state)) return clone(transfer);
    assert(transfer.state === 'in_transit', 'Transfer is not in transit');
    assert(transfer.frameIds.every(id => this.#frame(id).finalRelease === 'accepted'), 'Unreleased frame cannot be received');
    transfer.state = 'received'; transfer.receivedAt = this.time;
    for (const id of transfer.frameIds) { const f = this.#frame(id); f.location = 'assembly_received'; this.#event('assembly_stock_received', f, { transferId }); }
    return clone(transfer);
  }
  cancelTransfer(transferId) {
    const transfer = this.#transfer(transferId);
    if (transfer.state === 'canceled') return clone(transfer);
    assert(!this.#logistics.activeTripForTransfer(transferId), 'Managed deliveries must be rejected with rejectTrip so carrier and stock stay synchronized');
    assert(transfer.state === 'reserved', 'Only an undispatched reservation can be canceled');
    transfer.state = 'canceled'; this.#restoreTransfer(transfer); return clone(transfer);
  }
  rejectTransfer(transferId, reason, authority = null) {
    textId(reason, 'rejection reason'); const transfer = this.#transfer(transferId);
    this.#assertTransferOwner(transferId, authority);
    if (transfer.state === 'returning') return clone(transfer);
    assert(['reserved', 'in_transit'].includes(transfer.state), 'Received/consumed transfers cannot be rejected');
    transfer.state = 'returning'; transfer.rejectionReason = reason;
    for (const id of transfer.frameIds) this.#frame(id).location = 'road_return_loaded';
    return clone(transfer);
  }
  returnTransfer(transferId, authority = null) {
    const transfer = this.#transfer(transferId);
    this.#assertTransferOwner(transferId, authority);
    if (transfer.state === 'returned') return clone(transfer);
    assert(transfer.state === 'returning', 'Transfer is not returning');
    transfer.state = 'returned'; transfer.returnedAt = this.time; this.#restoreTransfer(transfer); return clone(transfer);
  }
  #restoreTransfer(transfer) { for (const id of transfer.frameIds) { const frame = this.#frame(id); frame.status = 'released'; frame.location = 'factory_released'; frame.transferId = null; frame.releasedAt = this.time; this.#event('transfer_stock_restored', frame, { transferId: transfer.transferId }); } }
  rejectTrip(tripId, reason) { return this.#logistics.rejectTrip(tripId, reason, this.#transportPort()); }

  /** Exactly once by [orderId, vehicleSerial]. Only received manufactured stock is eligible. */
  takeFrame(spec, orderId, vehicleSerial) {
    const match = specOf(spec); textId(orderId, 'assembly order id'); textId(vehicleSerial, 'assembly vehicle serial');
    const key = JSON.stringify([orderId, vehicleSerial]);
    const prior = this.#s.consumptions.find(c => c.requestKey === key);
    if (prior) { assert(specMatches(prior.spec, match), 'Consumption id reused with different specification'); return clone(prior); }
    const frame = this.#s.frames.find(f => f.status === 'transfer' && f.location === 'assembly_received' && f.finalRelease === 'accepted' && specMatches(f, match));
    if (!frame) return null;
    const transfer = this.#transfer(frame.transferId);
    assert(transfer.state === 'received', 'Frame transfer must be received before consumption');
    frame.status = 'consumed'; frame.location = 'assembly_consumed'; frame.consumedAt = this.time; frame.assemblyOrderId = orderId; frame.vehicleSerial = vehicleSerial;
    transfer.consumedFrameIds.push(frame.frameId); if (transfer.consumedFrameIds.length === transfer.frameIds.length) transfer.state = 'consumed';
    this.#event('assembly_frame_consumed', frame, { transferId: transfer.transferId, orderId, vehicleSerial });
    const receipt = { requestKey: key, frameId: frame.frameId, serial: frame.frameId, transferId: transfer.transferId, orderId, vehicleSerial, spec: match, consumedAt: this.time, supplySource: 'manufactured_qualified_frame', finalRelease: 'accepted', synthetic: true, trace: { tubeLotIds: clone(frame.tubeLotIds), forgingLotIds: clone(frame.forgingLotIds), thermalLoadIds: clone(frame.thermalLoadIds), chemicalLoadIds: clone(frame.chemicalLoadIds), geometryCheckIds: clone(frame.geometryCheckIds), routeStepInstances: clone(frame.routeStepInstances) } };
    this.#s.consumptions.push(receipt); return clone(receipt);
  }

  snapshot() {
    const counts = Object.fromEntries(FRAME_STATES.map(status => [status, this.#s.frames.filter(f => f.status === status).length]));
    const locations = {};
    for (const f of this.#s.frames) locations[f.location] = (locations[f.location] || 0) + 1;
    counts.admitted = this.#s.admitted; counts.assemblyReady = locations.assembly_received || 0; counts.rework = this.#s.frames.reduce((n, f) => n + f.reworkCount, 0);
    const stations = {}, queues = {};
    for (const station of this.#config.stations) {
      const active = this.#s.jobs.filter(j => j.stationId === station.id), queue = this.#queue(station.id), held = this.#s.frames.filter(f => f.stationId === station.id && f.status === 'qc_hold');
      const resources = active.map(job => ({ ...clone(job), remaining: Math.max(0, job.completedAt - this.time), progress: (this.time - job.startedAt) / (job.completedAt - job.startedAt), jobs: job.frameIds.map(id => ({ frameId: id, serial: id })) }));
      queues[station.id] = queue.map(f => f.frameId);
      stations[station.id] = { id: station.id, name: station.name, phase: active.length ? 'processing' : held.length ? 'qc_hold' : queue.length ? (station.mode === 'batch' ? 'batch_wait' : 'queued') : 'idle', remaining: resources[0]?.remaining || 0, progress: resources[0]?.progress || 0, jobs: resources.flatMap(r => r.jobs), queue: [...queues[station.id]], heldFrameIds: held.map(f => f.frameId), resources, capacity: station.capacity, parallelResources: station.parallelResources, bufferCapacity: station.bufferCapacity };
    }
    return { schemaVersion: '1.0.0', time: this.time, running: this.running, remainder: this.#s.remainder, safetyBadge: SAFETY_BADGE, qualityBadge: '模擬品質結果，非實測', productionAuthorized: false, counts, locations, stations, queues, frames: clone(this.#s.frames), batches: clone(this.#s.batches), transfers: clone(this.#s.transfers), ready: this.releasedFrames(), assemblyReady: this.assemblyFrames(), logistics: this.#logistics.snapshot(), events: clone(this.#s.events), consumptions: clone(this.#s.consumptions), conservation: this.audit() };
  }
  audit() {
    const errors = [], frames = this.#s.frames, ids = frames.map(f => f.frameId);
    if (ids.length !== new Set(ids).size) errors.push('duplicate_frame_id');
    if (frames.length !== this.#s.admitted) errors.push('admission_conservation_failed');
    if (!frames.every(f => FRAME_STATES.includes(f.status))) errors.push('unknown_frame_state');
    for (const batch of this.#s.batches) {
      if (new Set(batch.memberFrameIds).size !== batch.memberFrameIds.length) errors.push('duplicate_batch_member');
      for (const id of batch.memberFrameIds) {
        const f = frames.find(f => f.frameId === id), record = f?.routeStepInstances.find(r => r.loadId === batch.loadId);
        if (!record || batchKey(f, { batchStage: record.batchStage, operationKey: record.operationKey }) !== batch.compatibilityKey) errors.push('incompatible_batch_member');
      }
    }
    const jobMembers = this.#s.jobs.flatMap(j => j.frameIds);
    if (new Set(jobMembers).size !== jobMembers.length) errors.push('frame_on_multiple_resources');
    for (const f of frames) {
      if ((f.status === 'processing') !== jobMembers.includes(f.frameId)) errors.push('processing_ownership_mismatch');
      if (['released', 'transfer', 'consumed'].includes(f.status) && f.finalRelease !== 'accepted') errors.push('unreleased_supply');
      if (f.status === 'transfer' && !this.#s.transfers.some(t => t.transferId === f.transferId && ['reserved', 'in_transit', 'received', 'returning'].includes(t.state))) errors.push('orphan_transfer');
    }
    const consumed = this.#s.consumptions.map(c => c.frameId);
    if (new Set(consumed).size !== consumed.length || consumed.length !== frames.filter(f => f.status === 'consumed').length) errors.push('consumption_conservation_failed');
    return { ok: errors.length === 0, errors: [...new Set(errors)], admitted: this.#s.admitted, accounted: frames.length, unit: 'frame_equivalent_kit_not_mass', purchasedFinishedFramesIncluded: false };
  }
}

export { FrameSimulation as FrameFactorySimulation };
