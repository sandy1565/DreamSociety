import React,{Component} from 'react';
import connect from 'react-redux';
 import {AddEvent } from '../../Actions';
import { bindActionCreators } from 'redux';
//  import 'bootstrap/dist/css/bootstrap/min.css';

 export default  class EventMaster extends  Component{
 constructor(props){
     super(props)


     this.onChange = this.onChange.bind(this);
 }

    state ={
    eventType: [],
    eventName:[],
    eventOrganiser:[],
    eventStart_Date:[],
    eventEnd_Date:[]
    }


    onChange(e){
        this.setState({[e.target.name]:e.target.value.trim('')});
        console.log(this.state)
    }


  render(){
      return(
          <div  >
              <form onSubmit ={this.submit}>
            <div className="form-group">
              <label >Event Type</label>
              <input type="text" className ="form-control" placeholder ="eventType" value ={this.state.eventType}    name="eventType"></input>
              
          </div>
          <div className ="form-group">

    <label>Event Name</label>
     <input type ="text"  className="form-control"   placeholder ="eventName" value ={this.state.eventName} name="eventName"></input>
    </div>    
    <div  className ="form-group">
        <label>Event Start Date</label>
        <input type="date"   className ="form-control" name="startDate" placeholder =" event start date" ></input>
    </div>
    
    <div className="form-group">
        <label> Event End Date</label>
       <input type="date"   className =" form-control"name="endDate" placeholder ="event end date"/> 
     </div>
    <div className="form-group">
        <label >Event Organiser</label>
        <select className="form-control"  value ={this.state.eventOrganiser}  onChange ={this.onChange} multiple={true}>
           <option> full time</option>
            <option>part time</option>
        </select>
    </div>

     <button className="btn btn-primary"> Submit</button>


    </form>
    </div>

      )
  }
    

  } 

  


// mapStateToProps(state){
//     console.log(state);
// return{
//   EventDetails: state.EventDetails
// }
// }
// mapDispatchToProps(dispatch){
//     return bindActionCreators({AddEvent},dispatch)
//     }
// export default connect(mapStateToProps,mapDispatchToProps)(EventMaster)





 