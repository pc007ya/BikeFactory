# Three-station G2.1 / G3 candidate — visual QA NOT accepted

This is a separate additive candidate, not a replacement for the repository's original dual-factory application. All station dimensions, staffing, timings and devices are **demonstration assumptions, not real-factory measurements**. The browser viewer is **read-only replay of seven deterministic scenarios**, not live work-order editing or manual dispatch.

## Reproduce from this source-only checkout

Use Node.js 20+ (tested locally with the version recorded in `PUBLISH-CHECKS.md`) and npm. From repository root:

```sh
cd bicycle/slice-g2
npm test
cd ../slice-g2_1
npm test
cd ../slice-g3
npm ci
node scripts/records.mjs
npm run build
npm test
cd ..
node --test audit/g21-*.test.mjs audit/g3-contact-independent.test.mjs
node audit/g21-bundle-smoke.mjs
```

`records.mjs` creates all seven gzip records, `records/embedded.js` and manifest from the adjacent G2.1 engine; do not omit the original `slice-g2` directory because its frozen source hash is checked. `npm run build` then creates self-contained `slice-g3/dist/START.html`. Open that generated file in a WebGL-capable desktop browser. It begins paused; select a scenario and use playback, time seek or exact event seek. No external CDN or server is required by the generated artifact, but actual browser/device compatibility has **not** been verified here.

Generated data/bundles are deliberately excluded from Git. Full original source/evidence delivery is retained separately; the selected audit reports here describe that frozen delivery, and their SHA lists may name large evidence files not included in this source-only branch. Regenerated output must be verified instead of silently inheriting historical acceptance. Existing repository workflows target the original root application / `docs`, **not this G3 candidate**.

## Verification scope and limits

Logic, finite resources, replay and sampled mesh/contact checks passed in the private frozen delivery. See `audit/g21-final-independent-report.md` and `PUBLISH-CHECKS.md` for this publishing checkout's rerun. Node VM/DOM substitutes are not real browser tests. No real WebGL screenshot, pixels, layout, interaction, FPS or video acceptance is claimed. Collision sampling is not a continuous proof, dynamics, ergonomics or safety certification.

Shelf unloading remains a finite inventory interface, not a fully modeled box-by-box carry. Terminal storage is boundary handoff plus finite ledger, not ASRS. Footplant, wheel differential dynamics, generic loaded cancellation/rescue and multiple-vehicle arbitration are not modeled. The original `slice-g2` is preserved; `slice-g2_1` adds cart pose, true TURN, staged handle attachment, individual rest slots and empty EXIT reverse departure.

Only this `bicycle/` subtree is added. No main merge, deployment, Pages changes, workflow edits or new production acceptance is implied.
