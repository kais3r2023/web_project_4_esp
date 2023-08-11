import { formularyPlace, editButton, popUpProfile,popUpPlace,formularyProfile,closeButtonProfile,btnAdd,btnClosePopUpPlace,templateZoom } from "./index.js";
import { NewCard } from "./card.js";


function addNewCard(){
  const card = new NewCard(".card");
  const cardElement = card.generateCard();
  document.querySelector(".gallery").append(cardElement);
  handlerDisplayPopUpPlace()
}
formularyPlace.addEventListener('submit', addNewCard);

/* funcion para cerrar editor de profile */
function handlerDisplayPopUpProfile () {
  popUpProfile.classList.toggle('pop-up__open');
}

/*funcion para cerrar con boton escape */





/* funcion para modificar perfil */
function handlerProfile (event) {
  event.preventDefault();
  const nameProfile = document.querySelector('#name-profile').value;
  const aboutMe = document.querySelector('#about-me').value;
  const name = document.querySelector('.profile__content-name');
  const about = document.querySelector('.profile__content-subtitle');
  name.textContent= nameProfile;
  about.textContent= aboutMe;
  handlerDisplayPopUpProfile();
  formularyProfile.reset();
}


/* funciones para abrir editor tarjetas de imagenes */

editButton.addEventListener('click', handlerDisplayPopUpProfile);
closeButtonProfile.addEventListener('click', handlerDisplayPopUpProfile);
formularyProfile.addEventListener('submit', handlerProfile);





/* funcion para abrir y cerrar formulario para añadir tarjeta */


function handlerDisplayPopUpPlace() {
popUpPlace.classList.toggle('pop-up__open');
}

btnAdd.addEventListener('click', handlerDisplayPopUpPlace);
btnClosePopUpPlace.addEventListener('click', handlerDisplayPopUpPlace);
/* document.onkeydown = function (event){
  if (event.key === "Escape"){
    templateZoom.classList.remove('template-zoom__open');
    popUpProfile.classList.remove('pop-up__open');
    popUpPlace.classList.remove('pop-up__open');
  }
}; */