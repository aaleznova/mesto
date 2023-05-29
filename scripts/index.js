import { initialCards, validationConfig } from './constants.js';
import Card from './Card.js';
import { FormValidator } from './FormValidator.js';

// элементы секции profile:

const profileName = document.querySelector ('.profile__name');
const profileDescription = document.querySelector ('.profile__description');

const profileEditButton = document.querySelector ('.profile__edit-button');
const profileAddButton = document.querySelector ('.profile__add-button');

// элементы editProfilePopup:

const editProfilePopup = document.querySelector ('.popup_profile');
const editProfileForm = editProfilePopup.querySelector ('.popup__form');
const editProfileNameInput = editProfileForm.querySelector ('.popup__input_type_name');
const editProfileDescriptionInput =  editProfileForm.querySelector ('.popup__input_type_description');

// элементы addCardLinkInput:

const addCardPopup = document.querySelector ('.popup_photo');
const addCardForm = addCardPopup.querySelector ('.popup__form');
const addCardLocationInput = addCardForm.querySelector ('.popup__input_type_location');
const addCardLinkInput = addCardForm.querySelector ('.popup__input_type_link');

// элементы showPicturePopup:

const showPicturePopup = document.querySelector('.popup_show');
const showPictureContent = showPicturePopup.querySelector('.popup__content');
const showPictureImage = showPictureContent.querySelector('.popup__image');
const showPictureFigcaption = showPictureContent.querySelector('.popup__figcaption');

// элементы closeButtons:

const closeButtonList = document.querySelectorAll ('.popup__close');

// template-элементы:

const selectorTemplate = '#template';
const cardList = document.querySelector('.elements');

//validator
const editProfileValidator = new FormValidator(validationConfig, editProfileForm);
const addCardValidator = new FormValidator(validationConfig, addCardForm);


function openPopup (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupPressEsc);
  popup.addEventListener('mousedown', closePopupClickOverlay);
};

function openPhotoPopup(object) {
  showPictureImage.src = object.link;
  showPictureImage.alt = object.name;
  showPictureFigcaption.textContent = object.name;
  openPopup(showPicturePopup);
  editProfileValidator.resetValidation();
}

function closePopup (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupPressEsc);
  popup.removeEventListener('mousedown', closePopupClickOverlay);
};

function closePopupPressEsc(evt, popup) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  };
}

function closePopupClickOverlay(evt, popup) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  };
}

profileEditButton.addEventListener('click', () => {
  editProfileNameInput.value = profileName.textContent;
  editProfileDescriptionInput.value = profileDescription.textContent;
  openPopup(editProfilePopup);
});

editProfileForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileName.textContent = editProfileNameInput.value;
  profileDescription.textContent = editProfileDescriptionInput.value;
  closePopup (editProfilePopup);
});

profileAddButton.addEventListener('click', () => {openPopup(addCardPopup); addCardValidator.resetValidation()});

closeButtonList.forEach((element) => {
  element.addEventListener('click', () => {
    closePopup(element.closest('.popup'));
  });
});

function createNewPost(element) {
  const card = new Card(element, selectorTemplate, openPhotoPopup);
  return card.createPost();
};

initialCards.forEach((element) => {
  cardList.append(createNewPost(element));
});

editProfileValidator.enableValidation();
addCardValidator.enableValidation();

addCardForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const object = {name: addCardLocationInput.value, link: addCardLinkInput.value};
  cardList.prepend(createNewPost(object));
  closePopup(addCardPopup)
  evt.target.reset();
});