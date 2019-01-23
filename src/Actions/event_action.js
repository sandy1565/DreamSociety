import {authHeader} from '../helper/auth-header';
import axios from 'axios';
import {URN,GET_EVENT,POST_EVENT} from '../constants/index';


export function ViewEvent(){
    const request = axios.get(`${URN}/event`).then((response)=>{
        response.data
    })
    return{
        type:GET_EVENT,
        payload:request
    }
    }
    
    export function GetEventOrganiser(){
        const request = axios.get(`${URN}/eventOrganiser`).then((response)=>{
            response.data
        })
        return{
            type: 'GET_EVENT_ORGANISER',
            payload:request
        }
    }
    
    
    
    export  function AddEvent(){
        const request= axios.post(`${URN}/event`).then()
        return{
            type:POST_EVENT,
            payload:request
        }
    }