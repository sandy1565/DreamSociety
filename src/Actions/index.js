import axios from 'axios';
import{URN} from '../constants/index';

export function addUser(values) {
    const request = axios.post(`${URN}/auth/signup`, values , { method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(values) })
                    .then(response => response.data)
                    .then(result => result)
                    .then(getUsers(values))
                    .catch(error=> error);
                    return {
                        type: 'ADD_USER',
                        payload: request
                    }
}

export function getUsers(){
    const request = axios.get(`${URN}/user`, {method: 'GET'}).then((response) => response.data)
    .then()

    return {
        type:'GET_USERS',
        payload:request
    }
}

export function getRoles(){
    const request = axios.get(`${URN}/user/role`, {method:'GET'})
    .then((response =>response.data))

    return {
        type:'GET_ROLES',
        payload:request
    }
}

export function deleteUsers(id){
   axios.delete(`${URN}/User/` +id)
    .then((response) => response.data)

    return {
        type:'DELETE_USERS',
        payload:id
    }
}



export  default function AddTower(values){
    const request = axios.post(`http://192.168.1.113:8081/api/tower`,values, {method: 'POST'})
    .then()
   console.log(request);
   
    return{
        type:  'ADD_TOWER',
        payload: request
    }
}


export function viewTower(){
const request  = fetch(`http://192.168.1.113:8081/api/tower`,{method: 'GET'})
.then(response => response.json())
return{
      type: 'GET_TOWER',
      payload: request
}
}

// export function deleteTowers(id){
//     const request = axios.delete('http://192.168.1.113:8081/api/tower1' +id)
//     .then((response) => response.data)

//     return {
//         type:'DELETE_TOWER',
//         payload:id
//     }
// }


export   function AddSize(values){
 
    const request =axios.post(`http://192.168.1.113:8081/api/size`,values,{method:'POST'})
     .then()
      return{  
          type:'ADD_SIZE',
          payload: request
      }

}

export function displaySize(){
    const request = fetch(`http://192.168.1.113:8081/api/size`,{method:'GET'})
    .then(response => response.json())
    return {
        type:'GET_SIZE',
        payload:request
    }
}

export function updateSize(size) {
    return dispatch => {
      return dispatch({
        type: 'UPDATE_SIZE',
        payload: axios.put(`http://192.168.1.113:8081/api/size1/${size._id}`, size)
      })
    }   
  }
//   export function deleteUsers(id){
//     const request = axios.delete('http://192.168.1.113:8081/api/size/1' +id)
//     .then((response) => response.data)

//     return {
//         type:'DELETE_SIZE',
//         payload:id
//     }
// }


//   export function editUsers(id, size_id,size_type) {
//     const request = axios.put(`{URL}/${id}`, {size_id,size_type})
// }


export function ViewEvent(){
const request = axios.get('http://192.168.1.113:8081/api/event').then((response)=>{
    response.data
})
return{
    type:'GET_EVENT',
    payload:request
}
}

export  function AddEvent(){
    const request= axios.post('http://192.168.1.113:8081/api/event').then()
    return{
        type:'POST_EVENT',
        payload:request
    }
}

