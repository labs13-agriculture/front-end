import React, { Component } from "react";
import FarmerViewDemographics from "./FarmerViewComponents/FarmerViewDemographics";
import FarmerViewTransactions from "./FarmerViewComponents/FarmerViewTransactions";
import FarmerViewInventory from "./FarmerViewComponents/FarmerViewInventory";
import FarmerViewInstallments from "./FarmerViewComponents/FarmerViewInstallments";
import FarmerViewYield from "./FarmerViewComponents/FarmerViewYield";
import FarmerInstallmentForm from "./FarmerViewComponents/FarmerInstallmentForm";
import { connect } from "react-redux";
import styled from "styled-components";
import NewYieldForm from './NewYieldForm';

class FarmerView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addingInstallment: false,
      addingYield: false,
      editingYield: false,
      yieldToEdit: null
    };
  }

  componentDidMount() {
    console.log("Mounted");
    //get farmer by id?
    console.log(this.props.match.params.id)
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

  toggleYield = () =>{
    if(this.state.addingYield){
      this.setState({
        addingYield: false
      })
    }
    else{
      this.setState({
        addingYield: true
      })
    }
  }

  toggleYieldEdit = editingYield =>{
    console.log("toggling yield", editingYield)
    if(this.state.editingYield){
      this.setState({
        editingYield: false,
        yieldToEdit: null
      })
    }
    else{
      this.setState({
        editingYield: true,
        yieldToEdit: editingYield
      })
    }
  }

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
              name={farmerData[0] ? farmerData[0].name : "farmer not found"}
              location={
                farmerData[0]
                  ? farmerData[0].farmerlocation.community
                  : "location not found"
              }
              amount={
                farmerData[0] ? farmerData[0].amountOwed : "amount not found"
              }
            />
          </StyledDemos>
          <StyledInfoView>
            <FarmerViewTransactions />
          </StyledInfoView>
          <StyledInfoView>
            <FarmerViewInstallments
              name={farmerData[0] ? farmerData[0].name : "farmer not found"}
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
        {this.state.addingYield && <NewYieldForm id={this.props.match.params.id}/>}
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
