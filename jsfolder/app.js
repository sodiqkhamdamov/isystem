const atmena = document.querySelector(".atmena");
const zamena = document.querySelector(".zamena");
const links = document.querySelector(".malumot");
const empty = document.querySelector(".empty");
atmena.addEventListener("click", () => {
  zamena.classList.remove("active");
  atmena.classList.add("active");
  empty.classList.remove("hidden");
  links.classList.add("hidden")
});
zamena.addEventListener("click", () => {
  atmena.classList.remove("active");
  zamena.classList.add("active");
  empty.classList.add("hidden");
  links.classList.remove("hidden")
});
