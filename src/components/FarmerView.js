import React, { Component } from "react";
import FarmerViewDemographics from "./FarmerViewComponents/FarmerViewDemographics";
import FarmerViewTransactions from "./FarmerViewComponents/FarmerViewTransactions";
import FarmerViewInventory from "./FarmerViewComponents/FarmerViewInventory";
import FarmerViewInstallments from "./FarmerViewComponents/FarmerViewInstallments";
import FarmerViewYield from "./FarmerViewComponents/FarmerViewYield";
import FarmerInstallmentForm from "./FarmerViewComponents/FarmerInstallmentForm";
import { connect } from "react-redux";
import styled from "styled-components";

class FarmerView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addingInstallment: false
    };
  }

  componentDidMount() {
    console.log("Mounted");
    //get farmer by id?
  }
  //axios call to retrieve farmer data

  toggleInstallment = () => {
    if (this.state.addingInstallment) {
      this.setState({
        addingInstallment: false
      });
    } else {
      this.setState({
        addingInstallment: true
      });
    }
  };

  addTransaction() {
    console.log("Trying to add transaction");
  }

  addInstallment = installment => {
    console.log(installment);
    //axios call here
  };

  addYieldData() {
    console.log("Trying to add yield data");
  }

  render() {
    let farmerData = [];
    if (this.props.data) {
      farmerData = this.props.data.filter(farmer => {
        console.log("FARMER ID", farmer.id);
        return farmer.id == this.props.match.params.id;
      });
      console.log("FARMER DATA", farmerData);
      console.log("FARMER DATA PARAMS ID", this.props.match.params.id);
    }

    return (
      <div>
        <StyledContainer>
          <StyledDemos>
            <FarmerViewDemographics
              name={farmerData[0] ? farmerData[0].name : "farmer not found"}
              location={
                farmerData[0]
                  ? farmerData[0].farmerlocation.community
                  : "location not found"
              }
              amountOwed={
                farmerData[0] ? farmerData[0].amountOwed : "amount not found"
              }
            />
          </StyledDemos>
          <StyledInfoView>
            <h2>Transactions</h2>
            {farmerData[0] &&
              farmerData[0].transactions.map(transaction => {
                return (
                  <FarmerViewTransactions
                    type={transaction.type || ""}
                    date={transaction.date || ""}
                  />
                );
              })}
            <i onClick={() => this.addTransaction()} class="fas fa-plus" />
          </StyledInfoView>
          <StyledInfoView>
            <h2>Installment History</h2>

            {farmerData[0] &&
              farmerData[0].installments.map(installment => {
                return (
                  <FarmerViewInstallments
                    amountPaid={installment.amountPaid || ""}
                    datePaid={installment.datePaid || ""}
                    toggleInstallment={this.toggleInstallment}
                  />
                );
              })}
            <i onClick={() => this.toggleInstallment()} class="fas fa-plus" />
          </StyledInfoView>
          <StyledInfoView>
            <h2>Yield History</h2>
            {farmerData[0] &&
              farmerData[0].yieldHistory.map(yields => {
                return (
                  <FarmerViewYield
                    numBags={yields.numBags || ""}
                    goal={yields.goal || ""}
                  />
                );
              })}
            <i onClick={() => this.addYieldData()} class="fas fa-plus" />
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
    data: state.farmerSearchData.data,
    error: state.farmerSearchData.error,
    searchStart: state.farmerSearchData.searchStart,
    searchSuccess: state.farmerSearchData.searchSuccess,
    searchFailure: state.farmerSearchData.searchFailure
  };
};

export default connect(mapStateToProps)(FarmerView);

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
  background-image: linear-gradient(to top, #feada6 0%, #f5efef 100%);
  height: 100%;
  border-radius: 5px;
  margin-top: 20px;
  overflow: scroll;
`;
