import {FrameSimulation,createFrameConfig,validateFrameConfig,MATCHING_KEYS} from './frame-factory/index.js';
export const SUPPLY_NAMES={purchased_frame:'外購成品車架',manufactured_qualified_frame:'鄰廠合格自製架'};
export function defaultFrameSpec(product='bicycle'){const d=createFrameConfig().defaultKit;return Object.fromEntries(MATCHING_KEYS.map(k=>[k,k==='frameSpecId'?(product==='ebike'?'DEMO-EBIKE-FRAME':'DEMO-BIKE-FRAME'):d[k]]));}
export function validateSupply(settings={},product='bicycle'){
 const mode=settings.supplyMode??'purchased_frame';if(!Object.hasOwn(SUPPLY_NAMES,mode))throw Error('車架供料模式無效');
 const spec=settings.frameSpec??defaultFrameSpec(product);
 if(!spec||typeof spec!=='object'||MATCHING_KEYS.some(k=>typeof spec[k]!=='string'||!spec[k].trim()||spec[k].length>120))throw Error('車架規格匹配欄位無效');
 if(['DEMO-BIKE-FRAME','DEMO-EBIKE-FRAME'].includes(spec.frameSpecId)&&spec.frameSpecId!==defaultFrameSpec(product).frameSpecId)throw Error('車架規格與工單車種不符');
 return {supplyMode:mode,frameSpec:Object.fromEntries(MATCHING_KEYS.map(k=>[k,spec[k]]))};
}
// Owns only the shared planning clock and material adapter; process logic is in frame-factory/.
export class CampusSimulation{
 constructor(config=createFrameConfig()){this.frame=new FrameSimulation(validateFrameConfig(config));this.running=false;this.runSequence=0;}
 setRunning(on){this.running=!!on;this.running?this.frame.start():this.frame.pause();}
 advance(seconds,assembly,{force=false}={}){if(!Number.isFinite(seconds)||seconds<0||seconds>604800)throw Error('雙廠時間無效');if(!this.running&&!force)return;this.frame.start();let remaining=seconds;while(remaining>1e-9){const dt=Math.min(1,remaining);this.frame.advance(dt);assembly?.advance(dt);remaining-=dt;}if(!this.running)this.frame.pause();}
 materialAdapter(settings,orderId,product='bicycle'){const {supplyMode,frameSpec}=validateSupply(settings,product);const runId=orderId+'-RUN-'+(++this.runSequence);return supplyMode==='purchased_frame'?null:({serial})=>this.frame.takeFrame(frameSpec,runId,serial);}
 configure(config){const valid=validateFrameConfig(config);this.setRunning(false);this.frame.configure(valid);}
 snapshot(){return {...this.frame.snapshot(),running:this.running};}
}
