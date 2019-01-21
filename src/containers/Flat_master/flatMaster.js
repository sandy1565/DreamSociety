import React,{ Component } from 'react';
import './flatMaster.css';
import { connect } from 'react-redux';
import {AddDetails,getSocietyNameDetails,getSizeTypeDetails,getDetails} from '../../Actions/Flat_action';
import { bindActionCreators } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormGroup, Form, Input, Button, Label } from 'reactstrap';


class FlatMaster extends Component{
       constructor(props){
           super(props);
           this.state= {
                societyId:'',
                societyName:'',
                societyName1:'',
                 flatType:'',
                flatSuperArea:'',
                sizeId:'',
                 sizeType:'',
                sizeType1:'',
                coverArea:'',
                 validationError:''
           }
       }

       componentDidMount() {
           this.props.getSocietyNameDetails()
           this.props.getSizeTypeDetails()
       }
    
     submit=(e) =>{
         e.preventDefault();
        
       const societyId=this.state.societyId;
       const flatType =this.state.flatType;
       const flatSuperArea=this.state.flatSuperArea;
       const sizeId=this.state.sizeId;
       const coverArea=this.state.coverArea;
       
      
       console.log(societyId,flatType,flatSuperArea,sizeId,coverArea);

       this.props.AddDetails(societyId,flatType,flatSuperArea,sizeId,coverArea)
       this.props.history.push('/superDashboard/flatmaster/flatmasterdetails');
    //    this.props.getDetails();
    
   
               
    }
    selectedSocietyName =(e) =>{
     this.state.societyId=e.target.value
     
     console.log(this.state.societyId)
    }
    societyName({list0}){
        if(list0){
            
           return( 
               list0.map((item) =>{
                   return(
                       <option key={item.societyId} value={item.societyId}>
                        {item.societyName}
                       </option>
                   )
               })
           )
            
        }
    }



    selectedSizeType=(e)=>{
        this.state.sizeId=e.target.value
        console.log(this.state.sizeId)
    }
    sizeType({list4}){
        if(list4){
            
           return( 
               list4.map((item) =>{
                   return(
                       <option key={item.sizeId} value={item.sizeId}>
                        {item.sizeType}
                       </option>
                   )
               })
           )
            
        }
    }
    push=(e)=>{
        e.preventDefault();
        this.props.history.push('/superDashboard/flatmaster/flatmasterdetails')
    }
     
    render(){
        return(

            <div className="flatMaster">
            <h3>ADD FLAT DETAILS</h3>
                <Form onSubmit={this.submit}>

            
                <Label>SocietyName</Label>
                <Input  
                type="select"
                onClick={this.societyName}
                onChange={this.selectedSocietyName}>  
                <option >--SELECT--</option>        
            {this.societyName(this.props.flat)}    
                </Input><br/><br/>


                <Label>Flat Type</Label>
                <Input 
                type="textbox"
                value={this.state.flatType} 
                onChange={(e) => this.setState({flatType: e.target.value , validationError: e.target.value === "" ? 
                "You must select your favourite team" : ""})}/>
                <br/><br/>


                <Label>Flat SuperArea</Label>
                <Input
                type="number"
                value={this.state.flatSuperArea} 
                onChange={(e) => this.setState({flatSuperArea: e.target.value , validationError: e.target.value === "" ? 
                "You must select your favourite team" : ""})}/>
                <br/><br/>


                <Label>Size Type</Label>
                <Input
                type="select"
                onClick={this.sizeType}
                onChange={this.selectedSizeType}>
                <option>--SELECT--</option>
            {this.sizeType(this.props.flat)} 
                </Input> <br/><br/>


                <Label>CoverArea</Label>
                <Input
                type="number"
                value={this.state.coverArea} 
                onChange={(e) => this.setState({coverArea: e.target.value , validationError: e.target.value === "" ? 
                "You must select your favourite team" : ""})}/>
                <br/><br/>
            
                <FormGroup>
                    <Button color="primary" type="submit" col="sm-2">Submit</Button><Button color="success" onClick={this.push}>FlatDetails</Button>
                </FormGroup>
                <FormGroup>
                    
                </FormGroup>
                
                </Form>
            </div>
            
        )
           
    }
}
function mapStateToProps(state) {
   
    return {
        flat: state.flat
        
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({AddDetails,getSocietyNameDetails,getSizeTypeDetails,getDetails},dispatch)

}

export  default connect(mapStateToProps,mapDispatchToProps) (FlatMaster);