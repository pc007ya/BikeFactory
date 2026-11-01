/** Read-only G3 controls. Rendering is not visual acceptance; records are synthetic. */
const EMPTY_EVENTS = Object.freeze([]);
const DEFAULT_SCENARIOS = [
  {id:'normal',label:'正常六車'}, {id:'ng',label:'品質 NG／返工'},
  {id:'material-shortage',label:'有限缺料／補料'}, {id:'blocked',label:'路段堵塞'}
];
const number = value => Number.isFinite(value) ? value : 0;
const clock = value => {const ms=Math.max(0,number(value));return `${String(Math.floor(ms/60000)).padStart(2,'0')}:${String(Math.floor(ms/1000)%60).padStart(2,'0')}.${String(Math.floor(ms)%1000).padStart(3,'0')}`;};
const display = value => value === null || value === undefined || value === '' ? '—' : typeof value === 'object' ? JSON.stringify(value) : String(value);
const percent = value => Number.isFinite(value) ? `${(value*100).toFixed(1)}%` : '—';
const labelKind = {station:'工站',worker:'員工',vehicle:'物流車',cart:'補料推車',job:'工件'};
export function mountDashboard(root,handlers={}) {
  if(!root?.ownerDocument?.createElement) throw new Error('Dashboard requires a DOM root');
  const doc=root.ownerDocument,listeners=[],cache={};let disposed=false,currentVm={},currentContext={},eventListIdentity=null;
  const el=(tag,text,attrs={})=>{const node=doc.createElement(tag);if(text!==undefined)node.textContent=text;for(const [key,value]of Object.entries(attrs))node.setAttribute(key,String(value));return node;};
  const listen=(node,type,fn)=>{node.addEventListener(type,fn);listeners.push([node,type,fn]);};
  const call=(name,...args)=>{if(!disposed&&typeof handlers[name]==='function')handlers[name](...args);};
  const panel=el('section',undefined,{class:'slice-dashboard','aria-label':'三站產線紀錄回放控制'});
  const header=el('header',undefined,{class:'slice-dash-top'}),brand=el('div',undefined,{class:'slice-dash-brand'});
  brand.append(el('strong','備料 → 裝配 → 檢查'),el('span','G3 呈現候選 · 實畫面未驗收 · 模擬資料',{class:'slice-candidate'}));
  const scenarioLabel=el('label','示範情境'),scenario=el('select',undefined,{'aria-label':'示範情境'});scenarioLabel.append(scenario);
  const overview=el('button','三站全景',{type:'button'}),focus=el('button','選取近看',{type:'button'});
  header.append(brand,scenarioLabel,overview,focus);panel.append(header);
  const metrics=el('section',undefined,{class:'slice-dash-metrics','aria-label':'同源生產指標'}),metricFields={};
  for(const [key,title]of Object.entries({released:'已投料',wip:'在製品 WIP',good:'品質合格',exited:'已入成品區',scrap:'品質報廢',processing:'正在加工'})){
    const card=el('div',undefined,{class:'slice-metric'});metricFields[key]=el('strong','0',{'data-metric':key});card.append(el('span',title),metricFields[key]);metrics.append(card);
  }
  const quality=el('p','',{class:'slice-quality'});metrics.append(quality);panel.append(metrics);
  const inspection=el('aside',undefined,{class:'slice-dash-inspector','aria-label':'選取與有限資源'});
  const details=el('details',undefined,{class:'slice-inspector-details'});details.open=false;details.append(el('summary','設備、人員與等待原因'));
  const selectLabel=el('label','選取對象'),selection=el('select',undefined,{'aria-label':'選取工站、人員、車輛或工件'});selectLabel.append(selection);details.append(selectLabel);
  const selectedTitle=el('h2','尚未選取'),selectedValues=el('dl',undefined,{class:'slice-values'});details.append(selectedTitle,selectedValues);
  const waitsTitle=el('h3','目前等待'),waits=el('ul',undefined,{class:'slice-waits','aria-label':'實際等待原因'});details.append(waitsTitle,waits);
  const materialsDetails=el('details');materialsDetails.append(el('summary','物料：現貨／預留／在途／持有'));
  const materialTable=el('table',undefined,{'aria-label':'有限物料帳'}),materialHead=el('thead'),materialHeadRow=el('tr');for(const t of ['物料','現貨','預留','在途','持有','容量'])materialHeadRow.append(el('th',t,{scope:'col'}));materialHead.append(materialHeadRow);const materialBody=el('tbody');materialTable.append(materialHead,materialBody);materialsDetails.append(materialTable);details.append(materialsDetails);
  const bufferDetails=el('details');bufferDetails.append(el('summary','暫存位：占用／預留／容量'));const bufferList=el('ul',undefined,{class:'slice-buffer-list','aria-label':'有限槽位占用'});bufferDetails.append(bufferList);details.append(bufferDetails);
  inspection.append(details);panel.append(inspection);
  const footer=el('footer',undefined,{class:'slice-dash-replay'}),transport=el('div',undefined,{class:'slice-playback-controls'});
  const play=el('button','播放',{type:'button','aria-label':'播放紀錄','aria-pressed':'false'}),speedLabel=el('label','速度'),speed=el('select',undefined,{'aria-label':'回放速度'});
  for(const n of [1,4,8,16,32,60])speed.append(el('option',`${n}×`,{value:n}));speedLabel.append(speed);
  const source=el('output','',{'aria-label':'紀錄時間與事件序號'}),order=el('span','',{class:'slice-order'});transport.append(play,speedLabel,source,order);footer.append(transport);
  const seekLabel=el('label','紀錄時間軸',{class:'slice-seek-label'}),seek=el('input',undefined,{type:'range',min:0,max:1,step:1,value:0,'aria-label':'定位紀錄時間（毫秒）'});seekLabel.append(seek);footer.append(seekLabel);
  const eventJumpLabel=el('label','精確事件'),eventJump=el('select',undefined,{'aria-label':'依事件序號精確定位'});eventJumpLabel.append(eventJump);footer.append(eventJumpLabel);
  const eventTrack=el('div',undefined,{class:'slice-event-track','aria-label':'事件定位標記'}),eventsList=el('ol',undefined,{class:'slice-event-list','aria-label':'目前位置附近的已提交事件'});footer.append(eventTrack,eventsList);
  const warning=el('p','',{class:'slice-dash-warning',role:'status'}),scope=el('small','只讀已記錄狀態；播放／定位不重新派工。站點、工時、尺寸與數量皆為提案假設。');footer.append(warning,scope);panel.append(footer);root.append(panel);
  listen(scenario,'change',()=>call('onScenario',scenario.value));listen(play,'click',()=>call('onTogglePlay'));
  listen(speed,'change',()=>call('onSpeed',Number(speed.value)));listen(seek,'input',()=>call('onSeek',Number(seek.value)));
  listen(selection,'change',()=>{if(selection.value==='')return;const index=Number(selection.value),item=selectionItems[index];if(item)call('onSelect',{kind:item.kind,id:item.id});});
  listen(eventJump,'change',()=>{const seq=Number(eventJump.value);if(eventJump.value!==''&&Number.isFinite(seq)){const event=(currentContext.events||[]).find(e=>e.seq===seq);if(event)eventAction(event);}});
  const eventAction=e=>typeof handlers.onEvent==='function'?call('onEvent',e.seq):call('onSeek',number(e.time));
  listen(overview,'click',()=>call('onCamera','overview'));listen(focus,'click',()=>call('onCamera','selected'));
  let selectionItems=[];
  const changed=(key,value,render)=>{const encoded=JSON.stringify(value);if(cache[key]!==encoded){cache[key]=encoded;render();}};
  const values=rows=>{selectedValues.replaceChildren();for(const [key,value]of rows)selectedValues.append(el('dt',key),el('dd',display(value)));};
  function update(vm={},context={}) {
    if(disposed)return;currentVm=vm;currentContext=context;
    const scenarios=context.scenarios?.length?context.scenarios:DEFAULT_SCENARIOS;
    changed('scenarios',scenarios,()=>{scenario.replaceChildren(...scenarios.map(s=>el('option',s.label,{value:s.id})));});
    scenario.value=context.scenarioId||scenarios[0]?.id||'';
    const duration=Math.max(0,number(context.durationMs)),cursor=Math.max(0,Math.min(duration,number(context.cursorMs??vm.time)));
    seek.max=String(Math.max(1,duration));seek.value=String(cursor);seek.disabled=duration<=0;seek.setAttribute('aria-valuetext',clock(cursor));
    play.textContent=context.playing?'暫停回放':'開始回放';play.setAttribute('aria-label',context.playing?'暫停紀錄':'播放紀錄');play.setAttribute('aria-pressed',String(!!context.playing));play.disabled=duration<=0;
    speed.value=String(context.speed??8);source.textContent=`來源 ${clock(vm.time)} · 游標 ${clock(cursor)} / ${clock(duration)} · 事件 #${display(context.selectedEventSeq??context.eventSeq)}`;
    order.textContent=`${display(context.orderId||vm.runId)}${context.orderQuantity!==undefined?' · 目標 '+display(context.orderQuantity)+' 台':''}`;
    for(const [key,node]of Object.entries(metricFields))node.textContent=display(vm.kpi?.[key]??0);
    scope.textContent=`唯讀紀錄，不重新派工。提案工時：站內 ${number(context.cycles?.internal)/1000}s／裝 ${number(context.cycles?.vehicleLoad)/1000}s／卸 ${number(context.cycles?.vehicleUnload)/1000}s。終端只交接＋有限台帳，未建倉儲搬運；拆箱/逐件上架未細分，台帳級；非實廠或動力驗證。`;
    quality.textContent=`首次合格率 ${percent(vm.kpi?.firstPassYield)} · 最終良率 ${percent(vm.kpi?.finalYield)} · 初始合格 ${number(vm.kpi?.initialGood)}／本次新增 ${number(vm.kpi?.newGood)} · 合格待交接 ${number(vm.kpi?.good)-number(vm.kpi?.exited)} · 報廢待移除 ${number(vm.kpi?.scrap)-number(vm.kpi?.scrapStored)} · WIP依品質終判口徑，合格不等於已出站`;
    const roster=[...(vm.stations||[]).map(x=>({kind:'station',id:x.id})),...(vm.workers||[]).map(x=>({kind:'worker',id:x.id})),...(vm.vehicle?[{kind:'vehicle',id:vm.vehicle.id}]:[]),...(vm.cart?[{kind:'cart',id:'CART'}]:[]),...(vm.jobs||[]).map(x=>({kind:'job',id:x.id}))];
    changed('roster',roster,()=>{selectionItems=roster;selection.replaceChildren(el('option','請選取對象',{value:''}),...roster.map((x,i)=>el('option',`${labelKind[x.kind]} ${x.id}`,{value:i})));});
    const selected=context.selected,index=selected?roster.findIndex(x=>x.kind===selected.kind&&x.id===selected.id):-1;selection.value=index>=0?String(index):'';focus.disabled=index<0;
    const collection={station:vm.stations,worker:vm.workers,vehicle:vm.vehicle?[vm.vehicle]:[],cart:vm.cart?[{...vm.cart,id:'CART'}]:[],job:vm.jobs};const entity=selected?(collection[selected.kind]||[]).find(x=>x.id===selected.id):null;
    changed('selectedIdentity',selected||null,()=>{if(entity)details.open=true;});
    selectedTitle.textContent=entity?`${labelKind[selected.kind]} ${entity.id}`:'尚未選取';
    if(!entity)values([['提示','在場景或上方清單選取對象']]);
    else if(selected.kind==='station'){const m=(vm.mechanisms||[]).find(m=>m.stationId===entity.id);values([['狀態',entity.status],['夾具工件',entity.fixture],['任務',entity.taskId],['工種',entity.taskType],['進度',percent(entity.progress)],['互鎖',entity.interlock],['提案輔助機構',m?.phase],['控制人員',m?.workerId],['計算所需峰速 m/s',Number.isFinite(m?.maxPeakSpeedMps)?m.maxPeakSpeedMps.toFixed(3):'—'],['已放下／待提交',m?.placedPendingCommit?'是':'否']]);}
    else if(selected.kind==='worker')values([['狀態',entity.status],['技能',(entity.skills||[]).join(' / ')],['任務',entity.taskId],['工種',entity.taskType],['進度',percent(entity.progress)],['位置',entity.position],['接觸模式',entity.operation?.mode],['接觸階段',percent(entity.operation?.contactWeight)]]);
    else if(selected.kind==='vehicle')values([['狀態',entity.status||entity.phase],['原始階段',entity.phase],['載荷',entity.cargo],['進度',percent(entity.progress)],['位置',entity.position]]);
    else if(selected.kind==='cart')values([['狀態',entity.status||entity.state],['原始階段',entity.phase||entity.state],['朝向（rad）',entity.heading],['車身中心',entity.position],['附著員工',entity.attachedWorker],['載料',entity.loaded?'是':'否'],['物料',entity.material],['數量',entity.quantity],['任務',entity.taskId],['補料範圍','拆箱/逐件上架未細分，台帳級']]);
    else values([['工序',entity.stage],['狀態',entity.status],['所在位置',entity.location],['呈現範圍',entity.inSlice===false?'已交接：切片外有限台帳':'三站切片內'],['搬移階段',entity.handlingPhase],['進度',percent(entity.progress)],['搬移中',entity.handling?'是':'否'],[entity.inSlice===false?'交接邊界示意（非倉內座標）':'座標',entity.position]]);
    changed('waits',vm.waiting||[],()=>{waits.replaceChildren(...((vm.waiting||[]).length?(vm.waiting||[]).map(w=>el('li',`${display(w.jobId)} / ${display(w.taskId)} · ${display(w.type)}：${display(w.reason)}`)):[el('li','目前無等待紀錄')]));});
    changed('materials',vm.materials||[],()=>{materialBody.replaceChildren(...(vm.materials||[]).map(m=>{const row=el('tr');row.append(el('th',display(m.id),{scope:'row'}));for(const k of ['stock','reserved','inTransit','held','capacity'])row.append(el('td',display(m[k])));return row;}));});
    changed('buffers',vm.buffers||[],()=>{bufferList.replaceChildren(...(vm.buffers||[]).map(b=>el('li',`${b.id}${b.boundaryLedger?'（切片外台帳）':''} · 占用 ${display(b.occupied)} / 預留 ${display(b.reserved)} / 容量 ${display(b.capacity)}`)));});
    const allEvents=context.events||EMPTY_EVENTS,effectiveSeq=context.selectedEventSeq??context.eventSeq;
    if(eventListIdentity!==allEvents){
      eventListIdentity=allEvents;
      eventJump.replaceChildren(el('option','依事件序號定位（含同時刻事件）',{value:''}),...allEvents.map(e=>el('option',`#${display(e.seq)} ${clock(e.time)} ${display(e.type)}`,{value:e.seq})));
      // Bounded overview of actual supplied events, rebuilt only when the recording list changes.
      const sample=allEvents.filter((_,i)=>i%Math.max(1,Math.ceil(allEvents.length/16))===0).slice(0,16);
      eventTrack.replaceChildren(...sample.map(e=>{const b=el('button',`#${display(e.seq)}`,{type:'button',title:`${clock(e.time)} ${display(e.type)}`,'aria-label':`定位事件 ${display(e.seq)}：${display(e.type)}，${clock(e.time)}`});b.addEventListener('click',()=>eventAction(e));return b;}));
    }
    eventJump.value=Number.isFinite(effectiveSeq)?String(effectiveSeq):'';
    const near=[];
    for(let i=allEvents.length-1;i>=0&&near.length<4;i--){const e=allEvents[i];if(number(e.time)<=cursor&&(!Number.isFinite(effectiveSeq)||!Number.isFinite(e.seq)||e.seq<=effectiveSeq))near.push(e);}
    near.reverse();
    changed('nearEvents',near,()=>eventsList.replaceChildren(...near.map(e=>{const row=el('li'),button=el('button',`#${display(e.seq)} ${clock(e.time)} · ${display(e.type)}`,{type:'button','aria-label':`精確回放事件 ${display(e.seq)}`});button.addEventListener('click',()=>eventAction(e));row.append(button);return row;})));
    warning.textContent=['G2.1推車/轉向候選：尚待完整幾何及實畫面驗收；非動力驗證',...(vm.warnings||[]),vm.paused?'來源狀態為暫停；紀錄播放不會解除原本暫停。':''].filter(Boolean).join(' · ');
  }
  return {update,dispose(){if(disposed)return;disposed=true;for(const [node,type,fn]of listeners)node.removeEventListener(type,fn);panel.remove();currentVm={};currentContext={};selectionItems=[];eventListIdentity=null;}};
}
