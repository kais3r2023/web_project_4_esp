/* Variables Globales */
const editButton = document.querySelector('.profile__content-edit-button');
const popUpProfile = document.querySelector('#pop-up-profile');
const closeButtonProfile = document.querySelector('#close-icon-profile');
const formularyProfile = document.querySelector('#formulary-profile');
const btnSave = document.querySelector('.formulary__save-button');
const gallery = document.querySelector('#gallery');
const popUpPlace = document.querySelector('#pop-up-place');
const btnAdd = document.querySelector('#add-button-place');
const btnClosePopUpPlace = document.querySelector("#close-icon-place");
const formularyPlace = document.querySelector("#formulary-place");
const templateZoom = document.querySelector("#template-zoom");
const closeIconZoom = document.querySelector("#zoom-icon-zoom");
const zoomImgSrc = document.querySelector("#zoom-img-src");
const zoomTitle = document.querySelector("#zoom-img-title");
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
