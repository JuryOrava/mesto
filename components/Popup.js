export default class Popup {
    constructor(popupSelector) {
      this._popupSelector = popupSelector;
    }
  
    open() {
      this._popupSelector.classList.add('popup_opened');
      this.setEventListeners();
    }
  
    close() {
      this._popupSelector.classList.remove('popup_opened');
      document.removeEventListener('keydown', this._handleEscClose);
    }
    
    _handleEscClose = (event) =>{
      if (event.key === 'Escape') {
        this.close();
      };
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
  }