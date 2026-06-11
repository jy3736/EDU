# Section Page Template (Learn by Doing)

How to build a section page for the Probability and Statistics course. This
adapts the Calculus 101 authoring template to probability content: same shared
theme, EN / 中文 toggle, zoom slider, full-screen, and contents sidebar, but the
graph-reading figures are replaced by probability figures (Venn diagrams,
probability trees, PMF / PDF / CDF plots, joint heatmaps, random-vector geometry)
and every section adds a Python simulation and an AI-tutor block.

House rules that apply to everything below:

- Never use the em dash (the long dash) anywhere in page text. Use a comma, a
  period, or parentheses.
- Keep the first column of any reference table on a single line (short label).
- Audience is STUST (Taiwan): Traditional Chinese, not Simplified.
- Simulation first, theory second: the student predicts and runs a short
  simulation before the formal result is stated.


## 0. File location and naming

- One section per file: `problems/chN/NN-kebab-title.html` with a zero-padded,
  sequential number (`01-...`, `02-...`).
- Section pages live two directories deep (`problems/chN/`), so every asset
  link is prefixed with `../../` (CSS, KaTeX, `js/ui.js`, chapter and home links).
- The `<title>` is plain English: `Conditional Probability and Trees - Probability and Statistics`.
- A companion Python notebook or script for the section lives in
  `notebooks/chN/NN-kebab-title.ipynb` (or `.py`); any data file in
  `datasets/chN/`.


## 1. The pedagogical shape (the contract)

Each page has exactly three numbered sections, simulation-first throughout
(predict, run a short simulation, observe, then build the theory):

1. **Concept and Fundamental Knowledge** - prose plus callout boxes that state
   the definition, collect the key terms, and state the governing rule. Open
   with a one-line engineering motivation (why an electronic engineer needs
   this), then a Python simulation block whose lead line is the Prediction
   prompt (predict, run, observe), then the theory.
2. **Worked Examples** - exactly **3** examples. Example 1 = the plain case,
   Example 2 adds one new wrinkle, Example 3 is an engineering application. Each
   has a figure or an explicit reference to a single shared figure, an h4
   "Reading it off" sub-heading, and a step-by-step table.
3. **Exercises** - exactly **2** exercises. Exercise 1 is a direct transfer of
   the method; Exercise 2 adds reasoning. Each has a figure or an explicit
   reference to a single shared figure (no values marked), a numbered question
   list, a hint box, and a collapsed full solution.

The two exercises mirror the examples so the student can transfer the method.


## 2. Fixed scaffolding (copy verbatim)

Copy these blocks from any existing section page (or from a chapter page) without
editing. They are identical on every page.

- The `<head>` no-flash script that reads `prob-theme` / `prob-lang` from
  `localStorage` and sets `data-theme` / `data-lang` before paint. (Note the
  `prob-` prefix: this course namespaces its storage separately from Calculus.)
- The stylesheet + KaTeX + math includes:

  ```html
  <link rel="stylesheet" href="../../css/style.css">
  <link rel="stylesheet" href="../../vendor/katex/katex.min.css">
  <script defer src="../../vendor/katex/katex.min.js"></script>
  <script defer src="../../vendor/katex/contrib/auto-render.min.js"></script>
  <script defer src="../../js/render-math.js"></script>
  <script defer src="../../js/run-sim.js"></script>
  ```

- `header.topbar` with `.brand` and `.sub` (bilingual, the prob/stats wording).
- The `.toolbar` block holding only the two buttons `#theme-toggle` and
  `#lang-toggle` (leave them empty; labels are filled in by script).
- `.breadcrumb`, then the single `h1`.
- `<script src="../../js/ui.js"></script>` as the last element before `</body>`.

Breadcrumb / quick navigation rule:

- Keep the quick navigation links visible at the top of the viewport while the
  page scrolls: `Course Home > Chapter N > Section title`. `js/ui.js` moves
  `.breadcrumb` into `header.topbar`, under the course title/subtitle, so the
  breadcrumb is part of the sticky header instead of a second sticky strip. Do
  not override that behavior in a section page.
