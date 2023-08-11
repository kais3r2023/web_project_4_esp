import Popup from "./popUp.js";


export class PopUpWithForm extends Popup {
  constructor({formSubmitHandler}, popupSelector){
    super(popupSelector);
  }


_getInputValues(){

}

close(){
  super.close();
}

setEventListeners(){
  super.setEventListeners();
}

}