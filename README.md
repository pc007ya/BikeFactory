# BikeFactory — v0.9 雙廠測試候選

公開驗收候選 **v0.9-C03.1**：車架廠、總裝廠與雙廠供料物流。這不是正式交付，也不代表真實瀏覽器畫面已獲品質放行。

## 開啟與驗收

GitHub Pages 發布 `main` 的 `/docs`。多檔入口 `docs/index.html`、`app.bundle.js`、manifest 與完整資產片段必須一起保留。需要 WebGL 與 gzip `DecompressionStream`。

`docs/candidate.json` 記錄候選名稱及實際網頁雜湊。官方 Playwright/Chromium 工作流測試該 commit 的靜態檔，產出真截圖、互動結果及雙廠供料/品質/物流證據；artifact 記錄 commit。自動測試綠燈不等於視覺放行，須檢查 `REVIEW_REQUIRED` 指定的實際畫面。

## 開發與重建

```sh
npm ci
npm test
npm run dev
npm run build:web
# 可選：npm run standalone 產生大體積離線單檔
```

Node.js 20+、Python 3。prepare 會依公開 manifest 核對每片、串回gzip及解壓GLB的長度/SHA-256，再重建忽略追蹤的中間檔。`npm test` 保留車架/總裝原測試，另檢查實際公開入口；standalone測試前自動生成START。

開發頁 `http://localhost:8000`；web build 輸出 `dist-web/`，須經檢查再整棵更新 `docs/`。不提交巨型START、未壓縮GLB、中間embedded.js、node_modules、快取或內部驗收報告。

## 範圍及限制

僅工廠程式、展示素材與測試，沒有 Nevo5 模型。所有工時、品質結果及物流參數皆合成規劃假設；非PLC/MES連線、物理或安全驗證。保存配置，不保存重新開啟後的即時在製品狀態。

Nine NVIDIA SimReady 視覺衍生資產採 CC BY 4.0；未保留USD物理/語意結構，不是SimReady認證整廠，也無NVIDIA背書。授權與修改見 `docs/assets/simready/ATTRIBUTION.txt`、`ATTRIBUTION-v09-vise.txt`、相應provenance及LICENSE。Three.js MIT見 `THIRD_PARTY_NOTICES.txt`。
