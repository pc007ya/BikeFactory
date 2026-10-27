import fs from 'node:fs/promises';
import './embed-simready.mjs';
import {build} from 'esbuild';
const root=new URL('../',import.meta.url);
const r=await build({entryPoints:[new URL('app.js',root).pathname],bundle:true,write:false,format:'iife',minify:true,target:'es2020',legalComments:'inline'});
let html=(await fs.readFile(new URL('index.html',root),'utf8')).replace(/<script type="importmap">[\s\S]*?<\/script>/,'').replace('<script type="module" src="./app.js"></script>',()=>'<script>'+r.outputFiles[0].text.replace(/<\/script/gi,'<\\/script')+'</script>');
await fs.writeFile(new URL('START.html',root),html);
