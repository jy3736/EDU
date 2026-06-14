#!/usr/bin/env python3
"""Reproducible generator for the AI Agent Workshop sample solution.

The Excel sheet `答題記錄(選項編號)` stores option indices, not direct Likert
agreement scores. The clean Exercise 01 outputs intentionally convert them with:

    actual_score = 8 - option_number

All downstream sample-solution outputs use those cleaned actual scores.
"""
from pathlib import Path
import shutil
import warnings

import numpy as np
import pandas as pd
from scipy import stats

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt

warnings.simplefilter("ignore")

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent
EN = ROOT / "en"
ZH = ROOT / "zh"
DATA = ROOT / "data"
PRE_XLSX = DATA / "pre-test.xlsx"
POST_XLSX = DATA / "post-test.xlsx"
GRADES = DATA / "grade-report.csv"

SHEET = "答題記錄(選項編號)"
SUBSCALES = {
    "IM": [1, 5, 9, 13],
    "IR": [2, 6, 10, 14],
    "ER": [3, 7, 11, 15],
    "AM": [4, 8, 12, 16],
}
SUBSCALES_Q11_DROP = {
    "IM": [1, 5, 9, 13],
    "IR": [2, 6, 10, 14],
    "ER": [3, 7, 15],
    "AM": [4, 8, 12, 16],
}


def out_dir(exercise: str) -> Path:
    d = EN / exercise / "outputs"
    d.mkdir(parents=True, exist_ok=True)
    return d


def load_clean(path: Path) -> pd.DataFrame:
    """Return 帳號 + Q1..Q16 as actual 1-7 agreement scores."""
    raw = pd.read_excel(path, sheet_name=SHEET, header=1).dropna(how="all")
    clean = raw[["帳號"]].copy()
    qcols = raw.columns[3:19]
    for i, col in enumerate(qcols, start=1):
        option_number = pd.to_numeric(raw[col], errors="coerce")
        clean[f"Q{i}"] = 8 - option_number
    return clean.dropna(subset=["帳號"]).reset_index(drop=True)


def cronbach_alpha(items: pd.DataFrame) -> float:
    k = items.shape[1]
    item_var = items.var(axis=0, ddof=1).sum()
    total_var = items.sum(axis=1).var(ddof=1)
    return k / (k - 1) * (1 - item_var / total_var)


def subscale_scores(df: pd.DataFrame, subscales: dict[str, list[int]] = SUBSCALES) -> pd.DataFrame:
    out = pd.DataFrame({"帳號": df["帳號"]})
    for name, items in subscales.items():
        out[name] = df[[f"Q{q}" for q in items]].mean(axis=1)
    return out


def reliability_table(pre: pd.DataFrame, post: pd.DataFrame,
                      subscales: dict[str, list[int]], include_items: bool = False) -> pd.DataFrame:
    rows = []
    for name, items in subscales.items():
        cols = [f"Q{q}" for q in items]
        row = {
            "subscale": name,
            "pre_alpha": cronbach_alpha(pre[cols]),
            "post_alpha": cronbach_alpha(post[cols]),
        }
        if include_items:
            row["items"] = ",".join(cols)
        rows.append(row)
    return pd.DataFrame(rows)


def paired_ttests(sub_pre: pd.DataFrame, sub_post: pd.DataFrame,
                  matched: list[str]) -> pd.DataFrame:
    a = sub_pre.set_index("帳號").loc[matched]
    b = sub_post.set_index("帳號").loc[matched]
    rows = []
    for name in ["IM", "IR", "ER", "AM"]:
        x, y = a[name], b[name]
        diff = y - x
        t, p = stats.ttest_rel(y, x)
        rows.append({
            "subscale": name,
            "pre_M": round(x.mean(), 2),
            "pre_SD": round(x.std(ddof=1), 2),
            "post_M": round(y.mean(), 2),
            "post_SD": round(y.std(ddof=1), 2),
            "delta_M": round(diff.mean(), 2),
            "t": round(t, 2),
            "df": len(matched) - 1,
            "p": round(p, 4),
            "cohen_dz": round(diff.mean() / diff.std(ddof=1), 2),
        })
    return pd.DataFrame(rows)


