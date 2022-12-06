export default class Card {
    constructor(data, templateSelector, handleCardClick, handleCardDelFotoClick, likeCard, deleteLikeCard, userId) {
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes.length;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._ownerId = data.owner._id;
        this._Id = data._id;
        this._handleCardDelFotoClick = handleCardDelFotoClick;
        this._likeCard = likeCard;
        this._deleteLikeCard = deleteLikeCard;
        this._likesId = data.likes;
        this._userId = userId;
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
        this._likeLength = this._element.querySelector('.elements__like-length');
        this._delButton = this._element.querySelector('.elements__delete');

        this._cardImage.src = this._link;
        this._cardTitle.textContent = this._name;
        this._cardImage.alt = this._name;
        this._likeLength.textContent = this._likes;

        this._setEventListener ();

        if (this._ownerId == this._userId) {
            this._delButton.classList.add('elements__delete_active');
        };

        this._likesId.forEach(element => {
            if (element._id == this._userId) {
                this._likeButton.classList.add('elements__btn_active');
            }
        });

        return this._element;
    }

    removeCard(element){
        element.remove()
    }

    setLikeCount(element, count, likeLength) {
        likeLength.textContent = count;
        element.classList.toggle('elements__btn_active');
    }

    _setEventListener () {
        this._likeButton.addEventListener('click', () => {
            if (this._likeButton.classList.contains("elements__btn_active") == false) {
                this._likeCard(this._likeButton, this._Id, this._likeLength, this.setLikeCount);
                
            }
            else {
                this._deleteLikeCard(this._likeButton, this._Id, this._likeLength, this.setLikeCount);
            }
        });
        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        });
        this._delButton.addEventListener('click', () => {
            this._handleCardDelFotoClick(this._Id, this._element, this.removeCard);
        });
    }
}
