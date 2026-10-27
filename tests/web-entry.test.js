import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
test('published web entry contains valid bundled JavaScript and operations panes',()=>{
 const html=fs.readFileSync(new URL('../docs/index.html',import.meta.url),'utf8');
 assert.ok(!html.includes('<script type="module"'));
 assert.ok(!html.includes('<script type="importmap"'));
 assert.ok(html.includes('<script defer src="./app.bundle.js"></script>'));
 new vm.Script(fs.readFileSync(new URL('../docs/app.bundle.js',import.meta.url),'utf8'));
 for(const id of ['tab-production','tab-orders','tab-logistics','mainRun','orderList','logTasks'])assert.ok(html.includes(`id="${id}"`),id);
});
