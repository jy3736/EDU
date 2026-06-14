# Exercise 06 - From a Spoken Reflection to Structured Insights (optional extension)

## Learning goals

- Experience having an AI agent process **spoken, rambling, repetitive human text** instead of clean numbers.
- Learn to ask for structured output and then check that the agent neither invents things nor smooths away the point.
- Connect a qualitative reflection to the earlier quantitative work, and feel one important idea: **an average can hide two opposite subgroups of students**.

## Why it matters

The earlier exercises all dealt with tidy numbers. But what teaching actually produces a lot of is unedited spoken material: meeting recordings, after-class notes, interview transcripts. An agent is great at pulling key points out of this, but it also makes two classic mistakes here: it adds things the speaker never said (hallucination), and, in the name of smooth prose, it drops the very turn the speaker cared about. So this exercise is not just "ask the agent to summarize" but **can you tell whether the summary is faithful**.

> ⚠️ This spoken reflection is from a **different course** (a Digital-Logic course that used AI), not the survey we analyzed earlier. Note carefully: in that course the instructor saw **AM (amotivation) rise**, whereas in our dataset AM **fell**. The directions are opposite, which is exactly what makes them useful for one question: why is "did the average move in the good direction" not enough?

## Tasks

Read [exercises/data/instructor-spoken-reflection.md](../data/instructor-spoken-reflection.md), an instructor's spoken draft of a teaching reflection.

1. Ask the agent to organize it into a **structured set of key points**, covering at least the five themes the instructor names himself: **course design, introducing AI, student divergence, why AM (amotivation) rose, and follow-up adjustments**.
2. Ask the agent to extract the instructor's key insight (roughly: "**the average may be mixing two different groups of students together**") and explain in one sentence what it warns us about when reading the Exercise 03 t-test results.
3. Contrast the directions: our dataset's AM fell, this instructor's course had AM rise. Ask the agent to explain why, in both cases, "just checking whether the average moved" can lead you to the wrong conclusion.
4. (extension, ties to Exercise 05) Fold two or three of the distilled points into the "teaching reflection" section of your Exercise 05 report.

## Prompt starters

> I've got a teaching reflection that I recorded out loud. It's a bit messy and repeats itself, the file is `exercises/data/instructor-spoken-reflection.md`. Can you help me clean it up?
> First pull out the key points and organize them into a few clear themes. Make sure you cover these five: course design, how I brought in AI, how student levels split apart, why amotivation (AM) actually went up, and how I want to adjust things next time.
> The part I personally think matters most is where I talk about "the average maybe mixing two different kinds of students together." Please pick that out and tell me in one plain sentence how it connects to the t-test results we computed earlier.
> One more thing I'm chewing on: in my course AM went up, but in another survey dataset AM went down. Why is it that in both cases just looking at whether the average moved isn't enough to draw a conclusion?
> A heads-up: this is me talking out loud, there are no numbers in it. If any percentages or statistics show up in your summary, you made them up, so please don't do that.

## Acceptance checks

- [ ] The structured points actually cover the **five themes** (course design, AI introduction, student divergence, AM rising, follow-up adjustments).
- [ ] The agent captures the core insight that **the average mixes two student groups**, not just a vague "the course had ups and downs".
- [ ] The agent **reorganizes and condenses** rather than pasting the rambling text back verbatim.
- [ ] The agent **invents no numbers** (the source has none; any percentage or mean score is a hallucination to catch).

## Bonus / fun

Ask the agent to rewrite the spoken reflection into a tidy ~150-word formal paragraph you could drop into a report. Then **follow up with one question**: "what repetition did you cut or merge just now?" Check whether, in making it read smoothly, it quietly lost the caveat that "one group of students was actually left behind." This is exactly what you have to watch when working with an agent: **reading nicely is not the same as keeping your meaning**.

## Facilitator hints

- This is qualitative; there is no single right answer. Judge it by whether the summary keeps the instructor's real tension: AI amplifies students who already have some footing, but may leave behind those who never grasped the basics.
- **Be sure to remind learners**: this reflection is a **different course** (Digital Logic, AM rose), not our survey dataset (AM fell). Don't let them think this text explains our numbers. The only shared thing is the concept: a moving average can mask two subgroups heading in opposite directions.
- Most common agent failures: inventing statistics, and stating the speaker's hedged uncertainty too confidently. Have learners hunt for both.
- Best taught alongside Exercises 03 and 05: it echoes "don't call the course a success just because the mean improved."
