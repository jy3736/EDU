# Exercise 04 prompt - Charts

> Sequential messages in one chat. Build the charts one at a time, look at each before
> asking for the next, and don't repeat the setup. Charting is the best place to practice
> the **iterate** habit.

**Message 1** | set the scene and draw the first chart
> I'd like your help drawing a few charts. Do whatever you need behind the scenes, and save them all to `_results/figures/`. Use `_results/subscale_scores_pre.csv`, `subscale_scores_post.csv` (the 41 matched students) and `data/grade-report.csv`. Every chart needs a clear title, axis labels, and a legend where it helps. Start with the first one: a grouped bar chart of the four subscales (IM/IR/ER/AM), pre vs post means side by side.

**Message 2** | next chart (no need to restate the data)
> Nice. Now a box plot of the four subscale scores, to see spread and outliers.

**Message 3** | next chart
> Next, a slope chart connecting each subscale's pre point to its post point, so the direction shows at a glance.

**Message 4** | next chart
> Last, a histogram of the `final` grade, with a vertical passing line at 60.

**Message 5** | don't like it? ask for a fix (iterate)
> Hold on, the labels on the right of the slope chart overlap and I can't read them, please spread them out. Also, if any non-Latin text shows as empty boxes, make it display properly or just use English labels. When you're done, give me each figure's filename.

**Message 6** | polish the hero chart into something usable (bonus)
> Take the slope chart as the hero image and polish it: tweak the colors and font sizes, and add a one-line annotation, "all four subscales increased, but AM rising is a warning". If this went into a one-page report for the dean, what is still missing?
