import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
test('delivered standalone contains a valid inline script and all operations panes',()=>{const html=fs.readFileSync(new URL('../START.html',import.meta.url),'utf8');assert.ok(!html.includes('<script type="module"'));const inline=html.split('<script>')[1]?.split('</script>')[0];assert.ok(inline);new vm.Script(inline);for(const id of ['tab-production','tab-orders','tab-logistics','mainRun','orderList','logTasks'])assert.ok(html.includes(`id="${id}"`),id);});
