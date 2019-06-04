import React, { Component } from "react";

class FarmerViewTransactions extends Component{
    constructor(props){
        super(props);
    }

    addTransaction(){
        console.log("Trying to add transaction");
    }

    render(){
        return(
            <div>
                <h2>Transactions</h2>
                <i onClick={() => this.addTransaction()} class="fas fa-plus"></i>
            </div>
        );
    }
}

export default FarmerViewTransactions;