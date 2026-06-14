# 三小時工作坊課程規劃 / 3-Hour Workshop Plan

> **總時長 / Total**：180 分鐘 / 180 minutes
> **核心主軸 / Theme**：用 AI 代理（Claude Code、Codex 或 Copilot）把一份真實的 SIMS 學習動機問卷，跑完一條完整的資料分析流程：清理、信度、t 檢定、畫圖、整合報告。
> A real SIMS learning-motivation survey driven end-to-end with an AI agent: clean, reliability, t-test, charts, one-page report.
> **設計原則 / Design principle**：安裝在課前完成；課堂時間留給「提問 → 驗證 → 修正」。Installation happens before class; room time is for Prompt -> Verify -> Iterate.

---

## ⏱️ 時間總覽 / Agenda at a glance

| 區段 Block | 內容 Content | 時長 Min |
| :--- | :--- | :--- |
| 準備階段 Module 1 | 環境設置與 AI 代理 / Environment check + AI agents | 20 |
| 練習 00 Ex 00 | 認識代理與資料 / Meet the agent and the data | 12 |
| 練習 01 Ex 01 | 原始資料清理與萃取 / Data cleaning and extraction | 28 |
| 練習 02 Ex 02 | 信度與效度 / Reliability and validity | 25 |
| 休息 Break | 中場休息 / Mid-session break | 10 |
| 練習 03 Ex 03 | 配對 t 檢定 / Paired t-test | 30 |
| 練習 04 Ex 04 | 畫圖說故事 / Charts that tell the story | 22 |
| 練習 05 Ex 05 | 整合一頁報告 / Capstone one-page report | 23 |
| 模組三 Module 3 | 資安與隱私收尾 / Security and privacy wrap-up | 10 |
| **合計 Total** | | **180** |

> ⚠️ **這是緊湊的一輪 / This is a tight run.** 不像更長的版本留有 40 分鐘大緩衝；本規劃把緩衝壓進「課前安裝」與每段的彈性裡。若班級進度落後，講師可捨棄練習 05（改成示範解答包）以換回時間。練習 **06（質性）** 與 **07（Q11 敏感度）** 是課後延伸，不列入三小時核心。
> Unlike longer versions, there is no fat 40-minute buffer; slack is absorbed by pre-class setup and per-block flex. If a cohort lags, the facilitator may drop Ex 05 (demo the answer key instead) to recover time. Ex 06 (qualitative) and Ex 07 (Q11 sensitivity) are post-class extensions, not part of the 3-hour core.

---

## 🔗 資料契約（全程不可漂移）/ The data contract (never drifts)

整個工作坊圍繞同一條分析流水線；每一段的產出都是下一段的輸入，全部存到 `labs/_results/`。
The whole workshop follows one analysis pipeline; each block's output feeds the next, all saved to `labs/_results/`.

```text
pre/post-test.xlsx  (header=1; 實際分數 score = 8 - 選項編號 option)
  ─ 練習01 Ex01 ─►  clean_pre.csv + clean_post.csv + matched_ids.csv
  ─ 練習02 Ex02 ─►  subscale_scores_pre/post.csv + reliability.csv
  ─ 練習03 Ex03 ─►  ttest_results.csv
  ─ 練習04 Ex04 ─►  figures/*.png
  ─ 練習05 Ex05 ─►  mini_report.md
```

講師需在每段確認檔名一致、產出都落在 `labs/_results/`，且**原始資料 `labs/data/` 全程不可修改**。
Confirm filenames stay consistent, outputs land in `labs/_results/`, and the raw files in `labs/data/` are never edited.

---

## 準備階段：環境設置與 AI 代理（20 分鐘）/ Module 1: Environment check + AI agents

> 前提：安裝（Python 環境、VS Code、所選 AI 代理）已於課前完成。本段是**驗證**而非從零安裝。
> Installation (Python env, VS Code, chosen agent) is done before class. This block is verification, not setup.

