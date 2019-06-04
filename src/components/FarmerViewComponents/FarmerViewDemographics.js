import React, { Component } from "react";

class FarmerViewDemographics extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.location}</p>
            </div>
        );
    }
}

export default FarmerViewDemographics;