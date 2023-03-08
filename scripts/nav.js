var navbar = document.getElementById("navbar");

function changeNavColorOnScroll() {
  navbarHeight = navbar.clientHeight;
  pixelsScrolledOnYAxis = window.scrollY;
  if(pixelsScrolledOnYAxis > navbarHeight) {
    navbar.classList.remove("not-scrolledY");
    navbar.classList.add("scrolledY");
    console.log(navbar.clientHeight)
    console.log(navbar.classList)
  } else {
    navbar.classList.remove("scrolledY");
    navbar.classList.add("not-scrolledY");
  }
}

function main() {
  window.onscroll = () => { changeNavColorOnScroll(); }
}

main();