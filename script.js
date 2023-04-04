const hamburger = document.querySelector(".hamburger");
const mobile_nav = document.querySelector(".mobile_nav");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  mobile_nav.classList.toggle("is-active");
});
