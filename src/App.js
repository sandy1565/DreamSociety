import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// ========Containers =========//
import Login from './containers/Login/Login';
import UserDetails from './containers/UserDetails/UserDetails';
import Registration from './containers/Registration/Registration';
import AdminDashboard from './containers/AdminDashboard/AdminDashboard';
import OwnerDashboard from './containers/OwnerDashboard/OwnerDashboard';
import SuperDashboard from './containers/SuperDashboard/SuperDashboard';
import TenantDashboard from './containers/TenantDashboard/TenantDashboard';
import VendorDashboard from './containers/VendorDashboard/VendorDashboard';


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
           
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
