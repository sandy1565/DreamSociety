import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getServiceType} from '../../../Actions/serviceMasterAction';
import {addVendorMaster} from '../../../Actions/vendorMasterAction';
import { Link } from 'react-router-dom';
// import './vendorMaster.css';


class vendorMaster extends Component{
    constructor(props){
        super(props);
        this.state={
            vendorName:'',
            serviceName:'',
            serviceId:'',
            description:''

            
        }
        this.handleChange=this.handleChange.bind(this); 

    }

    OnKeyPressUserhandler(event) {
        const pattern=/[a-zA-Z_ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
          event.preventDefault();
        }
      }


    handleChange(event)  {
        this.setState({[event.target.name]:event.target.value});
    }

    componentDidMount(){
        this.props.getServiceType();
    }

    getDropDowm=({item})=>{
        if(item){
            return item.map((item)=>{
                return(
                    <option key={item.serviceId} value={item.serviceId}>
                        {item.serviceName}
                    </option>
                )
            })
        }

    }

    onSubmit=(event)=>{
        event.preventDefault();
        this.props.addVendorMaster(this.state);
        this.setState({
            vendorName:'',
            serviceName:'',
            serviceId:'',
            description:''
        }
        )}

    render(){
        return(
            <div  className="form1">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group col-md-6">
                     <label>Vendor Name</label>
                        <input type="text"   className ="form-control" name="vendorName" value={this.state.vendorName} onKeyPress={this.OnKeyPressUserhandler}  onChange={this.handleChange} required></input>
                    </div>
                    <div className="form-group  col-md-6">
                     <label>Service Type</label>
                     <select className ="form-control" value={this.state.serviceId} onChange={(e)=>{
                                                this.setState({serviceId:e.target.value})}}> 
                     <option>--SELECT--</option>      
                        {this.getDropDowm(this.props.displayServiceMasterReducer)}
                     </select>
                    </div>
                    <div className="form-group col-md-6">
                     <label>Description</label>
                     <input className ="form-control"  value={this.state.description} onChange={this.handleChange} type="text" name="description"></input>
                    </div>
              
                <button type="submit" className="btn btn-primary" value="submit">Submit</button>
            </form>
            <Link to='/superDashboard/displayVendorMaster'>
                <button className="btn1">Show Details</button>
                </Link>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{ 
        displayServiceMasterReducer: state.displayServiceMasterReducer,
        vendorMasterReducer:state.vendorMasterReducer
    }
}

function mapDispatchToProps(dispatch){

    return bindActionCreators({getServiceType,addVendorMaster}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(vendorMaster);
