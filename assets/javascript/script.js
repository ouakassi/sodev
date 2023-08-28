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

// ------------------ languages --------- //
const languagesSelector = document.querySelector(".languages__selector");
const languagesList = document.querySelector(".languages__list");

languagesSelector.addEventListener("click", () => {
  languagesList.classList.toggle("show__dropdown");
});

languagesSelector.addEventListener("blur", () => {
  languagesList.classList.remove("show__dropdown");
});

document.addEventListener("DOMContentLoaded", function () {
  const selector = document.querySelector(".languages__selector");
  const list = document.querySelector(".languages__list");

  document.addEventListener("click", function (event) {
    if (!selector.contains(event.target) && !list.contains(event.target)) {
      list.classList.remove("show__dropdown");
    }
  });
});
// ------------------ responssive navbar --------- //

// let prevScrollY = 0;

const handleScroll = () => {
  const headerLogoEl = document.querySelector(".header__logo img");
  const navbarEl = document.querySelector("nav");
  const listEl = document.querySelector("nav ul");

  const whiteLogo = "assets/imgs/LOGO-white.png";
  const blackLogo = "assets/imgs/LOGO-black.png";

  const currentScrollY = window.scrollY;

  if (window.scrollY > 0) {
    header.classList.add("header__box");
  } else {
    header.classList.remove("header__box");
  }

  if (
    currentScrollY >= stepsSection.offsetTop + 100 &&
    currentScrollY <= stepsSection.offsetTop + stepsSection.offsetHeight - 80
  ) {
    header.classList.add("header__steps");
    headerLogoEl.src = whiteLogo;
    header.style.background = "#000";
    navbarEl.style.background = "#000";
    listEl.style.background = "#000";
  } else {
    header.style.background = "var(--container-bg-color)";
    navbarEl.style.background = "var(--container-bg-color)";
    listEl.style.background = "var(--container-bg-color)";

    header.classList.remove("header__steps");
    headerLogoEl.src = blackLogo;
  }

  // prevScrollY > currentScrollY
  //   ? (header.style.height = "calc(var(--header-height) + 1rem)")
  //   : (header.style.height = "auto");
  // window.innerWidth > 769 && (prevScrollY = currentScrollY + 1000);
  // prevScrollY = currentScrollY;
};

window.addEventListener("scroll", handleScroll);

const showButton = document.querySelector(".show__button");
const closeButton = document.querySelector(".close__button");
const header = document.querySelector("header");
const navbarItems = document.querySelectorAll("nav li");

const stepsSection = document.querySelector(".steps__section");

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

//------------------- Loading content ------------------ //

const spinnerContainer = document.querySelector(".spinner__container");
const spinner = document.querySelector(".spinner");

function showLoader() {
  document.getElementById("loader").style.display = "flex";
}
function hideLoader() {
  document.getElementById("loader").style.display = "none";
}

document.addEventListener("load", () => {
  showLoader();
});

window.addEventListener("load", () => {
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

// ------------------ date year --------- //
const dateEl = document.querySelector(".copyrights__date");
const date = new Date().getUTCFullYear();

dateEl.textContent = date;

// ------------------ animations  --------- //
// options
const options = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
  delay: 200,
  // viewFactor: 0.5,
  // viewOffset: {
  //   top: -10,
  // },
};

const waveOptions = {
  origin: "bottom",
  distance: "50px",
  delay: 300,
  duration: 1000,
  opacity: 1,
  reset: true,
};

// navbar
ScrollReveal({ origin: "top", distance: "100px", delay: 200 }).reveal(
  " header ",
  {
    interval: 600,
    cleanup: true,
  }
);
// hero
ScrollReveal().reveal(".hero__text h1,.section__heading , .hero__slider", {
  origin: "top",
  distance: "50px",
  duration: 1000,
  delay: 200,
  viewFactor: 0.5,
  // reset: true,
  interval: 600,
  cleanup: true,
});

ScrollReveal({
  origin: "left",
  distance: "20px",
  delay: 300,
  duration: 800,
}).reveal(".objectif , .logo__container ", {
  interval: 300,
  cleanup: true,
});

// services
ScrollReveal(options).reveal(" .card img , .card h1 , .card p  ", {
  interval: 300,
  cleanup: true,
});

// steps
ScrollReveal().reveal(".step__card ", {
  interval: 300,
  cleanup: true,
});
ScrollReveal().reveal(".step__number , .step__card h3 , .step__img", {
  interval: 300,
  cleanup: true,
});

ScrollReveal({
  origin: "left",
  distance: "30px",
  delay: 300,
  duration: 800,
}).reveal(".step__text li", {
  interval: 300,
  cleanup: true,
});

ScrollReveal({
  origin: "top",
  // opacity: 1,
  distance: "50px",
  viewFactor: 0.1,
}).reveal(".arrow", {
  cleanup: true,
});

// contact
ScrollReveal().reveal(".contact__box", {
  interval: 400,
  cleanup: true,
});

// buttons & texts

// waves

ScrollReveal(waveOptions).reveal(".steps__wave", { cleanup: true });
ScrollReveal(waveOptions).reveal(".wave__container", { cleanup: true });

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
