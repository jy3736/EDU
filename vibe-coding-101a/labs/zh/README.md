# AI 代理工作坊：用真實問卷資料學會與 AI 協作

> 給大專教師的入門練習。你不需要會寫程式，你只需要**會問、會看、會驗證**。

---

## 這個工作坊在做什麼

我們用一份**真實的 SIMS 學習動機問卷**（前測 pre-test 加後測 post-test）加上一份**班級成績報表**，帶你練習指揮 AI 代理（AI agent）完成一條完整的資料分析流程：

1. 原始資料清理與萃取
2. 問卷信度 (reliability) 與效度 (validity) 檢查
3. t 檢定 t-test（配對與獨立）
4. 畫圖說故事
5. 整合成一頁報告

你的 AI 代理（**Claude Code、Codex、GitHub Copilot** 等）負責寫程式；**你負責提出需求、檢查結果、要求修正**。這才是這個工作坊真正要練的能力。

> 想看英文版練習，請見 [../en/README.md](../en/README.md)。

---

## 最重要的一件事：提問 → 驗證 → 修正

```
   你：說清楚你要什麼（給情境、給檔案、給驗收標準）
   ↓
   AI：寫程式、跑出結果
   ↓
   你：對照「驗收檢查」，數字／檔案對不對？
   ↓
   不對 → 告訴 AI 哪裡怪，請它修正（回到上一步）
   對   → 進入下一個任務
```

每一份練習都附有「**驗收檢查**」。AI 給你結果後，**一定要自己核對**。AI 會出錯、會幻想欄位、會弄反方向，你的工作就是抓出來。

---

## 資料導覽

所有原始資料都在 [exercises/data/](../data/) 資料夾，**請勿修改原始檔**。

| 檔案 | 內容 |
|---|---|
| [exercises/data/sims-questionnaire-items.md](../data/sims-questionnaire-items.md) | SIMS 量表說明：16 題分屬 4 個動機構面 (subscale)，並附四個構面的白話說明 |
| [exercises/data/pre-test.xlsx](../data/pre-test.xlsx) | 前測問卷（第三次），含 4 個工作表 |
| [exercises/data/post-test.xlsx](../data/post-test.xlsx) | 後測問卷（第四次），含 4 個工作表 |
| [exercises/data/grade-report.csv](../data/grade-report.csv) | 51 位學生的成績（平時、期中、期末） |
| [exercises/data/instructor-spoken-reflection.md](../data/instructor-spoken-reflection.md) | 講師口述的教學省思（選修練習 06 用的質性資料） |

**SIMS 四構面**（出自 [exercises/data/sims-questionnaire-items.md](../data/sims-questionnaire-items.md)）：

| 代號 | 構面 | 題號 |
|---|---|---|
| IM | 內在動機 Intrinsic Motivation | 1, 5, 9, 13 |
| IR | 認同調節 Identified Regulation | 2, 6, 10, 14 |
| ER | 外在調節 External Regulation | 3, 7, 11, 15 |
| AM | 無動機 Amotivation | 4, 8, 12, 16 |

> ⚠️ **AM（無動機）方向相反**：AM 分數**越高代表動機越差**。看結果時要特別小心。

問卷使用 **7 點量表**（1 = 完全不同意 ～ 7 = 完全同意）。

---

## 練習順序

| # | 練習 | 你會學到 |
|---|---|---|
| 00 | [認識代理與資料](00-setup-and-orientation.md) | 讓 AI 幫你看懂陌生檔案 |
| 01 | [資料清理與萃取](01-data-cleaning-extraction.md) | 把雜亂的 Excel 變成乾淨表格 |
| 02 | [信度與效度](02-reliability-validation.md) | 算 Cronbach's α，判斷問卷可不可信 |
| 03 | [t 檢定](03-t-test.md) | 前後測有沒有顯著差異 |
| 04 | [畫圖](04-charts.md) | 把數字變成一看就懂的圖 |
| 05 | [整合報告](05-capstone-report.md) | 串起問卷與成績，寫一頁報告 |
| 06 | [口語省思整理](06-qualitative-reflection.md) | 把雜亂的口述省思整理成重點（選修延伸） |
| 07 | [Q11 敏感度重算](07-q11-sensitivity-reevaluation.md) | 接受 Q11 是問卷設計問題後，重做 t 檢定、圖與報告 |

講師另見 [FACILITATOR_NOTES.md](FACILITATOR_NOTES.md)（含預期答案與常見地雷）。

---

## 環境準備

本機已備好 Python 環境（含 `pandas`、`scipy`、`openpyxl`、`matplotlib`）：

```
/Users/jyang/py312-venv/bin/python3
```

你的 AI 代理寫好程式後，可以請它用上面這個 Python 來執行。

**所有產出請存到 [../_results/](../_results/)**（此資料夾不納入 git，可以放心反覆嘗試）。

> 小提醒：每份練習都可以直接把「給 AI 代理的提示起手式」整段複製貼給你的代理當開頭，再用自己的話補充。
