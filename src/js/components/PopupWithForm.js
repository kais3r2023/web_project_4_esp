import Popup from "./PopUp.js";
import { inputListValues, profileName, profileAbout, popUpProfile, popUpPlace, popUpUpdateProfileIcon, gallery, api } from "./Cons.js";
import { NewCard } from "./Card.js";
import UserInfo from "./UserInfo.js";
import { avatarImg } from "../../page/index.js";


export default class PopupWithForm extends Popup{
  constructor(popupSelector){
    super(popupSelector)
    this._popupSelector = popupSelector;
    this._form = this._popupSelector.querySelector(".formulary");
    this._inputList = this._form.querySelectorAll(".formulary__data");
    /* this._btnClose = this._popupSelector.querySelector(".btn-close"); */
  }

  _getInputValues(){
    /*for(let i = 0; i<2 ; i++){
      inputListValues[i]= this._inputList[i].value;
    };*/
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
    api.updateProfile({name: userInformation.userName, about: userInformation.userAbout});
    console.log(userInformation);
    }

  _addDomGallery(){
      const newData = {};
      newData.name = inputListValues.name;
      newData.link = inputListValues.link;
      const addNewCard = new NewCard(newData, ".card");
      const cardElement = addNewCard.generateCard();
      gallery.append(cardElement);
      
  }

  _addDomProfileAvatar(){
    const newAvatar = {};
    newAvatar.link = inputListValues.link;
    avatarImg.src = newAvatar.link;
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