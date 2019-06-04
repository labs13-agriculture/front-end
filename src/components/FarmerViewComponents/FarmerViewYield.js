import React, { Component } from "react";

class FarmerViewYield extends Component{
    constructor(props){
        super(props);
    }

    addYieldData(){
        console.log("Trying to add yield data")
    }

    render(){
        return(
            <div>
                <h2>Yield History</h2>
                <i onClick={() => this.addYieldData()} class="fas fa-plus"></i>
            </div>
        );
    }
}

export default FarmerViewYield;