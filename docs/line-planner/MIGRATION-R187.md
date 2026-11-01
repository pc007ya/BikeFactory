# r187 規劃基準與遷移核對

2026-11-01 使用者指定：後續新規劃以 **Three.js r187** 為基準。本專案採官方 npm `three@0.187.0`、優先 WebGLRenderer；不是未經驗證切換 WebGPU。`df8d103` 的 r162 版本保留可回退。前半段保留來源審查與驗證清單；整合後的實際結果由本機 `evidence/quality/` 另記。

## 來源與讀取範圍

已讀 [r187 官方發布](https://github.com/mrdoob/three.js/releases/tag/r187) 及 [官方 Migration Guide](https://github.com/mrdoob/three.js/wiki/Migration-Guide) 中全部 162→187 小節。指南建議舊案分段升級；本案將相容性審查分為 162→172、172→182、182→187，實際 API 使用以當前程式為準，沒有把未用到的 TSL／WebGPU／模型載入器變更當成已驗功能。

逐段檢查記號：R＝需實測執行環境／資源；V＝需畫面重核；U＝該段主要更動未命中本案既有 API。這是本案程式的影響分類，不是完整 upstream 變更抄錄。

| 段落 | 本案分類 | 段落 | 本案分類 | 段落 | 本案分類 |
|---|---|---|---|---|---|
|162→163|R,V|163→164|U|164→165|U|
|165→166|U|166→167|U|167→168|U|
|168→169|U|169→170|R|170→171|U|
|171→172|U|172→173|U|173→174|R|
|174→175|U|175→176|U|176→177|U|
|177→178|U|178→179|U|179→180|U|
|180→181|V|181→182|V|182→183|U|
|183→184|V|184→185|R|185→186|R|
|186→187|R,V| | | | |

關聯變更摘要：[Migration Guide](https://github.com/mrdoob/three.js/wiki/Migration-Guide)。r163 要求 WebGL2，場景環境強度改由 `Scene.environmentIntensity` 控制；r170 注意 mipmap／Material.type；r174 RenderTarget clone 不再共享紋理；r181 PBR 與 PMREM 外觀改變；r182 WebGL 軟影應用 `PCFShadowMap`；r184 環境旋轉慣例改變；r185 手動矩陣需標記更新；r186 Object3D 新增 dispose；r187 PMREM 使用 cube target、移除 CubeUVReflectionMapping，並需要 WeakRef／FinalizationRegistry；離屏 viewport/scissor 的 pixelRatio 行為改變。

## 與本案實作的接點

- 舊版只用標準 core 幾何、StandardMaterial、WebGLRenderer、Raycaster、PerspectiveCamera，沒有自訂 GLSL／TSL、BatchedMesh、GLTF／FBX loader 或 addon 控制器；因此大部分載入器與節點破壞性變更未命中原路徑。若加入 addon，必須取同一 `three@0.187.0` 套件版本，不混用 CDN 或 r162 addon。
- WebGL2 是實際最低能力；需要真瀏覽器確認失敗時顯示清楚錯誤，不能只讀新版核心 import 成功便宣稱裝置支援。
- 明設輸出 sRGB、tone mapping 與曝光，保留材質原意。不要用加亮金屬／加強 emissive 掩飾 PBR 版本差異；同配置同視角比較亮部、暗部與接地感。
- 本案不手動改 matrix、不使用自訂 shader chunks；若為合併幾何而設 `matrixAutoUpdate=false`，必須重新檢查 world matrix 更新與 raycast 的座標。

## r187 原始碼核對

官方 npm tarball `/tmp/three-0.187.0.tgz` 的 `package/package.json` 已唯讀確認版本 **0.187.0**。另確認此 npm tarball 不提供 `build/three.module.min.js`；提供的是 `build/three.module.js` 與其依賴 `build/three.core.js`。本機 vendor 須保存兩者及相對 import，或經明確 build 流程合併，不可沿用 r162 單檔名稱而漏掉 core。目前整合方案已保存兩個官方檔，既有 `three.module.min.js` 名稱只作明示 re-export 相容入口，不宣稱是壓縮版。作者以 Node import 該入口實讀 `REVISION=187`、`PMREMGenerator` 為 function、`PCFShadowMap=1`、`ColorManagement.enabled=true`；這只證明模組入口，尚非 WebGL／瀏覽器驗收。以下事項另外檢查該套件原始碼，不以版本號推測：

1. [PMREMGenerator](https://github.com/mrdoob/three.js/blob/r187/src/extras/PMREMGenerator.js)：core 類別位於 `src/extras/`。`fromScene(scene,sigma,near,far,options)` 回傳 WebGLCubeRenderTarget；應只取回傳物件的 `texture` 指派環境，不假設舊 CubeUV atlas 尺寸或 mapping。保留 target 引用，離場時單獨 dispose；generator.dispose 不代替 caller-owned target 的清理。
2. [MeshPhysicalMaterial](https://github.com/mrdoob/three.js/blob/r187/src/materials/MeshPhysicalMaterial.js)：`diffuseRoughness` 預設為 0，設大於 0 才選用 EON。StandardMaterial 不會因升版自動得到這項效果。僅在粗糙非金屬材質有視覺收益且效能可接受時採用。
3. [Object3D](https://github.com/mrdoob/three.js/blob/r187/src/core/Object3D.js)：dispose 事件不等於遞迴釋放全部幾何與材質。原有資源 Set、共享引用與明確 dispose 仍須維持；不可用 root.dispose 取代整個生命週期。
4. [WebGLRenderer](https://github.com/mrdoob/three.js/blob/r187/src/renderers/WebGLRenderer.js)：核對 WebGL2 要求與輸出路徑。不要依賴 legacy renderer 選項；本案沒有 stencil 邏輯或手動離屏 viewport/scissor 縮放。

## 放行前必做，結果不得預填

- 瀏覽器實際回報 `THREE.REVISION=187`、renderer/context、viewport 與 pixelRatio；離線本地資產載入、console 無 shader／API 錯誤。
- 組裝樣板與備料、品管近看＋全景；同配置前後截圖，檢查材質層次、陰影接地、亮部不過曝、相機無橫樑遮擋、標籤不壓住控制器。
- 真實 mesh raycast 回傳同一 station/operation/machine ID；表單新增、2→3→1、刪除／撤銷、重排／匯入及結果失效不變。
- 重複編輯時 created−disposed＝active；同數量返回時 renderer 幾何／紋理數回到穩定範圍，PMREM 不隨每次編輯重造。最後 dispose 釋放環境 target、shadow map 與 renderer 資源。
- 窄視窗與高機台數實測，記錄取樣期間與 FPS；區分連續重畫取樣、相機移動及靜止按需渲染，不能把 rAF 排程數直接當 GPU 吞吐。

目前此文件作者只做來源／程式閱讀，沒有更動核心、渲染器、模型或操作使用者瀏覽器，也未替整合版執行上述放行測試。


## 整合後執行狀態

整合作者已在 Chrome156／Mac 實際確認 REVISION187、WebGL2、PMREM cube 環境、PCF 陰影與 ACES；32 項測試通過，實機 raycast、數量與配置回歸及窄視窗／200 台情境已有本機紀錄。前述唯讀審查作者的工作範圍不等於此整合結果；詳見 README 與本機 evidence/quality/，等待父對話安排獨立 QA，未宣稱正式放行或部署。
