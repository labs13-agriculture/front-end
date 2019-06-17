import React, { Component } from "react";
import SearchForm from "./SearchForm";
import { connect } from "react-redux";
import styled from "styled-components";
import RetailerCardContainer from '../RetailerCardContainer';
import { searchRetailers, addRetailer } from "../../actions/retailerActions";
import NewRetailerForm from '../NewRetailerForm';

class RetailerSearch extends Component{
    constructor(props){
        super(props);
        this.state = {
            addingRetailer: false
        }
    }

    toggleAddRetailer = () =>{
        if(this.state.addingRetailer){
            this.setState({
                addingRetailer: false
            })
        }
        else{
            this.setState({
                addingRetailer: true
            })
        }
    }

    submitSearch = query =>{
        this.props.searchRetailers(query);
        this.setState({
            defaultView: false
        })
    }

    submitRetailer = newRetailer =>{
        console.log(newRetailer);
        this.props.addRetailer(newRetailer);
    }


    render(){
        console.log(this.props.retailerData);
        return(
            <div>
                <Header>Find a Retailer</Header>
                <SearchForm submitSearch={this.submitSearch}/>
                <RetailerCardContainer />
                {this.props.error && <p>Sorry, we couldn't find any farmers that match your search criteria</p>}
                {this.state.addingRetailer && <NewRetailerForm submitForm={this.submitRetailer} />}
                <i style={tempi} onClick={() => this.toggleAddRetailer()} class="fas fa-plus"></i>
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
    { searchRetailers, addRetailer }
)(RetailerSearch);

const Header = styled.h1`
    text-align: center;
    color: white;
`;

const tempi = {
    color: 'white'
}
