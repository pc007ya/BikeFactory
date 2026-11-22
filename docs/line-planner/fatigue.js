import {createRig} from './fatigue-rig.js';
import {simulated,parseRecording,sampleIndex,toCsv} from './fatigue-data.js';

const $=id=>document.getElementById(id);
const config={amplitude:300,frequency:1,cycles:20};
let animationId=0;
let recording=null,time=0,running=false,previous=0,state='待機',rig=null;
let firstSample=null,cycleStart=new Map(),importId=0;
const startTime=()=>recording?recording.rows[0].t:0;
const endTime=()=>recording?recording.rows.at(-1).t:config.cycles/config.frequency;
const sample=()=>recording?recording.rows[sampleIndex(recording.rows,time)]:simulated(time,config);
function applyInputs(){
  const controls=[$('amp'),$('freq'),$('limit')];
  for(const control of controls)if(!control.reportValidity())return false;
  [config.amplitude,config.frequency,config.cycles]=controls.map(c=>c.valueAsNumber);
  return true;
}
function drawChart(sampleNow) {
  const canvas=$('chart'),w=canvas.clientWidth,h=canvas.clientHeight,dpr=Math.min(devicePixelRatio,2);
  if(canvas.width!==Math.round(w*dpr)||canvas.height!==Math.round(h*dpr)){
    canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);
  }
  const ctx=canvas.getContext('2d');ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,w,h);
  let first=[],current=[];
  if(recording){
    const rows=recording.rows,idx=sampleIndex(rows,time);
    const extract=(begin,stop)=>{
      const points=[],stride=Math.max(1,Math.ceil((stop-begin)/200));
      for(let i=begin;i<stop;i+=stride)points.push(rows[i]);
      points.push(rows[stop]);return points;
    };
    first=extract(0,Math.min(idx,firstSample));
    let last=idx;
    if(last===rows.length-1 && cycleStart.get(rows[last].cycle)===last && last>0)last--;
    current=extract(cycleStart.get(rows[last].cycle),last);
  } else {
    const cycle=Math.min(sampleNow.cycle,config.cycles-1);
    const curve=(begin,until)=>Array.from({length:65},(_,i)=>simulated((begin+(until-begin)*i/64)/config.frequency,config));
    first=curve(0,Math.min(1,time*config.frequency));current=curve(cycle,time*config.frequency);
  }
  const all=[...first,...current];
  const maxF=Math.max(1,...all.map(s=>Math.abs(s.force)),recording?1:config.amplitude)*1.1;
  const maxD=Math.max(.01,...all.map(s=>Math.abs(s.displacement)),recording?.01:config.amplitude/200)*1.1;
  const left=50,right=w-17,top=18,bottom=h-30;
  const x=d=>left+(d/maxD+1)*(right-left)/2,y=f=>bottom-(f/maxF+1)*(bottom-top)/2;
  ctx.font='11px system-ui';ctx.fillStyle='#4c6668';ctx.strokeStyle='#cfdbd8';ctx.lineWidth=1;
  for(const k of [-1,0,1]){
    ctx.beginPath();ctx.moveTo(left,y(k*maxF));ctx.lineTo(right,y(k*maxF));ctx.stroke();
    ctx.textAlign='right';ctx.fillText((k*maxF).toFixed(0),left-6,y(k*maxF)+4);
    ctx.beginPath();ctx.moveTo(x(k*maxD),top);ctx.lineTo(x(k*maxD),bottom);ctx.stroke();
    ctx.textAlign='center';ctx.fillText((k*maxD).toFixed(2),x(k*maxD),bottom+13);
  }
  ctx.textAlign='left';ctx.fillText('力量 N',1,10);ctx.textAlign='right';ctx.fillText('位移 mm',right,h-1);
  function trace(points,color,width,dash){
    ctx.beginPath();ctx.strokeStyle=color;ctx.lineWidth=width;ctx.setLineDash(dash);
    points.forEach((s,i)=>i?ctx.lineTo(x(s.displacement),y(s.force)):ctx.moveTo(x(s.displacement),y(s.force)));
    ctx.stroke();ctx.setLineDash([]);
  }
  trace(first,'#9863a5',4,[5,4]);trace(current,'#187670',1.6,[]);
  ctx.beginPath();ctx.arc(x(sampleNow.displacement),y(sampleNow.force),4,0,Math.PI*2);ctx.fillStyle='#b16e13';ctx.fill();
}
function paint(){
  const s=sample(),gain=recording?.gain??10;
  $('target').textContent=s.target.toFixed(1);$('force').textContent=s.force.toFixed(1);
  $('disp').textContent=s.displacement.toFixed(2);$('count').textContent=s.cycle;
  $('clock').textContent=s.t.toFixed(2)+' s';$('state').textContent=state;
  $('settings').disabled=!!recording || time>0 || running;
  $('source').textContent=recording?'CSV 回放':'模擬訊號';
  $('play').textContent=running?'暫停':time>=endTime()?'重新播放':time>startTime()?'繼續':recording?'開始回放':'開始試驗';
  $('scaleText').textContent='位移顯示 ×'+Number(gain.toPrecision(2));
  $('demo').hidden=!recording;$('seekLabel').hidden=!recording;
  if(recording)$('seek').value=time;
  rig?.update(s,gain);drawChart(s);
}
function stop(label){cancelAnimationFrame(animationId);running=false;state=label;paint();}
function tick(now){
  if(!running)return;
  const elapsed=(now-previous)/1000;previous=now;time=Math.min(endTime(),time+elapsed);
  if(time>=endTime())stop(recording?'回放結束':'示範循環完成');
  else {paint();animationId=requestAnimationFrame(tick);}
}
function run(){
  if(running){stop('暫停');return;}
  if(!recording&&!applyInputs())return;
  if(time>=endTime())time=startTime();
  running=true;state=recording?'回放中':'循環施力中';previous=performance.now();
  paint();animationId=requestAnimationFrame(tick);
}
function peak(){
  if(!recording&&!applyInputs())return;
  if(recording){
    const rows=recording.rows,cycle=sample().cycle,start=cycleStart.get(cycle);
    let peak=rows[start];
    for(let i=start;i<rows.length && rows[i].cycle===cycle;i++)if(rows[i].force>peak.force)peak=rows[i];
    time=peak.t;stop('本循環最大回授力');return;
  }
  const cycle=Math.min(config.cycles-1,Math.floor(time*config.frequency));
  time=(cycle+.25)/config.frequency;stop('最大推力 · 暫停');
}
$('play').onclick=run;$('peak').onclick=peak;
$('reset').onclick=()=>{time=startTime();stop('已歸零');};
$('side').onclick=()=>rig?.view(true);$('operator').onclick=()=>rig?.view(false);
document.addEventListener('visibilitychange',()=>{if(document.hidden&&running)stop('暫停');});
$('save').onclick=()=>{
  if(!recording&&!applyInputs())return;
  let rows=recording?.rows;
  if(!rows){
    const n=Math.floor(time*config.frequency*40);
    rows=Array.from({length:n+1},(_,i)=>simulated(i/(40*config.frequency),config));
    if(time-rows.at(-1).t>1e-8)rows.push(sample());
    if(rows.length<2){$('message').textContent='請先開始試驗或定位到峰值，再匯出紀錄。';return;}
  }
  const link=document.createElement('a'),url=URL.createObjectURL(new Blob([toCsv(rows)],{type:'text/csv;charset=utf-8'}));
  link.href=url;link.download=recording?'replay.csv':'fatigue-simulation.csv';link.click();setTimeout(()=>URL.revokeObjectURL(url),2000);
};
$('file').onchange=async e=>{
  const file=e.target.files[0],request=++importId;if(!file)return;
  try{
    if(file.size>48*1024*1024)throw new Error('檔案上限 48 MB。');
    const parsed=parseRecording(await file.text());if(request!==importId)return;
    recording=parsed;cycleStart=new Map();
    parsed.rows.forEach((s,i)=>{if(!cycleStart.has(s.cycle))cycleStart.set(s.cycle,i);});
    firstSample=([...cycleStart.values()][1]??parsed.rows.length)-1;
    time=startTime();$('seek').min=time;$('seek').max=endTime();$('message').textContent=file.name;
    stop('已載入紀錄');
  }catch(err){$('message').textContent=err.message;}
  finally{e.target.value='';}
};
$('seek').oninput=e=>{time=Number(e.target.value);stop('定位回放');};
$('demo').onclick=()=>{importId++;recording=null;time=0;$('message').textContent='';stop('待機');};
new ResizeObserver(()=>drawChart(sample())).observe($('chart'));
async function init(){
  try{
    const specimen=window.loadPrivateSpecimen?await window.loadPrivateSpecimen():null;
    if(specimen)$('specimen').textContent=specimen.label;
    rig=createRig($('scene'),specimen,peak);paint();
  }catch(error){
    $('state').textContent='無法載入 3D 場景';$('message').textContent=error.message;
    $('play').disabled=true;$('peak').disabled=true;
  }
}
init();
