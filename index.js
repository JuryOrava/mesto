
let popup = document.querySelector('.popup');
let profileEdit = document.querySelector('.profile__btn');
let profileEditClose = document.querySelector('.popup__close');

let profileName = document.querySelector('.profile__name-text');
let profileDescription = document.querySelector('.profile__description');
let profileEditSave = document.querySelector('.popup__btn');

let newName = document.querySelectorAll('.popup__text')[0];
let newDescription = document.querySelectorAll('.popup__text')[1];

function popupOpened() {
    popup.classList.add('popup_opened');
}

function popupClosed() {
    popup.classList.remove('popup_opened');
}

function profileSave(evt) {
    evt.preventDefault();

    profileName.textContent = newName.value;
    profileDescription.textContent = newDescription.value;

    popupClosed();
}

profileEdit.addEventListener('click', popupOpened);
profileEditClose.addEventListener('click', popupClosed);

profileEditSave.addEventListener('submit', profileSave);