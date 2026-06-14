# Exercise 05 - Capstone: One-Page Report

## Learning goals

- Stitch the previous four exercises into **one deliverable page**.
- Practice directing the agent to **synthesize and write**, not just compute.

## Why it matters

The value of analysis is in **telling someone**. What teaching needs is not a pile of CSVs but one page of "what I did, what I found, what's next." Here you experience how well an agent organizes scattered results into a narrative, while **the judgment stays yours**.

## Tasks

1. Merge **post-test subscale scores** with [exercises/data/grade-report.csv](../data/grade-report.csv) on `帳號` / `id`; save to `../_results/survey_grades_merged.csv`.
2. Compute one simple correlation: **post-test IM vs final grade**. Does higher motivation track with higher grades?
3. Have the agent produce a **one-page report** `../_results/mini_report.md` with:
   - a background paragraph (what data, how many people)
   - a reliability summary (what's trustworthy, and the ER pre-test warning)
   - the main t-test results (all four subscales increase significantly; AM increasing is bad)
   - the **hero chart** from Exercise 04 (embedded image)
   - three **teaching takeaways / next steps**
4. Read it yourself and fix anywhere the agent overclaims or flips a direction.

> Tip: if you did the optional [Exercise 06](06-qualitative-reflection.md), the points distilled from the instructor's spoken reflection make good raw material for this report's "teaching reflection" section.

## Prompt starters

> I've finished all the earlier exercises and now I'd like your help pulling them into a one-page report. If you need to run code, the python on this machine is at `/Users/jyang/py312-venv/bin/python3`, just use that.
> First merge `subscale_scores_post.csv` with `exercises/data/grade-report.csv` on student id, and save it as `exercises/_results/survey_grades_merged.csv`.
> Then work out the correlation between post-test IM and the final grade, and tell me in one plain sentence what it means.
> After that, write me a one-page report saved as `exercises/_results/mini_report.md`, with: the background and sample sizes; a reliability summary (please remind me about the low ER pre-test reliability); the main paired t-test results for the four subscales (all four increase significantly, and make sure you state correctly that AM increasing means more amotivation, which is bad news); embed the hero chart I drew in Exercise 04; and end with three teaching takeaways or next steps.
> Don't push the conclusions too far, just flag anything you're unsure about so I can confirm it.

## Acceptance checks

- [ ] `survey_grades_merged.csv` exists and contains only students present in **both** survey and grades.
- [ ] The report's t-test conclusions match Exercise 03 (all four down; AM down is good).
- [ ] The report **mentions the low ER pre-test reliability caveat** instead of only reporting good news.
- [ ] The hero chart embeds correctly and the report fits one page.

## Bonus / fun

Ask the agent to also produce an **HTML version** you can open in a browser and share. Then ask: **if this became a 3-slide deck, what would each slide title be?** Notice how one analysis repackages for different audiences.

## Facilitator hints

- No single right number here; the point is an honest narrative. All four subscales dropping cannot be spun as "motivation improved." Have learners double-check the AM direction.
- The post-test IM vs final correlation is near zero, slightly positive, and non-significant in this dataset; remind learners correlation is not causation.
- A good capstone states its limits (n=41, ER reliability, Q11 rewrite). Learners who do this have truly internalized "verify."
- Compare with [outputs/sims_summary_report.md](../../outputs/sims_summary_report.md) (a separate full report), but learners should trust their own recomputed results.
