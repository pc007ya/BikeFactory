export function validate(devices,types){
  if(!Array.isArray(devices)||devices.length>500)throw Error('設備清單必須為陣列，最多 500 台');
  const ids=new Set();
  for(const d of devices){
    if(typeof d.id!=='string'||!d.id.trim()||ids.has(d.id))throw Error('設備 ID 空白或重複');ids.add(d.id);
    if(!Object.hasOwn(types,d.type))throw Error('未知設備類型');
    if(d.rotation!==undefined&&(!Number.isFinite(d.rotation)||![0,90,180,270].includes(d.rotation)))throw Error('旋轉需為 0／90／180／270 度');const t=types[d.type];const r=(d.rotation||0)*Math.PI/180;const w=Math.abs(Math.cos(r))*t.w+Math.abs(Math.sin(r))*t.d,depth=Math.abs(Math.sin(r))*t.w+Math.abs(Math.cos(r))*t.d;
    if(![d.x,d.z,d.cycle].every(Number.isFinite)||Math.abs(d.x)+w/2>40||Math.abs(d.z)+depth/2>25)throw Error('設備本體超出 80×50m 廠界或參數無效');
    if(d.cycle<0||d.cycle>86400||(t.cycle!==0&&d.type!=='storage'&&d.cycle<1))throw Error('生產設備節拍需介於 1–86400 秒');
  }
  return devices;
}
export function spacingWarnings(devices,types,gap=1){
  const warnings=[];
  for(let i=0;i<devices.length;i++)for(let j=i+1;j<devices.length;j++){
    const a=devices[i],b=devices[j];const ext=d=>{const t=types[d.type],r=(d.rotation||0)*Math.PI/180;return {w:Math.abs(Math.cos(r))*t.w+Math.abs(Math.sin(r))*t.d,d:Math.abs(Math.sin(r))*t.w+Math.abs(Math.cos(r))*t.d}};const ta=ext(a),tb=ext(b);
    if(Math.abs(a.x-b.x)<(ta.w+tb.w)/2+gap&&Math.abs(a.z-b.z)<(ta.d+tb.d)/2+gap)warnings.push(`${a.id} / ${b.id} 重疊或間距小於 ${gap}m`);
  }
  return warnings;
}
