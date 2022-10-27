export default class FormValidator {
    constructor(data) {
        this._formSelector = data.formSelector;
        this._inputSelector = data.inputSelector;
        this._submitButtonSelector = data.submitButtonSelector;
        this._inactiveButtonClass = data.inactiveButtonClass;
        this._inputErrorClass = data.inputErrorClass;
        this._errorClass = data.errorClass;
    }

    enableValidation = (settings) => {
        const formList = Array.from(document.querySelectorAll(this._formSelector));
        formList.forEach((formElement) => {
            this._setEventListeners(formElement, settings);
        });
    };
    
    _setEventListeners = (formElement, settings) => {
        const inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
        const buttonElement = formElement.querySelector(this._submitButtonSelector);
        
        this._toggleButtonState(inputList, buttonElement, settings);
        
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(formElement, inputElement, settings);
            
                this._toggleButtonState(inputList, buttonElement, settings);
            });
        });
    };
    
    _toggleButtonState = (inputList, buttonElement, settings) => {
        if (this._hasInvalidInput(inputList, settings)) {
          buttonElement.classList.add(this._inactiveButtonClass);
          buttonElement.setAttribute("disabled", "true");
        } else {
          buttonElement.classList.remove(this._inactiveButtonClass);
          buttonElement.removeAttribute("disabled");
        }
    }; 
      
    _hasInvalidInput = (inputList) => {
        return inputList.some((inputElement) => {
          return !inputElement.validity.valid;
        });
    };
    
    _showInputError = (formElement, inputElement, errorMessage) => {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    };
      
    _hideInputError = (formElement, inputElement) => {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    };
      
    _checkInputValidity = (formElement, inputElement, settings) => {
        if (!inputElement.validity.valid) {
            this._showInputError(formElement, inputElement, inputElement.validationMessage, settings);
        } else {
            this._hideInputError(formElement, inputElement, settings);
        }
    };
}