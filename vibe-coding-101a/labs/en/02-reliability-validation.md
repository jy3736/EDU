# Exercise 02 - Survey Reliability & Validity

## Learning goals

- Combine 16 items into 4 subscale scores (IM / IR / ER / AM).
- Use **Cronbach's alpha** to judge whether items in a subscale measure the same thing.
- Learn to stay skeptical even when numbers look fine.

## Why it matters

The step most often skipped, yet most important: **is this survey trustworthy?** If the four items in a subscale disagree with each other, averaging them is meaningless, and any later t-test is built on sand. Cronbach's alpha is the standard reliability index: closer to 1 is better (alpha >= 0.7 is commonly "acceptable").

## Tasks

Use the cleaned files from Exercise 01: `../_results/clean_pre.csv` and `../_results/clean_post.csv`. Subscale mapping (from [exercises/data/sims-questionnaire-items.md](../data/sims-questionnaire-items.md)): IM = Q1,Q5,Q9,Q13; IR = Q2,Q6,Q10,Q14; ER = Q3,Q7,Q11,Q15; AM = Q4,Q8,Q12,Q16.

1. For each student, compute 4 subscale scores (**mean of the four items**), one file each for pre and post, saved as `../_results/subscale_scores_pre.csv` and `../_results/subscale_scores_post.csv` (columns: `帳號, IM, IR, ER, AM`).
2. Compute **Cronbach's alpha** for all four subscales in **both** pre and post (8 numbers total); save to `../_results/reliability.csv`.
3. Ask the agent to flag any alpha **below 0.7** and hypothesize why.
4. Write one sentence: overall, is this survey reliable, and where should we be careful?

## Prompt starters

> For this one I'd like your help checking the survey's reliability. If you need to run code, use `/Users/jyang/py312-venv/bin/python3`, and read the files I cleaned last time, `exercises/_results/clean_pre.csv` and `clean_post.csv`.
> The subscale-to-item mapping is: IM=Q1,Q5,Q9,Q13; IR=Q2,Q6,Q10,Q14; ER=Q3,Q7,Q11,Q15; AM=Q4,Q8,Q12,Q16.
> First, for each student work out the 4 subscale scores, each one the mean of that subscale's four items, and save pre and post separately: `subscale_scores_pre.csv`, `subscale_scores_post.csv` (columns 帳號, IM, IR, ER, AM).
> Then compute a Cronbach's alpha for each subscale in both pre and post. Please just do this from the formula, don't install an extra package for it. Put the results in a table `reliability.csv` with columns like subscale, pre_alpha, post_alpha.
> Once that's done, flag any alpha below 0.7 and take a guess at why, and then tell me in one sentence whether this survey is trustworthy.
> Please print the reliability table out for me to see.

## Acceptance checks

- [ ] `subscale_scores_pre.csv` has **43 rows** and `subscale_scores_post.csv` has **44 rows**; all scores within **1-7**.
- [ ] The 8 alphas in `reliability.csv` are approximately (second decimal may vary):

  | Subscale | Pre alpha | Post alpha |
  |---|---|---|
  | IM | 0.93 | 0.95 |
  | IR | 0.90 | 0.96 |
  | ER | **0.36** | 0.92 |
  | AM | 0.86 | 0.87 |

- [ ] The agent flags **ER pre-test alpha ~= 0.36** as too low (well below 0.7).

## Bonus / fun

ER pre-test reliability is only 0.36 but post-test jumps to 0.92, which is unusual. Recall from Exercise 01 that **item 11 (an ER item) was reworded** between pre and post. Ask the agent: if we **drop Q11** from the pre-test ER and use only Q3, Q7, Q15, does alpha improve? This shows how one poorly worded item can sink a subscale's reliability.

## Facilitator hints

- No need for `pingouin`. Formula: `alpha = k/(k-1) * (1 - sum(item variances) / total-score variance)`, where k is the item count, using sample variance (ddof=1).
- Teaching point: IM/IR/AM are strong; only ER pre-test breaks, traceable to the Q11 rewrite. A great "one hidden problem inside pretty results" lesson.
- Dropping Q11 noticeably raises the pre-test ER alpha (the item goes from negatively correlated to consistent); good live demo.
- Remind learners AM is reliable but reverse-meaning (high = amotivation); save the direction discussion for Exercise 03.
