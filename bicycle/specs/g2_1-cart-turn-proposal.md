# G2.1 提案：持久推車姿態、有限轉向與補料閉環

狀態：**規格草案，未實作、未驗收**。所有尺寸、速度、時間、位置及人員配置均為示範假設，非實廠資料；不得從此文件推論可製造性或安全認證。2026-10-31。既有 G2、records、G3 code 不因本提案變更。

## 結論及最小範圍

應改動模擬狀態與資源合約，而非再偏移模型。推車須有獨立且持久的 body center / heading；員工在把手外有可達操作站位；停泊、接手、轉向、退車、脫離均有時間與占位。AGV 同版補上有時間的原地 TURN。只涵蓋既有三站、六車、兩員工、一補料車、一 AGV；不加多人推車、多 AGV 避碰、倉儲或動態路徑規劃。

可分兩階段，但不得把第一階段的邏輯原型當已修好的畫面：
1. **A：拓撲／尺寸核定＋新 G2.1 邏輯候選。** 先完成幾何資源衝突表，才做 pose／TURN／鎖／班段／ledger／replay；獨立測試不替換原 G2。
2. **B：G3 adapter/model 接新紀錄＋全掃掠與真實畫面驗收。** 先證明數值連續、真 mesh 掃掠及保守包絡，再於獲准可用環境驗證實際渲染。缺任一門檻仍標未驗收，不發布或回填舊紀錄。

沒有工期承諾；本次僅寫必要變更提案，不授權或執行程式修改。

## 1. 現況證據與不能採用的修補

- `slice-g2/engine.js` constructor：cart 與 H0 同點，只有 task/node/position/loaded，沒有持久 heading、attachment、停泊狀態。
- `elapse()` / `RecordedReplay` 的 TRAVEL projection：補料 cart.position 直接複製 worker.position；`beginReplenish()` 回程完成再將 cart 寫回 H0。
- `dispatchReplenish()` 預估為裝卸＋往返直線路段，未含轉彎、接手、泊車、從把手離場。
- `slice-g3/state-adapter.js`：cart.heading 由 task.worker 的 heading 取得；模型子層沿 heading 後偏 1.1 m。父層診斷 shortage seq28 反向時，這種派生使車身中心跳 2.2 m 並穿架。這是已知診斷，不是本文件另作 pixel 驗證。
- `slice-g2/routing.js makeDefaultNetworks()`：HP=[3,9]，P-OP=[3,7.5]，PW=[3,10]；主幹與 OP 僅隔 1.5 m，PW 目前仍允許多人節點容量，不能直接稱為獨占轉車區。人、車不同 graph 不等於物理包絡不相交。

**禁止**固定世界偏移掩蓋跳位；禁止只對顯示 yaw 平滑但不消耗事件時間；禁止把 cart 再複製到 worker、忽略空車回程；禁止只加 node mutex 卻放過旁邊 OP 或相鄰 edge；禁止把原人員 point graph 宣稱推車可通行。

## 2. 幾何先決條件：先核定，再分配座標

保持人車網分離的需求，但新建推車可通行子網與獨立 `CART_HOME` 泊位（不是 H0/HB 別名）。每個推車可行 node 對應 **cart body center**；普通步行 node 仍對應 worker root。步行接近泊位須有獨立 `HANDLE_ACCESS` 接點。

每個轉向節點提供：可接受入／出 heading、轉向方向、中心、cart body/載貨/把手包絡、worker 繞行弧包絡、相鄰 conflict resources。沒有這些資料的轉向不准派工。