- Use text color to establish navigation hierarchy in the header breadcrumb:
  Course Home is secondary, the Chapter link is highlighted, and the current
  section title remains readable but not link-colored. The breadcrumb should
  also sit on a subtle darker chip/background inside the blue header so it is
  easy to find at a glance.
- Do not put the breadcrumb in a horizontally scrolling container, fixed-width
  row, `white-space: nowrap`, clipped box, or any layout that can push the
  section title or links off screen at high zoom or on mobile.
- The breadcrumb may wrap to multiple lines. Prefer visible wrapping over
  horizontal scrolling. The `Course Home` and `Chapter N` links must remain
  reachable without sideways scrolling.

**Do not hand-build the controls or the sidebar.** `js/ui.js` runs on every
page and automatically relocates the theme/language buttons into the header,
adds the zoom slider, the percent reset, and the full-screen button, and builds
the contents sidebar from the page's `h2` / `h3` headings. You author content
only; none of this is in your markup.


## 3. Heading hierarchy (this drives the sidebar)

The contents sidebar is generated from the `h2` and `h3` elements, so headings
are structural, not decorative.

| Tag  | Used for                              | Example |
|------|---------------------------------------|---------|
| `h1` | the page title, once                  | `3.1 Conditional Probability and Trees` |
| `h2` | the three numbered sections           | `1 · Concept and Fundamental Knowledge` |
| `h3` | each worked example and each exercise | `Example 3 · A spam filter` |
| `h4` | an in-figure sub-step                 | `Reading it off, step by step` |

- The middle dot separator is `&middot;`.
- Heading ids are auto-generated from the **English** label, so keep English
  labels unique and meaningful. You do not add `id=` attributes yourself.


## 4. Bilingual content (EN default, 中文 on demand)

- Inline text: wrap each language in a span.
  `<span class="en">English</span><span class="zh">中文</span>`
- A block wholly in one language: put the class on the block itself
  (`<p class="en">...</p>` and a sibling `<p class="zh">...</p>`).
- A display equation is a single language-neutral element (see Math); only the
  surrounding prose carries `.en` / `.zh`.
- The CSS rule does the switching; never set `display` yourself.


## 5. Math (LaTeX via KaTeX)

- Inline math: `\( ... \)`, e.g. `\(P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}\)`.
  Identical LaTeX goes in both the `.en` and the `.zh` span.
- Display math: one centered element, `<p class="eq">\[ ... \]</p>`. It is
  language-neutral (not duplicated per language).
- HTML-parser safety: inside math write inequalities as `\lt`, `\gt`, `\le`,
  `\ge`, never literal `<` / `>`. Useful tokens: `\cap`, `\cup`, `\mid`,
  `\overline{A}`, `\sim`, `\mathbb{E}`, `\operatorname{Var}`, `\binom{n}{k}`,
  `\sum_{k=0}^{n}`, `\int_{a}^{b}`, `\begin{cases}`.
- After rendering, no raw `\(`, `\[`, or stray backslashes should be visible.


## 6. Callout boxes (definitions, rules, terms, notices)

Use a callout to make a definition, rule, key term, or notice jump out of the
prose.

```html
<div class="callout rule">
  <p class="callout-title"><span class="en">Rule &middot; Bayes theorem</span><span class="zh">規則 &middot; 貝氏定理</span></p>
  <p><span class="en">...</span><span class="zh">...</span></p>
</div>
```

| Variant class        | Use for                  | Icon |
|----------------------|--------------------------|------|
| `callout definition` | a formal definition      | 📘 |
| `callout rule`       | a rule, theorem, or law  | 📐 |
| `callout term`       | important named terms    | 🔑 |
| `callout notice`     | a caution or pitfall     | ⚠️ |

Section 1 convention: open with a **definition** callout for the core object,
gather the named quantities in a **term** callout (wrap a `ul.concepts`), and
state the governing **rule** in a rule callout. Keep callout content as direct
children of the `.callout` div.


## 7. Mascot panels (section-level visual cues)

Every major page section gets one mascot panel. Do **not** put only one mascot
near the page title. Place a mascot panel immediately after each of the three
`h2` headings:

