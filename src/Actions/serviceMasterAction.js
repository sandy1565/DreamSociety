import axios from 'axios';
import {URN,GET_DETAIL,GET_SERVICE,ADD_SERVICE,REMOVE_SERVICE} from '../constants/index';

export function getServiceDetail(){
    const request=axios.get(`${URN}/serviceDetail`,{method:'GET'})
    .then(response =>response.data)
    return {
        type:GET_DETAIL,
        payload:request
    }
}

export function getServiceType(){
    const request =fetch(`${URN}/service`, { method: 'GET'})
    .then(response => response.json())
    return {
        type:GET_SERVICE,
        payload:request
    }
}

export function addServiceType(values){
    const request = axios.post(`${URN}/service`,values, { method: 'POST'}
    )
    .then()
    return {
        type:ADD_SERVICE,
        payload:request
    }
 
}
export function delServiceType(serviceId){
    const request = axios.delete(`${URN}/service` +serviceId,{method:'DELETE'})
    .then((response) => response.data)

    return {
        type:REMOVE_SERVICE,
        payload:serviceId
    }
}