### 1. 環境快速驗證 / Quick environment check（約 8 分）

* **代理可用驗證 / Agent works**：在專案資料夾啟動所選代理（Claude Code / Codex / Copilot），請它「列出 `labs/data/` 內所有檔案並各用一句話說明」。看到它自己讀目錄、回報檔案，即代表就緒。
  Launch the chosen agent in the project folder and ask it to "list every file in `labs/data/` with a one-line description." Seeing it read the directory itself means ready.
* **額度提醒 / Quota note**：各家免費或試用額度屬「輕量」等級，足以完成本工作坊，但經不起反覆大量迭代。下指令力求一次到位、減少來回；卡關時優先改用解答包，而非反覆重試。
  Free/trial quotas are lightweight: enough for this workshop, not for heavy iteration. Aim for one-shot prompts; when stuck, use the answer key instead of retrying.
* **同步檢查點 / Sync checkpoint**：全班的代理都能列出 `labs/data/` 後，才往下走；課前未裝妥者，講師此時一對一補救，其餘學員可先往下。
  Everyone's agent can list `labs/data/` before moving on.

### 2. AI 代理：這不只是 Chat，這是 Agent / Not chat, an agent（約 7 分）

* **傳統 Chat 模式 / Chat**：你問一句，AI 回一段建議或程式碼；複製貼上、開檔案、執行與除錯多半仍要自己做。
* **AI 代理 / Agent**：你給目標，代理可以讀檔、寫檔、執行指令、看錯誤並修正；你負責定義目標與審查結果。
* **OpenClaw**：偏向自架、常駐的個人助理，可透過 WhatsApp、Telegram、Slack 等通訊通道互動，並透過 Gateway 串接瀏覽器與多種工具；適合把日常跨工具工作變成長期助理流程。
* **Computer Use**：讓代理看見並操作圖形介面，例如桌面 app、已登入瀏覽器或無法只靠檔案／終端機驗證的流程；使用時要控制範圍、確認權限提示與敏感動作。
* **核心節奏 / The core loop**：**提問 → 驗證 → 修正（Prompt → Verify → Iterate）**。每次拿到結果都問自己一句：「我怎麼知道它是對的？」How do I know it's right?

### 3. 第一次下指令與安全權限審查 / First command and safety review（約 5 分）

* **初體驗 / First command**：練最基本的代理命令，例如「幫我建立一個 `notes.md` 並寫入今日日期」，體驗它如何自主動手。
* **關鍵安全教學 / Safety**：當代理想修改本地檔案或執行腳本時，會跳出確認提示。先看懂它的意圖與安全度，再核准。
  > ⚠️ **講師強調 / Stress this**：學員此時的角色不是打字員，而是**審查者（Reviewer）**。必須先看懂代理的意圖與程式碼安全度，才給予執行權限。You are the Reviewer, not a typist.

---

## 練習 00–05：實戰分析流水線 / Exercises 00–05: the hands-on pipeline

每份練習的完整題目、提示起手式與「驗收檢查」都在 `labs/`（中文 `labs/zh/`、English `labs/en/`）。下表是課堂節奏與每段的同步檢查點。
Full worksheets, prompt starters, and Acceptance checks live in `labs/` (`labs/zh/` and `labs/en/`). Below is the room rhythm and each block's sync checkpoint.

