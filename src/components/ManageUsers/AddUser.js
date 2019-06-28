import React, { Component } from "react";
import styled from "styled-components";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { addNewSystemUser } from "../../actions";
import FormStyles from '../../styles/FormStyles';
import { theme } from "../../config";

class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {};
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
      <OuterDiv>
        <FormStyles className="addUser-formContainer">
          <div className="header">
            <h2>Add a User</h2>
          </div>
          <Form className="formContainer">
            <FormGroup className="addUser-formGroup">
              <Label for="username">Username</Label>
              <Input
                type="username"
                name="username"
                id="text"
                placeholder="Username"
                onChange={this.handleInputChange}
              />
            </FormGroup >
            <FormGroup className="addUser-formGroup">
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="password"
                onChange={this.handleInputChange}
              />
            </FormGroup>

            <FormGroup className="addUser-formGroup">
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
            <FormGroup className="addUser-formGroup-button" styles="margin-bottom: none">
            <Button
              className="addUser-submit"
              style={{ width: "100px" }}
              onClick={() => this.addNewSystemUser(this.state)}
            >
              Submit
            </Button>
            <Button
              style={{ width: "100px"}}
              color="warning"
              onClick={this.props.toggleModal}
            >
              Cancel
            </Button>
            </FormGroup>
          </Form>
        </FormStyles>
      </OuterDiv>
    );
  }
}

const mapStateToProps = state => {
  return {
    addSystemUserStart: state.userReducer.addSystemUserStart,
    addSystemUserFailure: state.userReducer.addSystemUserFailure,
    addSystemUserSuccess: state.userReducer.addSystemUserSuccess,
    addSystemUserData: state.userReducer.data,
    addSystemUserError: state.userReducer.error
  };
};

export default connect(
  mapStateToProps,
  { addNewSystemUser }
)(AddUser);

const OuterDiv = styled.div`
  background: ${theme.background_light};
`;

