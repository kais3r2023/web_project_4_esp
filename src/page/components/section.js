import { DefaultCard } from "./card.js";
import { gallery } from "./cons.js";

export default class Section{
  constructor(items, cardSelector){
    this._items = items;
    this._selector = cardSelector;
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