def draw_charts(figdir: Path, sub_pre: pd.DataFrame, sub_post: pd.DataFrame,
                matched: list[str], title_suffix: str = "", q11drop: bool = False) -> None:
    figdir.mkdir(parents=True, exist_ok=True)
    names = ["IM", "IR", "ER", "AM"]
    a = sub_pre.set_index("帳號").loc[matched]
    b = sub_post.set_index("帳號").loc[matched]
    pre_means = [a[n].mean() for n in names]
    post_means = [b[n].mean() for n in names]
    x = np.arange(len(names))
    w = 0.38

    fig, ax = plt.subplots(figsize=(7, 4.5))
    ax.bar(x - w / 2, pre_means, w, label="Pre", color="#4C72B0")
    ax.bar(x + w / 2, post_means, w, label="Post", color="#DD8452")
    ax.set_xticks(x); ax.set_xticklabels(names)
    ax.set_xlabel("SIMS subscale"); ax.set_ylabel("Mean agreement score (1-7)")
    ax.set_title(f"SIMS subscale means: pre vs post{title_suffix}")
    ax.legend()
    fig.tight_layout(); fig.savefig(figdir / "grouped_bar.png", dpi=120); plt.close(fig)

    fig, ax = plt.subplots(figsize=(7, 4.5))
    data, labels = [], []
    for n in names:
        data.append(a[n].values); labels.append(f"{n}\npre")
        data.append(b[n].values); labels.append(f"{n}\npost")
    ax.boxplot(data, labels=labels)
    ax.set_xlabel("Subscale (pre / post)"); ax.set_ylabel("Agreement score (1-7)")
    ax.set_title(f"Distribution of SIMS subscale scores{title_suffix}")
    fig.tight_layout(); fig.savefig(figdir / "box.png", dpi=120); plt.close(fig)

    fig, ax = plt.subplots(figsize=(7, 4.5))
    order = sorted(range(len(names)), key=lambda i: post_means[i])
    label_y = {}
    min_gap = 0.12
    last = -np.inf
    for i in order:
        y = max(post_means[i], last + min_gap)
        label_y[i] = y
        last = y
    for i, n in enumerate(names):
        ax.plot([0, 1], [pre_means[i], post_means[i]], marker="o")
        ax.annotate(n, xy=(1.0, post_means[i]), xytext=(1.06, label_y[i]),
                    va="center", ha="left",
                    arrowprops=dict(arrowstyle="-", color="0.6", lw=0.6))
    ax.set_xticks([0, 1]); ax.set_xticklabels(["Pre", "Post"])
    ax.set_xlim(-0.15, 1.30)
    ax.set_ylabel("Mean agreement score (1-7)")
    title = "Q11-drop: ER uses Q3, Q7, Q15" if q11drop else "All four SIMS subscales increased after the course"
    ax.set_title(title)
    fig.tight_layout(); fig.savefig(figdir / "slope.png", dpi=120); plt.close(fig)

    grades = pd.read_csv(GRADES)
    fig, ax = plt.subplots(figsize=(7, 4.5))
    ax.hist(grades["final"], bins=range(0, 105, 10), color="#55A868", edgecolor="white")
    ax.axvline(60, color="red", linestyle="--", linewidth=2, label="Passing line (60)")
    ax.set_xlabel("Final grade"); ax.set_ylabel("Number of students")
    ax.set_title(f"Distribution of final grades (n={len(grades)})")
    ax.legend()
    fig.tight_layout(); fig.savefig(figdir / "final_hist.png", dpi=120); plt.close(fig)


def t_row(tt: pd.DataFrame, name: str) -> str:
    row = tt.set_index("subscale").loc[name]
    return (f"| {name} | {row.pre_M:.2f} ({row.pre_SD:.2f}) | "
            f"{row.post_M:.2f} ({row.post_SD:.2f}) | {row.delta_M:+.2f} | "
            f"{row.t:.2f} | {row.p:.4f} | {row.cohen_dz:.2f} |")


