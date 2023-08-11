class Section {
  constructor ({items, renderer}, selector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._selector = document.querySelector(selector);
}

renderer(){
  this._renderedItems.forEach(item => {
    
  });
}

addItem(element){
  this._selector.append(element);
}

}