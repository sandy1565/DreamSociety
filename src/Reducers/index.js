import {combineReducers} from 'redux';
// import {reducer as formReducer} from 'redux-form';
import userDetail from './registration_reducer';
import getRoles from './fetchRoles';
import loginReducer from './Login_reducer';
<<<<<<< Updated upstream
import flats from './flatReducer';

// import loginReducer from './login_reducer';
import TowerDetails from './tower_reducer';
import SizeDetails from './size_reducer';
=======
import SizeDetails from './size_reducer';
import  TowerDetails from './tower_reducer'; 
import  EventDetails from './event_reducer';

>>>>>>> Stashed changes
const rootReducer=combineReducers({
    loginReducer,
    userDetail,
    getRoles,
    TowerDetails,
    SizeDetails,
<<<<<<< Updated upstream
    flats
=======
    EventDetails
>>>>>>> Stashed changes
})
export default rootReducer;