import "./index.css";
import editBtn from "../images/Edit Button.png";
import avatarPhoto from "../images/Avatar.png";
import btnAddImg from "../images/Add Button.png";
import logoImg from "../images/logo.png";
import tripletenImg from "../images/tripletenIcon.png";
import { FormValidator } from "../js/components/FormValidator.js";
import {PopupWithForm} from "../js/components/PopupWithForm.js";
import { popUpProfile, popUpPlace, popUpUpdateProfileIcon, editButtonProfile, btnAddPlace, initialCards, card, btnCloseProfile, btnClosePlace, btnCloseZoom, btnCloseConfirmation, btnCloseUpdateProfileIcon, btnUpdateProfileIcon} from "../js/components/Cons.js";
import {Section} from "../js/components/Section.js";
import btnCloseImg from "/src/images/Close Icon.png";
import { api } from "../js/components/Cons.js";


//Carga de Imagenes
//Img Tripleten Icon
const tripletenIcon = document.getElementById("tripletenIcon");
tripletenIcon.href = tripletenImg
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

//Carga de tarjetas de la Api

const usersDefaultCards = await api.getCards();
const initialApiCards = new Section(usersDefaultCards, card);
initialApiCards.renderer();

/* Validación de Formularios */

const formProfile = new FormValidator("formulary-profile");
const formPlace = new FormValidator("formulary-place");
const formUpdateProfileIcon = new FormValidator("formulary-update-avatar-icon");

formProfile.enableValidation();
formPlace.enableValidation();
formUpdateProfileIcon.enableValidation();

//Manipulación de formulario Update Profile Icon

const openPopUpdateIcon = new PopupWithForm(popUpUpdateProfileIcon)
btnUpdateProfileIcon.addEventListener("click", ()=>{
  openPopUpdateIcon.open();
  openPopUpdateIcon.setEventListeners();
})

openPopUpdateIcon._form.addEventListener("submit",(event)=>{
  event.preventDefault();
  openPopUpdateIcon.setSubmitListeners();
})

//Manipulación de formulario Perfil

const openPopProfile = new PopupWithForm(popUpProfile)

editButtonProfile.addEventListener("click" , ()=>{ 
  openPopProfile.open();
  openPopProfile.setEventListeners();
})

openPopProfile._form.addEventListener("submit", (event)=>{
  event.preventDefault();
  openPopProfile.setSubmitListeners();
})


//Manipulación de formulario Place

const openPopPlace = new PopupWithForm(popUpPlace)
btnAddPlace.addEventListener("click" , ()=>{ 
  openPopPlace.open();
  openPopPlace.setEventListeners();
})

openPopPlace._form.addEventListener("submit", (event)=>{
  event.preventDefault();
  openPopPlace.setSubmitListeners();
})

