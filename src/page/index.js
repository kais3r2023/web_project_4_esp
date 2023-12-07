import "./index.css";
import editBtn from "../images/Edit Button.png";
import avatarPhoto from "../images/Avatar.png";
import btnAddImg from "../images/Add Button.png";
import logoImg from "../images/logo.png";
import { FormValidator } from "../js/components/FormValidator.js";
import {PopupWithForm} from "../js/components/PopupWithForm.js";
import { popUpProfile, popUpPlace, popUpUpdateProfileIcon, editButtonProfile, btnAddPlace, initialCards, card, btnCloseProfile, btnClosePlace, btnCloseZoom, btnCloseConfirmation, btnCloseUpdateProfileIcon, btnUpdateProfileIcon} from "../js/components/Cons.js";
import {Section} from "../js/components/Section.js";
import btnCloseImg from "/src/images/Close Icon.png";

//Carga de Imagenes
//Img Edit Profile
const editBtnImg = document.getElementById("btnEdit"); 
editBtnImg.src = editBtn;
//Img Avatar
export const avatarImg = document.getElementById("profileAvatar");
avatarImg.src = avatarPhoto;
//Img Add Btn
const addPlaceBtn = document.getElementById("btnAddPlace");
addPlaceBtn.src = btnAddImg;
//Img Logo Header
const logoHeader = document.getElementById("logo-header");
logoHeader.src = logoImg;
//Img logo Iconos Equis Cerrar
btnCloseProfile.src = btnCloseImg;
btnClosePlace.src = btnCloseImg;
btnCloseZoom.src = btnCloseImg;
btnCloseConfirmation.src = btnCloseImg;
btnCloseUpdateProfileIcon.src= btnCloseImg;


//Tarjetas Iniciales

const initialDefaultCards = new Section(initialCards, card);
initialDefaultCards.renderer();

/* Validación de Formularios */

const formProfile = new FormValidator("formulary-profile");
const formPlace = new FormValidator("formulary-place");
const formUpdateProfileIcon = new FormValidator("formulary-update-avatar-icon");

formProfile.enableValidation();
formPlace.enableValidation();
formUpdateProfileIcon.enableValidation();

/* Manipulación de formulario Perfil */

const openPopProfile = new PopupWithForm(popUpProfile)

editButtonProfile.addEventListener("click" , ()=>{ 
  openPopProfile.open();
  openPopProfile.setEventListeners();
})

openPopProfile._form.addEventListener("submit", (event)=>{
  event.preventDefault();
  openPopProfile.setSubmitListeners();
})


/* Manipulación de formulario Place */

const openPopPlace = new PopupWithForm(popUpPlace)
btnAddPlace.addEventListener("click" , ()=>{ 
  openPopPlace.open();
  openPopPlace.setEventListeners();
  /* formPlace.enableValidation(); */
})

openPopPlace._form.addEventListener("submit", (event)=>{
  event.preventDefault();
  openPopPlace.setSubmitListeners();
})

/* Manipulación de formulario Update Profile Icon */

const openPopUpdateIcon = new PopupWithForm(popUpUpdateProfileIcon)
btnUpdateProfileIcon.addEventListener("click", ()=>{
  openPopUpdateIcon.open();
  openPopUpdateIcon.setEventListeners();
})

openPopUpdateIcon._form.addEventListener("submit",(event)=>{
  event.preventDefault();
  openPopUpdateIcon.setSubmitListeners();
})