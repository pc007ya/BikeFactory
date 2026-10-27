/** Real Chromium + software WebGL acceptance. No mocked DOM, renderer or GLTF loader.
 * BASE_URL must serve this commit's docs/ directory; screenshots require human review.
 * Run: BASE_URL=http://127.0.0.1:4173/ node scripts/browser-qa.mjs
 */
import {chromium} from 'playwright';
import {runCampusBrowserQA} from './browser-campus-extension.mjs';
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
const baseURL=process.env.BASE_URL||'http://127.0.0.1:4173/';
const output=path.resolve(process.env.QA_OUTPUT||'artifacts/browser-qa');
await fs.mkdir(output,{recursive:true});
const hash=b=>crypto.createHash('sha256').update(b).digest('hex');
const report={startedAt:new Date().toISOString(),url:baseURL,commit:process.env.GITHUB_SHA||null,browser:'Playwright Chromium / SwiftShader',realBrowser:true,mocks:false,checks:[],screenshots:[],renderSamples:[],dialogs:[],pageErrors:[],consoleErrors:[],requestFailures:[],visualReview:'REQUIRED: automated success is not a visual quality approval'};
let browser,page,stage='launch',dialogChoice='dismiss';
const check=(name,pass,evidence={})=>{report.checks.push({name,pass:!!pass,evidence});console.log(`${pass?'PASS':'FAIL'} ${name} ${JSON.stringify(evidence)}`);return !!pass};
const screenshot=async(name,scope='scene')=>{const target=path.join(output,name+'.png');if(scope==='scene')await page.locator('#viewport').screenshot({path:target,animations:'disabled'});else await page.screenshot({path:target,fullPage:scope==='full',animations:'disabled'});report.screenshots.push(name+'.png');report.renderSamples.push({screenshot:name,stats:await page.evaluate(()=>typeof window.lineRenderStats==='function'?window.lineRenderStats():null),assetAudit:await page.evaluate(()=>typeof window.lineAssetAudit==='function'?window.lineAssetAudit():null)});return await fs.readFile(target)};
const state=()=>page.evaluate(()=>window.lineState());
const stateSummary=s=>({order:s.order,time:s.time,running:s.running,completed:s.completed,wip:s.wip,transfers:s.transfers.length,carriers:s.mechanics.carriers.length,logistics:s.logistics,assets:s.assets});
const click=async selector=>{await page.locator(selector).click();};
const pause=async()=>{if((await state()).running)await click('#mainRun');await page.waitForFunction(()=>!window.lineState().running)};
const confirmClick=async(selector,accept=true)=>{dialogChoice=accept?'accept':'dismiss';await click(selector);dialogChoice='dismiss'};
const setSpeed=async n=>{const range=page.locator('#speed');await range.press(n===100?'End':'Home');if(n!==100)for(let i=1;i<n;i++)await range.press('ArrowRight')};
const setLogistics=async(mode,speed,fleet)=>{await click('[data-tab="logistics"]');if(mode!==(await state()).logistics.mode)await confirmClick(`[data-mode="${mode}"]`);await page.locator('#logSpeed').fill(String(speed));await page.locator('#logFleet').fill(String(fleet));await confirmClick('#applyLogistics')};
const activate=async id=>{await click('[data-tab="orders"]');await page.getByRole('button',{name:'切換工單 '+id,exact:true}).click();await pause()};
const setFirstProcess=async(name,cycle)=>{await page.getByLabel('工序名稱1',{exact:true}).fill(name);await page.locator('[data-cycle-device]').first().fill(String(cycle));await confirmClick('#processApply')};
try{
 browser=await chromium.launch({headless:true,args:['--use-angle=swiftshader','--enable-unsafe-swiftshader','--disable-dev-shm-usage']});
 const context=await browser.newContext({viewport:{width:1920,height:1080},deviceScaleFactor:1,acceptDownloads:true});
 page=await context.newPage();page.setDefaultTimeout(15000);
 page.on('pageerror',e=>report.pageErrors.push(e.message));
 page.on('console',m=>{if(m.type()==='error')report.consoleErrors.push(m.text())});
 page.on('requestfailed',r=>report.requestFailures.push({url:r.url(),error:r.failure()?.errorText}));
 page.on('dialog',async d=>{const choice=dialogChoice;report.dialogs.push({type:d.type(),message:d.message(),choice});await(choice==='accept'?d.accept():d.dismiss())});
 stage='load and WebGL';
 const response=await page.goto(baseURL,{waitUntil:'networkidle',timeout:180000});
 report.httpStatus=response?.status();report.title=await page.title();report.actualURL=page.url();
 check('HTML responds successfully',response?.ok(),{status:report.httpStatus,title:report.title});
 try{report.servedHtmlSha256=hash(await response.body())}catch{}
 await page.waitForFunction(()=>typeof window.lineState==='function',{},{timeout:60000});
 await page.waitForFunction(()=>window.lineState().assets?.state!=='loading',{},{timeout:180000});
 const loadedAssets=(await state()).assets;const assetsReady=loadedAssets?.state==='ready'&&loadedAssets.loaded===loadedAssets.total&&(!loadedAssets.assets||loadedAssets.assets.every(a=>a.state==='ready'));check('All announced SimReady assets finish loading before normal screenshots',assetsReady,loadedAssets);if(!assetsReady)throw Error('SimReady asset loading did not finish successfully; normal quality screenshots withheld');
 await pause();await page.evaluate(()=>scrollTo(0,0));
 report.initialLayout=await page.evaluate(()=>{const r=document.querySelector('#viewport').getBoundingClientRect();return{width:innerWidth,height:innerHeight,sceneTop:r.top,sceneWidth:r.width,sceneHeight:r.height,visibleScenePixels:Math.max(0,Math.min(innerHeight,r.bottom)-Math.max(0,r.top)),documentWidth:document.documentElement.scrollWidth}});
 await screenshot('01-initial-desktop','viewport');await screenshot('02-initial-full-page','full');
 const gl=await page.locator('#viewport canvas').evaluate(c=>{const g=c.getContext('webgl2')||c.getContext('webgl');if(!g)return{valid:false};const ext=g.getExtension('WEBGL_debug_renderer_info');const p=document.createElement('canvas');p.width=160;p.height=100;const ctx=p.getContext('2d');ctx.drawImage(c,0,0,160,100);const d=ctx.getImageData(0,0,160,100).data,colors=new Set();let opaque=0,min=255,max=0;for(let i=0;i<d.length;i+=4){colors.add(`${d[i]>>3},${d[i+1]>>3},${d[i+2]>>3}`);if(d[i+3])opaque++;const l=(d[i]+d[i+1]+d[i+2])/3;min=Math.min(min,l);max=Math.max(max,l)}return{valid:!g.isContextLost(),version:g.getParameter(g.VERSION),renderer:ext?g.getParameter(ext.UNMASKED_RENDERER_WEBGL):g.getParameter(g.RENDERER),canvasWidth:c.width,canvasHeight:c.height,quantizedColors:colors.size,luminanceRange:max-min,opaquePixels:opaque}});
 report.webgl=gl;check('Real WebGL context and nonblank rendered canvas',gl.valid&&gl.canvasWidth>300&&gl.canvasHeight>300&&gl.quantizedColors>30&&gl.luminanceRange>25,gl);
 let current=await state();check('Actual SimReady assets load without mocked decoder',current.assets?.state==='ready'&&current.assets?.instances>0,current.assets);
 stage='camera views and motion';
 await click('#wholeFactory');await page.waitForTimeout(700);await screenshot('03-whole-factory');
 await click('#closeLine');await page.waitForTimeout(700);await screenshot('04-production-line-close');
 if(await page.locator('#assetView').count()){await click('#assetView');await page.waitForTimeout(700);await screenshot('05-simready-close')}
 await click('#closeLine');await page.waitForTimeout(700);await setSpeed(4);await click('#mainRun');
 let a=await state();const runningA=await screenshot('06-running-a');
 await page.waitForFunction(t=>window.lineState().mechanics.clock>t+2,a.mechanics.clock,{timeout:20000});
 let b=await state();const runningB=await screenshot('07-running-b');
 check('Running changes actual time and mechanism transforms',b.time>a.time&&JSON.stringify(a.mechanics)!==JSON.stringify(b.mechanics),{before:stateSummary(a),after:stateSummary(b)});
 check('Running changes actual rendered pixels',hash(runningA)!==hash(runningB));
 await pause();await page.waitForTimeout(300);a=await state();const pausedA=await screenshot('08-paused-a');await page.waitForTimeout(1000);b=await state();const pausedB=await screenshot('09-paused-b');
 check('Pause freezes time and every mechanism snapshot',a.time===b.time&&JSON.stringify(a.mechanics)===JSON.stringify(b.mechanics),{time:a.time});
 check('Pause freezes rendered scene pixels',hash(pausedA)===hash(pausedB));
 await click('#run');await page.waitForFunction(()=>window.lineState().running);await click('#run');
 check('Secondary run/pause stays synchronized',!(await state()).running&&(await page.locator('#mainRun').textContent()).includes('啟動'),{mainRun:await page.locator('#mainRun').textContent(),playState:await page.locator('#playState').textContent()});
 stage='orders and switch interruption';
 await setSpeed(1);a=await state();await activate('WO-EBIKE-001');await click('#step60');const eBefore=await state();await activate('WO-BIKE-001');b=await state();
 check('Switch back preserves original order progress',b.time>=a.time&&b.time<a.time+5&&b.completed===a.completed&&b.wip===a.wip,{before:stateSummary(a),after:stateSummary(b)});
 await activate('WO-EBIKE-001');b=await state();check('Second order retains separate progress',b.time>=eBefore.time&&b.time<eBefore.time+5,{before:eBefore.time,after:b.time});
 await click('[data-tab="orders"]');await page.locator('#woId').fill('QA-BROWSER');await page.locator('#woQty').fill('2');await click('#createOrder');await click('#createOrder');
 check('Repeated new-order action rejects duplicate',await page.getByRole('button',{name:'切換工單 QA-BROWSER',exact:true}).count()===1,{message:await page.locator('#opsError').textContent()});
 await page.locator('#woId').fill('QA-INVALID');await page.locator('#woQty').fill('0');await click('#createOrder');
 check('Invalid order quantity is rejected',await page.getByRole('button',{name:'切換工單 QA-INVALID',exact:true}).count()===0,{message:await page.locator('#opsError').textContent()});
 await screenshot('10-order-panel','full');await activate('WO-BIKE-001');
 stage='logistics cancellation and modes';
 await click('[data-tab="logistics"]');a=await state();const nDialog=report.dialogs.length;await confirmClick('[data-mode="cart"]',false);b=await state();
 check('Cancel changing logistics preserves progress and mode',a.time===b.time&&JSON.stringify(a.logistics)===JSON.stringify(b.logistics)&&report.dialogs.length>nDialog,{before:stateSummary(a),after:stateSummary(b)});
 for(const [mode,speed,fleet]of [['cart',.6,1],['agv',1.3,2],['conveyor',.7,2]]){
  await setLogistics(mode,speed,fleet);a=await state();check(mode+' settings apply, reset and pause',a.logistics.mode===mode&&a.logistics.speed===speed&&a.logistics.fleet===fleet&&a.time===0&&!a.running,a.logistics);
  await setSpeed(100);await click('#mainRun');let maxTransfers=0;for(let i=0;i<30;i++){await page.waitForTimeout(100);const s=await state();maxTransfers=Math.max(maxTransfers,s.transfers.length);if(mode!=='conveyor'&&s.transfers.length>fleet)throw Error('Fleet capacity exceeded')}
  await pause();a=await state();let captureSteps=0;while(!a.transfers.length&&!a.orderComplete&&captureSteps++<20){await click('#step60');a=await state()}check(mode+' screenshot includes an active transfer',a.transfers.length>0,{captureSteps,time:a.time,transfers:a.transfers.length});check(mode+' carriers use requested mode',a.mechanics.carriers.length>0&&a.mechanics.carriers.every(c=>c.mode===mode),{time:a.time,maxTransfers,carriers:a.mechanics.carriers.length});await screenshot('11-logistics-'+mode);
 }
 await click('[data-tab="logistics"]');
 for(const [field,value]of [['logSpeed','0'],['logSpeed','3.1'],['logFleet','0'],['logFleet','1.5'],['logFleet','51']]){
  await page.locator('#logSpeed').fill('.7');await page.locator('#logFleet').fill('2');await page.locator('#'+field).fill(value);a=await state();await click('#applyLogistics');b=await state();check('Reject '+field+'='+value,JSON.stringify(a.logistics)===JSON.stringify(b.logistics)&&a.time===b.time,{error:await page.locator('#opsError').textContent()})
 }
 stage='process and configuration save/load';
 await activate('WO-BIKE-001');await setLogistics('agv',1.1,2);await setFirstProcess('QA 一般車首站',33);
 await activate('WO-EBIKE-001');await setLogistics('cart',.6,1);await setFirstProcess('QA 電動車首站',47);
 a=await state();check('Process name and device cycle apply',a.steps[0].name==='QA 電動車首站'&&a.devices.find(d=>d.type===a.steps[0].type).cycle===47,{step:a.steps[0]});
 await page.locator('[data-cycle-device]').first().fill('0');await click('#processApply');b=await state();check('Invalid process cycle does not replace live settings',b.devices.find(d=>d.type===b.steps[0].type).cycle===47,{error:await page.locator('#processError').textContent()});await click('#processDiscard');
 const downloadPromise=page.waitForEvent('download');await click('#save');const download=await downloadPromise;const configPath=path.join(output,'saved-configuration.json');await download.saveAs(configPath);const config=JSON.parse(await fs.readFile(configPath,'utf8'));
 check('Downloaded JSON contains per-order settings',config.workOrders.find(o=>o.id==='WO-BIKE-001')?.settings?.logistics.mode==='agv'&&config.workOrders.find(o=>o.id==='WO-EBIKE-001')?.settings?.logistics.mode==='cart');
 await setFirstProcess('QA modified after save',59);dialogChoice='accept';await page.locator('#file').setInputFiles(configPath);await page.waitForFunction(()=>window.lineState().steps[0].name==='QA 電動車首站');dialogChoice='dismiss';a=await state();
 check('Real file import restores current order and pauses from zero',a.steps[0].name==='QA 電動車首站'&&a.time===0&&!a.running&&a.logistics.mode==='cart',stateSummary(a));
 await activate('WO-BIKE-001');a=await state();check('Real file import preserves inactive order settings',a.steps[0].name==='QA 一般車首站'&&a.logistics.mode==='agv'&&a.devices.find(d=>d.type===a.steps[0].type).cycle===33,{step:a.steps[0],logistics:a.logistics});
 const configBefore=JSON.stringify(a.configuration);await page.locator('#file').setInputFiles({name:'invalid.json',mimeType:'application/json',buffer:Buffer.from('{bad')});await page.waitForTimeout(150);check('Malformed JSON leaves current configuration intact',JSON.stringify((await state()).configuration)===configBefore,{error:await page.locator('#error').textContent()});
 await click('#step60');a=await state();for(let i=0;i<3;i++){await page.locator('#stepType').selectOption('__custom');await click('#stepAdd');await click('#processDiscard')}b=await state();check('Repeated custom draft/discard preserves active production',a.time===b.time&&a.wip===b.wip&&a.devices.length===b.devices.length);await screenshot('12-process-editor','full');
 stage='complete tiny work order';
 await click('[data-tab="orders"]');await page.locator('#woId').fill('QA-COMPLETE');await page.locator('#woQty').fill('1');await page.locator('#woProduct').selectOption('bicycle');await click('#createOrder');await activate('QA-COMPLETE');
 for(const input of await page.locator('[data-cycle-device]').all())await input.fill('1');await confirmClick('#processApply');await page.locator('#arrival').fill('1');await confirmClick('#parameters');await setLogistics('conveyor',3,2);await setSpeed(100);await click('#mainRun');
 await page.waitForFunction(()=>window.lineState().orderComplete,{},{timeout:30000});a=await state();check('Final frame clears jobs/carriers and stops',!a.running&&a.completed===1&&a.wip===0&&a.jobs.length===0&&a.mechanics.carriers.length===0,stateSummary(a));check('Completed start/fast-forward controls disabled',await page.locator('#run').isDisabled()&&await page.locator('#step60').isDisabled());await screenshot('13-completed-no-ghosts');
 stage='campus browser verification';
 await runCampusBrowserQA({page,output,report,check,screenshot,setDialogChoice:v=>dialogChoice=v});
 stage='responsive screenshots';
 await page.setViewportSize({width:1366,height:900});await page.evaluate(()=>scrollTo(0,0));await screenshot('14-desktop-1366','viewport');
 await page.setViewportSize({width:390,height:844});await page.evaluate(()=>scrollTo(0,0));await screenshot('15-mobile-390','viewport');report.mobileLayout=await page.evaluate(()=>({width:innerWidth,documentWidth:document.documentElement.scrollWidth}));
 check('Mobile page has no document-level horizontal overflow',report.mobileLayout.documentWidth<=report.mobileLayout.width+1,report.mobileLayout);
 check('No uncaught JavaScript errors',report.pageErrors.length===0,report.pageErrors);
}catch(error){report.fatal={stage,message:error.message,stack:error.stack};console.error(error);if(page)try{await screenshot('99-failure','full')}catch{}}
finally{
 report.finishedAt=new Date().toISOString();report.passed=!report.fatal&&report.checks.every(c=>c.pass);report.counts={passed:report.checks.filter(c=>c.pass).length,failed:report.checks.filter(c=>!c.pass).length};
 await fs.writeFile(path.join(output,'report.json'),JSON.stringify(report,null,2));
 await fs.writeFile(path.join(output,'REVIEW_REQUIRED.txt'),'These are actual Chromium WebGL screenshots. A human/visual-capable reviewer must inspect composition, visibility, clipping, material appearance, meaningful motion, and SimReady prominence before delivery. Automated pass is not visual approval.\n');
 if(browser)await browser.close();console.log(JSON.stringify({passed:report.passed,counts:report.counts,fatal:report.fatal,output},null,2));if(!report.passed)process.exitCode=1;
}
