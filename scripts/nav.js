var navbar = document.getElementById("navbar");

function changeNavColorOnScroll() {
  pixelsScrolledOnYAxis = window.scrollY;
  if(pixelsScrolledOnYAxis > 1) {
    navbar.classList.remove("not-scrolledY");
    navbar.classList.add("scrolledY");
  } else {
    navbar.classList.remove("scrolledY");
    navbar.classList.add("not-scrolledY");
  }
}

function main() {
  window.onscroll = () => { changeNavColorOnScroll(); }
}

main();