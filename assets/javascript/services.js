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

  interval: 500,
  cleanup: true,
});

ScrollReveal().reveal(".card.reverse", {
  origin: "right",
  distance: "50px",
  delay: 300,
  duration: 1200,
  interval: 500,
  cleanup: true,
});

ScrollReveal().reveal(".service__text-header , .service__text-footer", {
  origin: "bottom",
  distance: "30px",
  duration: 1200,
  delay: 300,
  interval: 500,
  scale: 1,
});

// Wrap every letter in a span
var textWrapper = document.querySelector(".ml3");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime.timeline().add({
  targets: ".ml3 .letter",
  opacity: [0, 1],
  easing: "easeInOutQuad",
  duration: 50,
  delay: (el, i) => 80 * i,
});
