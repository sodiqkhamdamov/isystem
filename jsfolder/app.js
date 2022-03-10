const atmena = document.querySelector(".atmena");
const zamena = document.querySelector(".zamena");
atmena.addEventListener("click", () => {
  zamena.classList.remove("active");
  atmena.classList.add("active");
});
zamena.addEventListener("click", () => {
  atmena.classList.remove("active");
  zamena.classList.add("active");
});
