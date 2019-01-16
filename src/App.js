import React, { Component } from 'react';
// import Country from './components/CountryMaster/CountryMaster';
// import Login from './components/LoginPage/Login';
// import ShowDetails from './components/LoginPage/showDetails';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserDetails from './containers/UserDetails/UserDetails';
// import AdminDashboard from './container/admin-dashboard/admin-dashboard';
import Registration from './containers/Registration/Registration';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact />
            <Route path='/registration' component={Registration} />
            {/* <Route path='/edit_user_details/:id' render ={() => <EditUserDetails {...this.props}/>} />} /> */}
            <Route path ={'/user_details'} component={UserDetails} />
            {/* <Route path='/registration' component={Registration} /> */}
            {/* <Route path='/' exact component={ShowDetails} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
