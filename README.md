# BikeFactory — v0.7 browser-test baseline

自行車動態產線的公開測試基線。**這不是正式完成品，也不代表已通過真實瀏覽器或視覺驗收。** 視覺與操作修正版仍在進行。

## 開啟與部署

- `docs/index.html`：已封裝的獨立靜態入口，包含 Three.js 與必要視覺道具，不依賴 CDN；需要 WebGL。
- `START.html`：相同的離線獨立版。
- GitHub Pages 初次設定：Settings → Pages → Build and deployment → Source 選 **Deploy from a branch** → Branch 選 **main**，Folder 選 **/docs**，Save。
- 請以 GitHub Pages 設定頁的實際發布網址為準；提交程式碼不代表 Pages 已啟用或部署成功。

## 開發

```sh
npm ci --ignore-scripts
npm test
npm run dev
npm run standalone
cp START.html docs/index.html
```

Node.js 20+、Python 3。`npm run dev` 後開啟 `http://localhost:8000`。根目錄 `index.html` 是開發入口。

## 測試範圍與限制

本版本包括一般車／電動車工單、物流模式、工序與工時設定、JSON 配置保存及示意機構動作。尺寸、工時與物流參數都是規劃假設，沒有連接真實工廠、PLC 或 MES，不是物理、安全或工程驗證。

只保存配置；關閉頁面後不保存即時在製品進度。既有自動測試通過不等於真實瀏覽器或視覺驗收完成。

## 第三方素材

Three.js：MIT，見 `THIRD_PARTY_NOTICES.txt`。

兩件 NVIDIA SimReady 道具使用 CC BY 4.0 視覺衍生資產。來源、版本、修改、授權與限制見 `assets/simready/ATTRIBUTION.txt`、`LICENSE-CC-BY-4.0.txt` 與 `provenance.json`。轉換未保留 USD 物理與語意結構，不是 SimReady 認證整廠；NVIDIA 不背書本專案。

本 repository 不包含原始 USD 下載包、node_modules、快取、內部代理報告、私有來源或舊版錄影。
