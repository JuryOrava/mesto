import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector, submitForm);
        this._inputNone = document.querySelector('.popup__none-input');
        this._submitForm = submitForm;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._popup.querySelectorAll('.popup__text');
        this._popup = document.querySelector(popupSelector);
        this._popupBtn = this._popup.querySelector('.popup__btn');
        this._popupBtnText = this._popupBtn.textContent;
    }

    _getInputValues() { 
        this._formValues = {};
        this._inputList.forEach(input => {
          this._formValues[input.name] = input.value;
        });

        return this._formValues;
      } 
    
    open(id, element, removeCard) {
        super.open();
        this._element = element;
        this._inputNone.setAttribute('value', id);
        this._removeCard = removeCard;
      }

    setEventListeners() {
        super.setEventListeners();

        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            
            this._submitForm(this._getInputValues(), this._popup, this._popupBtn, this._popupBtnText, this._element, this._removeCard);
        });
    }
}