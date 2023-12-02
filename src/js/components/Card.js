import PopupWithImage from "./PopupWithImage.js";
import trashIcon from "/src/images/Trash-Can.png";
import likeIcon from "/src/images/like.png";
import { popUpConfirmation } from "./Cons.js";
import Popup from "./PopUp.js";

//Carga de Imagenes


class Card{
  
  constructor(data, template){
    this._template = template;
    this._link = data.link;
    this._name = data.name;
    
  }
    
  _getTemplate() {
      const cardElement = document.querySelector(this._template)
                          .content.querySelector(".gallery__card").cloneNode(true);
      return cardElement;
    }

    generateCard(){
      this._element = this._getTemplate();
      // import images
      this._element.querySelector(".gallery__card_trash-can-icon").src = trashIcon;
      this._element.querySelector(".gallery__card_bar-like").src = likeIcon;

      //set link and name
      this._element.querySelector(".gallery__card_photo").src = this._link;
      this._element.querySelector(".gallery__card_bar-title").textContent = this._name;
      this._element.querySelector(".gallery__card_photo").alt = this._name;
      this.deleteCard();
      this.handleCardClick();
      this.handleBlackLike();
      return this._element;
    }

    deleteCard(){
      this._element.querySelector(".gallery__card_trash-can-icon").addEventListener("click", ()=>{
        const popUpConfirmationCard = new Popup(popUpConfirmation);
        popUpConfirmationCard.setEventListeners();
        popUpConfirmationCard.open();
        popUpConfirmation.querySelector("#btn-confirmation").addEventListener("click",()=>{
          this._element.remove();
          popUpConfirmationCard.close();
        })
      })
    }

    handleCardClick(){
      this._element.querySelector(".gallery__card_photo").addEventListener("click" , ()=>{
        const templateZoom = document.querySelector("#template-zoom");
        const popupWithImage = new PopupWithImage(templateZoom);
        const zoomImgSrc = ".template-zoom__image";
        const zoomTitle = ".template-zoom__title";
        popupWithImage.open(zoomImgSrc, zoomTitle, this._link, this._name);
        popupWithImage.setEventListeners();
      })
    }


  handleBlackLike(){
    this._element.querySelector(".gallery__card_bar-like").addEventListener("click", ()=>{
      this._element.querySelector(".gallery__card_bar-like").classList.toggle("black-like");
    })
  }

}

  class DefaultCard extends Card{
  constructor(data, template) {
    super(template);
    this._name = data.name;
    this._link = data.link;
    this._template = template;
}

}





/* Tarjetas Nuevas */

class NewCard extends Card {
  constructor(data, template) {
    super(template);
    this._name = data.name;
    this._link = data.link;
    this._template = template;
}
}



export{Card, DefaultCard, NewCard};