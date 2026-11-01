import {RecordPlayer,ReplayCursor} from './record-player.js';
import {adaptState} from './state-adapter.js';
/** One read-only cursor. UI actions never call the production scheduler. */
export class ViewerController{
 constructor(record){this.player=new RecordPlayer(record);this.cursor=new ReplayCursor(this.player.now);this.selected={kind:'station',id:'P'};this.eventSeq=null;this.events=record.events.filter(e=>e.type!=='ADVANCED').map(({seq,time,type})=>({seq,time,type}));}
 seek(ms){this.eventSeq=null;this.cursor.seek(ms);return this.frame();}
 event(seq){const state=this.player.sequence(seq);this.cursor.seek(state.time);this.eventSeq=seq;return this.frame();}
 toggle(){if(this.cursor.playing)this.cursor.playing=false;else{if(this.cursor.time===this.cursor.duration)this.cursor.seek(0);this.eventSeq=null;this.cursor.playing=true;}}
 tick(delta){this.cursor.tick(delta);return this.frame();}
 select(value){if(!['station','worker','vehicle','cart','job'].includes(value?.kind)||typeof value.id!=='string')return;if(value.kind==='cart'&&value.id!=='CART')return;this.selected={...value};}
 frame(){const sample=this.player.sample(this.cursor.time,{seq:this.eventSeq});return {vm:adaptState(sample.state),context:{playing:this.cursor.playing,speed:this.cursor.speed,cursorMs:this.cursor.time,durationMs:this.cursor.duration,eventSeq:sample.eventSeq,selectedEventSeq:this.eventSeq,events:this.events,selected:this.selected,cycles:this.player.config.cycles,orderQuantity:this.player.config.quantity,orderId:sample.state.runId}};}
}
