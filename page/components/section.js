class Section{
  constructor({items, renderer}, cardSelector){
    this._items = items
    this._rendered = renderer
    this._selector = cardSelector
  }
  renderer(){
    this._items.forEach(item =>{
      this.addItem()
    })
  }
  addItem(element){
    this._selector.append(element);
  }
}