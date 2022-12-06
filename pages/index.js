import {popupAddImage, profileAva, popupEditFoto, popupProfileInputName, popupProfileInputDesc, popupAddPlaceBtn, popupAddPlace, profileEdit, enableValidationSet, popupProfile, initialCards} from '../utils/constants.js';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import Api from '../components/Api.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-54',
  headers: {
    authorization: '1bade37d-71e9-4ab5-a8c1-c0fae706e629',
    'Content-Type': 'application/json'
  },
});

function renderLoading(isLoading, popup, btn, text) {
  if (isLoading) {
    btn.textContent = 'Сохранение...';
  }
  else {
    btn.textContent = text;
    popup.classList.remove('popup_opened');
  }
}

const cardList = new Section({
  renderer: (item, userId) => {
    const cardElement = createCard(item, userId)
    cardList.addItem(cardElement);
  }
}, '.elements');


Promise.all([
  api.getUserInfo(),
  api.getInitialCards()
])
.then((values)=>{ 
  userInfoServer(values[0]);
  cardList.renderItems(values[1], values[0]._id);
})
.catch((err)=>{
  console.log(err);
});

const formValidatorProfile = new FormValidator(enableValidationSet, popupProfile);
formValidatorProfile.enableValidation();

const formValidatorPlace = new FormValidator(enableValidationSet, popupAddPlace);
formValidatorPlace.enableValidation();

const formValidatorImage = new FormValidator(enableValidationSet, popupAddImage);
formValidatorImage.enableValidation();

const popupPlace = new PopupWithForm('.popup_place', callSubmitFormMesto);
popupPlace.setEventListeners();

const popupProfiles = new PopupWithForm('.popup_profile', callSubmitFormProfile);
popupProfiles.setEventListeners();

const popupProfilesFoto = new PopupWithForm('.popup_profile-foto', callSubmitFormEditFoto);
popupProfilesFoto.setEventListeners();

const popupDeleteImage = new PopupWithConfirmation('.popup_del-place', callSubmitFormDelFoto);
popupDeleteImage.setEventListeners();

const popupImage = new PopupWithImage('.popup_place-image');
popupImage.setEventListeners();

function handleCardClick(name, link) {
  popupImage.open(name, link);
}

function handleCardDelFotoClick (id, element, removeCard) {
  popupDeleteImage.open(id, element, removeCard);
}

function callSubmitFormDelFoto (obj, popup, btn, text, element, removeCard) {
  api.deleteCard(obj)
  .then(() => {
    removeCard(element)
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    renderLoading(false, popup, btn, text)
  });
  renderLoading(true, popup, btn, text);
}

function callSubmitFormEditFoto (obj, popup, btn, text) {
  api.editProfileAvatar(obj)
  .then(() => {
    profileAva.setAttribute('src', obj.link)
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    renderLoading(false, popup, btn, text)
  });
  renderLoading(true, popup, btn, text)
}

const userInfo = new UserInfo('.profile__name-text', '.profile__description', '.profile__image');

function userInfoServer(obj) {
  userInfo.setUserInfo(obj);
}

function callSubmitFormProfile(obj, popup, btn, text) {
  api.editUserInfo(obj)
  .then((res) => {
    userInfo.setUserInfo(res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    renderLoading(false, popup, btn, text)
  });
  renderLoading(true, popup, btn, text)
}

function createCard(item, userId) {
  const card = new Card(item, '#place-template', handleCardClick, handleCardDelFotoClick, likeCard, deleteLikeCard, userId, handleLikeCard, handleDislikeCard);
  const cardElement = card.generateCard();

  return cardElement
}

function handleLikeCard() {

}

function likeCard (element, id, likeLength, setLikeCount) {
  api.likeCard(id)
  .then(() => {
    let count = likeLength.textContent = Number(likeLength.textContent) + 1;
    setLikeCount(element, count, likeLength)
  })
  .catch((err) => {
    console.log(err);
  });
}

function handleDislikeCard() {

}

function deleteLikeCard(element, id, likeLength, setLikeCount) {
  api.deleteLikeCard(id)
  .then(() => {
    let count = likeLength.textContent = Number(likeLength.textContent) - 1;
    setLikeCount(element, count, likeLength);
  })
  .catch((err) => {
    console.log(err);
  });
} 

function callSubmitFormMesto(items, popup, btn, text) {
  api.addCard(items)
  .then((result) => {
    cardList.prependItem(createCard(result));
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    renderLoading(false, popup, btn, text)
  });
  renderLoading(true, popup, btn, text)
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

popupEditFoto.addEventListener('click', function () {
  popupProfilesFoto.open();

  formValidatorPlace.resetValidation();
});