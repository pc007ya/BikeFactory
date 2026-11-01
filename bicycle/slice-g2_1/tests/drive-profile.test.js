import test from 'node:test';
import assert from 'node:assert/strict';
import {agvSegmentDrive,DRIVE_PROFILE_VERSION} from '../drive-profile.js';
import {projectContinuous} from '../state-projection.js';
const exit=(extra={})=>({from:'V-EXIT',to:'VJ',start:[18,4.5],end:[18,2],currentHeading:Math.PI,cargo:null,...extra});
test('empty exit reverse keeps actual unwrapped body heading instead of turning at conveyor',()=>{
 assert.equal(DRIVE_PROFILE_VERSION,'g2.1-exit-empty-reverse-v1');
 for(const heading of [Math.PI,-Math.PI,3*Math.PI,9*Math.PI])assert.deepEqual(agvSegmentDrive(exit({currentHeading:heading})),{heading,driveDirection:-1,reverse:true});
 assert.throws(()=>agvSegmentDrive(exit({currentHeading:0})),/opposed/);assert.throws(()=>agvSegmentDrive(exit({currentHeading:Math.PI+.01})),/opposed/);
});
test('loaded exit, all other ports and outward exit remain forward; no general reverse shortcut',()=>{
 for(const args of [exit({cargo:'B1'}),exit({from:'A-PORT'}),exit({from:'Q-PORT'}),exit({from:'V-SCRAP'}),exit({from:'VJ',to:'V-EXIT',start:[18,2],end:[18,4.5]})]){const d=agvSegmentDrive(args);assert.equal(d.driveDirection,1);assert.equal(d.reverse,false);assert.ok(Number.isFinite(d.heading));}
 for(const patch of [{currentHeading:NaN},{start:[0,Infinity]},{end:[18,4.5]},{from:null}])assert.throws(()=>agvSegmentDrive(exit(patch)));
});
const projection=(direction=-1)=>({time:0,paused:false,tasks:[{id:'t',type:'shipGood'}],actors:{},personnel:{workers:[]},vehicle:{task:'t',cargo:null,position:[18,4.5],heading:Math.PI,travelDistanceSigned:10},cart:{},routing:{blocked:{}},stations:{},metrics:{workers:{},vehicle:{emptyTravel:0,loadedTravel:0,loading:0,unloading:0,waiting:0,idle:0},stations:{}},actions:[{type:'TRAVEL',duration:5000,remaining:5000,payload:{taskId:'t',entity:'V1',network:'agv',edge:'V-EXIT|VJ',start:[18,4.5],end:[18,2],heading:Math.PI,startTravelDistanceSigned:10,distance:2.5,driveDirection:direction,reverse:direction===-1,driveProfileVersion:DRIVE_PROFILE_VERSION}}]});
test('signed wheel odometer is absolute action projection, supports forward/reverse, identical across frame rates',()=>{
 for(const direction of [-1,1]){const a=projection(direction),b=structuredClone(a);projectContinuous(a,1250);for(let i=0;i<125;i++)projectContinuous(b,10);assert.deepEqual(a,b);assert.equal(a.vehicle.travelDistanceSigned,10+direction*.625);assert.equal(a.vehicle.heading,Math.PI);projectContinuous(a,3750);assert.equal(a.vehicle.travelDistanceSigned,10+direction*2.5);assert.deepEqual(a.vehicle.position,[18,2]);}
});
test('pause and blocked edge freeze wheel travel; legacy payload remains readable; malformed partial payload rejected',()=>{
 const a=projection();a.paused=true;projectContinuous(a,1000);assert.equal(a.vehicle.travelDistanceSigned,10);a.paused=false;a.routing.blocked['agv:V-EXIT|VJ']=true;projectContinuous(a,1000);assert.equal(a.vehicle.travelDistanceSigned,10);assert.equal(a.actions[0].remaining,5000);
 const old=projection();for(const k of ['startTravelDistanceSigned','distance','driveDirection'])delete old.actions[0].payload[k];projectContinuous(old,100);assert.equal(old.vehicle.travelDistanceSigned,10);
 for(const patch of [{distance:NaN},{distance:-1},{driveDirection:0},{startTravelDistanceSigned:undefined}]){const s=projection();Object.assign(s.actions[0].payload,patch);assert.throws(()=>projectContinuous(s,100),/odometer/);}
});