- 將 PW（以及 repair 使用的 QW）改為 cart 專用 leaf service/turn bay；其他 worker 經過不得進 bay。AW 不因名字存在就開放推車。
- CART_HOME 具固定停車 heading、有限容量 1、接手／離場路徑與裝料界面；停泊後 body pose 不隨 worker 變動。
- 現有 HP/HA/HQ 主幹、P/A/Q-OP、料架與 PW/QW 間距必須重新檢查。**尚未核定新座標**。若完整 turn bay 侵入 OP、等候區或料架，應重排主幹／補料 bay／料架；只在可清空的動態區域才允許新增排他鎖。靜態料架碰撞不能用鎖修復。
- 每個 turn bay 的保守掃掠半徑由 cart+最大載荷角點、把手、員工 body/arm 的實際 footprint 算出，加明示候選 clearance。不可沿用 1.1 m 顯示偏移當已證明可達的 handle offset。
- AGV 每個 junction/leaf port 也需完整載具＋bike/pallet 的旋轉包絡；AGV 只有一台仍可能撞站點／貨架，單車不免驗。

依賴輸出：新 topology version、帶尺寸圖、geometry version、每個動作對應 conflict-resource 清單、禁止動作清單。最小路線若有任一不可解轉彎，停在 G1 規格門，不生成成功假路線。

## 3. 狀態模型與姿態契約

新增獨立版本 schema，以下欄位是提案，不是現行 API：

| 實體 | 持久狀態 | 不變量 |
|---|---|---|
| cart | id、bodyPosition、heading（連續角）、node、taskId、workerId、attachment、loadOwner、state | 始終一台；bodyPosition 是核心真值，空車也不消失 |
| worker | position、heading、taskId、attachmentId、mode | 同時只做一任務；attached 時把手接觸依幾何約束計算 |
| AGV | bodyPosition、heading、cargo、actionId | heading 不是下一路段直接重設；cargo 隨剛體變換 |
| action | id、type、durationMs、remainingMs、fromPose、toPose、signedAngle、trajectoryVersion、resourceOwners | 只有核心整數毫秒 clock；開始及完結事件一次 |
| bay | id、capacity=1、owner、conflicts、geometryVersion | owner 必須對應存活任務／已停泊實體 |

固定 forward 向量／yaw 座標慣例，沿用核心 planar `[x,y]`；world `[x,h,-y]` 只是 adapter 轉換。

`handleWorld = bodyPosition + R(heading) * handleLocal`。
`workerRoot = bodyPosition + R(heading) * operatorRootLocal`（附著時），掌心依姿態接觸 handleWorld。
`operatorRootLocal`、handle 高度、手臂長度須用同一幾何檔驗算。不可讓腿在箱內或根站在車體中心；無法保持手部可達的姿態不得通過幾何門。

## 4. 最小動作序列（含空車）

`PARKED → WORKER_APPROACH → CART_ATTACH → LOAD → CART_TRAVEL / CART_TURN → DELIVERY_WAIT → UNLOAD → CART_TURN / CART_TRAVEL → DOCK_ALIGN → CART_DETACH → PARKED`，員工另接 `WALK_TO_HB → REST/OFF_SHIFT`。

- WORKER_APPROACH：員工獨立走到 HANDLE_ACCESS；cart 完全不動。抵達重查班段、可達性、材料／rack reservation；失敗可原子撤回未開始保留。
- CART_ATTACH：root 從接點連續移至 operatorRoot，接手耗時；完成才 attached，開始前已獨占 attachment sweep。不能在 commit 時傳送員工。
- LOAD / UNLOAD：保留原 finite material source/destination reservation 及 pickup/deliver 交易語義；cart 在合法 loading pose；未完成不得提前扣料／釋放。
- CART_TRAVEL：cart center 沿新 cart 可行 segment；heading 固定，worker 在把手外隨車平移，核心分別記 pose。完整包絡保有需占用的 route resources。
- CART_TURN：body center 停在核定 bay，heading 按已選 signedAngle 連續；worker root 沿把手後側的圓弧走，手與把手保持可達。180° 左／右不可事後任選；配置允許方向與 deterministic tie-break，全部方向都不合就等待／拒絕。輪式硬體是否能原地 pivot 是未驗證機械假設，不可稱實車動力學。
- DOCK_ALIGN：末段停車方向須經合法 TURN/短 segment 達成；不得 set position=home 修正誤差。CART_DETACH 有時間、員工離開弧／步行線，直到完成才釋放人車附著；泊位本身仍被 cart 占用。
- AGV_TURN：到節點停車後，以非零時間原地連續轉向；完成才可走下一 segment。末端裝卸要求 heading 也需 TURN 達成；cargo 始終只一份。

