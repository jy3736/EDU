# VS Code 安裝與整合 / VS Code Setup

> 教室電腦已預先安裝 VS Code、Codex VS Code extension、Codex CLI、Python、Node.js 與本工作坊需要的 Python 套件。自備筆電的學員不用擔心，講師會帶著完成必要安裝，TA 會協助處理安裝問題。
> Classroom PCs already have VS Code, the Codex VS Code extension, Codex CLI, Python, Node.js, and the required Python packages installed. Learners bringing personal notebooks will be guided by the instructor, with TA support for installation issues.

## 為什麼用 VS Code / Why VS Code

- 左側「總管」可以即時看到 AI 新增或修改的檔案。
- 內建終端機會自動位在你開啟的工作坊資料夾，路徑比較不會錯。
- 可以一邊和 Codex / Claude Code / Copilot 對話，一邊打開 `labs/_results/` 核對產出。
- 後續如果要預覽 HTML 或 Markdown，檔案都在同一個視窗裡。

## 教室電腦已準備好 / Classroom PCs are ready

教室電腦已經預先安裝並設定：

- VS Code
- Codex VS Code extension
- Codex CLI
- Python 3.10+
- Node.js
- Python 套件：`pandas`、`scipy`、`openpyxl`、`matplotlib`

你只需要打開 VS Code，開啟整個 `vibe-coding-101a-v01` 資料夾，進行課堂第一個驗證指令。

## 自備筆電學員 / Personal notebooks

如果你帶自己的筆電：

1. 講師會說明要裝哪些工具、要從哪裡下載、安裝後如何驗證。
2. TA 會協助處理安裝問題，例如指令找不到、登入失敗、Python 套件缺少、終端機路徑不對。
3. 安裝完成後，一樣用本頁的「課堂第一個驗證指令」確認環境可用。

## 必要工具與下載連結 / Required tools and links

| 類別 | 工具 / 連結 | 用途 |
|---|---|---|
| 編輯器 | [Visual Studio Code](https://code.visualstudio.com/) | 開啟工作坊資料夾、查看檔案、使用內建終端機 |
| Codex extension | [Codex IDE extension docs](https://developers.openai.com/codex/ide) / [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=openai.chatgpt) | 在 VS Code 內使用 Codex |
| Codex CLI | [Codex CLI docs](https://developers.openai.com/codex/cli) / [npm package](https://www.npmjs.com/package/@openai/codex) | 在終端機輸入 `codex` 啟動代理 |
| Node.js | [Node.js download](https://nodejs.org/en/download) | 安裝 Codex CLI 與部分前端工具 |
| Python | [Python downloads](https://www.python.org/downloads/) | 執行資料清理、統計與繪圖程式 |
| Claude Code（可選） | [Claude Code quickstart](https://code.claude.com/docs/en/quickstart) | 另一個可用的 AI 代理選項 |
| GitHub Copilot（可選） | [GitHub Copilot extension](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) | 另一個可用的 VS Code 代理選項 |

Python 套件安裝指令：

```bash
python3 -m pip install pandas scipy openpyxl matplotlib
```

## 步驟一：開啟 VS Code / Open VS Code

1. 教室電腦：直接開啟已安裝好的 VS Code。
2. 自備筆電：若尚未安裝，先從 [code.visualstudio.com](https://code.visualstudio.com/) 下載安裝。
3. 可選：在 Extensions 搜尋 `Chinese (Traditional) Language Pack`，安裝後重新載入，介面會變成繁體中文。

## 步驟二：準備 Python 與 AI 代理 / Prepare Python and your agent

教室電腦已完成；自備筆電請確認：

- Python 3.10+ 可用，並能載入 `pandas`、`scipy`、`openpyxl`、`matplotlib`。
- 已準備好一個 AI 代理：Codex VS Code extension / Codex CLI、Claude Code 或 GitHub Copilot 擇一即可。
- Node.js 可用，方便安裝或更新 Codex CLI。
- 安裝與驗證細節見 [agent-setup.md](agent-setup.md)。

## 步驟三：開啟整個工作坊資料夾 / Open the workshop folder

1. 選 `File -> Open Folder...`（檔案 -> 開啟資料夾）。
2. 選擇整個 `vibe-coding-101a-v01` 資料夾，不要只開單一檔案。
3. 如果 VS Code 詢問是否信任此資料夾，選擇信任。
4. 左側總管應該看得到 `labs/`、`setup/`、`sample-solution/` 等資料夾。

## 步驟四：打開終端機並啟動代理 / Launch your agent

1. 選 `Terminal -> New Terminal`（終端機 -> 新增終端機），或按 Ctrl 加鍵盤左上角的反引號鍵。
2. 確認終端機路徑位在工作坊資料夾。
3. 依你選的工具啟動：

| 工具 Tool | 啟動方式 Launch |
|---|---|
| Codex CLI | 在終端機輸入 `codex` |
| Claude Code | 在終端機輸入 `claude` |
| GitHub Copilot | 從 VS Code 側邊欄開啟 Copilot Chat |

## 步驟五：課堂第一個驗證指令 / First in-room check

請代理執行：

```text
列出 labs/data/ 內所有檔案，每個檔案用一句話說明。
```

看到代理自己讀目錄、回報 `pre-test.xlsx`、`post-test.xlsx`、`grade-report.csv` 等資料檔，就代表 VS Code、路徑與代理都已就緒。

## 常見小狀況 / Common issues

| 狀況 | 處理方式 |
|---|---|
| 終端機輸入 `codex` 或 `claude` 說找不到 | 關掉 VS Code 再重開，讓它讀到剛安裝的工具；仍不行見 [troubleshooting.md](troubleshooting.md)。 |
| 終端機路徑不是工作坊資料夾 | 用 `File -> Open Folder...` 重新開啟整個 `vibe-coding-101a-v01`。 |
| 左側看不到 `labs/` | 可能只開到單一檔案，請重新開啟整個資料夾。 |
| 不確定輸出在哪 | 本工作坊產出一律放在 `labs/_results/`。 |
