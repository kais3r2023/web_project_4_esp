import Popup from "./PopUp.js";
import { templateZoom } from "./cons.js";

export default class PopupWithImage extends Popup{
  constructor(templateZoom){
    super(templateZoom);
  }

  open (name, link){
    super.open();
    const imagePopUpElement = document.querySelector(".template-zoom__image");
    const imagePopupTitleElement = document.querySelector(".template-zoom__title");

    imagePopUpElement.src = link;
    imagePopUpElement.alt = `Imagen de ${name}`;
    imagePopupTitleElement.textContent = name;
  }
}

export const popupWithImage = new PopupWithImage(templateZoom);
popupWithImage.setEventListeners();