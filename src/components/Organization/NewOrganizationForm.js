import React, { Component } from "react";
import styled from "styled-components";
import { Input, Label, Form } from "reactstrap";

import { theme } from "../../config";

class NewOrganizationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      headquarters: "",
      beneficiaries: "",
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
    console.log("empty fields before map:", emptyFields);
    Object.keys(this.state).map(k => {
      //false booleans were evaluating to '', making it impossible to submit form
      if (
        this.state[k] === "" &&
        k !== "lead" &&
        k !== "blankField" &&
        k !== "validBeneficiaries"
      ) {
        console.log(k, this.state[k]);
        emptyFields = true;
      }
    });
    console.log("empty fields after map:", emptyFields);
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

    //Setting up Organization as object backend can expect
    const newOrganization = {
      name: this.state.name,
      lead: this.state.lead,
      beneficiaries: parseInt(this.state.beneficiaries),
      headquarters: this.state.headquarters
      //for organization, contacts and locations are arrays
    };
    this.props.submitForm(newOrganization);
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

export default NewOrganizationForm;

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
