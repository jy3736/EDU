# Exercise 07 sample response - Q11 sensitivity reanalysis

> Generated files are in [outputs/](outputs/).

I excluded Q11 from ER and rescored ER as the mean of Q3,Q7,Q15. IM, IR, and AM keep their original item sets. This is a sensitivity analysis, so it does not overwrite the original Exercise 03-05 outputs.

**Q11-drop reliability**

| Subscale | Items used | Pre alpha | Post alpha |
|---|---|---|---|
| IM | Q1,Q5,Q9,Q13 | 0.93 | 0.95 |
| IR | Q2,Q6,Q10,Q14 | 0.89 | 0.95 |
| ER | Q3,Q7,Q15 | **0.92** | 0.95 |
| AM | Q4,Q8,Q12,Q16 | 0.86 | 0.87 |

Pre-test ER alpha rises from about 0.36 to 0.92, which confirms Q11 was the main item undermining pre-test ER reliability.

**Q11-drop paired t-test (n = 41, df = 40)**

| Subscale | Pre M(SD) | Post M(SD) | ΔM | t(40) | p | Cohen's dz |
|---|---|---|---|---|---|---|
| IM | 5.23 (1.04) | 5.74 (0.99) | +0.51 | 3.52 | 0.001 | 0.55 |
| IR | 5.38 (0.98) | 5.82 (1.00) | +0.44 | 3.42 | 0.002 | 0.53 |
| ER | 5.59 (1.01) | 5.86 (0.97) | +0.27 | 1.83 | 0.075 | 0.29 |
| AM | 3.41 (1.07) | 3.94 (1.43) | +0.53 | 3.24 | 0.002 | 0.51 |

The key change is ER: dropping Q11 improves reliability, but the ER pre/post difference is no longer significant at the 0.05 level. That means the original "ER significantly increased" conclusion likely depended on Q11 and should be reported more cautiously.

IM, IR, and AM match the original t-test because their items did not change. AM still needs reverse interpretation: an increase in AM means more amotivation, which is bad news.

### Acceptance check ✓
- [x] Pre has 43 rows; post has 44 rows
- [x] ER uses only Q3,Q7,Q15; AM still uses Q4,Q8,Q12,Q16
- [x] Pre-test ER alpha is about **0.92**
- [x] Paired n = **41**, df = **40**
- [x] Adjusted ER is not described as significant at the 0.05 level
