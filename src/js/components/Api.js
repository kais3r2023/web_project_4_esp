export class Api{
  constructor ({baseUrl, headers}){
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  //Profile
  defaultProfile(){
    return fetch(`${this._baseUrl}/users/me`,{
      headers:this._headers
    })
    .then((res)=>{
      if(res.ok){
        console.log("Si llega ok");
        console.log(res.status);
        return(res.json());
      }
    })
  }
  updateAvatar(data){
    return fetch(`${this._baseUrl}/users/me/avatar`,{
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then((res)=>res.json())
    .then((result)=>{
      console.log("resultado update",result)
      return result;
    })
  }
  updateProfile(data){
    return fetch(`${this._baseUrl}/users/me`,{
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then((res)=>res.json())
    .then((result)=>{
      console.log("resultado update",result)
      return result;
    })
  }
  // Cards
  getCards(){
    return fetch(`${this._baseUrl}/cards`,{
      headers:this._headers
    })
    .then((res)=> res.json())
    .then((result)=>{
      console.log(result);
      return result;
    });
  }
  
  addNewCard(data){
    return fetch(`${this._baseUrl}/cards`,{
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then((result)=>{
      console.log("resultado update",result);
      return result;
    });
  }

  deleteCard(cardId){
    return fetch(`${this._baseUrl}/cards/${cardId}`,{
      method: "DELETE",
      headers: this._headers,
    })
    .then(res=> res.json())
    .then(result =>{
      console.log("resultado delete card".result);
      return result
    })

  }
//Likes
addLike(cardId) {
  return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: this._headers,
  })
  .then((res)=>{
    if(res.ok){
      return res.json();
    }
    return Promise.reject(res.status);
  })

  .catch((error) => {
      console.log(`Error: ${error}`);
  });
}
deleteLike(cardId){
  return fetch(`${this._baseUrl}/cards/likes/${cardId}`,{
    method: "DELETE",
    headers: this._headers,
  })
  .then((res)=>{
    if(res.ok){
      return res.json();
    }
    return Promise.reject(res.status);
  })
}

}