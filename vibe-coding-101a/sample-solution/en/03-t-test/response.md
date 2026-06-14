# Exercise 03 sample response - t-test

> Generated file: [outputs/ttest_results.csv](outputs/ttest_results.csv).

I aligned the two subscale files by student id and kept only the 41 who did both (paired n = 41, df = 40), then ran a paired t-test (post vs pre) for each subscale.

**Paired t-test results (n = 41, df = 40)**

| Subscale | Pre M(SD) | Post M(SD) | ΔM | t(40) | p | Cohen's dz |
|---|---|---|---|---|---|---|
| IM | 5.23 (1.04) | 5.74 (0.99) | +0.51 | 3.52 | 0.001 | 0.55 |
| IR | 5.38 (0.98) | 5.82 (1.00) | +0.44 | 3.42 | 0.002 | 0.53 |
| ER | 5.15 (0.70) | 5.83 (0.95) | +0.68 | 4.63 | <0.001 | 0.72 |
| AM | 3.41 (1.07) | 3.94 (1.43) | +0.53 | 3.24 | 0.002 | 0.51 |

**One-sentence reading of each**

- IM: intrinsic motivation increased significantly (p = 0.001); students learning "because it is interesting" strengthened.
- IR: identified regulation increased significantly (p = 0.002); students endorsed the course's value more strongly.
- ER: external regulation increased significantly (p < 0.001), but read this one cautiously (see below); it means more pressure/requirement, not necessarily better motivation.
- AM: amotivation increased significantly (p = 0.002). **Higher AM is worse, so this is bad news**: students feel more "I don't know why I'm learning this."

Effect sizes |dz| are about 0.5 to 0.7 (medium): the differences are practically meaningful, not just statistically significant.

**What to state cautiously**

1. **n = 41 is small**: extreme individuals carry more weight, so do not overstate the conclusions.
2. **ER deserves the most caution**: pre-test ER reliability was only 0.36 (Exercise 02), and item 11 was reworded between pre and post, so pre and post are not measuring quite the same thing. ER's "significant increase" may partly reflect the changed item, not a real change in students.

> Don't read AM backwards: IM/IR rising is positive, but AM rising means more amotivation (bad).

### Acceptance check ✓
- [x] Paired n = **41**, df = **40**
- [x] Values match the table above (small decimal differences fine)
- [x] **AM increase read as "more amotivation, bad news"**, while IM/IR increases are positive signs
