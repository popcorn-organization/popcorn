// The home page's poster wall, for the inner pages: this week's trending
// posters drifting up and down in tilted lanes behind frosted glass. Fills
// every [data-wall] on the page.
(function () {
  var posters = "/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg,/WGyAyBPncfuu8MZhLY9RtfZPM0.jpg,/bMXWXKM9ydUmMTNvDnYo9QtCBRt.jpg,/7SE0LBwgqiqZzkm9gKVbBAbcNQL.jpg,/kNxRgcTeqeU5jauBackTERoO2De.jpg,/6sYemVUn79UPKz1ZsSG6kPU4RVy.jpg,/gAgWJhUSQWCgtKR8170nMkYlBda.jpg,/tTMmREfhVd51CCg7GN73wL8cIoT.jpg,/bG4h6C6wRKmf3ryz8gdN6imXW4c.jpg,/hSmIJluOJmTWvJs4d7kHRxjc8s8.jpg,/6H2N59jJW1hZEzn2ZdrMvJw5vNI.jpg,/bGB6bEbG4qL22C1SFupkdAxYC9i.jpg,/j1MNyNNgNQL6f27cb3m3uKaPKd6.jpg,/5Xc7WpWsgflfgEMoBlf9TmWhfbH.jpg,/bjiS5ipwxb9JFy3XRRN4OAilSeX.jpg,/1ERGPNiKtnEcsvJS1ywsmqmcIDO.jpg,/lmrulvLbmaejTix1YaMxo1oGhH1.jpg,/o2Oyi3boT100bY5kCP4MBiTeetO.jpg,/vBQ7wks68OhJKlb3RnXSl2yXBXK.jpg,/zn3IXZzGavH3qle3o3g1r32eXDy.jpg,/srlsyEfIBz2MNWBndVc3opOaNGS.jpg,/195kCuy2RqGaEAZDDpGTx7gBUBZ.jpg,/eSS5mvSG84UUuvtbHel5Yu3Wik4.jpg,/snFM00mpNAfUzUtkdEW0uDEvXA0.jpg,/qJPvyo9Pxz3MQndd3tKSocLz1Nt.jpg,/dJPT2Uf12X6aFg8i5N67NTpIZ9t.jpg,/k7n2EVge7G77eMr3brztRGG1fFU.jpg,/bRwnj8WEKBCvmfeUNOukJPwB43K.jpg,/aa1mDCaRtGNEIHVpZrh2xil03Tq.jpg,/ouGH1PS0xjDyfTQOhppn7QzJqQZ.jpg,/9AWkNkZHwNLuM6H5u6dToioHMAI.jpg,/ifYDZkr2qkHFz87TNVvlxajOxl5.jpg,/c8UHaCOfzyQYagHv7vAAOkrmgDb.jpg,/9l1NuFjel2j89hiuiJbsxfblqjy.jpg,/dNJFRtVg3xLQ7dbNIQ55cmmIniD.jpg,/glt0v4I89rMWstDNCaFXc5SNyO1.jpg,/rmaNMA1seHqpjtnYKzyynFAr1g8.jpg,/IECgq0Hd4ezuyGhbQgQawURGKT.jpg,/upwdEyhhYZ7pT2hD535fr2MGfpx.jpg".split(",");
  var narrow = window.matchMedia("(max-width: 640px)").matches;
  var lanes = narrow ? 6 : 9;
  // Shuffled once per visit, so each page doesn't open on the same posters.
  var start = Math.floor(Math.random() * posters.length);
  posters = posters.slice(start).concat(posters.slice(0, start));
  document.querySelectorAll("[data-wall]").forEach(function (wall) {
    for (var l = 0; l < lanes; l++) {
      var lane = document.createElement("div");
      lane.className = "lane";
      var own = [];
      for (var i = l; i < posters.length; i += lanes) own.push(posters[i]);
      // Two identical halves (the drift moves up by one half).
      var half = own.concat(own);
      half.concat(half).forEach(function (p) {
        var img = document.createElement("img");
        img.src = "https://image.tmdb.org/t/p/w342" + p;
        img.alt = "";
        img.decoding = "async";
        lane.appendChild(img);
      });
      wall.appendChild(lane);
    }
  });
})();
