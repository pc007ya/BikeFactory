# G3工作單元幾何補充提案 — contact/dock proposal-1

2026-10-31。**方案文件，尚未核定或實作；以下皆展示幾何假設，非實廠量測、職安或完整碰撞驗證。** 本次只寫此文件，不修改G2、adapter或scene程式。配合 `bicycle/audit/g3-contact-clearance-criteria.md` 審查。

## 1. 不可改動與建議錨點

- G2操作根：P/A/Q平面 `[x,7.5]`，Three根為`[x,0,-7.5]`，x=3/9/15；不得平移人物根掩蓋差距。
- 機台根仍`[x,0,-6]`，後部控制櫃/立柱可留該座標系。
- **建議fixture展示根**改為`[x,0.78,-7.10]`；亦即站點局部`[0,0.78,-1.10]`。不是改G2工件位置或移動網路。
- 人物服務朝向+Z。肩點`S_L=[x-0.25,1.30,-7.50]`、`S_R=[x+0.25,1.30,-7.50]`。
- 若採-7.08，兩個管中心目標的肩距為0.437990/0.448050m；建議-7.10則為0.418850/0.429359m，留較多固定骨長裕量，不需要把手臂拉長到0.48m。

## 2. 真工件表面接觸點，不以懸空marker當接觸證據

現有自行車frame由半徑0.028m的圓柱桿構成，端點：

- A=(-0.59,0.39,0)、B=(0,0.40,0)、D=(0.48,0.93,0)。
- 左目標在A→B內部，局部x=-0.25，中心線y=0.3957627118644067。
- 右目標在B→D內部，局部x=+0.25，中心線y=0.6760416666666667。

兩條桿位於XY平面，朝操作員的實際管表面為中心線減Z方向0.028m（現有10段圓柱包含此方向的表面頂點，不是離管的任意點）。

| 定義 | 左手L世界座標 | 右手R世界座標 |
|---|---|---|
| 管中心線 | `[x-.25,1.175762712,-7.10]` | `[x+.25,1.456041667,-7.10]` |
| 真表面接觸C | `[x-.25,1.175762712,-7.128]` | `[x+.25,1.456041667,-7.128]` |
| 手掌球中心W（半徑.065） | `[x-.25,1.175762712,-7.193]` | `[x+.25,1.456041667,-7.193]` |

將腕／手掌中心定位於W，手掌前表面接觸C；不能把手掌中心直接塞進管中心線。肩→W距離約0.3312/0.3444m，均在兩段手臂可達範圍內。兩種點須分開測試：腕的骨長約束、手掌表面與實際mesh接觸；不得只檢查marker間距。

這些點是P備料核對／A裝配持件／Q檢查持件的最小展示接觸姿勢，不代表已刻畫每個裝配動作、扭力、施力或質檢方法。尚未實作的詳細工藝不能用此姿勢冒充。

## 3. 固定骨長、可解釋的兩段幾何姿勢

建議上臂0.24m、前臂0.22m，合計0.46m。取消以單一整根手臂正弦擺動冒充作業。

純展示解析構造（不是動力學或接觸力求解）：

1. `d=W-S`、`r=|d|`，先要求`|.24-.22| <= r <= .24+.22`；不可達就明示而非伸長或夾住距離。
2. `u=d/r`，`a=(.24²-.22²+r²)/(2r)`，`h=sqrt(.24²-a²)`。
3. 使用與u正交的向外肘方向p：左手-X、右手+X；本例d的x=0，因此可直接使用。
4. 肘`E=S+a*u+h*p`；建立S→E與E→W剛性幾何，各長度恆為.24/.22。
5. 手掌球中心為W；任何握持工具也必須有固定附著變換。

以這兩點計算，肘位約在肩外側0.15–0.16m，避免肘直接穿過胸前。肩的附著區允許與身體相接，但前臂／手掌不能穿入軀幹或工件。

姿勢只由adapter提供的動作／進度／接觸目標決定，沒有第二個時間軸。暫停與blocked保留相同姿勢；尋到相同事件seq須得到相同端點。開始/結束作業若安排收手，須有可解釋的動作區間，不能週期性鬆手後仍稱持續接觸。

## 4. 機台硬體調整提案與靜態包絡條件

### 4.1 工作側

