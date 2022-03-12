const ruyxat = document.querySelector(".ruyxat");
const card = document.querySelector(".card");
const natija = () => {
  card.innerHTML = `<h6>Tizimga kirish</h6>
  <form>
      <label for="phoneNumber"></label>
      <input required class="inp" id="phoneNumber" type="number" required placeholder="+998 99 123 45 46">
      <label for="parol"></label>
      <input required class="inp" id="parol" type="password" required placeholder="Parol">
      <label for="parol2"></label>
      <input required class="inp" id="parol2" type="password" required placeholder="Parol tasdig’i">
      <label for="name"></label>
      <input required class="inp" id="name" type="text" required placeholder="Ismingiz">
      <label for="surname"></label>
      <input required class="inp" id="surname" type="text" required placeholder="Familiyangiz">
      <div class="form-check">
      <input required class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
      <label class="form-check-label" for="flexCheckIndeterminate">
      Saytdan foydalanish <span class="cheks">shartiga</span> roziman
      </label>
    </div>
      <button class="customBtn sends">
          <p>Ro'yxatdan o'tish</p> <span>&#8594;</span>
      </button>
  </form>
  <a class="error" href="#">Parolingizni unutdingizmi?</a>
  <p class="new">Yangi foydalanuvchimisiz?</p>
  <a class="ruyxat" href="#">Ro'yxatdan o'tish</a>`;
};
ruyxat.addEventListener("click", natija);
