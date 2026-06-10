# Section Page Template (Learn by Doing)

How to build a section page for this course. The reference implementation is
[`problems/ch0/01-reading-a-graph.html`](../problems/ch0/01-reading-a-graph.html);
read it side by side with this guide. Every new section page should match its
shape, scaffolding, and house style so it inherits the shared theme, the
EN / 中文 toggle, the zoom slider, full-screen, and the contents sidebar for free.

House rules that apply to everything below:

- Never use the em dash (the long dash) anywhere in page text. Use a comma, a
  period, or parentheses.
- Keep the first column of any reference table on a single line (short label).
- Audience is STUST (Taiwan): Traditional Chinese, not Simplified.


## 0. File location and naming

- One section per file: `problems/chN/NN-kebab-title.html` with a zero-padded,
  sequential number (`01-...`, `02-...`).
- Section pages live two directories deep (`problems/chN/`), so every asset
  link is prefixed with `../../` (CSS, KaTeX, `js/ui.js`, chapter and home links).
- The `<title>` is plain English: `Reading a Function from its Graph - Calculus I`.


## 1. The pedagogical shape (the contract)

Each page has exactly three numbered sections, graph-first throughout (read the
figure, then confirm with a table or algebra):

1. **Concept and Fundamental Knowledge** - prose plus callout boxes that state
   the definition, collect the key terms, and state the governing rule.
2. **Worked Examples** - exactly **3** examples. Each has a figure, an
   h4 "Reading it off" sub-heading, and a step-by-step reading table. A closing
   callout (rule of thumb / notice) is optional per example.
3. **Exercises** - exactly **2** exercises. Each has a figure (no values marked),
   a numbered question list, a hint box, and a collapsed full solution.

Keep the difficulty laddered: example 1 = the plain case, examples 2 and 3 add
one new wrinkle each; the two exercises mirror the examples so the student can
transfer the method.


## 2. Fixed scaffolding (copy verbatim)

Copy these blocks from the reference file without editing. They are identical on
every page.

- The `<head>` no-flash script that reads `calc-theme` / `calc-lang` from
  `localStorage` and sets `data-theme` / `data-lang` before paint.
- The stylesheet + KaTeX + math includes:

  ```html
  <link rel="stylesheet" href="../../css/style.css">
  <link rel="stylesheet" href="../../vendor/katex/katex.min.css">
  <script defer src="../../vendor/katex/katex.min.js"></script>
  <script defer src="../../vendor/katex/contrib/auto-render.min.js"></script>
  <script defer src="../../js/render-math.js"></script>
  ```

- `header.topbar` with `.brand` and `.sub` (bilingual).
- The `.toolbar` block holding only the two buttons `#theme-toggle` and
  `#lang-toggle` (leave them empty; labels are filled in by script).
- `.breadcrumb`, then the single `h1`.
- `<script src="../../js/ui.js"></script>` as the last element before `</body>`.

