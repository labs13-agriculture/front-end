import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Button, Alert } from "reactstrap";

import { theme } from "../../config";

import { deleteItemFromInventory, updateItemInInventory } from "../../actions";

function InventoryItem(props) {
  return (
    <Container>
      <tr>
        <th className="name">Item Name</th>
        <th className="quantity">Quantity </th>
        <th className="active">Active </th>
        <th className="actions">
          <Button className="good" onClick={props.doModal}>
            Add
          </Button>
        </th>
      </tr>
    </Container>
  );
}

export default connect(
  state => ({}),
  {
    deleteItemFromInventory,
    updateItemInInventory
  }
)(InventoryItem);

const Container = styled.thead`
  width: 100%;
  background: ${theme.navgrey};
  color: ${theme.background_light};
  position: -webkit-sticky;
  position: sticky;
  top: 0;

  th {
    width: 15%;
    padding: 10px;
  }

  .name {
    width: 45%;
  }

  .active,
  .quantity {
    text-align: center;
  }

  .actions {
    text-align: right;
    width: 25%;
  }

  .good {
    transition: all 0.15s ease;

    &:hover {
      background: ${theme.accent};
    }
  }
`;
