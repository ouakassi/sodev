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

// ------------------ services navbar dropdown --------- //

const dropdownButton = document.querySelector(".services__dropdown-button");
const dropdownButtonIcon = document.getElementById("dropdown__icon");
const dropdownList = document.querySelector(".services__dropdown-list");

dropdownButton.addEventListener("click", () => {
  dropdownList.classList.toggle("show__dropdown-services");
  dropdownButtonIcon.classList.toggle("rotate__dropdown-icon");
});

dropdownButton.addEventListener("blur", () => {
  dropdownList.classList.remove("show__dropdown-services");
  dropdownButtonIcon.classList.remove("rotate__dropdown-icon");
});

// click outside
document.addEventListener("DOMContentLoaded", function () {
  const dropdownButton = document.querySelector(".services__dropdown-button");
  const dropdownList = document.querySelector(".services__dropdown-list");
  document.addEventListener("click", function (event) {
    if (
      !dropdownButton.contains(event.target) &&
      !dropdownList.contains(event.target)
    ) {
      dropdownList.classList.remove("show__dropdown-services");
      dropdownButtonIcon.classList.remove("rotate__dropdown-icon");
    }
  });
});

// ----------- header responsive navbar ---------- //

const showButton = document.querySelector(".show__button");
const closeButton = document.querySelector(".close__button");
const headerEl = document.querySelector("header");
const navbarItems = document.querySelectorAll("nav li");

showButton.addEventListener("click", () => {
  headerEl.classList.add("active");
});
closeButton.addEventListener("click", () => {
  headerEl.classList.remove("active");
});

navbarItems.forEach((item) => {
  item.addEventListener("click", () => {
    headerEl.classList.remove("active");
  });
});
