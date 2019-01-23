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
                <div className="head">
                <div className="icons">
                <button><i className="fa fa-envelope"></i></button>
               <button className='user'> 
               <div className="content">
               {/* <a href="#">Link 1</a> */}
               <Link to="logout"></Link>
               <button className='btn btn-danger' id='logout' onClick={this.logout}>Logout</button>
               </div>
               <i className="fa fa-user">{localStorage.getItem('firstName')}</i></button>
                </div>
                <h1> SuperDashboard</h1> 
                <button className='btn btn-danger' id='logout' onClick={this.logout}>Logout</button>
                </div>
                <div className="sidebar">
                <input placeholder="search"/>
                <Link className="Link"to="/superDashboard/registration" ><h5 style={{textDecoration:'none'}}>Registration</h5></Link>
                <Link className="Link"to="#" ><h5>Parking Mangement</h5></Link>
                <Link className="Link"to="#" ><h5>Assets Management</h5></Link>
                <Link className="Link"to="/superDashboard/event " ><h5>Event Management</h5></Link>
                <Link className="Link"to="#" ><h5>Vendor Management</h5></Link>
                <Link className="Link"to="/superDashboard/flatmaster" ><h5>Flat Master</h5></Link>
                <Link className="Link"to="/superDashboard/societyManagement" ><h5>Society Management</h5></Link>
                <Link className="Link"to="/superDashboard/serviceMaster" ><h5>Service Master</h5></Link>
                <Link className="Link"to="/superDashboard/towermaster"><h5>Tower Master</h5></Link>
                <Link className="Link"to="/superDashboard/sizemaster"><h5>Size Master</h5></Link>
                </div>
                
     
            </div>

        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({userLogout},dispatch);
    }



    export default (connect(mapDispatchToProps,)(SuperDashboard));