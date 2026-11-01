## Optional single-AMR logistics slice — local checkpoint

The optional logistics switch replaces external raw-job arrival with one real DES-controlled iw_hub supply loop. Material is delivered only after a first-station worker and buffer are available and unloading finishes. Finite stock, in-transfer material, production WIP and finished parts conserve unique material IDs. Disabling logistics preserves the preceding production baseline. Default loading/unloading is24/30seconds, including operator motion; these are demonstration assumptions, not measured factory capability.

Native human walking and turns use original bone lengths, planted stance feet and measured palm offsets. The same task phase drives root movement, reach, grip, carry and release. Native AMR links use the supplied runtime axes, signed wheel distances and0–40mm lift. Four fitted payload pads are verified by36rays against actual lift triangles. A separate project-authored landing bench and corridor surface provide declared support geometry. Kinematic contacts are not a dynamics, ergonomics, load rating or safety certification.

The straight/curved roller conveyor GLBs and their public interfaces are staged but not activated. No crane geometry is available, and no bridge crane is fabricated. No autonomous navigation, ROS, traction or dynamic collision solver is claimed. This checkpoint has automated tests; real browser acceptance and a separate deployment commit follow after visual review. Older stage records below are historical.

## NVIDIA event integration — 2026-11-01

Current entry uses real NVIDIA Isaac Sim 5.1 worker and warehouse GLBs with local Three.js r187 core/addons. See [ASSET-SOURCES.md](ASSET-SOURCES.md) for exact sources, hashes, conversion changes and license context. Assets are not labeled CC BY. Publication was explicitly requested for this noncommercial project; no new agreement was clicked or accepted by the agent, and no unrestricted redistribution grant is claimed.

Named station workers have stable `worker:<stationID>:<index>` IDs. Actual machine allocation events assign and release those IDs, including fault/repair pauses. The replay controls seek or play deterministic illustrative processing gestures; the embedded evaluation clip is excluded. People stay at fixed workspots. Walking, pushing, hand contact IK, routing, ergonomics and physical collision have **not** been implemented or accepted. Simulation time is not delayed by the illustrative gesture. At most 40 native 101-bone people are rendered, with an explicit displayed/total warning; the complete logical workforce remains in the engine.

Rack, pallet and platform cart are separate selectable configuration objects. Their offsets and visibility persist in JSON and undo. Move guards protect the rear storage zone and support surface; unsupported pallets are temporarily hidden with a reason. Warehouse edits invalidate the prior simulation result, while warehouse visuals do not add buffer capacity or throughput. A static cart is not represented as completed logistics.

Build: `node scripts/build-line-planner.mjs` after committing source. It writes `dist-planner/` with immutable source SHA, file hashes and build ID. The configured public deployment target is the existing GitHub Pages site, `/BikeFactory/line-planner/`, from `main:/docs/line-planner/`; the root site is preserved. Deployment source SHA and actual online acceptance are recorded in the final handoff, not inferred from a successful local build.

The older sections below are historical QA records and apply to their named commits. They do not establish acceptance of the new NVIDIA integration.

# 產線規劃實驗室（本機 MVP）

此新增入口與 `slice-g3` 七情境唯讀回放完全獨立，沒有即時派工、MES 連線或實廠校準。基底為 `candidate/three-station-g21` 的 `fdd469516b30fd79a263a273552e9325f6d13e3a`，未修改舊引擎、回放或公開 docs。

## 啟動

不需安裝套件或 build。Three.js 0.187.0（r187）的 module＋core 已從官方 npm 套件固定版本內附於 vendor/，MIT 授權位於 vendor/THREE-LICENSE.txt；無 CDN。Node 20+、Python 3；在本目錄執行：

```sh
npm test
npm run dev
```

Chrome 開啟 `http://127.0.0.1:8876/`。或從 repo 根目錄的靜態 server 開 `/bicycle/line-planner/`。ES modules 需透過 HTTP 提供。

## 可操作項目

