import {GET_SERVICE,REMOVE_SERVICE} from '../../constants/index';

const initialState={
    item:[]
}


export default function(state=initialState, action) {

    switch(action.type){
        case GET_SERVICE:
            return {...state, item: action.payload}

        case REMOVE_SERVICE:
            const deleteduser = initialState.item.filter(users => users.id !== action.id)
            return deleteduser
        default:
            return state;
    
    }   
    

}

