# Ch 3  The Derivative in Graphing and Applications  (pp. 187-264)

Uses the first and second derivatives to analyze graphs and to solve
optimization and motion problems, then closes with two pillars: Newton's method
and the Mean-Value Theorem.

---

## 3.1  Analysis of Functions I: Increase, Decrease, and Concavity  (pp. 187-196)

- **Core concepts:** increasing/decreasing intervals from $f'$; concavity from
  $f''$; inflection points.
- **Key definitions & theorems:** increasing/decreasing test ($f'>0$ vs $f'<0$);
  concave up/down test ($f''>0$ vs $f''<0$); definition of an inflection point
  (concavity changes).
- **Prerequisites:** Ch 2 (differentiation).
- **Learning objectives:** students can find intervals of increase/decrease and
  concavity; locate inflection points; connect sign charts of $f'$ and $f''$ to
  shape.
- **Problem types / techniques:** sign analysis of $f'$ and $f''$; build
  increase/decrease and concavity tables; identify inflection points.
- **Common pitfalls:** assuming $f''=0$ always gives an inflection point;
  confusing concavity with increase/decrease; sign-chart errors.
- **Tech:** graphing utility to confirm shape.
- **Tags:** `#derivative` `#curve-analysis` `#concept` `#standard`
- **Unit-pick note:** 1 session. Core foundation for curve sketching.

## 3.2  Analysis of Functions II: Relative Extrema; Graphing Polynomials  (pp. 197-206)

- **Core concepts:** critical points; relative (local) maxima and minima; first-
  and second-derivative tests; sketching polynomial graphs.
- **Key definitions & theorems:** definition of relative extrema; critical points
  ($f'=0$ or undefined); **First Derivative Test**; **Second Derivative Test**;
  polynomial graphing using extrema, concavity, and end behavior.
- **Prerequisites:** 3.1.
- **Learning objectives:** students can find critical points; classify extrema
  with either test; produce a complete polynomial sketch.
- **Problem types / techniques:** apply first/second derivative tests; full
  graphing of polynomials combining all features.
- **Common pitfalls:** missing critical points where $f'$ is undefined;
  inconclusive second-derivative test ($f''=0$); confusing relative with
  absolute extrema.
- **Tech:** graphing utility to confirm.
- **Tags:** `#derivative` `#curve-analysis` `#technique` `#standard`
- **Unit-pick note:** 1 to 2 sessions. Core; central skill of the chapter.

## 3.3  Analysis of Functions III: Rational Functions, Cusps, and Vertical Tangents  (pp. 207-215)

- **Core concepts:** complete curve sketching of rational functions; asymptotes
  (vertical, horizontal, oblique); cusps and vertical tangents.
- **Key definitions & theorems:** combining domain, intercepts, symmetry,
  asymptotes, and $f'/f''$ analysis; oblique (slant) asymptotes from polynomial
  division; cusp and vertical-tangent identification from $f'$.
- **Prerequisites:** 3.1, 3.2; 1.3 (limits at infinity).
- **Learning objectives:** students can sketch rational functions completely;
  find all asymptotes; recognize cusps and vertical tangents.
- **Problem types / techniques:** full analysis of rational and radical
  functions; slant-asymptote computation; sketch from a feature checklist.
- **Common pitfalls:** missing oblique asymptotes; mishandling behavior near
  vertical asymptotes; confusing cusp with corner.
- **Tech:** graphing utility helpful.
- **Tags:** `#derivative` `#curve-analysis` `#technique` `#challenging`
- **Unit-pick note:** 1 to 2 sessions. Core, but can be trimmed if time is
  short; pairs with 1.3.

## 3.4  Absolute Maxima and Minima  (pp. 216-223)

- **Core concepts:** absolute (global) extrema on intervals; the Extreme Value
  Theorem; closed-interval method.
- **Key definitions & theorems:** definition of absolute extrema; **Extreme Value
  Theorem** (continuous function on a closed interval attains a max and min);
  closed-interval test (check critical points and endpoints); behavior on open
  or unbounded intervals.
- **Prerequisites:** 3.1-3.2; 1.5 (continuity).
- **Learning objectives:** students can find absolute extrema on closed
  intervals; apply the EVT hypotheses; handle open/unbounded interval cases.
- **Problem types / techniques:** closed-interval candidate method; absolute
  extrema on $(-\infty,\infty)$ via single critical point.
- **Common pitfalls:** forgetting endpoints; applying EVT without continuity or a
  closed interval; mixing absolute with relative extrema.
- **Tech:** optional.
- **Tags:** `#derivative` `#optimization` `#concept` `#standard`
- **Unit-pick note:** 1 session. Core; direct setup for applied optimization.

## 3.5  Applied Maximum and Minimum Problems  (pp. 224-237)

- **Core concepts:** real-world optimization; translating problems into a
  function of one variable and optimizing.
- **Key definitions & theorems:** optimization strategy (identify the quantity,
  write a model with a constraint, reduce to one variable, optimize on the
  relevant domain).
- **Prerequisites:** 3.4; modeling, geometry.
- **Learning objectives:** students can model an applied problem; reduce to one
  variable using constraints; find and justify the optimum.
- **Problem types / techniques:** max area/volume, min cost/material, min
  distance, economics; box, can, fence, and beam problems.
- **Common pitfalls:** wrong or missing domain; not using the constraint to
  eliminate a variable; failing to confirm max vs min; ignoring endpoints.
- **Tech:** optional.
- **Tags:** `#derivative` `#optimization` `#engineering-application` `#standard`
- **Unit-pick note:** 2 sessions. Core, high-value engineering application;
  allocate generous practice.

## 3.6  Rectilinear Motion  (pp. 238-245)

- **Core concepts:** motion along a line; position, velocity, acceleration, and
  speed via derivatives; analyzing direction and speeding up/slowing down.
- **Key definitions & theorems:** velocity $v=s'(t)$, acceleration $a=v'(t)=s''(t)$,
  speed $=|v|$; relation between signs of $v$ and $a$ and speeding up/slowing
  down.
- **Prerequisites:** Ch 2; 3.1.
- **Learning objectives:** students can compute velocity, acceleration, and
  speed; determine direction of motion; decide when an object speeds up or slows
  down.
- **Problem types / techniques:** position-function analysis; sign analysis of
  $v$ and $a$; total vs net displacement (qualitative here, revisited in 4.7).
- **Common pitfalls:** confusing velocity with speed; misreading "speeding up"
  (needs $v$ and $a$ same sign); distance vs displacement.
- **Tech:** optional.
- **Tags:** `#derivative` `#rates-of-change` `#engineering-application` `#standard`
- **Unit-pick note:** 1 session. Core; revisited with integration in 4.7.

## 3.7  Newton's Method  (pp. 246-251)

- **Core concepts:** iterative root approximation using tangent lines.
- **Key definitions & theorems:** **Newton's Method** iteration
  $x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}$; convergence behavior and when the method
  fails.
