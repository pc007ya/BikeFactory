import {build} from 'esbuild';import fs from 'node:fs';import path from 'node:path';import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const result=await build({entryPoints:[path.join(root,'app.js')],bundle:true,write:false,format:'iife',target:'es2022',minify:true,legalComments:'inline'});
const css=fs.readFileSync(path.join(root,'dashboard.css'),'utf8');const licenses=['THREE-MIT.txt','FFLATE-MIT.txt'].map(f=>fs.readFileSync(path.join(root,'licenses',f),'utf8')).join('\n');
const js=result.outputFiles[0].text.replace(/<\/script/gi,'<\\/script');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8').replace('<!--DASHBOARD_CSS-->',()=>'<style>'+css+'</style>').replace('<!--BUNDLE-->',()=>'<!-- THIRD PARTY LICENSES\n'+licenses+'\n--><script>'+js+'</script>');
fs.mkdirSync(path.join(root,'dist'),{recursive:true});fs.writeFileSync(path.join(root,'dist','START.html'),html);console.log('Built self-contained START.html',Buffer.byteLength(html),'bytes. No browser visual validation.');
