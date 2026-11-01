import {FactorySlice} from './engine.js';
const f=new FactorySlice();
const result=f.runUntil(3600000);console.log(JSON.stringify({result,kpi:f.kpi,events:f.events.length,hash:f.productionHash()},null,2));
