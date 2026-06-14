# 常見問題排解 / Troubleshooting

> 卡關時優先改用解答包（`sample-solution/`）接續，把免費額度留給關鍵步驟。
> When stuck, continue from the answer key (`sample-solution/`) instead of burning quota on retries.

## 環境類 / Environment

| 症狀 Symptom | 處理方式 Fix |
|---|---|
| 代理指令找不到 / agent command not found | 確認已依 [agent-setup.md](agent-setup.md) 安裝並重開終端機。 |
| 無法登入 / 額度用盡 / out of quota | 確認帳號已登入；改用解答包 `sample-solution/<語言>/.../outputs/` 接續。 |
| `pandas`／`scipy` 匯入失敗 / import error | 確認用的是含套件的 Python（見 agent-setup）；請代理改用該虛擬環境執行。 |

## 資料與分析類 / Data and analysis

| 症狀 Symptom | 處理方式 Fix |
|---|---|
| 欄位名變成「第三次問卷…」之類標題 | xlsx 第一列是標題，真正欄名在第二列：讀檔要 `header=1`。The real header is row 2. |
| 前後測人數對不上（43 vs 44）/ mismatched n | 這是刻意設計：只有 41 人兩次都填，需用 `帳號` 做配對。Only 41 matched; merge on account id. |
| 分數看起來反了 / scores look inverted | 原始存的是「選項編號」，實際分數 `score = 8 - 選項編號`。score = 8 - option number. |
| ER 前測信度很低（≈0.36）/ ER reliability low | 這是真的：元兇是 Q11 改題（延伸練習 07 處理）。This is real - Q11 rewording. |
| AM 上升被當成好事 / AM read as good | AM 方向相反，越高越糟，**上升是壞消息**。Higher AM = worse. |
| 圖上中文變空白方塊 / empty boxes in charts | 設 CJK 字型（macOS `PingFang TC`）或改用英文標籤。Set a CJK font or use English labels. |

## 產出與資料安全 / Outputs and data safety

| 症狀 Symptom | 處理方式 Fix |
|---|---|
| 不確定產出存哪 / where do outputs go | 一律存到 `labs/_results/`（git 已忽略，可放心嘗試）。 |
| 不小心改到原始檔 / edited a raw file | 從版控還原 `labs/data/`；原始檔全程不可修改。Never edit `labs/data/`. |
| 產出帶了姓名／帳號 / output has PII | 只輸出去識別化的構面分數與統計量，移除姓名與帳號。見 [../security/privacy-data-controls.md](../security/privacy-data-controls.md)。 |
