# Vibe Coding 101 工作坊 v01（3 小時 · SIMS 分析）/ Vibe Coding 101 Workshop v01 (3h · SIMS analysis)

用 AI 代理（**Claude Code、Codex 或 Copilot**）把一份**真實的 SIMS 學習動機問卷**，跑完一條完整的資料分析流水線：清理 → 信度 → t 檢定 → 畫圖 → 一頁報告。你不用會寫程式，只要會**問、看、驗證**。
Drive an AI agent through a full analysis pipeline on a **real SIMS learning-motivation survey**: clean -> reliability -> t-test -> charts -> one-page report. No coding required - just ask, read, and verify.

> 本工作坊沿用 `vibe-coding-101a-3h` 的站台結構與主題樣式，並把實作換成 `sims-analysis` 的八份練習（00–07）與完整解答包。
> Same site shell as `vibe-coding-101a-3h`, with the hands-on labs swapped to the `sims-analysis` 00–07 curriculum and its answer key.

## 核心主軸：一條不漂移的資料契約 / The data contract

```
pre/post-test.xlsx  (header=1; score = 8 - option)
  → clean_pre/post.csv + matched_ids.csv      (練習 01 Ex01)
  → subscale_scores_*.csv + reliability.csv    (練習 02 Ex02)
  → ttest_results.csv                           (練習 03 Ex03)
  → figures/*.png                               (練習 04 Ex04)
  → mini_report.md                              (練習 05 Ex05)
```

所有產出都存到 `labs/_results/`；原始資料 `labs/data/` 全程不可修改。
All outputs go to `labs/_results/`; the raw files in `labs/data/` are never edited.

## 開啟工作坊 / Open the workshop

純靜態網頁，不需安裝、沒有後端 / Pure static site, no backend:

| 方式 Mode | 怎麼做 How |
|---|---|
| 線上（推薦）Online | 直接開啟已部署的 GitHub Pages 網址 |
| 本機直接看 file:// | 用瀏覽器開 `index.html`；投影片與內建教材都可離線使用 |
| 本機伺服器 Local server | 在此資料夾執行 `python3 -m http.server 8000`，再開 `http://localhost:8000/` |

> 「教材資料」單元的內容已預先產生在 `assets/content-data.js`，雙擊 `index.html` 也能看；只有改過 `.md`／`.csv` 又想即時載入時，才需要本機伺服器。
> Material content is prebuilt into `assets/content-data.js`, so `file://` works offline; you only need a server when re-loading freshly edited `.md`/`.csv`.

## 怎麼開始 / Where to start

| 角色 Role | 從這裡開始 Start here |
|---|---|
| 學員 Student | 打開 `index.html`，跟著「完整講義（學員）」一張一張走 |
| 講師 Instructor | 切到「講師」投影片組看時間配置、檢查點與課前清單；另見 `docs/facilitator-guide.md` |
| 環境準備 Setup | 看 `setup/agent-setup.md` ＋ `setup/vscode-setup.md` |
| 動手實作 Labs | 照 `labs/zh/README.md` 或 `labs/en/README.md`，依序完成練習 00–05 |
| 卡關 Stuck | 看 `setup/troubleshooting.md`，或用 `sample-solution/` 解答包接續 |

## 三小時議程 / Agenda

| 區段 Block | 內容 Content | 時長 Min |
|---|---|---|
| 準備階段 Module 1 | 環境設置與 AI 代理 | 20 |
| 練習 00–02 Ex 00–02 | 認識資料 → 清理 → 信度 | 65 |
| 休息 Break | 中場休息 | 10 |
| 練習 03–05 Ex 03–05 | t 檢定 → 畫圖 → 整合報告 | 75 |
| 模組三 Module 3 | 資安與隱私收尾 | 10 |
| 合計 Total | | 180 |

練習 06（質性）與 07（Q11 敏感度）為課後延伸。完整規劃見 `docs/workshop-3hr-plan.md`。
Ex 06/07 are post-class extensions. Full plan in `docs/workshop-3hr-plan.md`.

## 頁面架構 / Page architecture

單一靜態 `index.html`（CSS 與 JS 全部內嵌），搭配兩個輔助檔 / one static page plus two helpers:

| 檔案 File | 角色 Role |
|---|---|
| `index.html` | 投影片＋講義主頁，含三組分頁與教材瀏覽器 |
| `view.html` | 單檔檢視器，以 `view.html?f=<路徑>` 排版單一 `.md`／`.csv` |
| `build.js` | 預先把 `.md`／`.csv` 渲染進 `assets/content-data.js`，讓 `file://` 也能離線瀏覽 |

渲染邏輯集中在 `assets/md-render.js`（`window.VibeMD`），三方共用。

### 三組分頁 / Three tabs
- **完整講義（學員）**：封面到收尾，涵蓋準備階段、練習 00–05、模組三。
- **講師**：時間配置、同步檢查點、解答包還原策略、課前檢核。
- **教材資料**：在頁面上直接檢視與下載所有文件與練習資料。

## 資料夾結構 / Folder layout

| 路徑 Path | 內容 Contents |
|---|---|
| `docs/` | 課程規劃 `workshop-3hr-plan.md`、講師手冊 `facilitator-guide.md` |
| `setup/` | 代理（agent-agnostic）、VS Code 安裝與常見問題 |
| `labs/` | 八份練習（`zh/`、`en/` 各 00–07 ＋ FACILITATOR_NOTES）、原始資料 `data/`、學員產出 `_results/` |
| `sample-solution/` | 完整解答包（逐題 prompt/response ＋ 真實 outputs），同時當作分段保險包 |
| `prompts/` | Prompt 心法手冊 |
| `rubric/` | 各練習驗收清單 |
| `security/` | 資安與隱私收尾（真實個資守則）|
| `assets/` | 渲染器與預先產生的內容 |

> ⚠️ `labs/data/` 的 `pre/post-test.xlsx` 含**真實學生個資**，請依 `security/` 原則處理；輸出不得帶姓名或帳號。
> The xlsx files contain **real student PII**; handle per `security/` and never output names or accounts.

## 重新產生離線內容 / Rebuild offline content

改過任何 `.md`／`.csv` 後，執行 / After editing any `.md`/`.csv`:

```
node build.js
```

會重新產生 `assets/content-data.js`。`sample-solution/` 會打包進離線教材，讓解答示範連結在 `file://` 也能開；`_results/` 不會打包。
Regenerates `assets/content-data.js`. The answer key is bundled so sample links work under `file://`; learner outputs in `_results/` are excluded.

## 部署到 GitHub Pages / Deploy

`deploy-pages.manifest` 列出要部署的檔案與資料夾。`deploy-pages.manifest` lists what to publish.
