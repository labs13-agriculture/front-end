import React, { Component } from 'react';
import styled from 'styled-components';

class NewOrganizationForm extends Component{
    constructor(props){
        super(props);
        this.state={
            name: '',
            contactName: '',
            month: 1,
            day: 1,
            year: 1900,
            email: '',
            headquarters: '',
            beneficiaries: '',
            education: '',
            gender: 'M',
            nationality: '',
            phone: '',
            position: '',
            title: '',
            address: '',
            community: '',
            district: '',
            landmark: '',
            region: '',
            lead: false,
            startyear: '',
            blankField: false,
            validYear: true,
            validBeneficiaries: true
        }
    }

    handleChanges = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    formSubmit = e =>{
        e.preventDefault();
        //make sure farmer since is a nubmer
        if(isNaN(parseInt(this.state.startyear))){
            this.setState({
                validYear: false
            })
            return;
        }

        //same thing for number of beneficiaries
        if(isNaN(parseInt(this.state.beneficiaries))){
            this.setState({
                validBeneficiaries: false
            })
            return;
        }
        let emptyFields = false;
        console.log("empty fields before map:", emptyFields);
        Object.keys(this.state).map(k => {
            //false booleans were evaluating to '', making it impossible to submit form
            if(this.state[k] === '' && k !== "lead" &&  k!== "blankField" && k!== "validYear" && k!== "validBeneficiaries"){
                console.log(k, this.state[k]);
                emptyFields = true;
            }
        })
        console.log("empty fields after map:", emptyFields);
        if(emptyFields)
        {
            this.setState({
                blankField: true
            })
            return;
        }


        this.setState({
            validYear: true,
            blankField: false,
            validBeneficiaries: true
        })

        //Setting up Organization as object backend can expect
        const newOrganization = {
            name: this.state.name,
            lead: this.state.lead,
            beneficiaries: parseInt(this.state.beneficiaries),
            headquarters: this.state.headquarters,
            startyear: parseInt(this.state.startyear),
            //for organization, contacts and locations are arrays
            organizationcontacts:[{
                dateofbirth: `${this.state.month} ${this.state.day}, ${this.state.year}`,
                educationlevel: this.state.education,
                email: this.state.email,
                gender: this.state.gender,
                name: this.state.contactName,
                nationality: this.state.nationality,
                phone: this.state.phone,
                position: this.state.position,
                title: this.state.title
            }],
            organizationlocations:[{
                address: this.state.address,
                community: this.state.community,
                district: this.state.district,
                landmark: this.state.landmark,
                region: this.state.region
            }]

        }
        this.props.submitForm(newOrganization);
    }

    render(){
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let days =[];
        for (let i = 1; i< 32; i++){days.push(i)};
        let years = [];
        for(let i = 1900; i < 2020; i++){years.push(i)};
        return(
            <ModalDiv>
                <h2>Add a Farmer</h2>
                <form onSubmit={e => this.formSubmit(e)}>
                    <label>Name:<input onChange={e => this.handleChanges(e)} type="text" name="name" value={this.state.name} /></label>
                    <label>Number of Beneficiaries:<input onChange={e => this.handleChanges(e)} type="text" name="beneficiaries" value={this.state.beneficiaries} /></label>
                    {!this.state.validBeneficiaries && <p>Please enter a number of beneficiaries</p>}
                    <label>Headquarters:<input onChange={e => this.handleChanges(e)} type="text" name="headquarters" value={this.state.headquarters} /></label>
                    <label>Contact Name:<input onChange={e => this.handleChanges(e)} type="text" name="contactName" value={this.state.contactName} /></label>
                    <label>Date of Birth:
                        <select onChange={e => this.handleChanges(e)} name="month">{months.map((m, index) => <option value={index + 1}>{m}</option>)}</select>
                        <select onChange={e => this.handleChanges(e)} name="day">{days.map((m) => <option value={m}>{m}</option>)}</select>
                        <select onChange={e => this.handleChanges(e)} name="year">{years.map((m) => <option value={m}>{m}</option>)}</select>
                    </label>
                    <label>Email:<input onChange={e => this.handleChanges(e)} type="text" name="email" value={this.state.email} /></label>
                    <label> Gender:
                        <select name="gender" onChange={e => this.handleChanges(e)} >
                            <option value="M">Male</option>
                            <option value="F">Female</option>    
                        </select>    
                    </label>
                    <label>Nationality:<input onChange={e => this.handleChanges(e)} type="text" name="nationality" value={this.state.nationality} /></label>
                    <label>Phone:<input onChange={e => this.handleChanges(e)} type="text" name="phone" value={this.state.phone} /></label>
                    <label>Position:<input onChange={e => this.handleChanges(e)} type="text" name="position" value={this.state.position} /></label>
                    <label>Education level:<input onChange={e => this.handleChanges(e)} type="text" name="education" value={this.state.education} /></label>
                    <label>Title:<input onChange={e => this.handleChanges(e)} type="text" name="title" value={this.state.title} /></label>
                    <label>Address:<input onChange={e => this.handleChanges(e)} type="text" name="address" value={this.state.address} /></label>
                    <label>Community:<input onChange={e => this.handleChanges(e)} type="text" name="community" value={this.state.community} /></label>
                    <label>District:<input onChange={e => this.handleChanges(e)} type="text" name="district" value={this.state.district} /></label>
                    <label>Landmark:<input onChange={e => this.handleChanges(e)} type="text" name="landmark" value={this.state.landmark} /></label>
                    <label>Region:<input onChange={e => this.handleChanges(e)} type="text" name="region" value={this.state.region} /></label>
                    <label>
                        Status:
                        <select onChange={e => this.handleChanges(e)} name="lead">
                            <option value={false}>Active</option>
                            <option value={true}>Lead</option>
                        </select>
                    </label>
                    <label>Organization Since:<input onChange={e => this.handleChanges(e)} type="text" name="startyear" value={this.state.startyear} /></label>
                    {!this.state.validYear && <p>Please enter a 4 digit year</p>}
                    <input type="submit" />
                </form>
                {this.state.blankField && <p>All fields are required</p>}
            </ModalDiv>
        )
    }
}

export default NewOrganizationForm;


const ModalDiv = styled.div`
    background: white;
    position: absolute;
    z-index: 1000005;
    top: 56%;
    left: 58%;
    transform: translate(-50%, -50%);
    width: 75%;
`;