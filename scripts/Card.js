export default class Card {
    constructor(data, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
    }
    
    _getTemplate() {
        const cardElement = document
          .querySelector(this._templateSelector)
          .content
          .querySelector('.elements__item')
          .cloneNode(true);
    
        return cardElement;
    }
    
    generateCard = (openPopup) => {
        this._element = this._getTemplate();

        this._element.querySelector('.elements__image').src = this._link;
        this._element.querySelector('.elements__title').textContent = this._name;
        this._element.querySelector('.elements__image').alt = this._name;

        this._likeCard();

        this._openPopupImage(openPopup, this._name, this._link);

        this._delCard();

        return this._element;
    }

    _likeCard () {
        this._element.querySelector('.elements__btn').addEventListener('click', function (evt) {
            evt.target.classList.toggle('elements__btn_active');
        });
    }

    _openPopupImage = (openPopup, name, link) => {
        this._element.querySelector('.elements__image-btn').addEventListener('click', function (evt) {
            openPopup(document.querySelector('.popup_place-image'));

            document.querySelector('.popup__place-name').textContent = name;
            document.querySelector('.popup__place-img').setAttribute('src', link);
            document.querySelector('.popup__place-img').setAttribute('alt', name);
        });
    }

	_delCard = () => {
		this._element.querySelector('.elements__delete').addEventListener('click', () => {
            this._element.remove();
        }
    )};
}
