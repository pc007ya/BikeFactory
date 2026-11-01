# Three-station bicycle slice — G2 logic candidate

**Synthetic planning assumptions; not actual plant data. No 3D/browser acceptance or deployment.**

This separate candidate implements one six-bike batch, preparation → assembly → inspection, two finite skilled employees, one persistent AGV, one replenishment cart, finite materials/slots/route rights, one permitted rework and finite finished/scrap storage. It does not replace the unaccepted v0.10 factory draft.

## Run

Node.js 22+ (validated on Node 24.22.1), no npm dependencies:

```sh
npm test
npm run demo
node generate-evidence.js
```

`demo.js` prints the actual simulation outcome, waiting causes and KPIs. `generate-evidence.js` writes the replay record and scenario summaries under `evidence/`. All times in source/records are integer milliseconds.

## Modules / ownership

- `config.js`: proposal assumptions; immutable version/hash stored with each run.
- `personnel.js`: employee skills, finite ownership, shifts, approach/service/return eligibility, late return/rest.
- `inventory.js`: atomic complete BOM reservation, accountable consumption, replenishment source/transit/destination and capacity conservation.
- `routing.js`: separate walking/AGV graphs, deterministic routes, opposite-direction exclusive rights, atomic route union and closures.
- `engine.js`: one simulation clock, stations/buffers, finite task dispatch, actual segment movement, input/output handling, quality/rework, ports, stall diagnostics and read-only replay.
- `tests/`: module and integrated acceptance cases. `evidence/independent-audit/` contains separate audit scripts/results when included.
- `CONTRACT.md`, `DECISIONS.md`: interfaces and resolved rule ambiguities.

## Useful API

```js
import { FactorySlice, RecordedReplay } from './engine.js';
const sim = new FactorySlice(); // unique run identity; all data explicitly synthetic
sim.advance(10000);
sim.pause();
sim.resume();
sim.block('agv:VA|VP', 'test obstruction');
sim.unblock('agv:VA|VP');
sim.setPortInterlock('Q', true, 'maintenance-1');
sim.setPortInterlock('Q', false, 'maintenance-1');
const outcome = sim.runUntil(3600000);
console.log(outcome, sim.kpi);
const reader = new RecordedReplay(sim.exportRecord());
reader.at(1234); // only projects already-recorded state, never redispatches
reader.sequence(10); // distinguish multiple commits in the same millisecond
```

Replay times must be within the recorded interval. If comparing independent deterministic runs, supply the same explicit `runId`; default UUID is metadata only, not outcome randomness. `ADVANCED` records are observer checkpoints, not production events. The scenario hash excludes run identity. Full recorded snapshots are validated by SHA256 and returned as detached copies.

## What has genuinely been modeled

A worker physically traverses a separate logical walking network before serving. Skills and a sufficient shift including return are required. Materials are deducted once into serial-owned holdings; replenishment cannot invent stock. Stations require explicit 8-second input/output handling rather than teleporting finished work. The AGV keeps its identity and position, travels empty to pickup and carries one job. Loading/unloading takes time and reserves finite destination capacity. A closed occupied edge freezes progress while retaining ownership. Port maintenance freezes the transfer without deleting stock. Quality failure requires a skilled rework task and an additional consumable; second failure goes to finite scrap storage.

Capacity/personnel/material/route shortages remain visible waiting causes. `STALLED` is an unsuccessful, explained terminal observation, not manufactured completion. A later external command may unblock it. Every workpiece has one physical location; inventory, time buckets and capacities are checked continuously.

## Limits / acceptance boundary

- This is **G2 logic**, not G3 dynamic visual acceptance. No WebGL scene, rendered shopfloor, real footage or industrial collision proof is supplied.
- Logical route locks and finite nodes are not geometric clearance, ergonomics, certified safety sensing or multivehicle avoidance. Only one AGV exists.
- Fixed example service times, deterministic scripted quality and synthetic initial conditions are not measured throughput/reliability.
- Personnel rules are a deliberately small two-worker proposal, not optimized workforce planning. Late carried-material safety handling is explicitly recorded as an exception; it is not a labor-policy claim.
- Initial prefilled serials must be members of the same batch, fit declared slots and debit accounted materials. Their prior history is not fabricated; initial completed counts are separate and full lead-time KPI excludes them.
- No live PLC/MES, stock database, public deployment, hardware control or external side effects.
- v0.10 remains untouched. Next step is user review of this small slice's actual traces, then separately authorized G3 rendering/validation in an available browser environment.
