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

// ------------------ to top button --------- //

const toTopElement = document.querySelector(".to__top");

console.log(window.scrollY);
window.addEventListener("scroll", () => {
  window.scrollY > 100
    ? (toTopElement.style.display = "block")
    : (toTopElement.style.display = "none");
});

console.log(window.innerHeight);
