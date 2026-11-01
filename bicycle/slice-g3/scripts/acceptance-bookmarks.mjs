import fs from'node:fs';import path from'node:path';import{gunzipSync}from'node:zlib';import{fileURLToPath}from'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..'),load=id=>JSON.parse(gunzipSync(fs.readFileSync(root+'/records/'+id+'.json.gz'))),cache={};
const cases=[
 ['normal','P 備料真接觸',s=>s.actions.find(a=>a.type==='SERVICE'&&s.tasks.find(t=>t.id===a.payload.taskId)?.type==='prep'),.5,'掌與車架真表面對位、根位置不滑移。'],
 ['normal','P 出站輔助移轉',s=>s.actions.find(a=>a.type==='SERVICE'&&s.tasks.find(t=>t.id===a.payload.taskId)?.type==='outP'),.5,'托架、吊具、控制手與同一進度一致，沒有空中滑貨或提前提交。'],
 ['normal','帶貨 AGV 真 TURN',s=>s.vehicle.cargo&&s.actions.find(a=>a.type==='TURN'&&a.payload.entity==='V1'),.5,'帶貨旋轉有時間，貨物只一份，無碰機台／既存工件。'],
 ['normal','成品位空車倒退出支路',s=>s.actions.find(a=>a.type==='TRAVEL'&&a.payload.reverse),.5,'車身朝向不變，沿原邊倒退；到 VJ 才轉，不碰交接台。'],
 ['shortage','接手：先轉身靠近',s=>s.actions.find(a=>a.type==='CART_ATTACH'),.35,'推車固定，身體連續，尚未宣稱握把。'],
 ['shortage','接手：最後伸手',s=>s.actions.find(a=>a.type==='CART_ATTACH'),.85,'根已停到可達位置，固定骨長伸手，不拉伸／報錯。'],
 ['shortage','推車卸料後 180°空車迴轉',s=>!s.cart.loaded&&s.actions.find(a=>a.type==='TURN'&&a.payload.entity==='CART'&&Math.abs(a.payload.signedAngle)>3),.5,'員工在把手後繞行，車身／料箱不跳位。'],
 ['shortage','推車行走短步',s=>s.actions.find(a=>a.type==='TRAVEL'&&a.payload.entity==='CART'),.5,'可見鞋與小腿不穿平台；步態只是示意，不宣稱接地力學。'],
 ['shortage','脫離：先收手再離開',s=>s.actions.find(a=>a.type==='CART_DETACH'),.65,'車停在獨立泊位不跟人走；之後人真走回自己的休息位。'],
 ['quality','Q 小範圍返工',s=>s.actions.find(a=>a.type==='SERVICE'&&s.tasks.find(t=>t.id===a.payload.taskId)?.type==='rework'),.5,'一次返工保留原序號與材料帳，不新增另一台車。'],
 ['quality','報廢邊界交接',s=>s.actions.find(a=>a.type==='VEHICLE_UNLOAD'&&s.tasks.find(t=>t.id===a.payload.taskId)?.dest==='SCRAP'),.5,'交接未 commit 前仍是原車載 owner／目的預留；不假造倉庫。']
];let out='# 真畫面驗收定位表（尚未執行）\n\n只供正式授權可用瀏覽器開同一 START.html 後人工檢查。以下時間來自實際同版紀錄，不是已驗畫面。選情境後依毫秒或事件定位，再暫停／前後 seek；記錄真缺陷、裝置與瀏覽器。\n\n| 情境 | 檢查 | 事件序號／動作 | 定位毫秒 | 畫面應檢查 |\n|---|---|---|---:|---|\n';
for(const[id,title,find,fraction,expect]of cases){const r=cache[id]??=load(id);let found;for(const e of r.events){const a=find(e.state);if(a){found={e,a};break;}}if(!found)throw Error('Missing acceptance action '+title);const {e,a}=found,start=e.time-(a.duration-a.remaining),time=Math.round(start+a.duration*fraction);out+=`| ${id} | ${title} | #${e.seq} / ${a.id} | ${time} | ${expect} |\n`;}
const interrupted=load('interruption'),pause=interrupted.events.find(e=>e.state.paused);out+=`| interruption | 同刻暫停 | #${pause.seq} | ${pause.time} | 必須用事件序號，核 pending 完成未提前提交；回放播放不等於解除來源暫停。 |\n`;
out+='\n另看缺員／滿載情境的停止原因；合格不等於已交接，WIP採品質終判口徑。全景、人物／推車／工件選取、視窗縮放、不同回放倍率與重複切換都要在真瀏覽器驗證。任何一項未看過就標未驗，不用 Node 或幾何抽樣代替。\n';fs.writeFileSync(root+'/evidence/VISUAL-ACCEPTANCE-BOOKMARKS.md',out);console.log('Wrote 12 real-record inspection bookmarks; pixels unverified.');
