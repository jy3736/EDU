# Exercise 00 - Meet Your AI Agent and the Data

## Learning goals

- Experience asking an AI agent to make sense of unfamiliar files, and build confidence.
- Learn to describe context instead of demanding code.

## Why it matters

Faced with an unfamiliar Excel file, most people click through every sheet by hand. An AI agent can summarize the structure in seconds, but only if you **tell it where the files are and what you want to know**. There is no wrong answer here; the goal is to get comfortable talking to the agent.

## Tasks

1. Ask the agent to list the files in [exercises/data/](../data/) and describe each one in a sentence or two.
2. Ask it to open [exercises/data/pre-test.xlsx](../data/pre-test.xlsx) and list every **sheet name**, plus the **columns** and **row count** of each.
3. Ask it to read [exercises/data/sims-questionnaire-items.md](../data/sims-questionnaire-items.md) (it now includes a plain-language explanation of the four subscales) and explain IM / IR / ER / AM in its own words, and which subscale is "higher = worse". **Then check it yourself**: does its explanation match what the file actually says? That is the verify habit.
4. Ask it to inspect [exercises/data/grade-report.csv](../data/grade-report.csv) and report how many students and which grade columns exist.

## Prompt starters

> I'm working on a learning-motivation survey and I don't know the data yet, so help me get oriented first.
> Could you start by listing the files in the `exercises/data/` folder, with a one-line note on what each one is?
> Then open `exercises/data/pre-test.xlsx` and tell me its sheet names, and for each sheet the column names and roughly how many rows.
> After that, read `exercises/data/sims-questionnaire-items.md` and explain the four subscales IM / IR / ER / AM in plain words, and point out which one means "a higher score is actually worse motivation".
> Last, take a look at `exercises/data/grade-report.csv` and tell me how many students and which columns it has.
> Don't do any analysis yet, just help me understand the data. Thanks!

## Acceptance checks

- [ ] The agent reports **4 sheets** in `pre-test.xlsx` (statistics, weighted scores, numeric answers, full-text answers).
- [ ] The agent identifies **AM (Amotivation)** as the "higher = worse" subscale.
- [ ] The agent reports **51 students** with columns `id, rank, course, normal, midterm, final`.

## Bonus / fun

Ask the agent to compare the numeric-answers sheet in `pre-test.xlsx` vs `post-test.xlsx` and tell you whether the **number of respondents matches**. Just the two counts for now. (You will use this in the next exercise!)

## Facilitator hints

- The point is getting learners to ask. If the agent gets the structure wrong, use it to demonstrate re-prompting in clearer words.
- Each xlsx sheet has a **title row first** (e.g. "round-3 survey - responses"); the real headers are on row 2. Some agents get fooled by the title row, which sets up Exercise 01.
- Bonus answer: pre-test 43 respondents, post-test 44. The mismatch is real and intentional.
- The data folder also holds `instructor-spoken-reflection.md` (the instructor thinking aloud), the qualitative material for the optional Exercise 06. Ignore it for now.
