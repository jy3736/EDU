# Ch 2  The Derivative  (pp. 110-186)

Defines the derivative as a limit and develops the full toolkit of
differentiation rules. The computational core of Calculus I; every later chapter
relies on fluent differentiation.

---

## 2.1  Tangent Lines and Rates of Change  (pp. 110-121)

- **Core concepts:** the tangent-line problem; slope of a secant vs tangent;
  average vs instantaneous rate of change; velocity as a rate of change.
- **Key definitions & theorems:** slope of the tangent line as a limit of secant
  slopes, $m_{tan}=\lim_{h\to0}\frac{f(x_0+h)-f(x_0)}{h}$; average rate of change
  over an interval; instantaneous rate of change as a limit.
- **Prerequisites:** Ch 1 (limits); slope of a line.
- **Learning objectives:** students can set up the tangent-slope limit; compute
  average and instantaneous rates; interpret slope as a rate.
- **Problem types / techniques:** compute tangent slope from the limit
  definition; find the tangent-line equation; average velocity over an interval.
- **Common pitfalls:** confusing average with instantaneous rate; algebra in the
  difference quotient; dropping the limit.
- **Tech:** optional, to visualize secants approaching the tangent.
- **Tags:** `#derivative` `#rates-of-change` `#concept` `#foundational`
- **Unit-pick note:** 1 session. Motivating unit for the derivative. Core.

## 2.2  The Derivative Function  (pp. 122-133)

- **Core concepts:** the derivative as a function $f'(x)$; differentiability;
  relationship between differentiability and continuity; where derivatives fail
  to exist (corners, cusps, vertical tangents); notation.
- **Key definitions & theorems:** definition
  $f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}$; differentiability on an interval;
  Theorem: differentiable implies continuous (converse false); Leibniz notation
  $dy/dx$.
- **Prerequisites:** 2.1; Ch 1.
- **Learning objectives:** students can compute $f'$ from the definition; state
  the differentiability-continuity relationship; identify non-differentiable
  points; use prime and Leibniz notation.
- **Problem types / techniques:** differentiate from first principles; sketch
  $f'$ from the graph of $f$; locate non-differentiable points.
- **Common pitfalls:** assuming continuity implies differentiability; sign and
  algebra errors in the limit; notation confusion.
- **Tech:** optional, to compare $f$ and $f'$ graphs.
- **Tags:** `#derivative` `#concept` `#proof-rigor` `#standard`
- **Unit-pick note:** 1 to 2 sessions. Core conceptual bridge before the rules.

## 2.3  Introduction to Techniques of Differentiation  (pp. 134-141)

- **Core concepts:** rules that replace the limit definition: constant, power,
  constant multiple, sum and difference rules; higher-order derivatives.
