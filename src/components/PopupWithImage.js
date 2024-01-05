import Popup from "./PopUp.js";
import { templateZoom } from "./Constants.js";

export default class PopupWithImage extends Popup{
  constructor(popupSelector){
      super(popupSelector);
      this._popupSelector = popupSelector;
      this._btnClose = this._popupSelector.querySelector(".btn-close");
    }

  open(imgSelector, titleSelector, imgLink, imgName){
    super.open();
    const imagePopUpElement = this._popupSelector.querySelector(imgSelector);
    const imagePopupTitleElement = this._popupSelector.querySelector(titleSelector);
    imagePopUpElement.src = imgLink;
    imagePopUpElement.alt = `Imagen de ${imgName}`;
    imagePopupTitleElement.textContent = imgName;
  }

  close(){
    super.close();
  }

  

  setEventListeners(){
    super.setEventListeners();
    super._handleEscClose();
    this._btnClose.addEventListener("click", () => {
          this.close();
  })
    
  }
};
export {PopupWithImage};