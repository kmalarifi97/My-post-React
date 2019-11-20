import apiUrl from '../apiConfig'
import axios from 'axios'





export const getItems= ()=>{
  return axios.get(`${apiUrl}/items`);

}
export const gitComments= ()=>{
  return axios.get(`${apiUrl}/comments`);

}



export const deleteItem=(id,token)=>{
  //return axios.delete(`${apiUrl}/items/${id}`)
  return axios({
    method:'DELETE',
    url:apiUrl+ `/items/${id}`,
    headers:{
      "Authorization" : `bearer ${token}`
    }

  })
}

export const editItem=(id,token, data)=>{
  //return axios.delete(`${apiUrl}/items/${id}`)
  return axios({
    method:'PATCH',
    url:apiUrl+ `/items/${id}`,
    data,
    headers:{
      "Authorization" : `bearer ${token}`
    }

  })
}
//====================================================================================================================
export const createComment = ( comment,  itemId)=> {
  //console.log(token,"api items")
    return axios({
      method: 'POST',
      url: apiUrl + '/comments',
      data: {
        comment: {
          comment: comment,
          itemId: itemId
         
        }
      }
      // headers:{
      //   "Authorization" : `bearer ${token}`
      // }
    })
  }
//====================================================================================================================




export const itemPost = (items,token)=> {
//console.log(token,"api items")
  return axios({
    method: 'POST',
    url: apiUrl + '/items',
    data: {
      item: {
        title: items.title,
        text: items.text,
       
      }
    },
    headers:{
      "Authorization" : `bearer ${token}`
    }
  })
}
export const signUp = credentials => {
  return axios({
    method: 'POST',
    url: apiUrl + '/sign-up',
    data: {
      credentials: {
        email: credentials.email,
        password: credentials.password,
        password_confirmation: credentials.passwordConfirmation
      }
    }
  })
}


export const signIn = credentials => {
  return axios({
    url: apiUrl + '/sign-in',
    method: 'POST',
    data: {
      credentials: {
        email: credentials.email,
        password: credentials.password
      }
    }
  })
}

export const signOut = user => {
  return axios({
    url: apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${user.token}` // FOR EXPRESS
      // 'Authorization': `Token ${user.token}` // FOR RAILS
    }
  })
}

export const changePassword = (passwords, user) => {
  return axios({
    url: apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${user.token}` // FOR EXPRESS
      // 'Authorization': `Token ${user.token}` // FOR RAILS
    },
    data: {
      passwords: {
        old: passwords.oldPassword,
        new: passwords.newPassword
      }
    }
  })



}
