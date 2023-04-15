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

const template = document.querySelector('#template').content;
const elements = document.querySelector('.elements');

function openPopup (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupPressEsc);
  popup.addEventListener('mousedown', closePopupClickOverlay);
};

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

profileAddButton.addEventListener('click', () => openPopup(addCardPopup));

closeButtonList.forEach((element) => {
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
    showPictureImage.src = object.link;
    showPictureImage.alt = object.name;
    showPictureFigcaption.textContent = object.name;
    openPopup(showPicturePopup);
  });

  return element;
};

initialCards.forEach((element) => {
  const card = createPost(element);
  elements.append(card);
});

addCardForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const object = {name: addCardLocationInput.value, link: addCardLinkInput.value};
  const card = createPost(object);
  elements.prepend(card);
  closePopup(addCardPopup)
  evt.target.reset();
});