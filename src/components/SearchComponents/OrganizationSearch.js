import React, { Component } from "react";
import SearchForm from "./SearchForm";
import { connect } from "react-redux";
import { OrganizationSearchResults as SearchAction } from "../../actions/OrganizationSearch"
import OrganizationCardContainer from '../OrganizationCardContainer';
import styled from 'styled-components';


class OrganizationSearch extends Component{

    submitSearch = query =>{
        this.props.SearchAction(query);
        this.setState({
            defaultView: false
        })
    }
    

    render(){
        return(
            <div>
                <Header>Find an Organization</Header>
                <SearchForm submitSearch={this.submitSearch}/>
                <OrganizationCardContainer />
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
    { SearchAction }
)(OrganizationSearch);

const Header = styled.h1`
    text-align: center;
    color: white;
`;