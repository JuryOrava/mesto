export default class Card {
    constructor(data, templateSelector, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    }
    
    _getTemplate() {
        const cardElement = document
          .querySelector(this._templateSelector)
          .content
          .querySelector('.elements__item')
          .cloneNode(true);
    
        return cardElement;
    }
    
    generateCard = () => {
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.elements__image'); 
        this._cardTitle = this._element.querySelector('.elements__title');
        this._likeButton = this._element.querySelector('.elements__btn');
        this._delButton = this._element.querySelector('.elements__delete')

        this._cardImage.src = this._link;
        this._cardTitle.textContent = this._name;
        this._cardImage.alt = this._name;

        this._setEventListener ();

        return this._element;
    }

    _setEventListener () {
        this._likeButton.addEventListener('click', function (evt) {
            evt.target.classList.toggle('elements__btn_active');
        });
        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        });
        this._delButton.addEventListener('click', () => {
            this._element.remove();
        });
    }
}
