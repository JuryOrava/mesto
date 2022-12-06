import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._popup = document.querySelector(popupSelector);
        this._submitForm = submitForm;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._popup.querySelectorAll('.popup__text');
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

    setEventListeners() {
        super.setEventListeners()

        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            
            this._submitForm(this._getInputValues(), this._popup, this._popupBtn, this._popupBtnText);

            //this.close();
        });
    }

    close() {
        super.close();

        this._inputList.forEach((element) => {
            element.value = '';
          });
    }
  }