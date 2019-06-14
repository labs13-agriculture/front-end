import React, { Component } from "react";
import FarmerViewDemographics from "./RetailerViewComponents/FarmerViewDemographics";
import FarmerViewTransactions from "./RetailerViewComponents/FarmerViewTransactions";
import FarmerViewInventory from "./RetailerViewComponents/FarmerViewInventory";
import FarmerViewInstallments from "./RetailerViewComponents/FarmerViewInstallments";
import FarmerViewYield from "./RetailerViewComponents/FarmerViewYield";
import FarmerInstallmentForm from "./RetailerViewComponents/FarmerInstallmentForm";
import { connect } from "react-redux";
import styled from "styled-components";

class RetailerView extends Component {
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

  addInstallment = installment => {
    console.log(installment);
    //axios call here
  };

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
              name={farmerData[0] ? farmerData[0].name : "Retailer not found"}
              location={
                farmerData[0]
                  ? farmerData[0].retailerlocation.address
                  : "location not found"
              }
              amount={
                farmerData[0] ? farmerData[0].amountOwed : "amount not found"
              }
            />
          </StyledDemos>
          <StyledInfoView>
            <FarmerViewTransactions transactions={farmerData[0] ? farmerData[0].transactions:"transaction not found"}/>
          </StyledInfoView>
          <StyledInfoView>
            <FarmerViewInstallments
              installments={farmerData[0] ? farmerData[0].installments: "installment not found"}
              toggleInstallment={this.toggleInstallment}
            />
          </StyledInfoView>
          <StyledInfoView>
            <FarmerViewYield goals={farmerData[0] ? farmerData[0].goals: "goals not found"}/>
          </StyledInfoView>
         
        </StyledContainer>
        {this.state.addingInstallment && (
          <FarmerInstallmentForm
            toggleInstallment={this.toggleInstallment}
            addInstallment={this.addInstallment}
        
        />)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("Updating state");
  console.log(state);
  return {
    data: state.retailerSearchData.data,
    error: state.retailerSearchData.error,
    searchStart: state.retailerSearchData.searchStart,
    searchSuccess: state.retailerSearchData.searchSuccess,
    searchFailure: state.retailerSearchData.searchFailure
  };
};

export default connect(mapStateToProps)(RetailerView);

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
