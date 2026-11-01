/** Narrow proposed empty-AGV exit reversal; not general reverse route planning.
 * Geometry/resource locks and travel duration remain authoritative core inputs.
 */
import {headingFor,signedAngle} from './pose-itinerary.js';
export const DRIVE_PROFILE_VERSION='g2.1-exit-empty-reverse-v1';
export function agvSegmentDrive({from,to,start,end,currentHeading,cargo}){
 if(typeof from!=='string'||typeof to!=='string'||!Number.isFinite(currentHeading))throw new TypeError('Named segment and finite currentHeading required');
 const velocityHeading=headingFor(start,end);
 const reverse=from==='V-EXIT'&&to==='VJ'&&cargo==null;
 if(reverse){
  if(Math.abs(Math.abs(signedAngle(currentHeading,velocityHeading))-Math.PI)>1e-9)throw new Error('Empty EXIT reverse requires body heading opposed to travel; no implicit turn');
  return {heading:currentHeading,driveDirection:-1,reverse:true};
 }
 return {heading:velocityHeading,driveDirection:1,reverse:false};
}
