export const shortest=a=>Math.atan2(Math.sin(a),Math.cos(a));
export const rotate=(v,h)=>[v[0]*Math.cos(h)+v[2]*Math.sin(h),v[1],-v[0]*Math.sin(h)+v[2]*Math.cos(h)];
export const add=(a,b)=>a.map((v,i)=>v+b[i]);
export const forward=h=>[Math.sin(h),0,Math.cos(h)];
export function gait(distance,u){const count=Math.max(1,Math.ceil(distance/.3-1e-9)),phases=count+1;return {count,phases,rootU:Math.min(1,Math.max(0,u)*phases/count)};}
export function pathPose(walk,q){if(walk.arc){const a=walk.arc,theta=a.fromAngle+(a.toAngle-a.fromAngle)*q;return {position:[a.center[0]+a.radius*Math.cos(theta),a.center[1],a.center[2]+a.radius*Math.sin(theta)],heading:a.fromHeading+shortest(a.toHeading-a.fromHeading)*q};}return {position:walk.from.map((v,i)=>v+(walk.to[i]-v)*q),heading:walk.heading};}
export const walkLength=w=>w.arc?w.arc.radius*Math.abs(w.arc.toAngle-w.arc.fromAngle):Math.hypot(...w.from.map((v,i)=>w.to[i]-v));
export function pathActions(points,heading,speed=.7,turnRate=.7,prefix='walk'){const out=[];let h=heading;for(let i=1;i<points.length;i++){const a=points[i-1],b=points[i],d=Math.hypot(b[0]-a[0],b[2]-a[2]);if(d<1e-8)continue;const to=Math.atan2(b[0]-a[0],b[2]-a[2]),delta=shortest(to-h);if(Math.abs(delta)>1e-8){out.push({kind:'person-turn',phase:`${prefix}-turn`,position:[...a],fromHeading:h,toHeading:h+delta,duration:Math.abs(delta)/turnRate});h+=delta;}const walk={from:[...a],to:[...b],heading:h};out.push({kind:'person-walk',phase:`${prefix}-walk`,walk,duration:d/speed*(gait(d,0).phases/gait(d,0).count)});}return {actions:out,heading:h,position:[...points.at(-1)]};}
