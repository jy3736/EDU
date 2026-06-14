# Exercise 01 - Raw Data Cleaning & Extraction

## Learning goals

- Turn a human-facing Excel (title rows, long Chinese questions) into a tidy machine-readable table.
- Learn to surface data problems instead of pretending the data is clean.

## Why it matters

Real data is never clean. Every sheet here has a **title row first**, column names that are full Chinese sentences, and a **different number of respondents** in pre vs post. If you do not clean it first, the reliability and t-test steps will all be wrong. This exercise trains the habit: **inspect before you trust**.

## Tasks

We only need the **numeric-answers sheet** named `答題記錄(選項編號)` from each survey. Important: it stores option numbers, not actual agreement scores. Option 1 means score 7 and option 7 means score 1, so clean with `actual_score = 8 - option_number`.

1. Extract the `答題記錄(選項編號)` sheet from each of [exercises/data/pre-test.xlsx](../data/pre-test.xlsx) and [exercises/data/post-test.xlsx](../data/post-test.xlsx), **skipping the title row** and using row 2 as the header.
2. Keep the `帳號` (student id) column and rename the 16 question columns to **`Q1`-`Q16`** (in item order). Convert option numbers into actual 1-to-7 agreement scores.
3. Save as `../_results/clean_pre.csv` and `../_results/clean_post.csv`.
4. Find students who completed **both** surveys (match on `帳號`), save the list to `../_results/matched_ids.csv`, and also list pre-only and post-only respondents.
5. Ask the agent to verify: are all answers within **1-7**? Any missing (blank) values?

## Prompt starters

> I'd like to clean up some survey data. If you need to run code, use `/Users/jyang/py312-venv/bin/python3` with pandas / openpyxl.
> Please read the sheet named `答題記錄(選項編號)` from both `exercises/data/pre-test.xlsx` and `exercises/data/post-test.xlsx`. Heads-up, there's a trap: the first row of each sheet is actually a title (like "round-3 survey - responses"), the real column names are on the second row, so use the second row as the header.
> Once it's in, keep only the `帳號` column, rename the 16 question columns in order to Q1 through Q16, convert option numbers into actual scores with `actual_score = 8 - option_number`, and save them as `exercises/_results/clean_pre.csv` and `exercises/_results/clean_post.csv`.
> Then, using `帳號`, find the students who did both pre and post, save that as `exercises/_results/matched_ids.csv`, and print for me: how many in pre, how many in post, how many matched, the pre-only ids, and the post-only ids.
> Finally, check whether all the answers fall between 1 and 7 and whether anything is missing, and let me know.
> When you're done, paste the numbers you printed so I can have a look.

## Acceptance checks

- [ ] `clean_pre.csv` has **43 rows** and `clean_post.csv` has **44 rows** (excluding header), columns `帳號, Q1...Q16`.
- [ ] **41 matched**. Pre-only: **S05, S47**. Post-only: **S01, S38, S41**.
- [ ] All answers are within **1-7**, with no missing values.

## Bonus / fun

Ask the agent to compare the **wording of item 11** between pre and post. You will find it was rewritten ("I have no choice but to attend..." vs "I have to come to this course..."). Ask the agent: **if the wording changed, can we still compare pre vs post directly?** This is a real "instrument fidelity" issue; note it now, it comes back in Exercise 03.

## Facilitator hints

- Most common error: the agent forgets to skip the title row, so the header becomes the title string. Have learners check that the first column header is `帳號`.
- The pandas idiom is `pd.read_excel(path, sheet_name='答題記錄(選項編號)', header=1)`. `header=1` uses the second row.
- The score conversion is the key trap in this exercise: `actual_score = 8 - option_number`. All later subscale means, t-tests, and charts should use the cleaned files after this conversion.
- Correct counts: 43 / 44 / 41. Other numbers usually mean the title row was counted or blank rows were not dropped.
- Item 11 belongs to ER. Its rewording is one clue to ER's low pre-test reliability in Exercise 02.
