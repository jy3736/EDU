# Ch 1  Limits and Continuity  (pp. 49-109)

The conceptual foundation of calculus. Builds the limit idea from intuition, to
computation, to a rigorous definition, then uses it to define continuity. The
project's home topic ("calculus-101-Limit") lives here.

---

## 1.1  Limits (An Intuitive Approach)  (pp. 49-61)

- **Core concepts:** the limit as the value a function approaches; one-sided
  (left and right) limits; the two-sided limit exists only when the one-sided
  limits agree; infinite limits and vertical asymptotes; estimating limits
  numerically and graphically.
- **Key definitions & theorems:** informal definition of $\lim_{x\to a}f(x)=L$;
  one-sided limits $\lim_{x\to a^-}$ and $\lim_{x\to a^+}$; relationship between
  one-sided and two-sided limits; infinite limits $\pm\infty$; vertical
  asymptote.
- **Prerequisites:** Ch 0 (functions, graphs).
- **Learning objectives:** students can estimate a limit from a table or graph;
  distinguish left and right limits; recognize when a limit fails to exist;
  identify infinite limits and vertical asymptotes.
- **Problem types / techniques:** read limits off graphs; build tables of values;
  identify DNE cases (jump, oscillation, unbounded).
- **Common pitfalls:** thinking $f(a)$ must equal the limit; concluding a limit
  exists when one-sided limits differ; confusing "limit is infinite" with "limit
  exists."
- **Tech:** graphing/numeric calculator helpful for tables and graphs.
- **Tags:** `#limits` `#concept` `#visualization` `#numerical` `#foundational`
- **Unit-pick note:** 1 to 2 sessions. Core motivating unit; keep it visual.

## 1.2  Computing Limits  (pp. 62-70)

- **Core concepts:** algebraic limit laws; limits of polynomials and rational
  functions by substitution; resolving $0/0$ indeterminate forms by factoring,
  cancelling, or rationalizing; limits of piecewise functions.
- **Key definitions & theorems:** basic limit theorem (Theorem 1.2.2: limits of
  sum, difference, product, quotient, power, root); limits of $x^n$ and
  constants; limit of a polynomial equals its value (substitution); rational
  function limits; technique for $0/0$ forms.
- **Prerequisites:** 1.1; algebra (factoring, rationalizing).
- **Learning objectives:** students can apply the limit laws; evaluate limits by
  direct substitution where valid; simplify $0/0$ forms algebraically; handle
  one-sided/piecewise limits.
- **Problem types / techniques:** factor-and-cancel, conjugate multiplication,
  combine fractions, evaluate one-sided limits at piecewise breakpoints.
- **Common pitfalls:** applying the quotient law when the denominator limit is 0;
  forgetting to simplify before substituting; sign errors in one-sided limits.
- **Tech:** optional, to check answers.
- **Tags:** `#limits` `#technique` `#standard`
- **Unit-pick note:** 1 to 2 sessions. The computational workhorse; heavy
  practice. Core.

## 1.3  Limits at Infinity; End Behavior of a Function  (pp. 71-80)

- **Core concepts:** limits as $x\to+\infty$ and $x\to-\infty$; end behavior;
  horizontal asymptotes; limits of rational functions at infinity by comparing
  degrees; end behavior of polynomials.
- **Key definitions & theorems:** definition of limits at infinity; horizontal
  asymptote; $\lim_{x\to\pm\infty} 1/x^n = 0$; rule for rational-function limits
  at infinity (ratio of leading terms); behavior of $\sqrt{}$ expressions at
  infinity.
- **Prerequisites:** 1.1, 1.2.
- **Learning objectives:** students can evaluate limits at infinity; find
  horizontal asymptotes; describe end behavior; divide by the highest power of
  $x$ to resolve $\infty/\infty$.
- **Problem types / techniques:** divide numerator and denominator by highest
  power; handle $\sqrt{ax^2+\cdots}$ with care about $\pm$ sign; end behavior of
  polynomials.
- **Common pitfalls:** mishandling the sign of $\sqrt{x^2}=|x|$ as $x\to-\infty$;
  confusing horizontal with vertical asymptotes; degree-comparison errors.
- **Tech:** graphing utility to confirm asymptotes.
- **Tags:** `#limits` `#technique` `#curve-analysis` `#standard`
- **Unit-pick note:** 1 session. Pairs naturally with 3.3 (graphing rational
  functions). Core.

