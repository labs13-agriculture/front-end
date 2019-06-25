import styled from "styled-components";

export const StyledTd = styled.td`
  padding: 10px;

  &.amountPaid {
    width: 25%;
    padding: 10px 10px;
  }

  &.datePaid {
    width: 20%;
    padding: 10px 10px;
  }

  &.mode {
    width: 10%;
    padding: 10px 10px;
  }

  &.officer {
    width: 35%;
    padding: 10px 10px;
  }

  &.actions {
    width: 5%;
  }

  &.actionsi {
    display: flex;
    flex-direction: row;
    padding: 3% !important;
    margin: 5px !important;
    align-items: center;
    justify-content: center;
    &:nth-child(even) {
      margin-right: 13% !important;
    }
  }

  &.actions-head {
    width: 10%;
  }
  &.amountPaid2 {
    width: 25%;
    padding: 10px 10px;
  }
`;
