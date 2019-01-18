import React, { Component } from 'react';
import {userLogout} from '../../Actions/login_action';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class SuperDashboard extends Component {
    logout=()=>{
        this.props.userLogout();   
    }
    render() {
        return (
            <div>
                <h1> SuperDashboard</h1>
                <Link to="/superDashboard/registration" ><h4>Registration</h4></Link>
                <Link to="#" ><h4>Parking Mangement</h4></Link>
                <Link to="#" ><h4>Assets Management</h4></Link>
                <Link to="/superDashboard/event " ><h4>Event Management</h4></Link>
                <Link to="#" ><h4>Vendor Management</h4></Link>
                <Link to="/superDashboard/flatmaster" ><h4>Flat Master</h4></Link>
                <Link to="#" ><h4>Society Management</h4></Link>
                <Link to="#" ><h4>Service Master</h4></Link>
                <Link to="/superDashboard/towermaster"><h4>Tower Master</h4></Link>
                <Link to="/superDashboard/sizemaster"><h4>Size Master</h4></Link>

                 <button className='btn btn-danger' onClick={this.logout}>Logout</button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({userLogout},dispatch);
    }



    export default (connect(mapDispatchToProps,)(SuperDashboard));