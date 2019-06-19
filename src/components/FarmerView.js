import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { theme } from "../config";

// components
import FarmerViewDemographics from "./FarmerViewComponents/FarmerViewDemographics";
import FarmerViewTransactions from "./FarmerViewComponents/FarmerViewTransactions";
import Installments from "./Installment/InstallmentComponent";

// actions
import { deleteFarmer } from "../actions";

class FarmerView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //calling reducer to get specific farmer here
    console.log(this.props.match.params.id);
  }

  deleteFarmer = id => {
    console.log("DELETING FARMER " + id);
    this.props.deleteFarmer(id);
  };

  addTransaction() {
    console.log("Trying to add transaction");
  }

  render() {
    return (
      <div>
        <StyledContainer>
          {/* Demographics Container */}
          <StyledDemos>
            <FarmerViewDemographics
              id={this.props.match.params.id}
              delete={this.deleteFarmer}
            />
          </StyledDemos>

          {/*  Transaction Container*/}
          <StyledInfoView>
            <FarmerViewTransactions id={this.props.match.params.id}>
              <h2>Transactions</h2>
            </FarmerViewTransactions>
            <i onClick={() => this.addTransaction()} class="fas fa-plus" />
          </StyledInfoView>

          {/* Installments Container */}
          <StyledInfoView>
            <Installments />
          </StyledInfoView>
        </StyledContainer>
      </div>
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
  mapStateToProps,
  {
    deleteFarmer
  }
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

const Modal = styled.div`
  width: 65%;
  border: 1px solid red;
  position: absolute;
  margin: auto;
  height: auto;
  z-index: 1000005;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
`;
