import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import InventoryTableHead from "./InventoryTableHead";
import InventoryItem from "./InventoryItem";
import AddItemModal from "./AddItemModal";
import { clearInventoryAlerts } from "../../actions";
import { Alert } from "reactstrap";

import { theme } from "../../config";

import {
  // Import actions here
  getInventoryList,
  addItemToInventory,
  updateItemInInventory,
  deleteItemFromInventory
} from "../../actions";

function InventoryView(props) {
  // These are the stateful values
  const [useModal, setModal] = useState(false);

  useEffect(() => {
    // put in the call to get items here
    // use effect gets called on every render,
    // the 2nd argument is the stuff ti cares about, it wont run if that variable hasnt changed
    // empty array only fires on mount
    props.getInventoryList();
  }, []);

  const onDismiss = () => {
    props.clearInventoryAlerts();
  };

  return (
    <ViewContainer>
      <div className="banner">
        <h2>Inventory</h2>
      </div>

      <Alert
        style={{ marginBottom: "0", width: "100%" }}
        color="success"
        isOpen={props.addSuccess}
        toggle={onDismiss}
      >
        Add Success
      </Alert>
      <Alert
        style={{ marginBottom: "0" }}
        color="success"
        isOpen={props.updateSuccess}
        toggle={onDismiss}
      >
        Update Success
      </Alert>
      <Alert
        style={{ marginBottom: "0" }}
        color="success"
        isOpen={props.deleteSuccess}
        toggle={onDismiss}
      >
        Delete Success
      </Alert>
      <Alert
        style={{ marginBottom: "0" }}
        color="danger"
        isOpen={props.addFailure}
        toggle={onDismiss}
      >
        Failed To Add
      </Alert>
      <Alert
        style={{ marginBottom: "0" }}
        color="danger"
        isOpen={props.updateFailure}
        toggle={onDismiss}
      >
        Failed To Update
      </Alert>
      <Alert
        style={{ marginBottom: "0" }}
        color="danger"
        isOpen={props.deleteFailure}
        toggle={onDismiss}
      >
        Failed To Delete
      </Alert>
      <table className="inventory-table">
        <InventoryTableHead
          doModal={() => {
            setModal(true);
          }}
        />
        <tbody>
          {/* Inventory Cards */}
          {props.inventoryList &&
            props.inventoryList.map((i, index) => {
              return <InventoryItem key={i.id} item={i} />;
            })}
        </tbody>
      </table>

      <AddItemModal useModal={useModal} doModal={() => setModal(false)} />
    </ViewContainer>
  );
}

export default connect(
  state => ({
    //map state to props stuff here
    inventoryList: state.inventory.inventoryList,
    error: state.inventory.error,
    gettingInventory: state.inventory.gettingInventory,
    updatingInventory: state.inventory.updatingInventory,
    addingInventory: state.inventory.addingInventory,
    deletingInventory: state.inventory.deletingInventory,
    updateSuccess: state.inventory.updateSuccess,
    updateFailure: state.inventory.updateFailure,
    addSuccess: state.inventory.addSuccess,
    addFailure: state.inventory.addFailure,
    deleteSuccess: state.inventory.deleteSuccess,
    deleteFailure: state.inventory.deleteFailure
  }),
  {
    // connect actions here
    getInventoryList,
    addItemToInventory,
    updateItemInInventory,
    deleteItemFromInventory,
    clearInventoryAlerts
  }
)(InventoryView);

const ViewContainer = styled.div`
  height: 100%;
  max-height: 100vh;
  background: #f3f3f3;
  margin: 10px;
  border-radius: 2px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  .banner {
    padding: 10px;
    background: ${theme.navgrey};
    color: ${theme.background_light};
  }

  h2 {
    font-size: 3rem;
    font-weight: 700;
  }

  .inventory-table {
    width: 100%;
  }
`;
