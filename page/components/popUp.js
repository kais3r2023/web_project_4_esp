import  PopUpWithForm  from "./popUpWithForm.js";


export default class Popup {
constructor(popupSelector){
  this._popupSelector = popupSelector;
}
open(){
  this._popupSelector.classList.add("pop-up__open");
}

close(){
  this._popupSelector.classList.remove("pop-up__open");
}

_handleEscClose(){
  const self = this;
  document.onkeydown = function (event){
    if (event.key === "Escape"){
      self.close();
    }
  };
}

setEventListeners(){

}
}

const popUpWithForm = new PopUpWithForm();