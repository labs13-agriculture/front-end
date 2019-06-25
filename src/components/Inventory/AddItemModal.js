import React, { useState } from "react";
import styled from "styled-components";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";

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
    <Modal>
      <div onClick={props.doModal} className="center">
        <div onClick={event => event.stopPropagation()} className="content">
          <Form>
            <FormGroup>
              <h1>Add New Item</h1>
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

            <div style={{ width: "100px", marginBottom: "1%" }}>
              <Button
                style={{ width: "100px", marginBottom: "1%" }}
                onClick={submit}
              >
                Submit
              </Button>
              <Button
                style={{ width: "100px", marginBottom: "1%" }}
                color="warning"
                onClick={props.doModal}
              >
                Cancel
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </Modal>
  );
}

export default connect(
  state => ({}),
  {
    addItemToInventory
  }
)(AddItemModal);

const Modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);

  .center {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  .exit {
    position: fixed;
    top: 15px;
    left: 15px;
  }

  .content {
    background: #fefefe;
    min-width: 350px;
    width: 50%;
    padding: 10px;

    border-radius: 5px;

    font-size: 2rem;

    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.4);
  }
`;
