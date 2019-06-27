import React, { Component } from "react";
import styled from "styled-components";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { updateSystemUser, deleteSystemUser } from "../../actions";

class UserDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
      userRoles: []
    };
  }

  handleInputChange = event => {
    const target = event.target;
    const value =
      target.name === "userRoles"
        ? [...event.target.options]
            .filter(({ selected }) => selected)
            .map(({ value }) => {
              return { role: { name: value } };
            })
        : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  addNewSystemUser = userDetails => {
    this.props.addNewSystemUser(userDetails);
  };

  render() {
    return (
      <StyledUserDetails>
        {/* <i className="far fa-window-close" onClick={()=>window.history.back()}></i> */}
        {/* <StyledRegisterDetailsContainer> */}
        <Form>
          <FormGroup>
            <h1>Update User Details</h1>
            <Label for="username">Username</Label>
            <Input
              type="username"
              name="username"
              id="text"
              placeholder={this.props.username}
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="ENTER NEW PASSWORD"
              onChange={this.handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleSelectMulti">Role</Label>
            <Input
              type="select"
              name="userRoles"
              id="exampleSelectMulti"
              multiple
              onChange={this.handleInputChange}
            >
              <option>user</option>
              <option>admin</option>
            </Input>
          </FormGroup>
          <FormGroup
            style={{ display: "flex", flexDirection: "column", margin: "0" }}
          >
            <Button
              style={{ width: "100px", marginBottom: "1%" }}
              onClick={() =>
                this.props.updateSystemUser(this.state, this.props.userid)
              }
            >
              UPDATE
            </Button>
            <Button
              style={{ width: "100px", marginBottom: "1%" }}
              color="danger"
              onClick={() => this.props.deleteSystemUser(this.props.userid)}
            >
              DELETE
            </Button>
          </FormGroup>
        </Form>

        {/* </StyledRegisterDetailsContainer> */}
      </StyledUserDetails>
    );
  }
}

const mapStateToProps = state => {
  return {
    updateSystemUserStart: state.userReducer.updateSystemUserStart,
    updateSystemUserFailure: state.userReducer.updateSystemUserFailure,
    updateSystemUserSuccess: state.userReducer.updateSystemUserSuccess,
    updateSystemUserData: state.userReducer.data,
    updateSystemUserError: state.userReducer.error
  };
};

export default connect(
  mapStateToProps,
  { updateSystemUser, deleteSystemUser }
)(UserDetails);

const StyledUserDetails = styled.div`
  ${"" /* position:absolute;
    height:100%;
    width:100%;
    background: #00000054;  
    display:flex;
    justify-content:center;
    align-items:center; */}

  .far.fa-window-close {
    color: white;
    font-size: 40px;
    right: 0;
    position: absolute;
    top: 0;
    &:hover {
      cursor: pointer;
    }
  }
`;
