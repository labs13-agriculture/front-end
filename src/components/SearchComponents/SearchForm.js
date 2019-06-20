import React, { Component } from "react";
import StyledForm from "../../styles/searchStyles";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      location: "",
      includeLeads: false
    };
  }

  submitForm = e => {
    e.preventDefault();
    let includeLeads = "";
    if (this.state.includeLeads) {
      includeLeads = "true";
    } else {
      includeLeads = "false";
    }
    const query = {
      name: this.state.name,
      location: this.state.location,
      leads: includeLeads
    };
    this.props.submitSearch(query);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  clickChange = e => {
    if (this.state.includeLeads) {
      this.setState({
        includeLeads: false
      });
    } else {
      this.setState({
        includeLeads: true
      });
    }
  };

  render() {
    return (
      <StyledForm onSubmit={e => this.submitForm(e)}>
        <label className="name">
         
          <input
            onChange={e => this.handleChange(e)}
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
          />
        </label>
        <label className="location">
          
          <input
            onChange={e => this.handleChange(e)}
            type="text"
            name="location"
            placeholder="Location"
            value={this.state.location}
          />
        </label>
       
        
        <div>
          <label className="checkbox">
            Active
            <input
              onClick={e => this.clickChange(e)}
              type="radio"
              name="includeActive"
              value="active"
              checked={!this.state.includeLeads}
            />
          </label>
          <label className="checkbox">
            Leads
            <input
              onClick={e => this.clickChange(e)}
              type="radio"
              name="includeLeads"
              value="leads"
              checked={this.state.includeLeads}
            />
          </label>
        </div>
        <input className="submitButton" value="SUBMIT" type="submit" />
        
      </StyledForm>
    );
  }
}

export default SearchForm;

//styles here
