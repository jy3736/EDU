/* Shared UI toggles for the calculus problem set:
   - theme:  light / dark   (persisted in localStorage as "calc-theme")
   - language: en / zh       (persisted in localStorage as "calc-lang")

   The initial state is applied by a tiny inline script in each page's <head>
   (to avoid a flash); this file only wires up the buttons and keeps their
   labels in sync. */
(function () {
  var root = document.documentElement;

  function labelTheme() {
    var dark = root.getAttribute("data-theme") === "dark";
    // Button shows the mode it will switch TO.
    return dark ? "☀️ Light" : "\u{1F319} Dark";
  }
  function labelLang() {
    var zh = root.getAttribute("data-lang") === "zh";
    // Button shows the language it will switch TO.
    return zh ? "EN" : "中文";
  }

  function init() {
    var themeBtn = document.getElementById("theme-toggle");
    var langBtn = document.getElementById("lang-toggle");

    if (themeBtn) {
      themeBtn.textContent = labelTheme();
      themeBtn.addEventListener("click", function () {
        var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", next);
        try { localStorage.setItem("calc-theme", next); } catch (e) {}
        themeBtn.textContent = labelTheme();
      });
    }

    if (langBtn) {
      langBtn.textContent = labelLang();
      langBtn.addEventListener("click", function () {
        var next = root.getAttribute("data-lang") === "zh" ? "en" : "zh";
        root.setAttribute("data-lang", next);
        try { localStorage.setItem("calc-lang", next); } catch (e) {}
        langBtn.textContent = labelLang();
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
