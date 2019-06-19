import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Header from "./InstallmentHeader";
import Installment from "./Installment";

import { getInstallmentData } from "../../actions";

// import FarmerViewInstallments from "./FarmerViewComponents/FarmerViewInstallments";
// import FarmerInstallmentForm from "./FarmerViewComponents/FarmerInstallmentForm";
// import FarmerEditInstallment from "./FarmerViewComponents/FarmerEditInstallment";

function InstallmentComponent(props) {
  useEffect(() => {
    // This acts as onMount
    let id = props.match.params.id;
    props.getInstallmentData(id);
  }, []);

  return (
    <InstallmentContainer>
      {/*  Installments Header*/}
      <Header />
      {/* Installments Container */}
      <StyledTable className="installmentitem-container">
        <tbody>
        {/* Installment items */}
        {props.installments &&
          props.installments.map(i => {
            return <Installment key={i.id} installment={i} />;
          })}
        </tbody>
      </StyledTable>
    </InstallmentContainer>
  );
}

export default withRouter(
  connect(
    state => ({
      // Map State to Props
      installments: state.installments.data
    }),
    {
      // Actions
      getInstallmentData
    }
  )(InstallmentComponent)
);

const InstallmentContainer = styled.div`
  width: 100%;
  border-radius: 3px;

  .installmentitem-container {
    width: 100%;
  }
`;

const StyledTable = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;

  tr {
    &:nth-of-type(even) {
      background-color: lightgrey;
    }
  }
`;
