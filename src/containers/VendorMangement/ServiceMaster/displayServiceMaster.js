import React,{Component} from 'react';
import {getServiceType,delServiceType} from '../../../Actions/serviceMasterAction';
import { connect } from 'react-redux';
import axios from 'axios';
import { bindActionCreators} from 'redux';
import {Button, Modal,FormGroup, ModalBody, ModalHeader, ModalFooter, Input, Label } from 'reactstrap';
import {URN} from '../../../constants/index';


class displayServices extends Component{
    constructor(props){
        super(props);
    }
        state={
            editServiceData:{
                
            serviceId:[],
            serviceName:[],
            service_detail:[]
        },
        editServiceModal: false
        
    }

    
    componentDidMount() {
     this.props.getServiceType()
    }
    
    componentWillMount(){
        this.refreshData()
    }
    
    refreshData(){
        this.props.getServiceType();
    }
    
    deleteService(serviceId) {
        console.log(serviceId);
        var setUrl = `${URN}/service/` +serviceId;
        console.log("------------setUrl---------", setUrl);
        axios.delete(setUrl).then((response) => {
            this.setState(this.refreshData())
            
        })
    }
   
    toggleEditServiceModal() {
        this.setState({
            editServiceModal: ! this.state.editServiceModal
        });
        console.log(this.state.editServiceData)
      }

    updateServices() {
        let {serviceId, serviceName,service_detail } = this.state.editServiceData;
    
        axios.put(`${URN}/service/` + this.state.editServiceData.serviceId, {
            serviceName, service_detail
        }).then((response) => {
          this.refreshData();
    
          this.setState({
            editServiceModal: false, editServiceData: {  serviceId: '',serviceName: '', service_detail: ''}
          })
        });
    
      }

    editUser(serviceId,serviceName,service_detail){
        console.log('ffffff',serviceName);
        console.log('hhhhh',serviceId);
        this.setState({
            
            editServiceData:{ serviceId, serviceName, service_detail}, editServiceModal: !this.state.editServiceModal
        });
    
   } 

 renderList =({item})=>{
     console.log(item);
     if(item){
         return item.map((items) =>{
             return(
                    
                     <tr key={items.serviceId}>
                            
                             <td>{items.serviceName}</td>
                             <td>{items.service_detail}</td>
                                 <td>
                                    <button className="btn btn-primary" onClick={this.editUser.bind(this,items.serviceId,items.serviceName,items.service_detail)}>Edit</button>
                                 </td>
                                  <td>
                                    <button className="btn btn-danger"  onClick={this.deleteService.bind(this, items.serviceId)}>Delete</button>
                                  </td>  
                     </tr>
        
             )
         })
     }  
}    
    
 render(){
     return(
         <div>
    <Modal isOpen={this.state.editServiceModal} toggle={this.toggleEditServiceModal.bind(this)}>
    <ModalHeader toggle={this.toggleEditServiceModal.bind(this)}>Edit a Service</ModalHeader>
    <ModalBody>
    <FormGroup>
        <Label for="serviceName">Service Type</Label>
        <Input id="serviceName" value={this.state.editServiceData.serviceName} onChange={(e) => {
        let { editServiceData } = this.state;

        editServiceData.serviceName = e.target.value;

        this.setState({ editServiceData });
        }} />
    </FormGroup>

    <FormGroup>
        <Label for="service_detail">Service Details</Label>
        <Input id="service_detail" value={this.state.editServiceData.service_detail} onChange={(e) => {
        let { editServiceData } = this.state;

        editServiceData.service_detail = e.target.value;

        this.setState({ editServiceData });
        }} />
    </FormGroup>
       </ModalBody>

    <ModalFooter>
    <Button color="primary" onClick={this.updateServices.bind(this)}>Update </Button>
    <Button color="secondary" onClick={this.toggleEditServiceModal.bind(this)}>Cancel</Button>
    </ModalFooter>
</Modal>
    
                <table>
                    <thead>
                    <tr>
                        <th>Service Type</th>
                        <th>Service Details</th>
                    </tr>
                    </thead>
                    
                    <tbody>
                        {this.renderList(this.props.displayServiceMasterReducer)}
                    </tbody>
                </table>    
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        displayServiceMasterReducer: state.displayServiceMasterReducer
    
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getServiceType,delServiceType}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(displayServices);