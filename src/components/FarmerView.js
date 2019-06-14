import React, { Component } from "react";
import FarmerViewDemographics from "./FarmerViewComponents/FarmerViewDemographics";
import FarmerViewTransactions from "./FarmerViewComponents/FarmerViewTransactions";
import FarmerViewInventory from "./FarmerViewComponents/FarmerViewInventory";
import FarmerViewInstallments from "./FarmerViewComponents/FarmerViewInstallments";
import FarmerViewYield from "./FarmerViewComponents/FarmerViewYield";
import FarmerInstallmentForm from "./FarmerViewComponents/FarmerInstallmentForm";
import { addInstallment, deleteItemFromInstallment } from "../actions";
import { connect } from "react-redux";
import styled from "styled-components";
import NewYieldForm from "./NewYieldForm";
import FarmerEditInstallment from './FarmerViewComponents/FarmerEditInstallment';

class FarmerView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addingInstallment: false,
      editingInstallment: false,
      installmentToEdit: null
    };
  }

  componentDidMount() {
    console.log("Mounted");
    //get farmer by id?
    console.log(this.props.match.params.id);
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

  submitInstallment = newInstallment => {
    console.log(newInstallment);
    console.log("SUBMIT INSTALLMENT PROPS", this.props);
    this.props.addInstallment(newInstallment, this.props.match.params.id);
  };

  deleteInstallmentById = installmentId => {
    this.props.deleteItemFromInstallment(installmentId);
    console.log("INSTALLMENT ID", installmentId);
  };

  addTransaction() {
    console.log("Trying to add transaction");
  }

  addYieldData() {
    console.log("Trying to add yield data");
  }

  sendInstallmentEdit = installment =>{
    console.log(installment);
  }

  toggleInstallmentEdit = installment =>{
    console.log("GOing to edit", installment);
    console.log(this.state);
    if(this.state.editingInstallment){
      console.log("shold set editing to false");
      this.setState({
        editingInstallment: false,
        installmentToEdit: null
      })
    }
    else{
      this.setState({
        editingInstallment: true,
        installmentToEdit: installment
      })
    }
  }

  render() {
    let farmerData = [];
    if (this.props.data) {
      farmerData = this.props.data.filter(farmer => {
        return farmer.id == this.props.match.params.id;
      });
      console.log("FARMER DATA", farmerData);
    }
    return (
      <div>
        <StyledContainer>
          <StyledDemos>
            <FarmerViewDemographics
              farmer={farmerData[0] ? farmerData[0] : "farmer not found"}
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
                console.log("FARMER DATA INSTALLMENT", installment);
                return (
                  <FarmerViewInstallments
                    toggleEdit={this.toggleInstallmentEdit}
                    amountPaid={installment.amountPaid || ""}
                    datePaid={installment.datePaid || ""}
                    id={installment.id}
                    deleteInstallmentById={this.deleteInstallmentById}
                    installment={installment}
                  />
                );
              })}
            {this.state.addingInstallment && (
              <FarmerInstallmentForm
                submitForm={this.submitInstallment}
                toggleInstallment={this.toggleInstallment}
              />
            )}
            <i onClick={() => this.toggleInstallment()} className="fas fa-plus" />
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
            <i onClick={() => this.addYieldData()} className="fas fa-plus" />
          </StyledInfoView>
        </StyledContainer>
        {this.state.addingInstallment && (
          <FarmerInstallmentForm
            toggleInstallment={this.toggleInstallment}
            submitForm={this.submitInstallment}
          />
        )}
        {this.state.addingYield && (
          <NewYieldForm id={this.props.match.params.id} />
        )}
        {this.state.editingInstallment && <FarmerEditInstallment installment={this.state.installmentToEdit} sendEdit={this.sendInstallmentEdit} toggleInstallment={this.toggleInstallmentEdit}/>}
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

export default connect(
  mapStateToProps,
  {
    addInstallment,
    deleteItemFromInstallment
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
  background-image: linear-gradient(to top, #feada6 0%, #f5efef 100%);
  height: 100%;
  border-radius: 5px;
  margin-top: 20px;
  overflow: scroll;
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