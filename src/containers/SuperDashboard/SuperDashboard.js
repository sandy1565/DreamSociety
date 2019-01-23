import React, { Component } from 'react';
import {userLogout} from '../../Actions/login_action';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import './SuperDashboard.css';

class SuperDashboard extends Component {
    logout=()=>{
        this.props.userLogout();   
    }
    render() {
        return (
            <div>
                <h1 className='heading'> SuperDashboard</h1>
                <div className="sidebar">
                <input placeholder="search"/>
                <Link className="Link"to="/superDashboard/registration" ><h5 style={{textDecoration:'none'}}>Registration</h5></Link>
                <Link className="Link"to="#" ><h5>Parking Mangement</h5></Link>
                <Link className="Link"to="#" ><h5>Assets Management</h5></Link>
                <Link className="Link"to="/superDashboard/event " ><h5>Event Management</h5></Link>
                <Link className="Link"to="#" ><h5>Vendor Management</h5></Link>
                <Link className="Link"to="/superDashboard/flatmaster" ><h5>Flat Master</h5></Link>
                <Link className="Link"to="/superDashboard/societyManagement" ><h5>Society Management</h5></Link>
                <Link className="Link"to="#" ><h5>Service Master</h5></Link>
                <Link className="Link"to="/superDashboard/towermaster"><h5>Tower Master</h5></Link>
                <Link className="Link"to="/superDashboard/sizemaster"><h5>Size Master</h5></Link>
                </div>
                 <button className='btn btn-danger' id='logout' onClick={this.logout}>Logout</button>
     
            </div>

        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({userLogout},dispatch);
    }



    export default (connect(mapDispatchToProps,)(SuperDashboard));