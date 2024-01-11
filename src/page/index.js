import "./index.css";
import editBtn from "../images/Edit Button.png";
import avatarPhoto from "../images/Avatar.png";
import btnAddImg from "../images/Add Button.png";
import logoImg from "../images/logo.png";
import tripletenImg from "../images/tripletenIcon.png";
import { FormValidator } from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import { popUpProfile,gallery, popUpPlace, popUpUpdateProfileIcon, editButtonProfile, btnAddPlace, btnCloseProfile, btnClosePlace, btnCloseZoom, btnCloseConfirmation, btnCloseUpdateProfileIcon, btnUpdateProfileIcon, profileName, profileAbout, api} from "../components/Constants.js";
import {Section} from "../components/Section.js";
import btnCloseImg from "/src/images/Close Icon.png";


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


//Carga de Profile
export const apiDefaultProfile = await api.defaultProfile();
profileName.textContent = apiDefaultProfile.name;
profileAbout.textContent = apiDefaultProfile.about;
avatarImg.src = apiDefaultProfile.avatar;

//Carga de tarjetas de la Api

const usersDefaultCards = await api.getCards();
const initialApiCards = new Section( usersDefaultCards, ".card" );
initialApiCards.renderer();


/* Validación de Formularios */

const formProfile = new FormValidator("formulary-profile");
const formPlace = new FormValidator("formulary-place");
const formUpdateProfileIcon = new FormValidator("formulary-update-avatar-icon");


//Manipulación de formulario Update Profile Icon

const openPopUpdateAvatar = new PopupWithForm(popUpUpdateProfileIcon)
btnUpdateProfileIcon.addEventListener("click", ()=>{
  openPopUpdateAvatar.open();
  formUpdateProfileIcon.enableValidation();
  openPopUpdateAvatar.setEventListeners();
})

openPopUpdateAvatar._form.addEventListener("submit",(event)=>{
  event.preventDefault();
  openPopUpdateAvatar.setSubmitListeners();
})

//Manipulación de formulario Perfil

const openPopProfile = new PopupWithForm(popUpProfile)

editButtonProfile.addEventListener("click" , ()=>{ 
  openPopProfile.open();
  formProfile.enableValidation();
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
  formPlace.enableValidation();
  openPopPlace.setEventListeners();
})

openPopPlace._form.addEventListener("submit", (event)=>{
  event.preventDefault();
  openPopPlace.setSubmitListeners();
})

