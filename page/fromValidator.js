class FormValidator {
  constructor(id) {
    this.element = document.getElementById(id);
  }

  /* Metodos Privados */
_checkInputValidity (inputElement) {
  const errorElement = this.element.querySelector(`.${inputElement.id}-error`);

  if (inputElement.validity.valid) {
    inputElement.classList.remove("formulary__data-error");
    errorElement.classList.remove("formulary__data-error_active");
    errorElement.textContent = "";
    btnSave.classList.remove("formulary__save-button_disable");
  } else {
    inputElement.classList.add("formulary__data-error");
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add("formulary__data-error_active");
    btnSave.classList.add("formulary__save-button_disable");
  }
};

_setEventListeners () {
  const inputList = Array.from(this.element.querySelectorAll(".formulary__data"));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      this._checkInputValidity(inputElement);
    });
  });
};

/*Metodo Público*/
enableValidation(){
  this.element.addEventListener("submit", function (evt) {
    evt.preventDefault();
  })

this._setEventListeners();
}
};

export {FormValidator};


/* Validacion de formularios */

/* const showInputError = (this.element, inputElement, errorMessage) => {
  inputElement.classList.add("formulary__data-error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("formulary__data-error_active");
  btnSave.classList.add("formulary__save-button_disable");
};

const hideInputError = (this.element, inputElement) => {
  
  const errorElement = this.element.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("formulary__data-error");
  errorElement.classList.remove("formulary__data-error_active");
  errorElement.textContent = "";
  btnSave.classList.remove("formulary__save-button_disable");
};

const checkInputValidity = (this.element, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(this.element, inputElement, inputElement.validationMessage);
    formularyProfile.removeEventListener('submit', handlerProfile);
    formularyPlace.removeEventListener('submit', addNewCard);
  } else {
    hideInputError(this.element, inputElement);
    formularyProfile.addEventListener('submit', handlerProfile);
    formularyPlace.addEventListener('submit', addNewCard);
  }
};

const setEventListeners = (this.element) => {
  const inputList = Array.from(this.element.querySelectorAll(".formulary__data"));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(this.element, inputElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".formulary"));
  formList.forEach((this.element) => {
    this.element.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    setEventListeners(this.element);
  });
};

enableValidation(); */