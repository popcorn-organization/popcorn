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

// Cards below the first screen rise in as they come into view. Only those
// not on screen yet, so nothing already visible blinks; without this
// script (or with reduced motion) everything simply shows.
(function () {
  if (!("IntersectionObserver" in window)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target;
      el.classList.add("rise");
      requestAnimationFrame(function () { el.classList.remove("pre"); });
      io.unobserve(el);
    });
  }, { rootMargin: "0px 0px -6% 0px" });
  document.querySelectorAll("[data-rise]").forEach(function (el) {
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    el.classList.add("pre");
    io.observe(el);
  });
})();
