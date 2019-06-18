import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { theme } from "../../config";
import { StyledTd } from "../../styles/InstallmentStyles";

function InstallmentHeader(props) {
  return (
    <HeaderContainer>
      <div className="header">
        <h2>Installments</h2>

        <Button>New</Button>
      </div>
      <table>
        <tr>
          <StyledTd className="amountPaid">Amount Paid</StyledTd>
          <StyledTd className="mode">Mode</StyledTd>
          <StyledTd className="datePaid">Date Paid</StyledTd>
          <StyledTd className="officer">Officer</StyledTd>
        </tr>
      </table>
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
  }

  table {
    width: 100%;
    background-color: rgb(60, 57, 75);
    color: ${theme.background_light};
  }
`;
