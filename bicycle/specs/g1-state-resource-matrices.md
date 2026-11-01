# G1 狀態與資源矩陣 — proposal-2

**2026-10-31；全部是提案假設。只供人工推演，未實作／未驗收。** 配合 `minimal-slice-spec-G1-draft.md` 第13節與 `g1-route-proposal.svg`。本矩陣不把外觀當成資源模型。

## A. 資源清單

| 資源 | 容量 | 取得者 | 釋放的唯一時點 |
|---|---:|---|---|
| W1/W2 | 各1任務 | 合格且班段足夠的任務 | 任務結束／未開始取消；在途不得硬釋放 |
| P/A/Q夾具 | 各1車 | 對應服務任務 | 站內移轉完成，非服務結束 |
| P輸出 | 2車 | P站內移轉先預留 | AGV裝載完成 |
| A輸入 | 2車 | P→A運輸預留 | A上料至夾具完成 |
| A輸出 | 1車 | A站內移轉預留 | AGV裝載完成 |
| Q輸入 | 1車 | A→Q運輸預留 | Q上料至夾具完成 |
| Q-G/Q-S | 各1車 | QC人員站內移轉預留 | V1裝載完成 |
| FG/報廢終端存放 | 各6車 | 終端運輸預留 | 本切片不釋放，保留實體與帳務 |
| 站內通道／物流端口 | 每站各1鎖 | 站內移轉或AGV裝卸，互斥 | 對應移轉／裝卸完成 |
| V1載位 | 1車 | 已預約運輸任務 | 目的卸載完成 |
| AGV邊與等候節點 | 每邊/節點1 | 同一V1任務或封路注入 | 確實離開；封閉由解除事件釋放 |
| 人行邊 | 每段1，雙向共鎖 | 行走員工（包括推車） | 確實走離該段 |
| 站外等候灣PW/AW/QW | 各2人 | 等候／行走目的預約 | 人離開該位 |
| H0/HB | 各2人 | 出入班／休息 | 人離開該位 |
| 補料推車 | 1台 | LINE_REPLENISH員工 | 完整補料後空車回源並停妥 |
| 零件料位 | 依主規格分料號 | BOM/補料預留 | 取料／卸料原子轉帳；預留不是消耗 |

**補充關鍵閉環：A/Q輸入→夾具也需要有人上料，不能瞬移。** 使用ASSEMBLY/QC員工，8秒；預留員工、夾具、源輸入位、站內通道。完成才釋放源輸入位並建立夾具占用。上料完成後若原員工班段足夠可直接續服務，但仍生成獨立任務完成／服務開始事件；不夠則釋放員工，工件留夾具等另一合格者。

P從零件料架取料到備料夾具包含在45秒備料服務的首步，須在步驟起點明確扣料；不另設虛構輸入搬運。

## B. 任務取得／執行／釋放矩陣

`R`＝預留；`O`＝實體占用。資源不足時預約交易全部回滾；已經O的資源不回滾成不存在。

| 任務 | 前置 | 接受時取得 | 執行時間假設 | 完成事件與釋放 |
|---|---|---|---:|---|
| P備料 | 未投料序號、整份BOM可用 | 合格W、P夾具、BOM；人行路程另原子鎖 | 步行＋45秒 | 首步取料扣庫存；KITTING_FINISHED釋放W，P夾具仍O |
| P夾具→輸出 | P服務完成 | PREP W、輸出空位R、P通道；夾具原O | 到站＋8秒 | INTERNAL_TRANSFER_FINISHED；輸出R→O、夾具釋放、W釋放 |
| P→A/A→Q運輸 | 源輸出有貨 | V1、目的輸入R、端口與完整路線權利 | 空走＋裝6＋載走＋卸6 | 裝完釋放源O；卸完目的R→O，釋放車與路權 |
| A/Q輸入→夾具 | 輸入有貨、夾具空 | 合格W、夾具R、站內通道；源原O | 到站＋8秒 | LOAD_FIXTURE_FINISHED；源釋放、夾具R→O；W釋放/重新續派 |
| A裝配 | 正確套件在A夾具 | ASSEMBLY W、A服務權；夾具原O | 到站＋90秒 | PROCESS_SERVICE_FINISHED；釋放W，夾具保持O |
| Q檢查 | 裝配車在Q夾具 | QC W、Q服務權 | 到站＋30秒 | INSPECTION_FINISHED(PASS/FAIL)；釋放W，夾具保持O |
| Q返工 | 一次FAIL且未返工 | REWORK W、耗材1包R、Q服務權 | 到站＋40秒 | 首步扣耗材；REWORK_FINISHED釋放W，另派30秒再檢 |
| A→輸出/Q→G或S | 服務或品質判定完成 | 合格W、目的R、通道與端口鎖 | 到站＋8秒 | 移轉原子提交；釋放夾具/W/通道，建立目的O |
| GOOD_TO_EXIT | Q-G有GOOD | V1、FG槽位R、Q與EXIT端口、路權 | 空走＋裝6＋載走＋卸6 | EXITED；釋放Q-G/車/路權，FG槽位O |
| SCRAP_TO_STORE | Q-S有SCRAP | V1、報廢終端槽位R、端口、路權 | 同上 | SCRAP_STORED；釋放Q-S/車/路權，終端槽位O |
| 補料 | 缺料請求、外部源有料 | LINE_REPLENISH W、唯一推車、源料R、線邊空位R | 到源＋裝10＋推行＋卸10＋空車返源 | 卸料才增加線邊庫存；返源停車才釋放W/推車 |
| 班末退場 | 無進行中服務或載物 | 人行回HB路權 | 距離/速度＋合法等待 | AT_BREAK_POINT；BREAK或OFF_SHIFT，不再接任務 |

