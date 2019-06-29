import React, { Component } from "react";
import styled from "styled-components";
import { Input, Label, Form, FormGroup, Button } from "reactstrap";
import { connect } from "react-redux";
import FormStyles from "../../styles/FormStyles";

import { theme } from "../../config";
import { updateClient } from "../../actions";

class NewClientForm extends Component {
  constructor(props) {
    super(props);

    let client = { ...props.client };
    this.state = {
      firstName: client.firstName,
      secondName: client.secondName,
      dateofbirth: client.dateofbirth,
      email: client.email,
      educationlevel: client.educationlevel,
      gender: client.gender,
      nationality: client.nationality,
      phone: client.phone,
      position: client.position,
      title: client.title,
      address: client.address,
      community: client.community,
      district: client.district,
      landmark: client.landmark,
      region: client.region,
      lead: client.lead,
      startyear: client.startyear.toString(10), // This comes from backend as a number instead of a string
      type: client.type,
      blankField: false,
      validYear: true
    };
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  formSubmit = e => {
    e.preventDefault();

    let validYear = true;
    let emptyFields = false;

    //make sure client since is a 4 digit number nubmer (if they choose to enter one)

    if (
      this.state.startyear &&
      (this.state.startyear.length !== 4 ||
        isNaN(parseInt(this.state.startyear)))
    ) {
      validYear = false;
    }

    if (!this.state.phone || !this.state.firstName || !this.state.secondName) {
      emptyFields = true;
    }

    this.setState({
      validYear: validYear,
      blankField: emptyFields
    });

    if (emptyFields || !validYear) {
      return;
    }

    //Setting up Client as object backend can expect
    const updatedClient = {
      id: this.props.client.id,
      firstName: this.state.firstName,
      secondName: this.state.secondName,
      lead: this.state.lead,
      startyear: parseInt(this.state.startyear),
      dateofbirth: this.state.dateofbirth,
      educationlevel: this.state.educationlevel,
      email: this.state.email,
      gender: this.state.gender,
      name: this.state.name,
      nationality: this.state.nationality,
      phone: this.state.phone,
      position: this.state.position,
      title: this.state.title,
      address: this.state.address,
      community: this.state.community,
      district: this.state.district,
      landmark: this.state.landmark,
      region: this.state.region,
      type: this.state.type
    };

    this.props.updateClient(updatedClient, this.props.type);
    this.props.closeModal();
  };

  render() {
    return (
      <ModalDiv>
        <FormStyles>
          <div className="header">
            <h2>Edit Client</h2>
          </div>
        </FormStyles>
        <Form onSubmit={this.formSubmit}>
          <div className="form-section">
            <Label className="half">
              First Name:
              <Input
                onChange={this.handleChanges}
                type="text"
                name="firstName"
                value={this.state.firstName}
              />
            </Label>
            <Label className="half">
              Second Name:
              <Input
                onChange={this.handleChanges}
                type="text"
                name="secondName"
                value={this.state.secondName}
              />
            </Label>
            <Label className="most">
              Phone:
              <Input
                onChange={this.handleChanges}
                type="text"
                name="phone"
                value={this.state.phone}
              />
            </Label>
            <Label>
              Client Since:
              <Input
                onChange={this.handleChanges}
                type="text"
                name="startyear"
                value={this.state.startyear}
              />
            </Label>

            <Label className="most">
              Email:
              <Input
                onChange={this.handleChanges}
                type="text"
                name="email"
                value={this.state.email}
              />
            </Label>
            <Label>
              Lead:
              <Input
                type="select"
                onChange={this.handleChanges}
                name="lead"
                value={this.state.lead}
              >
                <option value={false}>False</option>
                <option value={true}>True</option>
              </Input>
            </Label>
          </div>

          <div className="form-section">
            <Label className="half">
              Title:
              <Input
                onChange={this.handleChanges}
                type="text"
                name="title"
                value={this.state.title}
              />
            </Label>
            <Label className="half">
              Position:
              <Input
                onChange={this.handleChanges}
                type="text"
                name="position"
                value={this.state.position}
              />
            </Label>
          </div>

          <div className="form-section">
            <Label className="full">
              Address:
              <Input
                onChange={this.handleChanges}
                type="text"
                name="address"
                value={this.state.address}
              />
            </Label>
            <Label className="half">
              Community:
              <Input
                onChange={this.handleChanges}
                type="text"
                name="community"
                value={this.state.community}
              />
            </Label>
            <Label className="half">
              District:
              <Input
                onChange={this.handleChanges}
                type="text"
                name="district"
                value={this.state.district}
              />
            </Label>
            <Label className="half">
              Landmark:
              <Input
                onChange={this.handleChanges}
                type="text"
                name="landmark"
                value={this.state.landmark}
              />
            </Label>
            <Label className="half">
              Region:
              <Input
                onChange={this.handleChanges}
                type="text"
                name="region"
                value={this.state.region}
              />
            </Label>
          </div>

          <div className="form-section">
            <Label>
              {" "}
              Gender:
              <Input type="select" name="gender" onChange={this.handleChanges}>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </Input>
            </Label>
            <Label>
              Date of Birth:
              <Input
                type="date"
                name="dateofbirth"
                onChange={this.handleChanges}
                value={this.state.dateofbirth}
              />
            </Label>
            <Label>
              Nationality:
              <Input
                onChange={this.handleChanges}
                type="text"
                name="nationality"
                value={this.state.nationality}
              />
            </Label>
            <Label>
              Education level:
              <Input
                onChange={this.handleChanges}
                type="text"
                name="education"
                value={this.state.educationlevel}
              />
            </Label>
            <FormGroup>
              <Button
                onClick={this.props.closeModal}
                color="warning"
                style={{ marginTop: "2%" }}
              >
                Cancel
              </Button>
            </FormGroup>
          </div>
          {!this.state.validYear && <p>Please enter a 4 digit year</p>}
          {this.state.blankField && <p>Name and phone are required</p>}
          <Input className="submit" type="submit" />
        </Form>
      </ModalDiv>
    );
  }
}

export default connect(
  () => {},
  {
    updateClient
  }
)(NewClientForm);

const ModalDiv = styled.div`
  background: white;

  border-radius: 4px;

  label {
    margin: 2px;
  }

  form {
    padding: 20px;
    background: ${theme.background_light};
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
    background: ${theme.activeblue};
    border: 1px solid ${theme.activeblue};
  }

  .modal-content {
    color: ${theme.background_dark};
    border: none;
  }
`;
