let popup = document.querySelector ('.popup');
let form = document.querySelector ('.popup__form');

let getName = document.querySelector ('.profile__name');
let getDescription = document.querySelector ('.profile__description');

let nameInput = document.querySelector ('.popup__input_type_name');
let descriptionInput =  document.querySelector ('.popup__input_type_description');

let editButton = document.querySelector ('.profile__edit-button');
let closeButton = document.querySelector ('.popup__close');

function openPopup () {
  popup.classList.add('popup_opened');
  nameInput.value = getName.textContent;
  descriptionInput.value = getDescription.textContent;
}

function closePopup ()  {
popup.classList.remove('popup_opened');
}

function formHandler (evt) {
    evt.preventDefault();
    getName.textContent = nameInput.value;
    getDescription.textContent = descriptionInput.value;
    closePopup ();
}

editButton.addEventListener ('click', openPopup);
closeButton.addEventListener ('click', closePopup);
form.addEventListener('submit', formHandler);