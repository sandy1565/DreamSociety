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
                    .then(getUsers())
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