| 練習 Ex | 任務重點 Focus | 同步檢查點 Sync checkpoint |
| :--- | :--- | :--- |
| 00（12 分） | 讓代理探索陌生檔案 / let the agent explore | 代理回報前測 4 個工作表、AM 為反向、成績 51 人。Agent reports 4 sheets, AM reverse, 51 students. |
| 01（28 分） | xlsx → 乾淨表格（陷阱：標題列、分數換算、人數不一）/ tidy tables | `clean_pre 43`、`clean_post 44`、`matched 41`；前測獨有 S05,S47；後測獨有 S01,S38,S41。 |
| 02（25 分） | Cronbach's α 信度 / reliability | ER 前測 α ≈ **0.36**（唯一警訊），其餘 > 0.8。ER pre alpha ≈ 0.36 is the only red flag. |
| 03（30 分） | 配對 t 檢定（讀對 AM 方向）/ paired t-test | 四構面皆顯著上升；**AM 上升＝動機變差**。All four rise; AM up = worse. |
| 04（22 分） | 迭代到一看就懂的圖 / iterate to clarity | `figures/` 有 4 張 PNG；slope 斜率圖是主角。4 PNGs; slope chart is the hero. |
| 05（23 分） | 串成一頁報告（誠實寫限制）/ one-page report | `mini_report.md` 結論與 03 一致、提及 ER 信度與 Q11 caveat。 |

> 階段檢查點的預期數字、五個刻意陷阱、以及投影機現場驗算腳本，見 `docs/facilitator-guide.md`。
> Expected numbers, the five deliberate traps, and the projector verify script are in `docs/facilitator-guide.md`.

### ☕ 中場休息（10 分鐘，安排在練習 02 之後）/ Break (10 min, after Ex 02)

講師趁此巡場，協助落後者用解答包接續：把 `sample-solution/<語言>/01-data-cleaning/outputs/` 的 `clean_pre.csv`、`clean_post.csv`、`matched_ids.csv` 複製到學員的 `labs/_results/`，讓全班在練習 03 站上同一起跑線。
During the break, help anyone behind by copying the staged outputs from `sample-solution/<lang>/01-data-cleaning/outputs/` into their `labs/_results/`, so everyone starts Ex 03 together.

---

## 🧭 彈性運用：進度超前或落後時 / Flexibility: when ahead or behind

這段沒有獨立時間區塊，而是融入每一段。依現場狀況彈性分配，建議優先順序：
There is no standalone buffer block; flex lives inside each block. Suggested priorities:

1. **落後者補位 / Catch up**：先協助仍卡關的學員，用解答包 `sample-solution/` 對應階段的 `outputs/` 接續，確保不掉隊。
2. **延伸練習 / Extensions**：行有餘力者接著做練習 **06（口語省思整理）** 與 **07（Q11 敏感度重算）**，體驗質性整理與「資料決策改變結論」。
3. **Q&A 與總結 / Recap**：回顧「提問 → 驗證 → 修正」的工作流，鼓勵學員把流程帶回自己的真實任務。

---

## 🔒 模組三：資安與隱私收尾（10 分鐘）/ Module 3: Security and privacy wrap-up

1. **代理隱私設定 / Agent privacy**：依所用代理關閉「以我的內容協助改善模型」之類的訓練回傳選項（如 ChatGPT/Codex 的 Settings → Data Controls）。
   Turn off "improve the model with my content" style training in your agent's settings.
2. **真實個資守則 / Real PII rule**：本工作坊的 `pre/post-test.xlsx` 含真實學生帳號與姓名。**所有產出（CSV、圖、報告）都不得帶出姓名或帳號**，只輸出去識別化的構面分數與統計量。
   The xlsx files hold real student accounts and names. **No output may carry names or accounts**, only de-identified subscale scores and statistics.
3. **回顧工作流 / Recap**：把「提問 → 驗證 → 修正」帶回自己的真實任務。詳見 `security/privacy-data-controls.md`。

---

## 📋 講師課前準備檢核 / Pre-class checklist

