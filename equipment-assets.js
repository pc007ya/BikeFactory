import * as THREE from 'three';
const templates=new Map();
export const EQUIPMENT_ASSET_IDS={conveyor:'conveyor_belt_a05',table:'table_metal_stainless_a03',packing:'table_deluxe_packing_a01',rack:'rack_h3m_s01',toolcart:'equipment_mechanic_tool_cart_g01',pallet:'pallet_wood_recycled_a05',vise:'equipment_bench_vise_a01'};
export function registerEquipmentAsset(id,template){template.updateMatrixWorld(true);const bounds=new THREE.Box3().setFromObject(template),size=bounds.getSize(new THREE.Vector3());template.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;o.userData={...o.userData,sharedAsset:true,nvidiaAsset:id};}});templates.set(id,{template,size});}
export function assetSize(role){const item=templates.get(EQUIPMENT_ASSET_IDS[role]||role);return item?.size.clone();}
export function assetClone(role){const id=EQUIPMENT_ASSET_IDS[role]||role,item=templates.get(id);if(!item)return null;const group=item.template.clone(true);group.name=id;group.userData={...group.userData,source:'NVIDIA SimReady',assetId:id,sharedAsset:true,visualOnly:true};return group;}
export function registeredAssets(){return [...templates.keys()];}
