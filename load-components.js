fetch("navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("nav-container").innerHTML = data;

    var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'));
    collapseElementList.map(function (collapseEl) {
      return new bootstrap.Collapse(collapseEl, { toggle: false });
    });
  });

fetch("music.html")
  .then(res => res.text())
  .then(data => document.getElementById("music-container").innerHTML = data);

fetch("footer.html")
  .then(res => res.text())
  .then(data => document.getElementById("footer-container").innerHTML = data);
