import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Button, Modal, Alert } from "reactstrap";
import AddInstallmentForm from "./AddInstallmentForm";
import { theme } from "../../config";
import { StyledTd } from "../../styles/InstallmentStyles";
import { clearInstallmentAlerts } from "../../actions";

function InstallmentHeader(props) {
  const [modal, setModal] = useState(false);

  const toggleModal = e => {
    e.preventDefault();
    setModal(!modal);
  };

  const onDismiss = () => {
    props.clearInstallmentAlerts();
  };

  return (
    <HeaderContainer>
      <div className="header">
        <h2>Installments</h2>

        <Button className="add-installment" onClick={toggleModal}>
          New
        </Button>
      </div>
      <table>
        <thead>
          <tr>
            <StyledTd className="amountPaid">Amount Paid</StyledTd>
            <StyledTd className="mode">Mode</StyledTd>
            <StyledTd className="datePaid">Date Paid</StyledTd>
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
        <AddInstallmentForm toggleModal={toggleModal} />
      </Modal>
    </HeaderContainer>
  );
}

export default connect(
  state => ({
    updateSuccess: state.installments.updateSuccess,
    updateFailure: state.installments.updateFailure,
    addSuccess: state.installments.addSuccess,
    addFailure: state.installments.addFailure,
    deleteSuccess: state.installments.deleteSuccess,
    deleteFailure: state.installments.deleteFailure
  }),
  {
    // Actions
    clearInstallmentAlerts
  }
)(InstallmentHeader);

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

    .add-installment {
      &:hover {
        background: ${theme.accent};
      }
    }
  }

  table {
    width: 100%;
    background-color: rgb(60, 57, 75);
    color: ${theme.background_light};
  }
`;
