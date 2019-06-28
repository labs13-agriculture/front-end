import React, { Component } from "react";
import FormStyles from '../../styles/FormStyles';
import styled from 'styled-components';
import { theme } from '../../config';
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
      <OuterDiv>
        <FormStyles>
          <div className="header">
            <h2>Update User Details</h2>
          </div>
          <Form className="updateUser-form">
            <FormGroup>
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
            <FormGroup>
              <div className="updateUser-buttons">
                <Button
                  onClick={() =>
                    this.props.updateSystemUser(this.state, this.props.userid)
                  }
                >
                  UPDATE
                </Button>
                <Button
                  color="danger"
                  onClick={() => this.props.deleteSystemUser(this.props.userid)}
                >
                  DELETE
                </Button>
                <Button
                onClick={this.props.toggleUpdateModal}
                color="warning"
              >
                CANCEL
              </Button>
              </div>
            </FormGroup>
          </Form>
        </FormStyles>
      </OuterDiv>
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

const OuterDiv = styled.div`
  background: ${theme.background_light};
`;


