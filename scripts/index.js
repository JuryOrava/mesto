import Card from './Card.js';
import FormValidator from './FormValidator.js';

const popupProfile = document.querySelector('.popup_profile');
const profileEdit = document.querySelector('.profile__btn');

const popupAddPlace = document.querySelector('.popup_place');
const popupAddPlaceBtn = document.querySelector('.profile__add');

const profileName = document.querySelector('.profile__name-text');
const profileDescription = document.querySelector('.profile__description');
const profileEditSave = document.querySelector('.popup__form_profile');
const placeBtnSaveAdd = document.querySelector('.popup__form_place');

const newName = document.querySelector('.popup__text_type_profile-name');
const newDescription = document.querySelector('.popup__text_type_profile-desc');

const placeName = document.querySelector('.popup__text_type_place-name');
const placeLink = document.querySelector('.popup__text_type_place-link');

const popupPlaceImage = document.querySelector('.popup_place-image');

const popupPlaceImageName = document.querySelector('.popup__place-name');
const popupPlaceImageElem = document.querySelector('.popup__place-img');

const elements = document.querySelector('.elements')

const enableValidationSet = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__btn',
  inactiveButtonClass: 'popup__btn_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
});

const FormValidatorProfile = new FormValidator(enableValidationSet, popupProfile);
const FormValidatorPlace = new FormValidator(enableValidationSet, popupAddPlace);

FormValidatorProfile.enableValidation();
FormValidatorPlace.enableValidation();

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

const popupList = document.querySelectorAll('.popup');

popupList.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    popup.querySelector('.popup__close').addEventListener('click', (evt) => {
      closePopup(popup);
    });
  });
});

function openPopup(popup) {
  popup.classList.add('popup_opened');

  FormValidatorPlace.resetValidation();

  document.addEventListener('keydown', closeByEsc);
} 

function openProfilePopup() {
  newName.value = profileName.textContent;
  newDescription.value = profileDescription.textContent;

  openPopup(popupProfile);
}

function openAddPlacePopup() {
  placeName.value = '';
  placeLink.value = '';

  openPopup(popupAddPlace);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');

  document.removeEventListener('keydown', closeByEsc);
}

function saveProfile(evt) {
    evt.preventDefault();

    profileName.textContent = newName.value;
    profileDescription.textContent = newDescription.value;

    closePopup(popupProfile);
}

function createCard(item) {
  const card = new Card(item, '#place-template', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement
}

initialCards.forEach((item) => {
  elements.append(createCard(item));
});

function addCard(evt) {
  evt.preventDefault();
    
  elements.prepend(createCard({name: placeName.value, link: placeLink.value}));

  closePopup(popupAddPlace);
}

function handleCardClick(name, link) {
  popupPlaceImageName.textContent = name;
  popupPlaceImageElem.setAttribute('src', link);
  popupPlaceImageElem.setAttribute('alt', name);

  openPopup(popupPlaceImage);
}

function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup); 
  }
}

profileEdit.addEventListener('click', openProfilePopup) 
  
popupAddPlaceBtn.addEventListener('click', function (evt) {
  openAddPlacePopup();
});
  
profileEditSave.addEventListener('submit', saveProfile);

placeBtnSaveAdd.addEventListener('submit', addCard);