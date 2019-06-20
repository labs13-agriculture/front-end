import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import styled from 'styled-components';
import { addBranch, updateBranch } from "../../actions";

class NewBranchForm extends Component{
    constructor(props){
        super(props);
        if(props.updating){
            this.state={
                name: props.branch.name,
                phone: props.branch.phone,
                email: props.branch.email,
                position: props.branch.position,
                address: props.branch.address,
                district: props.branch.district,
                region: props.branch.region,
                landmark: props.branch.landmark 
            }
        }
        else{
            this.state={
                name: "",
                phone: "",
                email: "",
                position: "",
                address: "",
                district: "",
                region: "",
                landmark: ""
            }
        }
    }

    submitForm = e =>{
        e.preventDefault();
        console.log(this.state);
        if(this.props.updating){
            this.props.updateBranch(this.props.branch.branch_id, this.state);
        }
        else{
            this.props.addBranch(55, this.state);
        }
    }

    handleChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <Form onSubmit={e => this.submitForm(e)}>
                {this.props.updating ? <h1>Update Branch</h1> : <h1>Add a Branch</h1> }
                <InnerContainer>
                    <div>
                        <h2>Contact Information</h2>
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
                    </div>
                    <div>
                        <h2>Location</h2>
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
                <Button>Submit</Button>
            </Form>
        )
    }
}

export default connect(null, { addBranch, updateBranch })(NewBranchForm);

const InnerContainer = styled.div`
    display: flex;
    flex-direction: row;

    div{
        width: 45%;
    }
`;