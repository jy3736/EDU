# Ch 6  Exponential, Logarithmic, and Inverse Trigonometric Functions  (pp. 409-487)

The transcendental-function toolkit essential for engineering: exponentials,
logarithms, inverse trig, and hyperbolic functions, with their derivatives and
integrals, plus L'Hopital's Rule for indeterminate forms.

**Ordering note.** Anton 10e is late transcendentals, so this chapter sits after
integration. For an early-transcendentals course, pull 6.1-6.4 forward to sit
beside Ch 2 (so exp/log are differentiated early), and teach 6.5 (L'Hopital)
after the derivative is established. Each section's unit-pick note flags this.

---

## 6.1  Exponential and Logarithmic Functions  (pp. 409-419)

- **Core concepts:** exponential functions; the natural base $e$; logarithms as
  inverses of exponentials; properties and graphs; solving exponential/log
  equations.
- **Key definitions & theorems:** exponential function $b^x$ and its graph;
  natural exponential $e^x$; logarithm $\log_b x$ as inverse of $b^x$; natural
  log $\ln x$; laws of exponents and logarithms; change of base.
- **Prerequisites:** 0.4 (inverse functions).
- **Learning objectives:** students can apply exponent/log laws; convert between
  exponential and log form; solve exponential and logarithmic equations; sketch
  the graphs.
- **Problem types / techniques:** simplify with log/exponent laws; solve
  equations; model growth/decay setups.
- **Common pitfalls:** misapplying log laws (log of a sum); domain of $\ln$;
  confusing $\ln$ with $\log_{10}$.
- **Tech:** calculator for numerical values.
- **Tags:** `#transcendental` `#exp-log` `#functions` `#review-precalc` `#foundational`
- **Unit-pick note:** 1 to 2 sessions. Core; in early-transcendentals teach
  right after Ch 0.

## 6.2  Derivatives and Integrals Involving Logarithmic Functions  (pp. 420-426)

- **Core concepts:** differentiating logarithms; logarithmic differentiation;
  the integral giving $\ln|x|$.
- **Key definitions & theorems:** $\frac{d}{dx}\ln x=\frac{1}{x}$ and the chain-
  rule form $\frac{d}{dx}\ln|u|=\frac{u'}{u}$; derivative of $\log_b x$;
  logarithmic differentiation for products/quotients/powers;
  $\int \frac{1}{x}\,dx=\ln|x|+C$.
- **Prerequisites:** 6.1; 2.6 (chain rule); 2.7 (implicit).
- **Learning objectives:** students can differentiate log functions; use
  logarithmic differentiation; integrate $1/x$.
- **Problem types / techniques:** differentiate $\ln$ expressions; log-diff on
  messy products/powers; $\int 1/x$ and simple $u/u'$ integrals.
- **Common pitfalls:** dropping absolute values in $\ln|x|$; forgetting the inner
  derivative; algebra in logarithmic differentiation.
- **Tech:** optional.
- **Tags:** `#transcendental` `#exp-log` `#differentiation-rules` `#integration`
  `#technique` `#standard`
- **Unit-pick note:** 1 session. Core.

## 6.3  Derivatives of Inverse Functions; Derivatives and Integrals Involving Exponential Functions  (pp. 427-433)

- **Core concepts:** differentiating inverse functions in general; derivatives
  and integrals of exponential functions.
- **Key definitions & theorems:** inverse-function derivative formula
  $\left(f^{-1}\right)'(x)=\frac{1}{f'(f^{-1}(x))}$; $\frac{d}{dx}e^x=e^x$,
  $\frac{d}{dx}b^x=b^x\ln b$; $\int e^x\,dx=e^x+C$,
  $\int b^x\,dx=\frac{b^x}{\ln b}+C$.
- **Prerequisites:** 6.1, 6.2; 0.4; 2.7.
- **Learning objectives:** students can differentiate inverses without an explicit
  formula; differentiate and integrate exponentials.
- **Problem types / techniques:** inverse-derivative computations; differentiate/
  integrate $e^x$ and $b^x$ with the chain rule.
- **Common pitfalls:** evaluating $f'$ at the wrong point in the inverse formula;
  treating $\frac{d}{dx}b^x$ like the power rule; missing $\ln b$.
- **Tech:** optional.
- **Tags:** `#transcendental` `#exp-log` `#differentiation-rules` `#integration`
  `#standard`
- **Unit-pick note:** 1 session. Core.

## 6.4  Graphs and Applications Involving Logarithmic and Exponential Functions  (pp. 434-440)

- **Core concepts:** curve analysis of exp/log functions; exponential growth and
  decay models; applications.
- **Key definitions & theorems:** growth/decay model $y=y_0 e^{kt}$; half-life and
  doubling time; using $f'$ and $f''$ to analyze exp/log graphs.
- **Prerequisites:** 6.1-6.3; Ch 3 (curve analysis).
- **Learning objectives:** students can analyze and sketch exp/log functions;
  set up and solve growth/decay problems; interpret half-life and doubling time.
- **Problem types / techniques:** growth/decay word problems; relative extrema
  and inflection of exp/log functions; modeling.
- **Common pitfalls:** sign of the rate constant $k$; mixing half-life with
  doubling-time formulas; units.
- **Tech:** graphing utility helpful.
- **Tags:** `#transcendental` `#exp-log` `#curve-analysis` `#engineering-application`
  `#standard`
- **Unit-pick note:** 1 session. Core application; in early-transcendentals
  pairs with Ch 3.

## 6.5  L'Hopital's Rule; Indeterminate Forms  (pp. 441-449)

- **Core concepts:** using derivatives to evaluate limits of indeterminate forms.
- **Key definitions & theorems:** **L'Hopital's Rule** (Theorem 6.5.1) for type
  $0/0$, also valid for $\infty/\infty$ and one-sided/infinite limits; handling
  the other indeterminate forms $0\cdot\infty$, $\infty-\infty$, $0^0$,
  $\infty^0$, $1^\infty$ by algebraic/logarithmic conversion.
- **Prerequisites:** Ch 2 (derivatives); 6.1-6.3 (logs for the power forms).
- **Learning objectives:** students can recognize indeterminate forms; apply
  L'Hopital's Rule correctly; convert non-quotient forms to $0/0$ or
  $\infty/\infty$.
- **Problem types / techniques:** repeated L'Hopital; rewrite products and
  differences as quotients; take logs for exponent forms.
- **Common pitfalls:** applying the rule to non-indeterminate limits;
  differentiating the quotient (it differentiates numerator and denominator
  separately); not converting the form first.
- **Tech:** optional, to confirm.
- **Tags:** `#lhopital` `#limits` `#technique` `#standard`
- **Unit-pick note:** 1 to 2 sessions. Core; depends on the derivative, so it can
  be taught any time after Ch 2.

## 6.6  Logarithmic and Other Functions Defined by Integrals  (pp. 450-461)

- **Core concepts:** rigorous definition of $\ln x$ as an integral; deriving its
  properties; defining $e^x$ and general powers from it; the integral-defined
  viewpoint.
- **Key definitions & theorems:** $\ln x=\int_1^x \frac{1}{t}\,dt$; derivation of
  log laws and $\frac{d}{dx}\ln x=1/x$ from this definition; defining $e$, $e^x$,
  and irrational powers; brief look at functions defined by integrals.
- **Prerequisites:** 6.1-6.3; Ch 4 (definite integral, FTC).
- **Learning objectives:** students can define $\ln$ via an integral; derive its
  properties; explain the logical foundation of exp/log.
- **Problem types / techniques:** prove log properties from the integral
  definition; FTC-based derivative arguments.
- **Common pitfalls:** treating this as new computation rather than foundations;
  circular reasoning if the earlier definition is assumed.
- **Tech:** none.
- **Tags:** `#transcendental` `#exp-log` `#proof-rigor` `#challenging`
- **Unit-pick note:** 1 session. Often **optional** for engineering Calc I;
  include only if you want the rigorous foundation. Requires Ch 4.

## 6.7  Derivatives and Integrals Involving Inverse Trigonometric Functions  (pp. 462-471)

- **Core concepts:** derivatives and integrals of inverse trig functions.
- **Key definitions & theorems:** $\frac{d}{dx}\sin^{-1}x=\frac{1}{\sqrt{1-x^2}}$,
  $\frac{d}{dx}\tan^{-1}x=\frac{1}{1+x^2}$, $\frac{d}{dx}\sec^{-1}x=\frac{1}{|x|\sqrt{x^2-1}}$
  (and the cofunction analogues); the matching integral formulas, for example
  $\int\frac{dx}{\sqrt{a^2-x^2}}=\sin^{-1}\frac{x}{a}+C$ and
  $\int\frac{dx}{a^2+x^2}=\frac{1}{a}\tan^{-1}\frac{x}{a}+C$.
- **Prerequisites:** 0.4 (inverse trig); 6.3 (inverse-function derivatives); Ch 4.
- **Learning objectives:** students can differentiate inverse trig functions;
  recognize integrals that produce inverse trig; complete the square to fit the
  forms.
- **Problem types / techniques:** differentiate inverse-trig expressions;
  integrals matching the $\sin^{-1}$ and $\tan^{-1}$ patterns; complete-the-square
  setups.
- **Common pitfalls:** sign and absolute-value details (especially $\sec^{-1}$);
  matching $a$ correctly; missing the chain-rule factor.
- **Tech:** optional.
- **Tags:** `#transcendental` `#inverse-trig` `#differentiation-rules`
  `#integration` `#standard`
- **Unit-pick note:** 1 to 2 sessions. Core; the integral patterns are reused in
  Calc II integration techniques.

## 6.8  Hyperbolic Functions and Hanging Cables  (pp. 472-487)

- **Core concepts:** hyperbolic functions and their calculus; inverse hyperbolic
  functions; the catenary (hanging cable) application.
- **Key definitions & theorems:** definitions $\sinh x=\frac{e^x-e^{-x}}{2}$,
  $\cosh x=\frac{e^x+e^{-x}}{2}$; identities such as
  $\cosh^2x-\sinh^2x=1$; derivatives and integrals of hyperbolic functions;
  inverse hyperbolic functions and their derivatives; the catenary
  $y=a\cosh(x/a)$.
- **Prerequisites:** 6.1-6.3.
- **Learning objectives:** students can evaluate and differentiate/integrate
  hyperbolic functions; use hyperbolic identities; recognize the catenary model.
- **Problem types / techniques:** hyperbolic derivatives/integrals; prove
  identities; catenary/hanging-cable problems.
- **Common pitfalls:** confusing hyperbolic with circular trig signs (for example
  $\frac{d}{dx}\cosh x=\sinh x$, no minus sign); identity sign differences.
- **Tech:** optional.
- **Tags:** `#transcendental` `#engineering-application` `#standard`
- **Unit-pick note:** 1 session. Often **optional** for a first semester; the
  catenary is a nice engineering hook if time allows.
