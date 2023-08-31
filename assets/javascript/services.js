// ------------------ responssive navbar --------- //

const handleScroll = () => {
  const headerEl = document.querySelector("header");
  if (window.scrollY > 0) {
    headerEl.classList.add("header__box");
  } else {
    headerEl.classList.remove("header__box");
  }
};

window.addEventListener("scroll", handleScroll);

ScrollReveal().reveal(" .card", {
  origin: "left",
  distance: "50px",
  delay: 300,
  duration: 1200,
  reset: true,
  interval: 500,
  cleanup: true,
});

ScrollReveal().reveal(" .card.reverse", {
  origin: "right",
  distance: "50px",
  delay: 300,
  duration: 1200,
  reset: true,
  interval: 500,
  cleanup: true,
});

ScrollReveal().reveal(
  " .header__title , .service__text-header , .service__text-footer",
  {
    origin: "bottom", // Animation origin
    distance: "30px", // Distance from the origin
    duration: 1200, // Animation duration in milliseconds
    delay: 100, // Delay before the animation starts
    interval: 100, // Interval between word animations
    scale: 1, // Scale factor for text
    reset: true, // Resets the animation on leaving the viewport
  }
);

// const showButton = document.querySelector(".show__button");
// const closeButton = document.querySelector(".close__button");
// const navbarItems = document.querySelectorAll("nav li");

// const stepsSection = document.querySelector(".steps__section");

// showButton.addEventListener("click", () => {
//   header.classList.add("active");
// });
// closeButton.addEventListener("click", () => {
//   header.classList.remove("active");
// });

// navbarItems.forEach((item) => {
//   item.addEventListener("click", () => {
//     header.classList.remove("active");
//   });
// });
