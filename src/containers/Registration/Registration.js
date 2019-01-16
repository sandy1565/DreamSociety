import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { addUser, getRoles } from '../../Actions';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';

class Registration extends Component {
    constructor(props){
        super(props);
        this.state = {
            roleName:[],
            roles:"",
            userTypeError:"",
            firstName:"",
            lastName:"",
            userName:"",
            email:"",
            emailError:"",
            contact: "",
            password:"",
            passwordError:"",
            passwordConfirmation:"",
            isSubmit: false
        }
        this.onChange = this.onChange.bind(this);
        this.submit = this.submit.bind(this);
        this.OnKeyPresshandlerPhone = this.OnKeyPresshandlerPhone.bind(this);
        this.OnKeyPressUserhandler = this.OnKeyPressUserhandler.bind(this);
        // this.roleChange = this.roleChange.bind(this)
    }

    componentDidMount(){
        // this.props.getRoles()
        Axios.get('http://192.168.1.113:8081/api/user/role')
        .then(results => results.data)
        .then(results => this.setState({roleName:results}))
    }

    OnKeyPresshandlerPhone(event) {
        const pattern=/^[0-9]$/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
          event.preventDefault();
          
        }
      }

      OnKeyPressUserhandler(event) {
        const pattern=/[a-zA-Z]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
          event.preventDefault();
        }
      }

    onChange(e){
        this.setState({[e.target.name]:e.target.value.trim('')});
        console.log(this.state)
    }

    validate = () => {
        let userTypeError = "";
        let emailError = "";
        let passwordError = "";

        if(!this.state.userType) {
            userTypeError = "Name cannot be empty"
        }
        if(this.state.userType !== []) {
            userTypeError = ""
        }

        if(this.state.password !== this.state.passwordConfirmation) {
            passwordError = "Password doesn't match"
        }

        if(!this.state.email.includes('@')) {
            emailError = 'invalid Email';
        }
        else if(this.state.email.includes('@')){
            emailError = "";
        }

        if(!this.state.email) {
            emailError = 'Email cannot be empty';
        }

        if(emailError || userTypeError || passwordError) {
            this.setState({emailError, userTypeError, passwordError});
            return false;
        }
        return true;
    }

    

    submit(e) {
        e.preventDefault();
        
        const isValid = this.validate();
        if(isValid) {
            this.props.addUser({...this.state, userTypeError: "", emailError: "", passwordError: ""});
            this.setState({
                roleName:[],
                userTypeError:"",
                firstName:"",
                lastName:"",
                userName:"",
                email:"",
                emailError:"",
                contact: "",
                password:"",
                passwordError:"",
                passwordConfirmation:"",
                isSubmit: true
            });
        }   
    }
    

    render(){
    
        const form = <form onSubmit={this.submit}>
        <div>
            <div></div>
            <label>User Type</label>
            {/* <input name="roleName"
                type="select"
                value={this.state.roleName}
                onChange={this.onChange}
                onKeyPress={this.OnKeyPressUserhandler} >
                <option onChange={this.onChange} value={this.state.}>ADMIN</option>
            </input> */}
            <select onChange={(e) => this.setState({roles: e.target.value})}
                                value={this.state.roles}>
                {this.state.roleName.map((item) => {
                    return (
                        <option key={item.roleName} value={item.roleName}>{item.roleName}</option>
                    )
                })}
            </select>
            <div>{this.state.userTypeError ? 
                <div style={{color: 'red', fontSize: '12px'}}>
                    {this.state.userTypeError}
                </div> 
                : null}
            </div>
        </div>
        <div>
            <label>FirstName</label>
            <input name="firstName"
                type="text"
                value={this.state.firstName}
                onChange={this.onChange} />
        </div>
        <div>
            <label>LastName</label>
            <input name="lastName"
                type="text"
                value={this.state.lastName}
                onChange={this.onChange} />
        </div>
        <div>
            <label>Username</label>
            <input name="userName"
                type="text"
                value={this.state.userName}
                onChange={this.onChange} />
        </div>
        <div>
            <label>Email</label>
            <input name="email"
                type="text"
                value={this.state.email}
                onChange={this.onChange} />
            <div>{this.state.emailError ? 
                <div style={{color: 'red', fontSize: '12px'}}>
                    {this.state.emailError}
                </div> 
                : null}
            </div>
        </div>
        <div>
            <label>Contact No.</label>
            <input name="contact"
                type="text"
                value={this.state.contact}
                onChange={this.onChange}
                onKeyPress={this.OnKeyPresshandlerPhone} />
        </div>
        <div>
            <label>Password</label>
            <input name="password"
                type="password"
                value={this.state.password}
                onChange={this.onChange} />
        </div>
        <div>
            <label>Confirm Password</label>
            <input name="passwordConfirmation"
                type="password"
                value={this.state.passwordConfirmation}
                onChange={this.onChange} />
        </div>
        <div>{this.state.passwordError ? 
            <div style={{color: 'red', fontSize: '12px'}}>
                {this.state.passwordError}
            </div> 
            : null}
        </div>
        <button>Add User</button>
    </form>
        return (
            <div>
                <div>
                    <Link to="/user_details" >Home</Link>
                </div>
                {this.state.isSubmit ? <Redirect to='/user_details' />: form}
            </div>
            
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        userDetail: state.userDetail,
        getRoles: state.getRoles
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addUser, getRoles}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Registration));


