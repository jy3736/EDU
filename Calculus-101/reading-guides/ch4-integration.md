# Ch 4  Integration  (pp. 265-346)

Builds the integral from the area problem through Riemann sums to the definite
integral, then connects integration and differentiation via the Fundamental
Theorem of Calculus. The second pillar of Calculus I.

---

## 4.1  An Overview of the Area Problem  (pp. 265-270)

- **Core concepts:** the area problem as a motivation for integration; estimating
  area under a curve by rectangles; the antiderivative method preview.
- **Key definitions & theorems:** the rectangle method (approximate area by sums
  of rectangle areas, refine the partition); informal link between area and
  antiderivatives.
- **Prerequisites:** Ch 1 (limits); Ch 2 (derivatives).
- **Learning objectives:** students can estimate area with rectangles; describe
  how refining rectangles improves the estimate; appreciate the two historical
  approaches to area.
- **Problem types / techniques:** rectangle-sum estimates; conceptual area
  reasoning.
- **Common pitfalls:** thinking finite rectangle sums are exact; losing the role
  of the limit.
- **Tech:** optional, to visualize rectangle approximations.
- **Tags:** `#integration` `#concept` `#visualization` `#foundational`
- **Unit-pick note:** 1 session or merge with 4.4. Motivational. Core-light.

## 4.2  The Indefinite Integral  (pp. 271-280)

- **Core concepts:** antiderivatives; the indefinite integral and the constant of
  integration; basic integration formulas; integral as inverse of derivative.
- **Key definitions & theorems:** antiderivative and the indefinite integral
  $\int f(x)\,dx=F(x)+C$; power rule for integration
  $\int x^n\,dx=\frac{x^{n+1}}{n+1}+C$ ($n\neq-1$); constant-multiple and sum
  rules; basic trig integrals; integral as a family of curves / slope fields
  preview.
- **Prerequisites:** Ch 2 (differentiation rules read in reverse).
- **Learning objectives:** students can find antiderivatives of powers and basic
  trig functions; include $+C$; verify by differentiating.
- **Problem types / techniques:** reverse-power-rule integration; rewrite before
  integrating; basic initial-value problems.
- **Common pitfalls:** omitting $+C$; misapplying the power rule at $n=-1$; not
  rewriting radicals/quotients as powers first.
- **Tech:** optional.
- **Tags:** `#integration` `#technique` `#foundational`
- **Unit-pick note:** 1 session. Core; depends on fluent differentiation.

## 4.3  Integration by Substitution  (pp. 281-286)

- **Core concepts:** the substitution method (reverse chain rule).
- **Key definitions & theorems:** $u$-substitution
  $\int f(g(x))g'(x)\,dx=\int f(u)\,du$; choosing $u$ and computing $du$.
- **Prerequisites:** 4.2; 2.6 (chain rule).
- **Learning objectives:** students can choose an appropriate $u$; transform and
  evaluate indefinite integrals by substitution; back-substitute.
- **Problem types / techniques:** substitution for composite integrands; adjust
  for constant factors; trig and power composites.
- **Common pitfalls:** forgetting to convert $dx$ to $du$; choosing $u$ poorly;
  not back-substituting; mishandling constants.
- **Tech:** optional.
- **Tags:** `#integration` `#technique` `#standard`
- **Unit-pick note:** 1 to 2 sessions. Core technique; heavy practice.

## 4.4  The Definition of Area as a Limit; Sigma Notation  (pp. 287-299)

- **Core concepts:** sigma (summation) notation; summation formulas; defining
  area exactly as a limit of Riemann sums.
- **Key definitions & theorems:** sigma notation and properties; closed-form sums
  $\sum k$, $\sum k^2$, $\sum k^3$; definition of area as
  $A=\lim_{n\to\infty}\sum f(x_k^*)\Delta x$ (left, right, midpoint endpoints).
- **Prerequisites:** 4.1; 1.3 (limits at infinity).
- **Learning objectives:** students can manipulate sigma notation; apply the
  summation formulas; compute an area as a limit of sums.
- **Problem types / techniques:** evaluate sums in closed form; set up and
  evaluate the limit-of-sums area; left/right/midpoint comparisons.
- **Common pitfalls:** index/bound errors; misusing summation formulas; algebra
  in taking the limit.
- **Tech:** calculator for sums; CAS for checking.
- **Tags:** `#integration` `#numerical` `#proof-rigor` `#challenging`
- **Unit-pick note:** 1 to 2 sessions. Core definition; can be trimmed to one
  worked limit if time is short.

## 4.5  The Definite Integral  (pp. 300-308)

- **Core concepts:** the definite integral as a limit of Riemann sums;
  integrability; properties of the definite integral; net signed area.
- **Key definitions & theorems:** definition of $\int_a^b f(x)\,dx$ as a Riemann-
  sum limit (Definition 4.5.1); integrability of continuous functions (Theorem
  4.5.2); linearity and interval-additivity properties; definite integral as net
  signed area.
