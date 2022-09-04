
let popup = document.querySelector('.popup');
let profileEdit = document.querySelector('.profile__btn');
let profileEditClose = document.querySelector('.popup__close');

let profileName = document.querySelector('.profile__name-text');
let profileDescription = document.querySelector('.profile__description');
let profileEditSave = document.querySelector('.popup__form');

let newName = document.querySelector('.popup__text_type_name');
let newDescription = document.querySelector('.popup__text_type_desc');

function popupOpened() {
    popup.classList.add('popup__opened');

    newName.setAttribute('value', profileName.textContent);
    newDescription.setAttribute('value', profileDescription.textContent);
}

function popupClosed() {
    popup.classList.remove('popup__opened');
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