import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { addUser, getRoles } from '../../Actions';
import { Link } from 'react-router-dom';
import { withRouter , Redirect} from 'react-router-dom';
import './Registration.css';
import { FormGroup, Form, Button, Input, Label } from 'reactstrap';

class Registration extends Component {
    constructor(props){
        super(props);
        this.state = {
            roleName:[],
            roles:"",
            roleTypeError:"",
            firstName:"",
            lastName:"",
            userName:"",
            email:"",
            emailError:"",
            contact: "",
            password:"",
            passwordError:"",
            passwordConfirmation:"",
            isSubmit: false,
            errors:{}
        }
        this.onChange = this.onChange.bind(this);
        this.submit = this.submit.bind(this);
        this.OnKeyPresshandlerPhone = this.OnKeyPresshandlerPhone.bind(this);
        this.OnKeyPressUserhandler = this.OnKeyPressUserhandler.bind(this);
        // this.roleChange = this.roleChange.bind(this)
    }

    componentDidMount(){
        this.props.getRoles();
    }

    OnKeyPresshandlerPhone(event) {
        const pattern=/^[0-9]$/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
          event.preventDefault(); 
        }
      }

      OnKeyPressUserhandler(event) {
        const pattern=/^[a-zA-Z]+$/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
          event.preventDefault();
        }
      }

      OnKeyPressPasswordhandler(event){
        const pattern=/^[a-zA-Z0-9]+$/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
          event.preventDefault();
        }
      }

    onChange(e){
        if(!!this.state.errors[e.target.name]){
            let errors = Object.assign({}, this.state.errors);
            delete errors[e.target.name];
            this.setState({[e.target.name]:e.target.value.trim(''), errors});
        }
        else {
            this.setState({[e.target.name]:e.target.value.trim('')});
        }
        console.log(this.state)
    }

    submit(e) {
        e.preventDefault();
        let errors = {};
        if(!this.state.roles){
            errors.roles = "User type can't be empty. Please select"
        }
        
        if(this.state.firstName === '') errors.firstName = "Can't be empty";
        else if(this.state.firstName.length < 2) errors.firstName ="First name can't be less than four"

        if(this.state.lastName === '') errors.lastName = "Can't be empty";
        else if(this.state.lastName.length < 2) errors.lastName = "Last name can't be les than two";

        if(this.state.userName === '') errors.userName = "Can't be empty";
        if(this.state.email === '') errors.email = "Can't be empty";
        if(this.state.contact === '') errors.contact = "Can't be empty";
        if(this.state.password === '') errors.password = "Can't be empty";
        else if(this.state.password !== this.state.passwordConfirmation) errors.passwordConfirmation = `Password doesn't match`

        this.setState({ errors });
        const isValid = Object.keys(errors).length === 0
        
        // const isValid = this.validate();
        if(isValid) {
            this.props.addUser({...this.state, roleTypeError: "", emailError: "", passwordError: ""});
            this.setState({
                roleName:[],
                roles:"",
                roleTypeError:"",
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

    fetchRoles({ userRole}){
        if (userRole) {
            console.log(userRole)
            return (
                userRole.map((item) => {
                        console.log(this.state)
                        return (
                            <option value={item.roleName} key={item.id}>
                                {item.roleName}
                            </option>
                        )
                    })
            )
        }
    }
    

    render(){
    
        const form = <Form onSubmit={this.submit}>
            <FormGroup>
            <Label>User Type</Label>
                <Input type="select" onChange={(e) => {this.setState({roles: e.target.value});
                            }}>
                    <option value=''>--Select--</option>
                    {this.fetchRoles(this.props.userDetail)}
                </Input>
            
            
                <span>{this.state.errors.roles}</span>
            </FormGroup>
        <FormGroup>
            <Label>FirstName</Label>
            <Input name="firstName"
                type="text"
                value={this.state.firstName}
                onChange={this.onChange}
                onKeyPress={this.OnKeyPressUserhandler} />
            <span>{this.state.errors.firstName}</span>
        </FormGroup>
        <FormGroup>
            <Label>LastName</Label>
            <Input name="lastName"
                type="text"
                value={this.state.lastName}
                onChange={this.onChange}
                onKeyPress={this.OnKeyPressUserhandler} />
            <span>{this.state.errors.lastName}</span>
        </FormGroup>
        <FormGroup>
            <Label>Username</Label>
            <Input name="userName"
                type="text"
                value={this.state.userName}
                onChange={this.onChange} />
            <span>{this.state.errors.userName}</span>
        </FormGroup>
        <FormGroup>
            <Label>Email</Label>
            <Input name="email"
                type="email"
                value={this.state.email}
                onChange={this.onChange} />
            <span>{this.state.errors.email}</span>
        </FormGroup>
        <FormGroup>
            <Label>Contact No.</Label>
            <Input name="contact"
                type="text"
                value={this.state.contact}
                onChange={this.onChange}
                onKeyPress={this.OnKeyPresshandlerPhone}
                maxLength='10'
                minLength='10' />
            <span>{this.state.errors.contact}</span>
        </FormGroup>
        <FormGroup>
            <Label>Password</Label>
            <Input name="password"
                type="password"
                value={this.state.password}
                onChange={this.onChange}
                onKeyPress={this.OnKeyPressPasswordhandler} />
            <span>{this.state.errors.password}</span>
        </FormGroup>
        <FormGroup>
            <Label>Confirm Password</Label>
            <Input name="passwordConfirmation"
                type="password"
                value={this.state.passwordConfirmation}
                onChange={this.onChange} 
                onKeyPress={this.OnKeyPressPasswordhandler} />
                <span>{this.state.errors.passwordConfirmation}</span>
        </FormGroup>
        
        <Button color="primary">Add User</Button>
    </Form>
        return (
            <div>
                <div>
                    <Link to="/user_details" >Home</Link>
                </div>
                <div className="Registration_container">
                    {this.state.isSubmit ? <Redirect {...this.props} to="/user_details"/>: form}
                </div>
            </div>
            
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        userDetail: state.userDetail
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addUser, getRoles}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Registration));


