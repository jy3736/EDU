# Exercise 00 prompt - Meet the data

> These are sequential messages in **one** chat with your agent. Send them one at a time,
> read each reply, then send the next. Later turns assume the earlier ones, so we don't
> repeat the setup. That back-and-forth is the real skill.

**Message 1** | open, get to know the files
> I'm working on a learning-motivation survey and I don't know the data yet, so help me get oriented first. Start by listing the files in `data/`, with a one-line note on each. Don't analyze anything yet.

**Message 2** | structure of the pre-test file
> Good. Now open `pre-test.xlsx` and tell me its sheet names, and for each sheet roughly which columns and how many rows.

**Message 3** | understand the four subscales (verify it yourself)
> Now read `sims-questionnaire-items.md` and explain IM / IR / ER / AM in plain words, and point out which one means "a higher score is actually worse".

**Message 4** | the grades file
> Last, take a look at `grade-report.csv`: how many students, and which columns?

**Message 5** | a quick observation (bonus, you'll use it next time)
> Oh, while you're at it, compare the answer records in pre-test vs post-test: do the two have the same number of respondents?
