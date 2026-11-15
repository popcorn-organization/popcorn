// The menu button on small screens: opens and closes the page links.
// Closes again on a second tap, a tap anywhere else, or Escape.
(function () {
  document.querySelectorAll("[data-menu]").forEach(function (btn) {
    var nav = document.getElementById(btn.getAttribute("aria-controls"));
    function set(open) {
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.setAttribute("aria-label", open ? "Close menu" : "Menu");
      nav.classList.toggle("open", open);
    }
    btn.addEventListener("click", function () { set(btn.getAttribute("aria-expanded") !== "true"); });
    document.addEventListener("click", function (e) {
      if (!nav.contains(e.target) && !btn.contains(e.target)) set(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && btn.getAttribute("aria-expanded") === "true") { set(false); btn.focus(); }
    });
  });
})();
