import { assert, clone, specOf, textId } from './frame-config.js';

/** Deterministic concept transport. A vehicle remains occupied on its empty return. */
export class FrameLogistics {
  #config; #vehicles; #trips; #time = 0;
  constructor(config) {
    this.#config = clone(config);
    this.#vehicles = Array.from({ length: config.fleet }, (_, i) => ({ id: `FRAME-CARRIER-${i + 1}`, phase: 'idle', tripId: null, frameIds: [], startedAt: 0, readyAt: 0 }));
    this.#trips = [];
  }
  step(time, factory) {
    this.#time = time;
    if (!this.#config.enabled) return;
    for (const vehicle of this.#vehicles) {
      let transitions = 0;
      while (vehicle.phase !== 'idle' && vehicle.readyAt <= time && transitions++ < 6) {
        const trip = this.#trips.find(t => t.tripId === vehicle.tripId);
        if (vehicle.phase === 'loading') {
          factory.dispatchTransfer(trip.transferId);
          trip.departedAt = time; this.#phase(vehicle, 'outbound', this.#config.travelSeconds, time);
        } else if (vehicle.phase === 'outbound') {
          trip.arrivedAt = time; this.#phase(vehicle, 'unloading', this.#config.unloadSeconds, time);
        } else if (vehicle.phase === 'unloading') {
          factory.receiveTransfer(trip.transferId, trip.spec);
          trip.receivedAt = time; trip.state = 'received'; vehicle.frameIds = [];
          this.#phase(vehicle, 'empty_return', this.#config.returnSeconds, time);
        } else if (vehicle.phase === 'empty_return' || vehicle.phase === 'loaded_return') {
          if (vehicle.phase === 'loaded_return') factory.returnTransfer(trip.transferId);
          trip.returnedAt = time; trip.state = trip.state === 'rejected' ? 'returned' : 'completed';
          vehicle.phase = 'idle'; vehicle.tripId = null; vehicle.frameIds = []; vehicle.startedAt = time; vehicle.readyAt = time;
        }
      }
    }
    for (const vehicle of this.#vehicles.filter(v => v.phase === 'idle')) {
      const ready = factory.releasedFrames();
      if (!ready.length) break;
      // Do not let an incomplete older specification starve a complete later one.
      const groups = new Map();
      for (const frame of ready) { const key = JSON.stringify(specOf(frame)); if (!groups.has(key)) groups.set(key, []); groups.get(key).push(frame); }
      const compatible = [...groups.values()].find(group => group.length >= this.#config.batchSize || (this.#config.allowPartial && time - group[0].releasedAt >= this.#config.maxWaitSeconds));
      if (!compatible) continue;
      const spec = specOf(compatible[0]);
      const transfer = factory.reserveReleasedFrames({ orderId: 'ASSEMBLY-STOCK', spec, quantity: Math.min(this.#config.batchSize, compatible.length) });
      if (!transfer) continue;
      const trip = { tripId: `${transfer.transferId}-TRIP`, transferId: transfer.transferId, vehicleId: vehicle.id, frameIds: [...transfer.frameIds], spec, state: 'active', startedAt: time, departedAt: null, arrivedAt: null, receivedAt: null, returnedAt: null, source: 'synthetic-planning' };
      this.#trips.push(trip); vehicle.tripId = trip.tripId; vehicle.frameIds = [...trip.frameIds];
      this.#phase(vehicle, 'loading', this.#config.loadSeconds, time);
      if (this.#config.loadSeconds === 0) {
        factory.dispatchTransfer(trip.transferId); trip.departedAt = time;
        this.#phase(vehicle, 'outbound', this.#config.travelSeconds, time);
      }
    }
  }
  #phase(vehicle, phase, seconds, time) { vehicle.phase = phase; vehicle.startedAt = time; vehicle.readyAt = time + seconds; }
  rejectTrip(tripId, reason, factory) {
    textId(tripId, 'trip id'); textId(reason, 'rejection reason');
    const trip = this.#trips.find(t => t.tripId === tripId);
    assert(trip, 'Unknown trip');
    const vehicle = this.#vehicles.find(v => v.tripId === tripId);
    assert(vehicle && ['loading', 'outbound', 'unloading'].includes(vehicle.phase), 'Only unreceived deliveries can be rejected');
    factory.rejectTransfer(trip.transferId, reason);
    trip.state = 'rejected'; trip.rejectionReason = reason; trip.rejectedAt = this.#time;
    this.#phase(vehicle, 'loaded_return', this.#config.returnSeconds, this.#time);
    return clone(trip);
  }
  activeTripForTransfer(transferId) {
    const trip = this.#trips.find(t => t.transferId === transferId);
    return trip && this.#vehicles.some(v => v.tripId === trip.tripId) ? clone(trip) : null;
  }
  snapshot() {
    return { time: this.#time, config: clone(this.#config), vehicles: this.#vehicles.map(v => ({ ...clone(v), remaining: Math.max(0, v.readyAt - this.#time), progress: v.phase === 'idle' ? 0 : Math.min(1, (this.#time - v.startedAt) / Math.max(1, v.readyAt - v.startedAt)) })), trips: clone(this.#trips) };
  }
}
