/* Shared UI toggles for the calculus problem set:
   - theme:  light / dark   (persisted in localStorage as "calc-theme")
   - language: en / zh       (persisted in localStorage as "calc-lang")
   - page scale: +/- zoom    (persisted in localStorage as "calc-scale")
   - full-screen view        (intent persisted in localStorage as "calc-fs")

   The initial theme / language state is applied by a tiny inline script in
   each page's <head> (to avoid a flash); this file wires up the buttons,
   keeps their labels in sync, and injects the zoom / full-screen controls so
   every page that loads ui.js gets them without editing its toolbar markup. */
(function () {
  var root = document.documentElement;

  /* ---- theme / language labels ---- */
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

  /* ---- page scale (zoom) ---- */
  var SCALE_MIN = 0.6, SCALE_MAX = 2.0, SCALE_STEP = 0.1;
  var scale = 1;
  var zoomLabelEl = null, zoomSliderEl = null;

  function readScale() {
    var v;
    try { v = parseFloat(localStorage.getItem("calc-scale")); } catch (e) {}
    return (v && v >= SCALE_MIN && v <= SCALE_MAX) ? v : 1;
  }
  function applyScale() {
    // Scale only the content area, not the header bar, so the controls stay a
    // constant size while the reading area zooms. `zoom` scales everything
    // inside it (text, KaTeX equations, SVG figures) together, unlike a
    // font-size change which would leave the px-sized figures behind.
    var content = document.querySelector("main.container") || document.body;
    content.style.zoom = scale;
    var pct = Math.round(scale * 100);
    if (zoomLabelEl) zoomLabelEl.textContent = pct + "%";
    if (zoomSliderEl && Number(zoomSliderEl.value) !== pct) zoomSliderEl.value = String(pct);
  }
  function setScale(next) {
    scale = Math.min(SCALE_MAX, Math.max(SCALE_MIN, Math.round(next * 10) / 10));
    try { localStorage.setItem("calc-scale", String(scale)); } catch (e) {}
    applyScale();
  }

  /* ---- full-screen ----
     The Fullscreen API always drops out on a page navigation, and a freshly
     loaded page may not re-enter full-screen on its own (it needs a user
     gesture). So we persist the user's *intent* ("calc-fs") and, on the next
     page, restore full-screen on the first click / key press. `navigating`
     guards the exit that navigation itself triggers, so we don't mistake it
     for the user deliberately leaving full-screen (Esc / the Exit button). */
  var FS_KEY = "calc-fs";
  var navigating = false;

  function isFullscreen() {
    return !!(document.fullscreenElement || document.webkitFullscreenElement);
  }
  function rawRequestFs(el) {
    if (el.requestFullscreen) return el.requestFullscreen();
    if (el.webkitRequestFullscreen) return el.webkitRequestFullscreen();
  }
  function rawExitFs() {
    if (document.exitFullscreen) return document.exitFullscreen();
    if (document.webkitExitFullscreen) return document.webkitExitFullscreen();
  }
  function fsWanted() {
    try { return localStorage.getItem(FS_KEY) === "1"; } catch (e) { return false; }
  }
  function setFsWanted(on) {
    try { if (on) localStorage.setItem(FS_KEY, "1"); else localStorage.removeItem(FS_KEY); } catch (e) {}
  }
  function enterFs() {
    setFsWanted(true);
    var p = rawRequestFs(root);
    if (p && p.catch) p.catch(function () {}); // ignore "needs a gesture" rejections
  }
  function leaveFs() {
    setFsWanted(false);
    rawExitFs();
  }
  function toggleFs() {
    if (isFullscreen()) leaveFs(); else enterFs();
  }
  function labelFs() {
    return isFullscreen() ? "⛶ Exit" : "⛶ Full";
  }

  /* Build a toolbar button that matches the existing ones. */
  function makeButton(id, text, aria) {
    var b = document.createElement("button");
    b.type = "button";
    b.id = id;
    b.textContent = text;
    b.setAttribute("aria-label", aria);
    return b;
  }
  /* Build a small decorative text element (e.g. the A / A markers). */
  function makeText(tag, cls, text) {
    var el = document.createElement(tag);
    el.className = cls;
    el.textContent = text;
    el.setAttribute("aria-hidden", "true");
    return el;
  }

  /* ---- table-of-contents sidebar ----
     Lists this page's h2 / h3 headings as jump links in a slide-in drawer,
     opened by a chevron handle on the sidebar's edge. Only built when the page
     has at least two headings worth navigating. */
  var tocEdgeEl = null;
  function updateTocEdge() {
    if (tocEdgeEl) tocEdgeEl.textContent = root.classList.contains("toc-open") ? "«" : "»"; // « / »
  }
  function openToc() { root.classList.add("toc-open"); updateTocEdge(); }
  function closeToc() { root.classList.remove("toc-open"); updateTocEdge(); }

  function slugify(s) {
    return (s || "").toLowerCase()
      .replace(/[^\w一-鿿]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 48) || "sec";
  }
  function headerHeight(topbar) {
    return topbar ? topbar.getBoundingClientRect().height : 0;
  }
  function setHeaderHeightVar(topbar) {
    root.style.setProperty("--header-h", Math.round(headerHeight(topbar)) + "px");
  }
  function scrollToHeading(h, topbar) {
    // getBoundingClientRect already reflects the content `zoom`, so this lands
    // correctly at any zoom level; the offset clears the sticky header.
    var y = window.scrollY + h.getBoundingClientRect().top - headerHeight(topbar) - 12;
    window.scrollTo({ top: y < 0 ? 0 : y, behavior: "smooth" });
  }

  function buildToc(controls, topbar) {
    var content = document.querySelector("main.container");
    if (!content) return;
    var heads = content.querySelectorAll("h2, h3");
    if (heads.length < 2) return;

    var nav = document.createElement("nav");
    nav.className = "toc";
    nav.setAttribute("aria-label", "Page contents");
    var title = document.createElement("p");
    title.className = "toc-title";
    title.innerHTML = '<span class="en">On this page</span><span class="zh">本頁目錄</span>';
    nav.appendChild(title);
    var ul = document.createElement("ul");

    var links = [];
    var used = {};
    Array.prototype.forEach.call(heads, function (h) {
      if (!h.id) {
        var en = h.querySelector(".en");
        var base = slugify(en ? en.textContent : h.textContent), id = base, n = 2;
        while (used[id] || document.getElementById(id)) { id = base + "-" + (n++); }
        h.id = id;
      }
      used[h.id] = true;
      var a = document.createElement("a");
      a.href = "#" + h.id;
      a.className = h.tagName === "H3" ? "lvl-3" : "lvl-2";
      a.innerHTML = h.innerHTML;          // carries the .en / .zh spans
      a.addEventListener("click", function (e) {
        e.preventDefault();
        scrollToHeading(h, topbar);
        // Stay open: the sidebar is dismissed only via the Contents button.
        try { history.replaceState(null, "", "#" + h.id); } catch (err) {}
      });
      var li = document.createElement("li");
      li.appendChild(a);
      ul.appendChild(li);
      links.push({ a: a, h: h });
    });
    nav.appendChild(ul);

    document.body.appendChild(nav);

    // Chevron handle on the sidebar edge: » to show the catalog, « to hide it.
    // It rides the sidebar's right edge (left: 0 when closed, left: --toc-w when
    // open) so the arrow always points the way the panel will move.
    tocEdgeEl = document.createElement("button");
    tocEdgeEl.type = "button";
    tocEdgeEl.id = "toc-edge";
    tocEdgeEl.setAttribute("aria-label", "Show or hide page contents");
    tocEdgeEl.addEventListener("click", function () {
      if (root.classList.contains("toc-open")) closeToc(); else openToc();
    });
    document.body.appendChild(tocEdgeEl);
    updateTocEdge();

    /* highlight the section currently scrolled to */
    var ticking = false;
    function updateActive() {
      ticking = false;
      var off = headerHeight(topbar) + 14, cur = null;
      for (var i = 0; i < links.length; i++) {
        if (links[i].h.getBoundingClientRect().top - off <= 0) cur = links[i];
        else break;
      }
      links.forEach(function (l) { l.a.classList.toggle("active", l === cur); });
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(updateActive); }
    }, { passive: true });
    updateActive();

    setHeaderHeightVar(topbar);
    window.addEventListener("resize", function () { setHeaderHeightVar(topbar); });
  }

  function init() {
    var themeBtn = document.getElementById("theme-toggle");
    var langBtn = document.getElementById("lang-toggle");
    var toolbar = (themeBtn || langBtn || {}).parentNode ||
      document.querySelector(".toolbar");

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

    if (!toolbar) return;

    /* ---- relocate every control into the blue header bar ---- */
    var topbar = document.querySelector("header.topbar") || toolbar;
    var controls = document.createElement("div");
    controls.className = "topbar-controls";

    // Group brand + sub into one block so the controls can sit to its right.
    var brand = topbar.querySelector(".brand");
    var sub = topbar.querySelector(".sub");
    if (brand || sub) {
      var textWrap = document.createElement("div");
      textWrap.className = "topbar-text";
      if (brand) textWrap.appendChild(brand);
      if (sub) textWrap.appendChild(sub);
      topbar.insertBefore(textWrap, topbar.firstChild);
    }

    scale = readScale();

    // theme / language: move the existing buttons (their listeners ride along).
    if (themeBtn) controls.appendChild(themeBtn);
    if (langBtn) controls.appendChild(langBtn);

    /* ---- zoom: a slider instead of +/- buttons ---- */
    var zoomGroup = document.createElement("span");
    zoomGroup.className = "zoom-group";

    var endLow = makeText("span", "zoom-end", "A");        // small "A"
    var endHigh = makeText("span", "zoom-end zoom-end-lg", "A"); // large "A"

    zoomSliderEl = document.createElement("input");
    zoomSliderEl.type = "range";
    zoomSliderEl.id = "zoom-slider";
    zoomSliderEl.min = String(Math.round(SCALE_MIN * 100));
    zoomSliderEl.max = String(Math.round(SCALE_MAX * 100));
    zoomSliderEl.step = String(Math.round(SCALE_STEP * 100));
    zoomSliderEl.value = String(Math.round(scale * 100));
    zoomSliderEl.setAttribute("aria-label", "Page size");
    zoomSliderEl.addEventListener("input", function () { setScale(Number(zoomSliderEl.value) / 100); });

    var resetBtn = makeButton("zoom-reset", "100%", "Reset page size to 100%");
    resetBtn.addEventListener("click", function () { setScale(1); });
    zoomLabelEl = resetBtn;

    zoomGroup.appendChild(endLow);
    zoomGroup.appendChild(zoomSliderEl);
    zoomGroup.appendChild(endHigh);
    zoomGroup.appendChild(resetBtn);
    controls.appendChild(zoomGroup);

    /* ---- full-screen ---- */
    var fsBtn = makeButton("fullscreen-toggle", labelFs(), "Toggle full-screen view");
    fsBtn.addEventListener("click", toggleFs);
    controls.appendChild(fsBtn);

    function onFsChange() {
      fsBtn.textContent = labelFs();
      // A non-navigation exit means the user left deliberately (Esc / Exit),
      // so forget the intent; a navigation exit is guarded and keeps it.
      if (!isFullscreen() && !navigating) setFsWanted(false);
    }
    document.addEventListener("fullscreenchange", onFsChange);
    document.addEventListener("webkitfullscreenchange", onFsChange);
    window.addEventListener("beforeunload", function () { navigating = true; });
    window.addEventListener("pagehide", function () { navigating = true; });

    topbar.appendChild(controls);
    applyScale();
    buildToc(controls, topbar);

    /* ---- restore full-screen carried over from the previous page ---- */
    if (fsWanted() && !isFullscreen()) {
      var restore = function () {
        document.removeEventListener("pointerdown", restore, true);
        document.removeEventListener("keydown", restore, true);
        if (fsWanted() && !isFullscreen()) enterFs();
      };
      // Capture phase so the very first interaction (even on a button or link)
      // re-enters full-screen within that user gesture.
      document.addEventListener("pointerdown", restore, true);
      document.addEventListener("keydown", restore, true);
    }

    /* ---- keyboard shortcuts (ignored while typing in a field) ---- */
    document.addEventListener("keydown", function (e) {
      if (e.ctrlKey || e.metaKey || e.altKey) return; // leave native browser zoom alone
      var t = e.target;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
      if (e.key === "+" || e.key === "=") { setScale(scale + SCALE_STEP); e.preventDefault(); }
      else if (e.key === "-" || e.key === "_") { setScale(scale - SCALE_STEP); e.preventDefault(); }
      else if (e.key === "0") { setScale(1); e.preventDefault(); }
      else if (e.key === "f" || e.key === "F") { toggleFs(); e.preventDefault(); }
      else if (e.key === "Escape") { closeToc(); }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
