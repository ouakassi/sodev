const swiper = new Swiper(".hero__swiper", {
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

  //  scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});

// --------------------------- //

const frButton = document.querySelector(".button__fr");
const engButton = document.querySelector(".button__eng");

const title = document.querySelector(".card .title");

frButton.addEventListener("click", (e) => {
  title.textContent = "french";
});
