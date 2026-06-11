# Mascot Use Indicator

Use this guide when selecting a mascot from `mascots/` for page generation. Prefer the mascot whose visual action matches the page purpose, not just the topic.

## Quick Selection Rules

- Use pointing or idea mascots for concept introductions, tips, and key takeaways.
- Use book or writing mascots for reading, practice, worksheets, and learning activities.
- Use laptop mascots for coding, digital tools, online exercises, dashboards, and examples with files.
- Use checklist mascots for plans, rubrics, learning objectives, procedures, and completion checks.
- Use thumbs-up or greeting mascots for success, encouragement, confirmation, and wrap-up pages.
- Use statistics/chart mascots only for probability, statistics, data analysis, graphs, and sampling topics.
- Use arms-crossed or thinking mascots for reflection, review, challenge questions, or serious reminders.

## Mascot Index

| File | Visual Description | Best Use | Avoid For |
|---|---|---|---|
| `yu01.png` | Teacher with chalkboard showing learning, exploration, growth | Course/unit opening, learning goals, overview page, class introduction | Detailed technical examples |
| `yu02.png` | Reading a book and pointing to an idea bulb | Concept introduction, insight box, learning tip, recommended reading | Assessment result pages |
| `yu03.png` | Working at laptop with stacked books | Coding page, online activity, self-study task, digital resource | Non-technical celebration |
| `yu04.png` | Thumbs-up with checklist board | Completion page, checklist success, progress confirmation, goals achieved | Warning or error messages |
| `yu05.png` | Waving and holding sign about continuous learning | Welcome page, closing page, lifelong learning message, future-facing CTA | Dense technical sections |
| `yu06.png` | Arms crossed, calm/serious | Review, reflection, prerequisite reminder, policy note, challenge prompt | Warm welcome pages |
| `yu07.png` | Holding book and pointing up | Reading-based concept, key idea, learning note, textbook reference | Data-analysis pages |
| `yu08.png` | Magnifying glass | Search, inspect, debug, observe, investigate, find evidence | Final congratulations |
| `yu09.png` | Open-hand presenting gesture | Explanation, section transition, neutral guidance, presenting options | High-emphasis success |
| `yu10.png` | Laptop writing/study | Exercise walkthrough, coding practice, online worksheet, example solution | Purely conceptual quote |
| `yu11.png` | Fist/encouragement with sparkle | Motivation, keep going, small win, progress message | Formal rubric/checklist |
| `yu12.png` | Reading blue book and pointing up | Definition, concept note, study prompt, theory explanation | Software tooling page |
| `yu13.png` | Pointing at learning-plan clipboard | Learning plan, objectives, schedule, task list, study strategy | Open-ended reflection |
| `yu14.png` | Thumbs-up with sparkle | Correct answer, success state, achievement, positive feedback | Caution or warning |
| `yu15.png` | Writing in notebook with books | Practice problem, worksheet, note-taking, homework, journal activity | Pure data visualization |
| `yu16.png` | Arms crossed, neutral | Summary, review checkpoint, serious reminder, compare/contrast prompt | Celebration page |
| `yu17.png` | Waving with blue emphasis marks | Friendly greeting, help page, contact/support, welcome side graphic | Assessment failure/error |
| `yu18.png` | Pointing up with orange emphasis marks | Important note, rule, key formula, misconception alert | Final certificate/success |
| `yu19.png` | Reading green book | Reading assignment, source material, concept learning, quiet study | Interactive/coding workflow |
| `yu20.png` | Presenting upward chart | Data trends, performance chart, progress analytics, graph explanation | Non-quantitative welcome |
| `yu21.png` | Laptop with books and plant | Online learning environment, coding workspace, dashboard, self-paced activity | Celebration/success message |
| `yu22.png` | Thumbs-up with blue emphasis marks | Confirmation, correct result, quick success, positive checkpoint | Detailed procedure or warning |
| `yu23.png` | Thinking pose with idea bubble | Reflection, brainstorm, problem-solving prompt, design thinking | Direct instruction steps |
| `yu24.png` | Probability formula with coin | Probability topic, formula callout, random experiment, math concept | General course intro |
| `yu25.png` | Statistical-analysis checklist | Data-analysis workflow, statistics procedure, research steps, rubric | Casual welcome/encouragement |
| `yu26.png` | Laptop with scatterplot speech bubble | Regression, correlation, data exploration, analytics exercise | Non-data coding topic |
| `yu27.png` | Statistics book with formula bubble and raised finger | Statistics concept, expected value/variance, formula explanation, theorem note | General motivational section |

## Suggested Page Mapping

| Page Type | Recommended Mascots |
|---|---|
| Course or chapter landing | `yu01.png`, `yu05.png`, `yu17.png` |
| Learning objectives | `yu01.png`, `yu04.png`, `yu13.png`, `yu25.png` |
| Concept explanation | `yu02.png`, `yu07.png`, `yu12.png`, `yu18.png`, `yu19.png`, `yu27.png` |
| Practice or homework | `yu10.png`, `yu15.png`, `yu21.png` |
| Coding or digital workflow | `yu03.png`, `yu10.png`, `yu21.png`, `yu26.png` |
| Debugging or investigation | `yu08.png`, `yu23.png`, `yu26.png` |
| Data/statistics/probability | `yu20.png`, `yu24.png`, `yu25.png`, `yu26.png`, `yu27.png` |
| Feedback or success | `yu04.png`, `yu11.png`, `yu14.png`, `yu22.png` |
| Reflection or review | `yu06.png`, `yu16.png`, `yu23.png` |
| Closing or future learning | `yu05.png`, `yu11.png`, `yu17.png`, `yu22.png` |

## Prompt Tags

Use these tags in page-generation prompts to choose mascots programmatically:

| Tag | Mascots |
|---|---|
| `intro` | `yu01.png`, `yu05.png`, `yu17.png` |
| `concept` | `yu02.png`, `yu07.png`, `yu12.png`, `yu18.png`, `yu19.png`, `yu27.png` |
| `practice` | `yu10.png`, `yu15.png`, `yu21.png` |
| `coding` | `yu03.png`, `yu10.png`, `yu21.png`, `yu26.png` |
| `checklist` | `yu04.png`, `yu13.png`, `yu25.png` |
| `success` | `yu04.png`, `yu11.png`, `yu14.png`, `yu22.png` |
| `search` | `yu08.png`, `yu23.png`, `yu26.png` |
| `statistics` | `yu20.png`, `yu24.png`, `yu25.png`, `yu26.png`, `yu27.png` |
| `reflection` | `yu06.png`, `yu16.png`, `yu23.png` |
| `warning` | `yu06.png`, `yu16.png`, `yu18.png` |

## Layout Notes

- Use mascots as supporting figures, usually 120-220 px wide in content pages.
- For landing pages or section openers, use 240-360 px wide if there is enough whitespace.
- Keep text away from the mascot face and hands; several mascots include signs, charts, or gestures that need clear space.
- For right-side callouts, prefer mascots facing or gesturing left: `yu01.png`, `yu04.png`, `yu09.png`, `yu20.png`, `yu25.png`, `yu27.png`.
- For left-side callouts, prefer neutral front-facing mascots: `yu06.png`, `yu11.png`, `yu14.png`, `yu16.png`, `yu17.png`, `yu22.png`, `yu23.png`.
- Avoid using more than one mascot in a small section. Use at most one mascot per major page section unless building a gallery.
