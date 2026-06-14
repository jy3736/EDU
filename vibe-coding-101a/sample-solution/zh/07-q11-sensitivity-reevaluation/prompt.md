# 練習 07 提示語 - Q11 敏感度重算

> 同一對話裡的連續訊息，一則一則送；後面接續前面，不重講前提。

**第 1 則** ｜ 重新計算 Q11-drop 構面與信度
> 我想補做一版 Q11-drop 敏感度分析。練習 02 顯示 Q11 是 ER 的問卷設計問題，所以這一版 ER 請只用 Q3,Q7,Q15；不要把 Q11 放進 ER，也不要改 AM，AM 還是 Q4,Q8,Q12,Q16。請用 `_results/clean_pre.csv`、`_results/clean_post.csv` 重新算構面分數，存成 `_results/subscale_scores_pre_q11drop.csv` 和 `_results/subscale_scores_post_q11drop.csv`。也請重新算 Cronbach's alpha，存成 `_results/reliability_q11drop.csv`，並告訴我 ER 前測信度有沒有改善。

**第 2 則** ｜ 重做練習 03
> 接著用 Q11-drop 的構面分數，對 `_results/matched_ids.csv` 裡的 41 位配對學生重做 IM、IR、ER、AM 的 paired t-test。方向用後測減前測，結果存成 `_results/ttest_results_q11drop.csv`。請特別比較 ER 的結論和原本有沒有一樣。

**第 3 則** ｜ 重做練習 04
> 再用 Q11-drop 的結果重畫四張圖，存到 `_results/figures_q11drop/`：前後測平均並排長條圖、盒鬚圖、斜率圖、成績直方圖。斜率圖請標明 ER 是 Q3,Q7,Q15，不含 Q11。

**第 4 則** ｜ 重做練習 05
> 最後把 Q11-drop 的後測構面分數和 `data/grade-report.csv` 用學生 id 接起來，存成 `_results/survey_grades_merged_q11drop.csv`。再寫一份 `_results/mini_report_q11drop.md`，清楚說明：刪掉 Q11 後 ER 信度改善，但 ER 的 paired t-test 是否仍顯著？也請提醒 AM 上升代表無動機增加，不要讀反。
