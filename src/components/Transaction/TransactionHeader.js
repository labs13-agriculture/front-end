import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Button, Modal, Alert } from "reactstrap";
import { theme } from "../../config";
import TransactionForm from "./TransactionForm";
import { StyledTd } from "../../styles/InstallmentStyles";
import { clearTransactionAlerts } from "../../actions";

function TransactionHeader(props) {
  const [modal, setModal] = useState(false);

  const toggleModal = e => {
    if (e) e.preventDefault();
    setModal(!modal);
  };

  const onDismiss = () => {
    props.clearTransactionAlerts();
  };

  return (
    <HeaderContainer>
      <div className="header">
        <h2>Transactions</h2>

        <Button className="add-transaction" onClick={toggleModal}>
          New
        </Button>
      </div>
      <table>
        <thead>
          <tr>
            <StyledTd className="amountPaid">Amount</StyledTd>
            <StyledTd className="mode">Mode</StyledTd>
            <StyledTd className="datePaid">Date</StyledTd>
            <StyledTd className="officer">Officer</StyledTd>
            <StyledTd className="actions-head">Actions</StyledTd>
          </tr>
        </thead>
      </table>

      <Alert
        style={{ marginBottom: "0" }}
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

      <Modal isOpen={modal} toggle={toggleModal}>
        <TransactionForm id={props.id} toggleModal={toggleModal} />
      </Modal>
    </HeaderContainer>
  );
}

export default connect(
  state => ({
    updateSuccess: state.clientTransactions.updateTransactionSuccess,
    updateFailure: state.clientTransactions.updateTransactionFailure,
    addSuccess: state.clientTransactions.addTransactionSuccess,
    addFailure: state.clientTransactions.addTransactionFailure,
    deleteSuccess: state.clientTransactions.deleteTransactionSuccess,
    deleteFailure: state.clientTransactions.deleteTransactionFailure
  }),
  {
    // Actions
    clearTransactionAlerts
  }
)(TransactionHeader);

const HeaderContainer = styled.div`
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  top: 0;

  .header {
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 10px;
    background-color: rgb(60, 57, 75);
    color: ${theme.background_light};

    h2 {
      margin: 0;
    }

    .add-transaction {
      &:hover {
        background: ${theme.accent};
      }
    }
  }

  table {
    /* 100% was leaving a super small sliver for some reason */
    width: 100%;
    background-color: rgb(60, 57, 75);
    color: ${theme.background_light};
  }
`;
