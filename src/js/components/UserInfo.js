
export default class UserInfo {
  constructor(userData){
    this._userData = userData;
    this._userName = userData.userName;
    this._userJob = userData.userJob;    
  }

  getUserInfo(){
    return(this._userData);
  }

  setUserInfo(labelUserName, labelUserJob){
    labelUserName.textContent = this._userName;
    labelUserJob.textContent = this._userJob;
  }
  
}

export {UserInfo};