import {popUpProfile, closeButtonProfile,btnAdd ,btnClosePopUpPlace ,formularyProfile ,popUpPlace, btnEdit} from"./index.js" ;


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

btnEdit.addEventListener('click', handlerDisplayPopUpProfile);
closeButtonProfile.addEventListener('click', handlerDisplayPopUpProfile);
formularyProfile.addEventListener('submit', handlerProfile);




/* funcion para abrir y cerrar formulario para añadir tarjeta */


export function handlerDisplayPopUpPlace() {
popUpPlace.classList.toggle('pop-up__open');
}

btnAdd.addEventListener('click', handlerDisplayPopUpPlace);
btnClosePopUpPlace.addEventListener('click', handlerDisplayPopUpPlace);

const addNewCard = (()=>{
  const card = new NewCard(".card");
  const cardElement = card.generateCard();
  document.querySelector(".gallery").append(cardElement);
  handlerDisplayPopUpPlace()
})

formularyPlace.addEventListener('submit', addNewCard);