1. after `1 &middot; Concept and Fundamental Knowledge`
2. after `2 &middot; Worked Examples`
3. after `3 &middot; Exercises`

Use `assets/mascots/use-indicator.md` to choose the mascot by **section
purpose**, not merely by topic. For section pages, the usual mapping is:

| Section | Purpose | Recommended mascot types |
|---------|---------|--------------------------|
| Concept | concept, formula, data/statistics introduction | `yu24`, `yu25`, `yu27`, or another `concept` / `statistics` mascot |
| Worked Examples | walkthrough, rule application, reading a figure | `yu09`, `yu10`, `yu18`, or another presenting / practice / key-rule mascot |
| Exercises | practice, worksheet, reflection, challenge | `yu15`, `yu23`, or another practice / reflection mascot |

Chapter 1 examples already in use:

| Page | Concept | Worked Examples | Exercises |
|------|---------|-----------------|-----------|
| 1.1 sample spaces | `yu24.png` | `yu10.png` | `yu15.png` |
| 1.2 Venn diagrams | `yu25.png` | `yu09.png` with `flip-x` | `yu15.png` |
| 1.3 set operations | `yu27.png` | `yu18.png` | `yu23.png` |

Use this markup pattern, with two-language caption text:

```html
<figure class="mascot-panel">
  <img src="../../assets/mascots/yu24.png" alt="Mascot with a probability formula and coin">
  <figcaption><span class="en"><strong>Probability view:</strong> start by naming the random experiment, listing the sample space, and circling the event you want to count.</span><span class="zh"><strong>機率觀點：</strong>先說清楚隨機實驗、列出樣本空間，再圈出要計數的事件。</span></figcaption>
</figure>
```

Layout rules:

- The mascot panel uses shared CSS in `css/style.css`; do not write inline
  styles on individual panels.
- The mascot must direct its visual attention toward the caption text. Choose,
  place, mirror, or side-swap the artwork and caption so the palm, fingers,
  hands, face, eyes, pointer, book, laptop, sign, or formula bubble aims toward
  the side that contains the text. In the current left-overlay layout, that
  often means the mascot should face or gesture to the right, but this is not
  the only valid implementation.
- For writing, reading, laptop, or computer-use mascots, prefer swapping the
  mascot and caption sides over mirroring when a horizontal flip would make the
  desk, hand position, book, laptop, or writing pose feel unnatural. Use a
  mirrored variant only when the result still looks natural and any visible
  text, formulas, charts, or signs remain acceptable.
- The mascot is an overlay on top of the text-card edge, not a flex item inside
  the text container. Keep the text in `figcaption`; the image is absolutely
  positioned by `.mascot-panel img`.
- Keep mascot artwork around 112-136 px on desktop and about 86 px on phone
  widths. The current CSS does this with `clamp(...)` and a mobile media query.
- The text-card padding must reserve space for the overlaid mascot so the
  caption never runs underneath the face, hands, formula bubble, book, or sign.
- Use at most one mascot per major section. Do not add mascot panels inside
  examples, exercises, callouts, or small subsections.
- Do not mirror mascots that contain readable formulas, books, signs, or charts
  unless the text remains acceptable after mirroring. Prefer choosing a better
  mascot instead.
- If a gesture, gaze, or hand mascot points away from the caption in this
  left-overlay setup, add `class="flip-x"` to that `<img>` only. For laptop or
  writing mascots, first consider a right-side mascot panel variant instead.
  Example:

  ```html
  <img class="flip-x" src="../../assets/mascots/yu09.png" alt="Mascot making an open-hand presenting gesture">
  ```

- To swap the sides, add `mascot-right` to the figure and keep the image
  unmirrored. Example:

  ```html
  <figure class="mascot-panel mascot-right">
    <img src="../../assets/mascots/yu10.png" alt="Mascot studying at a laptop">
    <figcaption>...</figcaption>
  </figure>
  ```

- Validate desktop and mobile. Required checks: all mascot images load, there
  are exactly three `.mascot-panel` elements on a section page, no horizontal
  overflow, the panel clears the `h2` above it, the mascot visibly overlaps the
  text-card edge, and the caption text is readable in both English and Chinese.


