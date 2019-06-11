import React, { Component } from "react";
import RetailerSearchForm from "./RetailerSearchForm";
import RetailerSearchCard from "./RetailerSearchCard";
import { connect } from "react-redux";
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
                <h1>Find a Retailer</h1>
                <RetailerSearchForm submitSearch={this.submitSearch}/>
                {this.state.defaultView && <p>Enter your search terms above to get started!</p>}
                {this.props.searchSuccess && this.props.retailerData.map(r => <RetailerSearchCard key={r.id} retailer={r}/>)}
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