import {DRIVE_PROFILE_VERSION} from './drive-profile.js';
import {POSE_VERSION,ATTACHMENT_PROFILE_VERSION} from './pose-itinerary.js';
import {CART_LAYOUT,makeMobilityNetworks} from './layout.js';
export const BOM={frame:1,fork:1,wheel:2,drive:1,fastener:1};
export function defaultConfig(overrides={}){
 const defaults={assumptions:'Synthetic G2.1 proposal, not observed factory data',quantity:6,
 initialStock:{frame:6,fork:6,wheel:12,drive:6,fastener:6,repair:2},capacity:{frame:8,fork:8,wheel:16,drive:8,fastener:8,repair:4},external:{frame:2,fork:2,wheel:4,drive:2,fastener:2,repair:2},
 workers:[{id:'W1',skills:['PREP','ASSEMBLY','LINE_REPLENISH'],node:'H0',breakNode:'HB_W1',shifts:[[0,1800000],[1920000,3600000]]},{id:'W2',skills:['ASSEMBLY','QC','REWORK','LINE_REPLENISH'],node:'HB_W2',breakNode:'HB_W2',shifts:[[0,1740000],[1860000,3600000]]}],
 cycles:{prep:45000,assembly:90000,qc:30000,rework:40000,internal:30000,vehicleLoad:30000,vehicleUnload:30000,cartAttach:2000,cartDetach:2000,replenishLoad:10000,replenishUnload:10000},
 buffers:{P_OUT:2,A_IN:2,A_OUT:1,Q_IN:1,Q_GOOD:1,Q_SCRAP:1,FG:6,SCRAP:6},quality:{},autoReplenish:true};
 const config={...defaults,...structuredClone(overrides),cycles:{...defaults.cycles,...structuredClone(overrides.cycles||{})},mobilityProfiles:{pose:POSE_VERSION,attachment:ATTACHMENT_PROFILE_VERSION,drive:DRIVE_PROFILE_VERSION},mobilityLayout:structuredClone(CART_LAYOUT),networks:makeMobilityNetworks()};
 config.workers=config.workers.map(w=>({...w,breakNode:w.breakNode??CART_LAYOUT.restNodes?.[w.id]??'HB'}));return config;
}
