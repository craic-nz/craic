/* craic.nz — nav, footer year, home featured grid, library catalogue */
(function () {
  // mobile nav
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () { links.classList.toggle("open"); });
  }
  // current year
  var y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();

  var R = window.CRAIC_RESOURCES || [];
  var CAT = {
    prompt:   { label: "AI prompt", cls: "cat-prompt" },
    template: { label: "Template",  cls: "cat-template" },
    guide:    { label: "Guide",     cls: "cat-guide" },
    link:     { label: "Links",     cls: "cat-link" }
  };

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  function card(r) {
    var c = CAT[r.cat] || { label: r.cat, cls: "" };
    var tags = (r.tags || []).map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("");
    return '<a class="card res-card" href="resource.html?doc=' + encodeURIComponent(r.doc) + '">' +
      '<span class="cat ' + c.cls + '">' + esc(c.label) + "</span>" +
      "<h3>" + esc(r.title) + "</h3>" +
      "<p>" + esc(r.desc) + "</p>" +
      '<div class="tags">' + tags + "</div></a>";
  }

  // home: featured (first of each category)
  var featured = document.querySelector("[data-featured]");
  if (featured) {
    var seen = {}, pick = [];
    R.forEach(function (r) { if (!seen[r.cat]) { seen[r.cat] = 1; pick.push(r); } });
    featured.innerHTML = pick.map(card).join("");
  }

  // library: full catalogue with filter + search
  var grid = document.querySelector("[data-catalogue]");
  if (grid) {
    var search = document.querySelector("[data-search]");
    var chips = Array.prototype.slice.call(document.querySelectorAll(".chip"));
    var state = { cat: "all", q: "" };

    function render() {
      var q = state.q.toLowerCase();
      var out = R.filter(function (r) {
        if (state.cat !== "all" && r.cat !== state.cat) return false;
        if (!q) return true;
        var hay = (r.title + " " + r.desc + " " + (r.tags || []).join(" ")).toLowerCase();
        return hay.indexOf(q) > -1;
      });
      grid.innerHTML = out.length
        ? out.map(card).join("")
        : '<p class="empty">no resources match that filter.</p>';
      var count = document.querySelector("[data-count]");
      if (count) count.textContent = out.length + " resource" + (out.length === 1 ? "" : "s");
    }
    chips.forEach(function (ch) {
      ch.addEventListener("click", function () {
        chips.forEach(function (c) { c.classList.remove("active"); });
        ch.classList.add("active");
        state.cat = ch.getAttribute("data-cat");
        render();
      });
    });
    if (search) search.addEventListener("input", function () { state.q = search.value; render(); });
    render();
  }
})();