站內移轉與上料優先屬「解除已阻塞生產」；當有多個候選時按等待起點、車序號、任務ID排序。服務任務不得讓後來新車越過已占夾具的車。

## C. 狀態轉移與拒絕條件

### C1. 工件

| 當前 | 事件 | 下一狀態 | 不成立時 |
|---|---|---|---|
| ORDERED | BOM_RESERVED | MATERIAL_RESERVED | 整份不足→WAIT_MATERIAL，不能部分占料 |
| MATERIAL_RESERVED | KIT_PICK_STARTED | KITTING，序號計入投料 | W/班段/夾具不足→不扣料 |
| KITTING | KITTING_FINISHED | KIT_ON_FIXTURE | 仍在P，不提前出料 |
| KIT_ON_FIXTURE | INTERNAL_TRANSFER_FINISHED | P_OUTPUT | 無輸出位→BLOCKED_OUTPUT |
| P_OUTPUT | VEHICLE_LOAD_FINISHED | ON_V1 | 無車/路權/目的位→源留貨 |
| ON_V1 | VEHICLE_UNLOAD_FINISHED | A_INPUT | 仍需人工上料 |
| A_INPUT | LOAD_FIXTURE_FINISHED | A_ON_FIXTURE | 無人/夾具→留輸入位 |
| A_ON_FIXTURE | ASSEMBLY_STARTED/FINISHED | ASSEMBLING/ASSEMBLED_ON_FIXTURE | 無人→等待；完成不移位置 |
| ASSEMBLED_ON_FIXTURE | INTERNAL_TRANSFER_FINISHED | A_OUTPUT | 等人/輸出位 |
| A_OUTPUT→ON_V1→Q_INPUT | 裝/卸完成 | 對應實體位置 | 同P→A約束 |
| Q_INPUT | LOAD_FIXTURE_FINISHED | Q_ON_FIXTURE | 無人/夾具→等待 |
| Q_ON_FIXTURE | INSPECTION_FINISHED PASS | GOOD_ON_FIXTURE | GOOD計數，但未EXITED |
| Q_ON_FIXTURE | 首次FAIL | REWORK_REQUIRED | 等技能/耗材，不放掉夾具 |
| REWORK_REQUIRED | REWORK_FINISHED | REINSPECT_REQUIRED | 不直接算GOOD |
| REINSPECT_REQUIRED | 再檢PASS/FAIL | GOOD_ON_FIXTURE/SCRAP_ON_FIXTURE | 最多一次返工 |
| GOOD/SCRAP_ON_FIXTURE | INTERNAL_TRANSFER_FINISHED | Q-G/Q-S | 目的滿則保留夾具 |
| Q-G/Q-S→ON_V1 | VEHICLE_LOAD_FINISHED | ON_V1(品質不變) | 來源位到裝完才釋放 |
| ON_V1 | 終端卸載完成 | FG_STORED/SCRAP_STORED | 永久留有限終端槽，沒有自動清除 |

### C2. 員工

`OFF_SHIFT → AVAILABLE → RESERVED → WALKING → WORKING/TRANSFERRING → AVAILABLE`。

- 等路權：`WAIT_WALK_ROUTE`，占原等候位；不能在此時替別站工作。
- 完成任務後距下一工作地仍要走路；不在每次指派時重置人物位置。
- 班末：`AVAILABLE/任務完成 → RETURNING → BREAK/OFF_SHIFT`；超班退場明示`RETURN_DELAY`，不是生產工時。
- 未知阻塞使到站時剩餘班段不足：取消未開始任務預約，轉RETURNING。已取在手的材料則先依安全處理任務完成落位，標記異常待處理；不能直接消失。此情況必須另列exception，不能默認一律成功。
- 全局PAUSED：保持原狀態並有run層凍結旗標，不把所有員工改成AVAILABLE。

### C3. 工站

`EMPTY → RESERVED → LOADING → READY → PROCESSING → SERVICE_FINISHED → WAIT_INTERNAL_TRANSFER → UNLOADING → EMPTY`。

READY等人／等品質返工不等同EMPTY；SERVICE_FINISHED與BLOCKED時間不計加工。Q再檢在同一夾具O下重入READY/PROCESSING。

### C4. 車輛

`IDLE → RESERVED → EMPTY_TRAVEL → LOADING → LOADED_TRAVEL → UNLOADING → IDLE`；任何合法節點可進WAIT_ROUTE/WAIT_PORT，帶原位置和載荷。目的料位在派車時已R，不能被其他任務占走。載入前不得持有一台不存在的工件；載入後不得同時讓源位持有它。

