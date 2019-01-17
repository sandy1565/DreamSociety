import React,{Component} from 'react';
import AddTower  from '../../Actions';
import { bindActionCreators } from 'redux';
import {connect}  from 'react-redux';


   class  TowerMaster extends Component{
   
  constructor(props){
 super(props);


 this.state ={
    
  towerName: ""
 }

this.onChange = this.onChange.bind(this);
 this.onSubmit = this.onSubmit.bind(this);
}


onChange(e){
    this.setState({[e.target.name]:e.target.value});
}
OnKeyPresshandler(event) {
    const pattern=/[a-zA-Z]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  onSubmit(event){
      event.preventDefault();
      console.log(this.state)
      
      this.props.AddTower(this.state)
     return this.setState({
         state: {
           
            towerName: ""
         }
     }),
     this.props.history.push('/display-tower');
  }

 
  render(){
  return(
   <div>
  <form  onSubmit ={this.onSubmit}>




  {/* <div className="form-group">
<label>  Tower id</label>
<input type= "number" className ="form-control" placeholder = "tower_id" name="tower_id" value = {this.state.tower_id} onChange ={this.onChange}/>
</div> */}
<div className ="form-group">
<label>Tower Name</label>
<input type =  "text" className ="form-control" placeholder ="tower Name" name="towerName" value ={this.state.name}  onKeyPress={this.OnKeyPresshandler} onChange ={this.onChange}/>
  </div>
  <div className ="form-group">

  <input type="submit" className =" form-control btn btn-primary"/>
   </div>
  </form>


   </div>
   );

  }

 }

  function mapStateToProps(state){
      console.log(state);
      return{
          Tower: state.TowerDetails
      }
  }


  function mapDispatchToProps(dispatch){
      return bindActionCreators({AddTower},dispatch);
  }
  export default connect(mapStateToProps,mapDispatchToProps)(TowerMaster)