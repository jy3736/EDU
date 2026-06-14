# 資安與隱私收尾 / Security and Privacy Wrap-up

> 工作坊尾聲，建立企業級的 AI 使用規範。本工作坊用的是**真實學生資料**，更要落實隱私防護。
> A real dataset means privacy is not optional. Build proper habits before you point an agent at sensitive data.

## 1. 真實個資守則 / The real-PII rule

`labs/data/pre-test.xlsx` 與 `post-test.xlsx` 內含**真實學生帳號與姓名**，`grade-report.csv` 含成績。
These files hold **real student accounts, names, and grades**.

- **所有產出（CSV、圖、報告）都不得帶出姓名或帳號**；只輸出去識別化的構面分數與統計量。
  No output (CSV, chart, report) may carry names or accounts - only de-identified subscale scores and statistics.
- 原始資料 `labs/data/` 全程不可修改；所有產出進 `labs/_results/`（已被 git 忽略）。
  Never edit `labs/data/`; all outputs go to `labs/_results/` (git-ignored).
- 把練習成果分享或上傳前，先檢查有沒有殘留個資。Scan for leftover PII before sharing.

## 2. 代理隱私設定 / Agent privacy settings

依你使用的代理，關閉「以我的內容協助改善模型」之類的訓練回傳選項：
Turn off "use my content to improve the model" style options in your agent:

- **ChatGPT / Codex**：Settings → Data Controls → 將 "Improve the model for everyone" 切為 **Off**。
- **Claude / Claude Code**：依帳號設定關閉訓練資料分享。
- **GitHub Copilot**：在 Copilot 設定中關閉程式碼片段回傳（telemetry / snippets）。

## 3. 職場資安觀念 / Workplace habits

- 經手公司敏感專案或客戶個資時，避免把機密資料貼進雲端代理。
- 真實的個資、病歷、財務資料，先用假資料練流程。Practice the pipeline with fake data first.
- AI 產出不要不檢查就上線；保留人工複核。Keep a human review before anything ships.

## 回顧 / Recap

把今天的工作流帶回真實任務：**提問 → 驗證 → 修正**，當審查者看懂代理的每一步，並把資料安全放在第一位。
Take the loop back to real work: Prompt -> Verify -> Iterate, review every step, and put data safety first.
