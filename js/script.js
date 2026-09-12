window.addEventListener("load", function () {
  const loader = document.getElementById("page-loader");
  setTimeout(() => loader.classList.add("hide"), 250);

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  $("#stories-carousel, .stories-carousel").owlCarousel({
    items: 2,
    margin: 18,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3500,
    smartSpeed: 600,
    dots: true,
    nav: false,
    responsive: {
      0: { items: 1 },
      650: { items: 2 }
    }
  });

  $(".doctors-carousel").owlCarousel({
    items: 3,
    margin: 22,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 600,
    dots: true,
    nav: false,
    responsive: {
      0: { items: 1 },
      520: { items: 2 },
      800: { items: 3 }
    }
  });

  $(".hospitals-carousel").owlCarousel({
    items: 3,
    margin: 12,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3200,
    smartSpeed: 600,
    dots: true,
    nav: false,
    responsive: {
      0: { items: 1 },
      520: { items: 2 },
      800: { items: 3 }
    }
  });

  const helpForm = document.getElementById("helpForm");
  const formMessage = document.getElementById("formMessage");

  helpForm.addEventListener("submit", function (event) {
    event.preventDefault();
    formMessage.textContent = "Thank you. Your enquiry has been submitted.";
    helpForm.reset();
  });
});
