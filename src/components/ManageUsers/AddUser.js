import React, {Component} from "react";
import styled from "styled-components";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from "react-redux";
import {addNewSystemUser} from "../../actions";


class AddUser extends Component{
    constructor(props){
        super(props);

        this.state = {
            
        }
    }

    handleInputChange = event => {
        const target = event.target;
        const value = target.name === 'userRoles' ? [...event.target.options].filter(({selected}) => selected).map(({value}) => {return {"role":{"name":value}}}) : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    addNewSystemUser = (userDetails) =>{
        this.props.addNewSystemUser(userDetails);
    }

   
    render(){
        return(
            <StyledUserDetails>
          
                <Form>
                    <FormGroup>
                    <h1>Create New User</h1>
                    <Label for="username">Username</Label>
                    <Input type="username" name="username" id="text" placeholder="Username" onChange={this.handleInputChange}/>
                    </FormGroup>
                    <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="password" onChange={this.handleInputChange} />
                    </FormGroup>
                  
                    <FormGroup>
                    <Label for="exampleSelectMulti">Role</Label>
                    <Input type="select" name="userRoles" id="exampleSelectMulti" multiple onChange={this.handleInputChange}>
                        <option>user</option>
                        <option>admin</option>
                        
   
                    </Input>
                    </FormGroup>
                    
                    <Button onClick={() =>this.addNewSystemUser(this.state)}>Submit</Button>
                </Form>

            </StyledUserDetails>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        addSystemUserStart:state.userReducer.addSystemUserStart,
        addSystemUserFailure:state.userReducer.addSystemUserFailure,
        addSystemUserSuccess:state.userReducer.addSystemUserSuccess,
        addSystemUserData:state.userReducer.data,
        addSystemUserError:state.userReducer.error,


    }
}

export default connect(mapStateToProps,{addNewSystemUser})(AddUser);


const StyledUserDetails = styled.div`
   

`

const StyledRegisterDetailsContainer = styled.div`
    


`