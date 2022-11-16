import PopupWithForm from './PopupWithForm.js';
import { placeName, placeLink, placeBtnSaveAdd } from '../utils/constants.js';

export default class PopupWithFormMesto extends PopupWithForm {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = submitForm;
    }

    _getInputValues() {
        this._inrormationInput = [
            {
                name: placeName.value, 
                link: placeLink.value
            }]
        console.log(this._inrormationInput)
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

        placeBtnSaveAdd.addEventListener('submit', (evt) => {
            evt.preventDefault();
            
            this._getInputValues();

            this._submitForm(this._inrormationInput);

            this.close();
        });
    }

    close() {
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);

        placeName.value = '';
        placeLink.value = '';
    }
  }