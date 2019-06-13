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
        {this.props.installmentCardDataStart && <h1>Loading ...</h1>}
        {this.props.installmentCardDataSuccess &&
          this.props.installmentCardData.map(installment => (
            <div key={installment.id}>
              <span>AMOUNT PAID --- {installment.amountPaid}</span>
              <br />
              <span>DATE PAID --- {installment.datePaid}</span>
            </div>
          ))}
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
