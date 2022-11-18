export default class UserInfo {
    constructor(nameSelector, descriptionSelector) {
      this._name = document.querySelector(nameSelector);
      this._description = document.querySelector(descriptionSelector);
    }

    getUserInfo(){
      this._information = {
        name: this._name.textContent,
        description: this._description.textContent
      };

      return this._information;
    }

    setUserInfo(obj){
        this._name.textContent = obj.profileName;
        this._description.textContent = obj.profileDesc;
    }
  }