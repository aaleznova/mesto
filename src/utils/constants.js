export const initialCards = [
  {
    location: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    location: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    location: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    location: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    location: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    location: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  disabledButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const editProfilePopup = document.querySelector ('.popup_profile');
export const editProfileForm = editProfilePopup.querySelector ('.popup__form');
const addCardPopup = document.querySelector ('.popup_photo');
export const addCardForm = addCardPopup.querySelector ('.popup__form');

export const profileEditButton = document.querySelector ('.profile__edit-button');
export const profileAddButton = document.querySelector ('.profile__add-button');

export const popupImageSelector = '.popup_show';
export const selectorTemplate = '#template';
export const editProfileSelector = '.popup_profile';
export const addCardSelector = '.popup_photo';
export const cardListSelector = '.elements';

export const configInfo = {
  nameSelector: '.profile__name',
  descriptionSelector: '.profile__description'
}