import React, { Component } from 'react';
import styled, { css } from "styled-components";
import { connect } from 'react-redux';
import GlobalClientCard from './GlobalClientCard';

class RetailerCardContainer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log("re-rendering");
        console.log(this.props.data);
        return(
            <div>
                {this.props.searchStart && <h2>Loading...</h2>}
                {this.props.searchFailure ? <p>No Retailers found</p> : null}
                {this.props.searchSuccess && this.props.data.map(r => <GlobalClientCard key={r.id} contact={Object.keys(r).find(w=>w=='retailercontact').replace('contact','')} id={r.id} name={r.name} location={r.retailerlocation}/>)}
            </div>
        )
    }
}

const mapStateToProps = state =>{
    console.log("Updating state")
    console.log(state);
    return{
        data: state.retailerSearchData.data,
        error: state.retailerSearchData.error,
        searchStart: state.retailerSearchData.searchStart,
        searchSuccess: state.retailerSearchData.searchSuccess,
        searchFailure: state.retailerSearchData.searchFailure
    }
}

export default connect(mapStateToProps)(RetailerCardContainer);