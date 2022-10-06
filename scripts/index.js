const popupProfile = document.querySelector('.popup_profile');
const profileEdit = document.querySelector('.profile__btn');
const profileEditClose = document.querySelector('.popup__close_profile');

const popupAddPlace = document.querySelector('.popup_place');
const popupAddPlaceBtn = document.querySelector('.profile__add');
const placeAddClose = document.querySelector('.popup__close_place');
const placeAddBtn = document.querySelector('.popup__btn-place');

const profileName = document.querySelector('.profile__name-text');
const profileDescription = document.querySelector('.profile__description');
const profileEditSave = document.querySelector('.popup__form_profile');
const placeBtnSaveAdd = document.querySelector('.popup__form_place');

const newName = document.querySelector('.popup__text_type_profile-name');
const newDescription = document.querySelector('.popup__text_type_profile-desc');

const placeName = document.querySelector('.popup__text_type_place-name');
const placeLink = document.querySelector('.popup__text_type_place-link');

const popupPlaceName = document.querySelector('.popup__place-name');
const popupPlaceLink = document.querySelector('.popup__place-img');

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

const popupList = Array.from(document.querySelectorAll('.popup'));
popupList.forEach(function (element) {
    element.addEventListener('click', function (evt) {
      if (evt.target.closest(".popup__container") || evt.target.closest(".popup__place-container")) {
      }
      else if (element.classList.contains("popup")) {
        closePopup(element);
      }
    });
  });

function openPopup(popup) {
  popup.classList.add('popup_opened');

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

  placeAddBtn.classList.add('popup__btn_inactive');
  placeAddBtn.setAttribute("disabled", "true");
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

function createCard (element) {
  const placeElementStart = placeTemplate.querySelector('.elements__item').cloneNode(true); 
  
  placeElementStart.querySelector('.elements__image').src = element.link;
  placeElementStart.querySelector('.elements__title').textContent = element.name;
  placeElementStart.querySelector('.elements__image').alt = element.name;
  placeElementStart.querySelector('.elements__btn').addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__btn_active');
  });
  placeElementStart.querySelector('.elements__image-btn').addEventListener('click', function (evt) {
    openPopup(popupPlaceImage);
       
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

  const result = createCard ({name: placeName.value, link: placeLink.value}); 
  placeContainer.prepend(result);

  closePopup(popupAddPlace);
}

function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup); 
  }
} 

profileEdit.addEventListener('click', openProfilePopup) 

profileEditClose.addEventListener('click', function (evt) {
  closePopup(popupProfile);
});
  
popupAddPlaceBtn.addEventListener('click', function (evt) {
  openAddPlacePopup();
});

placeAddClose.addEventListener('click', function (evt) {
  closePopup(popupAddPlace);
}); 
  
profileEditSave.addEventListener('submit', saveProfile);

placeBtnSaveAdd.addEventListener('submit', addCard);

popupPlaceImage.querySelector('.popup__close_place-image').addEventListener('click', function (evt) {
  closePopup(popupPlaceImage);
});