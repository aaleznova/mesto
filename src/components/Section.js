export default class Section {
  constructor({ items, renderer }, cardListSelector) {
    this._cardListSelector = document.querySelector(cardListSelector);
    this._items = items;
    this._renderer = renderer;
  }
  
  renderItems() {
    this._items.forEach(element => {
      this.addItem(this._renderer(element));
    });
  }
  
  addItem(element) {
    this._cardListSelector.prepend(element);
  }
}