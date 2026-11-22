export const header='time_s,cycle,target_N,force_N,displacement_mm';
export function simulated(t,config) {
  const phase=2*Math.PI*t*config.frequency;
  const target=config.amplitude*Math.sin(phase);
  // A constant, illustrative feedback gain and elastic compliance.
  const force=.98*target;
  return {t,cycle:Math.floor(t*config.frequency+1e-8),target,force,displacement:force/200};
}
export function parseRecording(text){
  const lines=text.trim().replace(/^\uFEFF/,'').split(/\r?\n/);
  if(lines.shift()?.trim()!==header)throw new Error('CSV 欄名不符，請參考匯出檔。');
  if(lines.length<2 || lines.length>500000)throw new Error('CSV 需要 2 至 500,000 筆資料。');
  const rows=[];let maxDisp=0;
  for(const [index,line] of lines.entries()){
    const cols=line.split(',');
    const [t,cycle,target,force,displacement]=cols.map(Number);
    if(cols.length!==5||cols.some(c=>!c.trim()||!Number.isFinite(Number(c)))||t<0||
      !Number.isSafeInteger(cycle)||cycle<0||(index&&(t<=rows[index-1].t||cycle<rows[index-1].cycle))){
      throw new Error('第 '+(index+2)+' 列資料或時間／循環順序有誤。');
    }
    maxDisp=Math.max(maxDisp,Math.abs(displacement));rows.push({t,cycle,target,force,displacement});
  }
  return {rows,gain:Math.min(10,maxDisp?40/maxDisp:10)};
}
export function sampleIndex(rows,time){
  let lo=0,hi=rows.length;
  while(lo<hi){const mid=Math.floor((lo+hi)/2);if(rows[mid].t<=time)lo=mid+1;else hi=mid;}
  return Math.max(0,lo-1);
}
export function toCsv(samples){
  return [header,...samples.map(s=>[s.t.toFixed(7),s.cycle,s.target.toFixed(5),s.force.toFixed(5),s.displacement.toFixed(7)].join(','))].join('\n');
}
