import {FETCH_SOCIETY_DROP,FETCH_SIZEMASTER_DROP} from '../constants/index'
export default function(state={},action){

    switch(action.type){
        case FETCH_SOCIETY_DROP:
            return{...state,list0:action.payload}
        case FETCH_SIZEMASTER_DROP:
            return{...state,list4:action.payload}
      
        default:
            return state;
    }

}