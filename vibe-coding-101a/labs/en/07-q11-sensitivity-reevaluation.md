# Exercise 07 - Q11 Sensitivity Reanalysis: Redo the t-test, charts, and report

## Learning goals

- Turn "this survey item has a problem" into a clear, testable reanalysis rule.
- Redo Exercises 03, 04, and 05 to see whether conclusions change after a data decision.
- Label baseline and sensitivity analyses clearly in a report.

## Why it matters

Exercise 02 showed that Q11 damages pre-test ER reliability. Suppose the user agrees that Q11 is a questionnaire-design problem. For the pre/post t-test, you should not blindly keep averaging the original four ER items. This exercise asks you to run a Q11-drop sensitivity analysis: **ER uses only Q3, Q7, and Q15**, then you redo the t-test, figures, and one-page report.

> Note: in [exercises/data/sims-questionnaire-items.md](../data/sims-questionnaire-items.md), Q11 belongs to **ER**, not AM. This exercise drops Q11 from ER; AM remains Q4,Q8,Q12,Q16.

## Tasks

Use the cleaned files from earlier exercises: `../_results/clean_pre.csv`, `../_results/clean_post.csv`, and `../_results/matched_ids.csv`. Produce a new set of files without overwriting the original Exercise 03-05 outputs.

1. Recompute subscale scores and save:
   - `../_results/subscale_scores_pre_q11drop.csv`
   - `../_results/subscale_scores_post_q11drop.csv`
2. Use this item mapping:

   | Subscale | Items |
   |---|---|
   | IM | Q1,Q5,Q9,Q13 |
   | IR | Q2,Q6,Q10,Q14 |
   | ER | Q3,Q7,Q15 (drop Q11) |
   | AM | Q4,Q8,Q12,Q16 |

3. Recompute Cronbach's alpha and save `../_results/reliability_q11drop.csv`. Check whether pre-test ER reliability improves.
4. Redo Exercise 03: paired t-tests for IM / IR / ER / AM on the 41 matched students; save `../_results/ttest_results_q11drop.csv`.
5. Redo Exercise 04: save charts under `../_results/figures_q11drop/`, including a grouped bar chart, box plot, slope chart, and grade histogram.
6. Redo Exercise 05: merge adjusted post-test subscales with grades into `../_results/survey_grades_merged_q11drop.csv`, then write `../_results/mini_report_q11drop.md`.

## Prompt starter

> I want to run a Q11-drop sensitivity analysis. Exercise 02 showed that Q11 is an ER questionnaire-design problem, so in this version please score ER using only Q3,Q7,Q15. Do not include Q11 in ER, and do not change AM; AM remains Q4,Q8,Q12,Q16.
>
> Please use `/Users/jyang/py312-venv/bin/python3` for code. The files are in `exercises/_results/`: `clean_pre.csv`, `clean_post.csv`, and `matched_ids.csv`; grades are in `exercises/data/grade-report.csv`.
>
> Please generate: `subscale_scores_pre_q11drop.csv`, `subscale_scores_post_q11drop.csv`, `reliability_q11drop.csv`, `ttest_results_q11drop.csv`, four charts under `figures_q11drop/`, `survey_grades_merged_q11drop.csv`, and `mini_report_q11drop.md`.
>
> In the report, explicitly compare the baseline analysis with the Q11-drop analysis: does dropping Q11 improve ER reliability? Does the ER t-test conclusion stay the same? Do not read AM backwards.

## Acceptance checks

- [ ] `subscale_scores_pre_q11drop.csv` has **43 rows**, and `subscale_scores_post_q11drop.csv` has **44 rows**.
- [ ] Q11 is not used in ER; ER uses only Q3,Q7,Q15; AM still uses Q4,Q8,Q12,Q16.
- [ ] `reliability_q11drop.csv` shows pre-test ER alpha around **0.92**, much higher than the original 0.36.
- [ ] `ttest_results_q11drop.csv` uses **41** matched students, df = **40**.
- [ ] Adjusted ER is not reported as a significant increase; expected result is about ΔM = +0.27, t(40) = 1.83, p = 0.075.
- [ ] The report clearly says Q11-drop improves ER reliability but also changes the ER statistical conclusion.

## Facilitator hints

- The teaching point is not "make the numbers prettier"; it is that **data decisions can change conclusions**.
- Dropping Q11 raises pre-test ER reliability from 0.36 to about 0.92, but the ER pre/post difference becomes smaller and p is about 0.075, so it is not significant at the 0.05 level.
- IM, IR, and AM should match Exercise 03 because their item sets are unchanged.
- The report should call this a "sensitivity analysis", "make-up reanalysis", or "Q11-drop analysis" rather than replacing the baseline silently.
