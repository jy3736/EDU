# Problem Authoring Guide

How to add a new exercise to this calculus problem set so it matches problems
01 and 02. Follow this and every new page gets the shared dark/light theme,
EN / 中文 toggle, and consistent layout for free.

## 1. File and naming

- One problem per file in `problems/`, named `NN-kebab-title.html` with a
  zero-padded, sequential number (`03-...`, `04-...`).
- The first column of any reference table stays on one line (the shared CSS
  already enforces `white-space: nowrap` on it, so keep that cell short).
- Do not use the em dash (`—`) anywhere in generated text. Use a comma, a
  period, or parentheses instead.

## 2. Required scaffolding (copy verbatim)

Every page needs these shared pieces. They are identical across problems, so
copy them from problem 01 without editing:

1. The `<head>` no-flash script that reads `calc-theme` / `calc-lang` from
   `localStorage` and sets `data-theme` / `data-lang` on `<html>` before paint.
2. The stylesheet links and math scripts in `<head>`:

   ```html
   <link rel="stylesheet" href="../css/style.css">
   <link rel="stylesheet" href="../vendor/katex/katex.min.css">
   <script defer src="../vendor/katex/katex.min.js"></script>
   <script defer src="../vendor/katex/contrib/auto-render.min.js"></script>
   <script defer src="../js/render-math.js"></script>
   ```

   The three `defer` scripts run in order after parsing, so KaTeX is ready
   before `render-math.js` typesets the page. KaTeX is vendored under
   `vendor/katex/`, so math renders fully offline.
3. The `.toolbar` block with the two buttons:
   `#theme-toggle` and `#lang-toggle` (labels are filled in by the script).
4. `<script src="../js/ui.js"></script>` as the last element before `</body>`.

Never hardcode the button text or wire the toggles per page. `js/ui.js` owns
that and persists the choice across pages.

## 3. Page section order

Mirror the existing problems top to bottom:

1. `header.topbar` (brand + sub, bilingual)
2. `.toolbar` (the two toggles)
3. `.breadcrumb`
4. `h1` problem number + title
5. `h2` Problem + statement paragraphs
6. `.diagram` containing the inline SVG figure
7. `h2` "What the graph shows" + `table.ports`
8. `h2` "Concepts you need" + `ul.concepts` (the underlying ideas) and a
   `p.method` summarizing the solving steps
9. `h2` Task + a prose prompt and a display equation
10. `.hint` box
11. `details.solution` with the worked answer
12. `.backlink` (Prev / Index / Next)

## 4. Bilingual content (EN default, 中文 on demand)

Use Traditional Chinese (the audience is STUST, Taiwan).

- Inline text: wrap each language in a span.
  `<span class="en">English</span><span class="zh">中文</span>`
- Block elements that are wholly one language (a whole `<p>`): put the class
  directly on the element, e.g. `<p class="en">...</p>` and a sibling
  `<p class="zh">...</p>`.
- SVG `<text>` annotations: same pattern,
  `<text class="small en" ...>` and `<text class="small zh" ...>`.

The CSS rule does the switching: `.zh` is hidden by default; when
`html[data-lang="zh"]` is set, `.en` hides and `.zh` reverts to its natural
display. You never set `display` yourself.

## 4a. Math (LaTeX via KaTeX)

Write all math in LaTeX, never as ASCII art or `<sub>`/`<code>` hacks. The
auto-render pass (`js/render-math.js`) typesets two delimiters:

- **Inline** math: `\( ... \)`, e.g. `\(f(x)=\dfrac{x^2-4}{x-2}\)`.
- **Display** math (own centered line): `\[ ... \]` inside `<p class="eq">`,
  e.g. `<p class="eq">\[ \lim_{x\to 2}\dfrac{x^2-4}{x-2} \]</p>`.

A display equation is a **single language-neutral element** (one `\[...\]`),
not duplicated per language. Only the surrounding prose carries `.en` / `.zh`.
Inline math placed inside prose goes in **both** the `.en` and the `.zh` span
(identical LaTeX in each).

**HTML-parser safety:** inside math write inequalities as `\lt`, `\gt`, `\le`,
`\ge`, never literal `<` / `>`, so the HTML parser cannot mistake them for
tags. Backslashes and `\\` row breaks pass through HTML untouched. Use
`\infty` for infinity, `\to` for the arrow, `\begin{cases}` for piecewise, and
`\lim_{x\to a^{-}}` / `^{+}` for one-sided limits.

KaTeX inherits the text color, so equations follow the light/dark theme with no
extra work. Figure labels stay as plain SVG `<text>` (KaTeX does not render
inside SVG).

## 4b. The Task and solution body

Build both the Task prompt and the `details.solution` answer from the **same
two block types** used everywhere else: bilingual prose `<p>` (with `.en` /
`.zh`) and language-neutral display equations `<p class="eq">\[ ... \]</p>`.
Do **not** reach for `<pre>` ASCII-art fractions anymore.

Spacing inside the solution box is handled for you by one shared rule:

```css
details.solution > :not(summary) { margin-left: 14px; margin-right: 14px; }
```

This insets **every** direct child except the `<summary>`, so any block you add
(prose, `.eq`, a future table, etc.) is automatically padded off the border.
Because of this:

- Keep solution content as **direct children** of `details.solution` (do not
  wrap it in an extra container, or it will collapse to one un-inset block).
- Do **not** add per-element horizontal margins to "fix" spacing. If something
  touches the outline, it is because the shared rule above does not cover that
  element type yet; extend that one selector instead of patching each problem.
  (This is exactly the bug that hit when the `<pre>` blocks became `<p>` blocks.)

## 5. The figure (theme-aware inline SVG)

All figures share one coordinate system so they look uniform and line up with
the grid.

- `viewBox="0 0 600 460"`, `max-width: 600px`.
- Inline style must use variables, not literals:
  `border: 1px solid var(--line); background: var(--diagram-bg);`
- Pixel mapping from math coordinates (x in 0..5 area, y in 0..8):

  ```
  px(x) = 70 + (x + 1) * 64       # x = -1 -> 70,  x = 5 -> 454
  py(y) = 40 + (8 - y) * 48       # y = 8  -> 40,  y = 0 -> 424
  ```

  So the axes are: y-axis at px 134 (x = 0), x-axis at py 424 (y = 0).
  Grid lines: vertical at x = 0..5, horizontal at y = 2, 4, 6 (and 0, 8).

- Reuse the shared `<defs>` `<style>` block (copy from a problem). Every class
  pulls its color from a CSS variable so the figure inverts cleanly in dark
  mode. Do not put literal hex colors on SVG elements:

  | Class | Role |
  |-------|------|
  | `axis` | x / y axis lines (with arrowhead marker) |
  | `arrowhead` | the marker fill (uses `var(--ink)`) |
  | `grid` | faint grid lines |
  | `curve` | the function graph |
  | `guide` | red dashed helper lines to a point |
  | `hole` | open circle (fill is `var(--diagram-bg)` so it reads as empty) |
  | `fillpt` | filled point (actual function value) |
  | `lbl` | axis letter labels x, y |
  | `tick` | numeric tick labels |
  | `small` | red annotation text near a point |

- Always include `<title>` and `<desc>` (referenced by `aria-labelledby`) with
  a plain-language description of the graph for screen readers. These can stay
  English.

### Figure conventions for limits

- A removable discontinuity (a hole) is an **open circle** (`hole`) sitting on
  the curve.
- A defined value is a **filled point** (`fillpt`).
- Use red dashed `guide` lines from the axes to the point of interest to show
  the approach.
- Verify a plotted point lands exactly on the drawn line before shipping, e.g.

  ```
  python3 -c "px=lambda x:70+(x+1)*64; py=lambda y:40+(8-y)*48; print(px(2),py(4))"
  ```

## 6. Pedagogical pattern (what makes a good limits problem here)

Both existing problems separate **what the function approaches** from **what it
equals**:

- Problem 01: 0/0 form, factor and cancel, the limit exists even though
  `f(2)` is undefined (a hole).
- Problem 02: piecewise jump, left limit != right limit, so the two-sided
  limit does not exist even though `f(1)` is defined.

A new problem should keep that "graph first, then confirm algebraically"
structure: state it, let the student read the figure, give the reading in the
table, then justify it in the solution. Natural next topics: infinite limits /
vertical asymptotes, limits at infinity / horizontal asymptotes, the squeeze
theorem, or continuity at a point.

## 7. Wire it into the index

Add one `<li>` to the `<ol class="problist">` in `/index.html`, bilingual,
pointing at `problems/NN-...html` with a one-line blurb. Update the Prev / Next
backlinks on the neighbouring problems so the chain stays linked.

## 8. Before you ship: checklist

- [ ] Filename is `NN-kebab-title.html`, number is sequential.
- [ ] Head no-flash script, the stylesheet + KaTeX + `render-math.js` includes,
      `.toolbar`, and `js/ui.js` are all present.
- [ ] Every translatable string has both `.en` and `.zh`.
- [ ] Math is LaTeX (`\(...\)` inline, `\[...\]` display). Display equations are
      single neutral `<p class="eq">` blocks. Inequalities use `\lt` / `\gt`.
- [ ] After render, no raw `\(`, `\[`, or stray backslashes are visible.
- [ ] SVG uses `var(--...)` for all colors and `var(--diagram-bg)` / `var(--line)`
      in its inline style. No literal hex.
- [ ] Plotted points verified to sit on their lines.
- [ ] `<title>` / `<desc>` present on the SVG.
- [ ] No em dash anywhere; first table column is short.
- [ ] `index.html` list and Prev / Next links updated.
- [ ] Eyeball all four states: light/EN, light/中文, dark/EN, dark/中文.

### Quick local check

```
python3 -m http.server 8000
# open http://localhost:8000/index.html, click both toggles on the new page
```