* [ ] 課前一週寄安裝確認信：Python 3.10+（建議備好含 `pandas scipy openpyxl matplotlib` 的虛擬環境）、VS Code、以及**一個**已登入可用的 AI 代理（Claude Code / Codex / Copilot 擇一）。Send setup mail one week ahead.
* [ ] 請學員回傳「代理成功列出某資料夾檔案」的截圖，提前篩出環境異常者。Ask for a screenshot proving the agent runs.
* [ ] 發放練習資料：把 `labs/data/`（含兩份 `.xlsx`、`grade-report.csv`）放進學員專案；提醒這是真實個資，依 `security/` 原則處理。
* [ ] 解答包即分段保險包：確認 `sample-solution/` 各階段 `outputs/` 齊全，準備多個還原點而非只有最終檔，讓任何一段卡關的學員都能就近接續。The sample-solution outputs are staged restore points, not just a final file.
* [ ] 準備離線可展示成果：以防網路或代理額度不穩，先備好 `sample-solution/` 的圖與報告可直接投影。

---

## 附錄 A：課前安裝快速指南 / Appendix A: Pre-class setup quick guide

本工作坊**不綁定特定代理**，學員只需準備好**一個**會寫程式、能讀寫本機檔案、能執行終端機指令的 AI 代理，外加一個含資料分析套件的 Python 環境。
Agent-agnostic: students need **one** coding agent plus a Python environment with the analysis libraries.

| 你需要 You need | 重點 Notes |
| :--- | :--- |
| Python 3.10+ | 含 `pandas`、`scipy`、`openpyxl`、`matplotlib`；建議用虛擬環境。 |
| 一個 AI 代理 One agent | Claude Code（Anthropic 帳號）／ Codex CLI（`npm i -g @openai/codex`，ChatGPT 帳號）／ GitHub Copilot（VS Code 擴充，GitHub 帳號）擇一。 |
| VS Code | 當作編輯器與終端機的統一介面，用 `File → Open Folder` 開整個工作坊資料夾。 |

詳細步驟見 `setup/agent-setup.md`、`setup/vscode-setup.md`，常見問題見 `setup/troubleshooting.md`。
Full steps in `setup/agent-setup.md`, `setup/vscode-setup.md`; problems in `setup/troubleshooting.md`.

> 若學員選用 **GitHub Copilot**，且尚未取得教育福利與安裝 VS Code，請參考下方附錄 B 的手把手教學。
> If a student chooses **GitHub Copilot** and has not yet claimed the education benefit or installed VS Code, see Appendix B below.

---

## 附錄 B：老師申請 GitHub Copilot 免費福利與安裝 VS Code（手把手）/ Appendix B: Claim GitHub Copilot free benefit and install VS Code

> 僅在選用 Copilot 時需要；選用 Claude Code 或 Codex 的學員可略過此附錄。
> Only needed if you choose Copilot.

本教學專為**第一次安裝程式軟體的老師**設計。每一步都會告訴您：

* 👉 **要點哪裡**（按鈕、選單的名稱）
* ✅ **應該會看到什麼**（用來確認自己沒做錯）
* ⚠️ **卡住怎麼辦**（常見問題排解）

只要照著順序做，全程約 30 分鐘（不含審核等待時間）即可完成。

> **這份福利是什麼？**
> 通過 GitHub 教育身分驗證後，老師可**免費**使用 GitHub Copilot Pro（AI 寫程式助手）。GitHub 官方雖提示「暫停部分 Copilot 方案的新增訂閱」，但教育整套福利（Education Benefits）與 Copilot Free 管道依然開放。

### 🗺️ 全流程總覽

| 階段 | 您要做的事 | 大約時間 |
| :--- | :--- | :--- |
| 準備 | 備妥學校 Email 與在職證明 | 10 分 |
| 第一階段 | 申請 GitHub 帳號（已有可跳過） | 5 分 |
| 第二階段 | 把學校 Email 綁到 GitHub | 5 分 |
| 第三階段 | 提交教職員（Faculty）身分申請 | 10 分 |
| 第四階段 | 等待審核並確認開通 | 數分鐘至一週 |
| 第五階段 | 安裝 VS Code | 10 分 |
| 第六階段 | 在 VS Code 啟用 Copilot 並測試 | 10 分 |

> 建議您**一次做到第三階段**送出申請，再利用等審核的空檔去完成第五階段（安裝 VS Code）。

