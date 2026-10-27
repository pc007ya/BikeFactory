import {test} from 'node:test';
import assert from 'node:assert/strict';
import {Simulation,sequence} from '../simulation.js';
import {validate,spacingWarnings} from '../layout.js';
const devices=sequence.map((type,i)=>({id:`M${i}`,type,cycle:10,x:i*8-20,z:0}));
test('one station per stage: known completion time and conservation',()=>{
 const s=new Simulation(devices);s.advance(155);assert.equal(s.completed,1);assert.equal(s.wip,0);s.advance(500);assert.equal(s.wip,Object.values(s.queues).reduce((a,b)=>a+b,0)+Object.values(s.states).filter(x=>x.busy).length);
});
test('seed and timestep batching give identical results',()=>{const a=new Simulation(devices,{failure:2,seed:12}),b=new Simulation(devices,{failure:2,seed:12});a.advance(7200);for(let i=0;i<72000;i++)b.advance(.1);assert.equal(b.time,a.time);assert.deepEqual(b.states,a.states);assert.equal(b.completed,a.completed);});
test('parallel bottleneck machines increase output',()=>{const base=devices.map(d=>({...d,cycle:d.type==='paint'?220:10}));const a=new Simulation(base),b=new Simulation([...base,{...base[2],id:'extra'}]);a.advance(7200);b.advance(7200);assert.ok(b.completed>a.completed);});
test('missing station prevents production',()=>{const s=new Simulation(devices.slice(1));s.advance(3600);assert.equal(s.completed,0);assert.equal(s.wip,0);});
const types=Object.fromEntries(sequence.map(t=>[t,{w:5,d:4}]));
test('layout validates full footprints, cycle, IDs and spacing',()=>{assert.equal(validate(devices,types),devices);for(const change of [{x:39},{cycle:0},{x:NaN},{id:'M1'}])assert.throws(()=>validate([{...devices[0],...change},devices[1]],types));assert.equal(spacingWarnings([{...devices[0]},{...devices[1],x:devices[0].x}],types).length,1);});
