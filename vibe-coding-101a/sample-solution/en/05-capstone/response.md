# Exercise 05 sample response - Capstone report

> Generated: [outputs/survey_grades_merged.csv](outputs/survey_grades_merged.csv) and the
> finished one-page report [outputs/mini_report.md](outputs/mini_report.md) (hero chart embedded).

I matched `subscale_scores_post.csv` with `grade-report.csv` on `帳號`/`id`, keeping only students present in both, and saved `survey_grades_merged.csv`, **44 students** (all 44 post-test respondents appear in the grade table).

**Post-test IM vs final grade**: r = **0.06** (p = 0.68), essentially no relationship and not significant. In this dataset, students with higher post-test intrinsic motivation did **not** clearly get higher final grades. **Correlation is not causation**, and this correlation is far too weak to support any conclusion anyway.

The one-page report is written to `mini_report.md` and covers: background and sample sizes (pre 43, post 44, matched 41); a reliability summary (flagging the **ER pre-test alpha of only 0.36**); the main paired t-test results (all four increase significantly; AM increasing correctly read as **more amotivation = bad news**); the embedded Exercise 04 hero chart `slope.png`; and three teaching takeaways / next steps. The report ends with its limits (small n=41; ER reliability and the item-11 rewrite; correlation is not causation).

**Bonus (HTML version / 3 slides)**: you could ask the agent to convert `mini_report.md` into browser-openable HTML. As three slides the titles would roughly be: (1) What we did (SIMS pre/post, 41 matched); (2) Main findings (IM/IR rose, AM also rose, treat ER cautiously); (3) Next steps (lock item wording, inspect subgroups, add qualitative follow-up).

### Acceptance check ✓
- [x] `survey_grades_merged.csv` exists and contains only students present in **both** survey and grades
- [x] The report's t-test conclusions match Exercise 03 (all four up; AM up is bad)
- [x] The report **mentions the low ER pre-test reliability caveat**, not only good news
- [x] The hero chart embeds correctly and the report fits one page