- P工作面、A夾持器、Q輪組滾筒／檢查頭的**功能子組**跟fixture移至局部z=-1.10；控制櫃與非作業後部不必整台跟移。
- P延伸面前緣（朝工人，較負Z）建議不越過world z=-7.25，工作面高度依套件托盤支撐面計算，不穿入frame。延伸板用側立柱或後側懸臂支撐。
- A地面底座須留在world z>=-7.15（例如中心-6.75、深.45，前緣-6.975），由上方懸臂伸至新夾點；不能把原.75m深底座整體移至-7.10，否則會碰工人的鞋。
- Q滾筒頂須對齊車輪最下緣：fixture .78 + wheel中心.39 - torus外半徑(.35+.037) ≈ .783m。現有滾筒半徑.11，中心約.673m。支持台/腿保持在world z>=-7.15；位於x±.59的滾筒可以局部向前懸出，但要按實際人腳/腿bbox驗證，不能用整台粗bbox誤判或掩蓋。
- 人物胸前表面約world z=-7.385，工作面前緣-7.25留下約.135m；這只是展示幾何間隙，不是人體工學合格距離。鞋向+Z最前約-7.31，所以地面硬件前緣-7.15提供約.16m間隙。

### 4.2 人行主幹／支路

- 主幹world z=-9；提案寬1.2m，近機台邊界-8.4。新工作面前緣-7.25與主幹間尚有1.15m，不得把柱腳或工具箱延伸到該間隙內的既定操作支路。
- HP/HA/HQ到操作點的支路止於world z=-7.5；工作設備不得越過這個終點阻擋人體根。路網中心線不變。
- 側邊buffer仍依原slot錨點；須驗工件與料位外框完整包絡，而不是只比較buffer中心。此提案尚未調整其位置。

### 4.3 AGV端口與載貨包絡

現有低台座3.2×1.85m前緣到world z=-5.075；V1停在端口z=-4.5時，車身/載貨最前接近-5.52，確有重疊風險，不能只驗AGV路網中心線。

建議：原低台座改為**地面標線**（明示非硬件碰撞體），或改成有端口凹口的獨立側腳；不可只關閉碰撞檢查卻保留畫面上明顯的高台。

保守停靠展示包絡：

- V1根在`[x,0,-4.5]`，車長方向沿±Z。
- 車身橫向半寬約.475m；自行車沿載台方向長約1.994m（後輪-.977至前輪1.017），比車底盤更長。
- 提案驗收用車+載貨合併包絡：橫向`x±.50`、縱向`z±1.05`、高度`[0,1.75]`；端口朝機台界為z=-5.55。
- 與該橫向範圍重疊的硬件應滿足world maxZ<=-5.65，留至少.10m展示間隙；更寬裕建議maxZ<=-5.70。側柱若不在該橫向範圍，可按實際bbox另驗，不必假設整站大盒子都實心。
- 保守路段掃掠包絡為此載貨盒沿V1真實路段位移的union，並在拐點檢查轉向姿態。不能只測空車端點。

另發現需統一的高度問題：V1載台頂約.535m；現有cargo anchor=.48會使套件托盤底約.495／車輪底約.483，略穿載台。**建議cargo展示anchor提高至.54m**，純視覺子錨點，不改V1根或G2位置。此更動需adapter一起核定，尚未實作。

## 5. 8秒人工搬移與6秒裝卸仍是獨立缺口

把fixture移近操作員，只能修「人固定在OP時的加工接觸」。側邊buffer與OP/fixture的橫向距離可超過2.6m，而G2該8秒作業期間人物根不移；長.46m的雙臂不可能全程徒手追隨。

- 不能用長手臂、人物根漂移或忽然生成無人自動機構掩蓋。
- 若日後採有操作員持續控制的mechanical assist，須另定機構/資源/接觸與動作合約，未核定前不實作。
- 六秒載入／卸下的現有直線+抬高展示弧，亦可能在轉向時掃過控制櫃；如A_OUT→A-PORT從x11.6,z-6.6到x9,z-4.5，不能憑端口淨空就聲稱整段安全。
- 必須將整條handling路徑、工件完整轉向bbox、機台硬件與人體分開稽核；若依舊不通，就保持「handling機構與全程接觸尚未驗收」，不發布達標主張。

