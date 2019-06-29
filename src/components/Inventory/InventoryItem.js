import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Input } from "reactstrap";

import { theme } from "../../config";
import { deleteItemFromInventory, updateItemInInventory } from "../../actions";

function InventoryItem(props) {
  let { item } = props;

  // these are the state
  const [isEditing, setIsEditing] = useState(false);
  // this feels dirty
  const [isActive, setIsActive] = useState(item.active);
  const [newQty, setNewQty] = useState(0);

  const toggleEditing = event => {
    event.preventDefault();
    setIsEditing(!isEditing);
  };

  const toggleActive = event => {
    setIsActive(!isActive);
  };

  const handleQty = event => {
    setNewQty(event.target.value);
  };

  const submitUpdate = event => {
    event.preventDefault();
    item.active = isActive;
    item.quantity = newQty > 0 ? newQty : item.quantity;
    props.updateItemInInventory(item);
    setIsEditing(false);
  };

  return (
    <Container>
      {/* otherwise lets use the item passed to populate some fields */}
      <td className="name">{item.name}</td>
      {/* if editing its the quantity input otherwise it just displays item quantity */}
      <td className="quantity">
        {isEditing ? (
          <Input
            className="qty-input"
            type="text"
            name="quantity"
            placeholder={item.quantity}
            onChange={handleQty}
            value={newQty}
          />
        ) : (
          item.quantity
        )}
      </td>

      <td className="active">
        {isEditing ? (
          <Input
            className="active-input"
            type="checkbox"
            name="active"
            checked={isActive}
            onChange={toggleActive}
          />
        ) : item.active ? (
          "True"
        ) : (
          "False"
        )}
      </td>

      {/* This section contains all the buttons */}
      <td className="actions">
        {isEditing ? (
          <i class="fas fa-window-close bad" onClick={toggleEditing} />
        ) : (
          <i onClick={toggleEditing} className="fas fa-edit good" />
        )}

        {isEditing ? (
          <i class="fas fa-check-square good" onClick={submitUpdate} />
        ) : (
          <i
            className="fas fa-trash delete bad"
            onClick={() => props.deleteItemFromInventory(item.id)}
          />
        )}
      </td>
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

const Container = styled.tr`
  width: 100%;

  &:nth-of-type(even) {
    background: lightgray;
  }

  td {
    width: 15%;
    padding: 10px;
  }

  i {
    font-size: 2rem;

    &:last-child {
      margin-left: 15px;
    }
  }

  .form-check-input {
    position: unset;
  }

  .name {
    width: 40%;
  }

  .active,
  .quantity {
    text-align: center;
  }

  .active {
    vertical-align: middle;
    padding: 0;
  }

  .actions {
    text-align: right;
    width: 20%;
  }

  i {
    transition: all 0.15s ease;
  }
  .good:hover {
    color: ${theme.accent};
  }

  .bad:hover {
    color: ${theme.warning};
  }
`;