- 穩定工站／子工序 ID，新增、前後移動及頁內兩步刪除確認，最多 50 次撤銷。
- 每工序名稱、專用機台類型、台數、每件加工秒數、每台人力、指數 MTBF／MTTR；本站共用人員、站前有限等待緩衝。
- 全線班段、投料間隔、投料量上限、觀察窗／暖機、隨機種子。
- JSON v1 匯入先校驗後套用、配置匯出；儲存不依賴雲端。重新整理後恢復示範配置，需匯出保存自己的配置。
- 修改後隱藏舊結果；重新模擬產出、完工件前置時間、時間加權 WIP、名目平衡、各站及逐台 uptime／利用率、忙碌／故障／缺料／等人／堵塞／班外機台秒。
- 真 Three.js 場景與表單／引擎共用配置 ID；新增 N 台就是 N 個獨立機台群組，增減／刪除時釋放舊幾何與材質，重排更新布局與流程箭頭。點機台反向選取表單與結果，表單工序欄位或定位按鈕可定位機台。
- 設定比較基準，顯示產出、前置時間與 WIP 差；逐工序增一台的敏感度提供改善候選，配合負載與阻塞／缺料證據。

串行路由直接由工站陣列及子工序陣列順序定義，沒有隱藏跨站依賴，因此刪除時明示自動接續。空產線、空子工序、重複 ID、零機台、非法工時等均拒絕模擬。詳見 [ENGINE.md](ENGINE.md)。

## 驗證

`node --test tests/*.test.js`：18 項引擎測試、4 項編輯器狀態／事件契約測試、6 項真 Three.js 場景圖測試及 4 項版本／造型契約測試、3 項投影邊界回歸，共 35 項。編輯器契約使用 DOM 替身；場景圖測試建立真幾何與材質但沒有 WebGL，均不能代替以下真瀏覽器驗證。

2026-11-01 MingdeMac-mini 真 Chrome 已操作：新增站、站序調整、子工序新增／改名／改工時後重算；兩步刪除與撤銷；組裝增機、基準比較、零機台拒絕；本機 JSON 匯入成功且重算，下載 JSON 與範例逐位元相同；逐台明細展開。第一版保存 6 張真截圖於本機 `evidence/`，未上傳。最終頁 console error 為空。早期使用原生 confirm 時控制工具卡住，已改為頁內確認並實測新流程；舊測試分頁關閉結果不確定。

示範 3600 秒、零暖機、充足供料、種子 42、全程排班、無故障：原三站 88 件／小時、平均 WIP 8.54 件；組裝增為兩台後 141 件／小時、WIP 12.37 件、前置時間 300.5 秒，改善候選移至品管。這是模型示例，不能當作真實工廠預測。

## 已知限制與後續資料

僅串行流程與同型平行機台、每工序專屬機台池；緩衝至少一件。不含任意分岔／返工、跨站共用機台／技能人力、搬運、換線、品質、報廢，現已建立獨立可編輯 3D 場景，未接入舊候選的自行車／員工／AGV 搬運回放。班段全線共用；尚在加工的人員於故障／班外保留分配；完成加工釋放人員，堵塞件保留機台，下一工序重新取得人力。單一種子敏感度不含信賴區間。期末保留 WIP，前置時間只取完工件，短觀察期會有截尾偏差。JSON 不保存即時排程／比較基準。

需提供實廠路由、工時分布／批量、機台共享關係與故障紀錄、技能／班表、緩衝與投料規則，再校準與驗證。未 push、merge、部署；公開網站不會因此改變。


## 3D 與獨立 QA 修正版

新增 `scene-model.js`（真幾何、穩定 ID、資源生命週期）及 `scene.js`（WebGL、raycast、視角、標籤），場景只能從配置建立。機台 ID 採 `工序ID:1-based索引`，與引擎結果一致；數量縮減保留前 N 個 ID，新增接續索引。工站／子工序 UUID 不隨重排改變。模型為程序化機台／治具示意，名稱不同不代表已載入對應實廠機型；沒有碰撞、人體工學、真實節拍動畫或設備額定能力。

2026-11-01 真 Chrome 完成新增站＋兩台、2→3→1→2、刪除／撤銷、重排、JSON 匯入、實際點 3D 第二台機器反向選取表單與同 ID 結果、改工時 17→23 秒後重算。反覆 12 次 2／3 台切換，總機台數只在 5／6 間，active 幾何＋材質只在 122／142 間，renderer geometries 只在 61／71 間；created−disposed=active，沒有殘留舊 ID。機台為真 WebGL mesh，非以卡片假裝 3D。此為有限次資源回歸，非長時間 GPU 記憶體壓力保證。紀錄 `evidence/3d-e2e.json`、截圖 `07`–`12` 留本機，未上傳。

