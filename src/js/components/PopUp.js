
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


_handleClickOut(){
  this._popupSelector.addEventListener("click", (evt) => {
    if (evt.target.id === this._popupSelector.id){
      this.close();
    }
  })
}

  setEventListeners(){
    const btnClosePopUp = this._popupSelector.querySelector(".btn-close");
    btnClosePopUp.addEventListener("click", ()=>{
      this.close();
    });
    this._handleClickOut();
  }
}