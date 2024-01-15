import Popup from "./PopUp.js";
import { inputListValues, api} from "./Constants.js";
import { avatarImg } from "../page/index.js";


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
      return(inputListValues);
    }

  _addDomProfileAvatar(input){
    const newAvatar = {};
    newAvatar.link = input.link;
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

  close(){
    super.close();
    this._inputList.forEach((input)=>{
      input.value = "";
    })
    this._form.reset();
  }
}