def write_mini_report(d05: Path, ttest: pd.DataFrame, reliability: pd.DataFrame,
                      n_pre: int, n_post: int, n_matched: int, n_merged: int,
                      r: float, p_r: float) -> None:
    rel = reliability.set_index("subscale")
    md = f"""# SIMS Learning-Motivation Survey: One-Page Report

## Background

We analyzed a Situational Motivation Scale (SIMS) survey collected before
(pre-test, round 3) and after (post-test, round 4) a college course. The clean
files use actual 1-7 agreement scores converted from the Excel option-number
sheet with `actual_score = 8 - option_number`.

After cleaning, {n_pre} students completed the pre-test and {n_post} the
post-test; **{n_matched} students completed both** and form the paired sample
used for the t-tests. Survey scores were also merged with a grade report
({n_merged} students matched on student id).

## Reliability (Cronbach's alpha)

| Subscale | Pre alpha | Post alpha |
|---|---|---|
| IM | {rel.loc['IM','pre_alpha']:.2f} | {rel.loc['IM','post_alpha']:.2f} |
| IR | {rel.loc['IR','pre_alpha']:.2f} | {rel.loc['IR','post_alpha']:.2f} |
| ER | **{rel.loc['ER','pre_alpha']:.2f}** | {rel.loc['ER','post_alpha']:.2f} |
| AM | {rel.loc['AM','pre_alpha']:.2f} | {rel.loc['AM','post_alpha']:.2f} |

IM, IR, and AM are reliable in both waves. **Caveat: the ER pre-test alpha is
only {rel.loc['ER','pre_alpha']:.2f}, far below the 0.7 threshold.** This traces
to item 11, an ER item that was reworded between pre and post, so the pre vs post
ER comparison should be read with the most caution.

## Main results (paired t-test, n={n_matched}, df={n_matched-1})

| Subscale | Pre M(SD) | Post M(SD) | dM | t(40) | p | Cohen's dz |
|---|---|---|---|---|---|---|
{t_row(ttest, 'IM')}
{t_row(ttest, 'IR')}
{t_row(ttest, 'ER')}
{t_row(ttest, 'AM')}

All four subscales increased significantly with medium effect sizes (|dz| about
0.5 to 0.7). Reading direction matters: IM and IR rising are positive signs;
ER rising means more external regulation; **AM rising means more amotivation,
which is bad news**.

Post-test intrinsic motivation (IM) vs final grade correlates r = {r:.2f}
(p = {p_r:.3f}); a {'weak' if abs(r) < 0.3 else 'moderate'} {'positive' if r >= 0 else 'negative'}
and {'statistically significant' if p_r < 0.05 else 'non-significant'} link.
Correlation is not causation either way.

## Hero chart

![All four SIMS subscales increased after the course](slope.png)

## Three teaching takeaways / next steps

1. **Motivation moved in mixed-quality directions.** Self-determined motivation
   (IM, IR) rose, but so did external regulation (ER) and amotivation (AM).
2. **Fix the instrument before the next round.** Item 11's rewrite broke ER's
   pre-test reliability; lock the wording so pre vs post is a fair comparison.
3. **Look past the average.** With only n={n_matched}, a rising mean can hide
   subgroups moving in opposite directions; pair these numbers with student
   interviews or a subgroup split before drawing strong conclusions.

> Limits: small paired sample (n={n_matched}); ER pre-test reliability and the
> item-11 rewrite; correlation is not causation.
"""
    (d05 / "mini_report.md").write_text(md, encoding="utf-8")


