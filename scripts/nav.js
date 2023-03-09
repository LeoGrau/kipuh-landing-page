var navbar = document.getElementById("navbar");
var sideNavbar = document.getElementById("side-navbar");

var _closeSideNav = document.getElementById("closeSideNav");
var _openSideNav = document.getElementById("openSideNav");

function changeNavColorOnScroll() {
  pixelsScrolledOnYAxis = window.scrollY;
  if(pixelsScrolledOnYAxis > 1) {
    navbar.classList.remove("not-scrolledY");
    navbar.classList.add("scrolledY");
    sideNavbar.classList.remove("not-scrolledY");
    sideNavbar.classList.add("scrolledY");
  } else {
    navbar.classList.remove("scrolledY");
    navbar.classList.add("not-scrolledY");
    sideNavbar.classList.remove("scrolledY");
    sideNavbar.classList.add("not-scrolledY");
  }
}

function openSideNav() {
  sideNavbar.style.width = "85vw";
}

function closeSideNav() {
  sideNavbar.style.width = "0";
}


function main() {
  window.onscroll = () => { changeNavColorOnScroll(); }
  _closeSideNav.onclick = () => { closeSideNav(); console.log("close it"); }
  _openSideNav.onclick = () => { openSideNav(); console.log("open it"); }
}

main();