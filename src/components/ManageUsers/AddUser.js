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
                <i className="far fa-window-close" onClick={()=>window.history.back()}></i>
                <StyledRegisterDetailsContainer>
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

                </StyledRegisterDetailsContainer>
            </StyledUserDetails>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        addSystemUserStart:state.addSystemUserReducer.addSystemUserStart,
        addSystemUserFailure:state.addSystemUserReducer.addSystemUserFailure,
        addSystemUserSuccess:state.addSystemUserReducer.addSystemUserSuccess,
        addSystemUserData:state.addSystemUserReducer.data,
        addSystemUserError:state.addSystemUserReducer.error,


    }
}

export default connect(mapStateToProps,{addNewSystemUser})(AddUser);


const StyledUserDetails = styled.div`
    position:absolute;
    height:100%;
    width:100%;
    background: #00000054;
    display:flex;
    justify-content:center;
    align-items:center;

    .far.fa-window-close{
        color:white;
        font-size:40px;
        right:0;
        position: absolute;
        top: 0;
        &:hover{
            cursor:pointer;
        }
    }

`

const StyledRegisterDetailsContainer = styled.div`
    height:500px;
    width:400px;
    background:white;
    padding:20px;

    .credential-input{
        margin:20px;
        display:flex;
        flex-direction:column;
        align-items:space-around;
    }


`