## 8. The figure system (theme-aware inline SVG)

All figures are inline SVG, theme-aware, and use **CSS variables only** (no
hard-coded hex colors anywhere on an SVG element). Every figure includes a
`<title>` and `<desc>` referenced by `aria-labelledby` (these stay English), and
every figure that has an arrowhead marker gives it a **unique id** suffixed by a
short tag (`arrow-tree1`, `arrow-pdf-a`) with the matching `marker-end`.

Shared frame for plotted figures (PMF / PDF / CDF, heatmaps): `viewBox="0 0 600 460"`,
`max-width: 600px`, inline style `border: 1px solid var(--line); background: var(--diagram-bg);`.

Pull every color from a class, never a literal hex:

| Class       | Role |
|-------------|------|
| `axis`      | x / y axis lines (with arrowhead marker) |
| `arrowhead` | the marker fill (`var(--ink)`) |
| `grid`      | faint grid lines |
| `bar`       | a PMF / histogram bar (filled) |
| `curve`     | a PDF / CDF curve |
| `area`      | shaded probability region under a curve |
| `guide`     | dashed helper lines to a read point |
| `node`      | a probability-tree node (filled dot) |
| `branch`    | a probability-tree edge |
| `region`    | a Venn-diagram set circle (stroke) |
| `regionfill`| a shaded Venn region |
| `cell`      | a joint-heatmap cell |
| `vec`       | a random-vector arrow |
| `lbl`       | axis / set letter labels |
| `tick`      | numeric tick labels |
| `small`     | annotation text near a point or branch |

Figure types and their conventions:

- **Venn diagram** - two or three set circles on a labelled rectangle (the
  sample space). See "Built figure families" below for the exact classes; in
  short, `region` for the circles, `setlbl` for the set letters, `rval` for a
  region probability or count, and a `shade` group or a `mask` for shading an
  operation.
- **Probability tree** - `branch` edges left to right, `node` dots at each
  split, each branch labelled with its conditional probability (`small`), and
  the path probability written at the leaf. Keep branch labels off the lines.
- **PMF / histogram** - `bar` rectangles on the shared frame, one per outcome,
  heights to scale; a `tick` under each bar. Mark a probability being read with
  a `guide` line in worked examples.
- **PDF** - a `curve` with the queried interval shaded as `area`; the shaded
  area *is* the probability, so size it honestly. Uniform, exponential, Gaussian.
- **CDF** - a non-decreasing `curve` from 0 to 1; read \(P(X\le x)\) with a
  `guide` line up to the curve and across to the axis.
- **Joint heatmap** - a grid of `cell` rectangles, opacity or a CSS-variable
  shade keyed to the joint probability; row/column `tick` labels; marginals
  optional alongside.
- **Random-vector geometry** - `vec` arrows from the origin (mean vector,
  components), on the shared axes, for the communication-system interpretation.

Conventions: in worked examples mark the read point with dashed `guide` lines
and annotate with `small`. Choose probabilities that read cleanly (round bar
heights, areas that are simple fractions) so the reading tables stay honest.

**Do not duplicate the same diagram.** If several examples or exercises use the
same conceptual flow, template, or layout, draw it once in the concept section
with a stable `id`, then refer to it in later prose. A single-page note should
use references such as "use the four-part flow above" instead of repeating the
same SVG multiple times. Only duplicate a figure when the later copy changes the
data, shading, labels, or marked read point in a way students must inspect.

**Keep connectors outside boxes.** Arrows and guide connectors must terminate
with clear space at a box, node, bar, or shaded region boundary; they must not
run under or through the target shape. For flow diagrams, route the connector to
the outside edge of the destination box and verify the marker head is visibly
clear of the fill and label text.

**Never overlap text with a drawn element.** No label, value, or annotation may
touch a curve, bar, guide line, dot, node, axis, tick number, circle outline, or
another label. This is strict. For Venn set letters in particular, put them in
the top whitespace band above the circles, or well inside a circle with at least
~30px of clear margin from the outline; never let them sit on the stroke. Verify
distances before shipping and eyeball all four theme/language states.

