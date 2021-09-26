const toggler = document.querySelector(".icon--menu");
const close = document.querySelector(".icon--close");
const navLinks = document.querySelector(".nav-links");

toggler.addEventListener("click", () => {
  navLinks.classList.add("nav-links--active");
});

close.addEventListener("click", () => {
  navLinks.classList.remove("nav-links--active");
});
