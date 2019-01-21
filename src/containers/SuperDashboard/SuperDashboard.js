import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SuperDashboard extends Component {
    render() {
        return (
            <div>
                <h1> SuperDashboard</h1>
                <Link to="/superDashboard/registration" ><h3>Registration</h3></Link>
                <Link to="#" ><h3>Parking Mangement</h3></Link>
                <Link to="#" ><h3>Assets Management</h3></Link>
                <Link to="#" ><h3>Event Management</h3></Link>
                <Link to="#" ><h3>Vendor Management</h3></Link>
                <Link to="#" ><h3>Flat Master</h3></Link>
                <Link to="#" ><h3>Society Management</h3></Link>
                <Link to="#" ><h3>Service Master</h3></Link>



               
            </div>
        );
    }
}

export default SuperDashboard;