## 1.4  Limits (Discussed More Rigorously)  (pp. 81-89)

- **Core concepts:** the formal epsilon-delta definition of a limit; proving
  limits from the definition; rigorous definitions of one-sided and infinite
  limits.
- **Key definitions & theorems:** the $\epsilon$-$\delta$ definition of
  $\lim_{x\to a}f(x)=L$; formal definitions of one-sided limits and limits at
  infinity; sample $\epsilon$-$\delta$ proofs for linear and quadratic
  functions.
- **Prerequisites:** 1.1-1.3; inequalities, absolute value.
- **Learning objectives:** students can interpret the $\epsilon$-$\delta$
  statement; find a $\delta$ for a given $\epsilon$; write a short rigorous proof
  for simple functions.
- **Problem types / techniques:** given $\epsilon$ find $\delta$; prove
  $\lim(mx+b)=ma+b$; bound $|f(x)-L|$ to control the proof.
- **Common pitfalls:** reversing the roles of $\epsilon$ and $\delta$; algebra
  when isolating $\delta$; treating the proof as plug-and-chug.
- **Tech:** none.
- **Tags:** `#limits` `#proof-rigor` `#challenging`
- **Unit-pick note:** 1 to 2 sessions. Often **optional** for an engineering
  Calc I; include lightly for rigor or skip/condense to a concept demo.

## 1.5  Continuity  (pp. 90-100)

- **Core concepts:** continuity at a point and on an interval; types of
  discontinuity (removable, jump, infinite); continuity of combinations and
  compositions; the Intermediate Value Theorem and root approximation.
- **Key definitions & theorems:** definition of continuity at $a$ (three
  conditions: $f(a)$ defined, limit exists, they are equal); continuity on an
  interval; continuity of polynomials and rational functions; continuity of
  compositions (Theorem 1.5.5); the **Intermediate-Value Theorem** (Theorem
  1.5.7) and its corollary for locating roots (sign change / bisection).
- **Prerequisites:** 1.1, 1.2, 1.3.
- **Learning objectives:** students can test continuity at a point; classify
  discontinuities; use the IVT to guarantee a root exists; apply bisection to
  approximate roots.
- **Problem types / techniques:** check the three continuity conditions; find
  values making a piecewise function continuous; apply IVT to show a solution
  exists in an interval.
- **Common pitfalls:** checking only that $f(a)$ exists; assuming IVT gives the
  root's value (it only guarantees existence); ignoring the continuity
  hypothesis of IVT.
- **Tech:** calculator for bisection/root approximation.
- **Tags:** `#continuity` `#concept` `#engineering-application` `#standard`
- **Unit-pick note:** 1 to 2 sessions. Core; IVT is an "existence theorem"
  worth emphasizing.

## 1.6  Continuity of Trigonometric Functions  (pp. 101-109)

- **Core concepts:** continuity of the six trig functions on their domains; the
  Squeezing Theorem; the fundamental trig limits used later for derivatives.
- **Key definitions & theorems:** Theorem 1.6.1 (continuity of trig functions);
  Theorem 1.6.2 the **Squeezing (Squeeze) Theorem**; Theorem 1.6.3 the special
  limits $\lim_{x\to0}\frac{\sin x}{x}=1$ and
  $\lim_{x\to0}\frac{1-\cos x}{x}=0$.
- **Prerequisites:** 1.1-1.5; radian measure, trig identities.
- **Learning objectives:** students can use continuity to evaluate trig limits;
  apply the Squeeze Theorem; evaluate limits like $\frac{\sin kx}{x}$ and
  oscillation limits.
- **Problem types / techniques:** squeeze arguments; reduce limits to
  $\frac{\sin x}{x}$ form by scaling/substitution; discuss $\sin(1/x)$ type
  oscillation.
- **Common pitfalls:** forgetting radian requirement for $\sin x/x=1$; mismatching
  the argument and denominator; misusing the squeeze bounds.
- **Tech:** graphing utility to confirm (Technology Mastery note in text).
- **Tags:** `#limits` `#continuity` `#technique` `#standard`
- **Unit-pick note:** 1 session. Sets up 2.5 (derivatives of trig). Core; the
  special limits are reused for the sine/cosine derivatives.
