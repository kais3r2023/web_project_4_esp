import { FormValidator } from "./formValidator.js";
import { DefaultCard } from "./components/card.js";
import {PopupWithForm} from "./components/PopupWithForm.js";
import { popUpProfile, editButtonProfile,popUpPlace, btnAddPlace, initialCards} from "./components/cons.js";




//Tarjetas Iniciales

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
  openPopProfile.open();
  openPopProfile.setEventListeners();
})

openPopProfile._form.addEventListener("submit", (event)=>{
  event.preventDefault();
  openPopProfile.setSubmitListeners();
})






/* Manipulacion de formulario Place */

const openPopPlace = new PopupWithForm(popUpPlace)
btnAddPlace.addEventListener("click" , ()=>{ 
  openPopPlace.open();
  openPopPlace.setEventListeners();
})

openPopPlace._form.addEventListener("submit", (event)=>{
  event.preventDefault();
  openPopPlace.setSubmitListeners();
})