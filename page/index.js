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


/* funcion para cerrar editor de profile */
function handlerDisplayPopUpProfile () {
    popUpProfile.classList.toggle('pop-up__open');
}

/*funcion para cerrar con boton escape */

document.onkeydown = function (Evt){
  if (Evt.key === "Escape"){
    popUpProfile.classList.remove('pop-up__open');
    popUpPlace.classList.remove('pop-up__open');
  }
};



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




function handlerPlace (event) {
    event.preventDefault();
}



/* funcion para abrir y cerrar formulario para añadir tarjeta */


function handlerDisplayPopUpPlace() {
  popUpPlace.classList.toggle('pop-up__open');
}

btnAdd.addEventListener('click', handlerDisplayPopUpPlace);
btnClosePopUpPlace.addEventListener('click', handlerDisplayPopUpPlace);