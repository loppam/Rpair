var timer;
function preloader() {
  timer = setTimeout(showPage, 000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
}
