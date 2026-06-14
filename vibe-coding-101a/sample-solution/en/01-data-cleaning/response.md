# Exercise 01 sample response - Data cleaning

> Generated files are in [outputs/](outputs/).

I opened that sheet, skipped the title row in favor of the second row as the real headers, dropped all-blank rows, kept `帳號`, renamed the 16 items in order to Q1 through Q16, and converted option numbers into actual agreement scores with `actual_score = 8 - option_number`.

**Results**

- `clean_pre.csv`: **43 rows**; `clean_post.csv`: **44 rows** (excluding header), columns `帳號, Q1...Q16`.
- Q1 through Q16 are now **actual 1-to-7 agreement scores**, not the original Excel option numbers.
- Matched (did both): **41 students**.
- Pre-only: **S05, S47**. Post-only: **S01, S38, S41**.
- All answers are within **1 to 7**, with **no missing values**.

> Why 43 / 44 / 41? If you get 44 / 45, you probably forgot to skip the title row or counted blank rows. The first column header should read `帳號`, not the title string.

**Bonus (item 11 wording)**: item 11 (an ER item) was reworded between pre and post ("I have no choice but to attend..." vs "I have to come to this course..."). Once the wording changes, pre and post are not measuring the exact same thing, so strictly speaking they **cannot be compared directly**. Note it now; this instrument-fidelity issue returns in Exercise 03.

### Acceptance check ✓
- [x] `clean_pre.csv` **43 rows**, `clean_post.csv` **44 rows**, columns `帳號, Q1...Q16`
- [x] **41 matched**; pre-only **S05, S47**; post-only **S01, S38, S41**
- [x] All answers within **1-7**, no missing values
