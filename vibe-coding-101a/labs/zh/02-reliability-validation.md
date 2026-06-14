# 練習 02 — 問卷信度 (reliability) 與效度 (validity) 檢查

## 學習目標

- 把 16 題合併成 4 個構面 (subscale) 分數（IM / IR / ER / AM）。
- 用 **Cronbach's α** 判斷「同一構面的題目有沒有量到同一件事」。
- 學會在數字漂亮時也保持懷疑。

## 為什麼重要

問卷分析最常被略過、卻最關鍵的一步：**這份問卷可信嗎？** 如果同一構面的四題彼此不一致，那把它們平均起來算出來的分數就沒有意義，後面的 t 檢定 (t-test) 再漂亮也是空的。Cronbach's α 是最常用的信度指標，越接近 1 越好（一般 α ≥ 0.7 算可接受）。

## 任務

用上一關的 `../_results/clean_pre.csv` 與 `../_results/clean_post.csv`。構面對應（出自 [exercises/data/sims-questionnaire-items.md](../data/sims-questionnaire-items.md)）：IM = Q1,Q5,Q9,Q13；IR = Q2,Q6,Q10,Q14；ER = Q3,Q7,Q11,Q15；AM = Q4,Q8,Q12,Q16。

1. 為每位學生算出 4 個構面分數（**該構面四題的平均**），前測 (pre-test)、後測 (post-test) 各一份，存成 `../_results/subscale_scores_pre.csv` 與 `../_results/subscale_scores_post.csv`（欄位：`帳號, IM, IR, ER, AM`）。
2. 為**前測和後測**各算出四個構面的 **Cronbach's α**（共 8 個數字），整理成 `../_results/reliability.csv`。
3. 請 AI 標出哪些 α **低於 0.7**，並猜測可能原因。
4. 寫下一句話：以信度來看，這份問卷整體可不可信？哪裡需要小心？

## 給 AI 代理的提示起手式

> 這一關想請你幫我看問卷的信度。要跑程式就用 `/Users/jyang/py312-venv/bin/python3`，讀我上一關清好的 `exercises/_results/clean_pre.csv` 和 `clean_post.csv`。
> 構面的題目對應是這樣：IM=Q1,Q5,Q9,Q13；IR=Q2,Q6,Q10,Q14；ER=Q3,Q7,Q11,Q15；AM=Q4,Q8,Q12,Q16。
> 先幫每位學生算 4 個構面分數，也就是該構面那四題的平均，前後測各存一份：`subscale_scores_pre.csv`、`subscale_scores_post.csv`（欄位是 帳號, IM, IR, ER, AM）。
> 然後前測、後測的每個構面都算一個 Cronbach's alpha。這個麻煩你自己用公式算就好，不要為了它裝額外套件。算完整理成一張表 `reliability.csv`，欄位大概像 subscale, pre_alpha, post_alpha 這樣。
> 算出來之後，把 alpha 低於 0.7 的標出來，順便猜一下可能是什麼原因。最後用一句話跟我說這份問卷的信度到底可不可信。
> 麻煩把那張 reliability 表直接印出來給我看。

## 驗收檢查

- [ ] `subscale_scores_pre.csv` 有 **43 列**、`subscale_scores_post.csv` 有 **44 列**，分數都在 **1～7** 之間。
- [ ] `reliability.csv` 的 8 個 α 大致為（容許小數第二位差異）：

  | 構面 | 前測 α | 後測 α |
  |---|---|---|
  | IM | 0.93 | 0.95 |
  | IR | 0.90 | 0.96 |
  | ER | **0.36** | 0.92 |
  | AM | 0.86 | 0.87 |

- [ ] AI 有指出 **ER 前測 α ≈ 0.36 偏低**（遠低於 0.7）。

## 加分挑戰

ER 前測信度只有 0.36，後測卻跳到 0.92，這很不尋常。回想 01 練習：**第 11 題（屬於 ER）的題目在前後測之間被改寫了**。請 AI 算算看：如果把前測 ER **拿掉 Q11**、只用 Q3,Q7,Q15 三題，α 會不會變高？這示範了「一個措辭不佳的題目可以拖垮整個構面的信度」。

## 講師提示

- 不需裝 `pingouin`。Cronbach's α 公式：`α = k/(k-1) · (1 − Σσ²ᵢ / σ²_total)`，k = 題數，σ²ᵢ 是各題變異數，σ²_total 是總分變異數（皆用樣本變異數 ddof=1）。
- 教學重點：**IM/IR/AM 信度都很好，唯獨 ER 前測爛掉**，而且原因可追溯到 Q11 改寫。這是「漂亮結果裡藏著一個問題」的最佳教材。
- 拿掉 Q11 後前測 ER 的 α 會明顯上升（題目從負相關變一致），可現場示範。
- 提醒學員：AM 信度雖好，但**高分代表無動機**，這個方向問題留到 03 解讀時再強調。
