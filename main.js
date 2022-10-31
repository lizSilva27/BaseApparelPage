let form = document.querySelector(".container__content__form");
let inputEmail = document.querySelector(".container__content__form__email");
let messageError = document.querySelector(
  ".container__content__form__email--error"
);

form.addEventListener("submit", (event) => {
  let regExp =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  if (regExp.test(inputEmail.value) == true) {

    inputEmail.style.border = "1px solid rgb(206, 151, 151)";
    inputEmail.style.backgroundImage = "";
    messageError.innerHTML = "";

  } else {

    event.preventDefault();
    inputEmail.style.border = "1px solid rgb(249, 98, 98)";
    inputEmail.style.backgroundImage = "url(./images/icon-error.svg)";
    messageError.innerHTML = "Please provide a valid email";
    
  }
});
