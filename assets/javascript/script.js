new Swiper(".hero__swiper", {
  //  parameters
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 3000,
  },
  effect: "cards",
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

// ------------------ animations  --------- //

// const servicesCard = document.querySelector(".card");

// gsap.from(servicesCard, { opacity: 0, y: -300, duration: 1, scale: 1.1 });

// gsap.to(servicesCard, { opacity: 1, y: 0, scale: 1 });
