import { ADD_USER, GET_USERS, GET_ROLES } from '../constants'

const initialState = {
    users: {
        id: ''
    }
}

export default function(state=[], action) {
    if(typeof state === 'undefined') {
        return initialState
    }
    switch(action.type){
        case ADD_USER:
            return {...state, users: action.payload}
        case GET_USERS:
            return {...state, user: action.payload}
        case GET_ROLES:
            return {...state, userRole: action.payload}
        case 'DELETE_USERS':
            const deleteduser = initialState.users.filter(users => users.id !== action.id)
            return deleteduser
        default:
            return state;
    }

}