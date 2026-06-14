# Facilitator Notes

> For the facilitator: expected answers, the deliberate "traps," common learner mistakes, and timing for each exercise.
> This is not a code answer key, but a guide to judge whether learners' results are right.

---

## Overall timing

| Exercise | Suggested time | Format |
|---|---|---|
| 00 Meet the data | 15 min | Warm-up, build confidence |
| 01 Data cleaning | 30 min | First real pitfall (title row, mismatched n) |
| 02 Reliability | 30 min | Core concept (Cronbach's alpha) |
| 03 t-test | 35 min | Centerpiece (reading direction) |
| 04 Charts | 30 min | Practice iterating |
| 05 Capstone | 30 min | Final deliverable |
| 06 Spoken reflection (optional) | 20 min | Qualitative synthesis + tie to quantitative |

A half-day covers all; a 2-hour version focuses on 01 -> 02 -> 03, with 04/05 as extensions.

---

## The five built-in teaching traps

1. **Title row**: each xlsx sheet's first row is a big title; the real headers are on row 2 (`header=1`). Agents often forget, so the header becomes the title string.
2. **Mismatched n**: pre 43, post 44, only 41 matched. Forces the merge and paired-data concept.
3. **Item 11 reworded**: the ER item Q11 differs in wording between pre and post; it is the culprit behind ER's broken pre-test reliability.
4. **Reverse AM**: amotivation scores are worse when higher, so a drop is good. The most misread point.
5. **Grade tail**: `final` has 6 zeros and 13 students below 60, obvious in the histogram.

---

## Expected answers per exercise

### 01 Data cleaning
- Pre **43** rows, post **44** rows, columns `帳號, Q1...Q16`.
- **41** matched. Pre-only: **S05, S47**. Post-only: **S01, S38, S41**.
- All answers within **1-7**, no missing values.
- Common error: not skipping the title row; counting blank rows (gives 44/45).

### 02 Reliability (Cronbach's alpha)
| Subscale | Pre | Post |
|---|---|---|
| IM | 0.93 | 0.95 |
| IR | 0.90 | 0.96 |
| ER | **0.36** (!) | 0.92 |
| AM | 0.86 | 0.87 |

- The only warning is **ER pre-test ~= 0.36**. Bonus: dropping Q11 (keeping Q3,Q7,Q15) raises pre-test ER alpha noticeably.
- Formula: `alpha = k/(k-1) * (1 - sum(item variances) / total-score variance)`, sample variance ddof=1, no pingouin needed.

### 03 Paired t-test (n=41, df=40)
| Subscale | Pre M(SD) | Post M(SD) | ΔM | t(40) | p | dz |
|---|---|---|---|---|---|---|
| IM | 5.23(1.04) | 5.74(0.99) | +0.51 | 3.52 | 0.001 | 0.55 |
| IR | 5.38(0.98) | 5.82(1.00) | +0.44 | 3.42 | 0.002 | 0.53 |
| ER | 5.15(0.70) | 5.83(0.95) | +0.68 | 4.63 | <0.001 | 0.72 |
| AM | 3.41(1.07) | 3.94(1.43) | +0.53 | 3.24 | 0.002 | 0.51 |

- **All four rise significantly**, with medium effect sizes (|dz| 0.5-0.7).
- **Reading key**: IM/IR up = positive signs; ER up = stronger external regulation; **AM up = more amotivation = bad**.
- Honest caveats: n=41 is small; ER (poor pre-test reliability + Q11 rewrite) is the one to treat most cautiously.

### 04 Charts
- `_results/figures/` should have 4 PNGs. Bar and slope charts both show "all four rose".
- Most common snag: non-Latin labels render as empty boxes. Fix: set a CJK font (macOS `PingFang TC`) or switch to English labels.

### 05 Capstone
- The merged file contains only students present in both survey and grades.
- Post-test IM vs final correlation is near zero, slightly positive, and non-significant; stress correlation is not causation.
- A good report states its limits (n=41, ER reliability, Q11, AM direction).

### 06 Spoken reflection (optional)

- Qualitative, no single right answer. Judge it by whether the summary keeps the instructor's core tension: AI amplifies students who already have footing, but may leave behind those who never grasped the basics.
- **Be sure to remind learners**: this reflection is from a **different course** (Digital Logic, **AM rose**), opposite in direction to our survey dataset (**AM fell**). They are not the same story. The only shared thing is the concept: a moving average can mask two subgroups going opposite ways.
- Most common agent failures: **inventing statistics** (the source has no numbers at all), and stating the speaker's hedged uncertainty too confidently. Have learners hunt for both.
- The bonus (rewrite to ~150 words + list what was cut) best reveals whether the agent dropped the "one group was left behind" caveat for the sake of smooth prose.
- Best taught alongside 03 and 05: it echoes "don't call the course a success just because the mean improved."

### 07 Q11 sensitivity reanalysis

| Subscale | Items | Pre alpha | Post alpha |
|---|---|---|---|
| IM | Q1,Q5,Q9,Q13 | 0.93 | 0.95 |
| IR | Q2,Q6,Q10,Q14 | 0.89 | 0.95 |
| ER | Q3,Q7,Q15 | **0.92** | 0.95 |
| AM | Q4,Q8,Q12,Q16 | 0.86 | 0.87 |

| Subscale | Pre M(SD) | Post M(SD) | ΔM | t(40) | p | dz |
|---|---|---|---|---|---|---|
| IM | 5.23(1.04) | 5.74(0.99) | +0.51 | 3.52 | 0.001 | 0.55 |
| IR | 5.38(0.98) | 5.82(1.00) | +0.44 | 3.42 | 0.001 | 0.53 |
| ER | 5.59(1.01) | 5.86(0.97) | +0.27 | 1.83 | 0.075 | 0.29 |
| AM | 3.41(1.07) | 3.94(1.43) | +0.53 | 3.24 | 0.002 | 0.51 |

- Key point: dropping Q11 improves ER reliability, but ER's paired t-test is no longer significant at 0.05.
- This is a data-sensitivity demonstration: the purpose is not to make the result prettier, but to explain honestly how a questionnaire-design issue changes the conclusion.
- Most common error: the agent reuses the original ER "significant increase" narrative and misses that Q11-drop ER p is now about 0.075.

---

## A live "verify" demo for facilitators

On the projector, run a minimal script with the bundled Python to check answers on the spot (the point: don't blindly trust the agent, you can check too):

```bash
/Users/jyang/py312-venv/bin/python3 - <<'PY'
import pandas as pd
from scipy import stats
SUB={'IM':[1,5,9,13],'IR':[2,6,10,14],'ER':[3,7,11,15],'AM':[4,8,12,16]}
def load(p):
    d=pd.read_excel(p,sheet_name='答題記錄(選項編號)',header=1).dropna(how='all')
    o=d[['帳號']].copy()
    for i,c in enumerate(d.columns[3:19],1): o[f'Q{i}']=8-pd.to_numeric(d[c],errors='coerce')
    return o.dropna(subset=['帳號'])
pre,post=load('exercises/data/pre-test.xlsx'),load('exercises/data/post-test.xlsx')
m=sorted(set(pre['帳號'])&set(post['帳號']))
print('pre',len(pre),'post',len(post),'matched',len(m))
def sub(d):
    return pd.DataFrame({'帳號':d['帳號'],**{s:d[[f'Q{q}' for q in qs]].mean(1) for s,qs in SUB.items()}}).set_index('帳號')
a,b=sub(pre),sub(post)
for s in SUB:
    t,p=stats.ttest_rel(b.loc[m,s],a.loc[m,s]); print(s,'t=%.2f p=%.4f'%(t,p))
PY
```

Expected output: `pre 43 post 44 matched 41`, with the four t-values matching the table above.

---

## Coaching reminders

- Keep stressing **Prompt -> Verify -> Iterate**. Each time a learner gets a result, ask: "How do you know it's right?"
- Frame the agent's mistakes as the best teachable moments, not failures.
- Remind: never edit raw files in [exercises/data/](../data/); all outputs go to [../_results/](../_results/).
