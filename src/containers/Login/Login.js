import React,{Component} from 'react'
import {connect} from 'react-redux';
import {login} from '../../Actions/login_action';
import { bindActionCreators } from 'redux';




class Login extends Component{
constructor(props){
    super(props);
    
    this.state={
        username:'',
        password:'',
       
    }
}



onChangeHandler=(e)=>{
    const { name, value } = e.target;
    this.setState({ [name]: value });
}

submit=(e)=>{
e.preventDefault();

const { username, password } = this.state
if (username!==null && password!==null ) {
    this.props.login(username,password)
    
}
}


render() {
    return (
        <div style={{'textAlign':'center','margin':'150px 0px', 'padding':'0px'}}>
         <form onSubmit={this.submit}>
         <div style={{'marginBottom':'10px'}}>
             <label style={{'marginRight':'10px'}}><h4>UserName:</h4></label>
             <input stype="text" style={{'borderRadius': '10px','border':'1px solid lightgray', 'outline': 'none','textAlign': 'center','width':'400px','height':'40px'}} placeholder="enter user name" name="username" onChange={this.onChangeHandler} required/>
             </div>
             <div style={{'marginBottom':'10px'}}>
             <label style={{'marginRight':'10px'}}><h4>Password:</h4></label>
             <input type="password" style={{'borderRadius': '10px','border':'1px solid lightgray', 'outline': 'none','textAlign': 'center','width':'400px','height':'40px'}} placeholder="enter password" name="password" onChange={this.onChangeHandler} required />
             </div>
             <button type="submit" className='btn btn-success'>login</button>
         </form>
  
        </div>
        
        
    );
}


}

function mapStateToProps(state) {
    console.log(state)
    return {
        loginError: state.loginReducer
    }
}

function mapDispatchToProps(dispatch){
return bindActionCreators({login},dispatch);
}

export default (connect(mapStateToProps,mapDispatchToProps )(Login));
