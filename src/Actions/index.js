import axios from 'axios';


export function addUser(values) {
    const request = axios.post(`http://192.168.1.113:8081/api/auth/signup`, values , { method: 'POST',
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
    const request = axios.get(`http://192.168.1.113:8081/api/user`, {method: 'GET'}).then((response) => response.data)
    .then()

    return {
        type:'GET_USERS',
        payload:request
    }
}

export function getRoles(){
    const request = axios.get(`http://192.168.1.113:8081/api/user/role`, {method:'GET'})
    .then((response =>response.data))

    return {
        type:'GET_ROLES',
        payload:request
    }
}

export function deleteUsers(id){
   axios.delete('http://localhost:3001/User/' +id)
    .then((response) => response.data)

    return {
        type:'DELETE_USERS',
        payload:id
    }
}