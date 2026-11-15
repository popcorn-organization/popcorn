// The big picture at the top of the inner pages: one of this week's
// trending films (out to watch at home), its artwork filling the top of
// the page and slowly settling as the page opens. Each page has its own.
(function () {
  var IMG = "https://image.tmdb.org/t/p/";
  var pics = {
    features: { b: "/k0BY5D4Ya6NHhsvNYMmaabpvUtS.jpg", x: "62%", px: "58%" },
    download: { b: "/4tjxYg2AbOzzG9G1YuiT2NzYhlH.jpg", x: "62%", px: "64%" },
    help: { b: "/3k7GzxOdLZkN3eZsuhLi2eRzkXO.jpg", x: "55%", px: "48%" }
  };
  var page = /\/features\//.test(location.pathname) ? "features"
    : /\/download\//.test(location.pathname) ? "download" : "help";
  var p = pics[page];
  document.querySelectorAll(".backdrop").forEach(function (box) {
    var img = document.createElement("img");
    img.className = "pic"; img.alt = ""; img.decoding = "async";
    img.sizes = "100vw";
    img.srcset = IMG + "w780" + p.b + " 780w, " + IMG + "w1280" + p.b + " 1280w, " + IMG + "original" + p.b + " 2400w";
    img.src = IMG + "w1280" + p.b;
    img.style.setProperty("--x", p.x); img.style.setProperty("--px", p.px);
    function on() { requestAnimationFrame(function () { img.classList.add("on"); }); }
    img.addEventListener("load", on, { once: true });
    box.insertBefore(img, box.firstChild);
    if (img.complete) on();
  });
})();
