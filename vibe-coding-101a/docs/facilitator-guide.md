# 講師手冊 / Facilitator Guide

> 預期答案、刻意設計的「陷阱」、常見學員錯誤與每段時間。這不是程式解答本，而是判斷學員結果對不對的依據。
> Expected answers, the deliberate "traps," common learner mistakes, and timing. Not a code answer key, but a guide to judge whether learners' results are right.
>
> 完整逐題版見 `labs/zh/FACILITATOR_NOTES.md` 與 `labs/en/FACILITATOR_NOTES.md`。Full per-exercise version in those files.

---

## 五個刻意陷阱 / The five built-in traps

1. **標題列 Title row**：每個 xlsx 工作表第一列是大標題，真正的欄位名在第二列（`header=1`）。代理常忘記，欄名會變成標題字串。Real headers are on row 2.
2. **人數不一 Mismatched n**：前測 43、後測 44、只有 41 人配對成功。逼出合併與配對資料的觀念。pre 43 / post 44 / matched 41.
3. **Q11 改題 Item 11 reworded**：ER 構面的第 11 題在前後測用字不同，是 ER 前測信度崩掉的元兇。The culprit behind ER's broken pre-test reliability.
4. **AM 方向相反 Reverse AM**：無動機分數越高越糟，所以下降才是好事。最常被讀反。Higher AM = worse.
5. **成績長尾 Grade tail**：`final` 有 6 個 0 分、13 人低於 60，直方圖一眼可見。Obvious in the histogram.

---

## 各練習預期答案 / Expected answers per exercise

### 01 資料清理 / Data cleaning
- 前測 **43** 列、後測 **44** 列，欄位 `帳號, Q1...Q16`。
- 配對 **41** 人；前測獨有 **S05, S47**；後測獨有 **S01, S38, S41**。
- 所有答案落在 **1–7**，無缺值。
- 常見錯：沒跳過標題列、把空白列也算進去（會得 44/45）。Common error: not skipping the title row.

### 02 信度 Cronbach's α
| 構面 Subscale | 前測 Pre | 後測 Post |
|---|---|---|
| IM | 0.93 | 0.95 |
| IR | 0.90 | 0.96 |
| ER | **0.36**（！） | 0.92 |
| AM | 0.86 | 0.87 |

- 唯一警訊是 **ER 前測 ≈ 0.36**。加分：丟掉 Q11（只留 Q3,Q7,Q15）可明顯拉高前測 ER 的 α。
- 公式 Formula：`alpha = k/(k-1) * (1 - sum(item variances) / total-score variance)`，樣本變異數 ddof=1，不需 pingouin。

### 03 配對 t 檢定 / Paired t-test（n=41, df=40）
| 構面 | 前測 Pre M(SD) | 後測 Post M(SD) | ΔM | t(40) | p | dz |
|---|---|---|---|---|---|---|
| IM | 5.23(1.04) | 5.74(0.99) | +0.51 | 3.52 | 0.001 | 0.55 |
| IR | 5.38(0.98) | 5.82(1.00) | +0.44 | 3.42 | 0.002 | 0.53 |
| ER | 5.15(0.70) | 5.83(0.95) | +0.68 | 4.63 | <0.001 | 0.72 |
| AM | 3.41(1.07) | 3.94(1.43) | +0.53 | 3.24 | 0.002 | 0.51 |

- **四構面皆顯著上升**，效果量中等（|dz| 0.5–0.7）。
- 讀法 Reading：IM/IR 上升＝正面；ER 上升＝外在壓力增強；**AM 上升＝無動機增加＝壞消息**。
- 誠實 caveat：n=41 偏小；ER（前測信度差＋Q11 改題）最該保守解讀。

### 04 畫圖 / Charts
- `labs/_results/figures/` 應有 4 張 PNG。長條圖與斜率圖都顯示「四構面皆上升」。
- 最常見問題：中文標籤變成空白方塊。解法：設 CJK 字型（macOS `PingFang TC`）或改用英文標籤。Non-Latin labels render as empty boxes.

### 05 整合報告 / Capstone
- 合併檔只含同時出現在問卷與成績中的學生。
- 後測 IM 與期末成績的相關接近 0、略正、不顯著；強調「相關不等於因果」。Correlation is not causation.
- 好報告會誠實寫出限制（n=41、ER 信度、Q11、AM 方向）。

### 07 Q11 敏感度重算 / Q11 sensitivity（延伸 extension）
- 丟掉 Q11 後，ER 前測 α 從 0.36 → **0.92**，但 ER 的配對 t 檢定變成**不顯著**（p ≈ 0.075）。
- 重點：資料決策會改變結論。不是把數字弄漂亮，而是誠實說明問卷設計問題如何影響結論。Data decisions change conclusions.

---

## 投影機現場驗算 / Live "verify" demo

在投影機上用本機 Python 跑一段最小腳本，當場核對答案（重點：別盲信代理，你也能驗）。
On the projector, run a minimal script with the bundled Python to check answers on the spot.

```bash
/Users/jyang/py312-venv/bin/python3 - <<'PY'
import pandas as pd
from scipy import stats
SUB={'IM':[1,5,9,13],'IR':[2,6,10,14],'ER':[3,7,11,15],'AM':[4,8,12,16]}
def load(p):
    d=pd.read_excel(p,sheet_name='答題記錄(選項編號)',header=1).dropna(how='all')
    o=d[['帳號']].copy()
    for i,c in enumerate(d.columns[3:19],1): o[f'Q{i}']=8-pd.to_numeric(d[c],errors='coerce')
    return o.dropna(subset=['帳號'])
pre,post=load('labs/data/pre-test.xlsx'),load('labs/data/post-test.xlsx')
m=sorted(set(pre['帳號'])&set(post['帳號']))
print('pre',len(pre),'post',len(post),'matched',len(m))
def sub(d):
    return pd.DataFrame({'帳號':d['帳號'],**{s:d[[f'Q{q}' for q in qs]].mean(1) for s,qs in SUB.items()}}).set_index('帳號')
a,b=sub(pre),sub(post)
for s in SUB:
    t,p=stats.ttest_rel(b.loc[m,s],a.loc[m,s]); print(s,'t=%.2f p=%.4f'%(t,p))
PY
```

預期輸出 Expected：`pre 43 post 44 matched 41`，四個 t 值對應上表。

---

## 落後者保險包 / Restore points for learners who fall behind

`sample-solution/` 各階段的 `outputs/` 就是分段還原點。把對應檔案複製到學員的 `labs/_results/` 即可接續：
The `outputs/` under `sample-solution/` are staged restore points. Copy them into a learner's `labs/_results/` to continue:

| 卡在 Stuck at | 發放 Hand over（`sample-solution/<lang>/...`） |
|---|---|
| 練習 01 Ex 01 | `01-data-cleaning/outputs/` → `clean_pre.csv`, `clean_post.csv`, `matched_ids.csv` |
| 練習 02 Ex 02 | `02-reliability/outputs/` → `subscale_scores_pre/post.csv`, `reliability.csv` |
| 練習 03 Ex 03 | `03-t-test/outputs/ttest_results.csv` |
| 練習 04 Ex 04 | `04-charts/outputs/figures/*.png` |

---

## 教練提醒 / Coaching reminders

- 反覆強調 **提問 → 驗證 → 修正**。每次學員拿到結果，就問：「你怎麼知道它是對的？」
- 把代理的錯誤當成最好的教學時刻，而不是失敗。Frame mistakes as teachable moments.
- 提醒：永遠不要改 `labs/data/` 的原始檔；所有產出都進 `labs/_results/`。
