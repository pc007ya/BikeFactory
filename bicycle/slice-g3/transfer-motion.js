/** Pure proposed Cartesian-assist motion. Not dynamics, safety or manufacturability validation.
 * No clock/resource/event mutation. P/A/Q only; terminal delivery is a boundary handoff.
 * All geometry and timing subdivisions are explicit presentation assumptions.
 */
export const TRANSFER_ASSUMPTIONS=Object.freeze({bailOffset:1.30,liftClearance:.12,minimumTransitTrayY:.87,homeTipY:2.15,serviceHandFraction:.10,translationBudgetMps:.8,angularBudgetRadPerSec:Math.PI/6,profile:'cubic-smoothstep-joint-translation-angular-weighted-segment',scope:'P/A/Q presentation only; not hardware or safety validation'});
const XS=Object.freeze({P:3,A:9,Q:15});
const TAU=2*Math.PI, EPS=1e-10;
const finite=n=>typeof n==='number'&&Number.isFinite(n);
const vector=(v,name,n=3)=>{if(!Array.isArray(v)||v.length!==n||!v.every(finite))throw new TypeError(`${name} requires ${n} finite numbers`);return [...v];};
const angle=n=>{if(!finite(n))throw new TypeError('Yaw must be finite');return n;};
const shortest=(a,b)=>Math.atan2(Math.sin(b-a),Math.cos(b-a));
const distance=(a,b)=>Math.hypot(...a.map((v,i)=>b[i]-v));
const mix=(a,b,t)=>a.map((v,i)=>v+(b[i]-v)*t);
const ease=t=>t*t*(3-2*t);
const tip=p=>[p[0],p[1]+TRANSFER_ASSUMPTIONS.bailOffset,p[2]];
/**
 * input: stationId, kind, from/to [x,y,z] tray roots, durationMs, progress [0,1],
 * optional IDs, home [x,hookTipY,z], homeYaw, fromYaw/toYaw,
 * xzWaypoints: [x,z] or {position:[x,z],yaw?}. No implicit route or resource changes.
 */
