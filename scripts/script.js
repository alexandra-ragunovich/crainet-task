const burgerButton = document.querySelector(".burger-menu__button");
const burgerMenu = document.querySelector(".header");
const burgerCloseIcons = document.querySelectorAll(".burger-menu__icon");
const burgerLinks = document.querySelectorAll(".burger-menu__item");

burgerButton.addEventListener("click", () => {
  burgerMenu.classList.toggle("burger-menu--open");
  document.body.classList.toggle("menu-open");

  burgerLinks.forEach((link) => {
    link.textContent = link.textContent.toUpperCase();
  });
});
burgerCloseIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    burgerMenu.classList.remove("burger-menu--open");
    document.body.classList.remove("menu-open");
  });
});
async function submitForm() {
  const form = document.getElementById("contactForm");
  const nameInput = form.querySelector("#name");
  const emailInput = form.querySelector("#email");
  const messageInput = form.querySelector("#message");
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";

  let valid = true;

  if (!nameInput.value.trim()) {
    nameError.textContent = "Пожалуйста, введите ваше имя.";
    valid = false;
  }

  if (!emailInput.value.trim()) {
    emailError.textContent = "Пожалуйста, введите вашу почту.";
    valid = false;
  } else if (!/\S+@\S+\.\S+/.test(emailInput.value.trim())) {
    emailError.textContent =
      "Пожалуйста, введите корректный адрес электронной почты.";
    valid = false;
  }

  if (!messageInput.value.trim()) {
    messageError.textContent = "Пожалуйста, введите ваше сообщение.";
    valid = false;
  }

  if (valid) {
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Ошибка сети");
      }

      const data = await response.text();
      console.log("Успешно:", data);
      alert("Форма успешно отправлена!");
      form.reset();
    } catch (error) {
      console.error("Ошибка:", error);
      alert("Произошла ошибка при отправке формы. Попробуйте еще раз.");
    }
  }
}
window.onload = function () {
  const frame = document.querySelector(".frame");
  const bodyHeight = document.body.scrollHeight;
  frame.style.height = bodyHeight + "px";
};
