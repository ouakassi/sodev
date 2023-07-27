import arrLang from "./data.js";

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

// ----------- multi languages funcion ---------------- //

const translateLang = (lang) => {
  // Select all elements with the class "lang"
  const elements = document.querySelectorAll(".lang");

  console.log(elements);

  // Iterate over each element and update its text content with the translated text
  elements.forEach((item) => {
    // console.log(item);
    // Get the translation key from the "key" attribute of the element
    const key = item.getAttribute("key");

    console.log(key);

    console.log(arrLang["en"]["services"]["logicielsCard"]["content"]);

    if (key.includes("-")) {
      // If the key has a dot (.), it represents a nested key for a section's content
      const [sectionKey, nameKey, contentKey] = key.split("-");

      // Update the text content of the element with the translated section content
      item.textContent = arrLang[lang][sectionKey][nameKey][contentKey];
      console.log(item);
    } else {
      // Otherwise, it's a direct translation key for an element
      // Update the text content of the element with the translated text
      item.textContent = arrLang[lang][key];
    }
  });
};

window.addEventListener("DOMContentLoaded", () => {
  // Check if a language is already stored in localStorage
  const storedLang = localStorage.getItem("stored_lang");
  if (storedLang != null && storedLang != undefined) {
    const lang = storedLang;
    // Translate the page to the stored language
    translateLang(lang);
  }

  // Select all elements with the class "translate"
  const translateButtons = document.querySelectorAll(".translate");

  // Attach a click event listener to each translate button
  translateButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Get the language ID from the "id" attribute of the button
      const lang = this.getAttribute("id");

      // Store the selected language to localStorage
      localStorage.setItem("stored_lang", lang);

      // Set HTML lang attribute programmatically
      document.documentElement.setAttribute("lang", lang);

      // Translate the page to the selected language
      translateLang(lang);
    });
  });
});
