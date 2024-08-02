"use strict";

// Toggle hamburger menu icon based on if the navigation is close or open
function toggleHamburgerMenuAnimation(isOpen) {
  const hamburgerMenuLines = document.querySelectorAll(".hamburger-menu__line");
  const hamburgerMenu = document.querySelector(".hamburger-menu");

  const openAnimationClasses = [
    "top-hamburger-line-open",
    "middle-hamburger-line-open",
    "bottom-hamburger-line-open",
  ];

  const closeAnimationClasses = [
    "top-hamburger-line-close",
    "middle-hamburger-line-close",
    "bottom-hamburger-line-close",
  ];

  if (isOpen === true) {
    hamburgerMenu.classList.add("hamburger-menu-open");

    hamburgerMenu.classList.remove("hamburger-menu-close");

    hamburgerMenuLines.forEach((l, i) =>
      l.classList.add(openAnimationClasses[i])
    );

    hamburgerMenuLines.forEach((l, i) =>
      l.classList.remove(closeAnimationClasses[i])
    );
  }

  if (!isOpen) {
    hamburgerMenu.classList.add("hamburger-menu-close");

    hamburgerMenu.classList.remove("hamburger-menu-open");

    hamburgerMenuLines.forEach((l, i) =>
      l.classList.add(closeAnimationClasses[i])
    );

    hamburgerMenuLines.forEach((l, i) =>
      l.classList.remove(openAnimationClasses[i])
    );
  }
}

// Open and close navigation (mobile)
function toggleNavigationAnimation(isOpen) {
  const navigation = document.querySelector(".navigation");

  if (isOpen) {
    navigation.style.transform = "translate(0)";
    navigation.style.transitionDuration = "0.4s";
  } else {
    navigation.style.transform = "translate(-100%)";
    navigation.style.transitionDuration = "0.4s";
  }
}

function toggleMobileNavigation() {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  let isOpen = false;

  hamburgerMenu.addEventListener("click", () => {
    isOpen = !isOpen;
    toggleHamburgerMenuAnimation(isOpen);
    toggleNavigationAnimation(isOpen);
  });
}

// Add class to header when scrolling down and up
function animateHeader() {
  const header = document.querySelector(".header");

  window.addEventListener("wheel", (e) => {
    if (e.deltaY > 0) {
      header.classList.add("header--up");
      header.classList.remove("header--down");
    } else {
      header.classList.remove("header--up");
      header.classList.add("header--down");
    }
  });
}

// Initiate testimonial slider using SplideJS
function initiateTestimonialSlider() {
  document.addEventListener("DOMContentLoaded", function () {
    var splide = new Splide(".splide", {
      drag: false,
    });
    splide.mount();
  });
}

toggleMobileNavigation();
animateHeader();
initiateTestimonialSlider();
