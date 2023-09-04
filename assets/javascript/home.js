/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// const sections = document.querySelectorAll("section[id]");
// const navLinks = document.querySelectorAll("nav");

// function scrollActive() {
//   const scrollY = window.scrollY;

//   sections.forEach((current) => {
//     const sectionHeight = current.offsetHeight;
//     const sectionTop = current.offsetTop - 180;
//     const sectionId = current.getAttribute("id");
//     const navLink = document.querySelector(`nav a[href*=${sectionId}]`);

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       navLink.classList.add("active__link");
//     } else {
//       navLink.classList.remove("active__link");
//     }
//   });
// }

// window.addEventListener("scroll", scrollActive);

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
  " header",
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
ScrollReveal(options).reveal(".card img , .card h1 , .card p", {
  interval: 300,
  cleanup: true,
});

// ScrollReveal().reveal(".button", {
//   origin: "bottom",
//   distance: "50px",
//   delay: 300,
//   duration: 700,
//   cleanup: true,
// });
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

// ------------------ responssive navbar --------- //

const handleScroll = () => {
  const headerEl = document.querySelector("header");
  const headerLogoEl = document.querySelector(".header__logo img");
  const navbarEl = document.querySelector("nav");
  const listEl = document.querySelector("nav ul");
  const stepsSection = document.querySelector(".steps__section");
  const servicesDropdownListIcons = document.querySelectorAll(
    ".services__dropdown-list a img"
  );
  const servicesDropdownList = document.querySelector(
    ".services__dropdown-list"
  );

  const whiteLogo = "assets/imgs/LOGO-white.png";
  const blackLogo = "assets/imgs/LOGO-black.png";

  const currentScrollY = window.scrollY;

  if (window.scrollY > 0) {
    headerEl.classList.add("header__box");
  } else {
    headerEl.classList.remove("header__box");
  }

  if (
    currentScrollY >= stepsSection.offsetTop + 100 &&
    currentScrollY <= stepsSection.offsetTop + stepsSection.offsetHeight - 80
  ) {
    headerEl.classList.add("header__steps");
    headerLogoEl.src = whiteLogo;
    headerEl.style.background = "#000";
    navbarEl.style.background = "#000";
    listEl.style.background = "#000";
    servicesDropdownListIcons.forEach((icon) => {
      icon.style.filter = "invert(1)";
    });
    servicesDropdownList.style.background = "#000";
    servicesDropdownList.style.color = "#fff";
  } else {
    headerEl.style.background = "var(--container-bg-color)";
    navbarEl.style.background = "var(--container-bg-color)";
    listEl.style.background = "var(--container-bg-color)";

    servicesDropdownListIcons.forEach((icon) => {
      icon.style.filter = "unset";
    });
    servicesDropdownList.style.background = "var(--container-bg-color)";
    servicesDropdownList.style.color = "#000";

    headerEl.classList.remove("header__steps");
    headerLogoEl.src = blackLogo;
  }
};

window.addEventListener("scroll", handleScroll);
