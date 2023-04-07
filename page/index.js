const editButton = document.querySelector('.profile__content_edit-button');
const popUp = document.querySelector('.pop-up');
const closeButton = document.querySelector('.pop-up__close-icon');
const formulary = document.querySelector('.formulary');
const btnSave = document.querySelector('formulary__save-button');


function handlerDisplayPopUp () {
    popUp.classList.toggle('pop-up__open');
}

function handlerProfile (event) {
    event.preventDefault();
    const nameProfile = document.querySelector('#name-profile').value;
    const aboutMe = document.querySelector('#about-me').value;
    const name = document.querySelector('.profile__content_name');
    const about = document.querySelector('.profile__content_subtitle');
    name.innerHTML= nameProfile;
    about.innerHTML= aboutMe;
    handlerDisplayPopUp();
}


editButton.addEventListener('click', handlerDisplayPopUp);
closeButton.addEventListener('click', handlerDisplayPopUp);
formulary.addEventListener('submit', handlerProfile);