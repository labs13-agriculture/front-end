import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Header from "./InstallmentHeader";
import Installment from "./Installment";
import { Spinner } from "reactstrap";
import { getInstallmentData } from "../../actions";

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
      {props.installmentStart ? (
        <div className="spindiv">
          <Spinner className="spinner" />
        </div>
      ) : (
        <StyledTable className="installmentitem-container">
          <tbody>
            {/* Installment items */}
            {props.installments &&
              props.installments.map(i => {
                return <Installment key={i.id} installment={i} />;
              })}
          </tbody>
        </StyledTable>
      )}
    </InstallmentContainer>
  );
}

export default withRouter(
  connect(
    state => ({
      // Map State to Props
      installments: state.installments.data,
      installmentStart: state.installments.installmentCardDataStart
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

  .spindiv {
    width: 100%;
    text-align: center;
  }
  .spinner {
    border: 0.5em solid lightgray;
    border-right-color: transparent;
    width: 10rem;
    height: 10rem;
    margin: auto;
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
    &:nth-of-type(odd) {
      background: white;
    }
  }
`;
