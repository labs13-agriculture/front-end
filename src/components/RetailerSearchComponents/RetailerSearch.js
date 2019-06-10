import React, { Component } from "react";
import RetailerSearchForm from "./RetailerSearchForm";
import { connect } from "react-redux";
import { RetailerSearchResults as SearchAction } from "../../actions/RetailerSearch";

class RetailerSearch extends Component{
    constructor(props){
        super(props);
    }

    submitSearch = query =>{
        this.props.SearchAction(query);
    }


    render(){
        console.log(this.props.retailerData);
        return(
            <div>
                <RetailerSearchForm submitSearch={this.submitSearch}/>
                {this.props.searchSuccess && this.props.retailerData.map(r => <div>{r.name}</div>)}
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