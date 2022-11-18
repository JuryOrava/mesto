import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._name = document.querySelector('.popup__place-name');
    this._image = document.querySelector('.popup__place-img');
  }

  open (name, link) {
    super.open();

    this._name.textContent = name;
    this._image.setAttribute('src', link);
    this._image.setAttribute('alt', name);
  }
}