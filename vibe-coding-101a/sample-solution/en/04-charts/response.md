# Exercise 04 sample response - Charts

> Figures in [outputs/figures/](outputs/figures/).

All four figures are done. To avoid non-Latin text turning into empty boxes, I used English labels. Each has a title, axis labels, and a legend where it helps.

| Filename | Chart | What to look for |
|---|---|---|
| grouped_bar.png | Grouped bar of four subscale means, pre vs post | All four are higher at post |
| box.png | Box plot of four subscales (pre / post) | Spread and outliers |
| slope.png | Slope chart of pre vs post means (hero) | All four lines rise; direction at a glance |
| final_hist.png | Histogram of final grades | Passing line at 60; a cluster of low/zero scores on the left |

**The hero chart is slope.png**: all four lines slope up from pre to post. Interpret the direction carefully: IM/IR rising is positive, ER rising means stronger external pressure, and AM rising means more amotivation, which is a warning.

> The point of iterating is not beauty but you looking at the figure and saying "I can't read this, fix it." For instance you could ask the agent to enlarge fonts, recolor, or add a one-line annotation to the slope chart ("all four subscales increased, but AM rising is a warning").

### Acceptance check ✓
- [x] `outputs/figures/` has **4 openable PNGs**
- [x] Bar and slope charts both show **all four subscales increasing** (matches Exercise 03)
- [x] Every chart has a **title and axis labels**, no empty-box glyphs
- [x] The grade histogram shows the **60 passing line** and a low/zero cluster on the left
