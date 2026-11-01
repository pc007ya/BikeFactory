# G2.1 / G3 independent audit — bounded acceptance evidence

Status: **Bounded automated audit complete; no unresolved defect found in the executed checks. Visual acceptance remains outstanding.** No production code was changed by this auditor.

## Candidate identity
- Original G2 remains separate and immutable; original five-file SHA list: `audited-source-sha256.txt`.
- New G2.1 records use explicit profile/version checks, persistent cart body, true TURN, staged attachment, and empty EXIT reverse departure.
- Current source/record/artifact identity: `g21-audited-source.json`; this records 11 core hashes checked against the shipped record manifest, renderer source hashes, and all seven compressed records.
- Final candidate HTML SHA: `e596f904aa91ba098982bc90b3906d3b2ad43d683f23e18b026e151a643baa93`.
- New demo assumptions include 30 s assisted transfer/load/unload, distance/angle speed budgets, and extended second-shift horizon. These are not real factory measurements.

## Independent automated checks
`g21-final-independent.log`: **85 / 85 passed** on the frozen production core/geometry. Covers original conservation/backpressure cases, missing workers/material, finite buffers/terminals, blocked movement, shifts/rest, NG rework, pause with simultaneous TURN/service due, exact-once resume, read-only time/sequence replay, persistent cart/attachment, actual arm lengths/contact, all seven record semantics, and version rejection. A later dashboard-only labeling change does not alter core/geometry; final bundle is checked separately.

`g21-bundle-smoke.log`: actual shipped inline JavaScript with synthetic DOM and deliberately unavailable WebGL. Checks gzip payload identities, entry/fallback, zero requests, single RAF, scenario switches, final frame and event controls. **This is not a real browser, pixels, layout, GPU, or visual acceptance test.**

## Independent geometry results
- Seven actual records, adaptive payload sweeps: **298 transfer starts / 52,582 samples**, zero positive or unresolved narrow-phase candidates. Full per-scenario summary: `g21-transfer-final-summary.json`; all embedded renderer source hashes match the final bound source and no candidate-output cap was reached.
- Actual normal AGV motion: **166 actions / 5,920 samples**, no broad overlap candidates. Quality AGV motion: **167 actions / 5,964 samples**, two conveyor-leg broad candidates, both actual triangle/box negative. Includes the repaired empty EXIT reverse departure and real VJ turn; SCRAP turn also sampled. Logs: `g21-agv-final-normal.log`, `g21-agv-reverse-clearance-quality.log`.
- Actual shortage C-P cart: **42 actions / 1,547 samples / 1,630 palm-handle contact checks**. No pose error, same-time body jump, or positive/unresolved narrow candidate; 194 broad candidates resolved negative. Maximum actual contact error 2.385e-9 m. `g21-cart-final-shortage.log`.
- Additional isolated one-bike FAIL→PASS, repair-stock-zero C-Q record: completed at **805,964 ms**, **26 cart actions / 1,138 samples / 1,298 palm-handle checks**, zero pose errors/body jumps/positive or unresolved candidates. This is an isolated audit trace, not an eighth UI scenario. `g21-cq-trace.json.gz`, `g21-cart-final-cq.log`.
- Actual loaded gantry hook-to-carrier bail contact and serial ownership: **4,124 checks**, three fractions inside each loaded segment across seven records; maximum world-coordinate error 4.45e-16 m. `g21-hook-record-probe.log`.

Only actual recorded simultaneous states are sampled. Broad-phase AABB intersections are not called collisions unless supported by the stated narrow method. Negative sampled checks are not continuous safety proofs. Payload sweeps add segment endpoints and smoothstep peak-factor divisions bounded by 0.1 m / 5 degrees. Cart/AGV sweeps include true visible mesh geometry, attached worker and terminal conveyor hardware; intentional palm/handle contact is identified explicitly.

## Important limitations / unclaimed gates
- No WebGL screenshot, camera occlusion, real click targeting, font/layout, frame rate, mobile viewport, or actual visual review has been accepted.
- No certified collision avoidance, continuous swept-volume proof, strength, loads, ergonomics, manufacturing feasibility, physical drive control, braking or stopping-distance validation.
- Cart caster/AGV wheel steering and differential dynamics are not solved. Worker short-step gait is a display approximation, not foot planting or biomechanics. Ordinary walking corner heading remains simplified.
- Stock delivery is a finite ledger handoff at C-P/C-Q; unpacking and individual hand-carry to every rack are not animated or independently timed.
- Finished/scrap goods cross an explicit boundary into a finite off-slice ledger; no ASRS or six-slot storage transport is claimed.
- Proposed gate checklist `g21-independent-gates.md` is a planning matrix, **not** a claim that every proposed capability was implemented. In particular generic post-pickup cancellation/safe-stop rescue and arbitrary multi-vehicle/multi-cart tail arbitration are not accepted features. Current scope has one cart and one AGV with retained route/bay reservations.
- These results validate this bounded demo configuration and source/profile identity, not all possible layouts, arbitrary external records, or real factory performance.

No denied browser path was retried, and no Mac access or publication was performed for this audit.
