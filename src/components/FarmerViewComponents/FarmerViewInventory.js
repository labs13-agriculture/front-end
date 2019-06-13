import React, { Component } from "react";

import { getInventoryCardData } from "../../actions";
import { connect } from "react-redux";

class FarmerViewInventory extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getInventoryCardData();
  }

  addInventoryItem() {
    console.log("Trying to add inventory item");
  }

  render() {
    return (
      <div>
        <h2>Inventory</h2>
        {this.props.inventoryCardDataStart && <h1>Loading ... </h1>}
        {this.props.inventoryCardDataSuccess &&
          this.props.inventoryCardData.map(inventory => (
            <div key={inventory.invid}>
              <span> NUMBER OF BAGS --- {inventory.numbag}</span>
              <br />
              <span> GOAL --- {inventory.goal}</span>
            </div>
          ))}
        <i onClick={() => this.addInventoryItem()} class="fas fa-plus" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("inventory map state to props fireing");
  return {
    inventoryCardData: state.inventoryCardData.data,
    inventoryCardDataStart: state.inventoryCardData.inventoryCardDataStart,
    inventoryCardDataSuccess: state.inventoryCardData.inventoryCardDataSuccess,
    inventoryCardDataFailure: state.inventoryCardData.inventoryCardDataFailure,
    error: state.inventoryCardData.error
  };
};

export default connect(
  mapStateToProps,
  { getInventoryCardData }
)(FarmerViewInventory);
