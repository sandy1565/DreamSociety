import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchParking, deleteParking } from '../../Actions';
import { Table, Button, Modal, FormGroup, ModalBody, ModalHeader, ModalFooter, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';

class ParkingMaster extends Component {
    componentDidMount(){
        this.props.fetchParking()
    }

    delete_Parking(id){
        this.props.deleteParking(id)
        .then(() => this.props.fetchParking())
    }

    renderParking({parking}){
        console.log(parking);
        if(parking){
            return parking.map((item) => {
                return (
                    <tr key={item.id}>
                        <td>
                            {item.basement}
                        </td>
                        <td>
                            {item.parking}
                        </td>
                        <td>
                            <Button color='success' className="mr-2">Edit</Button>
                            <Button color='danger' onClick={this.delete_Parking.bind(this, item.id)}>Delete</Button>
                        </td>
                    </tr>
                );
            })
        }
    }
    render(){
        return (
            <div>
                <div>
                    <Link to='/superDashboard/add_parking/new'>Add Parking</Link>
                </div>
                <h3>Parking details</h3>
                <div>
                    <Table>
                        <thead>
                            <tr>
                                <th>Basement</th>
                                <th>No. of Parking</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderParking(this.props.parkingDetail)}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        parkingDetail: state.parkingDetail
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchParking, deleteParking}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkingMaster);