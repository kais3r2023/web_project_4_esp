import Popup from "./PopUp.js";
import { inputListValues, profileName, profileAbout, popUpProfile, popUpPlace, gallery } from "./cons.js";
import { NewCard } from "./card.js";
import UserInfo from "./UserInfo.js";


export default class PopupWithForm extends Popup{
  constructor(popupSelector){
    super(popupSelector)
    this._popupSelector = popupSelector;
    this._form = this._popupSelector.querySelector(".formulary");
    this._btnClose = this._popupSelector.querySelector(".btn-close");
    
  }

  _getInputValues(){
    console.log("en _getInputValues");
    this._inputList = this._form.querySelectorAll(".formulary__data");
    for(let i = 0; i<2 ; i++){
      inputListValues.push(this._inputList[i].value);
    };

    }
  
  _formAssignment(){
    console.log("en _formAssignment");
    if(this._popupSelector === popUpProfile){
      this._addDomProfile();

    }
    else if(this._popupSelector === popUpPlace){
      this._addDomGallery();
      
    }
  }
  _addDomProfile(){
    const userInformation = {};
    userInformation.userName = inputListValues[0];
    userInformation.userJob = inputListValues[1];
    console.log(userInformation);
    const addUserInfo = new UserInfo(userInformation);
    addUserInfo.setUserInfo(profileName, profileAbout);
    this._resetInputListValues();

    }

  _addDomGallery(){
      const newData = {};
      newData.name = inputListValues[0];
      newData.link = inputListValues[1];
      const addNewCard = new NewCard(newData, ".card");
      const cardElement = addNewCard.generateCard();
      gallery.append(cardElement);
      this._resetInputListValues();
      
  }

  _resetInputListValues(){
    inputListValues.splice(0,2);
  }

  close(){    
    this._form.reset();
    super.close();
  }
  

  setEventListeners(){
      super.setEventListeners();
      super._handleEscClose();
      this._btnClose.addEventListener("click", () => {
        this.close();
      })
      this._form.addEventListener("submit", (event)=>{
      event.preventDefault();
      this._getInputValues();
      this._formAssignment();
      //this.close();
      //event.currentTarget.setAttribute('disabled', true);
      })
  }
}
export{PopupWithForm};