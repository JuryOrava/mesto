import PopupWithForm from './PopupWithForm.js';

export default class PopupWithConfirmation extends PopupWithForm {
    constructor(popupSelector, submitForm) {
        super(popupSelector, submitForm);
        this._inputNone = document.querySelector('.popup__none-input');
        this._submitForm = submitForm;
        this._form = this._popup.querySelector('.popup__form');
    }
    open(id, element) {
        super.open();
        this._element = element;
        this._inputNone.setAttribute('value', id);
      }
    removePlace() {
        this._form.addEventListener('submit', (evt) => {
            this._element.remove();
        });
    }
}