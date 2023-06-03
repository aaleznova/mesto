import './index.css';

import { initialCards, validationConfig, profileEditButton, 
         profileAddButton, popupImageSelector, selectorTemplate,
         editProfileSelector, addCardSelector, configInfo, 
         editProfileForm,  addCardForm, cardListSelector} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';

const userInfo = new UserInfo(configInfo);

const popupImage = new PopupWithImage(popupImageSelector);

const popupProfile = new PopupWithForm(editProfileSelector, (evt) => {
  evt.preventDefault();
  userInfo.setUserInfo(popupProfile._getInputValues());
  popupProfile.close();
});
const popupAddCard = new PopupWithForm(addCardSelector, (evt) => {
  evt.preventDefault();
  section.addItem(section._renderer(popupAddCard._getInputValues()));
  popupAddCard.close();
});

const section = new Section({
  items: initialCards,
  renderer: (element) => {
    const card = new Card(element, selectorTemplate, popupImage.open);
    return card.createPost();
  }
}, cardListSelector)

section.renderItems();

const editProfileValidator = new FormValidator(validationConfig, editProfileForm);
const addCardValidator = new FormValidator(validationConfig, addCardForm);

profileEditButton.addEventListener('click', () => {
  popupProfile._setInputValues(userInfo.getUserInfo());
  popupProfile.open();
  editProfileValidator.resetValidation();
});

profileAddButton.addEventListener('click', () => {
  popupAddCard.open();
  addCardValidator.resetValidation();
});

editProfileValidator.enableValidation();
addCardValidator.enableValidation();

popupImage.setEventListeners(); 
popupAddCard.setEventListeners();
popupProfile.setEventListeners();