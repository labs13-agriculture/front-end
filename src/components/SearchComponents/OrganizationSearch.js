import React, { Component } from "react";
import SearchForm from "./SearchForm";
import { connect } from "react-redux";
import { searchOrganizations, addOrganization } from "../../actions/organizationActions"
import OrganizationCardContainer from '../OrganizationCardContainer';
import styled from 'styled-components';
import NewOrganizationForm from '../NewOrganizationForm';

class OrganizationSearch extends Component{
    constructor(props){
        super(props);
        this.state={
            addingOrganization:false
        }
    }

    submitSearch = query =>{
        this.props.searchOrganizations(query);
    }

    toggleAddOrganization = () =>{
        if(this.state.addingOrganization){
            this.setState({
                addingOrganization: false
            })
        }
        else{
            this.setState({
                addingOrganization: true
            })
        }
    }

    submitOrganization = newOrganization =>{
        console.log(newOrganization);
        this.props.addOrganization(newOrganization);
    }
    

    render(){
        return(
            <div>
                <Header>Find an Organization</Header>

                {/* Search Bar */}
                <SearchForm submitSearch={this.submitSearch}/>

                {/* Displays Cards */}
                <OrganizationCardContainer />

                {/* Add Organization Form */}
                {this.state.addingOrganization && <NewOrganizationForm submitForm={this.submitOrganization} />}
                <i style={tempi} onClick={() => this.toggleAddOrganization()} class="fas fa-plus"></i>
            </div>
        );
    }
}


const mapStateToProps = state =>{
    return{
        organizationData: state.organizationSearchData.data,
        searchStart: state.organizationSearchData.searchStart,
        searchFailure: state.organizationSearchData.searchFailure,
        error: state.organizationSearchData.error,
        searchSuccess: state.organizationSearchData.searchSuccess
    }
}

export default connect(
    mapStateToProps,
    { searchOrganizations, addOrganization }
)(OrganizationSearch);

const Header = styled.h1`
    text-align: center;
    color: white;
`;

const tempi = {
    color: 'white'
}
