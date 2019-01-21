import {ADD_SIZE,GET_SIZE,DELETE_USERS,UPDATE_SIZE} from '../constants/index'
const initialState={
    users:{
        id:''
    }
}



export default   function(state=[], action) {

    switch(action.type){
        case ADD_SIZE:
            return {...state, size: action.payload}
        case GET_SIZE:
             return {...state, getSize: action.payload}

             case DELETE_USERS:
              const deleteSize =initialState.users.filter(users =>users.id !== action.id)
              return deleteSize
             case UPDATE_SIZE: {
                const size = action.payload.data;
                return {
                  ...state,
                  sizes: state.sizes.map(item => item._id === size._id ? size : item),
                  errors: {},
                  loading: false
                }
              }
        default:
            return state;
    }
}