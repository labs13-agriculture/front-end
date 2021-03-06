import React, { Component } from "react";
import styled from "styled-components";
import { Modal } from "reactstrap";
import UpdateTransactionForm from "./UpdateTransactionForm";
import { StyledTd } from "../../styles/InstallmentStyles";
import { theme } from "../../config";
import { deleteClientTransaction } from "../../actions";
import { connect } from "react-redux";

class TransactionItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ModalOpen: false
    };
  }

  deleteTransaction = () => {
    let d = window.confirm(
      "Are you sure you want to PERMANENTLY DELETE this transaction?"
    );
    if (d) {
      this.props.deleteClientTransaction(this.props.item.id);
    }
  };

  toggleUpdateModal = () => this.setState({ ModalOpen: !this.state.ModalOpen });

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
            onClick={() => this.deleteTransaction()}
            className="fas fa-trash delete"
          />
        </StyledTd>
        <Modal isOpen={this.state.ModalOpen} toggle={this.toggleUpdateModal}>
          <UpdateTransactionForm
            toggleModal={this.toggleUpdateModal}
            transaction={this.props.item}
          />
        </Modal>
      </Row>
    );
  }
}

export default connect(
  null,
  { deleteClientTransaction }
)(TransactionItem);

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