### 時間候選（僅為可測初值，待尺寸門核定）

- CART_ATTACH / DETACH 各 2,000 ms，皆須獨立可調。
- Cart TURN 基本候選角速率 15°/s，即 90° 至少 6,000 ms、180° 至少 12,000 ms；另限制 worker 弧行速度 ≤0.6 m/s，取 `ceil(max(abs(angle)/omega, arcLength/walkSpeed)*1000)`。所需 duration 以已核定弧長計算，不能只用固定數字壓縮。
- AGV TURN 候選 30°/s，90° 3,000 ms、180° 6,000 ms；負載包絡核定後才可採用。不增加多車避碰主張。
- 每動作使用明定 trajectory profile/version；首選可解析、單調連續 profile。若用 smoothstep，時間公式須使用 **峰值**速度（係數 1.5），不是平均速度。這些速率不代表已通過加速度、jerk、摩擦或人體工學驗證。

## 5. TURN / bay / edge 資源合約

新 `TURN_BAY:<id>` 鎖不能取代 conflict 清單。一次原子預約：bay＋必要 incoming tail/outgoing edge＋所有與旋轉／worker弧相交的 node/edge/OP/service-zone；先失敗不部分占有，既有已開始動作的安全占位不能撤銷。

- 計畫路段進 bay 前須已預約 bay 與下一可停點；不進入狹段才發現無法轉彎。
- incoming edge 不在 center 到節點時就釋放：需 cart 尾端和 worker 全部清空；可保守持鎖到 TURN 結束／離開包絡，不假裝 point-node 即 clearance。
- TURN 完成可釋放的資源依完整包絡退出判斷；仍停在 bay 時保留 bay occupancy，不能只因 action completed 解鎖。
- OP 若與 sweep 相交，先等員工完成服務並實際撤離到不衝突的等待點；不得 mid-service 消失。新增 zoning 不可把既有有限人員額外複製出來。
- cart parked bay 持續占位；task 完結不表示車位空了。原子 acquisition 採固定 resource ID 順序，同優先序按 requestedAt/taskId；禁止倒車／自行繞路逃鎖。
- 堵路或互鎖在 TURN 中發生：停止 action remaining、cart heading、worker弧與所有負載姿態，保有鎖；解鎖後續行。不能從停止姿態 instant reset 到初始／終點。
- 無可動診斷列 owner / waiter / requested resources / geometry拒絕 / 依賴環。若真死鎖，明示停滯與受影響任務，不自動 release 他人資源。

## 6. 班段、休息與延誤

`choose/reserve` 使用同一新 itinerary planner，包含：員工到接手點、接手、裝料、所有 cart travel+turn、卸料、空車返回+turn、泊車脫離、員工到 HB。不得只用 cart 最後 node 當員工退場路程。兩名員工技能／有限班段不增加。

- 完成上述全程恰等於 shiftEnd 可接受；超過 1 ms 拒絕。裝料前再次重查 remaining itinerary；reserve 與實際 durations 必須同源。
- 阻塞不可預知：若中途跨班，只允許已承諾物料安全卸料、空車安全停泊及員工退場；不開新生產／補料工作。安全例外事件明示 overtime 原因、負載、路段及鎖，不因跨班解除。
- 路被封且無合法安全停點：維持人／車占用、WAIT_SAFE_RETURN 診斷；不得假定已休息或趕到 HB。此處若要改為緊急泊位／他人救援，是另一範圍，不能暗加。
- 休息從實際到 HB 之後才可成立，保留既有保守規則：完整休息長度且不得早於上一班結束；返回時間侵占下一班則延後可派工時間。先前班未返場，不因新班開啟就可派任務。

