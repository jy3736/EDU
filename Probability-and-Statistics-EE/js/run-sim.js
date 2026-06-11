/* Run the simulation snippets in the page.

   Every `.sim` block holds one short Python snippet in a <pre><code>. This script
   adds a "Run" and a "Copy" button under that code. Clicking Run lazy-loads
   Pyodide from a CDN on first use (a one-time download of a few seconds),
   auto-loads any imported packages such as NumPy, executes the snippet entirely
   in the browser (no server, no login), and streams the printed output into a
   panel below the code. Nothing loads until the student actually clicks Run, so
   pages that are only read stay light.

   To pin a different Pyodide release, change PYODIDE_VERSION. Labels are
   bilingual (.en / .zh) so the existing language toggle switches them too. */
(function () {
  var PYODIDE_VERSION = "0.26.4";
  var PYODIDE_BASE = "https://cdn.jsdelivr.net/pyodide/v" + PYODIDE_VERSION + "/full/";
  var pyodideReady = null; // a cached promise, so Pyodide loads at most once per page

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.src = src;
      s.onload = resolve;
      s.onerror = function () { reject(new Error("Could not load " + src + " (are you online?)")); };
      document.head.appendChild(s);
    });
  }

  function getPyodide() {
    if (!pyodideReady) {
      pyodideReady = loadScript(PYODIDE_BASE + "pyodide.js").then(function () {
        return window.loadPyodide({ indexURL: PYODIDE_BASE });
      });
    }
    return pyodideReady;
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      try { document.execCommand("copy"); resolve(); } catch (e) { reject(e); }
      document.body.removeChild(ta);
    });
  }

  var MSG = {
    loading: ["Loading Python (first run, a few seconds)…", "載入 Python（首次執行，需幾秒）…"],
    running: ["Running…", "執行中…"],
    done:    ["Done", "完成"],
    error:   ["Error (see output below)", "錯誤（見下方輸出）"],
    copied:  ["Copied", "已複製"]
  };
  function setStatus(el, state) {
    var m = MSG[state] || ["", ""];
    el.innerHTML = '<span class="en">' + m[0] + '</span><span class="zh">' + m[1] + '</span>';
    if (state === "copied" || state === "done") {
      setTimeout(function () { el.innerHTML = ""; }, 2500);
    }
  }

  function wire(sim) {
    var pre = sim.querySelector("pre");
    if (!pre) return;
    var code = pre.querySelector("code") || pre;

    // Make the snippet editable so students can change a value and re-run.
    // The Run button already reads the live text, so edits take effect at once.
    var original = code.innerText;
    code.setAttribute("contenteditable", "true");
    code.setAttribute("spellcheck", "false");
    code.setAttribute("autocapitalize", "off");
    code.setAttribute("autocorrect", "off");
    code.setAttribute("aria-label", "Editable Python code, press Run to execute");
    code.addEventListener("keydown", function (e) {
      // Tab inserts two spaces instead of moving focus out of the editor.
      if (e.key === "Tab") {
        e.preventDefault();
        document.execCommand("insertText", false, "  ");
      }
    });

    var hint = document.createElement("p");
    hint.className = "sim-hint";
    hint.innerHTML = '<span class="en">Tip: edit the values above, then Run. Use Reset to restore the original.</span>'
      + '<span class="zh">提示：可修改上方數值後再執行，按重設可還原。</span>';

    var bar = document.createElement("div");
    bar.className = "sim-actions";

    var runBtn = document.createElement("button");
    runBtn.type = "button";
    runBtn.className = "sim-btn sim-run";
    runBtn.innerHTML = '<span class="en">Run ▶</span><span class="zh">執行 ▶</span>';

    var copyBtn = document.createElement("button");
    copyBtn.type = "button";
    copyBtn.className = "sim-btn";
    copyBtn.innerHTML = '<span class="en">Copy code</span><span class="zh">複製程式碼</span>';

    var resetBtn = document.createElement("button");
    resetBtn.type = "button";
    resetBtn.className = "sim-btn";
    resetBtn.innerHTML = '<span class="en">Reset</span><span class="zh">重設</span>';

    var status = document.createElement("span");
    status.className = "sim-status";

    var out = document.createElement("pre");
    out.className = "sim-output";
    out.hidden = true;

    bar.appendChild(runBtn);
    bar.appendChild(copyBtn);
    bar.appendChild(resetBtn);
    bar.appendChild(status);
    pre.parentNode.insertBefore(hint, pre.nextSibling);
    pre.parentNode.insertBefore(bar, hint.nextSibling);
    pre.parentNode.insertBefore(out, bar.nextSibling);

    copyBtn.addEventListener("click", function () {
      copyText(code.innerText).then(function () { setStatus(status, "copied"); }, function () {});
    });

    resetBtn.addEventListener("click", function () {
      code.textContent = original;
      code.removeAttribute("data-highlighted");
      out.hidden = true;
      out.textContent = "";
      status.innerHTML = "";
      if (window.probHighlightCodeBlocks) window.probHighlightCodeBlocks();
    });

    runBtn.addEventListener("click", function () {
      runBtn.disabled = true;
      out.hidden = false;
      out.textContent = "";
      setStatus(status, "loading");
      var src = code.innerText;
      getPyodide().then(function (py) {
        setStatus(status, "running");
        // Pyodide's batched callback fires once per line with the newline
        // stripped, so add it back to keep multi-line output readable.
        py.setStdout({ batched: function (s) { out.textContent += s + "\n"; } });
        py.setStderr({ batched: function (s) { out.textContent += s + "\n"; } });
        return py.loadPackagesFromImports(src).then(function () {
          return py.runPythonAsync(src);
        }).then(function () { setStatus(status, "done"); });
      }).catch(function (err) {
        out.textContent += "\n" + String(err && err.message ? err.message : err);
        setStatus(status, "error");
      }).then(function () {
        runBtn.disabled = false;
      });
    });
  }

  function init() {
    Array.prototype.forEach.call(document.querySelectorAll(".sim"), wire);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
