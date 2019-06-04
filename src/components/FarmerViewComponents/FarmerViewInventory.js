import React, { Component } from "react";

class FarmerViewInventory extends Component{
    constructor(props){
        super(props)
    }

    addInventoryItem(){
        console.log("Trying to add inventory item");
    }

    render(){
        return(
            <div>
                <h2>Inventory</h2>
                <i onClick={() => this.addInventoryItem()} class="fas fa-plus"></i>
            </div>
        );
    }
}

export default FarmerViewInventory;