# AI Agent Workshop: Learn to Collaborate with an AI Agent Using Real Survey Data

> An introductory workshop for college instructors. You do **not** need to know how to code. You only need to learn how to **ask, read, and verify**.

---

## What this is

We use a **real SIMS learning-motivation survey** (pre-test plus post-test) and a **class grade report** to practice driving an AI agent through a complete data-analysis pipeline:

1. Raw data cleaning and extraction
2. Survey reliability and validity
3. t-test (paired and independent)
4. Charts that tell the story
5. A one-page mini-report

Your AI agent (**Claude Code, Codex, GitHub Copilot**, etc.) writes the code. **You** state the goal, check the result, and ask for fixes. That loop is the real skill here.

> Looking for the Taiwan Mandarin version? See [../zh/README.md](../zh/README.md).

---

## The one habit that matters: Prompt -> Verify -> Iterate

```
   You: state clearly what you want (context, files, acceptance criteria)
   |
   Agent: writes code, produces a result
   |
   You: check it against "Acceptance checks". Are the numbers/files right?
   |
   Wrong -> tell the agent what looks off and ask for a fix (go back up)
   Right -> move to the next task
```

Every worksheet has an **Acceptance checks** section. After the agent gives you a result, **always verify it yourself**. Agents make mistakes, invent columns, and flip directions. Catching that is your job.

---

## The dataset

All raw data is in [exercises/data/](../data/). **Do not modify the originals.**

| File | Contents |
|---|---|
| [exercises/data/sims-questionnaire-items.md](../data/sims-questionnaire-items.md) | The SIMS scale: 16 items in 4 motivation subscales, with a plain-language explanation of each |
| [exercises/data/pre-test.xlsx](../data/pre-test.xlsx) | Pre-test survey (round 3), 4 sheets |
| [exercises/data/post-test.xlsx](../data/post-test.xlsx) | Post-test survey (round 4), 4 sheets |
| [exercises/data/grade-report.csv](../data/grade-report.csv) | Grades for 51 students (regular, midterm, final) |
| [exercises/data/instructor-spoken-reflection.md](../data/instructor-spoken-reflection.md) | An instructor's spoken teaching reflection (qualitative material for the optional Exercise 06) |

**The four SIMS subscales** (from [exercises/data/sims-questionnaire-items.md](../data/sims-questionnaire-items.md)):

| Code | Subscale | Items |
|---|---|---|
| IM | Intrinsic Motivation | 1, 5, 9, 13 |
| IR | Identified Regulation | 2, 6, 10, 14 |
| ER | External Regulation | 3, 7, 11, 15 |
| AM | Amotivation | 4, 8, 12, 16 |

> ⚠️ **AM is reverse-meaning**: a **higher** AM score means **worse** motivation. Read AM results carefully.

The survey uses a **7-point Likert scale** (1 = strongly disagree to 7 = strongly agree).

---

## Recommended order

| # | Worksheet | You will learn |
|---|---|---|
| 00 | [Meet the agent and data](00-setup-and-orientation.md) | Let the agent explore unknown files |
| 01 | [Data cleaning and extraction](01-data-cleaning-extraction.md) | Turn messy Excel into tidy tables |
| 02 | [Reliability and validity](02-reliability-validation.md) | Reliability with Cronbach's alpha |
| 03 | [t-test](03-t-test.md) | Did pre vs post differ significantly |
| 04 | [Charts](04-charts.md) | Make charts people understand at a glance |
| 05 | [Capstone report](05-capstone-report.md) | Tie survey to grades in one page |
| 06 | [Spoken reflection](06-qualitative-reflection.md) | Turn a messy spoken reflection into structured points (optional extension) |
| 07 | [Q11 sensitivity reanalysis](07-q11-sensitivity-reevaluation.md) | After accepting Q11 as a survey-design problem, redo t-tests, charts, and report |

Facilitators: see [FACILITATOR_NOTES.md](FACILITATOR_NOTES.md) for expected answers and common pitfalls.

---

## Setup

A Python environment is ready on this machine (with `pandas`, `scipy`, `openpyxl`, `matplotlib`):

```
/Users/jyang/py312-venv/bin/python3
```

After your agent writes code, ask it to run it with that Python interpreter.

**Save all outputs to [../_results/](../_results/)** (it is git-ignored, so experiment freely).

> Tip: copy the "Prompt starters" block straight into your agent to begin, then add your own words.
