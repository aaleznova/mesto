export default class Section {
  constructor({ items, renderer }, cardListSelector) {
    this._cardList = document.querySelector(cardListSelector);
    this._items = items;
    this.renderer = renderer;
  }
  
  renderItems() {
    this._items.forEach(element => {
      this.addItem(this.renderer(element));
    });
  }
  
  addItem(element) {
    this._cardList.prepend(element);
  }
}