### Built figure families (Chapter 1 reference)

The figures actually built so far are the **sample-space diagram** and the
**Venn diagram**. Each figure's classes are defined **locally in that figure's
`<defs><style>`**, not in `css/style.css`; two figures may reuse a class name
with different values. Use these existing pages as the copy source:
`problems/ch1/01-...` (sample space), `problems/ch1/02-...` and `03-...` (Venn).

**Sample-space diagram** (an event as a subset of \(S\)). `viewBox="0 0 600 360"`.

| Class            | Role |
|------------------|------|
| `space`          | the sample-space rectangle (`fill:none; stroke:var(--ink)`, `rx="10"`) |
| `spacelbl`       | the `S` label (muted, bold) |
| `region`         | the event circle (`fill:var(--hdl-blue); fill-opacity:.14; stroke:var(--hdl-blue)`) |
| `setlbl`         | the event letter (E, H, A), blue bold, placed clear of the outline and dots |
| `dot`            | an outcome NOT in the event (open: `fill:var(--card-bg); stroke:var(--ink)`) |
| `dot-in`         | an outcome IN the event (filled blue) |
| `dotlbl`         | the number/string on an open dot (ink, `text-anchor:middle`, `dominant-baseline:central`) |
| `dotlbl-in`      | the label on a filled dot (white) |

**Venn diagram** (relationships and operations between events). `viewBox="0 0 600 420"`.

| Class            | Role |
|------------------|------|
| `space`/`spacelbl` | rectangle and `S` label, as above |
| `region`         | a set circle. For *reading* figures use a translucent fill (`fill-opacity:.16`) so the overlap reads darker; for *shaded-operation* figures use `fill:none; stroke` and shade separately |
| `setlbl`         | the set letter (A, B), top band (y about 72-80) or interior with margin |
| `rval`           | a region's probability or count, centered in that region |
| `rq`             | a `?` placeholder for an unknown region (muted) |

Shading an operation (Venn): wrap fills in a group `shade` with `opacity:.28`
holding `fillpt` (`fill:var(--hdl-blue)`) shapes, so overlapping fills composite
once and read uniformly. Union = two `fillpt` circles in the `shade` group.
Intersection = one circle `clip-path`ed by a `clipPath` of the other (the lens).
Complement / "neither" = an SVG `<mask>` (white rect, black circles, hex
luminance values are fine inside a mask) over a `fillpt` rect. See section 1.3 of
Chapter 1 for the union and the masked "neither" in use.


## 9. The Python simulation block

Every section includes one simulation, placed in Section 1 **before** the formal
theory (predict, then run, then observe). Show the code and the expected output.

```html
<div class="sim">
  <p class="sim-title"><span class="en">Simulate it first</span><span class="zh">先模擬看看</span></p>
  <p><span class="en">Predict the answer, then run this and compare.</span><span class="zh">先預測答案，再執行並比較。</span></p>
  <pre><code class="language-python">import numpy as np
rng = np.random.default_rng(0)
# ... short, self-contained simulation (coin toss, dice, Monte Carlo, noise) ...
print(estimate)
</code></pre>
  <p class="sim-note"><span class="en">Observed: ... &middot; matches the theory below.</span><span class="zh">觀察結果：... &middot; 與下方理論相符。</span></p>
</div>
```

- Keep it short and self-contained (NumPy preferred), seeded for reproducibility.
- Every fenced code block in a section page must use a language class so shared
  syntax highlighting can pretty-print it: `language-python`, `language-js`,
  `language-javascript`, `language-c`, `language-cpp`, or `language-html`.
  Python simulation blocks use `language-python`. Do not omit the language class.
- The **Prediction prompt** lives in the block's lead `<p>`: open it with a bold
  `Predict:` / `預測：` asking the student to guess before running (this satisfies
  the "prediction, then experiment" step of section 1 without a separate block).
- Close with a `p.sim-note` that states the observed value and ties it to the
  theory below (`Observed: ... matches ...`).
