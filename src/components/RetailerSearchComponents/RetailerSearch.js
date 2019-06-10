import React, { Component } from "react";
import RetailerSearchForm from "./RetailerSearchForm";

class RetailerSearch extends Component{
    constructor(props){
        super(props);
    }

    submitSearch = query =>{
        console.log(query);
    }


    render(){
        return(
            <RetailerSearchForm submitSearch={this.submitSearch}/>
        );
    }
}

export default RetailerSearch;