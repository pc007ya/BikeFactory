import {TYPES,ROUTES} from './plan.js';
import {validate} from './layout.js';
import {validateProcess} from './process-config.js';
import {validateLogistics,validateOrder} from './operations.js';
const integer=(n,min,max)=>Number.isInteger(n)&&n>=min&&n<=max;
export function validateOrderSettings(settings,types=TYPES){
  if(!settings||typeof settings!=='object')throw Error('工單設定缺失');
  validate(settings.devices,types);validateProcess(settings.steps,settings.devices,types);
  if(settings.processes){for(const product of Object.keys(ROUTES)){if(!settings.processes[product])throw Error('工單缺少製程');validateProcess(settings.processes[product],settings.devices,types);}}
  validateLogistics(settings.logistics);
  if(!integer(settings.arrival,1,3600)||!integer(settings.transportSeconds,1,3600))throw Error('工單投料／搬運參數錯誤');
  if(!['push','lean'].includes(settings.policy)||![settings.wipLimit,settings.bufferCapacity].every(n=>integer(n,1,500)))throw Error('工單流動參數錯誤');
  return settings;
}
// Validate a complete candidate before mutating the live scene or global types.
export function parseConfiguration(input){
  const o=structuredClone(input);
  if(!o||!['bicycle-line-v0.3','bicycle-line-v0.7'].includes(o.schema)||!Object.hasOwn(ROUTES,o.route)||!integer(o.arrival,1,3600)||!Array.isArray(o.bom)||o.bom.length>500)throw Error('配置格式錯誤');
  o.transportSeconds??=8;if(!integer(o.transportSeconds,1,3600))throw Error('搬運時間無效');
  o.customTypes??={};if(!o.customTypes||typeof o.customTypes!=='object'||Array.isArray(o.customTypes)||Object.keys(o.customTypes).length>30)throw Error('自訂類型格式錯誤');
  for(const[k,t]of Object.entries(o.customTypes)){if(!/^custom_[0-9]+$/.test(k)||!t||typeof t.name!=='string'||!t.name.trim()||t.name.length>60||t.w!==4||t.d!==3||t.model!=='bench'||!Number.isInteger(t.color)||t.color<0||t.color>0xffffff||t.cycle!==60)throw Error('自訂工站格式無效');}
  const types={...Object.fromEntries(Object.entries(TYPES).filter(([k])=>!k.startsWith('custom_'))),...o.customTypes};
  validate(o.devices,types);
  o.logistics=o.logistics?validateLogistics(o.logistics):{mode:'conveyor',speed:.7,fleet:2};
  o.flow??={policy:'push',wipLimit:12,bufferCapacity:2};
  o.processes??=Object.fromEntries(Object.entries(ROUTES).map(([k,v])=>[k,v.map(type=>({type,name:types[type].name}))]));
  for(const k of Object.keys(ROUTES)){if(!o.processes[k])throw Error('缺少製程');validateProcess(o.processes[k],o.devices,types);}
  validateOrderSettings({devices:o.devices,steps:o.processes[o.route],logistics:o.logistics,arrival:o.arrival,transportSeconds:o.transportSeconds,...o.flow},types);
  if(o.bom.some(b=>!b||typeof b.part!=='string'||!integer(b.quantity,0,10000)||!Object.hasOwn(types,b.station)))throw Error('BOM格式錯誤');
  o.workOrders??=[{id:'WO-IMPORTED',product:o.route,quantity:20}];
  if(!Array.isArray(o.workOrders)||o.workOrders.length<1||o.workOrders.length>100)throw Error('工單清單錯誤');
  o.workOrders=o.workOrders.map(order=>{validateOrder(order);if(order.settings)validateOrderSettings(order.settings,types);return {id:order.id,product:order.product,quantity:order.quantity,...(order.settings?{settings:order.settings}:{})};});
  if(new Set(o.workOrders.map(x=>x.id)).size!==o.workOrders.length)throw Error('重複工單');
  o.activeOrderId??=o.workOrders[0].id;const active=o.workOrders.find(x=>x.id===o.activeOrderId);
  if(!active)throw Error('找不到目前工單');if(active.product!==o.route)throw Error('目前工單車種與路線不符');
  return o;
}
