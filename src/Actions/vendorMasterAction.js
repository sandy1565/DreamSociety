import {URN,GET_SERVICE_TYPE} from '../constants/index';
import {authHeader} from '../helper/auth-header';

export function getServiceTypes(serviceId){

    const request=fetch(`${URN}/service`,serviceId,{method:'GET' ,headers:authHeader()})
    .then((response)=> response.json())
    return{
        type:GET_SERVICE_TYPE,
        payload:request
    }
}