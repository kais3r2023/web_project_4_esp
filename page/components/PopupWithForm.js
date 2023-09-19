import Popup from "./PopUp.js";
import { inputListValues, profileName, profileAbout, popUpProfile, popUpPlace, gallery, btnSubProfile } from "./cons.js";
import { NewCard } from "./card.js";
import UserInfo from "./UserInfo.js";


export default class PopupWithForm extends Popup{
  constructor(popupSelector){
    super(popupSelector)
    this._popupSelector = popupSelector;
    this._form = this._popupSelector.querySelector(".formulary");
    this._btnClose = this._popupSelector.querySelector(".btn-close");
    this._btnSutmit = this._popupSelector.querySelector(".formulary__save-button");
    
  }

  _getInputValues(){
    this._inputList = this._form.querySelectorAll(".formulary__data");
    for(let i = 0; i<2 ; i++){
      inputListValues[i]= this._inputList[i].value;
    };

    }
  _resetInputListValues(){
    inputListValues.splice(0,2);

  }

  _formAssignment(){
    if(this._popupSelector === popUpProfile){
      this._addDomProfile();
      /* this.close(); */

    }
    else if(this._popupSelector === popUpPlace){
      this._addDomGallery();
      /* this.close(); */
      
    }
  }
  _addDomProfile(){
    const userInformation = {};
    userInformation.userName = inputListValues[0];
    userInformation.userJob = inputListValues[1];
    const addUserInfo = new UserInfo(userInformation);
    addUserInfo.setUserInfo(profileName, profileAbout);
    /* this._resetInputListValues(); */
    }

  _addDomGallery(){
      const newData = {};
      newData.name = inputListValues[0];
      newData.link = inputListValues[1];
      const addNewCard = new NewCard(newData, ".card");
      const cardElement = addNewCard.generateCard();
      gallery.append(cardElement);
      /* this._resetInputListValues(); */
  }
  
  /* onclick del boton al formulario submit */
  setEventListeners(){
    this._btnSutmit.disabled = false;
      super.setEventListeners();
      super._handleEscClose();
      /*this._btnSutmit.addEventListener("click", (event)=>{
        event.preventDefault();
        this._getInputValues();
        this._formAssignment();
        this.close();
        this._resetInputListValues();
        this._btnSutmit.disabled = true;
      })*/

      this._form.addEventListener("submit", (event)=>{
      event.preventDefault();
      this._getInputValues();
      this._formAssignment();
      this.close();
    })
  }

  close(){
    super.close();
    this._form.reset();
  }
}
export{PopupWithForm};