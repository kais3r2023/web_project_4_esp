import { DefaultCard } from "./Card.js";
import { gallery, myApiId } from "./Cons.js";

export default class Section{
  constructor(data, cardSelector){
    this._items = data;
    this._selector = cardSelector;
    this.likes = data.likes;
  }

  renderer(){   
    this._items.forEach((data)=>{
      const owner = data.owner;
      let showDelete = true;
      if(!!owner && owner._id !==  myApiId){
        showDelete = false;
      }
      const defaultCard = new DefaultCard (data, this._selector, showDelete);
      const cardElement = defaultCard.generateCard();
      this.addItem(cardElement);
})
  }
  addItem(cardElement){
    gallery.append(cardElement);
  }
}

export{Section};