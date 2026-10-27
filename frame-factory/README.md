# 隔壁鋁合金車架廠｜獨立純邏輯模組

Node ES modules，亦可由瀏覽器直接 import。無 DOM、Three.js、主 app 或總裝巨型模組依賴。沒有修改既有網站。規劃基準：`../frame-factory-plan/frame-factory-config.json` schema 1.0.0。

**安全/真實性界線：**全部節拍、批量、品質、幾何判定都是合成概念演示。外購管材/鍛件以「每車架齊套件」建帳，不做物料質量/切屑重量守恆。不含實體熱處理溫度、酸液配方、WPS、允收尺寸、安全設備設計或實廠日產能。製程時間秒數不能當成量產標準工時。

## 最小接入

```js
import { FrameSimulation, createFrameConfig } from './frame-factory-module/index.js';

const frameFactory = new FrameSimulation(createFrameConfig()); // paused, 12 purchased kits, 0 finished frames
frameFactory.start();
frameFactory.advance(1); // 同總裝每次給相同的概念模擬秒；不是 wall-clock
const view = frameFactory.snapshot();

// 僅在總裝自身WIP/緩衝允許投料後呼叫。
// purchased_frame 模式繼續使用原總裝來源：不要呼叫此函式、不要扣鄰廠庫存。
// manufactured_qualified_frame 模式只准用以下供料；null 顯示欠料，絕不偷偷fallback。
const spec = frameFactory.config.defaultKit;
const receipt = frameFactory.takeFrame(spec, 'WO-001', 'WO-001-BIKE-0001');
if (receipt) { /* 鎖定receipt.frameId/transferId到自行車工件trace */ }
else { /* 材料等待；不得先增加總裝已投料數 */ }
```

`takeFrame(spec, orderId, vehicleSerial)`：只拿**已運抵總裝庫、F12接受、精確規格匹配**的自製車架。回傳帶材料批號、每段熱/酸洗批號、幾何檢查和完整路由的消耗收據。以 `[orderId, vehicleSerial]` exactly-once；相同請求重試回同張收據，不再扣庫存；同key改spec則拋錯。無貨回 `null`，不變更任何狀態。`vehicleSerial` 是總裝車輛序號，不是搬運車號。

四個匹配鍵必填：`frameSpecId, sizeCode, drawingRevision, surfaceCondition`。預設 `DEMO-BIKE-FRAME / M / DEMO-R1 / bare_clean_dry`；沒有塗裝，不能暗稱符合塗裝件交付條件。

全廠暫停須同時 `frameFactory.pause()`；續播 `start()`。不同總裝工單可有自己的elapsed，但鄰廠/跨廠車只有一個共同clock。單一總裝工單重設不能退還已consume車架；`frameFactory.reset()` 僅供**明確的全情境重設**，清除所有車架、批次、搬運和消耗帳，按initialQuantity重新建立外購齊套件，run ID更新避免前後序號重複。

## 公開 API