## 6. 統一接口後的最小驗收條件

1. G2所有根座標、序號、時間及資源狀態不變；fixture/cargo等新增展示假設明示。
2. 独立從世界矩陣讀肩、肘、腕、手掌表面與真工件mesh；驗固定骨長、接觸誤差及無穿透，不能只驗同一helper算出的marker。
3. 使用至少P備料、A裝配、Q檢查／返工及pause/seek紀錄；姿勢只依已記錄狀態。
4. 工作面/柱腳/支架與OP人體、主幹／支路無遮擋；車+實際載貨在路段及端點與硬件包絡不相交。
5. 區分「已通過靜態/數值幾何條件」與「實際WebGL畫面、動態接觸與完整碰撞未驗收」。
6. 8秒搬移與6秒裝卸機構另列，不能以靜態加工接觸通過代替。

**建議統一採fixture=-7.10、骨長.24+.22、真表面C/腕W如上、硬件AGV側maxZ<=-5.65與cargo=.54。這些仍是待審接口，文件提交不表示已實作。**

## 7. 新授權機械輔助移轉的待統一合約（替代第4.3節cargo=.54初案）

父代理收到機械輔助移轉授權，但目前仍在定規格。以下是新支撐/機構提案，**不是宣稱已實作**。不得僅把原先無接觸的滑動換名稱。

### 7.1 每序號持續托架與支撐高度

- 每個已投料序號配置一個持續托架，與該序號共用唯一工件根；從P、各buffer、V1直到FG/SCRAP皆保留，不每次搬運重生，也不憑空畫空載返回。托架是有限六個的展示handling附件，不能聲稱G2已模擬其購置/回收/失效。
- 建議托架上表面localY=0，下表面=-.06；工件根Y就是托架上表面。托架長2.04m、寬.70m、局部中心X=.02，使X範圍[-1.00,1.04]涵蓋現有車輪[-.977,1.017]；相鄰終端槽x間距2.1m還有.06m間隙，不採2.1m托架造成零間隙。
- 既有kit專用托盤要移除或整合到此持續托架，不能疊兩個托盤。未裝輪的車架需托架上的有限支撐鞍座，支撐實際frame桿；已裝輪時鞍座收回由車輪支撐，不將車架懸空.36m。
- **統一支撐等式：硬體支撐top = jobRootY - .06**（容許明示小間隙最多.005m）。

| 位置 | jobRootY提案 | 托架底 | 機台/支架top提案 |
|---|---:|---:|---:|
| P/A/Q fixture | .78 | .72 | .72 |
| 一般buffer | .35 | .29 | .29 |
| FG/SCRAP | .18 | .12 | .12 |
| V1載貨 | **.60** | .54 | 既有decktop .535，間隙.005 |

- P舊工作面top=.90必須降到.72，否則侵入托架。A不再把支柱穿過托架去夾frame，而是在.72承托托架，frame夾持屬托架自身治具。
- Q若rollers支撐托架，其頂應=.72、半徑.11時中心=.61；名稱是「檢查位托架支撐滾筒」，不能冒稱已模擬直接驅動車輪測試。第4.1節的直接輪胎滾筒高度因此不再適用。
- slots的支腿頂／橫梁改為anchorY-.06，底仍落地；料位標線可以在地面，不要把標線當承重支架。
- 新載貨盒可採X半寬.50、縱向半長1.05、高度上限1.80m，重新驗車+托架+車架而非舊空車bbox。

### 7.2 真正可見的軌道/托架/控制裝置

機構需要三項同時存在：

1. **導向軌道**：路徑由adapter與scene共用單一handling path函式，包含位置、姿態、支撐高度與端點。不能scene另畫一條漂亮軌、工件卻走舊直線。
2. **持續托架/導向從動件**：跟同一序號，實際連接到軌道接觸點；若升降/調平保持托架水平，必須畫出伸縮/連桿與支撐點，不能畫一條低軌卻讓托架浮在上方。軌道坡度、所需升降行程及端點與buffer/AGV支撐的交接要列數值。
3. **操作員控制**：8秒期間仍占原G2員工和工站，人在不變OP根上持續操作可達的控制器；控制姿勢與frame持件姿勢分開。不能一邊畫手抓車、一邊讓車離開2.6m，也不能把員工釋放後改稱自動移轉。

