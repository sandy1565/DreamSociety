import React, { Component } from 'react';
import Parking from '../../components/Parking/Parking';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUsers } from '../../Actions'

class ParkingMaster extends Component {
    componentDidMount(){
        this.props.getUsers()
    }
    render(){
        return (
            <div>
                <Parking user={this.props.userDetail}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        userDetail: state.userDetail
    }
}

export default connect(mapStateToProps, {getUsers})(ParkingMaster);