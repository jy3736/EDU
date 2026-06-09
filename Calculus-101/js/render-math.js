/* Renders LaTeX math written as \( ... \) (inline) and \[ ... \] (display).
   Loaded with `defer` AFTER katex.min.js and contrib/auto-render.min.js, so
   the global renderMathInElement is guaranteed to be available.

   Only backslash delimiters are enabled (no "$"), so ordinary text containing
   a dollar sign is never mistaken for math. Both the .en and .zh copies of any
   inline math are rendered once here; switching language afterwards is pure CSS
   show/hide and needs no re-render. */
(function () {
  function render() {
    if (typeof window.renderMathInElement !== "function") return;
    window.renderMathInElement(document.body, {
      delimiters: [
        { left: "\\[", right: "\\]", display: true },
        { left: "\\(", right: "\\)", display: false }
      ],
      throwOnError: false
    });
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
