class UserInfo{
  constructor({nameSelector, aboutSelector}){
    this._userName = document.querySelector(nameSelector);
    this._userAbout = document.querySelector(aboutSelector);

  }
  getUserInfo(){
    this._userName.value = userName.textContent;
    this._userAbout.value = userAbout.textContent;
  }

  setUserInfo(){
    userName.textContent = this._userName.value;
    userAbout.textContent = this._userAbout.value;
  }
}