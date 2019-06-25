import React, { Component } from "react";
import styled from "styled-components";
import { Modal } from "reactstrap";
import UpdateTransactionForm from "./UpdateTransactionForm";
import { StyledTd } from "../../styles/InstallmentStyles";
import { theme } from "../../config";

export class TransactionItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleUpdateModal: false
    };
  }

  toggleUpdateModal = () =>
    this.setState({ toggleUpdateModal: !this.state.toggleUpdateModal });

  render() {
    return (
      <Row>
        <StyledTd className="amountPaid">
          {Math.round(this.props.item.total * 100) / 100}
        </StyledTd>
        <StyledTd className="mode">{this.props.item.type}</StyledTd>
        <StyledTd className="datePaid">
          {this.props.item.date.split("T")[0]}
        </StyledTd>
        <StyledTd className="officer">{this.props.item.personnel}</StyledTd>
        <StyledTd className="actionsi">
          <i onClick={this.toggleUpdateModal} className="fas fa-edit edit" />
        </StyledTd>
        <StyledTd className="actionsi">
          <i
            onClick={this.props.deleteClientTransaction}
            className="fas fa-trash delete"
          />
        </StyledTd>
        <Modal isOpen={this.state.toggleUpdateModal}>
          <UpdateTransactionForm transaction={this.props.item} />
          <button onClick={this.toggleUpdateModal} color="secondary">
            Cancel
          </button>
        </Modal>
      </Row>
    );
  }
}

const Row = styled.tr`
  i {
    transition: all 0.15s ease;
  }

  i.delete:hover {
    color: ${theme.warning};
  }

  i.edit:hover {
    color: ${theme.accent};
  }
`;
