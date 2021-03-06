import React, { Component } from "react";
import styled from "styled-components";
import { Input, Label, Form, FormGroup, Button } from "reactstrap";
import { connect } from "react-redux";
import FormStyles from "../../styles/FormStyles";

import { theme } from "../../config";
import { updateOrganization } from "../../actions";

class NewOrganizationForm extends Component {
  constructor(props) {
    super(props);

    let organization = { ...props.organization };
    this.state = {
      name: organization.name,
      headquarters: organization.headquarters,
      beneficiaries: organization.beneficiaries.toString(10),
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
    let validBeneficiaries = true;
    //If they entered a number of beneficiaries, check if it's valid
    if (
      this.state.beneficiaries.length > 0 &&
      isNaN(parseInt(this.state.beneficiaries))
    ) {
      validBeneficiaries = false;
    }
    let emptyFields = false;

    if (this.state.name === "") {
      emptyFields = true;
    }

    this.setState({
      blankField: emptyFields,
      validBeneficiaries: validBeneficiaries
    });

    if (emptyFields || !validBeneficiaries) {
      return;
    }

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
      <FormStyles>
        <div className="header">
          <h2>Edit Organization</h2>
        </div>
        <ModalDiv>
          <Form
            style={{
              display: "flex",
              flexDirection: "column"
            }}
            onSubmit={e => this.formSubmit(e)}
          >
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
              <Input
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
              <FormGroup>
                <Button
                  style={{ width: "100px", marginTop: "1%" }}
                  onClick={this.props.closeModal}
                  color="warning"
                >
                  Cancel
                </Button>
              </FormGroup>
            </Label>
            {this.state.blankField && <p>Name is required</p>}
            {!this.state.validBeneficiaries && (
              <p>Beneficiaries must be a number</p>
            )}
            <input type="submit" />
          </Form>
        </ModalDiv>
      </FormStyles>
    );
  }
}

export default connect(
  state => ({}),
  { updateOrganization }
)(NewOrganizationForm);

const ModalDiv = styled.div`
  background: ${theme.background_light};
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
