import React,{Component} from 'react';
import {getServiceType,delServiceType,getServiceDetail} from '../../../Actions/serviceMasterAction';
import { connect } from 'react-redux';
import axios from 'axios';
import {authHeader} from '../../../helper/auth-header';
import { bindActionCreators} from 'redux';
import {Button, Modal,FormGroup, ModalBody, ModalHeader, ModalFooter, Input, Label } from 'reactstrap';
import {URN} from '../../../constants/index';
import './serviceMaster.css';


class displayServices extends Component{
    
        
    
        state={
            editServiceData:{
                
            serviceId:'',
            serviceName:'',
            service_detail:[],
            serviceDetailId:''
        },
        editServiceModal: false
        
    }

    
    componentDidMount() {
     this.props.getServiceType()
     this.props.getServiceDetail();
    }
    
    componentWillMount(){
        this.refreshData()
    }
    
    refreshData(){
        this.props.getServiceType();
    }
    
    deleteService(serviceId) {
        console.log(serviceId);
        axios.delete(`${URN}/service/` +serviceId,{headers:authHeader()}).then((response) => {
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
        let { serviceName,service_detail,serviceDetailId } = this.state.editServiceData;
    
        axios.put(`${URN}/service/` + this.state.editServiceData.serviceId, {
            serviceName, service_detail,serviceDetailId
        },{headers:authHeader()}).then((response) => {
          this.refreshData();
    
          this.setState({
            editServiceModal: false, editServiceData: {  serviceId: '',serviceName: '', service_detail: '',serviceDetailId:''}
          })
        });
    
      }

    editUser(serviceId,serviceName,service_detail,serviceDetailId){
        console.log('serviceName',serviceName);
        console.log('serviceId',serviceId);
        console.log('serviceDetailId',serviceDetailId)
        this.setState({
            
            editServiceData:{ serviceId, serviceName, service_detail,serviceDetailId}, editServiceModal: !this.state.editServiceModal
        });
    
   } 

   
   getDropdown1=({detail})=>{
    if(detail){
        return detail.service.map((item)=>{console.log(item)
                return(
                    <option key={item.serviceDetailId} value={item.serviceDetailId}>
                    {item.service_detail}</option>
                )
                
            })

            
        
    }
}
  
 renderList =({item})=>{
     console.log(item);
     if(item){
         return item.map((items) =>{
             return(
                    
                     <tr  key={items.serviceId}>
                     
                            
                             <td>{items.serviceName}</td>
                             {/* <td>{items.service_detail}</td> */}
                     
                                 <td>
                                    <button className="btn btn-primary" onClick={this.editUser.bind(this,items.serviceId,items.serviceName,items.service_detail,items.serviceDetailId)}>Edit</button>
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
        {/* <Input id="service_detail" value={this.state.editServiceData.service_detail} onChange={(e) => {
        let { editServiceData } = this.state;

        editServiceData.service_detail = e.target.value;

        this.setState({ editServiceData });
        }} /> */}
        <select value={this.state.editServiceData.serviceDetailId} onChange={(e) => {
                                                                    let { editServiceData } = this.state;
                                                                         editServiceData.serviceDetailId = e.target.value;
                                                                             this.setState({ editServiceData })}}>
        <option disabled>--SELECT--</option>
        <option value={this.state.editServiceData.service_detail}>
            {this.state.editServiceData.service_detail}
        </option>
        {this.getDropdown1(this.props.serviceMasterReducer)}
   
        </select>
    </FormGroup>
       </ModalBody>

    <ModalFooter>
    <Button color="primary" onClick={this.updateServices.bind(this)}>Update </Button>
    <Button color="secondary" onClick={this.toggleEditServiceModal.bind(this)}>Cancel</Button>
    </ModalFooter>
</Modal>
    
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Service Type</th>
                        {/* <th>Service Details</th> */}
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
        displayServiceMasterReducer: state.displayServiceMasterReducer,
        serviceMasterReducer:state.serviceMasterReducer
    
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getServiceType,delServiceType,getServiceDetail}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(displayServices);