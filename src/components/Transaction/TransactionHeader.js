import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Button, Modal } from "reactstrap";
import { theme } from "../../config";
import TransactionForm from "./TransactionForm";
import { StyledTd } from "../../styles/InstallmentStyles";

function TransactionHeader(props){
    const [modal, setModal] = useState(false);

  const toggleModal = e => {
    e.preventDefault();
    setModal(!modal);
  };

  return (
    <HeaderContainer>
      <div className="header">
        <h2>Transactions</h2>

        <Button className="add-transaction" onClick={toggleModal}>New</Button>
      </div>
      <table>
        <thead>
          <tr>
            <StyledTd className="amountPaid">Amount</StyledTd>
            <StyledTd className="mode">Mode</StyledTd>
            <StyledTd className="datePaid">Date</StyledTd>
            <StyledTd className="officer">Officer</StyledTd>
            <StyledTd className="actions-head">
              Actions
            </StyledTd>
          </tr>
        </thead>
      </table>

      <Modal isOpen={modal} toggle={toggleModal}>
        <TransactionForm id={props.id} toggleModal={toggleModal} />
      </Modal>
    </HeaderContainer>
  );
}

export default connect(null, {})(TransactionHeader);


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
        background: ${theme.accent}
      }
    }
  }

  table {
    /* 100% was leaving a super small sliver for some reason */
    width: 100.1%;
    background-color: rgb(60, 57, 75);
    color: ${theme.background_light};
  }
`;
