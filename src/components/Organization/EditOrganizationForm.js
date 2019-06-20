import React, { Component } from "react";
import styled from "styled-components";
import { Input, Label, Form } from "reactstrap";
import { connect } from "react-redux";

import { theme } from "../../config";
import { updateOrganization } from "../../actions";

class NewOrganizationForm extends Component {
  constructor(props) {
    super(props);

    let organization = { ...props.organization };
    this.state = {
      name: organization.name,
      headquarters: organization.headquarters,
      beneficiaries: organization.beneficiaries,
      lead: false,
      validBeneficiaries: true
    };
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  formSubmit = e => {
    e.preventDefault();
    //same thing for number of beneficiaries
    if (isNaN(parseInt(this.state.beneficiaries))) {
      this.setState({
        validBeneficiaries: false
      });
      return;
    }
    let emptyFields = false;

    Object.keys(this.state).map(k => {
      if (
        this.state[k] === "" &&
        k !== "lead" &&
        k !== "blankField" &&
        k !== "validBeneficiaries"
      ) {
        emptyFields = true;
      }
    });
    if (emptyFields) {
      this.setState({
        blankField: true
      });
      return;
    }

    this.setState({
      blankField: false,
      validBeneficiaries: true
    });

    const updatedOrganization = {
      id: this.props.organization.id,
      name: this.state.name,
      lead: this.state.lead,
      beneficiaries: parseInt(this.state.beneficiaries),
      headquarters: this.state.headquarters
    };
    this.props.updateOrganization(updatedOrganization);
    this.props.closeModal();
  };

  render() {
    return (
      <ModalDiv>
        <h2>Add an Organization</h2>
        <Form onSubmit={e => this.formSubmit(e)}>
          <Label>
            Name:
            <Input
              onChange={e => this.handleChanges(e)}
              type="text"
              name="name"
              value={this.state.name}
            />
          </Label>
          <Label>
            Number of Beneficiaries:
            <Input
              onChange={e => this.handleChanges(e)}
              type="text"
              name="beneficiaries"
              value={this.state.beneficiaries}
            />
          </Label>
          {!this.state.validBeneficiaries && (
            <p>Please enter a number of beneficiaries</p>
          )}
          <Label>
            Headquarters:
            <input
              onChange={e => this.handleChanges(e)}
              type="text"
              name="headquarters"
              value={this.state.headquarters}
            />
          </Label>

          <Label>
            Status:
            <select onChange={e => this.handleChanges(e)} name="lead">
              <option value={false}>Active</option>
              <option value={true}>Lead</option>
            </select>
          </Label>
          <input type="submit" />
        </Form>
        {this.state.blankField && <p>All fields are required</p>}
      </ModalDiv>
    );
  }
}

export default connect(
  () => {},
  { updateOrganization }
)(NewOrganizationForm);

const ModalDiv = styled.div`
  background: white;
  padding: 20px;
  border-radius: 4px;

  label {
    margin: 2px;
  }

  h2 {
    margin-bottom: 20px;
  }

  .form-section {
    margin-bottom: 20px;
  }

  .full {
    width: 100%;
  }

  .most {
    width: 60%;
  }

  .half {
    width: 47%;
  }

  .submit {
    font-size: 1.8rem;
  }
  .submit:hover {
    background: ${theme.accent};
    border: 1px solid ${theme.accent};
  }
`;