def write_q11drop_report(d07: Path, reliability: pd.DataFrame, ttest: pd.DataFrame,
                         r: float, p_r: float) -> None:
    rel = reliability.set_index("subscale")
    er_p = float(ttest.set_index("subscale").loc["ER", "p"])
    md = f"""# Q11 Sensitivity Reanalysis Report

## Background

This make-up analysis accepts the Exercise 02 diagnosis: Q11 is a questionnaire-design
problem. To improve reliability and validity for the pre/post t-test, adjusted ER
drops Q11 and uses only Q3, Q7, and Q15. IM, IR, and AM keep the original SIMS
mapping; AM remains Q4, Q8, Q12, and Q16.

The cleaned response files use actual 1-7 agreement scores, converted from the
Excel option-number sheet with `actual_score = 8 - option_number`.

## Adjusted reliability

| Subscale | Items used | Pre alpha | Post alpha |
|---|---|---|---|
| IM | Q1,Q5,Q9,Q13 | {rel.loc['IM','pre_alpha']:.2f} | {rel.loc['IM','post_alpha']:.2f} |
| IR | Q2,Q6,Q10,Q14 | {rel.loc['IR','pre_alpha']:.2f} | {rel.loc['IR','post_alpha']:.2f} |
| ER | Q3,Q7,Q15 | {rel.loc['ER','pre_alpha']:.2f} | {rel.loc['ER','post_alpha']:.2f} |
| AM | Q4,Q8,Q12,Q16 | {rel.loc['AM','pre_alpha']:.2f} | {rel.loc['AM','post_alpha']:.2f} |

After dropping Q11, pre-test ER alpha rises from about 0.36 to {rel.loc['ER','pre_alpha']:.2f}.
That confirms Q11 was the main item undermining pre-test ER reliability.

## Adjusted paired t-test

| Subscale | Pre M(SD) | Post M(SD) | dM | t(40) | p | Cohen's dz |
|---|---|---|---|---|---|---|
{t_row(ttest, 'IM')}
{t_row(ttest, 'IR')}
{t_row(ttest, 'ER')}
{t_row(ttest, 'AM')}

IM, IR, and AM match the original recoded analysis because their item sets did
not change. ER still increases, but p = {er_p:.4f}, so the Q11-drop ER change is
not significant at the 0.05 level. The original ER-significant result should
therefore be reported cautiously.

AM still needs careful interpretation: AM increasing means more amotivation,
which is bad news.

## Hero chart

![Q11 excluded slope chart](figures_q11drop/slope.png)

## Grade link

Post-test IM and final grade correlate at r = {r:.2f} (p = {p_r:.3f}). This is
not causal evidence either way.
"""
    (d07 / "mini_report_q11drop.md").write_text(md, encoding="utf-8")