- A MATLAB version is optional; if included, put it in a second `pre/code` block.
- The full runnable version lives in `notebooks/chN/NN-...`.
- The `.sim`, `.ai-tutor`, and the injected `.sim-actions` / `.sim-btn` /
  `.sim-output` / `.sim-hint` styles already live in `css/style.css`; you only
  write the markup above.

**Runnable and editable in the page.** `js/run-sim.js` (included via the
scaffolding) finds every `.sim` block, makes its `<pre><code>` editable, and
injects **Run**, **Copy code**, and **Reset** buttons under it. Students can
change a value (a probability, a sample size, the seed) and Run again to see the
effect; Reset restores the snippet you authored. Run lazy-loads Pyodide from a
CDN on first click (one-time, a few seconds), auto-loads imported packages such
as NumPy, executes the live (possibly edited) snippet in the browser (no server,
no login), and streams the printed output into a panel below. You do not author
the buttons or the editor; just write a correct, self-contained snippet that
`print`s its result. Two authoring rules that keep it runnable:

- Inside a `<code>` block, write a literal ampersand as `&amp;` (e.g. NumPy
  boolean `A &amp; B`) so the HTML is valid; the page still runs `A & B`.
- Make the snippet print something, so the output panel is not empty.


## 10. The reading table (worked examples)

Each worked example follows its figure with an `h4` and a `table.ports`:

- Three columns: `Quantity`, `Value`, `How you read it`.
- First column is a short label (e.g. \(P(A)\), \(P(A\cap B)\), `Mean`); it must
  stay on one line.
- The `Value` cell is language-neutral math; the `How you read it` cell is
  bilingual prose. Close the example with one prose paragraph naming the idea the
  example was built to teach (e.g. multiplying along a tree path, area under a
  density, inverting a conditional with Bayes).


## 11. The exercise blocks

Each exercise mirrors an example but withholds the answers:

- Figure withholds the *requested* quantities, not the given data. For a
  graph-reading figure that means no `guide` lines or read points. For a
  probability figure (Venn, sample space) the given region probabilities or
  counts ARE the data, so show them; just leave the quantity the student must
  find blank, marking an unknown region with a `?` (class `rq`). Do not draw the
  worked reading.
- A bilingual lead-in `p`, then a numbered `ol.concepts` of parts.
- A `div.hint` with a `<strong>Hint:</strong>` label, bilingual.
- A `details.solution` with `<summary>` "Show full solution" / "顯示完整解答",
  then one prose `p` plus one `p.eq` per part, and a final **Sense check**
  paragraph (e.g. probabilities sum to 1, an area is between 0 and 1). Keep all
  solution content as direct children of `details.solution`.


## 12. The AI-tutor block

End the content (before the backlink) with an AI-tutor block giving four ready
prompts the student can take to an AI tutor:

```html
<div class="ai-tutor">
  <p class="ai-title"><span class="en">Ask an AI tutor</span><span class="zh">問問 AI 家教</span></p>
  <ul>
    <li><strong>Explain</strong> &middot; <span class="en">Explain conditional probability using a packet-transmission example.</span><span class="zh">用封包傳輸的例子解釋條件機率。</span></li>
    <li><strong>Practice</strong> &middot; <span class="en">Give me one more tree-diagram problem like Example 2.</span><span class="zh">再給我一題像範例 2 的機率樹題目。</span></li>
    <li><strong>Reflect</strong> &middot; <span class="en">Why did the simulation match the formula?</span><span class="zh">為什麼模擬結果會和公式相符？</span></li>
    <li><strong>Extend</strong> &middot; <span class="en">How is this used in a real spam filter?</span><span class="zh">這在真實的垃圾郵件過濾器中如何使用？</span></li>
  </ul>
</div>
```


## 13. The backlink

End `<main>` with the bilingual backlink, pointing up to the chapter page and
the course home:

```html
<div class="backlink"><a href="../../chapters/chN-....html"><span class="en">&larr; Chapter N</span><span class="zh">&larr; 第 N 章</span></a> &nbsp;|&nbsp; <a href="../../index.html"><span class="en">Course Home</span><span class="zh">課程首頁</span></a></div>
```


## 14. Wire the page into the course

