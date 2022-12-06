export default class UserInfo {
    constructor(nameSelector, descriptionSelector, avatarSelector, userId) {
      this._name = document.querySelector(nameSelector);
      this._description = document.querySelector(descriptionSelector);
      this._avatar = document.querySelector(avatarSelector);
      this._userId = userId;
    }

    getUserInfo(){
      this._information = {
        name: this._name.textContent,
        description: this._description.textContent
      };

      return this._information;
    }

    setUserInfo(obj){
        this._name.textContent = obj.name;
        this._description.textContent = obj.about;
        this._avatar.setAttribute('src', obj.avatar);
    }
  }