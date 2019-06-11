import React, { Component } from "react";
import SearchForm from "./SearchForm";
import { connect } from "react-redux";
import styled from "styled-components";
import GlobalCardContainer from '../GlobalCardContainer';
import { RetailerSearchResults as SearchAction } from "../../actions/RetailerSearch";

class RetailerSearch extends Component{
    constructor(props){
        super(props);
        this.state = {
            defaultView: true
        }
    }

    submitSearch = query =>{
        this.props.SearchAction(query);
        this.setState({
            defaultView: false
        })
    }


    render(){
        console.log(this.props.retailerData);
        return(
            <div>
                <Header>Find a Retailer</Header>
                <SearchForm submitSearch={this.submitSearch}/>
                <GlobalCardContainer />
                {this.props.error && <p>Sorry, we couldn't find any retailers that match your search criteria</p>}
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return{
        retailerData: state.retailerSearchData.data,
        searchStart: state.retailerSearchData.searchStart,
        searchFailure: state.retailerSearchData.searchFailure,
        error: state.retailerSearchData.error,
        searchSuccess: state.retailerSearchData.searchSuccess
    }
}

export default connect(
    mapStateToProps,
    { SearchAction }
)(RetailerSearch);

const Header = styled.h1`
    text-align: center;
    color: white;
`;