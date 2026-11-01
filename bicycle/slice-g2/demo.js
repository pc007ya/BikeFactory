import {FactorySlice} from './engine.js';
const f=new FactorySlice();
const result=f.runUntil(1200000);console.log(JSON.stringify({result,kpi:f.kpi,events:f.events.length,hash:f.productionHash()},null,2));
