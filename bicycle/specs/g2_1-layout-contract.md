# G2.1 minimal layout contract — proposed, pending independent geometry gate

All coordinates, dimensions, speeds and durations are **demonstration assumptions**, not factory survey data or safety certification. Authoritative machine-readable sibling: `g2_1-layout-contract.json`. No existing G2/G3 files are changed by this contract. Preserve the AGV network exactly.

## Exact topology
Core planar `[x,y]` maps to world `[x,height,-y]`.

Human nodes: H0[0,10], HB[-3,10], HP[3,10], HA[9,10], HQ[15,10]; P/A/Q-OP=[3/9/15,7.5] unchanged; ordinary waiting PW/AW/QW=[3/9/15,11.2]. Access nodes ACCESS_WEST[-6.3,10], ACCESS_REAR[-6.3,18.30], HANDLE_ACCESS[-4,18.30].

Human edges: H0–HB, H0–HP, HP–HA, HA–HQ; HP–P-OP, HA–A-OP, HQ–Q-OP; HP–PW, HA–AW, HQ–QW; HB–ACCESS_WEST–ACCESS_REAR–HANDLE_ACCESS. Ordinary walkers cannot enter cart graph.

Cart body-center nodes: CART_HOME[-4,17], CP[3,17], CQ[15,17], C-P[3,14.5], C-Q[15,14.5]. Edges CART_HOME–CP, CP–CQ, CP–C-P, CQ–C-Q. C-P and C-Q are dedicated delivery/turn leaf bays, not aliases of human PW/QW. Capacity1 per bay, one persistent cart and two finite workers. No cart access to OP or human trunk.

## Body, operator and handle
Heading0 means forward core[0,-1], world+Z. Heading+π/2 means forward+X. Compute `atan2(dx,-dy)`. Local planar offsets `[u,v]` mean right/backward and rotate to `[u*cos(h)-v*sin(h),u*sin(h)+v*cos(h)]`.

Cart root is its own persistent body center. Footprint width .70, length1.25; maximum load .55×1.00. Rear handle contacts local world `[±.30,1.15,-.55]`. Attached worker root local world `[0,0,-.95]`, or planar `[0,+.95]`. Worker heading equals cart heading. This is pushing from behind, not the former model's front handle or arbitrary1.1m display offset.

Shoulders local world `[±.25,1.3,-.95]`. Palm centers are .065m behind handle toward worker; shoulder–palm distance ≈.370m, inside fixed .24+.22m reach. Worker shoe front is at z-.76, cart rear z-.625: .135m nominal longitudinal gap before articulated-pose sweep. Actual mesh/hand contact still must be tested.

Home heading0 gives operator[-4,17.95]. HANDLE_ACCESS[-4,18.30] is .35m behind it. ATTACH2s traverses this exact line; DETACH2s reverses it. Cart does not move. Approach deliberately uses the west/rear dogleg, never a direct walk through parked body. Preserve cart pose while any unaffiliated worker walks or turns.

## Separation and finite conflicts
Conservative full-yaw envelope: attached operator .95 + planar body radius .55 + explicit clearance .10 = **1.60m** around cart center; cart/load/handle bounds fit inside. Full-turn allowed at the five cart nodes only; fixed deterministic +π tie, cardinal headings. Segment corridor swept radius1.60 is deliberately conservative.

Material rack centers: frame[0,12.2], fork[1.6,12.2], wheel[3.2,12.2], drive[4.8,12.2], fastener[6.4,12.2], repair[15,12.2], each footprint1.345×.505. Closest rack edge Y12.45 to service-bay turn disk edge Y12.90 leaves .45m. Human trunk Y10 plus .55 radius to rack edgeY11.95 leaves1.40m; waiting nodeY11.2 plus .55 leaves .20m. Cart bay edgeY12.90 is well behind OP7.5 and gantry rear8.05. These are conservative scalar separation checks, not rendered-mesh acceptance.

All cart-route edges and turn bays for the **entire out-and-back trip** are atomically reserved before attachment, avoiding held-edge/next-bay cycles in this single-cart slice. Every bay conflicts with its incident cart edges. CART_HOME additionally conflicts with human ACCESS_REAR–HANDLE_ACCESS and attachment zone. Its occupancy belongs persistently to C1; task use is a subordinate token, not a second owner.

Important: HANDLE_ACCESS lies inside the full turn disk. After detach, keep home-turn/access exclusion until the worker actually reaches ACCESS_REAR, outside the disk, by recorded walking. Do not unlock merely because attachment ended. Retain occupancy/locks through blocked motion. No cross-network OP mutex is needed by this separated candidate; home access is the one deliberate human/cart shared zone.

Attached worker physical position is derived by core from persistent cart pose. Its ordinary personnel node remains the last HANDLE_ACCESS with explicit attachment mode; C-P/C-Q are not inserted into ordinary personnel routing. After detach, the worker is truly at HANDLE_ACCESS, then walks to HB through the declared edges. No teleport to HB.

## Explicit bounded simplification and acceptance gate
C-P delivery credits the finite material ledger for five P materials; C-Q for repair. This slice does **not** model individual box carrying between bay and every rack or claim hand reach across that distance. Rendered stock changes only at ledger commit. Expanding manual putaway is a separate scope.

Pending: independent mesh full-yaw/cart+load+handle+worker sweeps; approach/attach/detach/egress continuity; human/rack/OP/gantry clearances; whole-trip atomic conflict and delayed lock-release tests; finite normal/shortage return-to-park-and-HB traces; recorded pause/seek and timing checks. AGV yaw validation remains separate on its unchanged graph. No logic implementation begins on an unagreed geometric contradiction.

### Mesh envelope correction from independent gate
The initial .30m person envelope was invalid. Current procedural worker vertices were sampled over41 walking gait poses: maximum planar radius .5319234299594492m. The proposed grip pose and101 approach blend samples have maximum radius .5134835979215585m. Use .55m person envelope and1.60m cart+operator turn radius; move outer human access X to-6.3 and ordinary waiting Y to10.8. West access line is2.30m from home center, leaving .15m beyond cart disk1.60 plus walking envelope.55. These sampled bounds inform the contract; complete recorded-motion sweeps remain required.

Access endpoint revision: rear/access Y18.30 gives .125m conservative gap to parked rear body when the final incoming worker walks facing east. ATTACH/DETACH must interpolate worker heading over their recorded nonzero duration; a commit-time heading reset is not allowed. Handle contacts are true rear surface of a radius.02 bar centred localZ-.53, Y1.15, spanning X±.325.

Final bounded parameter review: waitingY11.2, racksY12.2, deliverybayY14.5 supersede the earlier10.8/11.8/14.0 proposal. Human trunk-to-wait1.20m exceeds two .55m envelopes; wait-to-rack .20m and rack-to-turn .45m. This avoids inserting waiting points into the workpiece-transfer region. AGV geometry remains unchanged. Parameter implementation may begin; full new-record mesh sweep is still a later acceptance gate.

Bounded rest correction: HB[-3,10] is a capacity1 transit hub, not a shared standing/rest location. Worker-specific leaves HB_W1[-3,8.8], HB_W2[-3,11.2] each connect only to HB. Every human node capacity1; W2 initially uses HB_W2. Per-worker return/rest planning must use restNodes, not generic HB. Both leaves are1.2m from hub/trunk, exceeding two .55m person envelopes. Rack actual outside-column footprint1.345×.505 reduces the earlier rack gaps by .0025m; nominal shelf-only1.3×.5 is not used as rigid envelope. Public CART_LAYOUT is recursively frozen; network reads return detached clones.
