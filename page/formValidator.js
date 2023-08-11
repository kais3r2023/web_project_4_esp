class FormValidator {
  constructor(id) {
    this.element = document.getElementById(id);
  }

  /*Metodo Público*/
enableValidation(){
  this.element.addEventListener("submit", function (event) {
    event.preventDefault()
})
  this._setEventListeners();
}


  /* Metodos Privados */

  _setEventListeners(){
    const self = this;
    const inputList = Array.from(this.element.querySelectorAll(".formulary__data"));
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        self._checkInputValidity(inputElement);
      });
    });
  }

_checkInputValidity (inputElement) {
  const errorElement = this.element.querySelector(`.${inputElement.id}-error`);

  if (inputElement.validity.valid) {
    inputElement.classList.remove("formulary__data-error");
    errorElement.classList.remove("formulary__data-error_active");
    errorElement.textContent = "";
  } else {
    inputElement.classList.add("formulary__data-error");
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add("formulary__data-error_active");
  }

  //Validando los inputs
  const inputList = Array.from(this.element.querySelectorAll('.formulary__data'));
  let formIsValid = true;
  for (let i = 0; i < inputList.length; i++) {
    const input = inputList[i];
    if (!input.validity.valid) {
      formIsValid = false;
      break;
    }
  }
  const buttonForm = this.element.querySelector(".formulary__save-button");
  buttonForm.disabled = !formIsValid;
};

}

export{FormValidator};