import React, { Component } from "react";
import FarmerViewDemographics from "./FarmerViewComponents/FarmerViewDemographics";
import FarmerViewTransactions from "./FarmerViewComponents/FarmerViewTransactions";
import FarmerViewInventory from "./FarmerViewComponents/FarmerViewInventory";
import FarmerViewInstallments from "./FarmerViewComponents/FarmerViewInstallments";
import FarmerViewYield from "./FarmerViewComponents/FarmerViewYield";
import FarmerInstallmentForm from "./FarmerViewComponents/FarmerInstallmentForm";
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
    //axios call to retrieve farmer data
  }

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
    return (
      <div>
        <StyledContainer>
          <StyledDemos>
            <FarmerViewDemographics
              name={"Farmer Name"}
              location={"Farmer Location"}
            />
          </StyledDemos>
          <StyledInfoView>
            <FarmerViewTransactions />
          </StyledInfoView>
          <StyledInfoView>
            <FarmerViewInstallments
              toggleInstallment={this.toggleInstallment}
            />
          </StyledInfoView>
          <StyledInfoView>
            <FarmerViewYield />
          </StyledInfoView>
          <StyledInfoView>
            <FarmerViewInventory />
          </StyledInfoView>
        </StyledContainer>
        {this.state.addingInstallment && (
          <FarmerInstallmentForm
            toggleInstallment={this.toggleInstallment}
            addInstallment={this.addInstallment}
          />
        )}
      </div>
    );
  }
}

export default FarmerView;

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
