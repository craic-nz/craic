/* craic.nz — markdown resource viewer.
   Loads ?doc=<path> (validated against the manifest), renders with marked. */
(function () {
  var GH = "https://github.com/craic-nz/craic/blob/main/";
  var RAW = "https://raw.githubusercontent.com/craic-nz/craic/main/";
  var R = window.CRAIC_RESOURCES || [];

  var params = new URLSearchParams(location.search);
  var doc = params.get("doc") || "";
  var meta = R.filter(function (r) { return r.doc === doc; })[0];

  var titleEl = document.querySelector("[data-doc-title]");
  var bodyEl = document.querySelector("[data-doc-body]");
  var actionsEl = document.querySelector("[data-doc-actions]");

  function fail(msg) {
    if (titleEl) titleEl.textContent = "Resource not found";
    if (bodyEl) bodyEl.innerHTML = '<p class="empty">' + msg +
      ' <a href="library.html">Back to the library</a>.</p>';
  }

  // only load docs that exist in the manifest (no arbitrary fetch)
  if (!meta) { fail("That resource is not in the library."); return; }

  document.title = meta.title + " — craic.nz";
  if (titleEl) titleEl.textContent = meta.title;
  if (actionsEl) {
    actionsEl.innerHTML =
      '<button data-copy>Copy contents</button>' +
      '<a href="' + RAW + doc + '" download>Download (.md)</a>' +
      '<a href="' + GH + doc + '" target="_blank" rel="noopener">View on GitHub</a>' +
      '<a href="library.html">All resources</a>';
  }

  fetch(doc, { cache: "no-cache" })
    .then(function (res) { if (!res.ok) throw new Error(res.status); return res.text(); })
    .then(function (md) {
      if (window.marked) {
        marked.setOptions({ gfm: true, breaks: false });
        bodyEl.innerHTML = marked.parse(md);
      } else {
        bodyEl.textContent = md;
      }
      var copy = document.querySelector("[data-copy]");
      if (copy) copy.addEventListener("click", function () {
        navigator.clipboard.writeText(md).then(function () {
          copy.textContent = "Copied"; setTimeout(function () { copy.textContent = "Copy contents"; }, 1600);
        });
      });
    })
    .catch(function () { fail("This resource could not be loaded."); });
})();
