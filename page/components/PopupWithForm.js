import Popup from "./PopUp.js";
import { inputListValues, profileName, profileAbout, formularyProfile} from "./cons.js";
import { popUpPlace, popUpProfile } from "../index.js";


export default class PopupWithForm extends Popup{
  constructor(popupSelector){
    super(popupSelector)
    this._popupSelector = popupSelector;
    this._form = popupSelector.querySelector(".formulary");
    this._btnClose = this._form.querySelector(".btn-close");
  }

  _getInputValues(){
    this._inputList = this._form.querySelectorAll(".formulary__data");
    for(let i = 0; i<2 ; i++){
      inputListValues.push(this._inputList[i].value);
    };

    }
  _resetInputListValues(){
    inputListValues.splice(0,2);

  }

  _formAssignment(){
    if(this._popupSelector === popUpProfile){
      this._addDomProfile();
      super.close();

    }
    else if(this._popupSelector === popUpPlace){
      this._addDomGallery();
      super.close();

    }
  }
  _addDomProfile(){
    profileName.textContent = inputListValues[0];
    profileAbout.textContent = inputListValues[1];
    this._resetInputListValues();
    console.log(inputListValues);
  }

  _addDomGallery(){
    
  }
  setEventListeners(){
      super.setEventListeners();
      this._form.addEventListener("submit", (event)=>{
      event.preventDefault();
      this._getInputValues();
      this._formAssignment();
      this._form.reset();
    })
      super._handleEscClose();
      this._btnClose.addEventListener("click", ()=>{
        super.close();
      })
  }
}
export{PopupWithForm};