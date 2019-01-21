import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// =====Components============//
import {PrivateRoute} from './components/PrivateRoute/privateRoute';
// ========Containers =========//
import Login from './containers/Login/Login';
import UserDetails from './containers/UserDetails/UserDetails';
import Registration from './containers/Registration/Registration';
import AdminDashboard from './containers/AdminDashboard/AdminDashboard';
import OwnerDashboard from './containers/OwnerDashboard/OwnerDashboard';
import SuperDashboard from './containers/SuperDashboard/SuperDashboard';
import TenantDashboard from './containers/TenantDashboard/TenantDashboard';
import VendorDashboard from './containers/VendorDashboard/VendorDashboard';

import SocietyManagement from './containers/SocietyManagement/SocietyMangement';
import TowerMaster from   './containers/TowerMaster/tower-master';
import  DisplayTowerMaster from './containers/TowerMaster/display-tower-master';
import SizeMaster from   './containers/SizeMaster/size-master';
import  EventMaster from './containers/EventMaster/event-master';

import DisplaySizeMaster from './containers/SizeMaster/display-size-master';



import FlatMaster from './containers/Flat_master/flatMaster';
import FlatMasterDetails from './containers/Flat_master/flatMasterDetails';
import serviceMaster from './containers/VendorMangement/ServiceMaster/serviceMaster';
import displayServices from './containers/VendorMangement/ServiceMaster/displayServiceMaster';
import vendorMaster from './containers/VendorMangement/VendorMaster/vendorMaster';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={Login}/>
            <Route path='/login' component={Login}/>
            <PrivateRoute path='/superDashboard' exact component={SuperDashboard} />
            <Route path='/superDashboard' exact component={SuperDashboard} />
            <Route path='/adminDashboard' component={AdminDashboard} />
            <Route path='/ownerDashboard' component={OwnerDashboard} />
            <Route path='/tenantDashboard' component={TenantDashboard} />
            <Route path='/vendorDashboard' component={VendorDashboard} />
            <Route path='/superDashboard/registration' component={Registration} />
            <Route path ={'/superDashboard/user_details'} component={UserDetails} />
            <Route path ={'/superDashboard/registration/user_details'} component={UserDetails} />
           
            <Route path ='/superDashboard/display-tower' component ={DisplayTowerMaster} />
            <Route path ='/superDashboard/display-size' component ={DisplaySizeMaster} />
            <Route path ='/superDashboard/towermaster'  component ={TowerMaster} />
            <Route path = '/superDashboard/sizemaster'  component ={SizeMaster} />
            <Route path ='/superDashboard/event' component ={EventMaster}/>
            <Route path='/superDashboard/flatmaster' exact component= {FlatMaster} />
            <Route path ='/superDashboard/flatmaster/flatmasterdetails' component ={FlatMasterDetails}/>
            <Route path ={'/user_details'} component={UserDetails} />
            <Route path ='/display-tower' component ={DisplayTowerMaster} />
            <Route path ='/display-size' component ={DisplaySizeMaster} />
            <Route path ='/tower'  component ={TowerMaster} />
            <Route path = '/size'  component ={SizeMaster} />
            <Route path ='/event' component ={EventMaster}/>
            <Route path ='/superDashboard/societyManagement' component={SocietyManagement}/>
            <Route path='/servicemaster' component={serviceMaster}/>
            <Route path='/displayservice' component={displayServices}/>
            <Route path='/vendormaster' component={vendorMaster}/>
            {/* <Route path='/registration' component={Registration} /> */}
            {/* <Route path='/' exact component={ShowDetails} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
