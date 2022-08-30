
let popup = document.querySelector('.popup');
let profileEdit = document.querySelector('.profile__btn');
let profileEditClose = document.querySelector('.popup__close');

function popupOpened() {
    popup.classList.add('popup_opened');
}

function popupClosed() {
    popup.classList.remove('popup_opened');
}

profileEdit.addEventListener('click', popupOpened);
profileEditClose.addEventListener('click', popupClosed);

let profileName = document.getElementById('name');
let profileDescription = document.getElementById('description');
let profileEditSave = document.querySelector('.popup__btn');

function profileSave(evt) {
    evt.preventDefault();

    let newName = document.getElementById('newName');
    let newDescription = document.getElementById('newDescription');

    profileName.textContent = newName.value;
    profileDescription.textContent = newDescription.value;

    popup.classList.remove('popup_opened');
}

profileEditSave.addEventListener('click', profileSave);