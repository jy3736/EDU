# 驗收清單 / Acceptance Checklist

> 每個練習都打勾，就是一條跑得通、結論誠實的分析流水線。預期數字出自 `docs/facilitator-guide.md`。
> Tick every box and you have a working, honest analysis pipeline. Expected numbers come from `docs/facilitator-guide.md`.

## 練習 00 認識資料 / Meet the data
- [ ] 代理回報 `pre-test.xlsx` 有 **4 個工作表**，真正欄位在第二列。4 sheets, header on row 2.
- [ ] 指出 **AM 為反向構面**（越高越糟）。AM is reverse-meaning.
- [ ] 成績報表 **51 位學生**，欄位 `id, rank, course, normal, midterm, final`。

## 練習 01 資料清理 / Data cleaning
- [ ] `labs/_results/clean_pre.csv`：**43 列**，欄位 `帳號, Q1...Q16`。
- [ ] `labs/_results/clean_post.csv`：**44 列**。
- [ ] 分數已換算（`8 - 選項編號`），全部落在 **1–7**，無缺值。
- [ ] `matched_ids.csv`：**41 人**；前測獨有 S05,S47；後測獨有 S01,S38,S41。

## 練習 02 信度 / Reliability
- [ ] `subscale_scores_pre.csv`、`subscale_scores_post.csv`：每人 IM/IR/ER/AM 四構面分數。
- [ ] `reliability.csv`：8 個 Cronbach's α。
- [ ] 抓到唯一警訊：**ER 前測 α ≈ 0.36**，並能說出可能原因（Q11）。

## 練習 03 t 檢定 / t-test
- [ ] 只用 **41 位配對學生** 跑配對 t 檢定。
- [ ] `ttest_results.csv` 含每構面 pre/post M(SD)、ΔM、t、df、p、dz。
- [ ] **四構面皆顯著上升**；且**正確讀出 AM 上升＝動機變差**。
- [ ] 寫出 caveat：n=41 偏小、ER 最該保守。

## 練習 04 畫圖 / Charts
- [ ] `labs/_results/figures/` 有 4 張圖：分組長條、盒鬚、斜率、成績直方圖。
- [ ] 每張都有標題、軸標籤、圖例；中文不變空白方塊。
- [ ] 斜率圖（slope）清楚呈現「四構面皆上升」這個主故事。

## 練習 05 整合報告 / Capstone
- [ ] `survey_grades_merged.csv`：只含問卷與成績都有的學生。
- [ ] 算出後測 IM 與期末成績的相關（接近 0、不顯著），並強調相關不等於因果。
- [ ] `mini_report.md` 一頁內：背景與樣本數、信度（標註 ER 前測）、t 檢定主結果（AM 上升是壞消息）、嵌入斜率圖、誠實寫限制。

## 加分 / Bonus（延伸 06 / 07）
- [ ] 06：把講師口述省思整理成五大主題，不杜撰數字、保留「平均掩蓋了兩群人」的張力。
- [ ] 07：丟掉 Q11 重算，說明 ER 變不顯著（p ≈ 0.075），以「敏感度分析」呈現而非偷偷替換。
