/* Tarjetas Iniciales */


const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
  }
];


class Card{
  
  constructor(template){
    this._template = template;
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
        this.zoomCard(this._link, this._name)})
      this.deleteCard();
      this.zoomCardOn();
      this.zoomCardOff();
      this.zoomCard();
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
      templateZoom.classList.add("template-zoom__open");
      })
    }

    zoomCardOff(){
      templateZoom.querySelector(".template-zoom__close-icon").addEventListener("click" , ()=>{ 
        templateZoom.classList.remove("template-zoom__open");
        })
    }

  zoomCard(){
    zoomImgSrc.src = this._link;
    zoomImgSrc.alt = this._name;
    zoomTitle.textContent = this._name;
    this.zoomCardOn();
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
}

}



initialCards.forEach((data)=>{
  const card = new DefaultCard(data, ".card");
  const cardElement = card.generateCard();

  document.querySelector(".gallery").append(cardElement);
})



/* Tarjetas Nuevas */

class NewCard extends Card {
  constructor(template){
  super(template)
  this._name = document.querySelector("#place-title").value;
  this._link = document.querySelector("#photo-link").value;
  }
}

const addNewCard = (()=>{
  const card = new NewCard(".card");
  const cardElement = card.generateCard();
  document.querySelector(".gallery").append(cardElement);
  handlerDisplayPopUpPlace()
})

formularyPlace.addEventListener('submit', addNewCard);