## 7. Metrics / event / replay 合約

互斥主時間桶：worker 的 travel（單走＋推車直線）、turn、attachDetach、service、waiting、idle、break、offShift；同時只能一桶。overtime 子計數不是額外主時間。AGV 的 emptyTravel、loadedTravel、turnEmpty、turnLoaded、loading、unloading、waiting、idle。可另有 cart 狀態時間，但不能加到員工產能當額外勞力。

開始／完結／等待事件至少：CART_ATTACHED、CART_TURN_STARTED/FINISHED、CART_DOCKED、CART_DETACHED、AGV_TURN_STARTED/FINISHED、TURN_WAITING、RESOURCE_ACQUIRED/RELEASED、RETURN_OVERTIME；payload 含 owner、from/to pose、signedAngle、duration、geometryVersion、trajectoryVersion、鎖集合。事件命名尚可統一，但語義不可缺。

- 核心 clock 唯一；TURN 與 TRAVEL 一樣由 remainingMs 驅動。Replay 不調度、不重新尋路、不以 `Date.now`／動畫秒數插值。
- checkpoint 持久化 cart/AGV heading、worker pose、attachment、turn phase、bay occupancy；時間 seek 可只計算該 recorded action 的解析中間姿態，不能用下一路段 heading 補猜。
- 同毫秒 PAUSE 優先僅限 command 已在該 due commit 前排入事件隊列：completion 留 pending，不執行 release；RESUME 依固定 time/priority/actionId 完成一次。明確記錄 command cutoff／提交序；若同 time 的 completion 已先以 seq 提交，後來的 PAUSE 不可倒帶、撤銷或重新執行。exact seq 與 time seek 的既有差異保留。
- 舊 record version 保留原解釋，標示舊版無真實 TURN；禁止補造事件讓 G2 像曾模擬過轉向。新版另有 configHash/schema/version，不能用同一 hash 裝新幾何。

## 8. 驗收門檻及證據

| 門檻 | 進入條件 | 必須證據／退出條件 |
|---|---|---|
| G1.1 規格 | 本草案、已知反例 | 核定泊位/把手/turn bay/主幹/OP/料架尺寸；每個允許轉向及 conflict 表；PW/QW 專用 leaf 的人工推演；所有安全未定項有明確阻擋，不是默認安全 |
| G2.1-A 邏輯 | G1.1 通過，另建候選授權 | deterministic tests/trace 全部通過；有限資源、班段、材料與時間守恆；新舊 record 隔離；無跳位與完整 pending commit；不能只報測試數字 |
| G3.1-B 幾何 | 新邏輯可重播 | 真 mesh/保守 sweep 含body、輪、handle、worker及最大cargo；最接近距離和具體反例輸出；正常與異常都驗；仍不等於動力學安全 |
| 真畫面 | 有正式授權可用 renderer | 直接渲染同一記錄，近景接手/90°/180°/空車停泊/暫停 seek；無假動畫；未能 render 就保留未驗證，不繞權限 |

必要情境：
1. 空車獨立泊位等待：其他 worker 行走／轉頭，cart pose 完全不變。
2. shortage seq28 類 180°復現：body center 不跳；worker 弧連續；把手接觸／腳地面有據；至少另含 90°左/右。
3. PW/QW leaf 交付後反向空車回程；已裝／空載各驗；車在 home 泊好才可釋放任務。
4. bay／OP 被占、incoming/outgoing edge 堵塞、相向步行：沒有部分搶鎖或透過點容量穿過實體。
5. 裝卸開始前缺員／缺料／rack滿：不開始、無扣料；搬運後 blockage 保有 inTransit；只在卸料 commit 改 ledger。
6. 轉向 0/1/50/99/100% 暫停、互鎖、精確事件 seek、跨 seq 重播，pose/heading/owner/metrics 重現；100% pending 未釋放。
7. 同時 TURN 完成、PAUSE、班終及補料完成：排序可人工推演、恰好一次；班段邊界 end / end+1 ms；延誤侵入下一班且不能立即接單。
8. AGV 帶 cargo 90/180°含 port 向向要求；一車仍占用 turn resource；cargo位置連續且只一份。
9. 幾何拒絕或環狀等待時的無可動診斷；不把停滯計為已完成、休息或成功吞吐。

