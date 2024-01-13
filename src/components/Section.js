export default class Section{
  constructor({items, renderer}, selector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

  renderer() {
    
    this._items.forEach(item =>{
      const cardElement = this._renderer(item);
      this.addItem(cardElement);
    });
  }

  addItem(element) {
    this._container.append(element);
  }
}