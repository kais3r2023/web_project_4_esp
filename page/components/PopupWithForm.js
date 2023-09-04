import Popup from "./PopUp.js";
import { inputListValues, profileName, profileAbout, formularyProfile} from "./cons.js";
import { popUpPlace, popUpProfile } from "../index.js";


export default class PopupWithForm extends Popup{
  constructor(popupSelector){
    super(popupSelector)
    this._form = popupSelector.querySelector(".formulary");
  }

  _getInputValues(){
    console.log(inputListValues);
    this._inputList = this._form.querySelectorAll(".formulary__data");
    for(let i = 0; i<2 ; i++){
      inputListValues.push(this._inputList[i].value);
    };
    this._addDomProfile();
    super.close();
    console.log(inputListValues);
    }
   /* USar Metodo Splice AQUIIII */
  _resetInputListValues(){
    inputListValues.splice();
  }

  /* _formAssignment(popupSelector){
    if(popupSelector === popUpProfile){
      this._addDomProfile();
    }
    else if(popupSelector === popUpPlace){
      this._addDomGallery();
    }
  } */
  _addDomProfile(){
    if(inputListValues.length > 2 ){
    profileName.textContent = inputListValues[inputListValues.length-2];
    profileAbout.textContent = inputListValues[inputListValues.length-1];  
    }
    else{
      profileName.textContent = inputListValues[0];
      profileAbout.textContent = inputListValues[1];
    }
    
  }

  _addDomGallery(){

  }

}
export{PopupWithForm};