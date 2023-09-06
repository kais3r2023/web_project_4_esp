import Popup from "./PopUp.js";
import { inputListValues, profileName, profileAbout} from "./cons.js";
import { popUpPlace, popUpProfile } from "../index.js";


export default class PopupWithForm extends Popup{
  constructor(popupSelector){
    super(popupSelector)
    this._form = popupSelector.querySelector(".formulary");
  }

  _getInputValues(){
    this._inputList = this._form.querySelectorAll(".formulary__data");
    for(let i = 0; i<2 ; i++){
      inputListValues.push(this._inputList[i].value);
    };
    super.close();

    }
  _resetInputListValues(){
    inputListValues.splice(0,2);

  }

  _formAssignment(popupSelector){
    if(popupSelector === popUpProfile){
      this._addDomProfile();
    }
    else if(popupSelector === popUpPlace){
      this._addDomGallery();
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

}
export{PopupWithForm};