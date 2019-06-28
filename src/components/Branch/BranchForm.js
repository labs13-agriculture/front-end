import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import styled from "styled-components";
import { addBranch, updateBranch } from "../../actions";

import FormStyles from "../../styles/FormStyles";

import { theme } from "../../config";

class BranchForm extends Component {
  constructor(props) {
    super(props);
    if (props.updating) {
      this.state = {
        name: props.branch.name,
        phone: props.branch.phone,
        email: props.branch.email,
        position: props.branch.position,
        address: props.branch.address,
        district: props.branch.district,
        region: props.branch.region,
        landmark: props.branch.landmark
      };
    } else {
      this.state = {
        name: "",
        phone: "",
        email: "",
        position: "",
        address: "",
        district: "",
        region: "",
        landmark: ""
      };
    }
  }

  submitForm = e => {
    e.preventDefault();
    console.log(this.state);
    if (this.props.updating) {
      this.props.updateBranch(this.props.branch.branch_id, this.state);
      this.props.toggleModal();
    } else {
      this.props.addBranch(this.props.id, this.state);
      this.props.toggleModal();
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <FormStyles>
        <div className="header">
          {this.props.updating ? <h2>Update Branch</h2> : <h2>Add a Branch</h2>}
        </div>
        <Form
          style={{ padding: "20px", background: `${theme.background_light}` }}
          onSubmit={e => this.submitForm(e)}
        >
          <InnerContainer>
            <div>
              <h2 style={{ color: "black" }}>Contact Information</h2>
              <FormGroup>
                <Label>Name</Label>
                <Input
                  type="text"
                  onChange={e => this.handleChange(e)}
                  value={this.state.name}
                  name="name"
                />
              </FormGroup>
              <FormGroup>
                <Label>Phone</Label>
                <Input
                  type="text"
                  onChange={e => this.handleChange(e)}
                  value={this.state.phone}
                  name="phone"
                />
              </FormGroup>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  type="text"
                  onChange={e => this.handleChange(e)}
                  value={this.state.email}
                  name="email"
                />
              </FormGroup>
              <FormGroup>
                <Label>Position</Label>
                <Input
                  type="text"
                  onChange={e => this.handleChange(e)}
                  value={this.state.position}
                  name="position"
                />
              </FormGroup>
              <Button style={{ width: "90px" }}>Submit</Button>
            </div>
            <div>
              <h2 style={{ color: "black" }}>Location</h2>
              <FormGroup>
                <Label>Address</Label>
                <Input
                  type="text"
                  onChange={e => this.handleChange(e)}
                  value={this.state.address}
                  name="address"
                />
              </FormGroup>
              <FormGroup>
                <Label>District</Label>
                <Input
                  type="text"
                  onChange={e => this.handleChange(e)}
                  value={this.state.district}
                  name="district"
                />
              </FormGroup>
              <FormGroup>
                <Label>Region</Label>
                <Input
                  type="text"
                  onChange={e => this.handleChange(e)}
                  value={this.state.region}
                  name="region"
                />
              </FormGroup>
              <FormGroup>
                <Label>Landmark</Label>
                <Input
                  type="text"
                  onChange={e => this.handleChange(e)}
                  value={this.state.landmark}
                  name="landmark"
                />
              </FormGroup>
            </div>
          </InnerContainer>
          <FormGroup>
            <Button
              style={{ width: "90px", marginTop: "1%" }}
              onClick={this.props.toggleModal}
              color="warning"
            >
              Cancel
            </Button>
          </FormGroup>
        </Form>
      </FormStyles>
    );
  }
}

export default connect(
  null,
  { addBranch, updateBranch }
)(BranchForm);

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;

  div {
    width: 45%;
  }
`;
