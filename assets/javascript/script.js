new Swiper(".hero__swiper", {
  //  parameters
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 1500,
  },
  effect: "coverflow",
  //  pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".hero__swiper-button-next",
    prevEl: ".hero__swiper-button-prev",
  },
});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// ------------------ to top button --------- //

let toTopElement = document.querySelector(".to__top");

window.addEventListener("scroll", () => {
  window.scrollY > 100
    ? (toTopElement.style.display = "block")
    : (toTopElement.style.display = "none");
});

// ------------------ responssive navbar --------- //

const showButton = document.querySelector(".show__button");
const closeButton = document.querySelector(".close__button");
const header = document.querySelector("header");
const navbarItems = document.querySelectorAll("nav li");

showButton.addEventListener("click", () => {
  header.classList.add("active");
});
closeButton.addEventListener("click", () => {
  header.classList.remove("active");
});

navbarItems.forEach((item) => {
  item.addEventListener("click", () => {
    header.classList.remove("active");
  });
});

// ------------------ loader --------- //

//------------------- Loading content ------------------ //

const spinnerContainer = document.querySelector(".spinner__container");
const spinner = document.querySelector(".spinner");

function showLoader() {
  document.getElementById("loader").style.display = "flex";
}
function hideLoader() {
  document.getElementById("loader").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function (e) {
  showLoader();
});

window.addEventListener("load", function (e) {
  hideLoader();
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 180;
    const sectionId = current.getAttribute("id");
    const navLink = document.querySelector(`nav a[href*=${sectionId}]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink.classList.add("active__link");
    } else {
      navLink.classList.remove("active__link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

// ------------------ animations  --------- //

ScrollReveal({
  origin: "bottom",
  distance: "50px",
  duration: 1000,
  delay: 200,
  viewFactor: 0.5,
  viewOffset: {
    top: -10,
  },
}).reveal(
  ".card , .step__card , .section__heading , .contact__box , .objectif , .hero__text h1  ",
  {
    // interval: 600,
    cleanup: true,
  }
);

ScrollReveal({ origin: "top", distance: "100px", delay: 200 }).reveal(
  ".card p , header  ",
  {
    interval: 600,
    cleanup: true,
  }
);

ScrollReveal().reveal(".button");

ScrollReveal({ origin: "top", distance: "20px", delay: 200 }).reveal(
  " .show__button ",
  {
    cleanup: true,
  }
);

ScrollReveal({
  origin: "bottom",
  distance: "70px",
  delay: 300,
  duration: 1000,
  opacity: 1,
  viewFactor: 0.8,
}).reveal(".steps__wave , .wave__container , .step__number", {
  interval: 600,
  cleanup: true,
});

// Transformation Numérique.
// Développement des Logiciels sur Mesure.
// Développement d'applications Mobiles.
// Conseil en gestion des projets.
// E-COMMERCE
// DIGITALISATION des entreprise
// CONSEIL DIGITAL
// CONCEPTION GRAPHIQUE
// INTELLIGENCE ARTIFICIELLE
// SOFTWARE DÉVELOPPEMENT
