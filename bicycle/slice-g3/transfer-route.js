/** Fixed presentation-only handling lanes, revision 3. Not G2 travel edges or scheduling resources.
 * Routes avoid the other occupied slot and keep side motion in front of the operator.
 * They still require actual geometry sweep; this helper never claims collision-free by itself.
 */
export const HANDLING_ROUTE_VERSION='fixed-workcell-lanes-v3';
const XS={P:3,A:9,Q:15};
export function transferRoute({stationId,kind,taskType,from,to,fromYaw=0,toYaw=0}){
 if(!Object.hasOwn(XS,stationId)||![from,to].every(p=>Array.isArray(p)&&p.length===3&&p.every(Number.isFinite)))throw Error('Invalid handling lane endpoints');
 const x=XS[stationId];let points=[];
 if(kind==='SERVICE'){
  if(['loadA','loadQ'].includes(taskType)){const frontZ=Math.max(to[2]+.4,from[2]);points=[{position:[from[0],frontZ],yaw:fromYaw},{position:[to[0],frontZ],yaw:toYaw}];}
  else if(['outP','outA','outGood','outScrap'].includes(taskType)){const frontZ=Math.max(from[2]+.4,to[2]);points=[{position:[from[0],frontZ],yaw:fromYaw},{position:[to[0],frontZ],yaw:toYaw}];}
  else throw Error('Non-transfer service has no handling lane');
 }else if(kind==='VEHICLE_LOAD'){
  if(stationId==='Q'&&taskType==='shipScrap')points=[{position:[19,from[2]],yaw:toYaw},{position:[19,to[2]],yaw:toYaw}];
  else{const lane=x+(Math.sign(from[0]-x)||1)*1.35;points=[{position:[lane,from[2]],yaw:fromYaw},{position:[lane,from[2]+.4],yaw:toYaw},{position:[lane,to[2]],yaw:toYaw}];}
 }else if(kind==='VEHICLE_UNLOAD'){
  const lane=x+(Math.sign(to[0]-x)||-1)*1.35;points=[{position:[lane,from[2]],yaw:fromYaw},{position:[lane,to[2]+.4],yaw:fromYaw},{position:[lane,to[2]],yaw:toYaw}];
 }else throw Error('Unsupported handling lane action');
 const kept=[];let previous=[from[0],from[2]];for(const p of points){if(Math.hypot(p.position[0]-previous[0],p.position[1]-previous[1])<1e-9)continue;kept.push(p);previous=p.position;}
 return {version:HANDLING_ROUTE_VERSION,xzWaypoints:kept,assumed:true};
}