獨立核心 QA 的三項修正已有回歸：合法 50 台／全線 200 台時敏感度跳過非法候選並保留原結果與原因；完工計數改為 `(warmup,horizon]`（單機 10 秒，50–100 秒為 5 件）；加工完成釋放人員，排除上游兩件各占一人、下游需兩人造成的人工死鎖。所有編輯、撤銷、匯入立即使舊結果失效，3D 結果置空灰色，重新模擬才套用同 ID 結果。顏色是觀察期彙總，不是即時機台開關狀態。限制候選另列跳過原因，沒有正敏感度時不宣稱找到瓶頸。

非法 JSON（stations 為字串）已在真 Chrome 驗證拒絕套用，原五台機台 ID 及既有 KPI 保留，見 evidence/invalid-import-status.txt。


## r187 視覺品質版（目前入口）

依 2026-11-01 使用者指定，後續規劃基準為 **r187**。目前入口已實際使用同套 `three@0.187.0` 的 core／WebGLRenderer，無 addon 或 CDN。原候選與 `df8d103` 的 r162 可回退；根目錄舊應用的 npm 版本屬凍結舊入口，未被混入本規劃器。逐段變更核對見 [MIGRATION-R187.md](MIGRATION-R187.md)。

組裝品質樣板包含車架管件、支承／定位夾具、工具架、零件盤、控制器與底腳線纜；備料為料架／料盒／秤台，品管為滾輪、護架、量表與探針。外殼倒角，塗裝／金屬／橡膠／塑膠／地坪各有材質；非金屬不靠高 metalness 製造亮面。自建程序化攝影棚產生 PMREM，使用 ACES 曝光、sRGB 輸出與 PCF 接地陰影，未使用未知授權 HDR／貼圖。MeshStandardMaterial 未啟用 r187 的 PhysicalMaterial EON，不能把效果歸功於未使用的功能。

造型預設依機台類型／工序／站名辨識，可在「3D 造型」明選備料／裝配／檢測／通用。這只變視覺子樹，不新增產能或改機台 ID。每台視覺零件依材質合併；超過 30 台使用精簡細節，仍保留全部機台與可選 ID。共享快取、合併幾何與材質分別記帳，離場明確清理環境、shadow map 與 renderer。`cachedGeometries` 是快取原型數；`ownedGeometries` 與 renderer.geometries 才反映合併幾何，不將少量快取冒稱整場只有十幾個幾何。

全線／工站／單機有不同取景，定位以短 ease 過渡並尊重 reduced motion。標籤碰撞時隱藏低優先項，所有機台仍可透過定位選單尋找。選取用底環而不破壞整機材質。塔燈與均 WIP 僅為觀察期彙總，展示工件不表示逐件 WIP，沒有假加工或搬運動畫。模型比例為示意，沒有實廠尺寸、連續碰撞或設備安全證明。

真 Chrome（Mac，Chrome 156，WebGL2）已確認 r187 載入、原三站與 200 台唯一 ID、增刪重排／撤銷／匯入、機台本體 raycast、同 ID 結果及資源回收。390×844 窄視窗無橫向溢出並完成增機重算；這是桌面 viewport 測試，未宣稱實體手機 GPU 驗證。2 秒連續重繪短樣本：三台約 99.9 FPS、200 台精簡約 100 FPS（1214×428 canvas、DPR 1）；不代表其他設備、長時間或含重建／模擬的效能。畫面量測按鈕不推進模擬，CPU draw 計時不是 GPU 時間。

完整前後圖、實測 JSON、測試輸出位於本機 `evidence/quality/`，未上傳或發布。舊版圖由 `df8d103` 的未修改本機快照取得；同三站配置、同觀察條件與角度。新版單機取景較近（4.8 對舊版 8），全景同角度自動包圍取景；並未把不同縮放假稱像素相同的比較。


## 全線取景邊界修正

