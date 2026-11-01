/** G2.1 proposed planar pose/time functions. Pure: no clocks, resources or mutation.
 * Coordinates use core [x,y]; heading 0 faces planar -Y (world +Z).
 * Local offsets are [right,backward] (at heading 0, +offsetY is core +Y). Mechanical feasibility requires separate audit.
 */
export const POSE_VERSION='g2.1-pose-itinerary-v1';
export const CART_HOME_NODE='CART_HOME';
export const DEFAULT_HANDLING_MS=2000;
const finite=(n,label)=>{if(!Number.isFinite(n))throw new TypeError(`${label} must be finite`);return n;};
const point=(p,label)=>{if(!Array.isArray(p)||p.length!==2||!p.every(Number.isFinite))throw new TypeError(`${label} must be planar [x,y]`);return [...p];};
const positive=(n,label)=>{finite(n,label);if(n<=0)throw new RangeError(`${label} must be positive`);return n;};
const robustCeil=n=>{const nearest=Math.round(n);return Math.abs(n-nearest)<=1e-8?nearest:Math.ceil(n);};
const millis=(n,label)=>{if(!Number.isSafeInteger(n)||n<0)throw new RangeError(`${label} must be nonnegative integer milliseconds`);return n;};
const progress=p=>{finite(p,'progress');if(p<0||p>1)throw new RangeError('progress outside [0,1]');return p;};
const ease=p=>p*p*(3-2*p);
const dist=(a,b)=>Math.hypot(b[0]-a[0],b[1]-a[1]);
export const ATTACHMENT_PROFILE_VERSION='g2.1-attachment-staged-70-30-v1';
/** Move/turn first, then grip; release grip first, then move. Cart stays fixed. */
export function attachmentPhase(type,p){
 progress(p);if(!['CART_ATTACH','CART_DETACH'].includes(type))throw new TypeError('Attachment action type required');
 const clamp=x=>Math.max(0,Math.min(1,x));
 return {bodyProgress:type==='CART_ATTACH'?ease(clamp(p/.7)):ease(clamp((p-.3)/.7)),contactWeight:type==='CART_ATTACH'?ease(clamp((p-.7)/.3)):1-ease(clamp(p/.3)),profileVersion:ATTACHMENT_PROFILE_VERSION};
}
export function headingFor(start,end){const a=point(start,'start'),b=point(end,'end');if(dist(a,b)===0)throw new RangeError('Zero-length edge has no heading');return Math.atan2(b[0]-a[0],-(b[1]-a[1]));}
/** Exact/round-off half-turn ties choose +PI, independent of atan2 signed zero. */
export function signedAngle(fromHeading,toHeading){finite(fromHeading,'fromHeading');finite(toHeading,'toHeading');const a=Math.atan2(Math.sin(toHeading-fromHeading),Math.cos(toHeading-fromHeading));return Math.abs(Math.abs(a)-Math.PI)<1e-12?Math.PI:a;}
export const shortestSignedAngle=signedAngle;
export function sampleTurn(fromHeading,angle,p){finite(fromHeading,'fromHeading');finite(angle,'angle');progress(p);return p===0?fromHeading:p===1?fromHeading+angle:fromHeading+angle*ease(p);}
/** Peak speed of cubic smoothstep is 1.5 times average; both angular and worker arc limits apply. */
export function turnDuration(angle,{kind='cart',operatorRadius=0,workerSpeed=.6,angularSpeed}={}){finite(angle,'angle');if(!['cart','agv'].includes(kind))throw new TypeError('turn kind must be cart/agv');finite(operatorRadius,'operatorRadius');if(operatorRadius<0)throw new RangeError('Negative operator radius');positive(workerSpeed,'workerSpeed');const omega=angularSpeed??(kind==='cart'?15:30)*Math.PI/180;positive(omega,'angularSpeed');const seconds=Math.max(1.5*Math.abs(angle)/omega,kind==='cart'?1.5*Math.abs(angle)*operatorRadius/workerSpeed:0);const ms=robustCeil(seconds*1000);return millis(ms,'turn duration');}
export function attachedWorkerPose(bodyPosition,heading,operatorOffset){const p=point(bodyPosition,'bodyPosition'),o=point(operatorOffset,'operatorOffset');finite(heading,'heading');const c=Math.cos(heading),s=Math.sin(heading);return {position:[p[0]+o[0]*c-o[1]*s,p[1]+o[0]*s+o[1]*c],heading};}
export function operatorPosition(bodyPosition,heading,operatorOffset){return attachedWorkerPose(bodyPosition,heading,operatorOffset).position;}
export function sampleAttachedTurn(bodyPosition,fromHeading,angle,p,operatorOffset){const heading=sampleTurn(fromHeading,angle,p);return {bodyPosition:point(bodyPosition,'bodyPosition'),heading,worker:attachedWorkerPose(bodyPosition,heading,operatorOffset)};}
/** Matches G2 per-edge ceil; TURN actions occur BEFORE the outgoing segment.
 * finalHeading forces dock/port orientation via a real final TURN. Walk legs have
 * no modeled turn duration and must never be used to move an attached cart.
 */
