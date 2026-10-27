// Optional: npm install --no-save playwright; npx playwright install chromium
// Set CHROMIUM_EXECUTABLE_PATH to use an existing compatible Chromium.
import {createServer} from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const {chromium}=await import('playwright');
const root=fileURLToPath(new URL('../',import.meta.url));
const server=createServer(async(req,res)=>{try{const rel=decodeURIComponent(new URL(req.url,'http://localhost').pathname);const file=path.resolve(root,'.'+(rel==='/'?'/index.html':rel));if(!file.startsWith(root))throw Error('path');const types={'.html':'text/html','.js':'text/javascript','.json':'application/json'};res.setHeader('Content-Type',types[path.extname(file)]||'application/octet-stream');res.end(await fs.readFile(file));}catch{res.writeHead(404);res.end();}});
await new Promise(r=>server.listen(0,'127.0.0.1',r));
let browser;
try{browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_EXECUTABLE_PATH?{executablePath:process.env.CHROMIUM_EXECUTABLE_PATH}:{}),args:['--no-sandbox','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});const page=await browser.newPage({viewport:{width:1600,height:1000}});await page.goto(`http://127.0.0.1:${server.address().port}`);await page.waitForFunction(()=>window.linePreview);for(const [name,args] of [['perspective',[62,67,72]],['overview',[.1,105,.1]],['assembly',[6,14,19,-5,0]],['quality',[37,13,28,27,14]]]){const data=await page.evaluate(a=>window.linePreview.view(...a),args);await fs.writeFile(path.join(root,'deliverables',name+'.png'),Buffer.from(data.split(',')[1],'base64'));}}finally{await browser?.close();server.close();}