def main() -> None:
    pre = load_clean(PRE_XLSX)
    post = load_clean(POST_XLSX)

    pre_ids, post_ids = set(pre["帳號"]), set(post["帳號"])
    matched = sorted(pre_ids & post_ids)
    pre_only = sorted(pre_ids - post_ids)
    post_only = sorted(post_ids - pre_ids)

    d01 = out_dir("01-data-cleaning")
    pre.to_csv(d01 / "clean_pre.csv", index=False)
    post.to_csv(d01 / "clean_post.csv", index=False)
    pd.DataFrame({"帳號": matched}).to_csv(d01 / "matched_ids.csv", index=False)
    pd.DataFrame({"帳號": pre_only}).to_csv(d01 / "pre_only.csv", index=False)
    pd.DataFrame({"帳號": post_only}).to_csv(d01 / "post_only.csv", index=False)

    qcols = [f"Q{i}" for i in range(1, 17)]
    in_range = bool(((pre[qcols] >= 1) & (pre[qcols] <= 7)).all().all()
                    and ((post[qcols] >= 1) & (post[qcols] <= 7)).all().all())
    missing = int(pre[qcols].isna().sum().sum() + post[qcols].isna().sum().sum())

    sub_pre = subscale_scores(pre)
    sub_post = subscale_scores(post)
    d02 = out_dir("02-reliability")
    sub_pre.to_csv(d02 / "subscale_scores_pre.csv", index=False)
    sub_post.to_csv(d02 / "subscale_scores_post.csv", index=False)
    reliability = reliability_table(pre, post, SUBSCALES).round(3)
    reliability.to_csv(d02 / "reliability.csv", index=False)

    ttest = paired_ttests(sub_pre, sub_post, matched)
    out_dir("03-t-test")
    ttest.to_csv(EN / "03-t-test" / "outputs" / "ttest_results.csv", index=False)

    figdir = out_dir("04-charts") / "figures"
    draw_charts(figdir, sub_pre, sub_post, matched, title_suffix=" (n=41)")

    grades = pd.read_csv(GRADES)
    d05 = out_dir("05-capstone")
    merged = sub_post.merge(grades, left_on="帳號", right_on="id", how="inner")
    merged.to_csv(d05 / "survey_grades_merged.csv", index=False)
    r, p_r = stats.pearsonr(merged["IM"], merged["final"])
    (d05 / "slope.png").write_bytes((figdir / "slope.png").read_bytes())
    write_mini_report(d05, ttest, reliability, len(pre), len(post), len(matched), len(merged), r, p_r)

    sub_pre_drop = subscale_scores(pre, SUBSCALES_Q11_DROP)
    sub_post_drop = subscale_scores(post, SUBSCALES_Q11_DROP)
    d07 = out_dir("07-q11-sensitivity-reevaluation")
    sub_pre_drop.to_csv(d07 / "subscale_scores_pre_q11drop.csv", index=False)
    sub_post_drop.to_csv(d07 / "subscale_scores_post_q11drop.csv", index=False)
    reliability_drop = reliability_table(pre, post, SUBSCALES_Q11_DROP, include_items=True)
    reliability_drop.to_csv(d07 / "reliability_q11drop.csv", index=False)
    ttest_drop = paired_ttests(sub_pre_drop, sub_post_drop, matched)
    ttest_drop.to_csv(d07 / "ttest_results_q11drop.csv", index=False)
    draw_charts(d07 / "figures_q11drop", sub_pre_drop, sub_post_drop, matched, title_suffix=" Q11-drop", q11drop=True)
    merged_drop = sub_post_drop.merge(grades, left_on="帳號", right_on="id", how="inner")
    merged_drop.to_csv(d07 / "survey_grades_merged_q11drop.csv", index=False)
    r_drop, p_r_drop = stats.pearsonr(merged_drop["IM"], merged_drop["final"])
    write_q11drop_report(d07, reliability_drop, ttest_drop, r_drop, p_r_drop)

    for ex in sorted(p.parent.name for p in EN.glob("*/outputs")):
        src = EN / ex / "outputs"
        dst = ZH / ex / "outputs"
        if dst.exists():
            shutil.rmtree(dst)
        shutil.copytree(src, dst)

    assert (len(pre), len(post), len(matched)) == (43, 44, 41), "n mismatch"
    expect = {"IM": 3.52, "IR": 3.42, "ER": 4.63, "AM": 3.24}
    tvals = {row["subscale"]: row["t"] for _, row in ttest.iterrows()}
    for k, v in expect.items():
        assert abs(tvals[k] - v) < 0.05, f"t({k}) drifted: {tvals[k]} vs {v}"
    er_drop_p = float(ttest_drop.set_index("subscale").loc["ER", "p"])
    assert 0.074 < er_drop_p < 0.076, f"Q11-drop ER p drifted: {er_drop_p}"

    print("pre", len(pre), "post", len(post), "matched", len(matched))
    print("pre_only", pre_only, "post_only", post_only)
    print("in_range", in_range, "missing", missing)
    print(reliability.to_string(index=False))
    print(ttest.to_string(index=False))
    print("Q11-drop")
    print(ttest_drop.to_string(index=False))
    print(f"post-IM vs final: r={r:.3f}, p={p_r:.3f}, n={len(merged)}")
    print("PASS: all acceptance numbers reproduce with actual_score = 8 - option_number.")


if __name__ == "__main__":
    main()