- **Prerequisites:** 2.1-2.2; 2.9 (linear approximation).
- **Learning objectives:** students can apply the Newton iteration; choose a
  starting value; recognize failure cases (zero derivative, divergence,
  cycling).
- **Problem types / techniques:** approximate roots to a given accuracy; iterate
  with a calculator; solve equations $f(x)=0$ numerically.
- **Common pitfalls:** poor initial guess; dividing by $f'(x_n)=0$; stopping too
  early; assuming guaranteed convergence.
- **Tech:** calculator or CAS expected for iteration.
- **Tags:** `#derivative` `#numerical` `#requires-tech` `#engineering-application`
  `#standard`
- **Unit-pick note:** 1 session. Core numerical method; engineering-relevant.

## 3.8  Rolle's Theorem; Mean-Value Theorem  (pp. 252-264)

- **Core concepts:** existence theorems linking average and instantaneous rates;
  consequences for increasing functions and constant differences.
- **Key definitions & theorems:** **Rolle's Theorem**; the **Mean-Value Theorem**
  $f'(c)=\frac{f(b)-f(a)}{b-a}$; corollaries (zero derivative implies constant;
  equal derivatives differ by a constant; the increasing/decreasing
  consequence).
- **Prerequisites:** 1.5 (continuity); 2.2 (differentiability); 3.1.
- **Learning objectives:** students can verify the MVT hypotheses; find the
  guaranteed point $c$; apply the MVT corollaries.
- **Problem types / techniques:** find $c$ in the MVT; use MVT to bound function
  values or prove inequalities; justify uniqueness of roots.
- **Common pitfalls:** applying MVT without checking hypotheses; treating it as
  computational rather than existence; algebra solving for $c$.
- **Tech:** none required.
- **Tags:** `#derivative` `#proof-rigor` `#concept` `#challenging`
- **Unit-pick note:** 1 to 2 sessions. Core theory underpinning antiderivatives
  (Ch 4); can be condensed for a less proof-heavy course.
