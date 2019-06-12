import React, { Component } from "react";
import SearchForm from "./SearchForm";
import { connect } from "react-redux";
import { FarmerSearchResults as SearchAction } from "../../actions/FarmerSearch"
import GlobalCardContainer from '../GlobalCardContainer';
import styled from 'styled-components';


class FarmerSearch extends Component{

    submitSearch = query =>{
        this.props.SearchAction(query);
        this.setState({
            defaultView: false
        })
    }
    

    render(){
        //console.log(this.props.farmerData);
        return(
            <div>
                <Header>Find a Farmer</Header>
                <SearchForm submitSearch={this.submitSearch}/>
                <GlobalCardContainer />
                {this.props.error && <p>Sorry, we couldn't find any farmers that match your search criteria</p>}
            </div>
        );
    }
}


const mapStateToProps = state =>{
    return{
        farmerData: state.farmerSearchData.data,
        searchStart: state.farmerSearchData.searchStart,
        searchFailure: state.farmerSearchData.searchFailure,
        error: state.farmerSearchData.error,
        searchSuccess: state.farmerSearchData.searchSuccess
    }
}

export default connect(
    mapStateToProps,
    { SearchAction }
)(FarmerSearch);

const Header = styled.h1`
    text-align: center;
    color: white;
`;