import { DefaultCard } from "./Card.js";
import { gallery } from "./Cons.js";

export default class Section{
  constructor(data, cardSelector){
    this._items = data;
    this._selector = cardSelector;
    this.likes = data.likes;
  }

  renderer(){   
    this._items.forEach((data)=>{
      const defaultCard = new DefaultCard (data, this._selector);
      const cardElement = defaultCard.generateCard();
      this.addItem(cardElement);
})
  }
  addItem(cardElement){
    gallery.append(cardElement);
  }
}

export{Section};