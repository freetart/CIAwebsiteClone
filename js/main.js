"use strict";

// add background to nav on scroll
const nav = document.querySelector(".navbar");

function fixedNav() {
  if (window.scrollY > nav.offsetHeight + 1) {
    nav.classList.add("navbarScroll");
  } else {
    nav.classList.remove("navbarScroll");
  }
}

window.addEventListener("scroll", fixedNav);
