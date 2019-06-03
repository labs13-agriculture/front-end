import React, { Component } from "react";
import FarmerViewDemographics from "./FarmerViewDemographics";
import FarmerViewTransactions from "./FarmerViewTransactions";
import FarmerViewInventory from "./FarmerViewInventory";
import FarmerViewInstallments from "./FarmerViewInstallments";
import FarmerViewYield from "./FarmerViewYield";

class FarmerView extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log("Mounted");
    }

    render(){
        return(
            <div>
                <FarmerViewDemographics name={"Farmer Name"} location={"Farmer location"}/>
                <div>
                    <FarmerViewTransactions />
                </div>
                <div>
                    <FarmerViewInstallments />
                </div>
                <div>
                    <FarmerViewYield />
                </div>
                <div>
                    <FarmerViewInventory />
                </div>
            </div>
        )
    }

}

export default FarmerView;