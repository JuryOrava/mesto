import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = submitForm;
    }

    setEventListeners() {
        this._popupCloseBtn = this._popupSelector.querySelector('.popup__close-img');
        this._popupCloseBtn.addEventListener('click', () => {
            this.close();
        });
        this._popupSelector.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup_opened')) {
                this.close();
            }
            this._popupSelector.querySelector('.popup__close').addEventListener('click', () => {
                this.close();
            });
        });
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }
  }