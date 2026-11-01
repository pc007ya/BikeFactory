# G2.1 三站有限資源邏輯候選

全為示範假設、非實廠資料。原 `../slice-g2` 不變；本資料夾是新的版本，不能沿用原 G2 測試結果。

Node 20+，無外部 npm 依賴：`npm test`、`npm run demo`。`node generate-evidence.js` 重新產生本版正常流程證據；完整七情境以相鄰 `../slice-g3/records` 為準。

新增且限縮的範圍：持久推車 body pose／獨立泊位、有限附著員工、同源完整往返 itinerary、真 CART／AGV TURN、接手／脫離分段姿態、home-access gate、個別休息位，以及成品位空車倒退出支路後再迴轉。站內／裝／卸 30 秒。沒有多車、控制系統、力學或實廠校準。

## 程式責任
- `engine.js`：既有有限工序／事件排程；載入必要 mobility 延伸。
- `mobility-core.js`：推車／AGV 狀態、動作、路權與空間門、晚返事件；唯一核心時鐘。
- `pose-itinerary.js`：解析姿態、轉向及完整 itinerary 時間；固定版本。
- `drive-profile.js`：僅 V-EXIT→VJ 空車倒退策略，保留車身 heading。
- `state-projection.js`：live 與 replay 共用連續投影；不派工／不提交資源。
- `record-contract.js`：v2 僅接受支援的 pose／attachment／drive 版本，拒絕不相容歷史。
- `layout.js`：深層凍結的提案網路、泊位、把手／人員包絡、物料示意位置。
- `personnel.js`：技能、班段、附著 owner、個別真返場與休息。
- `inventory.js`／`routing.js`：保留原有已驗有限台帳／路權演算法；新版網路由 layout 注入。

狀態／尺寸／時間契約見 `../specs/g2_1-cart-turn-proposal.md`、`../specs/g2_1-layout-contract.json`、`../slice-g3/G2_1-30S-IMPLEMENTATION-NOTES.md`。`*-G2-INHERITED.md` 只留作舊規則比較，不是本版通過證據。

## 驗證界線
`tests/` 為本版測試；`evidence-*-working.log` 尚未封版時只是工作檢查。獨立驗收在 `../audit/g21-*`。測試、來源 hash 與紀錄必須同版。Node 邏輯／幾何通過不是 WebGL、連續物理碰撞或安全驗證。

物料拆箱／逐件上架及切片外倉儲未細分；只有有限台帳服務。人物步態／腳輪驅動／AGV差速未建力學。上述限制不允許用顯示偏移掩蓋推車 body 跳位或手腳穿模。
