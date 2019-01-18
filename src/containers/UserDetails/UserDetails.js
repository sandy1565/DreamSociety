import React, { Component } from 'react';
import { getUsers, getRoles } from '../../Actions';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import {Dropdown, DropdownMenu,DropdownToggle,DropdownItem, Table, Button, Modal,FormGroup, ModalBody, ModalHeader, ModalFooter, Input, Label } from 'reactstrap';

class userDetails extends Component {

    state = {
        editUserData: {
            userId: "",
            roles:[],
            roleName:"",
            selectedRole:"",
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            contact: "",
            isActive:false
        },
        editUserModal: false,
        dropdownOpen: false
    }

    componentWillMount(){
        this.refreshData();
        this.props.getRoles()
    }

    toggle(){
    this.setState({dropdownOpen:!this.state.dropdownOpen})
    }
    

    refreshData(){
        this.props.getUsers();
        this.props.getRoles();
    }

    toggleEditUserModal() {
        this.setState({
          editUserModal: ! this.state.editUserModal
        });
      }
    
      updateBook() {
          console.log(this.props.userDetail)
        let { userId,roleName, firstName, lastName, userName, email, contact } = this.state.editUserData;
    
        axios.put('http://192.168.1.113:8081/api/user/' + this.state.editUserData.userId, {
            userId, roleName, firstName, lastName, userName, email, contact
        }).then((response) => {
          this.refreshData();
    
          this.setState({
            editUserModal: false, editUserData: { userId: '', roleName: '', firstName: '', lastName: '', userName: '', email: '', contact: '' }
          })
        });
      }

      editUser(userId, roleName, roles, firstName, lastName, userName, email, contact) {

        this.setState({
          editUserData: { userId,roleName, roles, firstName, lastName,userName, email, contact }, editUserModal: ! this.state.editUserModal
        });
      }

        deleteUser(userId) {
            let { isActive } = this.state.editUserData
            console.log(userId)
            const url = 'http://192.168.1.113:8081/api/user/delete/'
        axios.put(`${url}` + userId, { isActive}).then((response) => {
            this.refreshData()
            this.setState({
                editUserData: {isActive: false}
                
            })
            console.log(response)
        })
    }

    fetchUsers({user}) {
        if(user){
            console.log(user)
            return user.map((item) => {
                return (
                    <tr key={item.userId}>
                        <td>{item.userId}</td>
                        <td>{item.roles.map((item) => {
                            return item.roleName
                        })}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.userName}</td>
                        <td>{item.email}</td>
                        <td>{item.contact}</td>
                        <td>
                            <Button color="success" size="sm" className="mr-2" onClick={this.editUser.bind(this, item.userId, item.roleName, item.firstName, item.lastName, item.userName, item.email, item.contact)}>Edit</Button>
                            <Button color="danger" size="sm" onClick={this.deleteUser.bind(this, item.userId)} >Delete</Button>
                        </td>
                    </tr>
                )
            })
        }
    }

    fetchRoles({roles}){
        console.log("-------------- fetchRoles({roleName})-----------");
        if(roles){
            console.log(roles)
            return (
                <select value={roles.roleName}>
                    {roles.map((item)=>{
                        return (
                            <option>{item}</option>
                        )
                    })}
                </select>
            )
        }
    }
    

    render() {
        return (
            <div className="container">
                <h1>Users List</h1>
                <Link to="/superDashboard/registration">Add Users</Link>
                <Modal isOpen={this.state.editUserModal} toggle={this.toggleEditUserModal.bind(this)}>
                    <ModalHeader toggle={this.toggleEditUserModal.bind(this)}>Edit a new book</ModalHeader>
                    <ModalBody>
                    {/* <FormGroup>
                        <Label for="roleName">roleName</Label>
                        <Input userId="roleName" value={this.state.editUserData.roleName} onChange={(e) => {
                        let { editUserData } = this.state;

                        editUserData.roleName = e.target.value;

                        this.setState({ editUserData });
                        }} />
                    </FormGroup> */}
                    
                    <FormGroup>
                        <div>
                            <label>User Type</label>
                            <select>

                            </select>
                        </div>
                    </FormGroup>
                    
                    <FormGroup>
                        <Label for="firstName">firstName</Label>
                        <Input id="firstName" value={this.state.editUserData.firstName} onChange={(e) => {
                        let { editUserData } = this.state;

                        editUserData.firstName = e.target.value;

                        this.setState({ editUserData });
                        }} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastName">lastName</Label>
                        <Input id="lastName" value={this.state.editUserData.lastName} onChange={(e) => {
                        let { editUserData } = this.state;

                        editUserData.lastName = e.target.value;

                        this.setState({ editUserData });
                        }} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Username">Username</Label>
                        <Input id="Username" value={this.state.editUserData.userName} onChange={(e) => {
                        let { editUserData } = this.state;

                        editUserData.userName = e.target.value;

                        this.setState({ editUserData });
                        }} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">email</Label>
                        <Input id="email" value={this.state.editUserData.email} onChange={(e) => {
                        let { editUserData } = this.state;

                        editUserData.email = e.target.value;

                        this.setState({ editUserData });
                        }} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="contact">contact</Label>
                        <Input id="contact" value={this.state.editUserData.contact} onChange={(e) => {
                        let { editUserData } = this.state;

                        editUserData.contact = e.target.value;

                        this.setState({ editUserData });
                        }} />
                    </FormGroup>
                    
                    
                    </ModalBody>
                    <ModalFooter>
                    <Button color="primary" onClick={this.updateBook.bind(this)}>Update Book</Button>{' '}
                    <Button color="secondary" onClick={this.toggleEditUserModal.bind(this)}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                <Table>
                    <thead>
                        <tr>
                            <th>userId</th>
                            <th>Roles</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Contact No.</th>
                            <th>Actions</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.fetchUsers(this.props.userDetail)}
                    </tbody>
                    
                </Table>
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
    return bindActionCreators({
        getUsers,
        getRoles
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(userDetails)