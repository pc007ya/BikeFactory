import fs from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {build} from 'esbuild';
import './embed-simready.mjs';
const root=new URL('../',import.meta.url),out=new URL('../dist-web/',import.meta.url),{SIMREADY_ASSETS}=await import('../assets/simready/embedded.js?build='+Date.now());
await fs.rm(out,{recursive:true,force:true});await fs.mkdir(new URL('assets/simready/',out),{recursive:true});
const manifest=[],MAX_CHUNK=7*1024*1024,sha=bytes=>createHash('sha256').update(bytes).digest('hex');
for(const asset of SIMREADY_ASSETS){const packed=Buffer.from(asset.base64,'base64'),{base64,...data}=asset,item={...data,compressedSha256:sha(packed)};
 if(packed.length>MAX_CHUNK){item.chunks=[];for(let offset=0,i=1;offset<packed.length;offset+=MAX_CHUNK,i++){const bytes=packed.subarray(offset,Math.min(packed.length,offset+MAX_CHUNK)),filename=asset.id+'.glb.gz.part'+String(i).padStart(3,'0');await fs.writeFile(new URL('assets/simready/'+filename,out),bytes);item.chunks.push({url:'assets/simready/'+filename+'?v='+asset.sha256.slice(0,12),bytes:bytes.length,sha256:sha(bytes)});}}
 else{const filename=asset.id+'.glb.gz';await fs.writeFile(new URL('assets/simready/'+filename,out),packed);item.url='assets/simready/'+filename+'?v='+asset.sha256.slice(0,12);}
 manifest.push(item);
}
const bundled=await build({entryPoints:[new URL('app.js',root).pathname],bundle:true,write:false,format:'iife',minify:true,target:'es2020',legalComments:'inline',plugins:[{name:'external-compressed-assets',setup(b){b.onLoad({filter:/assets\/simready\/embedded\.js$/},()=>({contents:'export const SIMREADY_ASSETS='+JSON.stringify(manifest),loader:'js'}));}}]});
await fs.writeFile(new URL('app.bundle.js',out),bundled.outputFiles[0].text);
let html=(await fs.readFile(new URL('index.html',root),'utf8')).replace(/<script type="importmap">[\s\S]*?<\/script>/,'').replace('<script type="module" src="./app.js"></script>','<script defer src="./app.bundle.js"></script>');
await fs.writeFile(new URL('index.html',out),html);await fs.writeFile(new URL('asset-manifest.json',out),JSON.stringify(manifest,null,2));
for(const name of ['ATTRIBUTION.txt','LICENSE-CC-BY-4.0.txt','provenance.json']){try{await fs.copyFile(new URL('assets/simready/'+name,root),new URL('assets/simready/'+name,out));}catch{}}
console.log('Web build:',new URL('.',out).pathname,'app bytes',bundled.outputFiles[0].text.length,'assets',manifest.length);