### 📌 準備：先備妥這兩樣東西

1. **學校的官方 Email**：通常以 `.edu.tw` 結尾（例如 `yourname@stust.edu.tw`）。這是**最快通過自動審核**的關鍵。
2. **在職證明文件**（僅在 Email 自動驗證沒過時才會用到）：
   * 需印有您的**姓名、學校名稱、當前有效日期**。
   * 推薦：正式在職證明書、本學期聘書，或印有當學期註冊章/有效章的教職員證。
   * 先用手機拍清楚或掃描成 PDF/JPG 存在電腦桌面，需要時才不會手忙腳亂。

### 第一階段：申請 GitHub 帳號（已有帳號請跳到第二階段）

1. 開啟瀏覽器（建議 Chrome 或 Edge），在網址列輸入 `github.com` 後按 Enter。
2. 點擊右上角的 **Sign up**（註冊）。
3. 依畫面指示輸入：**Email**（可先用您的常用信箱）、**密碼**、**使用者名稱（Username）**。
4. 完成畫面上的機器人驗證，並到信箱收驗證碼、填入。

> ✅ **你應該會看到**：登入後出現 GitHub 的首頁（Dashboard），右上角有一個圓形的個人頭像。

### 第二階段：把學校 Email 綁到 GitHub 帳號

> 目的：讓 GitHub 知道您是學校的一員，這是通過審核的核心。

1. 登入 GitHub 後，點擊**右上角圓形頭像**。
2. 在下拉選單中點選 **Settings**（設定）。
3. 在左側選單中，找到並點選 **Emails**。
4. 找到 **Add email address** 欄位，輸入您的**學校 Email**，再點旁邊的 **Add**。
5. 打開您的**學校信箱**，會收到一封 GitHub 的驗證信，點信中的 **Verify**（驗證）連結。

> ✅ **你應該會看到**：回到 GitHub 的 Emails 頁面，學校 Email 旁的紅色 "Unverified" 標籤消失，變成已驗證狀態。
>
> ⚠️ **沒收到信？** 檢查垃圾郵件匣；或回到步驟 4 確認 Email 沒打錯，再點一次 Add 重寄。

### 第三階段：提交教職員（Faculty）身分申請

1. 在瀏覽器網址列輸入 `education.github.com/discount_requests/application` 並前往 GitHub Education 申請頁面（或在 `education.github.com` 點 **Get benefits**）。
2. 選擇身分：點選 **Faculty**（教職員）。
   * ⚠️ 不要選成 Student（學生），老師請務必選 Faculty。
3. 填寫學校資訊：
   * **School email**：選擇您剛剛綁定好的**學校 Email**。
   * **School name**：輸入學校的**英文官方名稱**（通常打前幾個字，系統會自動下拉帶出，請從清單中點選）。
   * **用途說明**：用英文簡短說明教學用途。可直接複製這句：
     > `I will use GitHub and Copilot to demonstrate coding practices in my classes.`
4. 點擊 **Submit / Continue** 送出。

> 💡 **提高「秒過」機率的關鍵**：送出申請時，請在**校園網路環境（School IP）**下操作，並在瀏覽器跳出定位請求時點**允許**。系統偵測到您人在校園網域，自動審核通過的機率會大幅提高。
>
> ✅ **你應該會看到**：一個「Application submitted / 申請已送出」的確認畫面。

### 第四階段：等待審核並確認開通

審核有兩種情況：

* **自動審核（最常見）**：學校 Email 良好且在校園網域內申請，通常**幾分鐘內**就會收到通過信。
* **人工審核**：若系統要求上傳在職證明文件，依指示上傳準備好的文件，需等待**數天至一週**。

#### 如何確認自己已成功開通？

1. 前往 GitHub 教育福利頁面（`education.github.com/benefits`）確認身分狀態為已通過。
2. 前往 Copilot 設定頁面（`github.com/settings/copilot`）。