- **Key definitions & theorems:** derivative of a constant; **Power Rule**
  $\frac{d}{dx}x^n=nx^{n-1}$; constant-multiple, sum, and difference rules;
  higher derivatives $f''$, $f'''$, $f^{(n)}$.
- **Prerequisites:** 2.2; exponent algebra.
- **Learning objectives:** students can differentiate polynomials quickly; apply
  the power rule (including negative and fractional exponents); compute
  higher-order derivatives.
- **Problem types / techniques:** differentiate polynomial and power
  combinations; rewrite radicals/quotients as powers first; second and third
  derivatives.
- **Common pitfalls:** forgetting to rewrite $\sqrt{x}$ and $1/x^n$ as powers;
  mishandling the constant multiple; arithmetic in higher derivatives.
- **Tech:** none required.
- **Tags:** `#derivative` `#differentiation-rules` `#technique` `#foundational`
- **Unit-pick note:** 1 session. Core; high practice volume.

## 2.4  The Product and Quotient Rules  (pp. 142-147)

- **Core concepts:** differentiating products and quotients of functions.
- **Key definitions & theorems:** **Product Rule** $(fg)'=f'g+fg'$; **Quotient
  Rule** $\left(\frac{f}{g}\right)'=\frac{f'g-fg'}{g^2}$.
- **Prerequisites:** 2.3.
- **Learning objectives:** students can apply the product and quotient rules;
  decide when each is needed; combine with the power rule.
- **Problem types / techniques:** products of polynomials/roots; quotients;
  mixed expressions requiring several rules.
- **Common pitfalls:** assuming $(fg)'=f'g'$; sign and order errors in the
  quotient rule numerator; forgetting $g^2$.
- **Tech:** none required.
- **Tags:** `#derivative` `#differentiation-rules` `#technique` `#standard`
- **Unit-pick note:** 1 session. Core.

## 2.5  Derivatives of Trigonometric Functions  (pp. 148-152)

- **Core concepts:** derivatives of the six trigonometric functions, derived from
  the special limits of 1.6.
- **Key definitions & theorems:** $\frac{d}{dx}\sin x=\cos x$,
  $\frac{d}{dx}\cos x=-\sin x$, and the derivatives of $\tan x$, $\cot x$,
  $\sec x$, $\csc x$; derivation uses $\lim_{x\to0}\frac{\sin x}{x}=1$ and
  $\lim_{x\to0}\frac{1-\cos x}{x}=0$.
- **Prerequisites:** 2.4; 1.6 (special trig limits); trig identities.
- **Learning objectives:** students can differentiate trig functions; combine
  with product/quotient rules; recall the sign on $\cos x$'s derivative.
- **Problem types / techniques:** differentiate trig combinations; tangent lines
  to trig curves; second derivatives of sinusoids.
- **Common pitfalls:** sign error on $\frac{d}{dx}\cos x$; degrees vs radians;
  confusing the derivatives of $\sec$ and $\csc$.
- **Tech:** none required.
- **Tags:** `#derivative` `#differentiation-rules` `#technique` `#standard`
- **Unit-pick note:** 1 session. Core; depends on 1.6.

## 2.6  The Chain Rule  (pp. 153-160)

- **Core concepts:** differentiating compositions; the chain rule; generalized
  power rule.
- **Key definitions & theorems:** **Chain Rule**
  $\frac{d}{dx}f(g(x))=f'(g(x))\,g'(x)$, or $\frac{dy}{dx}=\frac{dy}{du}\frac{du}{dx}$;
  generalized power rule $\frac{d}{dx}[g(x)]^n=n[g(x)]^{n-1}g'(x)$.
- **Prerequisites:** 0.2 (composition); 2.3-2.5.
- **Learning objectives:** students can identify inner and outer functions; apply
  the chain rule; handle nested compositions and combine with other rules.
- **Problem types / techniques:** differentiate $(\,)^n$, trig of a function,
  multiple nestings; combine chain with product/quotient.
- **Common pitfalls:** forgetting the inner derivative $g'(x)$; misidentifying
  inner vs outer; stopping after one layer in deep nestings.
- **Tech:** none required.
- **Tags:** `#derivative` `#differentiation-rules` `#technique` `#standard`
- **Unit-pick note:** 1 to 2 sessions. Core and high-leverage; allocate ample
  practice.

## 2.7  Implicit Differentiation  (pp. 161-167)

- **Core concepts:** differentiating relations not solved for $y$; implicit
  differentiation; derivatives of relations and higher-order implicit
  derivatives; (in late-transcendentals, extends the power rule to rational
  exponents).
- **Key definitions & theorems:** technique of differentiating both sides with
  respect to $x$, treating $y=y(x)$ and applying the chain rule, then solving for
  $dy/dx$.
- **Prerequisites:** 2.6 (chain rule).
- **Learning objectives:** students can find $dy/dx$ implicitly; write tangent
  lines to implicit curves; compute $d^2y/dx^2$ implicitly.
- **Problem types / techniques:** differentiate equations of curves (circles,
  ellipses, folium); tangent and normal lines; second implicit derivative.
- **Common pitfalls:** forgetting the $dy/dx$ factor when differentiating $y$
  terms; algebra when solving for $dy/dx$; product/chain rule slips.
- **Tech:** optional, to view implicit curves.
- **Tags:** `#derivative` `#differentiation-rules` `#technique` `#standard`
- **Unit-pick note:** 1 session. Core; prerequisite for related rates (2.8).

## 2.8  Related Rates  (pp. 168-174)

- **Core concepts:** relating the rates of change of quantities linked by an
  equation; differentiating with respect to time.
- **Key definitions & theorems:** related-rates strategy (model with an equation,
  differentiate implicitly in $t$, substitute known values last).
- **Prerequisites:** 2.6, 2.7; geometry formulas.
- **Learning objectives:** students can translate a word problem into a relation;
  differentiate with respect to time; solve for the unknown rate.
- **Problem types / techniques:** ladders, expanding/shrinking shapes, filling
  tanks, moving shadows, approaching objects.
- **Common pitfalls:** substituting numerical values before differentiating;
  confusing constants with variables; missing chain-rule factors; geometry
  setup errors.
- **Tech:** none required.
- **Tags:** `#derivative` `#rates-of-change` `#engineering-application` `#standard`
- **Unit-pick note:** 1 to 2 sessions. Core engineering-flavored application;
  emphasize the modeling steps.

## 2.9  Local Linear Approximation; Differentials  (pp. 175-186)

- **Core concepts:** approximating a function near a point by its tangent line;
  differentials $dx$, $dy$; error and percentage error estimation.
- **Key definitions & theorems:** local linear approximation
  $f(x)\approx f(x_0)+f'(x_0)(x-x_0)$; differential $dy=f'(x)\,dx$; using
  differentials to estimate change and propagated error.
- **Prerequisites:** 2.1-2.6.
- **Learning objectives:** students can write a linearization; approximate
  function values; estimate error using differentials.
- **Problem types / techniques:** approximate $\sqrt{}$ or trig values near nice
  points; estimate measurement error; relate $dy$ to actual change $\Delta y$.
- **Common pitfalls:** confusing $dy$ with $\Delta y$; choosing a poor base point
  $x_0$; unit/percentage-error mistakes.
- **Tech:** calculator to compare approximation with true value.
- **Tags:** `#derivative` `#engineering-application` `#concept` `#standard`
- **Unit-pick note:** 1 session. Core idea behind error analysis and Newton's
  method (3.7); engineering-relevant.
