# AI 代理安裝與驗證 / AI Agent Setup and Check

> 教室電腦已預先安裝 Codex、VS Code 與 Codex extension、Python、Node.js 及必要 Python 套件。自備筆電的學員由講師帶著安裝，TA 協助處理安裝問題；課堂第一段以確認環境可用為主。
> Classroom PCs already have Codex, VS Code with the Codex extension, Python, Node.js, and required Python packages installed. Learners using personal notebooks will be guided by the instructor, with TA support for installation issues; the first in-room block focuses on confirming readiness.

---

## 教室電腦已預先安裝 / Classroom PCs are preinstalled

- Codex VS Code extension
- Codex CLI
- VS Code
- Python 3.10+
- Node.js
- `pandas`、`scipy`、`openpyxl`、`matplotlib`

自備筆電的學員請依下方清單安裝；講師會示範流程，TA 會協助排除指令找不到、登入、套件缺少等問題。

## 你需要兩樣東西 / You need two things

1. **Python 3.10+**，且能用到 `pandas`、`scipy`、`openpyxl`、`matplotlib`。
   建議建立一個虛擬環境，例如本工作坊預設的：
   A Python 3.10+ environment with `pandas scipy openpyxl matplotlib`. A virtualenv is recommended, e.g. the workshop default:

   ```
   /Users/jyang/py312-venv/bin/python3
   ```

   自行建立的話 / To build your own:

   ```
   python3 -m venv .venv
   .venv/bin/python -m pip install pandas scipy openpyxl matplotlib
   ```

2. **一個 AI 代理 / One AI agent**（擇一即可 / pick one）：

| 代理 Agent | 安裝重點 Install | 登入 Sign-in |
|---|---|---|
| Claude Code | 依官方說明安裝 CLI / 擴充 | 以 Anthropic 帳號登入 |
| Codex CLI | `npm i -g @openai/codex`（需 Node.js 18+） | 以 ChatGPT 帳號登入 |
| GitHub Copilot | 在 VS Code 安裝 Copilot / Copilot Chat 擴充 | 以 GitHub 帳號登入 |

> 三者皆可完成本工作坊。挑你已有帳號、最熟的那一個即可。
> Any of the three works. Use whichever you already have an account for.

## 必要連結 / Required links

| 工具 | 連結 |
|---|---|
| VS Code | [https://code.visualstudio.com/](https://code.visualstudio.com/) |
| Codex VS Code extension | [https://developers.openai.com/codex/ide](https://developers.openai.com/codex/ide) |
| Codex extension marketplace | [https://marketplace.visualstudio.com/items?itemName=openai.chatgpt](https://marketplace.visualstudio.com/items?itemName=openai.chatgpt) |
| Codex CLI | [https://developers.openai.com/codex/cli](https://developers.openai.com/codex/cli) |
| Codex npm package | [https://www.npmjs.com/package/@openai/codex](https://www.npmjs.com/package/@openai/codex) |
| Node.js | [https://nodejs.org/en/download](https://nodejs.org/en/download) |
| Python | [https://www.python.org/downloads/](https://www.python.org/downloads/) |
| Claude Code（可選） | [https://code.claude.com/docs/en/quickstart](https://code.claude.com/docs/en/quickstart) |
| GitHub Copilot（可選） | [https://marketplace.visualstudio.com/items?itemName=GitHub.copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) |

---

## 課堂驗證（準備階段）/ In-room check (Module 1)

1. 在工作坊專案資料夾啟動你的代理（建議用 VS Code 開啟整個資料夾，見 [vscode-setup.md](vscode-setup.md)）。
   Launch your agent inside the workshop project folder.
2. 給它第一個指令：**「列出 `labs/data/` 內所有檔案，每個檔案用一句話說明。」**
   Give it the first task: "List every file in `labs/data/` with a one-line description."
3. 看到代理**自己讀目錄、回報檔案清單**，就代表環境就緒。
   Seeing it read the directory and report the files means you're ready.

> ⚠️ 你的角色是**審查者（Reviewer）**：當代理要修改檔案或執行指令時，先看懂它要做什麼、是否安全，再核准。
> You are the **Reviewer**: before approving file edits or commands, understand what the agent will do.

---

## 額度與節奏 / Quota and pacing

各家免費／試用額度都屬「輕量」等級，足以完成本工作坊，但經不起反覆大量迭代。
Free/trial quotas are lightweight: enough for this workshop, but not for heavy iteration.

- 下指令力求一次到位、減少來回，把額度留給關鍵步驟。Aim for one-shot prompts.
- 卡關時優先改用解答包（`sample-solution/`）接續，而非反覆重試。When stuck, use the answer key to continue.
