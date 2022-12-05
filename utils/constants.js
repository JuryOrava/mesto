export const popupProfile = document.querySelector('.popup_profile');
export const profileEdit = document.querySelector('.profile__btn');

export const popupAddPlace = document.querySelector('.popup_place');
export const popupAddPlaceBtn = document.querySelector('.profile__add');

export const popupAddImage = document.querySelector('.popup_profile-foto');

export const profileEditSave = document.querySelector('.popup__form_profile');
export const placeBtnSaveAdd = document.querySelector('.popup__form_place');

export const newName = document.querySelector('.popup__text_type_profile-name');
export const newDescription = document.querySelector('.popup__text_type_profile-desc');

export const placeName = document.querySelector('.popup__text_type_place-name');
export const placeLink = document.querySelector('.popup__text_type_place-link');

export const popupPlaceImage = document.querySelector('.popup_place-image');

export const popupPlaceImageName = document.querySelector('.popup__place-name');
export const popupPlaceImageElem = document.querySelector('.popup__place-img');

export const popupProfileInputName = document.querySelector('.popup__text_type_profile-name');
export const popupProfileInputDesc = document.querySelector('.popup__text_type_profile-desc');

export const elements = document.querySelector('.elements');

export const popupEditFoto = document.querySelector('.profile__edit-image');
export const profileAva = document.querySelector('.profile__image');

export const enableValidationSet = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__btn',
  inactiveButtonClass: 'popup__btn_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
});

export const initialCards = [
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