import axios from 'axios';
import {URN,GET_DETAILS,FETCH_DETAILS,FETCH_DROP,FETCH_SIZE_DROP,FETCH_SOCIETY_DROP,FETCH_SIZEMASTER_DROP} from '../constants/index'

// const URL=`http://localhost:3001`;`

// export function getUser(){
//     const request = axios.get(`${URL}/userLogin`, { method: 'GET'})
//     .then(response => response.json());
//     return {
//         type:'user login',
//         payload:request
//     }
// }
// const  URL_ROOT = 'http://192.168.1.113:8081/api/flat/';


export  function AddDetails(values){
  
    const request= axios.post(`${URN}/flat/`,values)
    .then(response => response.data)
    .then(getDetails())
    // .then(getDetails())
 
    // this.setState({flatId:response,flatType:response,flatSize:response})
    // console.log(request)
    
    return{
        type:GET_DETAILS,
        payload:request
    }

}

export  function getDetails(){

    const request = fetch(`${URN}/flat/`,
    {method:'GET'})
    .then(response => response.json())
   
    return{

         type:FETCH_DETAILS,
         payload: request 
    }

}

export  function getDrop(){

    const request = axios.get(`${URN}/society`,)
    .then(response => response.data)
   
    return{

         type:FETCH_DROP,
         payload: request 
    }

}

export  function getSizeDrop(){

    const request = axios.get(`${URN}/size`,)
    .then(response => response.data)
   
    return{

         type:FETCH_SIZE_DROP,
         payload: request 
    }

}

export  function getSocietyNameDetails(){

    const request = axios.get(`${URN}/society`,)
    .then(response => response.data)
   
    return{

         type:FETCH_SOCIETY_DROP,
         payload: request 
    }

}

export  function getSizeTypeDetails(){

    const request = axios.get(`${URN}/size/`,)
    .then(response => response.data)
   
    return{

         type:FETCH_SIZEMASTER_DROP,
         payload: request 
    }

}
// export  function deleteEntry(id){

//     const request = axios.delete(`${URL_ROOT}/flatsIndex/` +id)
//     .then(response => response.data)
   
//     return{

//          type:'DELETE_DETAILS',
//          payload: request 
//     }

// }