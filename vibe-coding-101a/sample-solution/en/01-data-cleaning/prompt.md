# Exercise 01 prompt - Data cleaning

> Sequential messages in one chat. Send them one at a time; later turns build on the
> earlier ones without repeating the setup.

**Message 1** | set the scene and produce clean tables
> I'd like to clean up some survey data. Do whatever you need behind the scenes and just show me the results. Read the sheet `答題記錄(選項編號)` from both `data/pre-test.xlsx` and `post-test.xlsx`. Heads-up, there are two traps: the first row is a title and the real column names are on the second row; also the values are option numbers, not actual agreement scores. Option 1 means score 7 and option 7 means score 1, so convert with `actual_score = 8 - option_number`. Keep only the `帳號` column, rename the 16 question columns in order to Q1 through Q16, and save them as `_results/clean_pre.csv` and `clean_post.csv`.

**Message 2** | now do the matching (no need to restate the above)
> Now, using `帳號`, find the students who did both pre and post, save that as `_results/matched_ids.csv`, and print for me: how many in pre, how many in post, how many matched, the pre-only ids, and the post-only ids.

**Message 3** | a quick quality check
> While you're there, check for me: are all the answers between 1 and 7? Anything missing (blank)?

**Message 4** | instrument fidelity (bonus, returns in Exercise 03)
> One more thing to confirm: is the wording of item 11 the same in pre and post? If it was reworded, can we still compare pre vs post directly?
