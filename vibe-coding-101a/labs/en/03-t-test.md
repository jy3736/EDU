# Exercise 03 - t-test: Did Pre vs Post Really Differ?

## Learning goals

- Use a **paired t-test** to compare the same students before and after.
- Read both the **p-value** and the **effect size**, not just "significant or not".
- Correctly interpret the reverse-meaning AM subscale.

## Why it matters

"After the course, did students' motivation change?" This is what instructors most want to answer. But you **cannot just compare two averages**; the gap might be luck. A t-test tells you how solid the gap is. Because it is the same people measured twice, use a **paired** t-test, not an independent two-sample test.

## Tasks

Use the subscale scores from Exercise 02, keeping only the **41 students who did both** (`../_results/matched_ids.csv`).

1. Run a **paired t-test** for each of IM / IR / ER / AM (`scipy.stats.ttest_rel`, post vs pre).
2. For each subscale report: pre M(SD), post M(SD), difference ΔM, t, degrees of freedom df, p, and the effect size **Cohen's dz**. Save to `../_results/ttest_results.csv`.
3. Explain each result in one sentence. **Watch AM**: what does an increase mean?
4. Ask the agent to caution which conclusions need care given **n = 41** or the **item-11 rewrite**.

## Prompt starters

> I've already worked out the subscale scores, and now I'd like your help running the t-tests. If you need to run code, the python on this machine is at `/Users/jyang/py312-venv/bin/python3`, use that one, and you'll want scipy.
> The files are under `exercises/_results/`: `subscale_scores_pre.csv`, `subscale_scores_post.csv`, `matched_ids.csv`. First keep only the 41 students who did both pre and post, and line them up by student id.
> Then run a paired t-test for each of IM, IR, ER, AM (use scipy.stats.ttest_rel, direction = post minus pre).
> For each subscale, work it out and save it to `ttest_results.csv`: pre mean and SD, post mean and SD, difference ΔM, t value, degrees of freedom, p value, and the effect size Cohen's dz (dz is just the mean of the differences divided by their SD).
> Once that's done, walk me through each result in one plain sentence. One thing to flag for me specifically: AM is "amotivation", a higher score is worse, so if AM goes up that's bad news, don't read it backwards.
> Last, help me think about which conclusions need to be stated cautiously because there are only 41 people, or because item 11 was reworded between pre and post.

## Acceptance checks

- [ ] Paired n = **41**, df = **40**.
- [ ] Results approximately (small decimal differences are fine):

  | Subscale | Pre M(SD) | Post M(SD) | ΔM | t(40) | p | Cohen's dz |
  |---|---|---|---|---|---|---|
  | IM | 5.23 (1.04) | 5.74 (0.99) | +0.51 | 3.52 | 0.001 | 0.55 |
  | IR | 5.38 (0.98) | 5.82 (1.00) | +0.44 | 3.42 | 0.002 | 0.53 |
  | ER | 5.15 (0.70) | 5.83 (0.95) | +0.68 | 4.63 | <0.001 | 0.72 |
  | AM | 3.41 (1.07) | 3.94 (1.43) | +0.53 | 3.24 | 0.002 | 0.51 |

- [ ] The agent reads **AM rising as more amotivation (bad news)**, while IM/IR rising are positive signs.

## Bonus / fun

Now try an **independent t-test**. Split students in [exercises/data/grade-report.csv](../data/grade-report.csv) by `final` (final grade) into a high group (>= class median) and a low group, and compare their **post-test IM (intrinsic motivation)**. Merge grades and survey on `帳號` / `id` first. Ask the agent: **do higher-scoring students really have higher intrinsic motivation?** And think about how this differs from the paired test.

## Going further

A t-test tells you whether the **average** moved significantly, but **a rising average does not mean every student rose**. The same mean can hide one group improving and another sliding, mixed together. To feel this concretely, try the optional [Exercise 06](06-qualitative-reflection.md): it uses a spoken instructor reflection to show how an average can hide two opposite groups of students.

## Facilitator hints

- Key point: all four subscales rise and all are significant. But "rise" is not uniformly good: IM/IR rising is positive, ER rising means stronger external regulation, and AM rising is bad (more amotivation). Learners most often misread this.
- Effect sizes |dz| ~ 0.5-0.7 (medium): the differences are practically meaningful, not just statistically significant.
- Honest caveats: n=41 is small; ER's poor pre-test reliability (Exercise 02) plus the Q11 rewrite make the ER comparison the one to treat most cautiously.
- The bonus has no fixed answer; the point is the paired-vs-independent intuition (same people twice vs two different groups) and aligning ids on merge.
