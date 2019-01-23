import {ADD_VENDOR_MASTER} from '../../constants/index';

export default function(state={}, action) {

    switch(action.type){
        case ADD_VENDOR_MASTER:
            return {...state, vendor: action.payload} 
        default:
            return state;
    
    }
    

}