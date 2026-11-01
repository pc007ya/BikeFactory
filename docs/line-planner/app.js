import {createPlannerScene} from './scene.js?v=483f1be62d5c';
import {exampleConfig,validateConfig,simulate} from './simulation.js?v=483f1be62d5c';
const $=s=>document.querySelector(s), copy=x=>structuredClone(x), esc=x=>String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let config=exampleConfig(), history=[], revision=1, result=null, baseline=null, dirty=false, pendingDelete=null;
let sceneView=null, selected=null,assetSelected=null,replaySeconds=0,replayFrame=0,replayLast=0;
try { sceneView=createPlannerScene($('#scene'),{onSelect:entity=>selectEntity(entity,true),onAssetSelect:entity=>selectAsset(entity,false),onAssetsChange:()=>renderAssets()}); }
catch(error){$('#scene-state').textContent=`3D 無法啟動：${error.message}。表單仍可使用，但尚未通過 3D 驗收。`;}
const uid=()=>crypto.randomUUID();
const status=s=>$('#status').textContent=s;
function invalidate(){stopReplay();replaySeconds=0;dirty=true;result=null;$('#scene-performance').textContent='配置變更，需重新量測畫面。';if(sceneView)syncScene();$('#results').innerHTML='<div class="notice">配置已變更，舊結果已隱藏。請重新模擬。</div>';}
function remember(){stopReplay();replaySeconds=0;result=null;history.push(copy(config));if(history.length>50)history.shift();revision++;dirty=true; if(result)$('#results').innerHTML='<div class="notice">配置已變更，舊結果已隱藏。請重新模擬。</div>'; $('#revision').textContent=`v1 · 修訂 ${revision} · 待重算`;}
function input(label,key,value,type='number',extra=''){return `<label>${label}<input data-key="${key}" type="${type}" value="${esc(value)}" ${extra}></label>`}
function visualSelect(o){return `<label>3D 造型<select data-key="visualType">${[['auto','自動辨識'],['prep','備料工作台'],['assembly','裝配治具'],['qc','檢測台'],['generic','通用設備']].map(([v,label])=>`<option value="${v}" ${(o.visualType||'auto')===v?'selected':''}>${label}</option>`).join('')}</select></label>`;}
function render(){
 if(dirty)$('#results').innerHTML='<div class="notice">配置已變更，舊結果已隱藏。請重新模擬。</div>';
 $('#revision').textContent=`v1 · 修訂 ${revision}${dirty?' · 待重算':''}`;
 $('#conditions').innerHTML=[input('觀察終點（秒）','horizon',config.run.horizon),input('暖機結束（秒）','warmup',config.run.warmup),input('隨機種子','seed',config.run.seed),input('投料間隔（秒，0 = 供料充足）','arrivalSeconds',config.run.arrivalSeconds),input('最大投料量（件）','maxJobs',config.run.maxJobs),input('班段（秒）','shifts',config.run.shifts.map(x=>x.join('-')).join(', '),'text')].join('');
 $('#stations').innerHTML=config.stations.map((s,i)=>`<section class="station" data-station="${esc(s.id)}"><div class="station-head"><h3>${i+1} → <input aria-label="工站名稱" data-key="name" type="text" value="${esc(s.name)}"></h3><div class="tools"><button data-action="up" ${i===0?'disabled':''}>↑ 前移</button><button data-action="down" ${i===config.stations.length-1?'disabled':''}>↓ 後移</button>${pendingDelete?.station===s.id&&!pendingDelete?.operation?'<button class="danger" data-action="confirm-remove">確認移除工站</button><button data-action="cancel-remove">取消</button>':'<button class="danger" data-action="remove">移除工站</button>'}</div></div><small>ID ${esc(s.id)}</small><div class="row">${input('可用人員（人）','workers',s.workers)}${input('站前等待緩衝（件）','buffer',s.buffer)}</div>${s.operations.map((o,j)=>`<div class="operation" data-operation="${esc(o.id)}"><div class="station-head"><b>子工序 ${j+1}</b><div class="tools"><button data-action="op-up" ${j===0?'disabled':''}>↑</button><button data-action="op-down" ${j===s.operations.length-1?'disabled':''}>↓</button>${pendingDelete?.operation===o.id?'<button class="danger" data-action="confirm-remove">確認移除子工序</button><button data-action="cancel-remove">取消</button>':'<button class="danger" data-action="op-remove">移除子工序</button>'}</div></div><div class="row">${input('工序名稱','name',o.name,'text')}${input('專屬機台類型','machineType',o.machineType,'text')}${visualSelect(o)}${input('機台數（台）','machines',o.machines)}${input('每件加工（秒）','seconds',o.seconds)}${input('每台需人（人）','labor',o.labor)}${input('MTBF（秒）','mtbf',o.mtbf)}${input('MTTR（秒）','mttr',o.mttr)}</div></div>`).join('')}<button data-action="op-add">＋ 新增子工序</button></section>`).join('');
 syncScene(); applySelection();
}
function locate(el){const se=el.closest('[data-station]'),oe=el.closest('[data-operation]');const s=config.stations.find(s=>s.id===se?.dataset.station);return {s,o:s?.operations.find(o=>o.id===oe?.dataset.operation)}}
document.addEventListener('input',e=>{if(!e.target.dataset.key)return;const key=e.target.dataset.key;remember();if(e.target.closest('#conditions')){config.run[key]=key==='shifts'?e.target.value.split(',').map(x=>x.trim().split('-').map(Number)):Number(e.target.value)}else{const {s,o}=locate(e.target);(o||s)[key]=e.target.type==='number'?Number(e.target.value):e.target.value;}invalidate();status('配置已變更，請重新模擬。');});
$('#stations').addEventListener('click',e=>{let a=e.target.dataset.action;if(!a)return;const {s,o}=locate(e.target),i=config.stations.indexOf(s),j=s.operations.indexOf(o);if(a==='cancel-remove'){pendingDelete=null;render();return;}if(a==='remove'||a==='op-remove'){pendingDelete={station:s.id,operation:o?.id,action:a};render();status(a==='remove'?`將移除「${s.name}」及其子工序，串行路由接到下一站。請點紅色確認按鈕；可撤銷。`:'將移除此子工序並重接順序，請確認；可撤銷。');return;}if(a==='confirm-remove'){if(!pendingDelete||pendingDelete.station!==s.id||pendingDelete.operation!==o?.id)return;a=pendingDelete.action;pendingDelete=null;}remember();if(a==='up'||a==='down'){const k=i+(a==='up'?-1:1);[config.stations[i],config.stations[k]]=[config.stations[k],config.stations[i]];}if(a==='remove')config.stations.splice(i,1);if(a==='op-add')s.operations.push({id:uid(),name:'新子工序',machineType:'專用機台',machines:1,seconds:30,labor:1,mtbf:0,mttr:0});if(a==='op-remove')s.operations.splice(j,1);if(a==='op-up'||a==='op-down'){const k=j+(a==='op-up'?-1:1);[s.operations[j],s.operations[k]]=[s.operations[k],s.operations[j]];}render();status('順序已變更；路由依畫面由上到下重建，請重新模擬。');});
$('#add').onclick=()=>{remember();config.stations.push({id:uid(),name:'新工站',workers:1,buffer:2,operations:[{id:uid(),name:'加工',machineType:'專用機台',machines:1,seconds:30,labor:1,mtbf:0,mttr:0}]});render();};
$('#undo').onclick=()=>{if(!history.length)return;config=history.pop();revision++;invalidate();render();status('已撤銷。請重新模擬。');};
$('#reset').onclick=()=>{remember();config=exampleConfig();render();};
$('#export').onclick=()=>{const blob=new Blob([JSON.stringify(config,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`bikefactory-config-v1-r${revision}.json`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
function applyImportedText(text){try{const c=JSON.parse(text),errors=validateConfig(c);if(errors.length)throw new Error(errors.join('\n'));remember();config=c;render();status('匯入成功，請重新模擬。');return true;}catch(e){status(`匯入未套用：${e.message}`);return false;}}
$('#import').onchange=async e=>{try{if(e.target.files?.[0])applyImportedText(await e.target.files[0].text());}catch(error){status(`匯入未套用：${error.message}`);}finally{e.target.value=''}};
$('#apply-json').onclick=()=>applyImportedText($('#import-json').value);

$('#baseline').onclick=()=>{if(!result||dirty){status('請先重新模擬目前配置。');return;}baseline={result:copy(result),revision};status(`比較基準已設為修訂 ${revision}。`);showResults();};
$('#run').onclick=()=>{const errors=validateConfig(config);if(errors.length){status(errors.join('\n'));return;}try{status('模擬中…');setTimeout(()=>{try{result=simulate(config,{sensitivity:true});dirty=false;render();showResults();status('模擬完成。修改配置後需重新模擬，結果不會自動更新。');}catch(e){status(e.stack||e.message)}},20)}catch(e){status(e.message)}};
window.planner={get config(){return copy(config)},get result(){return dirty?null:result},get revision(){return revision},get scene(){return sceneView?.snapshot()}};
const n=(v,d=1)=>v==null?'—':Number(v).toFixed(d),pct=v=>`${n(v*100)}%`;
function showResults(){
 const r=result, b=baseline?.result, delta=(value,old,unit)=>old==null||value==null?'':`<span>基準差 ${value-old>=0?'+':''}${n(value-old)} ${unit}</span>`;
 const candidate=r.bottleneck, station=r.stations.find(s=>s.id===candidate?.stationId), positive=candidate?.gainPerHour>0;
 $('#results').innerHTML=`<div class="section-head"><h2>模擬結果 · 修訂 ${revision}</h2><small>${baseline?`比較修訂 ${baseline.revision}`:'尚未設定比較基準'}</small></div><div class="cards"><div class="metric"><span>觀察期產出率</span><strong>${n(r.throughputPerHour)}</strong><span>件 / 小時</span><br>${delta(r.throughputPerHour,b?.throughputPerHour,'件/小時')}</div><div class="metric"><span>完工件平均前置時間</span><strong>${n(r.meanLeadSeconds)}</strong><span>秒 · 含暖機前投料件</span><br>${delta(r.meanLeadSeconds,b?.meanLeadSeconds,'秒')}</div><div class="metric"><span>時間加權平均 WIP</span><strong>${n(r.wip,2)}</strong><span>件 · 全線</span><br>${delta(r.wip,b?.wip,'件')}</div><div class="metric"><span>名目線平衡率</span><strong>${pct(r.lineBalance)}</strong><span>等工站權重 / 無故障名目負載</span></div></div>
 <div class="result-box"><h2>${positive?`改善候選：${esc(station?.name)}`:'單加機台未見產出改善'}</h2><p>${positive?`對工序 ${esc(candidate.operationId)} 加 1 台，模擬產出率增加 ${n(candidate.gainPerHour)} 件/小時。請結合下列負載、堵塞與缺料時間判讀。`:'在目前觀察期、班表與人力限制下，敏感度未找到有效增機點；可能受人力、投料、有限樣本或多重限制影響。不能據此宣稱沒有瓶頸。'}</p><p class="hint">敏感度是逐一增機重跑，其他設定相同；隨機模型比較是單一種子示例，需多種子與實廠校準。名目負載包含平行機台及本站人力下限，不等同實測節拍。</p>
 <table><thead><tr><th>工站</th><th>名目負載 s/件</th><th>平均 WIP 件</th><th>期末 WIP 件</th><th>可用率 uptime</th><th>利用率</th></tr></thead><tbody>${r.stations.map(s=>`<tr><td>${esc(s.name)}</td><td>${n(s.nominalLoadSeconds)}</td><td>${n(s.wip,2)}</td><td>${s.endWip}</td><td>${pct(s.availability)}</td><td>${pct(s.utilization)}<div class="bar"><i style="width:${s.utilization*100}%"></i></div></td></tr>`).join('')}</tbody></table>
 <h3>觀察期機台狀態（各站加總，機台·秒）</h3><table><thead><tr><th>工站</th><th>加工</th><th>故障</th><th>缺料 / 閒置</th><th>等待人力</th><th>堵塞</th><th>班外</th></tr></thead><tbody>${r.stations.map(s=>`<tr><td>${esc(s.name)}</td>${['busy','down','starved','laborWait','blocked','offshift'].map(k=>`<td>${n(s[k]||0)}</td>`).join('')}</tr>`).join('')}</tbody></table><p class="hint">可用率 = (排班時間 − 排班內故障) / 排班時間；利用率 = 加工 / 排班時間。狀態按班外、故障、加工／堵塞、閒置分類。加工完成後釋放人員，機台在下游有空間前仍保留工件；下一工序重新取得所需人力。機台·秒可大於觀察秒數。</p>
 <details><summary>逐台機台 uptime／利用率與狀態</summary><table><thead><tr><th>工站 / 機台 ID</th><th>類型</th><th>可用率</th><th>利用率</th><th>加工 s</th><th>故障 s</th><th>堵塞 s</th></tr></thead><tbody>${r.stations.flatMap(s=>s.machines.map(m=>`<tr data-result-machine="${esc(m.id)}"><td>${esc(s.name)} / ${esc(m.id)}</td><td>${esc(m.machineType)}</td><td>${pct(m.availability)}</td><td>${pct(m.utilization)}</td><td>${n(m.busy)}</td><td>${n(m.down)}</td><td>${n(m.blocked)}</td></tr>`)).join('')}</tbody></table></details>
 <h3>逐工序加一台敏感度</h3><table><thead><tr><th>工站 / 工序</th><th>增機後 件/小時</th><th>改善 件/小時</th></tr></thead><tbody>${(r.sensitivity||[]).map(v=>`<tr><td>${esc(config.stations.find(s=>s.id===v.stationId)?.name)} / ${esc(config.stations.flatMap(s=>s.operations).find(o=>o.id===v.operationId)?.name)}</td><td>${n(v.throughputPerHour)}</td><td>${n(v.gainPerHour)}</td></tr>`).join('')}</tbody></table>${r.sensitivitySkipped?.length?`<p class="hint">已跳過不合法／超出預算的增機候選：</p><ul>${r.sensitivitySkipped.map(v=>`<li>${esc(v.stationId)} / ${esc(v.operationId)}：${esc(v.reason)}</li>`).join('')}</ul>`:''}</div>
 <div class="result-box"><h2>觀察與守恆</h2><p>觀察 ${n(r.warmupSeconds)}–${n(r.horizonSeconds)} 秒，共 ${n(r.observationSeconds)} 秒；其中排班 ${n(r.scheduledSeconds)} 秒。種子 ${r.seed}。暖機前狀態保留，指標積分只涵蓋觀察期；完工計數使用 (暖機結束, 觀察終點]，避免相鄰窗重複計件。</p><p>累計投料 ${r.injected} 件 = 累計完工 ${r.completed} 件 + 期末在製 ${r.endWip} 件。物料守恆：<b>${r.conservation?'通過':'失敗'}</b>。觀察期完工 ${r.observedCompleted} 件。期末保留 WIP，不清空排程；未完工件不納入平均前置時間，短觀察期可能偏低。</p><p class="hint">WIP 包含站前等待、加工、故障暫停與堵塞中的工件。不限外部待投料量，最大投料量與投料間隔只控制實際進線件；不把外部積壓計入 WIP。無運輸時間、良率與返工。</p></div>`;
 applySelection();
}
function syncScene(){
 stopReplay();replaySeconds=0;
 if(!sceneView)return;
 const errors=validateConfig(config);
 if(errors.length){sceneView.sync({version:1,stations:[],run:config.run},null);$('#scene-state').textContent='配置無效，3D 已清空；請修正後建立機台。';}
 else{sceneView.sync(config,dirty?null:result);$('#scene-state').textContent=`修訂 ${revision} · ${config.stations.length} 工站 · ${config.stations.flatMap(s=>s.operations).reduce((n,o)=>n+o.machines,0)} 台實例 · ${dirty||!result?'結果失效／待重算':'模擬結果已對應同 ID 機台'}`;}
 const snapshot=sceneView.snapshot();
 if(snapshot.machines.some(m=>m.detailLevel==='compact'))$('#scene-state').textContent+=' · 大配置使用精簡造型，每台 ID 保留';
 if(!snapshot.renderer?.performanceSample)$('#scene-performance').textContent='按需渲染；可量測目前配置的連續重繪樣本。';
 $('#scene-navigation').innerHTML=config.stations.map(s=>`<button data-view-station="${esc(s.id)}">近看 ${esc(s.name)}站</button>`).join('');
 $('#scene-debug').textContent=JSON.stringify(snapshot,null,2);
 $('#scene-machine-picker').innerHTML='<option value="">選擇機台</option>'+(snapshot.machines||[]).map(m=>`<option value="${esc(m.machineId)}">${esc(m.stationName)} / ${esc(m.name)} / ${esc(m.machineId)}</option>`).join('');
 $('#scene-inventory').innerHTML=(snapshot.machines||[]).slice(0,12).map(m=>`<button data-select-machine="${esc(m.machineId)}" data-select-station="${esc(m.stationId)}" data-select-operation="${esc(m.operationId)}">定位 ${esc(m.machineId)}</button>`).join('');
 if(selected&&!selected.workerId&&!snapshot.machines.some(m=>m.machineId===selected.machineId)){selected=null;$('#scene-selection').textContent='選取機台以檢視工序與工時。';}
 if(selected){sceneView.select(selected,false);if(!selected.workerId)updateInspector();}
 renderAssets();
}
function updateInspector(){
 if(!selected)return;
 const s=config.stations.find(s=>s.id===selected.stationId),o=s?.operations.find(o=>o.id===selected.operationId),m=(!dirty?result:null)?.stations.find(x=>x.id===s?.id)?.machines.find(x=>x.id===selected.machineId);
 $('#scene-selection').textContent=`${s?.name} / ${o?.name} · ${o?.machineType} · 每件 ${o?.seconds} 秒 · ID ${selected.machineId} · ${m?`uptime ${pct(m.availability)} / 利用率 ${pct(m.utilization)}`:'KPI 待重新模擬'}`;
}
function applySelection(){
 for(const el of document.querySelectorAll?.('[data-station]')||[])el.classList.toggle('selected',el.dataset.station===selected?.stationId);
 for(const el of document.querySelectorAll?.('[data-operation]')||[])el.classList.toggle('selected',el.dataset.operation===selected?.operationId);
 for(const el of document.querySelectorAll?.('[data-result-machine]')||[])el.classList.toggle('selected',el.dataset.resultMachine===selected?.machineId);
}
function ensureSceneVisible(){const r=$('#scene').getBoundingClientRect?.();if(r&&(r.top<0||r.bottom>window.innerHeight))$('#scene').scrollIntoView({behavior:'smooth',block:'center'});}
function selectEntity(entity,fromScene=false,showScene=false){
 selected=entity;sceneView?.select(entity,!fromScene);updateInspector();applySelection();
 if(showScene)ensureSceneVisible();
 if(fromScene){const el=[...(document.querySelectorAll?.('[data-operation]')||[])].find(el=>el.dataset.operation===entity.operationId);el?.scrollIntoView({behavior:'smooth',block:'center'});}
 if(sceneView)$('#scene-debug').textContent=JSON.stringify(sceneView.snapshot(),null,2);
}
$('#scene-inventory').addEventListener('click',e=>{if(e.target.dataset.selectMachine)selectEntity({stationId:e.target.dataset.selectStation,operationId:e.target.dataset.selectOperation,machineId:e.target.dataset.selectMachine},false,true);});
$('#stations').addEventListener('focusin',e=>{const {s,o}=locate(e.target);if(o)selectEntity({stationId:s.id,operationId:o.id,machineId:`${o.id}:1`});});
$('#scene-machine-picker').onchange=e=>{const m=sceneView?.snapshot().machines.find(m=>m.machineId===e.target.value);if(m)selectEntity({stationId:m.stationId,operationId:m.operationId,machineId:m.machineId},false,true);};
$('#scene-navigation').addEventListener('click',e=>{const id=e.target.dataset.viewStation;if(id){sceneView?.select({stationId:id},true);ensureSceneVisible();}});
$('#scene-probe').onclick=async()=>{if(!sceneView)return;$('#scene-probe').disabled=true;$('#scene-performance').textContent='量測中：連續重繪 2 秒，不推進模擬。';try{const p=await sceneView.samplePerformance(2000);if(p.cancelled){$('#scene-performance').textContent='配置變更，量測已取消，請重新量測。';return;}$('#scene-performance').textContent=`${p.machineCount} 台 · 實測 ${p.fps.toFixed(1)} FPS · ${p.frames} 幀 / ${(p.durationMs/1000).toFixed(2)} 秒 · CPU draw p95 ${p.p95CpuDrawMs.toFixed(2)} ms（不是 GPU 時間）`;$('#scene-debug').textContent=JSON.stringify(sceneView.snapshot(),null,2);}finally{$('#scene-probe').disabled=false;}};
$('#scene-home').onclick=()=>{selected=null;sceneView?.select(null,true);ensureSceneVisible();applySelection();$('#scene-selection').textContent='選取機台以檢視工序與工時。';if(sceneView)$('#scene-debug').textContent=JSON.stringify(sceneView.snapshot(),null,2);};

function stopReplay(){if(replayFrame)cancelAnimationFrame(replayFrame);replayFrame=0;replayLast=0;$('#replay-play').textContent='播放事件姿態';}
function replayLimit(){if(!result||dirty)return 0;return result.eventsTruncated?(result.events.at(-1)?.time||0):result.horizonSeconds;}
function setReplay(seconds){replaySeconds=Math.max(0,Math.min(replayLimit(),seconds));sceneView?.setReplayTime?.(replaySeconds);renderAssets();}
function selectAsset(entity,focus=true){const worker=entity.workerId?sceneView?.snapshot().nvidia?.workers.find(w=>w.workerId===entity.workerId):null;assetSelected=worker?{...entity,stationId:worker.stationId}:entity;selected=worker?{stationId:worker.stationId,workerId:worker.workerId}:null;sceneView?.select(assetSelected,focus);if(focus)ensureSceneVisible();renderAssets();applySelection();}
function renderAssets(){
 const a=sceneView?.snapshot().nvidia;if(!a)return;$('#asset-debug').textContent=JSON.stringify(a,null,2);
 $('#asset-status').textContent=`${a.status|| (a.ready?'模型已載入':'載入中')} ${a.error||''} ${(a.warnings||[]).join('；')} · ${a.workers?.length||0} 名顯示人員 · ${a.props?.filter(p=>!p.hidden).length||0} 倉儲物件`;
 $('#replay-seek').max=String(replayLimit());$('#replay-seek').value=String(replaySeconds);$('#replay-time').max=String(replayLimit());$('#replay-time').value=String(replaySeconds);$('#replay-clock').textContent=`${replaySeconds.toFixed(1)} 秒`;
 $('#replay-status').textContent=dirty||!result?'配置已變更／待模擬：人員沒有有效工作事件。':`真實事件重播 · ${result.events.length} 筆${result.eventsTruncated?'；記錄截斷，重播只到最後已知事件':''} · 固定站位姿態，未建模移動／接觸。`;
 $('#worker-picker').innerHTML=(a.workers||[]).map(w=>`<button data-worker-id="${esc(w.workerId)}">${esc(w.workerId)} · ${esc(w.state)}</button>`).join('');
 $('#warehouse-controls').innerHTML=(a.props||[]).map(p=>`<div class="tools"><button data-prop-id="${esc(p.id)}">定位 ${esc(p.name||p.id)}</button><small>${esc(p.id)} · ${(p.position||[]).map(x=>Number(x).toFixed(2)).join(', ')} m</small>${p.hidden?'':[['left','X−'],['right','X＋'],['back','Z−'],['front','Z＋']].map(([d,t])=>`<button data-prop-move="${d}" data-prop="${esc(p.id)}">${t} 0.5m</button>`).join('')}<button data-prop-reset="${esc(p.id)}">重設位置</button><button data-prop-toggle="${esc(p.id)}" ${p.supportHidden?'disabled':''}>${p.hidden?'恢復':'移除'}</button></div>`).join('');
 const item=assetSelected?.workerId?(a.workers||[]).find(w=>w.workerId===assetSelected.workerId):(a.props||[]).find(p=>p.id===assetSelected?.propId);
 $('#asset-inspector').textContent=item?JSON.stringify(item,null,1):'點人物或倉儲物件可檢視穩定 ID。';
}
$('#replay-seek').oninput=e=>{stopReplay();setReplay(Number(e.target.value));};
$('#replay-time').oninput=e=>{stopReplay();setReplay(Number(e.target.value));};
$('#replay-start').onclick=()=>{stopReplay();setReplay(0);};
$('#replay-play').onclick=()=>{if(replayFrame){stopReplay();return;}if(!result||dirty){status('請先重新模擬，才能重播實際事件。');return;}if(replaySeconds>=replayLimit())replaySeconds=0;$('#replay-play').textContent='暫停重播';const step=now=>{if(!result||dirty){stopReplay();return;}if(replayLast)setReplay(replaySeconds+(now-replayLast)/1000*Number($('#replay-speed').value||5));replayLast=now;if(replaySeconds>=replayLimit()){stopReplay();return;}replayFrame=requestAnimationFrame(step);};replayFrame=requestAnimationFrame(step);};
$('#worker-picker').addEventListener('click',e=>{if(e.target.dataset.workerId)selectAsset({workerId:e.target.dataset.workerId});});
$('#warehouse-controls').addEventListener('click',e=>{const d=e.target.dataset;if(d.propId){selectAsset({propId:d.propId});return;}if(d.propReset){remember();config.warehouse||={offsets:{},hidden:[]};config.warehouse.offsets||={};config.warehouse.offsets[d.propReset]=[0,0];invalidate();render();return;}if(d.propToggle){remember();config.warehouse||={offsets:{},hidden:[]};config.warehouse.hidden||=[];const hidden=config.warehouse.hidden;config.warehouse.hidden=hidden.includes(d.propToggle)?hidden.filter(id=>id!==d.propToggle):[...hidden,d.propToggle];invalidate();render();return;}if(d.propMove){try{const directions={left:[-.5,0],right:[.5,0],back:[0,-.5],front:[0,.5]},next=sceneView.moveProp(d.prop,...directions[d.propMove]);remember();config.warehouse=next;invalidate();render();status('倉儲位置已更新；可撤銷，JSON 匯出保留位置。');}catch(error){status(`移動未套用：${error.message}`);}}});

window.addEventListener?.('pagehide',()=>{stopReplay();sceneView?.dispose();});
render();$('#run').click();