export function planLeg({points,initialHeading=0,speed,kind='cart',operatorOffset=[0,0],finalHeading,workerSpeed=.6,angularSpeed}){
 if(!Array.isArray(points)||points.length<1)throw new TypeError('Nonempty points required');const route=points.map((p,i)=>point(p,`points[${i}]`));positive(speed,'speed');finite(initialHeading,'initialHeading');if(!['cart','agv','walk'].includes(kind))throw new TypeError('Unknown leg kind');const offset=point(operatorOffset,'operatorOffset');let heading=initialHeading,elapsed=0;const segments=[];
 const add=s=>{segments.push({...s,startMs:elapsed,endMs:elapsed+s.durationMs});elapsed+=s.durationMs;millis(elapsed,'leg duration');};
 const rotate=(target,at)=>{const angle=signedAngle(heading,target);if(Math.abs(angle)>1e-12&&kind!=='walk'){const durationMs=turnDuration(angle,{kind,operatorRadius:Math.hypot(...offset),workerSpeed,angularSpeed});add({type:'TURN',kind,position:[...at],fromHeading:heading,angle,toHeading:heading+angle,durationMs,trajectoryVersion:POSE_VERSION});heading+=angle;}else if(kind==='walk')heading=target;};
 for(let i=1;i<route.length;i++){const a=route[i-1],b=route[i];if(dist(a,b)===0)continue;rotate(headingFor(a,b),a);add({type:'TRAVEL',kind,start:[...a],end:[...b],heading,durationMs:Math.ceil(dist(a,b)/speed*1000)});}
 if(finalHeading!==undefined){finite(finalHeading,'finalHeading');rotate(finalHeading,route.at(-1));}
 return {version:POSE_VERSION,segments,durationMs:elapsed,startPosition:[...route[0]],endPosition:[...route.at(-1)],endHeading:heading};
}
/** Ordered full replenishment budget: walk to handle, attach, load, outbound,
 * unload, empty return, dock-heading turn, detach, walk HB. No resource claims.
 * Each movement leg is planLeg input; cart heading is carried outbound→return.
 * Coordinates are parameterized; layout owns cartHome.position/heading/offset.
 */
export function planItinerary({approach,outbound,returnCart,walkHB,cartHome,loadMs,unloadMs,attachMs=DEFAULT_HANDLING_MS,detachMs=DEFAULT_HANDLING_MS,attachmentSpeed=.6}){
 const home=point(cartHome?.position,'cartHome.position'),offset=point(cartHome?.operatorOffset,'cartHome.operatorOffset'),heading=finite(cartHome?.heading,'cartHome.heading');
 if(cartHome.node!==CART_HOME_NODE)throw new Error('Independent CART_HOME node required');
 const approachLeg=planLeg({...approach,kind:'walk'}),out=planLeg({...outbound,initialHeading:heading,kind:'cart',operatorOffset:offset}),back=planLeg({...returnCart,initialHeading:out.endHeading,finalHeading:heading,kind:'cart',operatorOffset:offset}),exit=planLeg({...walkHB,kind:'walk'});
 const same=(a,b,label)=>{if(dist(a,b)>1e-9)throw new Error(`Discontinuous itinerary: ${label}`);};
 same(out.startPosition,home,'outbound/home');same(out.endPosition,back.startPosition,'delivery/return');same(back.endPosition,home,'return/home');const handle=operatorPosition(home,heading,offset),access=point(cartHome.accessPosition??handle,'cartHome.accessPosition');same(approachLeg.endPosition,access,'approach/access');same(exit.startPosition,access,'detach/walkHB');
 positive(attachmentSpeed,'attachmentSpeed');const minAttachmentMs=Math.ceil(1.5*dist(access,handle)/(.7*attachmentSpeed)*1000);if(millis(attachMs,'attachMs')<minAttachmentMs||millis(detachMs,'detachMs')<minAttachmentMs)throw new RangeError('Attachment motion exceeds peak walking speed or has zero movement time');
 const phases=[{type:'WORKER_APPROACH',...approachLeg},{type:'CART_ATTACH',startPosition:[...access],endPosition:[...handle],durationMs:millis(attachMs,'attachMs')},{type:'LOAD',durationMs:millis(loadMs,'loadMs')},{type:'CART_OUTBOUND',...out},{type:'UNLOAD',durationMs:millis(unloadMs,'unloadMs')},{type:'CART_RETURN',...back},{type:'CART_DETACH',startPosition:[...handle],endPosition:[...access],durationMs:millis(detachMs,'detachMs')},{type:'WALK_HB',...exit}];
 let elapsed=0;for(const phase of phases){phase.startMs=elapsed;elapsed+=phase.durationMs;phase.endMs=elapsed;millis(elapsed,'itinerary duration');}
 return {version:POSE_VERSION,phases,durationMs:elapsed,workBudgetMs:elapsed-approachLeg.durationMs-exit.durationMs,approachMs:approachLeg.durationMs,returnToHBMs:exit.durationMs,cartHome:{node:CART_HOME_NODE,position:home,heading,operatorOffset:offset,accessPosition:access}};
}
