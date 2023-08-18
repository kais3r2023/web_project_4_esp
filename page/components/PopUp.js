export default class Popup{
  constructor(popupSelector){
    this._popupSelector = popupSelector;
    this.form = popupSelector.querySelector(".formulary");
  }
  open(){
    this._popupSelector.classList.add("pop-up__open")
    
  }

  close(){
    this._popupSelector.classList.remove("pop-up__open")
  }

  _handleEscClose(){
    const self = this;
    document.onkeydown = function (evt) {
      if (evt.key === "Escape"){
    self.close()
  }
  };
}

  setEventListeners(){
    const btnClosePopUpPlace = this._popupSelector.querySelector(".btn-close");
    btnClosePopUpPlace.addEventListener("click", ()=>{
      this.close();
    });
  }
}