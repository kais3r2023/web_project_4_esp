
/* Validacion de formularios */

const showInputError = (formElement, inputElement, errorMessage) => {
  const btnDisable = formElement.querySelector(".formulary__save-button");
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("formulary__data-error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("formulary__data-error_active");
  btnDisable.classList.add("formulary__save-button_disable");
};

const hideInputError = (formElement, inputElement) => {
  const btnDisable = formElement.querySelector(".formulary__save-button");
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("formulary__data-error");
  errorElement.classList.remove("formulary__data-error_active");
  errorElement.textContent = "";
  btnDisable.classList.remove("formulary__save-button_disable");
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
    formularyProfile.removeEventListener('submit', handlerProfile);
    formularyPlace.removeEventListener('submit', addNewCard);
  } else {
    hideInputError(formElement, inputElement);
    formularyProfile.addEventListener('submit', handlerProfile);
    formularyPlace.addEventListener('submit', addNewCard);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".formulary__data"));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".formulary"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    setEventListeners(formElement);
  });
};

enableValidation();