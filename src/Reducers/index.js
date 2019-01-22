import { combineReducers } from 'redux';
import userDetail from './registration_reducer';
import loginReducer from './Login_reducer';
import flats from './flatReducer';
import societyReducer from './Society_reducer';
import SizeDetails from './size_reducer';
import TowerDetails from './tower_reducer';
import flat from './flatMasterReducer';
import EventDetails from './event_reducer';
import serviceMasterReducer from './VendorMangement/serviceMasterReducer';
import displayServiceMasterReducer from './VendorMangement/displayServiceMasterReducer';
import vendorMasterReducer from './VendorMangement/vendorMasterReducer';

const rootReducer = combineReducers({
    loginReducer,
    userDetail,
    TowerDetails,
    SizeDetails,
    EventDetails,
    societyReducer,
    flats,
    societyReducer,
    serviceMasterReducer,
    displayServiceMasterReducer,
    vendorMasterReducer,
    flat
})
export default rootReducer;