獨立 QA 發現 0faa9b8 的 200 台全景末台中心超出右緣約 6.8px。全線取景現以完整工站、機台與流程線包圍盒的八角及標籤錨點（周邊裝飾地坪保留延伸，不壓縮設備取景），在目前相機方向／aspect 下解透視視錐約束，預留左右／上下像素邊距；不再用長寬比例猜距離或硬截距離。單機近景距離仍為 4.8，工站視角設定保留。調整配置且處於全線視角時會重核 bounds。

使用獨立 QA 原始200.json在 Chrome 實測：1214×428 canvas完整設備包圍盒投影x256.18–1128.65、y122.98–351.16，末台generic-op:50中心x1118.37；390px視窗的307×358 canvas投影x75.09–239.28、y158.46–201.59，均在預留邊距內。窄屏末台定位仍回到距離4.8；測後已恢復視窗。35項測試通過，包含多aspect／方向／仰角及全部200台完整mesh邊界。證據留本機evidence/framing/，等待獨立復驗。前段效能數字為品質版短樣本，不將此次取景修正視為新的效能放行。

### 滾筒供料切片（獨立 QA 候選）

`conveyor.enabled` 明確切換有限外部入料口供料，與 AMR 模式互斥；不是倉儲自動上料，也不是站間自動搬運。限定三站，工站改序後首站收料 ID 同步。可設 1–4 個原生 a05 直線段、1 個 a02 90°彎道、每段 1–3 個獨立積放區、載面速度、入口間隔與有限存貨。區域每區最多一件，只有下區空出才交接；首站緩衝滿時末區保留原物料，堵塞逐區往回傳。班外所有區域停止，現有生產停班語意保持。區域獨立啟停為本應用規劃假設，不表示 NVIDIA 原設備已有此 PLC。

同一 DES 事件時鐘控制物料距離、轉彎切線、區域啟停與原生滾筒轉角；無獨立空轉動畫。出口與首站緩衝握手成功才建立生產 job；來源、輸送在途、生產 WIP、完工依唯一 `material:conveyor:N` 守恆。輸送時間加權 WIP／區域運轉、堵塞、缺料、班外秒數另列；現有生產 lead time 仍從出口投產開始。期末台帳與重播時刻區分，顯示開關不改容量／產出，所有配置編輯／撤銷／匯入使結果失效。此版箱件原創幾何為 0.4×0.18×0.4m；入口為抽象外部供料邊界，出口接原創收料台，站內搬運至機台仍是抽象交接。沒有假稱自主搬運、物理碰撞或承載穩定求解。

實測原 GLB 幾何發現 v2 `conveyor-controls.mjs` 的共同 local −Z evaluation track 與 a05 物理長軸矛盾：a05 滾筒 mesh bounds X 約0.902m，Y/Z約0.058m；繞 −Z 會翻動圓柱而非沿軸自轉。a02 滾筒長軸則為 local Z（約0.903m）。本應用 `conveyor-scene.js::measuredRoller` 從未修改的原生頂點包圍盒量測各自軸線，依世界切線決定旋轉符號；軸端點不漂移回歸通過，原始 v2 controller／來源文件保留不覆寫。使用半徑來自原幾何短軸範圍；未聲稱錐面無滑動接觸力驗證。載面取原 roller crown 約0.7693m，不取最高護欄1.166m。掃描原生三角面於0.4m箱件足跡，冠頂與平箱底間距抽樣最大約0.9mm；縱向滾筒間隙不是箱底懸空證明，完整支承與承載仍需實廠校準。

滾筒穩定 IDs：`conveyor:straight:N`、`conveyor:curve:1`、其 `:zone:N` 與 `conveyor:receiver:<firstStationId>`。改段數重建 instance，不重複載入模板；共享材質／幾何僅於 scene dispose 一次清除，晚到載入亦清理。模型載入錯誤顯示於表單。AMR／外部供料原有測試保留。

匯出 JSON 會保留可點擊的實際下載連結，Object URL 只在下一次匯出或離開頁面時清理，不在1秒後提前失效。瀏覽器自動下載與事件通知不是同一件事；驗收另檢查實際下載 JSON 的版本、工站穩定 ID、配置值與 SHA。切換資產選取及任何配置失效時，旁邊機台說明亦清除舊 KPI，不能只清主結果面板。
