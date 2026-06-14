# 練習 07 — Q11 敏感度重算：補做 t 檢定、圖與報告

## 學習目標

- 把「問卷題目有問題」轉成明確、可驗證的重算規則。
- 重新跑練習 03、04、05，觀察結論是否因資料處理規則而改變。
- 在報告中清楚標示 baseline 與 sensitivity analysis，避免把調整後結果講成原始結果。

## 為什麼重要

練習 02 顯示 Q11 讓 ER 前測信度很差。假設使用者同意這是一個問卷設計問題，後續 pre/post t-test 就不應只照原始四題平均硬算。這一關要你指揮 AI 代理做一版「Q11-drop」敏感度分析：**ER 改成只用 Q3、Q7、Q15**，再重跑 t 檢定、圖表和一頁報告。

> 注意：依 [exercises/data/sims-questionnaire-items.md](../data/sims-questionnaire-items.md)，Q11 屬於 **ER**，不是 AM。這一關是把 Q11 從 ER 排除；AM 仍維持 Q4,Q8,Q12,Q16。

## 任務

用前面練習清好的 `../_results/clean_pre.csv`、`../_results/clean_post.csv`、`../_results/matched_ids.csv`，重新產出一組不覆蓋原本 03-05 的檔案。

1. 重新計算構面分數，存成：
   - `../_results/subscale_scores_pre_q11drop.csv`
   - `../_results/subscale_scores_post_q11drop.csv`
2. 題目對應改為：

   | 構面 | 題目 |
   |---|---|
   | IM | Q1,Q5,Q9,Q13 |
   | IR | Q2,Q6,Q10,Q14 |
   | ER | Q3,Q7,Q15（排除 Q11） |
   | AM | Q4,Q8,Q12,Q16 |

3. 重新算 Cronbach's α，存成 `../_results/reliability_q11drop.csv`。請特別檢查 ER 前測 alpha 是否改善。
4. 重做練習 03：對 41 位配對學生做 IM / IR / ER / AM 的 paired t-test，存成 `../_results/ttest_results_q11drop.csv`。
5. 重做練習 04：把圖存到 `../_results/figures_q11drop/`，至少包含並排長條圖、盒鬚圖、斜率圖、成績直方圖。
6. 重做練習 05：合併後測構面與成績，存成 `../_results/survey_grades_merged_q11drop.csv`；再寫一份 `../_results/mini_report_q11drop.md`。

## 給 AI 代理的提示起手式

> 我想補做一版 Q11-drop 敏感度分析。前面練習 02 顯示 Q11 是 ER 的問卷設計問題，所以這一版請把 ER 改成只用 Q3,Q7,Q15；Q11 不放進 ER，也不要改 AM，AM 仍是 Q4,Q8,Q12,Q16。
> 
> 請用 `/Users/jyang/py312-venv/bin/python3` 跑程式，資料在 `exercises/_results/`：`clean_pre.csv`、`clean_post.csv`、`matched_ids.csv`，成績在 `exercises/data/grade-report.csv`。
> 
> 請重新產出：`subscale_scores_pre_q11drop.csv`、`subscale_scores_post_q11drop.csv`、`reliability_q11drop.csv`、`ttest_results_q11drop.csv`、`figures_q11drop/` 四張圖、`survey_grades_merged_q11drop.csv`、`mini_report_q11drop.md`。
> 
> 報告裡請明確比較原始分析與 Q11-drop 分析：刪掉 Q11 後 ER 信度是否改善？ER 的 t-test 結論是否仍和原本一樣？請不要把 AM 方向讀反。

## 驗收檢查

- [ ] `subscale_scores_pre_q11drop.csv` 有 **43 列**、`subscale_scores_post_q11drop.csv` 有 **44 列**。
- [ ] Q11 沒有被放進 ER；ER 只用 Q3,Q7,Q15；AM 仍用 Q4,Q8,Q12,Q16。
- [ ] `reliability_q11drop.csv` 顯示 ER 前測 alpha 約 **0.92**，明顯高於原本的 0.36。
- [ ] `ttest_results_q11drop.csv` 使用 **41** 位配對學生，df = **40**。
- [ ] 調整後 ER 的 paired t-test 不再被寫成「顯著上升」；預期約為 ΔM = +0.27, t(40) = 1.83, p = 0.075。
- [ ] 報告有清楚說明：Q11-drop 讓 ER 信度改善，但也改變 ER 的統計結論。

## 講師提示

- 這一關最好的教學點不是「把數字變漂亮」，而是讓學員看到：**資料處理規則會改變結論**。
- 刪掉 Q11 後，ER 前測信度會從 0.36 回升到約 0.92；但 ER 的前後差異會變小，p 值約 0.075，不能再說 0.05 水準顯著。
- IM、IR、AM 因為題目沒改，結果應和練習 03 相同。
- 報告中應使用「敏感度分析」「補做重算」「Q11-drop」這類字眼，不要直接覆蓋原始分析。
