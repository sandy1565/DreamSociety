import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getServiceTypes} from '../../../Actions/vendorMasterAction';


class vendorMaster extends Component{
    constructor(props){
        super(props);
        this.state={
            vendorName:'',
            serviceName:[],
            service_details:[]
        }
        this.handleChange=this.handleChange.bind(this); 

    }

    
    handleChange(event)  {
        this.setState({[event.target.name]:event.target.value});
    }


    render(){
        return(
            <div>
                <form>
                <label> Vendor Name
                <input type="text" name="vendorName" value={this.state.vendorName} onChange={this.handleChange}  required></input>
                </label><br/>
                <select> Service Type
                <option type="text" name="serviceName" value={this.state.serviceName} onChange={this.handleChange}></option>
                </select><br/>
                <select> Service Details
                <option type="text" name="service_detail" value={this.state.service_details} onChange={this.handleChange}></option>
                </select><br/>
                <button type="submit" value="submit">Submit</button>
            </form>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{ 
        vendorMasterReducer: state.vendorMasterReducer
    }
}

function mapDispatchToProps(dispatch){

    return bindActionCreators({getServiceTypes}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(vendorMaster);
