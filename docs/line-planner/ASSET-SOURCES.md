# NVIDIA asset sources and conversion notes

This noncommercial BikeFactory demonstration includes NVIDIA-provided source geometry and textures converted to glTF. These assets are **not represented as CC BY**, and are not original BikeFactory character or warehouse artwork. Source attribution does not itself establish a new license or sublicensing grant.

Source collection: NVIDIA Isaac Sim 5.1. [Official characters](https://docs.isaacsim.omniverse.nvidia.com/latest/assets/usd_assets_characters.html), [official environments](https://docs.isaacsim.omniverse.nvidia.com/latest/assets/usd_assets_environments.html), and [NVIDIA Isaac Sim Additional Software and Materials License](https://www.nvidia.com/en-us/agreements/enterprise-software/isaac-sim-additional-software-and-materials-license/). The latter contains restrictions on use, modification and distribution; no asset-specific exception has been independently established in this project. Do not infer unrestricted redistribution rights from this demonstration, its noncommercial context, or the separate NVIDIA SimReady CC BY dataset.

## Human

Original: `Isaac/People/Characters/original_male_adult_construction_03/male_adult_construction_03.usd`, including its original BaseColor, Normal and ORM textures. Native geometry, UVs, 101-bone hierarchy and bind transforms are retained. The converted GLB contains 8 SkinnedMesh and 21,880 triangles, approximately 1.78 m high. The strongest four skin influences are normalized for glTF; 725 vertices drop minor weights (maximum discarded weight 0.12964445). Conversion maps source Z-up to output Y-up metres exactly once. DirectX normal green is inverted for glTF/OpenGL; base color is sRGB, normal/ORM are non-color. The source grey-white appearance is retained.

Runtime `nvidia-worker-threejs.glb`: 31,513,792 bytes, SHA256 `1af1e4e18d184d30623659aebce2ee81ed771e1fd656e3cb0af9ef4ed758c4d5`.

The embedded evaluation arm-bend clip is never played by the planner. Runtime idle/processing/fault poses are project-authored illustrative gestures driven by actual worker allocation events. They do not demonstrate hand contact, ergonomics, walking, pushing, collision avoidance or validated physical work. Original bone segment lengths are preserved, and each visible worker has an independent skeleton.

## Warehouse

Original collection: `Isaac/Environments/Simple_Warehouse/Props`, models `SM_RackFrame_03`, `SM_RackShelf_01`, `SM_PaletteA_01`, `SM_PushcartA_02`. The runtime combination includes two rack frames, three shelves, one pallet and one platform cart: 15 mesh instances, 7 shared meshes, 6 materials, 6,592 instanced triangles and 18 embedded textures. Original MDL material expressions were baked into glTF PBR textures; roughness and metalness derive from the original ORM and shader parameters. No additional ambient-occlusion multiply was introduced.

Runtime `nvidia-warehouse-bay.glb`: 35,056,484 bytes, SHA256 `2cf266f385d472cd971677ae9c8d4c57c6e8e88f3c4ac925ce1d27688781d98e`.

Runtime coordinates are already Y-up metres. The actual lowest deck plane is Y=0.4500006675720066 m; a whole-shelf bounding-box maximum is not its support plane. Rack, pallet and cart have separate stable application IDs. Storage configuration is separate from simulation buffers and does not add production capacity. Movement guards are planning bounds, not a physics or logistics model.

Exact original source URLs, byte counts and SHA256 values are in [source-provenance.json](assets/nvidia/source-provenance.json). Original source packages and conversion scripts were backed up separately by the parent workflow. No private Drive identifier, signed download URL, user credential or Library identity is required by this application.

## Renderer and project geometry

Three.js core, GLTFLoader, SkeletonUtils and BufferGeometryUtils are pinned to the same `three@0.187.0` distribution; local import paths are adapted. Three.js is MIT licensed; retain `vendor/THREE-LICENSE.txt`. Machine models, selection rings, storage floor pads and procedural studio environment are project-authored geometry. They are not measured factory equipment.

## Logistics slice additions

The original NVIDIA Idealworks iw_hub comes from `Assets/Isaac/5.1/Isaac/Robots/Idealworks/iwhub/iw_hub.usd`. It is not asserted CC BY. Runtime37,701,148bytes, SHA256`7880e27a2d95d05c7527fd53a7d05fb7289bc3094d9cd51c6ca357bcd359bb1a`; source763,084triangles reduced per rigid link to97,187triangles,8links/7joints retained. Four UDIM tiles are preserved at2048resolution; sixteen embedded textures, DirectX-to-OpenGL normal green conversion. Original ground frame+0.081065843m retained. The embedded smoke animation is not played; application state controls wheels/casters/lift. Exact public source hashes and measured interfaces are under`assets/nvidia/industrial/`.

The A02 curved and A05 straight roller conveyors come from the separately licensed NVIDIA SimReady packages. Their supplied CC BY4.0 license files, attribution and source hashes are retained in the industrial asset directory. LOD conversion and material baking are changes, not original NVIDIA authoring. They remain staged and are not represented as operating transport. Their axes are runtime local−Z; they are rollers, not rubber belts. Full private handoff metadata and original backup identifiers are excluded from the runtime deployment.
