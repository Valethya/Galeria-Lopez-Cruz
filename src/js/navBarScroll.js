let prevScrollPos = window.scrollY;
window.onscroll = function () {
  let currentScrollPos = window.scrollY;
  if (prevScrollPos < 80) {
    document.getElementById("navbar").style.top = "80px";
  } else if (prevScrollPos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
    // Ajusta esto según la altura de tu navbar
  }
  console.log(prevScrollPos, " y ", currentScrollPos);
  prevScrollPos = currentScrollPos;
};
