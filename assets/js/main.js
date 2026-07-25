(function () {
  "use strict";

  // Mobile nav toggle
  var navToggle = document.querySelector(".nav-toggle");
  var mobileNav = document.querySelector(".mobile-nav");

  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mobileNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Contact form: no backend wired up yet. Placeholder client-side handling only.
  var contactForm = document.getElementById("contact-form");
  var formStatus = document.getElementById("form-status");

  if (contactForm && formStatus) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      formStatus.textContent =
        "Thanks — this form isn't wired to an inbox yet. [PLACEHOLDER — connect to real form handler / CRM before launch.]";
      formStatus.setAttribute("role", "status");
      contactForm.reset();
    });
  }
})();
