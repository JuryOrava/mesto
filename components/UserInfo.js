import { popupProfileInputName, popupProfileInputDesc } from '../utils/constants.js';

export default class UserInfo {
    constructor(nameSelector, descriptionSelector) {
      this._nameSelector = nameSelector;
      this._descriptionSelector = descriptionSelector;
    }

    getUserInfo(){
        popupProfileInputName.value = this._nameSelector.textContent;
        popupProfileInputDesc.value = this._descriptionSelector.textContent;
    }

    setUserInfo(name, description){
        this._nameSelector.textContent = name;
        this._descriptionSelector.textContent = description;
    }
  }