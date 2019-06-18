import React, { Component } from "react";
import { getInstallmentCardData } from "../../actions";
import { connect } from "react-redux";

import styled from "styled-components";

class FarmerViewInstallments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addingInstallment: false
    };
  }

  componentDidMount() {
    this.props.getInstallmentCardData();
  }

  render() {
    return (
      <div>
        <h2>Installment History</h2>
        {this.props.installments ?
          this.props.installments.map(installment => (
            <div key={installment.id}> id={installment.id}
            <span> DATE PAID --- {installment.datePaid}</span>
            <br/>
              <span> AMOUNT PAID --- {installment.amountPaid}</span>
              <br />
              <span> MODE --- {installment.mode}</span>
              <br />
              <span> OFFICER --- {installment.officer}</span>
              
              
              
            </div>
          )):<h1>LOADING . . . </h1>}
          {this.props.installments.length ==0 && <h1>No installment data</h1>}
        <i onClick={() => this.props.toggleInstallment()} class="fas fa-plus" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("installment map state to props fireing");
  return {
    installmentCardData: state.installmentCardData.data,
    installmentCardDataStart:
      state.installmentCardData.installmentCardDataStart,
    installmentCardDataSuccess:
      state.installmentCardData.installmentCardDataSuccess,
    installmentCardDataFailure:
      state.installmentCardData.installmentCardDataFailure
  };
};

export default connect(
  mapStateToProps,
  { getInstallmentCardData }
)(FarmerViewInstallments);
