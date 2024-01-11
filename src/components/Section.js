import { Card } from "./Card.js";
import { gallery, myApiId } from "./Constants.js";

export default class Section{
  constructor(data, cardSelector){
    this._items = data;
    this._selector = cardSelector;
    this.likes = data.likes;
  }

  renderer(){   
    this._items.forEach((data)=>{
      const owner = data.owner;
      let showDelete = !owner || owner._id ===  myApiId;
      const defaultCard = new Card (data, this._selector, showDelete);
      const cardElement = defaultCard.generateCard();
      this.addItem(cardElement);
})
  }
  addItem(cardElement){
    gallery.append(cardElement);
  }
}

export{Section};