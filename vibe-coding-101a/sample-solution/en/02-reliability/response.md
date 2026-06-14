# Exercise 02 sample response - Reliability

> Generated files in [outputs/](outputs/).

Each student's subscale score is the mean of that subscale's four items, saved to `subscale_scores_pre.csv` (43 rows) and `subscale_scores_post.csv` (44 rows); all scores fall within 1 to 7.

Cronbach's alpha is the standard reliability index for "do the four items in a subscale agree with each other"; it runs from 0 to 1, and closer to 1 means the items measure the same thing (0.7 and up is commonly "acceptable").

**Reliability table (reliability.csv)**

| Subscale | Pre alpha | Post alpha |
|---|---|---|
| IM | 0.93 | 0.95 |
| IR | 0.90 | 0.96 |
| ER | **0.36** | 0.92 |
| AM | 0.86 | 0.87 |

**Only one alpha is below 0.7: ER pre-test ≈ 0.36**, well under the acceptable threshold. The other seven are all above 0.85, which is strong.

**Likely reason**: recall from Exercise 01 that item 11 (an ER item) was reworded between pre and post. One inconsistent item, pointing the opposite way from the others, is enough to sink a subscale's reliability; after the rewrite, post-test ER jumps back to 0.92.

**One-sentence verdict**: the survey is broadly trustworthy (IM/IR/AM are stable across both waves), but **pre-test ER is not, so any comparison that relies on pre-test ER must be treated cautiously**.

**Bonus (drop Q11)**: keeping only Q3, Q7, Q15 for pre-test ER (dropping the reworded Q11) noticeably raises the alpha, because Q11 was negatively correlated with the other three; that single item was dragging the whole subscale down.

### Acceptance check ✓
- [x] `subscale_scores_pre.csv` **43 rows**, `subscale_scores_post.csv` **44 rows**, scores within 1-7
- [x] The 8 alphas match the table above (second decimal may vary)
- [x] Flags **ER pre-test alpha ≈ 0.36** as too low
