# Exercise 04 - Charts That Tell the Story

## Learning goals

- Turn numbers into charts people understand at a glance.
- Practice iterating with the agent on titles, axis labels, legends, colors.

## Why it matters

One good chart beats ten lines of numbers. But an agent's first attempt often has no title, unlabeled axes, or non-Latin text rendered as empty boxes. Charting is the best place to practice the **iterate** habit: glance, say what is wrong, ask for a fix.

## Tasks

Use the subscale scores and grade data from earlier. Have the agent save figures to `../_results/figures/`.

1. **Grouped bar chart** of the four subscale means (IM/IR/ER/AM), each with two bars side by side (pre, post).
2. **Box plot** of subscale distributions to see spread and outliers.
3. **Slope chart** linking each subscale's pre point to its post point, showing direction at a glance.
4. **Histogram** of `final` from [exercises/data/grade-report.csv](../data/grade-report.csv), with a **passing line at 60**.

Every chart needs a clear **title**, **axis labels**, and a **legend** where relevant.

## Prompt starters

> I'd like your help drawing a few charts. If you need to run code, use `/Users/jyang/py312-venv/bin/python3`, draw with matplotlib, and save the figures to `exercises/_results/figures/`.
> Use `subscale_scores_pre.csv`, `subscale_scores_post.csv` (the 41 matched students) and `exercises/data/grade-report.csv`.
> Please make four of them, each with a clear title, axis labels, and a legend where it helps:
> one grouped bar chart of the four subscales (IM/IR/ER/AM), pre vs post means side by side; one box plot of the four subscale scores; one slope chart of pre vs post means, connecting each subscale's pre point to its post point; and one histogram of the `final` grade, with a vertical passing line at 60.
> One more thing: if any non-Latin text comes out as little empty boxes, please set a matplotlib font that supports it, or just switch to English labels if that's easier.
> After you save them, tell me each figure's filename.

## Acceptance checks

- [ ] `../_results/figures/` contains **4 openable PNGs**.
- [ ] The bar chart and slope chart both show **all four subscales increasing** from pre to post (matching Exercise 03).
- [ ] Every chart has a **title and axis labels**, with no empty-box glyphs.
- [ ] The grade histogram shows the **60 passing line** and a cluster of low/zero scores on the left.

## Bonus / fun

Pick your most story-telling chart and ask the agent to polish it: recolor, resize fonts, add a one-line **annotation** (e.g. on the slope chart, "all four motivation subscales declined after the course"). Then ask: **if this went into a one-page report for the dean, what is still missing?** Notice that "pretty" and "communicates" are different goals.

## Facilitator hints

- Fonts for non-Latin labels are the usual snag. On macOS try `PingFang TC` / `Heiti TC`; if stuck, have learners ask the agent to switch to English labels just to get a figure out.
- The point is not beauty but learners saying "I can't read this, fix it." Encourage at least one iteration.
- The slope chart tells the "all four rose, but AM rising is a warning" story best and makes a good hero image for Exercise 05.
