# Exercise 05 prompt - Capstone report

> Sequential messages in one chat. Send them one at a time; later turns build on the
> earlier ones without repeating the setup.

**Message 1** | set the scene and tie survey to grades
> I've finished all the earlier exercises and now I'd like your help pulling them into a one-page report. Do whatever you need behind the scenes. First merge `_results/subscale_scores_post.csv` with `data/grade-report.csv` on student id, and save it as `_results/survey_grades_merged.csv`.

**Message 2** | one simple correlation (building on the merge)
> Now, from that merged data, work out the correlation between post-test IM and the final grade, and tell me in one plain sentence what it means.

**Message 3** | ask the agent to write the one-page report
> Good. Write me a one-page report saved as `_results/mini_report.md`, with: the background and sample sizes; a reliability summary (please remind me about the low ER pre-test reliability); the main paired t-test results for the four subscales (all four increase significantly, and state correctly that AM increasing means more amotivation, which is bad news); embed the hero chart I drew in Exercise 04; and end with three teaching takeaways or next steps. Don't push the conclusions too far, just flag anything you're unsure about so I can confirm it.

**Message 4** | repackage it (bonus)
> Now turn it into a browser-openable HTML version I can share. And if this became a 3-slide deck, what would each slide title be?
