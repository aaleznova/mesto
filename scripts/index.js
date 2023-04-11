const getName = document.querySelector ('.profile__name');
const getDescription = document.querySelector ('.profile__description');

const editButton = document.querySelector ('.profile__edit-button');
const addButton = document.querySelector ('.profile__add-button');

const popup = document.querySelectorAll ('.popup');
const formProfile = document.querySelector ('.popup__form');

const profilePopup = document.querySelector ('.popup_profile');
const photoPopup = document.querySelector ('.popup_photo');
const formPhoto = photoPopup.querySelector ('.popup__form');

const nameInput = document.querySelector ('.popup__input_type_name');
const descriptionInput =  document.querySelector ('.popup__input_type_description');

const locationInput = document.querySelector ('.popup__input_type_location');
const linkInput = document.querySelector ('.popup__input_type_link');

const show = document.querySelector('.popup_show');
const content = document.querySelector('.popup__content');
const image = document.querySelector('.popup__image');
const figcaption = document.querySelector('.popup__figcaption');

const closeButton = document.querySelectorAll ('.popup__close');

const template = document.querySelector('#template').content;
const elements = document.querySelector('.elements');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function openPopup (popup) {
  popup.classList.add('popup_opened');
};

function closePopup (popup) {
  popup.classList.remove('popup_opened');
};

editButton.addEventListener('click', () => {
  nameInput.value = getName.textContent;
  descriptionInput.value = getDescription.textContent;
  openPopup(profilePopup);
});

formProfile.addEventListener('submit', (evt) => {
  evt.preventDefault();
  getName.textContent = nameInput.value;
  getDescription.textContent = descriptionInput.value;
  closePopup (profilePopup);
});

addButton.addEventListener('click', () => openPopup(photoPopup));

closeButton.forEach((element) => {
  element.addEventListener('click', () => {
    closePopup(element.closest('.popup'));
  });
});

function createPost(object) {
  const element = template.querySelector('.element').cloneNode(true);
  const deleteElement = element.querySelector('.element__delete');
  const photoElement = element.querySelector('.element__photo');
  const likeElement = element.querySelector('.element__like');
  
  photoElement.alt = object.name;
  photoElement.src = object.link;
  element.querySelector('.element__location').textContent = object.name;

  likeElement.addEventListener('click', (evt) => evt.target.classList.toggle('element__like_active'));
  
  deleteElement.addEventListener('click', (evt) => evt.target.closest('.element').remove());

  photoElement.addEventListener('click', () => {
    image.src = object.link;
    image.alt = object.name;
    figcaption.textContent = object.name;
    openPopup(show);
  });

  return element;
};

initialCards.forEach((element) => {
  const card = createPost(element);
  elements.append(card);
});

formPhoto.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const object = {name: locationInput.value, link: linkInput.value};
  const card = createPost(object);
  elements.prepend(card);
  closePopup(photoPopup)
  evt.target.reset();
});