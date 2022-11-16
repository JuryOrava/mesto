import PopupWithForm from './PopupWithForm.js';
import { newName, newDescription, profileEditSave } from '../utils/constants.js';

export default class PopupWithFormProfile extends PopupWithForm {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = submitForm;
    }

    _getInputValues(){
        this._names = newName.value;
        this._descriptions = newDescription.value;
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

        profileEditSave.addEventListener('submit', (evt) => {
            evt.preventDefault();

            this._getInputValues();

            this._submitForm(this._names, this._descriptions);
              
            this.close();
        });
    }

    close() {
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }
  }