守恆：始終 cart=1、AGV=1、workers=2；每 worker 最多一 active task；每 cart 最多一 attachment owner；每個 resource owner 唯一且存活；所有 released serial 恰一 authoritative location；每材料 external+line+inTransit+held 總量不變；TURN 不扣料、不製造 workpiece、不增加完工數；每員工及 AGV 主時間桶和等於 simulation time；所有 release/commit 僅一次。

## 9. 最小檔案責任建議（尚未實作）

- 新 pose/itinerary 模組：坐標／heading／turn profile、時間估算；給 core 與 replay 共用，不能各一套。
- routing 候選：typed nodes、cart eligible edges、bay/conflict reservation、物理退出釋放。
- personnel 候選：完整 itinerary 可行性、附著約束、晚返休息；不自行推進時鐘。
- engine 候選：唯一 scheduler、actions/metrics/material commit、新 schema snapshots。
- adapter/models：只讀新 pose；移除以worker heading後偏當cart root的解法，舊record明示限制。
- audit：唯讀獨立邊界案例與 sweep；不得與實作者共改被測檔。

不做的事項：不改整廠規模、不改生產工藝、無人員疲勞模型、無物理引擎、安全認證、緊急救援調度、多推車交通最佳化。上述任何新增需要另提案。

## 10. 獨立 audit 補充（2026-10-31）

已與 `/root/audit_factory_slice` 對照，補成明確退出條件：

- `returnCart → detach → walkHB` 必須有三段可追蹤真事件及連續姿態；CART_HOME 不是 HB，不可卸完料即車消失或員工瞬到休息區。
- 若 bay sweep 跨人行／AGV 網，需**跨網共用的空間 mutex**，或重排佈局；僅各圖 edge lock 不足。對靜態料架仍只能重排／縮減允許路徑，不以 mutex 豁免。
- 取消未開始任務可回滾其未開始 reservation；已載料或 TURN 中取消不得直接回倉／重設 pose。最小版採 `CANCEL_PENDING_SAFE_STOP`：保有 physical resources 和 inTransit，合法停點且完成後續處置前不宣稱 CANCELLED；若無已定義安全處置則停滯診斷，不自動加救援能力。
- 連續性檢查涵蓋 cart body／貨物／把手／worker 的**實體姿態**，不是只檢查 actor root；轉前、中、後不准改 local offset 消除碰撞。
- 同毫秒加測 TURN_COMPLETE + SERVICE_COMPLETE + PAUSE 的排序，seq seek 恢復角度、把手根、鎖、remainingMs；事件優先序不能由渲染更新順序決定。
- 實作前鎖存原 G2 五個核心檔（engine/personnel/inventory/routing/config）及原 records 的 hash manifest，完成後比對不變；新版本與新記錄另存。此文件未生成或改寫原紀錄。

Audit 二次文字校核：正常及可解除阻塞情境必須在已定義有限上界內完成返車／脫離／HB閉環；上界由固定 itinerary、服務時間及情境明定的阻塞解除時間推導。不能只因正確顯示 deadlock 就算正常驗收通過。固定 resource acquisition 排序不足以保證持鎖再索取不形成循環，需檢驗整個等待圖與允許的轉移協議；只有刻意注入不可解循環的負面 fixture 可預期停滯且正確診斷。
