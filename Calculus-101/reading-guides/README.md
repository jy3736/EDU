# Calculus I Reading Guides (First-Semester, Engineering)

Section-by-section reading guides for a **first-semester college Calculus course
for first-year engineering students**, based on *Calculus, 10th Edition* (Anton,
Bivens, Davis). Source: `../textbooks/calculus-10th-edition-anton.pdf`.

These guides exist so you can scan the concepts and fundamental knowledge of each
chapter and **pick units/sections** when building online teaching/learning
material. Each section is broken down into concepts, definitions and theorems,
prerequisites, objectives, problem types, pitfalls, and tags.

## Scope

Late-transcendentals ordering (Anton's numbering). Six chapters:

| File | Chapter | Pages | Role |
|:-----|:--------|:------|:-----|
| [ch0-before-calculus.md](ch0-before-calculus.md) | 0 Before Calculus | 1-48 | Precalc review / diagnostic |
| [ch1-limits-continuity.md](ch1-limits-continuity.md) | 1 Limits and Continuity | 49-109 | Foundation |
| [ch2-the-derivative.md](ch2-the-derivative.md) | 2 The Derivative | 110-186 | Definition and rules |
| [ch3-derivative-applications.md](ch3-derivative-applications.md) | 3 Derivative in Graphing and Applications | 187-264 | Curve analysis, optimization |
| [ch4-integration.md](ch4-integration.md) | 4 Integration | 265-346 | Definite/indefinite integral, FTC |
| [ch6-exp-log-inverse-trig.md](ch6-exp-log-inverse-trig.md) | 6 Exp, Log, Inverse Trig | 409-487 | Transcendental functions |

Out of scope this round (typically Calculus II or later): Ch 5 (applications of
the integral), Ch 7 (integration techniques), Ch 8 (differential equations),
Ch 9 (series), Ch 10 (parametric/polar), Ch 11-15 (multivariable / vector).

## How to read each section block

```
### n.m  Section Title  (pp. start-end)
- Core concepts        the central ideas
- Key definitions & theorems   named results, rules, formulas
- Prerequisites        what it depends on
- Learning objectives  "students can ..." outcomes
- Problem types / techniques   what the exercises drill
- Common pitfalls      typical student errors
- Tech                 graphing calculator / CAS expectation
- Tags                 see taxonomy below
- Unit-pick note       suggested size, difficulty, core/optional/merge
```

## Tag taxonomy

**Topic:** `#functions` `#limits` `#continuity` `#derivative`
`#differentiation-rules` `#curve-analysis` `#optimization` `#integration`
`#fundamental-theorem` `#transcendental` `#exp-log` `#inverse-trig` `#lhopital`
`#rates-of-change`

**Skill / pedagogy:** `#concept` `#technique` `#proof-rigor` `#visualization`
`#numerical` `#engineering-application` `#review-precalc` `#requires-tech`

**Difficulty:** `#foundational` `#standard` `#challenging`

## Suggested semester unit sequence

A 16 to 18 week semester. Adjust to your calendar; each chapter is roughly 2 to 3
weeks. Ch 0 is review and can be compressed or assigned as self-study plus a
diagnostic quiz.

| Weeks | Units | Chapter focus |
|:------|:------|:--------------|
| 1 | 0.1-0.4 (review) | Functions, transformations, families, inverses |
| 2-3 | 1.1-1.6 | Limits and continuity |
| 4-6 | 2.1-2.9 | The derivative and differentiation rules |
| 7-9 | 3.1-3.8 | Curve analysis, optimization, MVT, Newton |
| 10-12 | 6.1-6.8 | Exp, log, inverse trig, L'Hopital (see note) |
| 13-16 | 4.1-4.9 | Integration and the Fundamental Theorem |
| 17-18 | review / buffer | Catch-up, exams |

**Ordering note.** Anton 10e is late transcendentals, so Ch 6 is numbered after
Ch 4. The sequence above teaches Ch 6 before Ch 4 so that exp/log/inverse-trig
functions are available as integrands. If you prefer strict book order, swap to
1 -> 2 -> 3 -> 4 -> 6. If you later move to an early-transcendentals course, pull
6.1-6.4 forward to sit beside Ch 2 so those functions are differentiated early;
each Ch 6 section block notes this.