export function transferMotion(input){
 if(!input||!Object.hasOwn(XS,input.stationId))throw new TypeError('P/A/Q stationId required; terminal handoff has no gantry');
 if(!['SERVICE','VEHICLE_LOAD','VEHICLE_UNLOAD'].includes(input.kind))throw new TypeError('Unsupported transfer action kind');
 if(!finite(input.durationMs)||input.durationMs<=0)throw new RangeError('Positive finite recorded durationMs required');
 if(!finite(input.progress)||input.progress<0||input.progress>1)throw new RangeError('Finite progress in [0,1] required');
 const from=vector(input.from,'from'),to=vector(input.to,'to'),home=vector(input.home??[XS[input.stationId],2.15,-6],'home');
 const fromYaw=angle(input.fromYaw??0),toYaw=angle(input.toYaw??0),homeYaw=angle(input.homeYaw??0);
 const points=input.xzWaypoints??[];if(!Array.isArray(points))throw new TypeError('xzWaypoints must be an array');
 const waypoints=points.map((p,i)=>Array.isArray(p)?{position:vector(p,`waypoint ${i}`,2)}:{position:vector(p?.position,`waypoint ${i}`,2),...(p?.yaw!==undefined?{yaw:angle(p.yaw)}:{})});
 // Explicit transit-floor proposal clears the low supports; not a general collision fix.
 const liftY=Math.max(Math.max(from[1],to[1])+TRANSFER_ASSUMPTIONS.liftClearance,TRANSFER_ASSUMPTIONS.minimumTransitTrayY);
 if(!finite(liftY))throw new RangeError('Transfer coordinates overflow');
 const path=[{position:[from[0],from[2]],yaw:fromYaw},...waypoints,{position:[to[0],to[2]],yaw:toYaw}];
 const horizontalLengths=path.slice(1).map((p,i)=>distance(path[i].position,p.position));
 const horizontalTotal=horizontalLengths.reduce((a,b)=>a+b,0);
 if(horizontalTotal<=EPS&&Math.abs(shortest(fromYaw,toYaw))>EPS)throw new RangeError('Rotation needs a nonzero declared traverse path; no zero-time yaw teleport');
 let accrued=0;
 for(let i=0;i<path.length;i++){
  if(i>0)accrued+=horizontalLengths[i-1];
  if(path[i].yaw===undefined)path[i].yaw=fromYaw+shortest(fromYaw,toYaw)*(horizontalTotal>EPS?accrued/horizontalTotal:0);
  if(i>0)path[i].yaw=path[i-1].yaw+shortest(path[i-1].yaw,path[i].yaw);
 }
 for(let i=1;i<path.length;i++)if(horizontalLengths[i-1]<=EPS&&Math.abs(path[i].yaw-path[i-1].yaw)>EPS)throw new RangeError('Zero-length waypoint cannot rotate load');
 const finalYaw=path.at(-1).yaw,pickTip=tip(from),dropTip=tip(to),upFrom=[from[0],liftY,from[2]],upTo=[to[0],liftY,to[2]];
 if(distance(home,pickTip)<=EPS&&Math.abs(shortest(homeYaw,fromYaw))>EPS)throw new RangeError('Zero-length approach cannot rotate hook');
 if(distance(dropTip,home)<=EPS&&Math.abs(shortest(finalYaw,homeYaw))>EPS)throw new RangeError('Zero-length return cannot rotate hook');
 const raw=[];
 const add=(phase,loaded,startHook,endHook,startTray,endTray,startYaw,endYaw)=>{
  const d=distance(startHook,endHook);if(!finite(d))throw new RangeError('Transfer distance overflow');
  if(d<=EPS)return;
  raw.push({id:raw.length,phase,loaded,distanceMeters:d,startHook:[...startHook],endHook:[...endHook],startTray:[...startTray],endTray:[...endTray],startYaw,endYaw});
 };
 // Hook yaw is independent of stationary tray yaw before pickup and after release.
 const approachStartYaw=fromYaw-shortest(homeYaw,fromYaw);
 add('EMPTY_APPROACH',false,home,pickTip,from,from,approachStartYaw,fromYaw);
 add('LIFT',true,pickTip,tip(upFrom),from,upFrom,fromYaw,fromYaw);
 for(let i=1;i<path.length;i++){
  const a=[path[i-1].position[0],liftY,path[i-1].position[1]],b=[path[i].position[0],liftY,path[i].position[1]];
  add('TRAVERSE',true,tip(a),tip(b),a,b,path[i-1].yaw,path[i].yaw);
 }
 add('LOWER',true,tip(upTo),dropTip,upTo,to,finalYaw,finalYaw);
 const returnEndYaw=finalYaw+shortest(finalYaw,homeYaw);
 add('EMPTY_RETURN',false,dropTip,home,to,to,finalYaw,returnEndYaw);
 const totalDistanceMeters=raw.reduce((n,s)=>n+s.distanceMeters,0);
 if(!finite(totalDistanceMeters)||totalDistanceMeters<=0)throw new RangeError('Nonzero finite mechanism path required');
 const lead=input.kind==='SERVICE'?.10:0,tail=lead,motionFraction=1-lead-tail,mechanismDurationMs=input.durationMs*motionFraction;
 if(!finite(mechanismDurationMs)||mechanismDurationMs<=0)throw new RangeError('Mechanism time unavailable');
 // Design timing budgets, not certified machine ratings. Old durations remain readable.
 const weights=raw.map(s=>Math.max(1.5*s.distanceMeters/TRANSFER_ASSUMPTIONS.translationBudgetMps,1.5*Math.abs(s.endYaw-s.startYaw)/TRANSFER_ASSUMPTIONS.angularBudgetRadPerSec));
 const minimumMechanismSeconds=weights.reduce((n,w)=>n+w,0);
 if(!finite(minimumMechanismSeconds)||minimumMechanismSeconds<=0)throw new RangeError('Motion weight overflow');
 let elapsed=lead*input.durationMs;
 const segments=raw.map((s,i)=>{
  const durationMs=mechanismDurationMs*weights[i]/minimumMechanismSeconds,startMs=elapsed;elapsed+=durationMs;
  const endMs=i===raw.length-1?input.durationMs*(1-tail):elapsed;
  const peakSpeedMps=1.5*s.distanceMeters/(durationMs/1000);
  const peakAngularSpeedRadPerSec=1.5*Math.abs(s.endYaw-s.startYaw)/(durationMs/1000);
  if(![durationMs,peakSpeedMps,peakAngularSpeedRadPerSec,startMs,endMs].every(finite))throw new RangeError('Motion time or speed overflow');
  return {...s,timingWeightSeconds:weights[i],durationMs,startMs,endMs,startProgress:startMs/input.durationMs,endProgress:endMs/input.durationMs,peakSpeedMps,peakAngularSpeedRadPerSec};
 });
 const loadedSegments=segments.filter(s=>s.loaded),loadedStart=loadedSegments[0].startProgress,loadedEnd=loadedSegments.at(-1).endProgress;
 const p=input.progress,ms=p*input.durationMs;
 let trayPosition=[...from],trayYaw=fromYaw,hookPosition=[...home],hookYaw=homeYaw,loaded=false,segment=null,phase=p<lead?'HAND_APPROACH':'EMPTY_APPROACH',hookPhase='HOME';
 if(p>=1-tail){trayPosition=[...to];trayYaw=finalYaw;phase='PLACED_PENDING_COMMIT';}
 else if(p>=lead){
  segment=segments.find(s=>ms>=s.startMs&&ms<s.endMs)??segments.at(-1);
  const local=Math.max(0,Math.min(1,(ms-segment.startMs)/segment.durationMs)),u=ease(local);
  hookPosition=mix(segment.startHook,segment.endHook,u);hookYaw=segment.startYaw+(segment.endYaw-segment.startYaw)*u;
  loaded=segment.loaded;hookPhase=segment.phase;
  if(loaded){trayPosition=mix(segment.startTray,segment.endTray,u);trayYaw=hookYaw;phase=segment.phase;}
  else if(segment.phase==='EMPTY_RETURN'){trayPosition=[...to];trayYaw=finalYaw;phase='PLACED_PENDING_COMMIT';}
 }
 // Exact endpoint identity avoids accumulated arithmetic drift or frame-boundary jumps.
 if(p===0){trayPosition=[...from];trayYaw=fromYaw;hookPosition=[...home];hookYaw=homeYaw;loaded=false;hookPhase='HOME';phase=lead?'HAND_APPROACH':'EMPTY_APPROACH';}
 if(p===1){trayPosition=[...to];trayYaw=finalYaw;hookPosition=[...home];hookYaw=homeYaw;loaded=false;hookPhase='HOME';phase='PLACED_PENDING_COMMIT';}
 const maxPeakSpeedMps=Math.max(...segments.map(s=>s.peakSpeedMps));
 return {
  actionId:input.actionId??null,jobId:input.jobId??null,mechanismId:input.mechanismId??input.stationId,stationId:input.stationId,kind:input.kind,
  progress:p,durationMs:input.durationMs,phase,hookPhase,loaded,segmentId:segment?.id??null,
  trayPosition,trayYaw,hookPosition,hookYaw,gripperPosition:[...hookPosition],gripperYaw:hookYaw,
  home:[...home],liftY,bailOffset:TRANSFER_ASSUMPTIONS.bailOffset,loadedInterval:[loadedStart,loadedEnd],
  controlPhase:input.kind==='SERVICE'?(p<lead?'HAND_APPROACH':p>=1-tail?'HAND_RETRACT':'CONTINUOUS_CONTROL'):'AUTOMATIC_PORT',
  minimumActionDurationMs:minimumMechanismSeconds*1000/motionFraction,timingBudgetsSatisfied:mechanismDurationMs/1000+EPS>=minimumMechanismSeconds,
  placedPendingCommit:phase==='PLACED_PENDING_COMMIT',segments,totalDistanceMeters,mechanismDurationMs,maxPeakSpeedMps,
  requiredPeakSpeed:maxPeakSpeedMps,maxPeakAngularSpeedRadPerSec:Math.max(...segments.map(s=>s.peakAngularSpeedRadPerSec)),
  assumptions:TRANSFER_ASSUMPTIONS,warnings:['Display kinematics only: no force, acceleration/jerk limit, clamp dwell, collision or safety validation.','Placement before commit does not release recorded cargo, slot reservation or station-port ownership.']
 };
}
