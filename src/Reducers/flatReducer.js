import {FETCH_DETAILS} from '../constants/index'
export default function(state={},action){

    switch(action.type){
        case 'ADD_DETAILS':
            return{...state,list:action.payload}
        case FETCH_DETAILS:
            return{...state,list1:action.payload}
        default:
            return state;
    }

}