- **Prerequisites:** 4.4.
- **Learning objectives:** students can interpret the definite integral as net
  signed area; apply integral properties; evaluate simple integrals
  geometrically.
- **Problem types / techniques:** net signed area from geometry; apply linearity
  and $\int_a^b=\int_a^c+\int_c^b$; reorder limits.
- **Common pitfalls:** confusing net signed area with total area; sign of
  $\int_b^a$; mixing definite with indefinite integrals.
- **Tech:** optional.
- **Tags:** `#integration` `#concept` `#standard`
- **Unit-pick note:** 1 to 2 sessions. Core; the rigorous definite integral.

## 4.6  The Fundamental Theorem of Calculus  (pp. 309-321)

- **Core concepts:** the link between differentiation and integration; evaluating
  definite integrals via antiderivatives; the derivative of an integral.
- **Key definitions & theorems:** **FTC Part 1** (Theorem 4.6.1):
  $\int_a^b f(x)\,dx=F(b)-F(a)$ for any antiderivative $F$; **FTC Part 2**
  (Theorem 4.6.3): $\frac{d}{dx}\int_a^x f(t)\,dt=f(x)$; the evaluation notation
  $[F(x)]_a^b$; mean-value theorem for integrals.
- **Prerequisites:** 4.2 (antiderivatives); 4.5 (definite integral).
- **Learning objectives:** students can evaluate definite integrals with the FTC;
  differentiate integral-defined functions (including variable upper limits with
  the chain rule); state both parts.
- **Problem types / techniques:** evaluate $\int_a^b$ via antiderivatives;
  differentiate $\int_{a}^{u(x)} f$; average value setup.
- **Common pitfalls:** dropping limits of integration; sign on $F(a)$; forgetting
  the chain-rule factor in FTC Part 2 with a variable limit.
- **Tech:** optional.
- **Tags:** `#integration` `#fundamental-theorem` `#concept` `#standard`
- **Unit-pick note:** 2 sessions. The keystone of the chapter. Core; do not
  compress.

## 4.7  Rectilinear Motion Revisited Using Integration  (pp. 322-331)

- **Core concepts:** recovering velocity and position by integration; displacement
  vs total distance traveled.
- **Key definitions & theorems:** position from velocity and velocity from
  acceleration via integration; displacement $=\int_a^b v\,dt$; total distance
  $=\int_a^b |v|\,dt$; uniformly accelerated motion / free-fall model.
- **Prerequisites:** 3.6 (rectilinear motion); 4.6 (FTC).
- **Learning objectives:** students can integrate acceleration/velocity to find
  velocity/position; distinguish displacement from total distance; solve
  free-fall problems.
- **Problem types / techniques:** initial-value motion problems; displacement and
  distance integrals; constant-acceleration kinematics.
- **Common pitfalls:** confusing displacement with total distance (the $|v|$
  point); losing constants of integration / initial conditions; sign of gravity.
- **Tech:** optional.
- **Tags:** `#integration` `#engineering-application` `#rates-of-change` `#standard`
- **Unit-pick note:** 1 session. Core application; ties Ch 3 and Ch 4 together.

## 4.8  Average Value of a Function and its Applications  (pp. 332-336)

- **Core concepts:** the average (mean) value of a function over an interval.
- **Key definitions & theorems:** average value
  $f_{ave}=\frac{1}{b-a}\int_a^b f(x)\,dx$; **Mean-Value Theorem for Integrals**
  (a point where $f$ equals its average).
- **Prerequisites:** 4.6.
- **Learning objectives:** students can compute average value; interpret it
  geometrically; apply the integral mean-value theorem.
- **Problem types / techniques:** average value computations; find the guaranteed
  point $c$; applied averages (temperature, flow).
- **Common pitfalls:** omitting the $\frac{1}{b-a}$ factor; confusing average
  value with average rate of change.
- **Tech:** optional.
- **Tags:** `#integration` `#engineering-application` `#concept` `#standard`
- **Unit-pick note:** 1 session or merge with 4.6. Core-light.

## 4.9  Evaluating Definite Integrals by Substitution  (pp. 337-346)

- **Core concepts:** substitution in definite integrals; changing the limits of
  integration; symmetry shortcuts for even/odd functions.
- **Key definitions & theorems:** two methods (convert limits to $u$, or
  back-substitute then use original limits); even/odd integration over symmetric
  intervals.
- **Prerequisites:** 4.3 (substitution); 4.6 (FTC).
- **Learning objectives:** students can evaluate definite integrals by
  substitution with changed limits; exploit even/odd symmetry.
- **Problem types / techniques:** definite $u$-substitution with limit changes;
  symmetric-interval simplifications.
- **Common pitfalls:** forgetting to change the limits when substituting; mixing
  $x$-limits with $u$-variable; misapplying symmetry.
- **Tech:** optional.
- **Tags:** `#integration` `#technique` `#standard`
- **Unit-pick note:** 1 session. Core; closes the integration toolkit for Calc I.
