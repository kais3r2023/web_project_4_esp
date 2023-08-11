import Popup from "./popUp.js";
import { templateZoom } from "../utils/constants.js";

class PopUpWithImage extends Popup{
  constructor(templateZoom){
    super(templateZoom)
  }
  open(){
    super.open();

    const zoomTitle = document.querySelector("#zoom-img-title");
    const zoomImgSrc = document.querySelector("#zoom-img-src");
    
    zoomImgSrc.src = link;
    zoomImgSrc.alt = `Imagen de ${title}`;
    zoomTitle.textContent = title;
  }
}

const PopUpWithImage = new PopUpWithImage(templateZoom);