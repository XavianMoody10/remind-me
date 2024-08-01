"use strict";

function toggleMobileNavigation() {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navigation = document.querySelector(".navigation");
  let isOpen = false;

  hamburgerMenu.addEventListener("click", () => {
    isOpen = !isOpen;

    if (isOpen) {
      navigation.style.transform = `translateX(0)`;
      navigation.style.transitionDuration = "0.5s";
    } else {
      navigation.style.transform = `translateX(-100%)`;
      navigation.style.transitionDuration = "0.5s";
    }
  });
}

function initiateTestimonialSlider(params) {
  document.addEventListener("DOMContentLoaded", function () {
    var splide = new Splide(".splide", {
      drag: false,
    });
    splide.mount();
  });
}

toggleMobileNavigation();
initiateTestimonialSlider();
