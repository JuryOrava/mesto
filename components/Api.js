export default class Api {
    constructor(options) {
      this._baseUrl = options.baseUrl;
    }
  
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: {
                authorization: '1bade37d-71e9-4ab5-a8c1-c0fae706e629'
            }
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            }
            // если ошибка, отклоняем промис
            return Promise.reject(`Ошибка: ${res.status}`);
        });
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                authorization: '1bade37d-71e9-4ab5-a8c1-c0fae706e629'
            }
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        });
    }

    deleteCard(obj) {
        return fetch(`${this._baseUrl}/cards/${obj.id}`, {
            method: 'DELETE',
            headers: {
                authorization: '1bade37d-71e9-4ab5-a8c1-c0fae706e629',
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        });
    }

    editProfileAvatar(obj) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: '1bade37d-71e9-4ab5-a8c1-c0fae706e629',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: obj.link
            })
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }

    editUserInfo(obj) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: '1bade37d-71e9-4ab5-a8c1-c0fae706e629',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: obj.profileName,
              about: obj.profileDesc
            })
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }

    likeCard(id) {
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
            method: 'PUT',
            headers: {
                authorization: '1bade37d-71e9-4ab5-a8c1-c0fae706e629',
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        });
    }

    deleteLikeCard(id) {
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
            method: 'DELETE',
            headers: {
                authorization: '1bade37d-71e9-4ab5-a8c1-c0fae706e629',
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        });
    }

    addCard = (items) => {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: {
                authorization: '1bade37d-71e9-4ab5-a8c1-c0fae706e629',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: items.name,
                link: items.link
            })
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }
}