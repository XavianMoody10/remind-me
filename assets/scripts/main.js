"use strict";

function initiateTestimonialSlider(params) {
  document.addEventListener("DOMContentLoaded", function () {
    var splide = new Splide(".splide", {
      drag: false,
    });
    splide.mount();
  });
}

initiateTestimonialSlider();
