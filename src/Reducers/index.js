import {combineReducers} from 'redux';
// import {reducer as formReducer} from 'redux-form';
import userDetail from './registration_reducer';
import getRoles from './fetchRoles';
// import loginReducer from './login_reducer';

const rootReducer=combineReducers({
    userDetail,
    getRoles
})
export default rootReducer;