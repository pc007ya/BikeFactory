import fs from 'node:fs/promises';
import {gunzipSync} from 'node:zlib';
import {createHash} from 'node:crypto';
const root=new URL('../',import.meta.url),docs=new URL('docs/',root);
const digest=b=>createHash('sha256').update(b).digest('hex');
const manifest=JSON.parse(await fs.readFile(new URL('asset-manifest.json',docs),'utf8'));
await fs.mkdir(new URL('assets/simready/',root),{recursive:true});
for(const asset of manifest){
 if(!/^[a-z0-9_]+$/.test(asset.id))throw Error('Invalid asset id');
 const chunks=asset.chunks||[{url:asset.url,bytes:asset.compressedBytes,sha256:asset.compressedSha256}];
 const parts=[];
 for(const chunk of chunks){
  const relative=chunk.url.split('?')[0];
  if(!/^assets\/simready\/[a-z0-9_.-]+$/.test(relative))throw Error('Invalid asset path');
  const part=await fs.readFile(new URL(relative,docs));
  if(part.length!==chunk.bytes||digest(part)!==chunk.sha256)throw Error('Chunk checksum mismatch: '+relative);
  parts.push(part);
 }
 const compressed=Buffer.concat(parts);
 if(compressed.length!==asset.compressedBytes||digest(compressed)!==asset.compressedSha256)throw Error('Compressed checksum mismatch: '+asset.id);
 const bytes=gunzipSync(compressed);
 if(bytes.length!==asset.byteLength||digest(bytes)!==asset.sha256)throw Error('GLB checksum mismatch: '+asset.id);
 await fs.writeFile(new URL('assets/simready/'+asset.id+'.glb',root),bytes);
}
await import('./embed-simready.mjs');
console.log('Prepared '+manifest.length+' source assets; each chunk, concatenated gzip, and original GLB verified.');
