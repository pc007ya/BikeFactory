# Source-only publishing checkpoint

2026-11-01 UTC. Publishing staging is separate from the frozen private delivery; runtime source files are copied unchanged. New files are this README/checkpoint and a subtree `.gitignore`; the G3 README gains a source-only reconstruction notice.

Environment: cloud native fallback, Node v24.22.1 / npm 11.9.0. This rerun reuses already-installed locked dependencies via a local uncommitted symlink, rather than claiming a new network `npm ci` succeeded. Clean consumers should run the documented `npm ci` step. No Mac was used.

Checks: see final result below. All seven records regenerated from source match the frozen manifest byte-for-byte; rebuilt HTML SHA256 is `e596f904aa91ba098982bc90b3906d3b2ad43d683f23e18b026e151a643baa93`, identical to the delivered candidate. No generated bundle, gzip recording or dependency tree is committed.

The browser fallback smoke uses synthetic DOM and no WebGL. It does not demonstrate a rendered browser scene. Historical detailed geometry sampling is reported separately, not rerun wholesale by this publication step. Existing root CI does not cover this subtree.

## Final staging rerun results
- Original G2: 47/47 passed.
- G2.1: 85/85 passed.
- G3 generated-record / adapter / geometry / DOM / bundle suite: 99/99 passed.
- Independent G2.1 suites plus fixed-arm contact: 85/85 passed.
- Current G2.1 actual inline bundle VM smoke: passed; seven decoded payload hashes, zero requests, one RAF, terminal frame and scenario/event controls verified.

During staging, the legacy v1-only `g3-bundle-smoke.mjs` was initially selected and rejected v2 payloads; this packaging-selection error was corrected to the existing final `g21-bundle-smoke.mjs`, then rerun successfully. No production-source fix or weakening of the harness was made. Test counts may overlap and are not summed as unique checks.