控制器的具體位置/尺寸、軌道升降機構形式與資源歸屬仍待統一。本文件不自行增加另一名員工、驅動器時鐘或車輛。六秒AGV裝卸也須有相應導向/交接硬體，不能因G2不占員工就省略實體機構。

### 7.3 剛性硬體與handling掃掠：須先檢查，不能保證直線成立

- 原側柱localX±1.35/localZ-.8、左側高排風箱均位於寬約2.04m托架的側向出口掃掠區，應移除或後置；不能只驗工件根線不碰柱。
- 高硬體可優先集中後側中央，但「世界z約-5.9～-6.1」不是自動安全：例如Q→Q_GOOD由(15,-7.1)至(17.6,-5.2)，其平移中托架完整矩形會掃到後側中部；六秒A_OUT→A-PORT還加入約90°轉向，會再擴大掃掠。
- 對候選直線路徑必須生成每個sample的world bbox（含旋轉、托架、frame、把手與工具），以同一進度函式掃過所有固定rigid meshes。先用保守union作broad-phase，再查有交集的實際幾何；不把透明標線列硬件，也不能把可見柱櫃偷偷排除。
- 使用sample步長使任一角點位移≤.01m且角度變化≤1°；另加端點與轉向極值。這是數值幾何檢查，不是連續碰撞的形式化證明。
- 支撐接觸面允許明示小容差；非支撐硬件提案最小淨空.05m，AGV停靠載貨與站硬件最小.10m。所有容差仍是假設。
- 若直線失敗，不應先把所有機械抹成低箱子：可提案操作側橫移後再轉向接近buffer的折線/圓角軌跡，但必須由共用函式供adapter/scene，端點與8秒/6秒duration不變，並重驗路程速度/加速度展示是否合理。**尚未取得掃掠結果前，不核定任一完整handling路徑為無碰撞。**

本新增機構需要一份共同函式及資源對應後才可寫模型；工作點接觸可以先被數值驗證，但不得以此替代機械輔助整段的驗收。

## 8. 上方Cartesian＋開口托架修訂提案（目前建議；取代第7節實心托架／地面導軌）

**最新討論方案；待lead/adapter/audit共同核定。此節優先於前述cargo=.54/.60、深.70的初案。所有速度與承載仍未物理驗證。**

### 8.1 開口托架的精確定義

- 托架外寬X=1.90、外深Z=.32、厚Y=.06；上表面localY=0、下表面=-.06。
- 側軌中心Z=±.15、Z厚.02，因此內面±.14、外面±.16。不能寫「中心±.16、厚.04」又宣稱外深.32，那實際是.36。
- 端梁中心X=±.93、X厚.04，外緣±.95；輪下X=-.59/+.63、Z=0保持開口。輪胎沿X端部略超托架，是明示外伸而非假裝被整面板支撐。
- frame由托架中央低夾持治具支承，真接觸frame下緣；不在輪下加實心面。kit舊實心托盤移除，維持每serial一個框架與唯一工件。
- fixture root保持[x,.78,-7.10]；外框朝人最近Z=-7.26，工人鞋前緣約-7.31，平面間隙約.05m。這不是職安淨空認證。
- handlebar局部Z±.18再加桿半徑.02，朝人最近約-7.30，但高度約1.88m；不能僅因平面間隙.01m就判腳碰撞，必須按世界3D幾何檢查胸/頭/手臂。
- **cargo rootY=.595**，托架底=.535恰好接既有AGV decktop=.535；不再使用.48/.54/.60初案。
- P/A支撐top=.72，普通槽top=.29，FG/SCRAP槽top=.12；腿落地。Q改為輪胎接觸滾筒，不是實心托架下滾筒。

### 8.2 Q輪胎／滾筒接觸

