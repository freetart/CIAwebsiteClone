"use strict";

// decrease padding on nav on scroll
const nav = document.querySelector(".navbar");

function fixedNav() {
  if (window.scrollY > nav.offsetHeight + 1) {
    nav.classList.add("navbarScroll");
  } else {
    nav.classList.remove("navbarScroll");
  }
}

window.addEventListener("scroll", fixedNav);

// hamburger menu
const menuIcon = document.querySelector(".hamburger-menu");
const menuNavbar = document.querySelector(".menu-navbar");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");

menuIcon.addEventListener("click", () => {
  menuNavbar.classList.toggle("change");
  if (menuNavbar.classList.contains("change")) {
    overlay.classList.remove("hidden");
    body.style.overflowY = "hidden";
  } else {
    overlay.classList.add("hidden");
    body.style.overflowY = "auto";
  }
});

overlay.addEventListener("click", () => {
  menuNavbar.classList.remove("change");
  overlay.classList.add("hidden");
  body.style.overflowY = "auto";
});

// generate random hero
const heroContainer = document.querySelector(".hero-img");

function generateRandomNumber(num) {
  return Math.floor(Math.random(num) * 10 + 1);
}

function generateHero() {
  const img = document.createElement("img");

  img.src = `img/portraits/portrait-${generateRandomNumber()}.png`;
  img.alt = `hero`;

  heroContainer.appendChild(img);
}
generateHero();
