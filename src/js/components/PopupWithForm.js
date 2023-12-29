import Popup from "./PopUp.js";
import { inputListValues, profileName, profileAbout, popUpProfile, popUpPlace, popUpUpdateProfileIcon, gallery, api, btnFormSubmitForClass} from "./Cons.js";
import { DefaultCard} from "./Card.js";
import UserInfo from "./UserInfo.js";
import { avatarImg } from "../../page/index.js";


export default class PopupWithForm extends Popup{
  constructor(popupSelector){
    super(popupSelector)
    this._popupSelector = popupSelector;
    this._form = this._popupSelector.querySelector(".formulary");
    this._inputList = this._form.querySelectorAll(".formulary__data");
    this._buttonSubmit = this._form.querySelector(".formulary__save-button");
  }

  _getInputValues(){
    
    this._inputList.forEach((input) =>{
      inputListValues[input.name] = input.value;
    });
      console.log(inputListValues);
      return(inputListValues);
    }
  

  _formAssignment(){
    if(this._popupSelector === popUpProfile){
      this._addDomProfile();
      

    }
    else if(this._popupSelector === popUpPlace){
      this._addDomGallery();
      
      
    }
    else if(this._popupSelector === popUpUpdateProfileIcon){
      this._addDomProfileAvatar();
    }
    else{
      console.log("no encuentro un formulario valido");
    }
  }
  _addDomProfile(){
    const userInformation = {};
    userInformation.userName = inputListValues.name;
    userInformation.userAbout = inputListValues.about;
    const addUserInfo = new UserInfo(userInformation);
    addUserInfo.setUserInfo(profileName, profileAbout);
    this._buttonSubmit.innerText = "Guardando...";
    this._buttonSubmit.disable = true;
    api.updateProfile({name: userInformation.userName, about: userInformation.userAbout})
      .finally(()=>{this._savingLoaderRefresh("Guardar")});
    }

    // Añadir tarjetas al Dom
  _addDomGallery(){
      const newData = {};
      newData.name = inputListValues.name;
      newData.link = inputListValues.link;
      this._buttonSubmit.innerText = "Creando...";
    this._buttonSubmit.disable = true;
      api.addNewCard(newData)
        .then((newData) => {
          const addNewCard = new DefaultCard(newData, ".card", true);
          const cardElement = addNewCard.generateCard();
          gallery.append(cardElement);})
          .finally(()=>{this._savingLoaderRefresh("Crear")});
  }

  _addDomProfileAvatar(){
    const newAvatar = {};
    newAvatar.link = inputListValues.link;
    avatarImg.src = newAvatar.link;
    this._buttonSubmit.innerText = "Guardando...";
    this._buttonSubmit.disable = true;
    api.updateAvatar({
      avatar: newAvatar.link
    }).finally(()=>{this._savingLoaderRefresh("Guardar")});
  }
  
  _savingLoaderRefresh(savingText){
    this._buttonSubmit.innerText = `${savingText}`;
    this._buttonSubmit.disable = false;
  }
  setEventListeners(){
      super.setEventListeners();
      super._handleEscClose();
      
  }

  setSubmitListeners(){
    this._getInputValues();
    this._formAssignment();
    this.close();
  }

  close(){
    super.close();
    this._inputList.forEach((input)=>{
      input.value = "";
    })
    this._form.reset();
  }
}
export{PopupWithForm};