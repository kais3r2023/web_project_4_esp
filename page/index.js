
/* Variables Globales */
const editButton = document.querySelector('.profile__content-edit-button');
const popUpProfile = document.querySelector('#pop-up-profile');
const closeButtonProfile = document.querySelector('#close-icon-profile');
const formularyProfile = document.querySelector('#formulary-profile');
const btnSave = document.querySelector('.formulary__save-button');
const gallery = document.querySelector('#gallery');



/* funcion para cerrar editor de profile */
function handlerDisplayPopUpProfile () {
    popUpProfile.classList.toggle('pop-up__open');
}

/* funcion para modificar perfil */
function handlerProfile (event) {
    event.preventDefault();
    const nameProfile = document.querySelector('#name-profile').value;
    const aboutMe = document.querySelector('#about-me').value;
    const name = document.querySelector('.profile__content-name');
    const about = document.querySelector('.profile__content-subtitle');
    name.innerHTML= nameProfile;
    about.innerHTML= aboutMe;
    handlerDisplayPopUpProfile();
    formularyProfile.reset();
}


/* funciones para abrir editor tarjetas de imagenes */

editButton.addEventListener('click', handlerDisplayPopUpProfile);
closeButtonProfile.addEventListener('click', handlerDisplayPopUpProfile);
formularyProfile.addEventListener('submit', handlerProfile);


const popUpPlace = document.querySelector('#pop-up-place');
const btnAdd = document.querySelector('#add-button-place');

function handlerPlace (event) {
    event.preventDefault();
}



/* funcion para abrir y cerrar formulario para añadir tarjeta */
const btnClosePopUpPlace = document.querySelector("#close-icon-place");

function handlerDisplayPopUpPlace() {
  popUpPlace.classList.toggle('pop-up__open');
}

btnAdd.addEventListener('click', handlerDisplayPopUpPlace);
btnClosePopUpPlace.addEventListener('click', handlerDisplayPopUpPlace);

/* funcion de borrado de Cards del tachito de basura */
function deleteCard(cardId){
  document.getElementById(cardId).remove();
}

 /* Tarjetas iniciales del Gallery */


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

function cardsDefault (name, link, cardId, likeId) {

  const divGalleryElement = document.createElement("div");
  divGalleryElement.classList.add("gallery__card");
  divGalleryElement.id = cardId;

  const photoElement = document.createElement("img");
  photoElement.classList.add("gallery__card_photo");
  photoElement.src = link;
  photoElement.alt = name;
  photoElement.addEventListener("click", () => zoomImgPopUp(link, name));

  const trashCanElement = document.createElement("img");
  trashCanElement.classList.add("gallery__card_trash-can-icon");
  trashCanElement.src = "./images/Trash-Can.png";
  trashCanElement.alt = "Tachito de Basura";
  trashCanElement.addEventListener("click", () => deleteCard(cardId));

  const divBarElement = document.createElement("div");
  divBarElement.classList.add("gallery__card_bar");

  const titlePhotoElement = document.createElement("h3");
  titlePhotoElement.classList.add("gallery__card_bar-title");
  titlePhotoElement.textContent = name;

  const likeImgElement = document.createElement("img");
  likeImgElement.classList.add("gallery__card_bar-like");
  likeImgElement.id = likeId;
  likeImgElement.src = "./images/like.png";
  likeImgElement.alt = "Corazon Like";
  likeImgElement.addEventListener("click", () => handleBlackLike(likeId));

  divBarElement.appendChild(titlePhotoElement);
  divBarElement.appendChild(likeImgElement);
  divGalleryElement.appendChild(trashCanElement);
  divGalleryElement.appendChild(photoElement);
  divGalleryElement.appendChild(divBarElement);
  
  return divGalleryElement;
}

initialCards.forEach((card,index)=>{
  const name = card.name;
  const link = card.link;
  const cardId = "card-" + index;
  const likeId = "like-" + index;

  const cardComplete = cardsDefault (name, link, cardId, likeId);
  
  gallery.appendChild(cardComplete);
});


/* funciones para añadir titulo e imagenes nuevas */


const formularyPlace = document.querySelector("#formulary-place");
  

/* funcion para agregar nuevas tarjetas */

function addNewCard(event){
  event.preventDefault();
  const name = document.querySelector("#place-title").value;
  const link = document.querySelector("#photo-link").value;
  const cardId = "card-" + gallery.children.length.toString();
  const likeId = "like-" + gallery.children.length.toString();
  
  const cardComplete = cardsDefault (name, link, cardId, likeId);
  gallery.appendChild(cardComplete);
  
  handlerDisplayPopUpPlace();
  formularyPlace.reset();
};

formularyPlace.addEventListener('submit', addNewCard);

/* Funcion para dar modificar corazon de like */

function handleBlackLike(likeId){
  document.getElementById(likeId).classList.toggle("black-like");
};

/* Funcion para agrandar imagenes de Gallery */

const templateZoom = document.querySelector("#template-zoom");
const closeIconZoom = document.querySelector("#zoom-icon-zoom");
const zoomImgSrc = document.querySelector("#zoom-img-src");
const zoomTitle = document.querySelector("#zoom-img-title");

function addClassOpenZoom(){
  templateZoom.classList.toggle('template-zoom__open');
};

function zoomImgPopUp(link, name){
  addClassOpenZoom();
  zoomImgSrc.src = link;
  zoomTitle.innerHTML = name;
};

/* Validacion de formularios */

const showInputError = (formElement, inputElement, errorMessage) => {
  const btnDisable = formElement.querySelector(".formulary__save-button");
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("formulary__data-error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("formulary__data-error_active");
  btnDisable.classList.add("formulary__save-button_disable");
};

const hideInputError = (formElement, inputElement) => {
  const btnDisable = formElement.querySelector(".formulary__save-button");
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("formulary__data-error");
  errorElement.classList.remove("formulary__data-error_active");
  errorElement.textContent = "";
  btnDisable.classList.remove("formulary__save-button_disable");
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
    formularyProfile.removeEventListener('submit', handlerProfile);
    formularyPlace.removeEventListener('submit', addNewCard);
  } else {
    hideInputError(formElement, inputElement);
    formularyProfile.addEventListener('submit', handlerProfile);
    formularyPlace.addEventListener('submit', addNewCard);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".formulary__data"));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".formulary"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    setEventListeners(formElement);
  });
};

enableValidation();