# Exercise 03 prompt - t-test

> Sequential messages in one chat. Send them one at a time; later turns build on the
> earlier ones without repeating the setup.

**Message 1** | set the scene and run the paired t-tests
> I've already worked out the subscale scores, and now I'd like your help running the t-tests. Do whatever you need behind the scenes. The files are under `_results/`: `subscale_scores_pre.csv`, `subscale_scores_post.csv`, `matched_ids.csv`. First keep only the 41 students who did both, line them up by id, then run a paired t-test for each of IM, IR, ER, AM (direction = post minus pre). Save each to `ttest_results.csv`: pre mean and SD, post mean and SD, the difference ΔM, t value, degrees of freedom, p value, and the effect size Cohen's dz (mean of the differences divided by their SD).

**Message 2** | ask the agent to interpret each (flag AM direction)
> Walk me through each subscale in one plain sentence. One thing to flag for me: AM is "amotivation", a higher score is worse, so if AM goes up that's bad news, don't read it backwards.

**Message 3** | ask the agent for the caveats
> Which conclusions need to be stated cautiously because there are only 41 people, or because item 11 was reworded between pre and post?

**Message 4** | a different angle (bonus, independent t-test)
> Now a different cut: split `data/grade-report.csv` by `final` at the class median into a high and a low group, and compare their post-test IM. Merge grades and survey on `帳號`/`id` first. Do higher-scoring students really have higher intrinsic motivation? And how is this different from the paired test we just did?
