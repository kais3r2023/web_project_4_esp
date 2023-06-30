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
  }

  class DefaultCard extends Card{
  constructor(data, template) {
    super(template);
    this._name = data.name;
    this._link = data.link;

  }

  generateCard(){
    this._element = this._getTemplate();
    this._element.querySelector(".gallery__card_photo").src = this._link;
    this._element.querySelector(".gallery__card_bar-title").textContent = this._name;
    this._element.querySelector(".gallery__card_photo").alt = this._name;
    return this._element;
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

  generateCard(){
    this._element = this._getTemplate();
    this._element.querySelector(".gallery__card_photo").src = this._link;
    this._element.querySelector(".gallery__card_bar-title").textContent = this._name;
    this._element.querySelector(".gallery__card_photo").alt = this._name;
    return this._element;
  }
}

const addNewCard = (()=>{
  const card = new NewCard(".card");
  const cardElement = card.generateCard();
  document.querySelector(".gallery").append(cardElement);
  handlerDisplayPopUpPlace()
})

formularyPlace.addEventListener('submit', addNewCard);

