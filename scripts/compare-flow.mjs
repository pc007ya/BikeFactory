import fs from 'node:fs/promises';
import {LeanSimulation} from '../lean-simulation.js';
import {defaultDevices,ROUTES} from '../plan.js';
const results=[];
for(const [routeName,route] of Object.entries(ROUTES))for(const policy of ['push','lean']){
 const s=new LeanSimulation(defaultDevices(),{route,arrival:105,...(policy==='lean'?{wipLimit:12,bufferCapacity:2}:{})});s.advance(28800);
 results.push({route:routeName,policy,released:s.released,completed:s.completed,endingWip:s.wip,averageWip:s.averageWip,averageLeadSeconds:s.averageLeadSeconds,blockedMachineSeconds:Object.values(s.states).reduce((n,p)=>n+p.blockedSeconds,0),unreleasedOpportunities:s.deferred});
 if(routeName==='bicycle'&&policy==='lean')await fs.writeFile(new URL('../deliverables/synthetic_trace_sample.json',import.meta.url),JSON.stringify({source:'synthetic-planning',note:'First three completed demo vehicles; no real torque/PLC/energy data',vehicles:s.finished.slice(0,3)},null,2));
}
await fs.writeFile(new URL('../deliverables/lean_comparison.json',import.meta.url),JSON.stringify({source:'synthetic-planning',hours:8,arrivalSeconds:105,lean:{wipLimit:12,bufferCapacity:2},assumptions:['no failures','no material constraints','no transport time','blocking after service','missed release opportunities skipped, not backlogged'],results},null,2));console.table(results);
