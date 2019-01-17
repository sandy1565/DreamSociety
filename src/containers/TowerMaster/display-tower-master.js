import React, { Component } from 'react';
import { viewTower } from '../../Actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Modal, FormGroup, ModalBody, ModalHeader, ModalFooter, Input, Label } from 'reactstrap';

class DisplayTowerMaster extends Component {
  constructor(props) {
    super(props);
    // this.deleteTower = this.deleteTower.bind(this);
  }
  state = {
    editTowerData: {
      
      towerId:[],
      towerName: []
    },
    editTowerModal: false
  }

  componentDidMount() {
    
    this.props.viewTower()

  }
  refreshdata() {
    this.props.viewTower()

  }
  deleteTower(towerId) {
    console.log(towerId);

    var setUrl = 'http://192.168.1.113:8081/api/tower/'+towerId;
    console.log("------------- setUrl", setUrl);
    axios.delete(setUrl).then((response) => {
      console.log("-------axios.delete-----------");
        this.setState(this.refreshdata());

      })
  }



  toggleEditTowerModal() {
    this.setState({
      editTowerModal: !this.state.editTowerModal
    })
  }

  updateTower() {
    let { id,towerId, towerName } = this.state.editTowerData;
    console.log('----------------',towerId, towerName);
    axios.put('http://192.168.1.113:8081/api/tower/' + this.state.editTowerData.towerId, {
      towerName
    }).then((response) => {    
      this.refreshdata();

      this.setState({
        editTowerModal: false, editTowerData: { id: '', towerName: '' }
      })
    })
  }
 

  editTower(id, towerId, towerName) {
    console.log( 'efews',id, towerId,towerName);
    
    this.setState({
      editTowerData: { id, towerId,towerName }, editTowerModal: !this.state.editTowerModal
    })
  }


  TowerMasterDetails({tower}) {
    console.log(tower);
    if (tower) {
      return tower.map((item) => {
        return (
          <tr key={item.id}>
           
 
            <td>{item.towerName}</td>
            <td>
              <button className="btn btn-primary" onClick={this.editTower.bind(this, item.id,item.towerId, item.towerName)}>edit </button>
              <button className="btn btn-danger" onClick={this.deleteTower.bind(this,item.towerId)}>delete</button>
            </td>
          </tr>
        )
      })
    }
  }


  render() {


    return (

      <div>
        <h3 align="center"> Tower List</h3>
        <Modal isOpen={this.state.editTowerModal} toggle={this.toggleEditTowerModal.bind(this)}>
          <ModalHeader toggle={this.toggleEditTowerModal.bind(this)}>Edit Tower</ModalHeader>
          <ModalBody>



            <FormGroup>
              <Label for="towerName">  Tower Name</Label>
              <Input id="towerName" value={this.state.editTowerData.towerName} onChange={(e) => {
                let { editTowerData } = this.state;

                editTowerData.towerName = e.target.value;
                             
                this.setState({ editTowerData });
                
              }} />
            </FormGroup>


          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.updateTower.bind(this)}>Update Tower</Button>
            <Button color="secondary" onClick={this.toggleEditTowerModal.bind(this)}>Cancel</Button>
          </ModalFooter>
        </Modal>

        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>

              <th>Tower Name</th>


            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="2"> {this.TowerMasterDetails(this.props.TowerDetails)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {

  return {
    TowerDetails: state.TowerDetails,


  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ viewTower }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTowerMaster)
