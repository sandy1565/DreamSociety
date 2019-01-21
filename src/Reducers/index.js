import {combineReducers} from 'redux';
// import {reducer as formReducer} from 'redux-form';
import userDetail from './registration_reducer';
import loginReducer from './Login_reducer';

const rootReducer=combineReducers({
    loginReducer,
    userDetail
})
export default rootReducer;