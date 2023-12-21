import { Api } from "./Api";

// Variables Globales
export const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
    likes: [],
    _id: "0b39b19bf6c712999f38bd92"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
    likes: [],
    _id: "0b39b19bf6c712999f38bd92"
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
    likes: [],
    _id: "0b39b19bf6c712999f38bd92"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
    likes: [],
    _id: "0b39b19bf6c712999f38bd92"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
    likes: [],
    _id: "0b39b19bf6c712999f38bd92"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
    likes: [],
    _id: "0b39b19bf6c712999f38bd92"
  }
];

export const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_07",
  headers: {
    authorization : "b0317f83-ed7a-474d-ada0-9509ec577796",
    "Content-Type": "application/json"
  }
});

export const card = ".card";
export const templateZoom = document.querySelector("#template-zoom");
export const inputListValues = [];
export const profileName = document.querySelector('.profile__content-name');
export const profileAbout = document.querySelector('.profile__content-subtitle');
export const formularyProfile = document.querySelector('#formulary-profile');
export const forms = document.querySelectorAll('.formulary');
export const btnAddPlace = document.querySelector('#add-button-place');
export const editButtonProfile = document.querySelector('.profile__content-edit-button');
export const gallery = document.querySelector("#gallery");
export const formularyPlace = document.querySelector("#formulary-place");
export const zoomImgSrc = document.querySelector("#zoom-img-src");
export const zoomTitle = document.querySelector("#zoom-img-title");
export const btnSubProfile = document.querySelector("#btn-submit-profile");
export const btnSubPLace = document.querySelector("#btn-place-save");
export const btnCloseProfile = document.getElementById("close-icon-profile");
export const btnClosePlace = document.getElementById("close-icon-place");
export const btnCloseZoom = document.getElementById("close-icon-zoom");
export const btnCloseConfirmation = document.getElementById("close-icon-confirmation");
export const btnCloseUpdateProfileIcon = document.getElementById("close-icon-update-avatar-icon");
export const popUpPlace = document.querySelector('#pop-up-place');
export const popUpProfile = document.querySelector('#pop-up-profile');
export const popUpConfirmation = document.querySelector("#pop-up-confirmation");
export const popUpUpdateProfileIcon = document.querySelector("#pop-up-update-avatar-icon");
export const btnUpdateProfileIcon = document.querySelector("#btnUpdateProfileIcon");
export const myApiId = "0b39b19bf6c712999f38bd92";