/** Finite material ledger. All quantities synthetic; no timers or hidden replenishment.
 * stock is physical on-hand, including still-unpicked kit reservations.
 * held retains parts belonging to serial/task owners through production and disposal.
 */
const copy = value => structuredClone(value);
const own = (o, key) => Object.hasOwn(o, key);
const idOK = value => typeof value === 'string' && value.trim().length > 0 && value.length <= 160 && !['__proto__', 'prototype', 'constructor'].includes(value);
const quantityOK = value => Number.isSafeInteger(value) && value >= 0;
function dictionary(value, name) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error(`Invalid ${name}`);
  const result = {};
  for (const key of Object.keys(value).sort()) {
    if (!idOK(key) || !quantityOK(value[key])) throw new Error(`Invalid ${name} entry: ${key}`);
    result[key] = value[key];
  }
  return result;
}
function validBom(bom, materials) {
  const normalized = dictionary(bom, 'BOM');
  if (!Object.keys(normalized).length || Object.values(normalized).some(n => n === 0)) throw new Error('BOM requires positive quantities');
  for (const material of Object.keys(normalized)) if (!own(materials, material)) throw new Error(`Unknown material: ${material}`);
  return normalized;
}
export class Inventory {
  constructor(config, emit = () => {}) {
    if (!config || typeof emit !== 'function') throw new Error('Invalid inventory configuration');
    const stock = dictionary(config.stock, 'stock');
    const capacity = dictionary(config.capacity, 'capacity');
    const external = dictionary(config.external, 'external');
    const names = Object.keys(capacity);
    if (!names.length) throw new Error('Inventory needs explicit capacities');
    for (const key of [...Object.keys(stock), ...Object.keys(external)]) if (!own(capacity, key)) throw new Error(`Missing capacity: ${key}`);
    for (const key of names) { stock[key] ??= 0; external[key] ??= 0; }
    this.emit = emit;
    this.lastReason = null;
    this.state = {schema: 1, stock, capacity, external, kitReservations: {}, replenishments: {}, held: {}, completedReplenishments: {}, initialTotals: Object.fromEntries(names.map(k => [k, stock[k] + external[k]]))};
    this.assertInvariants();
  }
  fail(reason, details = {}) { this.lastReason = {reason, ...copy(details)}; return false; }
  reservedKit(material) { return Object.values(this.state.kitReservations).reduce((sum, bom) => sum + (bom[material] || 0), 0); }
  reservedExternal(material) { return Object.values(this.state.replenishments).filter(r => r.material === material && r.phase === 'RESERVED').reduce((sum, r) => sum + r.quantity, 0); }
  incoming(material) { return Object.values(this.state.replenishments).filter(r => r.material === material).reduce((sum, r) => sum + r.quantity, 0); }
  used(owner) { return ['kitReservations', 'replenishments', 'held', 'completedReplenishments'].some(k => own(this.state[k], owner)); }
  kitAvailability(bom) {
    let normalized;
    try { normalized = validBom(bom, this.state.capacity); } catch (e) { return {ok: false, reason: 'INVALID_BOM', detail: e.message}; }
    const shortages = Object.entries(normalized).filter(([m,n]) => this.state.stock[m] - this.reservedKit(m) < n).map(([material, requested]) => ({material, requested, available: this.state.stock[material] - this.reservedKit(material)}));
    return shortages.length ? {ok: false, reason: 'NO_MATERIAL', shortages} : {ok: true, bom: normalized};
  }
  reserveKit(owner, bom) {
    if (!idOK(owner)) return this.fail('INVALID_OWNER');
    if (this.used(owner)) return this.fail('OWNER_ALREADY_USED', {owner});
    const availability = this.kitAvailability(bom);
    if (!availability.ok) return this.fail(availability.reason, availability);
    this.state.kitReservations[owner] = copy(availability.bom);
    this.lastReason = null;
    this.assertInvariants();
    this.emit('MATERIAL_KIT_RESERVED', {owner, bom: copy(availability.bom)});
    return true;
  }
  consumeKit(owner) {
    if (!own(this.state.kitReservations, owner)) throw new Error(`No unpicked kit reservation for ${owner}`);
    const bom = this.state.kitReservations[owner];
    for (const [material, quantity] of Object.entries(bom)) this.state.stock[material] -= quantity;
    this.state.held[owner] = copy(bom);
    delete this.state.kitReservations[owner];
    this.lastReason = null;
    this.assertInvariants();
    this.emit('MATERIAL_KIT_PICKED', {owner, bom: copy(bom)});
    return copy(bom);
  }
  replenishAvailability(material, quantity) {
    if (!idOK(material) || !own(this.state.capacity, material) || !Number.isSafeInteger(quantity) || quantity < 1) return {ok: false, reason: 'INVALID_REPLENISHMENT'};
    const externalAvailable = this.state.external[material] - this.reservedExternal(material);
    const freeCapacity = this.state.capacity[material] - this.state.stock[material] - this.incoming(material);
    if (externalAvailable < quantity) return {ok: false, reason: 'NO_EXTERNAL_MATERIAL', material, requested: quantity, available: externalAvailable};
    if (freeCapacity < quantity) return {ok: false, reason: 'NO_RACK_CAPACITY', material, requested: quantity, available: freeCapacity};
    return {ok: true, material, quantity};
  }
  reserveReplenish(owner, material, quantity) {
    if (!idOK(owner)) return this.fail('INVALID_OWNER');
    if (this.used(owner)) return this.fail('OWNER_ALREADY_USED', {owner});
    const availability = this.replenishAvailability(material, quantity);
    if (!availability.ok) return this.fail(availability.reason, availability);
    this.state.replenishments[owner] = {material, quantity, phase: 'RESERVED'};
    this.lastReason = null;
    this.assertInvariants();
    this.emit('REPLENISHMENT_RESERVED', {owner, material, quantity});
    return true;
  }
  pickupReplenish(owner) {
    const reservation = this.state.replenishments[owner];
    if (!reservation || reservation.phase !== 'RESERVED') throw new Error(`No unpicked replenishment for ${owner}`);
    this.state.external[reservation.material] -= reservation.quantity;
    reservation.phase = 'IN_TRANSIT';
    this.lastReason = null;
    this.assertInvariants();
    this.emit('REPLENISHMENT_PICKED', {owner, material: reservation.material, quantity: reservation.quantity});
    return copy(reservation);
  }
  deliverReplenish(owner) {
    const reservation = this.state.replenishments[owner];
    if (!reservation || reservation.phase !== 'IN_TRANSIT') throw new Error(`No in-transit replenishment for ${owner}`);
    this.state.stock[reservation.material] += reservation.quantity;
    this.state.completedReplenishments[owner] = {...reservation, phase: 'DELIVERED'};
    delete this.state.replenishments[owner];
    this.lastReason = null;
    this.assertInvariants();
    this.emit('REPLENISHMENT_DELIVERED', {owner, material: reservation.material, quantity: reservation.quantity});
    return copy(this.state.completedReplenishments[owner]);
  }
  cancel(owner) {
    if (own(this.state.kitReservations, owner)) {
      const bom = this.state.kitReservations[owner]; delete this.state.kitReservations[owner];
      this.lastReason = null; this.assertInvariants(); this.emit('MATERIAL_RESERVATION_CANCELLED', {owner, bom: copy(bom)}); return true;
    }
    const replenishment = this.state.replenishments[owner];
    if (replenishment?.phase === 'RESERVED') {
      delete this.state.replenishments[owner]; this.lastReason = null; this.assertInvariants(); this.emit('REPLENISHMENT_CANCELLED', {owner, ...copy(replenishment)}); return true;
    }
    return this.fail(this.used(owner) ? 'ALREADY_PICKED_OR_DELIVERED' : 'NO_RESERVATION', {owner});
  }
  report() {
    return Object.fromEntries(Object.keys(this.state.capacity).sort().map(material => [material, {
      onHand: this.state.stock[material], available: this.state.stock[material] - this.reservedKit(material), kitReserved: this.reservedKit(material),
      external: this.state.external[material], externalAvailable: this.state.external[material] - this.reservedExternal(material),
      incoming: this.incoming(material), inTransit: Object.values(this.state.replenishments).filter(r => r.material === material && r.phase === 'IN_TRANSIT').reduce((s,r) => s+r.quantity,0),
      held: Object.values(this.state.held).reduce((s,b) => s+(b[material]||0),0), capacity: this.state.capacity[material]
    }]));
  }
  snapshot() { return copy(this.state); }
  restore(snapshot) {
    const previous = this.state;
    this.state = copy(snapshot);
    try { this.assertInvariants(); } catch (error) { this.state = previous; throw error; }
    this.lastReason = null;
  }
  assertInvariants() {
    const s = this.state;
    if (!s || s.schema !== 1) throw new Error('Invalid inventory snapshot schema');
    for (const name of ['stock','capacity','external','initialTotals']) dictionary(s[name], name);
    const materials = Object.keys(s.capacity);
    if (!materials.length || ['stock','external','initialTotals'].some(k => Object.keys(s[k]).length !== materials.length || materials.some(m => !own(s[k],m)))) throw new Error('Inventory ledger material mismatch');
    const owners = new Set();
    for (const name of ['kitReservations','held','replenishments','completedReplenishments']) {
      if (!s[name] || typeof s[name] !== 'object' || Array.isArray(s[name])) throw new Error(`Invalid ${name}`);
      for (const [owner, record] of Object.entries(s[name])) {
        if (!idOK(owner) || owners.has(owner)) throw new Error(`Duplicate or invalid owner ${owner}`); owners.add(owner);
        if (name === 'kitReservations' || name === 'held') validBom(record, s.capacity);
        else if (!record || !own(s.capacity,record.material) || !Number.isSafeInteger(record.quantity) || record.quantity < 1 || !(name === 'completedReplenishments' ? ['DELIVERED'] : ['RESERVED','IN_TRANSIT']).includes(record.phase)) throw new Error(`Invalid replenishment ${owner}`);
      }
    }
    for (const material of materials) {
      const reserved = this.reservedKit(material), incoming = this.incoming(material), externalReserved = this.reservedExternal(material);
      if (reserved > s.stock[material]) throw new Error(`Over-reserved kit material ${material}`);
      if (s.stock[material] + incoming > s.capacity[material]) throw new Error(`Rack capacity exceeded ${material}`);
      if (externalReserved > s.external[material]) throw new Error(`External source over-reserved ${material}`);
      const transit = Object.values(s.replenishments).filter(r=>r.material===material&&r.phase==='IN_TRANSIT').reduce((sum,r)=>sum+r.quantity,0);
      const held = Object.values(s.held).reduce((sum,b)=>sum+(b[material]||0),0);
      const accounted = s.stock[material] + s.external[material] + transit + held;
      if (!Number.isSafeInteger(accounted) || accounted !== s.initialTotals[material]) throw new Error(`Material conservation failed ${material}`);
    }
    return true;
  }
}
