import {combineReducers} from 'redux';
// import {reducer as formReducer} from 'redux-form';
import userDetail from './registration_reducer';
// import loginReducer from './login_reducer';

const rootReducer=combineReducers({
    userDetail
})
export default rootReducer;