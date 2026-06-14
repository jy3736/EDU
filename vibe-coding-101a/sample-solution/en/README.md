# Sample Solution (English)

> A worked, validated walkthrough of the whole workshop, for learners who missed class
> or want to review afterwards. Every prompt was actually run and every number checked
> against the worksheet's Acceptance checks.

> Looking for the Mandarin version? See [../zh/README.md](../zh/README.md).

## How to use

Each exercise has its own folder containing:

- `prompt.md` a short sequence of messages to send the agent one at a time, split like a real conversation where each turn builds on the last
- `response.md` a model agent reply plus the verify step
- `outputs/` the real datasets and figures, self-contained

Suggested flow: read the matching worksheet ([../../exercises/en/](../../exercises/en/)), try
driving the agent yourself, and **check against this only after**. Reading the answer first
skips the real skill: Prompt -> Verify -> Iterate.

This package is self-contained: its own copy of the raw data is in [../data/](../data/), so the
prompts reference `data/...` and save working files to `_results/...` relative to this folder.

## Contents

| # | Exercise | Solution |
|---|---|---|
| 00 | Meet the data | [00-meet-the-data/](00-meet-the-data/) |
| 01 | Data cleaning | [01-data-cleaning/](01-data-cleaning/) |
| 02 | Reliability | [02-reliability/](02-reliability/) |
| 03 | t-test | [03-t-test/](03-t-test/) |
| 04 | Charts | [04-charts/](04-charts/) |
| 05 | Capstone report | [05-capstone/](05-capstone/) |
| 06 | Spoken reflection | [06-qualitative/](06-qualitative/) |
| 07 | Q11 sensitivity reanalysis | [07-q11-sensitivity-reevaluation/](07-q11-sensitivity-reevaluation/) |

## Where the outputs come from

Everything in each `outputs/` folder was produced by actually running the exercise prompts
and was checked against the worksheet's Acceptance checks before being included. **You don't
need to run anything yourself**; just drive your AI agent with the prompts. The agent does all
the work behind the scenes, and you read the result and verify.

## Validated numbers at a glance

| Item | Value |
|---|---|
| Pre, Post, Matched | 43, 44, 41 |
| Pre-only | S05, S47 |
| Post-only | S01, S38, S41 |
| ER pre-test alpha | 0.36 (warning) |
| Paired t | all four subscales increase significantly |
| Q11-drop ER | pre-test alpha about 0.92; paired t-test p about 0.075, no longer significant at 0.05 |
| AM direction | rising = bad news |

> ⚠️ These are the real results recomputed from the provided raw data. The worksheet
> describes the post-IM vs final-grade correlation as "usually positive but weak", but the
> `答題記錄(選項編號)` must first be converted with `actual_score = 8 - option_number`.
> The actual data comes out near zero, slightly positive, and non-significant (see Exercise 05).
> **Always trust your own recomputed result.**

## Notes

- Never modify the cloned raw data in [../data/](../data/).
- Save your own working files to a `_results/` folder in this package so you don't overwrite the reference `outputs/`.
- Figures use English labels to dodge empty-box glyphs; if you want Chinese labels, just ask your agent to switch them.
