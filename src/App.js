import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// ========Containers =========//
import Login from './containers/Login/Login';
import UserDetails from './containers/UserDetails/UserDetails';
import Registration from './containers/Registration/Registration';
<<<<<<< Updated upstream
import AdminDashboard from './containers/AdminDashboard/AdminDashboard';
import OwnerDashboard from './containers/OwnerDashboard/OwnerDashboard';
import SuperDashboard from './containers/SuperDashboard/SuperDashboard';
import TenantDashboard from './containers/TenantDashboard/TenantDashboard';
import VendorDashboard from './containers/VendorDashboard/VendorDashboard';

=======
import TowerMaster from   './containers/TowerMaster/tower-master';
import  DisplayTowerMaster from './containers/TowerMaster/display-tower-master';
import SizeMaster from   './containers/SizeMaster/size-master';
import  EventMaster from './containers/EventMaster/event-master';

import DisplaySizeMaster from './containers/SizeMaster/display-size-master';
>>>>>>> Stashed changes

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={Login}/>
            <Route path='/superDashboard' exact component={SuperDashboard} />
            <Route path='/adminDashboard' component={AdminDashboard} />
            <Route path='/ownerDashboard' component={OwnerDashboard} />
            <Route path='/tenantDashboard' component={TenantDashboard} />
            <Route path='/vendorDashboard' component={VendorDashboard} />
            <Route path='/superDashboard/registration' component={Registration} />
            <Route path ={'/user_details'} component={UserDetails} />
<<<<<<< Updated upstream
           
=======
            <Route path ='/display-tower' component ={DisplayTowerMaster} />
            <Route path ='/display-size' component ={DisplaySizeMaster} />
            <Route path ='/tower'  component ={TowerMaster} />
            <Route path = '/size'  component ={SizeMaster} />
            <Route path ='/event' component ={EventMaster}/>

            {/* <Route path='/registration' component={Registration} /> */}
            {/* <Route path='/' exact component={ShowDetails} /> */}
>>>>>>> Stashed changes
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
