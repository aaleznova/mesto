import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector('.popup__image');
    this._figcaption = this._popup.querySelector('.popup__figcaption');
  }

  open = (data) => {
    this._image.src = data.link;
    this._image.alt = data.location;
    this._figcaption.textContent = data.location;

    super.open();
  }
}