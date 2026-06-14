# Exercise 07 prompt - Q11 sensitivity reanalysis

> Send these as consecutive messages in one conversation. Each turn builds on the last.

**Message 1** | Recompute Q11-drop subscales and reliability
> I want to run a Q11-drop sensitivity analysis. Exercise 02 showed that Q11 is an ER questionnaire-design problem, so this version should score ER using only Q3,Q7,Q15. Do not include Q11 in ER, and do not change AM; AM remains Q4,Q8,Q12,Q16. Please use `_results/clean_pre.csv` and `_results/clean_post.csv` to recompute subscale scores, saving `_results/subscale_scores_pre_q11drop.csv` and `_results/subscale_scores_post_q11drop.csv`. Also recompute Cronbach's alpha into `_results/reliability_q11drop.csv`, and tell me whether pre-test ER reliability improved.

**Message 2** | Redo Exercise 03
> Next, use the Q11-drop subscale scores and redo paired t-tests for IM, IR, ER, and AM on the 41 matched students in `_results/matched_ids.csv`. Direction is post minus pre. Save the result to `_results/ttest_results_q11drop.csv`. Please compare the ER conclusion with the original one.

**Message 3** | Redo Exercise 04
> Now redraw the four charts using the Q11-drop results and save them under `_results/figures_q11drop/`: grouped pre/post mean bar chart, box plot, slope chart, and grade histogram. On the slope chart, make clear that ER is Q3,Q7,Q15 and excludes Q11.

**Message 4** | Redo Exercise 05
> Finally, merge the Q11-drop post-test subscale scores with `data/grade-report.csv` by student id, saving `_results/survey_grades_merged_q11drop.csv`. Then write `_results/mini_report_q11drop.md`, clearly explaining that dropping Q11 improves ER reliability, but whether ER's paired t-test remains significant must be checked. Also remind me that AM increasing means more amotivation, so it should not be read backwards.
