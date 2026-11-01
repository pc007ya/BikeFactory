# Original industrial bridge crane — visual demonstration
This is ORIGINAL procedural geometry authored in Blender for this project. It is NOT a NVIDIA, ABUS, Archade or other downloaded crane model. No restricted/account-gated geometry was downloaded, traced, converted or reconstructed. No manufacturer branding is used. Existing NVIDIA iw_hub appears only in preview renders as a scale reference and is NOT inside the crane GLB.

## General public structural references, not geometry or engineering specifications
- ABUS public brochure, component relationships only: https://www.abuscranes.com/download/us/84/abus_overhead_cranes.pdf
- Public installation illustration/text: https://abus.help/zlk/en/Documents/installingthetrolley.html
These informed generic wheel-on-rail, trolley, hoist-panel and anti-uplift relationships. No copyrighted images, CAD dimensions, proprietary load tables or branded product geometry were copied.

## Assumed demonstration geometry — NOT a rated lifting design
Runway length12m, rail span8m, rail top5.8m. All dimensions, motions and component sizes are illustrative assumptions. There is NO rated working load, structural calculation, material grade specification, rope strength certification, safety factor or mechanical safety validation. Do not use this model or its controller to construct, operate or certify lifting equipment.

Detailed features: two runways, six columns with anchor bolts/knee braces; two box girders and flange/stiffener details; end trucks, flanged wheels, drive motors/reducers/buffers; independent trolley with four rail wheels and anti-uplift tabs; grooved rotating drum with helical cable winding, finned motor/reducer; upper guides and lower sheave block; original forged-profile J hook with latch; dual changing-length rope falls; control cabinet/limit-switch visual parts; grated service walkway, guardrails/toe board; 72-link energy chain that follows trolley travel.

GLB: self-contained material-only PBR, metres/Y-up; original authoring Z-up maps [x,y,z] to [x,z,-y]. Seven materials, no external texture dependency. See current build-report for triangle count (<100k). Static detail grouped by parent/material; energy chain retains72 link transforms. For many cranes, a future renderer may instance identical link geometry, but this is not a completed draw-call optimization.

## Controller and limits
Use createCraneController(assetRoot, THREE) from controller.mjs. setPose accepts {bridge,trolley,hook} in metres. Bridge sourceY travel maps to glTF -Z; trolley moves +X; hook elevation maps +Y. Geometric clamps: bridge[-4.3,4.3], trolley[-3.1,3.1], hook[.6,5.2]. HoistRope_Left/Right scale in runtime Y and maintain top6.85m to hook+.65m; drum rotates around local-Z; chain is a fixed-length U-loop updated with trolley position. HookAttachment supplies payload anchor, but payload dynamics/contact are not implemented. API rejects nonfinite inputs.
These limits are visual clearances only, NOT real limit switches or certified safety interlocks. Emergency stop, anti-collision, braking, sway, rigid-body/cable dynamics, collision response, navigation and load engineering are explicitly absent.

## Reproduction and QA
Blender4.3.2, build.py generates the original geometry. add_rail_web.py records the applied continuity fix on the first saved artifact; current build.py already includes rail webs (do not apply twice on a fresh build). controller.mjs and check_r187.mjs test actual Three r187 GLTFLoader controls/rope endpoints/limits and finite geometry; not browser/GPU acceptance. render scripts create true Blender renders. Optional existing iw_hub path is a separate previously sourced reference asset, not bundled here. No image-generation tool used.

## v2 accepted-geometry candidate
The first review exposed a motor/guardrail intersection. v2 rotates the hoist motor/fins/fan/grille to source+X, raises it.08m and reroutes its conduit, retaining the gearbox connection. It supersedes v1 for integration. Run build.py then fix_motor_v2.py; the additional rail-web patch is historical only (build.py already includes it). Wheel geometry is decorative; wheel rotation/contact dynamics are not implemented. Source/view renders containing the separately sourced AMR are presentation only.
