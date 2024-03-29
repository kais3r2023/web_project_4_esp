import trashIcon from "/src/images/Trash-Can.png";
import likeIcon from "/src/images/like.png";
import blackLikeIcon from "/src/images/black-like.png"
import { popUpConfirmation, api, myApiId } from "./Constants.js";
import { popUpConfirmationCard, popupWithImage } from "../page/index.js";



class Card{
  
  constructor(data, template, showDelete){
    this._template = template;
    this._link = data.link;
    this._name = data.name;
    this._likes = [];
    this._id = data._id;
    if(data.likes){
      this._likes = data.likes;
    }
    this._showDelete = showDelete;    
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

      //Mostrar Icono de borrar tarjeta

      if(this._showDelete){
        this._element.querySelector(".gallery__card_trash-can-icon").src = trashIcon;
      } else{
        this._element.querySelector(".gallery__card_trash-can-icon").style.display = "none";
      }

      //Carga de Mis Likes Activos
      
      if(this._likes.some((like)=>like._id === myApiId)){
        this._element.querySelector(".gallery__card_bar-like").src = blackLikeIcon;
        this._element.querySelector(".gallery__card_bar-like").classList.add("black-like");
      } else{
        this._element.querySelector(".gallery__card_bar-like").src = likeIcon;
        this._element.querySelector(".gallery__card_bar-like").classList.remove("black-like");
      }


      // Mostrar Likes
      this._element.querySelector(".gallery__card_bar-like-count").textContent = this._likes.length >0 ? this._likes.length : "";
      this.deleteCard();
      this.handleCardClick();
      this.handleLike();
      this._element.id = this._id;
      return this._element;
    }

    deleteCard(){
      this._element.querySelector(".gallery__card_trash-can-icon").addEventListener("click", ()=>{
        popUpConfirmationCard.setEventListeners();
        popUpConfirmationCard.open();
        popUpConfirmation.querySelector("#btn-confirmation").addEventListener("click",()=>{
          if(!!this._id){
            api.deleteCard(this._id).then(()=>{
              this._element.remove();
              popUpConfirmationCard.close();
            })
          }
        })
      })
    }

    handleCardClick(){
      this._element.querySelector(".gallery__card_photo").addEventListener("click" , ()=>{
        const zoomImgSrc = ".template-zoom__image";
        const zoomTitle = ".template-zoom__title";
        popupWithImage.open(zoomImgSrc, zoomTitle, this._link, this._name);
        popupWithImage.setEventListeners();
      })
    }


  handleLike(){
    this._element.querySelector(".gallery__card_bar-like").addEventListener("click", ()=>{
        if(this._element.querySelector(".gallery__card_bar-like").classList.contains("black-like")){
        api.deleteLike(this._element.id).then((res =>{
          const initArrayLikes = res.likes;
          this._element.querySelector(".gallery__card_bar-like-count").textContent = initArrayLikes.length;
          this._element.querySelector(".gallery__card_bar-like").src = likeIcon;
          this._element.querySelector(".gallery__card_bar-like").classList.remove("black-like")
        }))
      } else{
        api.addLike(this._element.id).then((res =>{
          const initArraylikes = res.likes;
          this._element.querySelector(".gallery__card_bar-like-count").textContent = initArraylikes.length;
          this._element.querySelector(".gallery__card_bar-like").src = blackLikeIcon;
        }))
      }
      this._element.querySelector(".gallery__card_bar-like").classList.toggle("black-like");
    })
    
  }

}




export{Card};