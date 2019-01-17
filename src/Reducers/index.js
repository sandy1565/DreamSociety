import {combineReducers} from 'redux';
// import {reducer as formReducer} from 'redux-form';
import userDetail from './registration_reducer';
import getRoles from './fetchRoles';
import loginReducer from './Login_reducer';

// import loginReducer from './login_reducer';
import TowerDetails from './tower_reducer';
import SizeDetails from './size_reducer';
const rootReducer=combineReducers({
    loginReducer,
    userDetail,
    getRoles,
    TowerDetails,
    SizeDetails
})
export default rootReducer;