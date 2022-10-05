const popupProfile = document.querySelector('.popup_profile');
const profileEdit = document.querySelector('.profile__btn');
const profileEditClose = document.querySelector('.popup__close_profile');

const popupAddPlace = document.querySelector('.popup_place');
const popupAddPlaceBtn = document.querySelector('.profile__add');
const placeAddClose = document.querySelector('.popup__close_place');

const profileName = document.querySelector('.profile__name-text');
const profileDescription = document.querySelector('.profile__description');
const profileEditSave = document.querySelector('.popup__form_profile');
const placeBtnSaveAdd = document.querySelector('.popup__form_place');

const newName = document.querySelector('.popup__text_type_profile-name');
const newDescription = document.querySelector('.popup__text_type_profile-desc');

const placeName = document.querySelector('.popup__text_type_place-name');
const placeLink = document.querySelector('.popup__text_type_place-link');

const popupPlaceImage = document.querySelector('.popup_place-image');

const placeContainer = document.querySelector('.elements');
const placeTemplate = document.querySelector('#place-template').content;

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

function openProfilePopup() {
  popupProfile.classList.add('popup_opened');

  newName.setAttribute('value', profileName.textContent);
  newDescription.setAttribute('value', profileDescription.textContent);

  document.addEventListener('keydown', closePopupKey);
}

function openPopupAddPlace() {
  popupAddPlace.classList.add('popup_opened');

  document.addEventListener('keydown', closePopupKey);
}

function closePopup() {
  const popupClosed = document.querySelector('.popup_opened');
  popupClosed.classList.remove('popup_opened');

  document.removeEventListener('keydown', closePopupKey);
}

function saveProfile(evt) {
    evt.preventDefault();

    profileName.textContent = newName.value;
    profileDescription.textContent = newDescription.value;

    closePopup();
}

function createCard (element) {
  const placeElementStart = placeTemplate.querySelector('.elements__item').cloneNode(true); 
  const popupPlaceImage = document.querySelector('.popup_place-image');
  
  placeElementStart.querySelector('.elements__image').src = element.link;
  placeElementStart.querySelector('.elements__title').textContent = element.name;
  placeElementStart.querySelector('.elements__image').alt = element.name;
  placeElementStart.querySelector('.elements__btn').addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__btn_active');
  });
  placeElementStart.querySelector('.elements__image-btn').addEventListener('click', function (evt) {
    popupPlaceImage.classList.add('popup_opened');

    const popupPlaceName = document.querySelector('.popup__place-name');
    const popupPlaceLink = document.querySelector('.popup__place-img');
       
    popupPlaceName.textContent = element.name;
    popupPlaceLink.setAttribute('src', element.link);
    popupPlaceLink.setAttribute('alt', element.name);
  });
  placeElementStart.querySelector('.elements__delete').addEventListener('click', function (evt) {
    placeElementStart.remove();
  });
  return placeElementStart;
} 

initialCards.forEach((element) => {
  createCard (element);
  const result = createCard (element);
  placeContainer.append(result);
});

function addCard(evt) {
  evt.preventDefault();

  const placeArr = [];
  placeArr.push({name: placeName.value, link: placeLink.value});

  placeArr.forEach((element) => {
    createCard (element);
    const result = createCard (element);
    placeContainer.prepend(result);
  });
  closePopup();
}

function closePopupKey(evt) {
  if (evt.key === 'Escape') {
    closePopup();
  }
}

profileEdit.addEventListener('click', openProfilePopup);
profileEditClose.addEventListener('click', closePopup);
  
popupAddPlaceBtn.addEventListener('click', openPopupAddPlace);
placeAddClose.addEventListener('click', closePopup); 
  
profileEditSave.addEventListener('submit', saveProfile);

placeBtnSaveAdd.addEventListener('submit', addCard);

popupPlaceImage.querySelector('.popup__close_place-image').addEventListener('click', function (evt) {
  popupPlaceImage.classList.remove('popup_opened');
});

document.addEventListener('click', function (evt) {
  if (evt.target.closest(".popup__container")) {
    evt.stopPropagation();
  }
  else if (evt.target.closest(".popup")) {
    closePopup();
  }
});