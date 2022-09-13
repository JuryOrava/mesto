
let popup = document.querySelector('.popup_profile');
let profileEdit = document.querySelector('.profile__btn');
let profileEditClose = document.querySelector('.popup__close_profile');

let popupAddPlace = document.querySelector('.popup_place');
let addPlaceBtn = document.querySelector('.profile__add');
let placeAddClose = document.querySelector('.popup__close_place');

let profileName = document.querySelector('.profile__name-text');
let profileDescription = document.querySelector('.profile__description');
let profileEditSave = document.querySelector('.popup__form_profile');
let addPlaceBtnSave = document.querySelector('.popup__form_place');

let newName = document.querySelector('.popup__text_type_profile-name');
let newDescription = document.querySelector('.popup__text_type_profile-desc');

let placeName = document.querySelector('.popup__text_type_place-name');
let placeLink = document.querySelector('.popup__text_type_place-link');

function popupOpened() {
    popup.classList.add('popup_opened');

    newName.setAttribute('value', profileName.textContent);
    newDescription.setAttribute('value', profileDescription.textContent);
}

function popupAddPlaceOpened() {
    popupAddPlace.classList.add('popup_opened');
}

function popupClosed() {
    popup.classList.remove('popup_opened');
}

function popupAddPlaceClosed() {
    popupAddPlace.classList.remove('popup_opened');
}

function profileSave(evt) {
    evt.preventDefault();

    profileName.textContent = newName.value;
    profileDescription.textContent = newDescription.value;

    popupClosed();
}

profileEdit.addEventListener('click', popupOpened);
profileEditClose.addEventListener('click', popupClosed);

addPlaceBtn.addEventListener('click', popupAddPlaceOpened);
placeAddClose.addEventListener('click', popupAddPlaceClosed);

profileEditSave.addEventListener('submit', profileSave);

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
  
initialCards.forEach(function (element) {
  const placeElementStart = placeTemplate.querySelector('.elements__item').cloneNode(true);
  let popupPlaceImage = document.querySelector('.popup__place-image');
  
  placeElementStart.querySelector('.elements__image').src = element.link;
  placeElementStart.querySelector('.elements__title').textContent = element.name;
  placeElementStart.querySelector('.elements__image').alt = element.name;
  placeElementStart.querySelector('.elements__btn').addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__btn_active');
  });
  placeElementStart.querySelector('.elements__image-btn').addEventListener('click', function (evt) {
    popupPlaceImage.classList.add('popup_opened');

    let popupPlaceName = document.querySelector('.popup__place-name');
    let popupPlaceLink = document.querySelector('.popup__place-img');
       
    popupPlaceName.textContent = element.name;
    popupPlaceLink.setAttribute('src', element.link);
  });
  placeElementStart.querySelector('.elements__delete').addEventListener('click', function (evt) {
    placeElementStart.remove();
  });

  placeContainer.append(placeElementStart)
});

function addPlace(evt) {
  evt.preventDefault();

  const placeElement = placeTemplate.querySelector('.elements__item').cloneNode(true);
  let popupPlaceImage = document.querySelector('.popup__place-image');
    
  placeElement.querySelector('.elements__image').src = placeLink.value;
  placeElement.querySelector('.elements__title').textContent = placeName.value;
  placeElement.querySelector('.elements__image').alt = placeName.value;
  placeElement.querySelector('.elements__btn').addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__btn_active');
  });
  placeElement.querySelector('.elements__image-btn').addEventListener('click', function (evt) {
      popupPlaceImage.classList.add('popup_opened');
         
      let popupPlaceName = document.querySelector('.popup__place-name');
      let popupPlaceLink = document.querySelector('.popup__place-img');
         
      popupPlaceName.textContent = placeName.value;
      popupPlaceLink.setAttribute('src', placeLink.value);
  });
  placeElement.querySelector('.elements__delete').addEventListener('click', function (evt) {
    placeElement.remove();
  });
    
  placeContainer.prepend(placeElement);

  popupAddPlaceClosed();
}

addPlaceBtnSave.addEventListener('submit', addPlace);

let popupPlaceImage = document.querySelector('.popup__place-image');
popupPlaceImage.querySelector('.popup__close_place-image').addEventListener('click', function (evt) {
  popupPlaceImage.classList.remove('popup_opened');
});