import { combineReducers } from 'redux';
import userDetail from './registration_reducer';
import loginReducer from './Login_reducer';
import flats from './flatReducer';
import flat from './flatMasterReducer';
import EventDetails from './event_reducer';
import serviceMasterReducer from './VendorMangement/serviceMasterReducer';
import displayServiceMasterReducer from './VendorMangement/displayServiceMasterReducer';
import vendorMasterReducer from './VendorMangement/vendorMasterReducer';
import TowerDetails from  './tower_reducer';
import SizeDetails from './size_reducer';
import societyReducer from './Society_reducer';

const rootReducer = combineReducers({
    loginReducer,
    userDetail,
    TowerDetails,
    SizeDetails,
    flat,
    EventDetails,
    societyReducer,
    flats,
    serviceMasterReducer,
    displayServiceMasterReducer,
    vendorMasterReducer
    
})
export default rootReducer;