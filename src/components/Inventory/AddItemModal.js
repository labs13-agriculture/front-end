import React, { useState } from "react";
import styled from "styled-components";
import { Button, Form, FormGroup, Label, Input, Modal } from "reactstrap";
import { connect } from "react-redux";
import StyledForm from "../../styles/FormStyles";
import { theme } from "../../config";

import {
  // For when we get there.
  addItemToInventory
} from "../../actions";

function AddItemModal(props) {
  const [newItem, setNewItem] = useState({ itemName: "", quantity: "" });

  const handleInputs = event => {
    setNewItem({
      ...newItem,
      [event.target.name]: event.target.value
    });
  };

  const submit = e => {
    e.preventDefault();
    let clean = { name: newItem.itemName, quantity: newItem.quantity };
    props.addItemToInventory(clean);
    props.doModal();
  };

  return (
    <Modal isOpen={props.useModal} toggle={props.doModal}>
      <StyledForm>
        <h2 className="header">Add New Item</h2>
        <div className="addItemForm-content">
          <FormGroup>
            <Label for="itemName">New Item Name</Label>
            <Input
              type="text"
              name="itemName"
              placeholder="New Item Name"
              value={newItem.itemName}
              onChange={handleInputs}
            />
          </FormGroup>
          <FormGroup>
            <Label for="quantity">Quantity In Stock</Label>
            <Input
              type="quantity"
              name="quantity"
              placeholder="Quantity"
              value={newItem.quantity}
              onChange={handleInputs}
            />
          </FormGroup>

          <div className="addItemForm-button-container">
            <Button onClick={submit}>Submit</Button>

            <Button color="warning" onClick={props.doModal}>
              Cancel
            </Button>
          </div>
        </div>
      </StyledForm>
    </Modal>
  );
}

export default connect(
  state => ({}),
  {
    addItemToInventory
  }
)(AddItemModal);