### C5. 路權

`FREE → RESERVED(owner) → OCCUPIED(owner) → FREE`；封閉另為禁止授權旗標。

封閉不能清掉既有owner。若占用中封閉，車/人安全停止且鎖保留；解除才續行。預約未進入的邊可安全撤銷，但必須同時回退整個尚未出發任務；不部分退還後仍宣稱原路可走。

## D. 可人工逐步推演的最短閉環

以下時間符號避免假裝已算出精確產能。`walk(x,y)`與`drive(x,y)`應由圖的座標與速度算出，不能任填。

1. t0：B001 ORDERED；W1在H0、W2在HB、V1在V-HOME。所有料、位置、路權列於初始快照。
2. 接受P任務：原子R一台份BOM、P夾具、W1。W1先走到P；走路未到，P不得開工。
3. W1到P並通過班段重檢；取料步驟扣一次BOM；45秒後服務結束，W1釋放，B001仍在P夾具。
4. 另派W1（或另一PREP合格者；目前只有W1）移轉8秒，B001到P輸出，P夾具釋放。
5. V1先從HOME空走到P；裝6秒才釋放P輸出；載貨走到A；卸6秒才占A輸入並釋放V1。
6. 合格ASSEMBLY員工走到A，上料8秒後釋放A輸入；另開始90秒裝配。完成只釋放員工，不移車。
7. 合格人員再移轉8秒到A輸出。V1從自己當前位置接貨，不從HOME或A憑空生成；送到Q輸入。
8. W2走到Q，上料8秒，再做30秒檢查。PASS計GOOD，車仍在Q夾具。
9. W2另移轉8秒到Q-G；V1到Q裝6秒，送FG卸6秒。EXITED計數+1、FG槽位O+1，Q-G釋放。B001帳與事件鏈閉合。
10. 將第8步改為FAIL：先返工40秒消耗1包，再檢30秒；若再次FAIL，走Q-S→報廢終端。不得走GOOD支線。

每步人工核對：車唯一位置、材料帳、員工所在地/任務、夾具與緩衝R/O、車載與路段owner、事件seq、相應KPI增量。

## E. 邊界情境補充驗收

- **Q-G滿**：Q下一GOOD仍留夾具；先派V1送Q-G至FG，完成裝載釋放Q-G後才可派員工移下一車。不能先釋放Q夾具。
- **Q-S滿**：先派V1送已有隔離車；若報廢終端滿則整段合法停住，顯示原因，不「定時清空」。
- **相向人行**：W1帶補料車從HP到HQ、W2欲HQ到HP；只有先取得全路權者走，另一人在離線等候灣；不得同段交錯或穿模。
- **班末**：即使服務本身放得下，但回HB或空推車回源放不下，拒接。突發封路導致退場超班，產生RETURN_DELAY並單列秒數。
- **暫停同時完成**：在裝卸完成同毫秒送PAUSE；期望車仍持有貨、目的仍R、完成事件在due隊列。RESUME後只提交一次，目的R→O、車清空；重播同eventSeq得相同hash。

## F. 審查狀態

路網、物料、人員、站內搬移、終端出口、隔離清空、班末與暫停邊界已有明確提案。但仍需人工逐情境推演與使用者接受假設才算G1通過。**無新程式，無G2/G3驗收結果。**


## G. 可計算路網清單（座標全為假設）

單位m，平面座標(x,y)，折線各邊長度由端點歐氏距離計算；圖不作施工量尺。

- 人行節點：H0(0,9)、HB(0,11)、HP(3,9)、HA(9,9)、HQ(15,9)、PW(3,10)、AW(9,10)、QW(15,10)、P-OP(3,7.5)、A-OP(9,7.5)、Q-OP(15,7.5)。
- 人行無向邊：H0-HB、H0-HP、HP-HA、HA-HQ、HP-PW、HA-AW、HQ-QW、HP-P-OP、HA-A-OP、HQ-Q-OP。每條邊容量1，兩方向共鎖；交點不可停等。PW/AW/QW各2個離線等候位；H0/HB各2位。
- 車行節點：V-HOME(0,2)、VP(3,2)、VA(9,2)、VQ(15,2)、VJ(18,2)、P-PORT(3,4.5)、A-PORT(9,4.5)、Q-PORT(15,4.5)、V-EXIT(18,4.5)、V-SCRAP(18,0.5)。
- 車行無向邊：V-HOME-VP、VP-VA、VA-VQ、VQ-VJ、VP-P-PORT、VA-A-PORT、VQ-Q-PORT、VJ-V-EXIT、VJ-V-SCRAP。每邊與停靠節點容量1；只有V1，封閉旗標不創造第二台車。
- 實體通道寬是主稿1.2/1.8m提案，不足以證明淨空安全；G3前須檢查設備包絡與線邊料架是否侵占。
- 站內固定搬移路徑從各站輸入／夾具／輸出錨點連接，長度/姿態須在G3幾何規格中定義，但G2先以8秒的明示原子移轉任務驗證位置與資源。不可將未定的機構尺寸包裝成已完成工業設計。