- 車輪中心Y=.78+.39=1.17；胎外半徑=.35+.037=.387；最低點=.783。
- 滾筒半徑.11，中心Y=.673、軸向Z長.24（端±.12）；托架側軌內面±.14，間隙各.02。
- 滾筒細軸可伸到Z±.28，但其中心Y=.673、半徑例如.025，頂=.698，低於托架底.72；外側軸承座不可升高穿過側軌。
- 只在`qc`檢查SERVICE轉動，不在outGood/loadQ等任意SERVICE轉動。輪胎與滾筒共用qc進度；提案輪胎3圈/完整30秒，結尾2π整數圈回同一視覺姿勢；滾筒反向角速度比用輪半徑/滾筒半徑，明示只是幾何相速，不是無滑移接觸力驗證。
- 暫停/堵塞保持相同progress姿勢，不以paused狀態清零角度。結束事件後若滾筒相位不是整圈，需由同一記錄歷史保存終角，不能突然重設0；或重新選使兩者結尾同姿態的比率/圈數，但不得偷偷改半徑。

### 8.3 可達hold-to-run控制台

提案buttons真表面為`[x±.13,.98,-7.26]`，面法向+Y；小台中心`[x,.95,-7.26]`、寬.40/深.10/高.06，頂=.98。

- 肩到button表面距=.417612m；若手球半徑.065、球中心位於button上方，腕中心`[x±.13,1.045,-7.26]`，肩距=.370169m，固定.24+.22m雙段骨可達。
- 台範圍Z[-7.31,-7.21]，人體軀幹前緣約-7.385，相隔.075m；地面支柱需留在鞋前，不任意加大底座。
- 加工左手球最低點約1.11076，高於控制台頂.98約.13076m；右手更高。仍需檢查整條前臂，不只比較掌心高度。
- 8秒移轉的提案分段：0–10%手到按鈕、10–25%空機構接近、25–75%載物、75–90%空機構回home、90–100%收手；手在機構活動的10–90%期間持續按住控制器。沒有新的員工或人員根漂移。
- 6秒AGV裝卸不占員工，保留G1自動假設；提案20/60/20空接近/載物/返回，只作時間分段待校正。

### 8.4 上方機構空間配置（兩個互斥選項）

**推薦較低高架選項**：刪除原2.35m雙側utility rail與側出口柱，機台固定高硬體限高1.65m且在後側集中；展示托架安全移動高度`safeTrayY=1.90`，底1.84，對1.65m硬件留.19m；grip/crossbar偏移=1.20，最高headY=3.10，固定beamY=3.60。home=`[stationX,3.10,-6.10]`。這只是包絡設計，實際角點還須驗。

若保留2.35m高機台硬體，則托架底要高於它，需safeTrayY約2.45、head約3.65、beam至少4.1；**不能同時保留原高rail又宣稱3m高架可讓載自行車通過。**

- 可考慮共用外圍架柱X=0/6/12/18，Z=-7.85及-3.20，柱寬.12；鄰站共用柱不重疊生成。操作支路X=3/9/15不變，主幹近邊Z=-8.4，AGV主幹近邊Z=-2.9。此候選位置的平面間隙仍須連同載貨轉彎掃掠驗證。
- 四點吊掛候選接在托架角部local[X±.93,Z±.15]，纜線須從真吊具連到真托架；不得畫線到空中marker。吊具橫梁在車把上方留幾何間隙。
- 每站一個持續Cartesian頭，以既有port互斥決定8秒/6秒唯一owner；空載接近、夾取、有載、放下、空載回home都呈現。機構不在任務結束瞬移回home。
- FG與SCRAP各有明示終端自動頭，繫於V1唯一卸載任務，不假裝三站頭能伸到遠端槽。終端軌道/支柱另需覆蓋X20/22.1和各槽列的完整包絡。
- 唯讀抽查正常G2紀錄1036個checkpoint，SERVICE內移轉與VEHICLE_LOAD/UNLOAD按P/A/Q端口分組未發現同站雙handling owner（0筆）；這只支持正常情境既有port互斥，不能代表所有異常情境已驗。

### 8.5 時序可驗，不等於速度合理

- 包含空接近、升降、載貨橫移、降下與空返回後，估計單次總行程可達14–17m；6秒平均即2.3–2.8m/s，分段smoothstep峰值更高。
- 20/60/20或10/15/50/15/10分段可以保證端點連續，但不能因此稱現有6/8秒是合理機械節拍。必須輸出各軸行程、峰速與峰加速度，超過選定假設門檻明示，不偷偷放慢播放器或改G2時間。
- 若要求例如1m/s級速度，現有6/8秒很可能不成立；屆時應回G1/G2申請修工時，或接受「僅事件同步幾何候選、機械節拍未校正」。本提案不代替該決策。

