import { combineReducers } from 'redux';
import userDetail from './registration_reducer';
import loginReducer from './Login_reducer';
import flats from './flatReducer';
import flat from './flatMasterReducer';
import societyReducer from './Society_reducer'
import TowerDetails from './tower_reducer';
import SizeDetails from './size_reducer';
import EventDetails from './event_reducer';

const rootReducer = combineReducers({
    loginReducer,
    userDetail,
    getRoles,
    TowerDetails,
    SizeDetails,
    flats,
    flat,
    EventDetails,
    societyReducer,
    flats,
    societyReducer,
    flat
})
export default rootReducer;