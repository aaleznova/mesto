import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallBack) {
    super(popupSelector);
    this._submitCallBack = submitCallBack;
    this._form = this._popup.querySelector('.popup__form');
    this._inputs = this._form.querySelectorAll('.popup__input');
  }

  getInputValues() {
    const data = {};
    this._inputs.forEach(input => {
      data[input.name] = input.value;
    });
    return data;
  }

  setInputValues(data) {
    this._inputs.forEach(input => {
      input.value = data[input.name];
    });
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", this._submitCallBack);
  }
}