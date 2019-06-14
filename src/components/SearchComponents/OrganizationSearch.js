import React, { Component } from "react";
import SearchForm from "./SearchForm";
import { connect } from "react-redux";
import { OrganizationSearchResults as SearchAction } from "../../actions/OrganizationSearch"
import OrganizationCardContainer from '../OrganizationCardContainer';
import styled from 'styled-components';
import NewOrganizationForm from '../NewOrganizationForm';
import { addOrganization } from '../../actions/organizationPost';


class OrganizationSearch extends Component{
    constructor(props){
        super(props);
        this.state={
            addingOrganization:false
        }
    }

    submitSearch = query =>{
        this.props.SearchAction(query);
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
                <SearchForm submitSearch={this.submitSearch}/>
                <OrganizationCardContainer />
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
    { SearchAction, addOrganization }
)(OrganizationSearch);

const Header = styled.h1`
    text-align: center;
    color: white;
`;

const tempi = {
    color: 'white'
}
