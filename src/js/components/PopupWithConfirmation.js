import Popup from "./PopUp.js";

export default class PopupWithConfirmation extends Popup{
  constructor(popupSelector){
    super(popupSelector)
  }
  setEventListeners(){
    super.setEventListeners();
  }
  open(){
    super.open();
  }
  
  close(){
    super.close();
  }
}