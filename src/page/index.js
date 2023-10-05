import "./index.css";
import editBtn from "../images/Edit Button.png";
import avatarPhoto from "../images/Avatar.png";
import btnAddImg from "../images/Add Button.png";
import logoImg from "../images/logo.png";
import { FormValidator } from "../js/formValidator.js";
import {PopupWithForm} from "../js/components/PopupWithForm.js";
import { popUpProfile, editButtonProfile, popUpPlace, btnAddPlace, initialCards, card} from "../js/components/Cons.js";
import {Section} from "../js/components/Section.js";

//Carga de Imagenes
//Img Edit Profile
const editBtnImg = document.getElementById("btnEdit"); 
editBtnImg.src = editBtn;
//Img Avatar
const avatarImg = document.getElementById("profileAvatar");
avatarImg.src = avatarPhoto;
//Img Add Btn
const addPlaceBtn = document.getElementById("btnAddPlace");
addPlaceBtn.src = btnAddImg;
//Img Logo Header
const logoHeader = document.getElementById("logo-header");
logoHeader.src = logoImg;

//Tarjetas Iniciales

const initialDefaultCards = new Section(initialCards, card);
initialDefaultCards.renderer();

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