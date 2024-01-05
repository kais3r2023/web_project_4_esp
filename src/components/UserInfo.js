
export default class UserInfo {
  constructor(userData){
    this._userData = userData;
    this._userName = userData.userName;
    this._userAbout = userData.userAbout;    
  }

  getUserInfo(){
    return(this._userData);
  }

  setUserInfo(labelUserName, labelUserAbout){
    labelUserName.textContent = this._userName;
    labelUserAbout.textContent = this._userAbout;
  }
  
}

export {UserInfo};