| API | 行為 |
|---|---|
| `createFrameConfig(overrides)` | 補齊預設、工站按id patch，完整驗證後回可JSON序列化config |
| `validateFrameConfig(candidate)` | 完整驗證且複製，不變更傳入物件 |
| `new FrameSimulation(config)` | 初始暫停；`FrameFactorySimulation`是同class別名 |
| `config`, `time`, `running` | config是隔離副本 |
| `start() / pause()` | 冪等，無隱含快轉 |
| `advance(seconds)` | 非負有限秒；累積小數、每完整1秒同步進行，paused不累計 |
| `reset()` | 明確全情境重設，保持已驗證config，返回snapshot |
| `configure(fullConfig)` | 先完整原子驗證，成功才全情境重設；錯誤保留原狀 |
| `receiveKits({quantity, ...kitOverrides})` | 外購管材/鍛件齊套進料；缺批號、禁用路由、材料不相容時不建任何件 |
| `snapshot()` | 所有畫面狀態的隔離副本，詳見下方 |
| `audit()` | 守恆、序號、批次相容、加工資源所有權、已放行供料、consume唯一性 |
| `releasedFrames(spec?) / assemblyFrames(spec?)` | 前者工廠合格可預留，後者抵總裝未consume；不混計 |
| `setQualityOutcome(stationId, 'pass'|'hold')` | 設定之後自動合成檢驗結果；已hold不會悄悄自解 |
| `recordInspection(frameId, {result,evidenceRef})` | 單架等待檢驗時，顯式合成接受或hold |
| `recordBatchInspection(loadId, {result,evidenceRef})` | 整批記錄接受/hold；不可逐架繞過尚未接受批次 |
| `holdFrame(frameId, reason)` | 暫扣待檢或尚未預留放行件；批次成員會整批暫扣 |
| `authorizeRework(frameId, {fromStepId,reviewRef,reason?,thermalRequalificationReviewRef?})` | 保留frameId；失效重工點以後的放行；限次；不得直接指定F10/F13；已做熱處理的重跑路徑須另有顯式thermal requalification review ref |
| `scrapFrame(frameId, reviewRef)` | 待檢/尚未預留件報廢仍留在守恆帳，不能consume |
| `scrapBatch(loadId, reviewRef)` | 完整仍暫扣批次經顯式review後整批報廢；每件仍保留同frameId |
| `rejectTrip(tripId, reason)` | 自動搬運去程/裝卸中拒收，載貨返回；收貨後不可拒收 |

品質固定 `synthetic:true`，不接受宣稱真實測量的 `synthetic:false`。熱處理失敗整爐hold不會自動再熱。整爐hold必須先整爐review解決；可顯式scrapBatch，不默許任意拆件返工；不是操作指引。所有無效呼叫在狀態變更前拋 `TypeError`。

### 手動交接（通常只用於測試或自建物流；將logistics.enabled設false）

```js
const transfer = frameFactory.reserveReleasedFrames({
  quantity: 2, spec, orderId: 'ASSEMBLY-STOCK', transferId: 'caller-unique-id'
}); // insufficient/mismatch: null; existing same request: same record
if (transfer) {
  frameFactory.dispatchTransfer(transfer.transferId);
  frameFactory.receiveTransfer(transfer.transferId, spec);
  // received庫存才可takeFrame
}
```

`cancelTransfer(id)`僅未離廠預留；`rejectTransfer(id,reason)`標記載貨返回；`returnTransfer(id)`實際返回才恢復可用庫存。冪等取消/返回不重複加庫存。錯規格收貨、亂序、重用transferId改request不改帳。

**自動車隊擁有的transfer禁止直接manual dispatch/receive/cancel/reject/return**，避免畫面載具和帳面提前收貨不同步；改用 `rejectTrip`。低層manual API不是略過運輸的捷徑。

## Config

```js
const config = createFrameConfig({
  initialQuantity: 8,
  qualityMode: 'synthetic_pass', // 或 manual：每站/批次等顯式recordInspection
  qualityReviewSeconds: 2,      // min 2：熱處理出爐至少2秒可見QC暫扣
  maxReworkCount: 3,
  stations: [
    { id: 'F06', cycleSeconds: 28, parallelResources: 2 },
    { id: 'F10', capacity: 4, cycleSeconds: 45, maxWaitSeconds: 45, allowPartial: true }
  ],
  logistics: {
    enabled: true, fleet: 1, batchSize: 4, allowPartial: true, maxWaitSeconds: 20,
    loadSeconds: 5, travelSeconds: 35, unloadSeconds: 5, returnSeconds: 35,
    speed: 0.8,
    waypoints: [{x:56,z:3},{x:47,z:3},{x:47,z:-4},{x:35,z:-4}]
  }
});
```