- In the chapter page's `ol.problist`, change the section's `<span class="ptitle">`
  to an `<a href="../problems/chN/NN-...html">` and remove its `planned` tag.
- Update the Prev / Next backlinks on the neighbouring section pages.
- If the chapter's section count is shown on `index.html`, update it (swap the
  `building` tag for a `ready` tag once the chapter's sections exist).


## 15. Pre-ship checklist

- [ ] Filename `NN-kebab-title.html`, number sequential, `../../` asset paths.
- [ ] No-flash script (with `prob-` keys), CSS + KaTeX + `render-math.js` +
      `run-sim.js`, `.toolbar` with the two empty buttons, and `js/ui.js` at the
      end all present.
- [ ] Each `.sim` snippet runs cleanly via the injected Run button (prints
      output, no error), edits re-run, and Reset restores it; literal `&` written
      as `&amp;` inside the code block.
- [ ] Every `pre > code` block has a `language-*` class so shared syntax
      highlighting can pretty-print Python, JavaScript, C/C++, or HTML snippets.
- [ ] Section order is Concept (1), Worked Examples (2), Exercises (3); exactly
      3 examples and 2 exercises; Example 3 is an engineering application.
- [ ] Engineering motivation, a Prediction prompt, and a Python simulation
      appear in Section 1, before the theory.
- [ ] Headings: one `h1`, `h2` per section, `h3` per example/exercise; English
      labels unique (they become sidebar ids).
- [ ] Breadcrumb quick navigation (`Course Home > Chapter N > section title`)
      is moved into the sticky top header and remains visible while the page
      scrolls; the line has a subtle background/chip treatment; the Chapter
      link is color-highlighted; it wraps instead of scrolling or clipping off
      screen on mobile and at high zoom.
- [ ] Every translatable string has both `.en` and `.zh`; Traditional Chinese.
- [ ] Math is LaTeX (`\(...\)` inline, `\[...\]` display in `p.eq`); inequalities
      use `\lt` / `\gt`. No raw delimiters after render.
- [ ] Callouts used for the definition, key terms, and the rule; markup valid.
- [ ] Exactly three section-level `.mascot-panel` blocks, one immediately after
      each `h2`; chosen from `assets/mascots/use-indicator.md` by section
      purpose, not only by topic.
- [ ] Mascot panels use shared CSS only: image overlaid on the text-card edge,
      caption reserved away from face/hands/signs, `flip-x` used only when a
      gesture mascot points away from the caption, and not used on readable
      formula/book/sign/chart mascots.
- [ ] Mascot panels checked in desktop and mobile: all images load, no
      horizontal overflow, each panel clears the `h2` above it, and English /
      Chinese captions remain readable.
- [ ] Each SVG defines its classes in its own `<defs><style>`; colors via
      `var(--...)` only; any arrowhead marker has a unique id; `<title>` /
      `<desc>` present; shaded areas / masks sized honestly.
- [ ] Repeated conceptual diagrams are not duplicated; later examples and
      exercises refer to the single shared figure unless the data, shading,
      labels, or marked read point changes.
- [ ] Arrows and guide connectors stop outside boxes, nodes, bars, and shaded
      regions; marker heads do not overlap fills or label text.
- [ ] No text overlaps any drawn element: set letters, region values, and
      annotations are clear of circle outlines, dots, curves, bars, guides,
      axes, ticks, and each other. Checked at all zoom levels.
- [ ] Reading tables present for all three examples; first column single line.
- [ ] Each exercise has a hint and a collapsed solution ending in a sense check.
- [ ] AI-tutor block present with Explain / Practice / Reflect / Extend.
- [ ] No em dash anywhere.
- [ ] Backlink, chapter `problist`, and Prev / Next links updated.
- [ ] Eyeball all four states: light/EN, light/中文, dark/EN, dark/中文.


## 16. Quick local check

```
python3 -m http.server 8000
# open http://localhost:8000/problems/chN/NN-....html
# toggle theme and language, drag the zoom slider, show the contents sidebar
# with the » handle on the left edge, and confirm every shaded area / tree path
# reads as the probability it claims.
```
