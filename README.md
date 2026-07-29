# LongtanDachi.com

龍潭大池單頁旅遊網站，採用臺灣繁體中文與真實景點照片，針對第一次到訪者整理散步路線、吊橋夜景、交通停車、親子提醒與周邊半日遊。

## 技術

- Astro 7.1
- Tailwind CSS 4.3（Vite plugin）
- TypeScript
- pnpm
- Cloudflare Workers Static Assets
- 無資料庫、無登入、無 CMS
- GA4：`G-HXM22WWPKP`

## 執行環境

- Node.js 22.12.0 以上（專案附 `.nvmrc`）
- pnpm 11

## 本機開發

```bash
pnpm install
pnpm dev
```

開發伺服器預設為 `http://localhost:4321`。

## 靜態驗證與建置

```bash
pnpm validate
pnpm build
```

輸出目錄為 `dist/`。

## 部署到 Cloudflare Workers

先登入 Cloudflare：

```bash
pnpm wrangler login
```

再執行：

```bash
pnpm deploy
```

`wrangler.jsonc` 已設定以 Cloudflare Workers Static Assets 發布 `dist/`，並使用自訂 404 頁面。此網站完全預先產生，不需要 SSR、資料庫或 Worker 綁定。

### 綁定自訂域名

部署完成後，在 Cloudflare Dashboard 的 Workers & Pages 專案中加入自訂域名：

```text
longtandachi.com
www.longtandachi.com
```

建議將 `www` 301 轉址到裸網域，並保持 canonical 為：

```text
https://longtandachi.com/
```

## 內容維護

主要穩定資料位於：

```text
src/data/site.ts
```

網站刻意不寫死下列容易變動的資訊：

- 吊橋每日亮燈時刻
- 戲水區年度開放日
- 天鵝船、SUP 價格與營業時間
- 單一停車場空位或收費
- 節慶交通管制細節

若需要更新，只要修改 `src/data/site.ts` 或 `src/pages/index.astro` 後重新部署。

## 圖片

所有實景照片已下載至 `public/images/`，並產生 AVIF、WebP 與 JPEG 版本。首頁不從第三方網站熱連圖片。

完整作者、來源與 Creative Commons 授權請見：

- 網站內頁：`/photo-credits/`
- 專案文件：`PHOTO-LICENSES.md`

## SEO 與效能

已包含：

- canonical
- Open Graph / Twitter Card
- TouristAttraction JSON-LD
- FAQPage JSON-LD
- sitemap
- robots.txt
- 自訂 404
- 響應式 AVIF / WebP 圖片
- 圖片尺寸標記，降低 CLS
- 系統字體，不載入 Google Fonts
- 除 GA4 與必要地圖導航外，不載入第三方腳本

## 專案結構

```text
src/
├── components/
├── data/site.ts
├── layouts/BaseLayout.astro
├── pages/
│   ├── index.astro
│   ├── photo-credits.astro
│   └── 404.astro
└── styles/global.css
public/
├── images/
├── favicon.svg
├── robots.txt
└── site.webmanifest
```
