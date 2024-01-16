import "./index.css";
import editBtn from "../images/Edit Button.png";
import avatarPhoto from "../images/Avatar.png";
import btnAddImg from "../images/Add Button.png";
import logoImg from "../images/logo.png";
import tripletenImg from "../images/tripletenIcon.png";
import { FormValidator } from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import { popUpProfile, myApiId, popUpPlace, popUpUpdateProfileIcon, editButtonProfile, btnAddPlace, 
btnCloseProfile, btnClosePlace, btnCloseZoom, 
btnCloseConfirmation, btnCloseUpdateProfileIcon, btnUpdateProfileIcon,btnSubProfile ,
profileName, profileAbout, btnSubPLace, gallery, api} from "../components/Constants.js";
import Section from "../components/Section.js";
import btnCloseImg from "/src/images/Close Icon.png";
import { Card } from "../components/Card.js";
import UserInfo from "../components/UserInfo.js";

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

const generateCards = (data) => {
  const owner = data.owner;
  const defaultCard = new Card(data, ".card" , !owner || owner._id ===  myApiId);
  return defaultCard.generateCard();
}

const sectionCards = new Section({
  items: usersDefaultCards,
  renderer: generateCards
},".gallery" );
sectionCards.renderer();

// Borrado de Tarjetas 





/* Validación de Formularios */

const formProfileValidator = new FormValidator("formulary-profile");
const formplaceValidator = new FormValidator("formulary-place");
const formAvatarValidator = new FormValidator("formulary-update-avatar-icon");


//Manipulación de formulario Update Profile Icon

const openPopUpdateAvatar = new PopupWithForm(popUpUpdateProfileIcon)
btnUpdateProfileIcon.addEventListener("click", ()=>{
  openPopUpdateAvatar.open();
  formAvatarValidator.enableValidation();
  openPopUpdateAvatar.setEventListeners();
})

openPopUpdateAvatar._form.addEventListener("submit",(event)=>{
  event.preventDefault();
  const inputValues = openPopUpdateAvatar._getInputValues();
  openPopUpdateAvatar._addDomProfileAvatar(inputValues);
  openPopUpdateAvatar.close();
})

//Manipulación de formulario Perfil

const openPopProfile = new PopupWithForm(popUpProfile)

editButtonProfile.addEventListener("click" , ()=>{ 
  openPopProfile.open();
  formProfileValidator.enableValidation();
  openPopProfile.setEventListeners();
})

openPopProfile._form.addEventListener("submit", (event)=>{
  event.preventDefault();
  const inputValues = openPopProfile._getInputValues();
  const addUserInfo = new UserInfo(inputValues);
  addUserInfo.setUserInfo(profileName, profileAbout);
  btnSubProfile.innerText = "Guardando...";
  btnSubProfile.disable = true;
  api.updateProfile({name: inputValues.name, about: inputValues.about})
      .finally(()=>{btnSubProfile.innerText = "Guardar"
      btnSubProfile.disable = false});
  openPopProfile.close();
})


//Manipulación de formulario Place

const openPopPlace = new PopupWithForm(popUpPlace)
btnAddPlace.addEventListener("click" , ()=>{
  openPopPlace.open();
  formplaceValidator.enableValidation();
  openPopPlace.setEventListeners();
})

openPopPlace._form.addEventListener("submit", (event)=>{
  event.preventDefault();
  const inputValues = openPopPlace._getInputValues();
  btnSubPLace.innerText = "Creando...";
  btnSubPLace.disable = true;
    api.addNewCard({name: inputValues.name, link: inputValues.link})
      .then((inputValues) => {
        const NewCard = new Card(inputValues,".card", true);
        const cardElement = NewCard.generateCard();
        gallery.insertBefore(cardElement, gallery.firstChild);})
        .finally(()=>{btnSubPLace.innerText = "Crear";
        btnSubPLace.disable = false;});
  openPopPlace.close();
})

