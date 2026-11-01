Planning baseline: Three.js r187 / npm three@0.187.0, fixed on 2026-11-01 at user's explicit request.
Unmodified package/build/three.module.js and package/build/three.core.js are both included.
Source: official npm registry package three@0.187.0 (npm pack).
Package tarball SHA-1: face29ee2de9bcc31a1b573a76f224e35e0b2894
three.module.min.js is now a small local compatibility re-export, NOT an upstream minified build.
No addons used; no mixed-version imports. MIT license included in THREE-LICENSE.txt.
Owned procedural studio generates the PMREM environment at runtime. No external texture/HDR/model assets or CDN.
Rollback source: Git commit df8d103bac554a2cd64665e37cf934a9c6839247 (r162).

NVIDIA integration addons: GLTFLoader, SkeletonUtils, BufferGeometryUtils from the same three@0.187.0 tarball. Imports adapted to local vendor module paths; runtime files and SHA256 are listed in manifest.json.
