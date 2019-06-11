import React, { Component } from "react";
import styled, { css } from "styled-components";

class SearchForm extends Component{
    constructor(props){
        super(props);
        this.state={
            name: '',
            location: '',
            includeActive: true,
            includeLeads: false,
            needCheckbox: false
        }
    }

    submitForm = e =>{
        e.preventDefault();
        let includeLeads = "";
        //first make sure one of the checkboxes is selected
        if(!this.state.includeActive && !this.state.includeLeads){
            //trigger error handling and exit function before making axios call
            this.setState({
                needCheckbox: true
            })
            return;
        }
        //clear any error handling that was triggered before
        this.setState({
            needCheckbox: false
        })
        if(this.state.includeActive && this.state.includeLeads){
            includeLeads = "both";
        } else if(this.state.includeActive && !this.state.includeLeads){
            includeLeads = "false";
        } else if (!this.state.includeActive && this.state.includeLeads){
            includeLeads = "true";
        }
        const query = {
            name: this.state.name,
            location: this.state.location,
            leads: includeLeads
        }
        this.props.submitSearch(query);
    }

    handleChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    clickChange = e =>{
        this.setState({
            [e.target.name]: !this.state[e.target.name]
        })
    }

    render(){
        return(
        <StyledForm onSubmit={e => this.submitForm(e)}>
            <label className="name">
                Name:
                <input 
                    onChange={e => this.handleChange(e)}
                    type="text"
                    name="name"
                    value={this.state.name}
                />
            </label>
            <label className="location">
                Location:
                <input 
                    onChange={e => this.handleChange(e)}
                    type="text"
                    name="location"
                    value={this.state.location}
                />
            </label>
            <label className="checkbox">
                Active
                <input 
                    onClick={e => this.clickChange(e)} 
                    type="checkbox" 
                    name="includeActive" 
                    value="active" 
                    checked={this.state.includeActive} 
                />
            </label>
            <label className="checkbox">
                Leads
                <input 
                    onClick={e => this.clickChange(e)} 
                    type="checkbox" 
                    name="includeLeads" 
                    value = "leads" 
                    checked={this.state.includeLeads}
                />
            </label>
            {this.state.needCheckbox && <p>Please select at least one option</p>}
            <input className="submitButton" type="submit" />
        </StyledForm>
        )
    }
}

export default SearchForm;

//styles here

const sizes = {
    desktop: 992,
    tablet: 768,
    phone: 576
  };
  
  const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) =>
      css`
        @media (max-width: ${sizes[label]}px) {
          ${css(...args)}
        }
      `;
  
    return acc;
  }, {});

const StyledForm = styled.form`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    width: 95%;
    color: white;
    margin: 10px auto;


    label{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }

    .name{
        width: 100%;

        input{
            width: 87.5%;
        }
    }
    .location{
        width: 50%;

        input{
            width: 75%;
            margin: auto;
        }
    }

    .checkbox{
        width: 10%;
        justify-content: space-around;
    }

    .submitButton{
        width: 20%;
    }
`;