import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

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
  width: 45%;
  background-color: white;
  height: 100%;
  margin-top: 20px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
