# Prompt 心法手冊 / Prompt Cookbook

> 這不只是 Chat，這是 Agent。你給目標，代理自主思考步驟、讀寫檔案、執行程式、自我修復。你的角色是**審查者（Reviewer）**，不是打字員。
> This is not chat. You give a goal; the agent plans, reads/writes files, runs code, and self-heals. You are the **Reviewer**, not a typist.

## 一個好用的公式 / A formula that works

把需求講清楚，包含四件事 / State the request with four parts：

| 要素 Element | 說明 What it means |
|---|---|
| 背景 Context | 我在什麼情境、給誰用 / who and why |
| 資料 Data | 手上有哪些檔案、欄位、亂在哪 / files, columns, what's messy |
| 任務 Task | 請先完成哪一件最重要的事 / the single most important thing first |
| 驗收 Check | 完成後怎麼判斷對不對 / how to know it's correct |

> 範例 / Example：「背景：我是大專教師，要分析 SIMS 前後測動機問卷。資料：`labs/data/pre-test.xlsx` 與 `post-test.xlsx`，每個工作表第一列是標題、欄位在第二列，分數存的是『選項編號』。任務：抽出答題記錄、把選項編號換成實際分數（`8 - 編號`），存成 `labs/_results/clean_pre.csv`。驗收：43 列、欄位 `帳號,Q1..Q16`、值都在 1–7。」

## 提問 → 驗證 → 修正 / Prompt -> Verify -> Iterate

```
你：說清楚要什麼（背景、檔案、驗收標準）
↓
代理：寫程式、跑出結果
↓
你：對照「驗收檢查」，數字／檔案對不對？
↓
不對 → 告訴代理哪裡怪，請它修正（回到上一步）
對   → 進入下一個任務
```

每份練習都附「驗收檢查 / Acceptance checks」。代理會出錯、會幻想欄位、會把方向弄反，**自己核對是你的工作**。
Agents make mistakes, invent columns, and flip directions. Verifying is your job.

## 安全審查 / Safety review

當代理要修改本機檔案或執行指令時，先看懂它的意圖與安全度，再核准。
Before approving file edits or commands, understand the agent's intent and safety.

- 原始資料 `labs/data/` 全程不可修改；所有產出都進 `labs/_results/`。Never edit `labs/data/`; outputs go to `labs/_results/`.
- 產出不得帶姓名或帳號（見 [../security/privacy-data-controls.md](../security/privacy-data-controls.md)）。No names/accounts in outputs.

## 每份練習的提示起手式 / Prompt starters per exercise

每份練習（`labs/zh/00..07`、`labs/en/00..07`）都內附可直接複製的「提示起手式」。先整段貼給代理當開頭，再用自己的話補充。完整可參考解答包 `sample-solution/<語言>/<練習>/prompt.md`。
Each worksheet ships a copy-paste "prompt starter"; the answer key `sample-solution/<lang>/<ex>/prompt.md` shows full worked prompts.
