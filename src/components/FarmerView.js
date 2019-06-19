import React, { Component } from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";

// components
import FarmerViewDemographics from "./FarmerViewComponents/FarmerViewDemographics";
import FarmerViewTransactions from "./FarmerViewComponents/FarmerViewTransactions";
import Installments from "./Installment/InstallmentComponent";

class FarmerView extends Component {

  toggleTransaction = () => {
      this.setState({
        addingTransaction: !this.state.addingTransaction
      })
  }

  render() {
    return (
      <InfoViewContainer>
        <StyledContainer>
          {/* Demographics Container */}
          <StyledDemos>
            <FarmerViewDemographics />
          </StyledDemos>
          <StyledInfoView>
          <FarmerViewTransactions id={this.props.match.params.id} modalToggle={this.toggleTransaction} />
          </StyledInfoView>

          {/* Installments Container */}
          <StyledInfoView>
            <Installments />
          </StyledInfoView>
        </StyledContainer>
      </InfoViewContainer>
    );
  }
}

const mapStateToProps = state => {
  console.log("Updating state");
  console.log(state);
  return {
    data: state.farmerData.farmerDemoData,
    error: state.farmerData.error,
    searchStart: state.farmerData.getStart,
    searchSuccess: state.farmerData.getSuccess,
    searchFailure: state.farmerData.getFailure
  };
};

export default connect(
  mapStateToProps, null
)(FarmerView);

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) =>
    css`
      @media (max-width: ${sizes[label]}px) {
        ${css(...args)}
      }
    `;

  return acc;
}, {});

const StyledContainer = styled.div`
  display: flex;
  height: 400px;

  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const StyledDemos = styled.div`
  width: 100%;
  height: auto;
`;

const StyledInfoView = styled.div`
  width: 48%;
  background-color: white;
  height: 90%;
  margin-top: 20px;
  overflow-y: scroll;

  ${media.tablet`width: 100%;`}

  &::-webkit-scrollbar {
    display: none;
  }
`;

const InfoViewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${media.tablet`flex-direction: column;`}

`;