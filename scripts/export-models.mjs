import fs from 'node:fs/promises';
import {GLTFExporter} from 'three/examples/jsm/exporters/GLTFExporter.js';
import {createFactory,createEquipment} from '../models.js';
import {TYPES,ZONES,defaultDevices,defaultBOM,ROUTES} from '../plan.js';
import {Simulation} from '../simulation.js';
// GLTFExporter uses FileReader in browsers; the Node exporter only needs Blob reads.
class NodeFileReader{readAsArrayBuffer(blob){blob.arrayBuffer().then(x=>{this.result=x;this.onloadend?.();});}readAsDataURL(blob){blob.arrayBuffer().then(x=>{this.result='data:'+blob.type+';base64,'+Buffer.from(x).toString('base64');this.onloadend?.();});}}
 globalThis.FileReader=NodeFileReader;
const root=new URL('../deliverables/',import.meta.url);await fs.mkdir(new URL('models/',root),{recursive:true});
const devices=defaultDevices();
async function glb(g,name){const a=await new GLTFExporter().parseAsync(g,{binary:true});await fs.writeFile(new URL(name,root),Buffer.from(a));}
await glb(createFactory(devices),'bicycle_factory.glb');
for(const type of Object.keys(TYPES))await glb(createEquipment(type),'models/'+type+'.glb');
await fs.writeFile(new URL('bicycle_line.json',root),JSON.stringify({schema:'bicycle-line-v0.3',floor:{width:80,depth:50,units:'m',assumed:true},devices,bom:defaultBOM(),route:'bicycle',arrival:105},null,2));
await fs.writeFile(new URL('equipment_inventory.csv',root),'id,type,name,x_m,z_m,width_m,depth_m,cycle_seconds,dimension_source\n'+devices.map(d=>[d.id,d.type,TYPES[d.type].name,d.x,d.z,TYPES[d.type].w,TYPES[d.type].d,d.cycle,'planning-assumption'].join(',')).join('\n'));
let results=[];for(const [scenario,route] of Object.entries(ROUTES)){const s=new Simulation(devices,{route,arrival:105});s.advance(28800);results.push({scenario,hours:8,released:s.released,completed:s.completed,wip:s.wip,throughput:s.throughput});}
await fs.writeFile(new URL('scenario_results.json',root),JSON.stringify({assumptions:'8 hours, arrival 105s, no downtime, unlimited buffers, no material constraints',results},null,2));
const color=c=>'#'+c.toString(16).padStart(6,'0');const X=x=>80+(x+40)*12,Y=z=>100+(z+25)*12;
const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1180" height="820" viewBox="0 0 1180 820"><rect width="1180" height="820" fill="#0b1421"/><g font-family="sans-serif"><text x="80" y="45" fill="#e4eef5" font-size="26">自行車總組產線｜配置規劃 v0.3</text><text x="80" y="72" fill="#a3b8c9" font-size="15">80 × 50 m · 外購車架與零件 · 所有尺寸與節拍為規劃假設</text><rect x="80" y="100" width="960" height="600" fill="#17273b" stroke="#698498"/>${ZONES.map(z=>`<rect x="${X(z.x-z.w/2)}" y="${Y(z.z-z.d/2)}" width="${z.w*12}" height="${z.d*12}" fill="${color(z.color)}" opacity=".18"/><text x="${X(z.x-z.w/2)+8}" y="${Y(z.z-z.d/2)+20}" fill="${color(z.color)}" font-size="14">${z.name}</text>`).join('')}${[-5,7].map(z=>`<rect x="104" y="${Y(z-1)}" width="912" height="24" fill="#bea054" opacity=".3"/><text x="110" y="${Y(z)+5}" font-size="12" fill="#e0c67f">補料通道（指引）</text>`).join('')}${devices.map(d=>{const t=TYPES[d.type];return `<rect x="${X(d.x-t.w/2)}" y="${Y(d.z-t.d/2)}" width="${t.w*12}" height="${t.d*12}" rx="2" fill="${color(t.color)}"/><text x="${X(d.x)}" y="${Y(d.z)+4}" fill="#071420" font-size="11" text-anchor="middle">${d.id}</text>`;}).join('')}<text x="80" y="733" fill="#9eb4c6" font-size="14">A：總組　E：電動支線　P：預組　Q：品檢　B：包裝出貨　R：倉儲　C：輸送段</text><text x="80" y="760" fill="#9eb4c6" font-size="13">概念布局，非施工或安全認證圖。完整設備名稱／尺寸請見 equipment_inventory.csv。</text><path d="M80 785h120m-120-5v10m120-10v10" stroke="#b9cedd"/><text x="213" y="790" fill="#b9cedd" font-size="13">10 m</text></g></svg>`;
await fs.writeFile(new URL('factory_layout.svg',root),svg);console.log(results);