> ✅ **代表成功**：在 Copilot 設定頁看到 **"GitHub Copilot Pro is active for your account"**。
> 開通後每月可享 AI 點數額度，並能在 VS Code 等環境免費使用。

### 第五階段：安裝 VS Code（寫程式用的編輯器）

> VS Code 是 Copilot 運作的「家」。以下以**最常見的安裝步驟**說明，第一次安裝軟體也能跟著做。

#### Windows 電腦

1. 開啟瀏覽器，前往 `code.visualstudio.com`。
2. 點擊藍色大按鈕 **Download for Windows**，等待下載完成。
3. 打開下載好的檔案（檔名類似 `VSCodeUserSetup-x64-….exe`，通常在瀏覽器左下角或「下載」資料夾）。
4. 安裝精靈出現後：勾選 **我接受協議**，其餘畫面**一律點 Next（下一步）**即可，最後點 **Install**，完成後點 **Finish**。

#### Mac 電腦

1. 前往 `code.visualstudio.com`，點 **Download for Mac**。
2. 下載的是一個壓縮檔，打開後會出現 **Visual Studio Code** 圖示。
3. 把這個圖示**拖曳到「應用程式（Applications）」資料夾**。
4. 到「應用程式」資料夾，**雙擊** Visual Studio Code 開啟。第一次開啟若跳出安全性提醒，點 **打開（Open）**。

> ✅ **你應該會看到**：VS Code 開啟，出現深色（或淺色）的歡迎畫面 "Get Started"。看到這個畫面就代表安裝成功了。

### 第六階段：在 VS Code 啟用 Copilot 並測試

1. 在 VS Code **最左側直排的圖示列**，找到並點擊**四個方塊組成的圖示**（Extensions / 擴充功能）。
2. 在最上方搜尋框輸入 `GitHub Copilot`。
3. 找到藍色勾勾、發行者為 **GitHub** 的那一個，點 **Install**（安裝）。
4. 安裝後，VS Code 通常會在**右下角彈出提示**要您登入 GitHub，點 **Sign in**（登入）。
   * 若沒彈出：點左下角的**頭像/帳號圖示** → **Sign in with GitHub**。
5. 瀏覽器會自動開啟並詢問是否授權，點 **Authorize / Continue**，再切回 VS Code。

> ✅ **代表成功**：VS Code **右下角狀態列**出現 Copilot 的小圖示，且不再有紅色錯誤標記。

#### 馬上測試一下

1. 點左上 **File → New File**，存成 `test.py`（檔名結尾 `.py`）。
2. 在檔案中打一行註解：`# 寫一個函式印出 hello world`，然後按 Enter。
3. 稍等一兩秒，Copilot 會用**灰色淡淡的文字**自動建議程式碼。
4. 按鍵盤 **Tab** 鍵，就能接受這段建議。

> ✅ **你應該會看到**：灰色建議文字變成正式的程式碼。看到這個，恭喜，您的 Copilot 已經完全可以用了！

### ⚠️ 常見問題排解（FAQ）

| 問題 | 處理方式 |
| :--- | :--- |
| 收不到驗證信 | 先看垃圾郵件匣；確認 Email 沒打錯；回 Emails 頁面重寄。 |
| 被要求上傳文件 | 屬正常人工審核，上傳準備好的在職證明，耐心等數天至一週。 |
| 申請被拒絕 | 確認當初選的是 Faculty 而非 Student；改用校園網路重新申請；改附更清楚的在職證明。 |
| 沒出現灰色建議 | 確認福利頁顯示 Copilot 已 active；在 VS Code 重新登入一次 GitHub 帳號；確認檔案有副檔名（如 `.py`）。 |
| 圖示有紅色錯誤 | 多半是尚未登入或審核未過；重做第六階段步驟 4，並確認福利已開通。 |

> 🆘 真的卡住時，請記下**您卡在第幾階段、第幾步**，並截圖當下畫面，方便向工作坊講師或資訊同仁求助。
