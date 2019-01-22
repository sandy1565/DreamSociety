import axios from 'axios';
import {URN,GET_SERVICE_TYPE} from '../constants/index';

export function getServiceTypes(serviceId){
    const request=fetch(`${URN}/service`,serviceId,{method:'GET'})
    .then((response)=> response.json())
    return{
        type:GET_SERVICE_TYPE,
        payload:serviceId
    }
}