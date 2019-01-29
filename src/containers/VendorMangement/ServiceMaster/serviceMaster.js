import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import  {addServiceType,getServiceDetail}  from '../../../Actions/serviceMasterAction';
import './serviceMaster.css';
import { Link } from 'react-router-dom';
    


class serviceMaster extends Component{
constructor(props){
    super(props);
        this.state={
            
                 serviceName:'',
                 serviceDetailId:'',
                 service_detail:'',
                 
        }
   
}


    handleChange=(event)=>  {
                   
        this.setState({[event.target.name]:event.target.value});
        console.log(event.target.value)
        
        
    }

    componentDidMount(){
        this.props.getServiceDetail();
    }
    
    refreshData(){
        this.props.addServiceType();
    }

    getDropdown=({detail})=>{
        if(detail){
            return detail.service.map((item)=>{console.log(item)
                    return(
                        <option key={item.serviceDetailId} value={item.serviceDetailId} >
                        {item.service_detail}</option>
                    )
                    
                })

                
            
        }
    }
    
      onSubmit=(event)=> {
        event.preventDefault();
   
        this.props.addServiceType(this.state)
        
        this.setState(
        {
            state: {
                serviceName:'',
                serviceDetailId:'',
                service_detail:''
             
                }
                
        })
        
        this.props.history.push('/superDashboard/displayServices')
        
        
    

    }
           
    OnKeyPressUserhandler(event) {
        const pattern=/[a-zA-Z_ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
          event.preventDefault();
        }
      }

render(){
    
    return(
        <div className="form">
            <form onSubmit={this.onSubmit}>
                <div className="form-group col-md-6">
                    <label>Service Type</label>
                    <input type="text"   className ="form-control" name="serviceName" value={this.state.serviceName} onKeyPress={this.OnKeyPressUserhandler}  onChange={this.handleChange} required></input>
                </div>
                <div className="form-group  col-md-6">
                    <label>Service Details</label>
                    <select className ="form-control" value={this.state.serviceDetailId} onChange={(e) => this.setState({serviceDetailId: e.target.value})}>
                    <option >--SELECT--</option>    
                          {this.getDropdown(this.props.serviceMasterReducer)}
                    </select>
                </div>
         
                <button type="submit" className ="btn btn-primary" value="submit">Submit</button>
                <Link to='/superDashboard/displayServices'>
                <button className="btn">Show Details</button>
                </Link>
            </form>
    </div>
    )
}
    
}

function mapStateToProps(state) {
    console.log(state);
    return {
        serviceMasterReducer: state.serviceMasterReducer

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addServiceType,getServiceDetail}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(serviceMaster);
