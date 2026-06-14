# Exercise 00 sample response

> A model answer from the agent, plus the verify step. Compare your own run against this.

**Files in `data/`**

| File | What it is |
|---|---|
| sims-questionnaire-items.md | The SIMS scale: 16 items, 4 motivation subscales, with plain-language notes |
| pre-test.xlsx | Pre-test survey (round 3), 4 sheets |
| post-test.xlsx | Post-test survey (round 4), 4 sheets |
| grade-report.csv | Grades for 51 students (regular, midterm, final) |
| instructor-spoken-reflection.md | Instructor's spoken reflection (used only in Exercise 06) |

**The 4 sheets in `pre-test.xlsx`**: `問卷統計`, `答題分數比重`, `答題記錄(選項編號)`, `答題記錄(完整選項內容)`. We will use `答題記錄(選項編號)`, but it stores option numbers rather than actual agreement scores; clean it with `actual_score = 8 - option_number`. (Ignore `答題分數比重`: it is the survey platform's own 1-to-5 normalized aggregate, not the 7-point scale we use, and no exercise reads it.)

> Note: each sheet's **first row is actually a big title** (e.g. "round-3 survey - responses"); the real headers are on row 2. That is exactly the trap in Exercise 01.

**The four subscales (plain words)**

- IM Intrinsic Motivation: you do it because it is interesting / enjoyable in itself. Higher is better.
- IR Identified Regulation: maybe not fun, but you value it and choose to do it. Higher is better.
- ER External Regulation: you do it because you are required to, want a reward, or fear failing. Higher means more reliance on external pressure (lower quality).
- AM Amotivation: you do not know why you are doing it; it feels pointless. **This is the only "higher = worse" subscale**, so AM rising after the course is bad news, while AM dropping would be good news.

**`grade-report.csv`**: **51 students**, columns `id, rank, course, normal, midterm, final`.

**Bonus (do respondent counts match?)**: pre-test `答題記錄(選項編號)` has **43** respondents, post-test has **44**. They **do not match** (intentional; handled next exercise).

### Acceptance check ✓
- [x] pre-test.xlsx has **4 sheets**
- [x] **AM (Amotivation)** is the "higher = worse" subscale
- [x] **51 students**, columns `id, rank, course, normal, midterm, final`
