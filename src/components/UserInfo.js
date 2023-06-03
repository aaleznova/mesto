export default class UserInfo {
 constructor( configInfo ) {
    this._nameElement = document.querySelector(configInfo.nameSelector);
    this._descriptionElement = document.querySelector(configInfo.descriptionSelector);
  }
      
  getUserInfo() {
    return {
      userName: this._nameElement.textContent,
      userDescription: this._descriptionElement.textContent
    }
  }
      
  setUserInfo(data) {
    this._nameElement.textContent = data.userName;
    this._descriptionElement.textContent = data.userDescription;
  }
}