import React, { Component } from "react";
import styled from "styled-components";
import { Input, Label, Form, FormGroup, Button } from "reactstrap";
import FormStyles from "../../styles/FormStyles";
import { theme } from "../../config";

class NewClientForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      secondName: "",
      month: 1,
      day: 1,
      year: 1900,
      email: "",
      education: "",
      gender: "M",
      nationality: "",
      phone: "",
      position: "",
      title: "",
      address: "",
      community: "",
      district: "",
      landmark: "",
      region: "",
      lead: false,
      startyear: "",
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
    //make sure client since is a nubmer
    if (isNaN(parseInt(this.state.startyear))) {
      this.setState({
        validYear: false
      });
      return;
    }

    let emptyFields = false;

    Object.keys(this.state).forEach(k => {
      //false booleans were evaluating to '', making it impossible to submit form
      if (
        this.state[k] === "" &&
        k !== "lead" &&
        k !== "blankField" &&
        k !== "validYear"
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
      validYear: true,
      blankField: false
    });

    //Setting up Client as object backend can expect
    const newClient = {
      firstName: this.state.firstName,
      secondName: this.state.secondName,
      lead: this.state.lead,
      startyear: parseInt(this.state.startyear),
      dateofbirth: `${this.state.year}-${
        this.state.month > 9 ? this.state.month : "0" + this.state.month
      }-${this.state.month > 9 ? this.state.month : "0" + this.state.month}`,
      educationlevel: this.state.education,
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
      region: this.state.region
    };
    this.props.submitForm(newClient);
    this.props.toggleModal();
  };

  render() {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    let days = [];
    for (let i = 1; i < 32; i++) {
      days.push(i);
    }
    let years = [];
    for (let i = 1900; i < 2020; i++) {
      years.push(i);
    }
    return (
      <ModalDiv>
        <FormStyles>
        <div className="header">
          <h2>Add {this.props.type}</h2>
        </div>
        </FormStyles>
        <Form onSubmit={e => this.formSubmit(e)}>
          <div className="form-section">
            <Label className="half">
              First Name:
              <Input
                onChange={e => this.handleChanges(e)}
                type="text"
                name="firstName"
                value={this.state.firstName}
              />
            </Label>
            <Label className="half">
              Second Name:
              <Input
                onChange={e => this.handleChanges(e)}
                type="text"
                name="secondName"
                value={this.state.secondName}
              />
            </Label>
            <Label className="most">
              Phone:
              <Input
                onChange={e => this.handleChanges(e)}
                type="text"
                name="phone"
                value={this.state.phone}
              />
            </Label>
            <Label>
              Client Since:
              <Input
                onChange={e => this.handleChanges(e)}
                type="text"
                name="startyear"
                value={this.state.startyear}
              />
            </Label>

            <Label className="most">
              Email:
              <Input
                onChange={e => this.handleChanges(e)}
                type="text"
                name="email"
                value={this.state.email}
              />
            </Label>
            <Label>
              Lead:
              <Input
                type="select"
                onChange={e => this.handleChanges(e)}
                name="lead"
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
                onChange={e => this.handleChanges(e)}
                type="text"
                name="title"
                value={this.state.title}
              />
            </Label>
            <Label className="half">
              Position:
              <Input
                onChange={e => this.handleChanges(e)}
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
                onChange={e => this.handleChanges(e)}
                type="text"
                name="address"
                value={this.state.address}
              />
            </Label>
            <Label className="half">
              Community:
              <Input
                onChange={e => this.handleChanges(e)}
                type="text"
                name="community"
                value={this.state.community}
              />
            </Label>
            <Label className="half">
              District:
              <Input
                onChange={e => this.handleChanges(e)}
                type="text"
                name="district"
                value={this.state.district}
              />
            </Label>
            <Label className="half">
              Landmark:
              <Input
                onChange={e => this.handleChanges(e)}
                type="text"
                name="landmark"
                value={this.state.landmark}
              />
            </Label>
            <Label className="half">
              Region:
              <Input
                onChange={e => this.handleChanges(e)}
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
              <Input
                type="select"
                name="gender"
                onChange={e => this.handleChanges(e)}
              >
                <option value="M">Male</option>
                <option value="F">Female</option>
              </Input>
            </Label>
            <Label>
              Date of Birth:
              <Input
                type="select"
                onChange={e => this.handleChanges(e)}
                name="month"
              >
                {months.map((m, index) => (
                  <option value={index + 1}>{m}</option>
                ))}
              </Input>
              <Input
                type="select"
                onChange={e => this.handleChanges(e)}
                name="day"
              >
                {days.map(m => (
                  <option value={m}>{m}</option>
                ))}
              </Input>
              <Input
                type="select"
                onChange={e => this.handleChanges(e)}
                name="year"
              >
                {years.map(m => (
                  <option value={m}>{m}</option>
                ))}
              </Input>
            </Label>
            <Label>
              Nationality:
              <Input
                onChange={e => this.handleChanges(e)}
                type="text"
                name="nationality"
                value={this.state.nationality}
              />
            </Label>
            <Label>
              Education level:
              <Input
                onChange={e => this.handleChanges(e)}
                type="text"
                name="education"
                value={this.state.education}
              />
            </Label>
            <FormGroup>
              <Button
                style={{ marginTop: "2%" }}
                onClick={this.props.toggleModal}
                color="warning"
              >
                Cancel
              </Button>
            </FormGroup>
          </div>
          {!this.state.validYear && <p>Please enter a 4 digit year</p>}
          <Input className="submit" type="submit" />
        </Form>
        {this.state.blankField && <p>All fields are required</p>}
      </ModalDiv>
    );
  }
}

export default NewClientForm;

const ModalDiv = styled.div`
  background: white;
  
  border-radius: 4px;

  label {
    margin: 2px;
  }
  form{
    padding: 20px;
    background:${theme.background_light};
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
`;
