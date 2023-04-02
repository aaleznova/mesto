let popup = document.querySelector ('.popup');
let form = document.querySelector ('.popup__form');

let getName = document.querySelector ('.profile__name');
let getDiscription = document.querySelector ('.profile__discription');

let nameInput = document.querySelector ('.popup__input_name');
let descriptionInput =  document.querySelector ('.popup__input_description');

let editButton = document.querySelector ('.profile__edit-button');
let closeButton = document.querySelector ('.popup__close');

function openPopup () {
  popup.classList.add('popup__opened');
  nameInput.value = getName.textContent;
  descriptionInput.value = getDiscription.textContent;
}

function closePopup ()  {
popup.classList.remove('popup__opened');
}

function formHandler (evt) {
    evt.preventDefault();
    getName.textContent = nameInput.value;
    getDiscription.textContent = descriptionInput.value;
    closePopup ();
}

editButton.addEventListener ('click', openPopup);
closeButton.addEventListener ('click', closePopup);
form.addEventListener('submit', formHandler);