`cycleSeconds`是**每個job/整批**時間，capacity是每job車架數，parallelResources是同時設備數，bufferCapacity是等待入加工區件數，不含加工/檢驗暫存。單件機台capacity固定1，增加產能用parallelResources。批次滿批即啟動；未滿且allowPartial，從該相容組最老等待件達maxWait才發動。`allowPartial:false`且buffer小於capacity屬不可能配置，拒絕。小量不同料批+full-only可明確等料，不偷偷混批。

批次鍵：`recipeId + recipeVersion + batchStage/operationKey + materialCompatibilityGroupId + sorted(tubeLotIds) + sorted(forgingLotIds)`。F01齊套lot、F04酸洗、F05乾燥、F10熱處理皆保留loadIds/同步起訖；熱處理每段獨立loadId。既有批次記錄只引用frameId，不是新增庫存。

`speed`或`waypoints`經createFrameConfig變更且未指定travelSeconds時，以折線長/速度取上整數概念秒；默認28m / .8m/s =35秒。可明確覆寫去/回程。這不是避障、空車尋路、物理碰撞或真實搬運效率模型。

`productionCycleMinutes`可保留實測資料欄位但預設null，**模組不把demo秒轉成實廠OEE/日產量**。主畫面應持續顯示 `snapshot.safetyBadge` 和 `qualityBadge`。

## Snapshot contract

```text
{ time, running, remainder, counts, locations, frames, batches, transfers,
  stations: {F01:{phase, remaining, progress, jobs:[{serial,frameId}], queue:[frameId],
                 heldFrameIds, resources:[{jobId,loadId,startedAt,completedAt,remaining,progress,jobs}],
                 capacity,parallelResources,bufferCapacity}, ...},
  queues: {F01:[frameId], ...},
  ready:[unreserved released frames at factory],
  assemblyReady:[received not yet consumed frames],
  logistics: {time,vehicles:[{id,phase,tripId,frameIds,startedAt,readyAt,remaining,progress}],trips},
  consumptions,events,conservation,safetyBadge,qualityBadge,productionAuthorized:false }
```

frame `status`為互斥九態：`incoming / queued / processing / batch_wait / qc_hold / released / transfer / consumed / scrapped`。`counts`九態總和=admitted；`counts.assemblyReady`是transfer子集合，**不要再加一次**。詳細位置在 `locations`：`factory_incoming/factory_queue/factory_station/factory_quality_hold/factory_released/factory_reserved/road_loaded/road_return_loaded/assembly_received/assembly_consumed/scrap`。下站滿時frame保持queued並帶blockedNextStationId，仍在原位置，不算已進下站緩衝。

`phase`: 工站 `idle/queued/batch_wait/processing/qc_hold`；載具 `idle/loading/outbound/unloading/empty_return/loaded_return`。空車回程frameIds=[]但載具仍被佔用，readyAt以前不能再接載。拒收回廠後庫存可重新安排新trip，不會多一個frame。

F10 batch.accepted代表**該批製程紀錄已做合成接受**，不是最終車架放行：之後仍排F08量測，可單架hold，全部路由/批次/個別QA與F12均接受且無open NC才released。F09預設因無合成偏差而skip，有明確skip紀錄；`alignmentRequired:true`須帶alignmentReviewRef，且校正後一定F08。7005路由範本預設禁用，不因改材料下拉默認走6061。

事件與完整歷史在snapshot中，畫面建議以節流方式讀（不是每個子網格各呼叫一次）。API回傳皆clone；不能靠修改snapshot繞過品質/庫存狀態。

## 驗證

```sh
cd bicycle-v08/frame-factory-module
npm test
```

使用Node內建test runner，無npm依賴。測試含完整路由/兩段熱處理、2秒QC門、部分/滿批、批次料號隔離、單架幾何hold、整爐hold、校正再驗、返工失效、報廢守恆、規格拒收、exactly-once、空車回程佔用、載貨拒收返回、小緩衝阻塞、原子無效輸入與snapshot隔離。總裝callback接線/供料模式切換/保存匯入/實際UI需主整合與獨立QA再驗。
