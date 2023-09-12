import { FormValidator } from "./formValidator.js";
import { DefaultCard } from "./components/card.js";
import {PopupWithForm} from "./components/PopupWithForm.js";
import { popUpProfile, editButtonProfile,popUpPlace, btnAddPlace } from "./components/cons.js";




//Tarjetas Iniciales

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

initialCards.forEach((data)=>{
  const card = new DefaultCard(data, ".card");
  const cardElement = card.generateCard();

  document.querySelector(".gallery").append(cardElement);
})

const formProfile = new FormValidator("formulary-profile");
const formPlace = new FormValidator("formulary-place");
formProfile.enableValidation();
formPlace.enableValidation();

/* Manipulacion de formulario Perfil */

const openPopProfile = new PopupWithForm(popUpProfile)

editButtonProfile.addEventListener("click" , ()=>{ 
  openPopProfile.open()
})
openPopProfile.setEventListeners();


/* formularyProfile.addEventListener("submit", (event)=>{
  event.preventDefault();
  openPopProfile._getInputValues();
  openPopProfile._formAssignment(popUpProfile);
  formularyProfile.reset();
}) */



/* Manipulacion de formulario Place */

const openPopPLace = new PopupWithForm(popUpPlace)
  btnAddPlace.addEventListener("click", ()=>{
    openPopPLace.open()
  })
    openPopPLace.setEventListeners();
    