**目前支持：採上方機構消除地面軌道穿AGV，但只接受為待幾何/速度檢查的展示方案。反對直接宣稱20/60/20＋6秒已是可行安全機構。**

## 9. Approved low-bail/boundary revision (2026-10-31 19:20 UTC)
This supersedes the high-lift alternative, terminal warehouses and terminal gantries. All dimensions/timings remain illustrative assumptions, not calibrated industrial equipment.

- Every serial retains an open pallet and lifting bail. Four 12 mm radius corner posts at x ±.93, z ±.15 rise to y1.285; top longitudinal bars radius .012, central transverse lifting member radius .015 reaches y1.300. Contact point local [0,1.30,0]. Carrier ownership is the job serial.
- Three Cartesian machines use stationary beam top3.00, empty hook lowest-contact home [stationX,2.15,-6]. Back support columns are [stationX±2.8,1.5,-3.3], square .10, height3. Cantilever beams span z[-7.65,-3.25], lowest face2.86. The X bridge follows hook Z; trolley follows hook X/Z. Cable ends at y2.64 and hook top+ .10. Hook lowest-contact root follows shared motion exactly, yaw follows shared hookYaw. No scene clock, forces, solver, or independently computed transfer trajectory.
- Metadata identifies gantry-frame, gantry-bridge, gantry-trolley, gantry-cable, gantry-hook and hook-contact, actionId, loaded, carrierOwner and hookWorld/contactWorld. Support column placement still needs independent loaded-bounds sweep; its presence does not establish clearance.
- FG coplanar conveyor x[18.50,20.80], z[-5.60,-3.40], support top .535. Open marker gate x20.2, no wall. SCRAP coplanar conveyor x[17.50,18.50], z[.50,2.60], top .535, open gate z1.3. No terminal warehouse slot geometry, no fictitious terminal lift. Off-slice completed serials remain in the ledger but are not rendered; transfer remains rendered until commit.
- New candidate timing is controlled upstream (20 second handling proposal), not modified in G2 or by scene geometry. Shared lift→traverse→lower motion and same-source adapter determine actual support continuity. Geometry tests verify roots and static support dimensions, not an industrial collision/dynamic-safety model or visually inspected WebGL output.

### Q support correction after independent route audit
The normal VJ→EXIT branch collided with the original Q right post x17.8/z-3.3. Only that support is moved to x19.15/z-3.10 (including .28×.28 foot pad), with its cantilever and high X bridge extended to the new support. Keeping z-3.30 would let the .28 pad overlap the FG conveyor, so it was not used. The new pad's southern edge is z-3.24; conveyor northern edge z-3.40 gives .16 planar gap. Added 101 sample straight-branch vehicle-mesh versus Q frame/FG conveyor positive-volume AABB checks. These are sampled rigid-envelope regressions, not proof of every turn, cargo sweep, force, reachability or structural capacity. Gantry rejects hookY>2.54 to prevent negative cable length.

### Lane-v2 minimal corrections (19:35 UTC)
P's orange fixed tool at local[-.60,.76,-.98] genuinely intersected the fixture pallet; it is relocated onto the low utility top, local[0,.22,.18] (tool bottom .20, top .24). It is not exempted from collision tests. Q's right support and high bridge now extend to x19.40, z-3.10 unchanged, to support the approved outer transfer lane hookX19.00; the trolley box spans x18.85..19.15 inside the bridge. Added tests of actual tool/pallet geometry, trolley bounds and right footpad versus FG conveyor. Geometry suite19/19. Full quality-path sampling remains independent audit work; these corrections alone are not a universal clearance claim.

### Rear lane support extension (19:45 UTC)
For the approved planar7.7 rear slot lane, all three fixed overhead cantilevers now extend to worldZ=-8.05; beam bottom/top remain2.86/3.00. The moving trolley at hookZ=-7.7 spans to -7.83 and is inside the physical rail length. Ground support columns/foot pads remain on the AGV side, with no new rear post near staff circulation. Targeted three geometry regressions pass. Full v3 quality/normal actor and hook/payload clearance depends on the shared route+minimum tray height revision and independent resweep, not this length check alone.
