import { templateZoom } from "./cons.js";
import {popupWithImage} from "./PopupWithImage.js";

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
      this._element.querySelector(".gallery__card_photo").src = this._link;
      this._element.querySelector(".gallery__card_bar-title").textContent = this._name;
      this._element.querySelector(".gallery__card_photo").alt = this._name;
      this._element.querySelector(".gallery__card_photo").addEventListener("click", ()=>{
        this.zoomCardOn(this._name, this._link)})
      this.deleteCard();
      this.zoomCardOn();
      this.zoomCardOff();
      /* this.zoomCard(); */
      this.handleBlackLike();
      return this._element;
    }

    deleteCard(){
      this._element.querySelector(".gallery__card_trash-can-icon").addEventListener("click", ()=>{
        this._element.remove();
      })
    }

    zoomCardOn(){
      this._element.querySelector(".gallery__card_photo").addEventListener("click" , ()=>{ 
      popupWithImage.open(this._name, this._link);
      })
    }

    zoomCardOff(){
      templateZoom.querySelector(".template-zoom__close-icon").addEventListener("click" , ()=>{ 
        templateZoom.classList.remove("pop-up__open");
        })
    }

  /* zoomCard(){
    zoomImgSrc.src = this._link;
    zoomImgSrc.alt = this._name;
    zoomTitle.textContent = this._name;
    this.zoomCardOn();
  } */

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
  constructor(template){
  super(template)
  this._name = document.querySelector("#place-title").value;
  this._link = document.querySelector("#photo-link").value;
  }
}



export{Card, DefaultCard, NewCard};