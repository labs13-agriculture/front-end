import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Button, Modal } from "reactstrap";
import AddInstallmentForm from "./AddInstallmentForm";
import { theme } from "../../config";
import { StyledTd } from "../../styles/InstallmentStyles";

function InstallmentHeader(props) {
  const [modal, setModal] = useState(false);

  const toggleModal = e => {
    e.preventDefault();
    setModal(!modal);
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
            <StyledTd className="amountPaid">Amount</StyledTd>
            <StyledTd className="mode">Mode</StyledTd>
            <StyledTd className="datePaid">Date</StyledTd>
            <StyledTd className="officer">Officer</StyledTd>
            <StyledTd className="actions-head">Actions</StyledTd>
          </tr>
        </thead>
      </table>

      <Modal isOpen={modal} toggle={toggleModal}>
        <AddInstallmentForm toggleModal={toggleModal} />
      </Modal>
    </HeaderContainer>
  );
}

export default connect(
  null,
  {
    // Actions
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
