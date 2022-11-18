import {elements, popupProfileInputName, popupProfileInputDesc, popupAddPlaceBtn, popupAddPlace, profileEdit, enableValidationSet, popupProfile, initialCards} from '../utils/constants.js';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

const formValidatorProfile = new FormValidator(enableValidationSet, popupProfile);
const formValidatorPlace = new FormValidator(enableValidationSet, popupAddPlace);

const popupPlace = new PopupWithForm('.popup_place', callSubmitFormMesto);
popupPlace.setEventListeners();
const popupProfiles = new PopupWithForm('.popup_profile', callSubmitFormProfile);
popupProfiles.setEventListeners();
const popupImage = new PopupWithImage('.popup_place-image');
popupImage.setEventListeners();

formValidatorProfile.enableValidation();
formValidatorPlace.enableValidation();

const cardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const cardElement = createCard(item)
    cardList.addItem(cardElement);
  }
}, '.elements');

cardList.renderItems();

function handleCardClick(name, link) {
  popupImage.open(name, link);
}

const userInfo = new UserInfo('.profile__name-text', '.profile__description');

function callSubmitFormProfile(obj) {
  userInfo.setUserInfo(obj);
}

function createCard(item) {
  const card = new Card(item, '#place-template', handleCardClick);
  const cardElement = card.generateCard();

  return cardElement
}

function callSubmitFormMesto(items) {
  cardList.prependItem(createCard(items));
}

profileEdit.addEventListener('click', function () {
  popupProfiles.open();

  popupProfileInputName.value = userInfo.getUserInfo().name;
  popupProfileInputDesc.value = userInfo.getUserInfo().description;
}); 
  
popupAddPlaceBtn.addEventListener('click', function () {
  popupPlace.open();

  formValidatorPlace.resetValidation();
});
  
