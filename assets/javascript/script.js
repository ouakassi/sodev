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
// const languagesSelector = document.querySelector(".languages__selector");
// const languagesList = document.querySelector(".languages__list");

// languagesSelector.addEventListener("click", () => {
//   languagesList.classList.toggle("visible");
// });

// languagesSelector.addEventListener("blur", () => {
//   languagesList.classList.remove("visible");
// });
// ------------------ responssive navbar --------- //

const handleScroll = () => {
  if (window.scrollY > 0) {
    header.classList.add("header__box");
  } else {
    header.classList.remove("header__box");
  }
};

window.addEventListener("scroll", handleScroll);

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

//------------------- Loading content ------------------ //

const spinnerContainer = document.querySelector(".spinner__container");
const spinner = document.querySelector(".spinner");

function showLoader() {
  document.getElementById("loader").style.display = "flex";
}
function hideLoader() {
  document.getElementById("loader").style.display = "none";
}

document.addEventListener("load", function (e) {
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
  " header , .show__button ",
  {
    interval: 600,
    cleanup: true,
  }
);
// hero
ScrollReveal().reveal(".hero__text h1,.section__heading , .hero__slider   ", {
  origin: "bottom",
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
ScrollReveal(options).reveal(".card , .card h2 , .card p  ", {
  interval: 300,
  cleanup: true,
});

// steps
ScrollReveal().reveal(".step__card ", {
  interval: 300,
  cleanup: true,
});
ScrollReveal().reveal(".step__number ", {
  interval: 300,
  cleanup: true,
});
ScrollReveal({
  origin: "left",
  distance: "30px",
  delay: 300,
  duration: 800,
}).reveal(".steps__text li ", {
  interval: 300,
  cleanup: true,
});

// contact
ScrollReveal().reveal(".contact__box", {
  interval: 400,
  cleanup: true,
});

// buttons & texts
ScrollReveal({ origin: "bottom", distance: "20px", delay: 200 }).reveal(
  " .show__button",
  {
    cleanup: true,
  }
);

// waves

ScrollReveal(waveOptions).reveal(".steps__wave");
ScrollReveal(waveOptions).reveal(".wave__container");
