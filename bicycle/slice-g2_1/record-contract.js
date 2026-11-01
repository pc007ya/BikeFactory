import {DRIVE_PROFILE_VERSION} from './drive-profile.js';
/** Fail closed on unsupported continuous-motion semantics; never reinterpret old v2 history. */
import {POSE_VERSION,ATTACHMENT_PROFILE_VERSION} from './pose-itinerary.js';
export function validateMobilityRecord(record){
 if(record?.schema!=='bicycle-slice-record-v2')throw Error('Unsupported mobility record schema');
 const profiles=record.config?.mobilityProfiles;
 if(profiles?.pose!==POSE_VERSION||profiles?.attachment!==ATTACHMENT_PROFILE_VERSION||profiles?.drive!==DRIVE_PROFILE_VERSION)throw Error('Unsupported recorded mobility profile');
 for(const e of record.events||[]){
  if(e.state?.configHash!==record.configHash||e.state?.configVersion!==record.configVersion||e.state?.mobilityVersion!==POSE_VERSION)throw Error('Recorded mobility provenance mismatch');
  for(const a of e.state.actions||[]){
   if(['CART_ATTACH','CART_DETACH'].includes(a.type)&&a.payload.profileVersion!==ATTACHMENT_PROFILE_VERSION)throw Error('Unsupported recorded attachment action profile');
   if(a.type==='TRAVEL'&&a.payload.entity==='V1'&&(a.payload.driveProfileVersion!==DRIVE_PROFILE_VERSION||![-1,1].includes(a.payload.driveDirection)||!Number.isFinite(a.payload.startTravelDistanceSigned)||!Number.isFinite(a.payload.distance)))throw Error('Unsupported recorded AGV drive profile');
   if(a.type==='TURN'&&a.payload.trajectoryVersion!==POSE_VERSION)throw Error('Unsupported recorded TURN action profile');
  }
 }
 return true;
}