**Do not hand-build the controls or the sidebar.** `js/ui.js` runs on every
page and automatically: relocates the theme/language buttons into the blue
header bar, adds the zoom slider, the percent reset, and the full-screen button,
and builds the contents (table-of-contents) sidebar from the page headings. The
sidebar is shown and hidden by a chevron handle on its edge (`»` at the left
screen edge to show, `«` riding the sidebar's right edge to hide), not by a
header button. You author content only; none of this is in your markup.


## 3. Heading hierarchy (this drives the sidebar)

The contents sidebar is generated from the `h2` and `h3` elements, so headings
are structural, not decorative.

| Tag  | Used for                                   | Example |
|------|--------------------------------------------|---------|
| `h1` | the page title, once                       | `0.1 Reading a Function from its Graph` |
| `h2` | the three numbered sections                | `1 · Concept and Fundamental Knowledge` |
| `h3` | each worked example and each exercise      | `Example 2 · An open endpoint` |
| `h4` | an in-figure sub-step                      | `Reading it off, step by step` |

- The middle dot separator is `&middot;`.
- Heading ids are auto-generated from the **English** label, so keep English
  labels unique and meaningful (`Example 1 · Both endpoints filled`). You do not
  add `id=` attributes yourself.


## 4. Bilingual content (EN default, 中文 on demand)

- Inline text: wrap each language in a span.
  `<span class="en">English</span><span class="zh">中文</span>`
- A block wholly in one language: put the class on the block itself
  (`<p class="en">...</p>` and a sibling `<p class="zh">...</p>`), as in the SVG
  annotation lines.
- A display equation is a single language-neutral element (see Math); only the
  surrounding prose carries `.en` / `.zh`.
- The CSS rule does the switching; never set `display` yourself.


## 5. Math (LaTeX via KaTeX)

- Inline math: `\( ... \)`, e.g. `\(f(x)=\dfrac{x^2-4}{x-2}\)`. Identical LaTeX
  goes in both the `.en` and the `.zh` span.
- Display math: one centered element, `<p class="eq">\[ ... \]</p>`. It is
  language-neutral (not duplicated per language).
- HTML-parser safety: inside math write inequalities as `\lt`, `\gt`, `\le`,
  `\ge`, never literal `<` / `>`. Use `\infty`, `\to`, `\begin{cases}`,
  and `\lim_{x\to a^{-}}` / `^{+}` for one-sided limits.
- After rendering, no raw `\(`, `\[`, or stray backslashes should be visible.


## 6. Callout boxes (definitions, rules, terms, notices)

Use a callout to make a definition, rule, key term, or notice jump out of the
prose. Markup (defaults to `definition` if no variant class is given):

```html
<div class="callout rule">
  <p class="callout-title"><span class="en">Rule &middot; The vertical line test</span><span class="zh">規則 &middot; 垂直線檢驗法</span></p>
  <p><span class="en">...</span><span class="zh">...</span></p>
</div>
```

| Variant class       | Use for                  | Icon |
|---------------------|--------------------------|------|
| `callout definition`| a formal definition      | 📘 |
| `callout rule`      | a rule, theorem, or test | 📐 |
| `callout term`      | important named terms     | 🔑 |
| `callout notice`    | a caution or pitfall      | ⚠️ |

Section 1 convention: open with a **definition** callout for the core object,
gather the readable quantities in a **term** callout (wrap a `ul.concepts`), and
state the governing **rule** in a rule callout. Inside examples, use a **rule**
callout for a rule of thumb and a **notice** callout for a "watch out" point.
Keep callout content as direct children of the `.callout` div.


## 7. The figure system (theme-aware inline SVG)

All figures share one coordinate system so they line up and invert cleanly in
dark mode.

- `viewBox="0 0 600 460"`, `max-width: 600px`, inline style uses variables:
  `border: 1px solid var(--line); background: var(--diagram-bg);`
- Math-to-pixel mapping (x over 0..5, y over 0..8):

  ```
  px(x) = 70 + (x + 1) * 64      # x=0 -> 134, x=1 -> 198, ... x=4 -> 390, x=5 -> 454
  py(y) = 40 + (8 - y) * 48      # y=0 -> 424, y=2 -> 328, y=4 -> 232, y=6 -> 136, y=8 -> 40
  ```

  Axes: y-axis at px 134 (x = 0), x-axis at py 424 (y = 0). Drawn grid lines are
  vertical at x = 0..5 and horizontal at y = 2, 4, 6.

- Reuse the shared `<defs><style>` block. Every figure needs its **own unique**
  arrow-marker id, suffixed by the function letter: `axisarrow-g`, `axisarrow-p`,
  `axisarrow-q`, `axisarrow-h`, `axisarrow-m`, and so on. The `marker-end` in
  `.axis` must point at that same id.
- Do not put literal hex colors on SVG elements; pull every color from a class:

  | Class       | Role |
  |-------------|------|
  | `axis`      | x / y axis lines (with arrowhead marker) |
  | `arrowhead` | the marker fill (`var(--ink)`) |
  | `grid`      | faint grid lines |
  | `curve`     | the function graph |
  | `guide`     | red dashed helper lines to a read point |
  | `hole`      | open circle (fill `var(--diagram-bg)`, reads as empty) |
  | `fillpt`    | filled point (an actual function value) |
  | `lbl`       | axis letter labels x, y |
  | `tick`      | numeric tick labels |
  | `small`     | red annotation text near a point |

- Conventions: a defined endpoint or value is a filled dot (`fillpt`); an
  excluded endpoint is an open dot (`hole`). Use red dashed `guide` lines from
  the axes to a read point in worked examples; leave exercises unmarked.
- Annotation text near a point is bilingual via two siblings:
  `<text class="small en" ...>` and `<text class="small zh" ...>` (identical here
  because it is math). Axis labels and ticks stay plain.
- Label placement rule: annotation text must not overlap the function curve,
  guide lines, point markers (open or filled), axes, or tick numbers. If a label
  touches any drawn element, move it to nearby empty space (usually up-right or
  up-left of the target point), while keeping a clear visual association.
- Accessibility: always include `<title>` and `<desc>` referenced by
  `aria-labelledby`, with a plain-language description of the graph. These stay
  English.
- Verify every plotted point sits exactly on a drawn line before shipping:

  ```
  python3 -c "px=lambda x:70+(x+1)*64; py=lambda y:40+(8-y)*48; print(px(3),py(5))"
  ```

- Choose function values so readings land on a grid line or exactly halfway
  between two (clean interpolation), e.g. a midpoint of a segment from
  \((0,2)\) to \((2,6)\) is \(4\). This keeps the reading tables honest.


## 8. The reading table (worked examples)

Each worked example follows its figure with an `h4` and a `table.ports`:

- Three columns: `Quantity`, `Value`, `How you read it`.
- First column is a short label (Domain, Range, `\(g(3)\)`); it must stay on one
  line.
- The `Value` cell is language-neutral math; the `How you read it` cell is
  bilingual prose. Close the example with one prose paragraph that names the idea
  the example was built to teach (interpolation, open endpoint, flat segment).


## 9. The exercise blocks

Each exercise mirrors an example but withholds the answers:

- Figure with no marked values (no `guide` lines, no read points, no annotation).
- A bilingual lead-in `p`, then a numbered `ol.concepts` of parts (the reference
  uses five parts: domain, range, two point values, and one reasoning part).
- A `div.hint` with a `<strong>Hint:</strong>` label, bilingual.
- A `details.solution` with `<summary>` "Show full solution" / "顯示完整解答",
  then one prose `p` plus one `p.eq` per part, and a final **Sense check**
  paragraph that confirms the readings sit inside the range. Keep all solution
  content as direct children of `details.solution`.


## 10. The backlink

End `<main>` with the bilingual backlink, pointing up to the chapter page and
the course home:

```html
<div class="backlink"><a href="../../chapters/chN-....html"><span class="en">&larr; Chapter N</span><span class="zh">&larr; 第 N 章</span></a> &nbsp;|&nbsp; <a href="../../index.html"><span class="en">Course Home</span><span class="zh">課程首頁</span></a></div>
```


## 11. Wire the page into the course

- Add one `<li>` to the chapter page's `ol.problist`, bilingual, linking to
  `problems/chN/NN-...html` with a one-line blurb. Remove the `planned` tag.
- Update the Prev / Next backlinks on the neighbouring section pages so the
  chain stays linked.
- If the chapter's exercise count is shown on `index.html`, update it.


## 12. Pre-ship checklist

- [ ] Filename `NN-kebab-title.html`, number sequential, `../../` asset paths.
- [ ] No-flash script, CSS + KaTeX + `render-math.js`, `.toolbar` with the two
      empty buttons, and `js/ui.js` at the end are all present.
- [ ] Section order is Concept (1), Worked Examples (2), Exercises (3); exactly
      3 examples and 2 exercises.
- [ ] Headings: one `h1`, `h2` per section, `h3` per example/exercise; English
      labels unique (they become sidebar ids).
- [ ] Every translatable string has both `.en` and `.zh`; Traditional Chinese.
- [ ] Math is LaTeX (`\(...\)` inline, `\[...\]` display in `p.eq`, single
      neutral block); inequalities use `\lt` / `\gt`. No raw delimiters after render.
- [ ] Callouts used for the definition, key terms, and the rule; markup valid.
- [ ] Every SVG has a unique `axisarrow-*` marker id matched in `.axis`; colors
      via `var(--...)`; `<title>` / `<desc>` present; plotted points verified on
      their lines.
- [ ] Annotation labels do not overlap curves, guides, points, axes, or ticks.
- [ ] Reading tables present for all three examples; first column single line.
- [ ] Each exercise has a hint and a collapsed solution ending in a sense check.
- [ ] No em dash anywhere.
- [ ] Backlink, chapter `problist`, and Prev / Next links updated.
- [ ] Eyeball all four states: light/EN, light/中文, dark/EN, dark/中文.


## 13. Quick local check

```
python3 -m http.server 8000
# open http://localhost:8000/problems/chN/NN-....html
# toggle theme and language, drag the zoom slider, show the contents sidebar
# with the » handle on the left edge, and confirm every figure point lands on
# its grid line.
```
