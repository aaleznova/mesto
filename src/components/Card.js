export default class Card {
  constructor(card, selectorTemplate, openPhotoPopup) {
    this._card = card;
    this._link = card.link;
    this._name = card.location;
    this._selectorTemplate = selectorTemplate;
    this._openPhotoPopup = openPhotoPopup;
  }
  
  _getCloneTemplate() {
    return document.querySelector(this._selectorTemplate).content.querySelector('.element').cloneNode(true);
  }
  
  createPost() {
    this._cloneElement = this._getCloneTemplate();
    this._deleteElement = this._cloneElement.querySelector('.element__delete');
    this._photoElement = this._cloneElement.querySelector('.element__photo');
    this._location = this._cloneElement.querySelector('.element__location');
    this._likeElement = this._cloneElement.querySelector('.element__like');
  
    this._photoElement.src = this._link;
    this._photoElement.alt = this._name;
    this._location.textContent = this._name;
  
    this._setEventListener();
  
    return this._cloneElement;
  }
  
  _setEventListener() {
    this._deleteElement.addEventListener('click', this._handleDelete);
    this._photoElement.addEventListener('click', this._handlePhoto);
    this._likeElement.addEventListener('click', this._handleLike);
  }
  
  _handleDelete = () => {
    this._cloneElement.remove();
    this._cloneElement = null;
  }
  
  _handlePhoto = () => {
    this._openPhotoPopup(this._card);
  }
  
  _handleLike = () => {
    this._likeElement.classList.toggle('element__like_active');
  } 
}