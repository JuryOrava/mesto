import {popupAddPlaceBtn, profileName, profileDescription, popupAddPlace, profileEdit, enableValidationSet, popupProfile, popupPlaceImage, initialCards, popupPlaceImageName, popupPlaceImageElem, containerSelector } from '../utils/constants.js';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithFormProfile from '../components/PopupWithFormProfile.js';
import PopupWithFormMesto from '../components/PopupWithFormMesto.js';
import UserInfo from '../components/UserInfo.js';

import './pages/index.css';

const formValidatorProfile = new FormValidator(enableValidationSet, popupProfile);
const formValidatorPlace = new FormValidator(enableValidationSet, popupAddPlace);

const popupPlace = new PopupWithFormMesto(popupAddPlace, callSubmitFormMesto);
const popupProfiles = new PopupWithFormProfile(popupProfile, callSubmitFormProfile);
const popupImage = new PopupWithImage(popupPlaceImage);

formValidatorProfile.enableValidation();
formValidatorPlace.enableValidation();

const cardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card(item, '#place-template', handleCardClick);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  }
}, containerSelector);

cardList.renderItems();

function handleCardClick(name, link) {
  popupPlaceImageName.textContent = name;
  popupPlaceImageElem.setAttribute('src', link);
  popupPlaceImageElem.setAttribute('alt', name);

  popupImage.open();
}

const userInfo = new UserInfo(profileName, profileDescription);

function callSubmitFormProfile(name, description) {
  userInfo.setUserInfo(name, description);
}

function callSubmitFormMesto(items) {
  const newCard = new Section({
    data: items,
    renderer: (item) => {
      const card = new Card(item, '#place-template', handleCardClick);
      const cardElement = card.generateCard();
      newCard.addNewItem(cardElement);
    }
  }, containerSelector);

  newCard.renderItems();
}

profileEdit.addEventListener('click', function () {
  popupProfiles.open();
  userInfo.getUserInfo();
}); 
  
popupAddPlaceBtn.addEventListener('click', function () {
  popupPlace.open();

  formValidatorPlace.resetValidation();
});
  
