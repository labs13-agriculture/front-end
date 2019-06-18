import React, { Component } from "react";
import FarmerViewDemographics from "./FarmerViewComponents/FarmerViewDemographics";
import FarmerViewTransactions from "./FarmerViewComponents/FarmerViewTransactions";
import FarmerViewInstallments from "./FarmerViewComponents/FarmerViewInstallments";
import FarmerInstallmentForm from "./FarmerViewComponents/FarmerInstallmentForm";
import { addInstallment, deleteItemFromInstallment, updateInstallmentItem, deleteFarmer } from "../actions";
import { connect } from "react-redux";
import styled from "styled-components";
import NewYieldForm from "./NewYieldForm";
import FarmerEditInstallment from "./FarmerViewComponents/FarmerEditInstallment";

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
    //calling reducer to get specific farmer here
    console.log(this.props.match.params.id);
  }
  
  deleteFarmer = (id) =>{
    console.log("DELETING FARMER " + id)
    this.props.deleteFarmer(id);
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

  submitInstallment = newInstallment => {
    console.log(newInstallment);
    console.log("SUBMIT INSTALLMENT PROPS", this.props);
    this.props.addInstallment(newInstallment, this.props.match.params.id);
  };

  deleteInstallmentById = installmentId => {
    this.props.deleteItemFromInstallment(installmentId);
    console.log("INSTALLMENT ID", installmentId);
  };

  updateInstallmentById = installmentId => {
    this.props.updateInstallmentItem(installmentId);
  };

  addTransaction() {
    console.log("Trying to add transaction");
  }

  sendInstallmentEdit = installment => {
    console.log(installment);
    this.updateInstallmentById(installment);
  };

  toggleInstallmentEdit = installment => {
    console.log("GOing to edit", installment);
    console.log(this.state);
    if (this.state.editingInstallment) {
      console.log("shold set editing to false");
      this.setState({
        editingInstallment: false,
        installmentToEdit: null
      });
    } else {
      this.setState({
        editingInstallment: true,
        installmentToEdit: installment
      });
    }
  };

  render() {
    
    return (
      <div>
        <StyledContainer>
          <StyledDemos>
            <FarmerViewDemographics
            id={this.props.match.params.id}
            delete={this.deleteFarmer}
            />
          </StyledDemos>
          <StyledInfoView>
          <FarmerViewTransactions id={this.props.match.params.id}>
            <h2>Transactions</h2>
            
          </FarmerViewTransactions>
          

            <i onClick={() => this.addTransaction()} class="fas fa-plus" />
          </StyledInfoView>
          <StyledInfoView>
            <h2>Installment History</h2>

            {/* {farmerData[0] &&
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
            <i
              onClick={() => this.toggleInstallment()}
              className="fas fa-plus"
            /> */}
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
        {this.state.editingInstallment && (
          <FarmerEditInstallment
            installment={this.state.installmentToEdit}
            sendEdit={this.sendInstallmentEdit}
            toggleInstallment={this.toggleInstallmentEdit}
          />
        )}
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
    addInstallment,
    deleteItemFromInstallment,
    deleteFarmer,
    updateInstallmentItem
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
