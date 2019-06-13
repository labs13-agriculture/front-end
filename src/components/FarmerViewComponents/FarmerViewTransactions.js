import React, { Component } from "react";

import { getTransactionCardData } from "../../actions";
import { connect } from "react-redux";

class FarmerViewTransactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactionCardData: []
    };
  }

  componentDidMount() {
    this.props.getTransactionCardData();
  }

  addTransaction() {
    console.log("Trying to add transaction");
  }

  render() {
    return (
      <div>
        <h2>Transactions</h2>
        {this.props.transactionCardDataStart && <h1>Loading ... </h1>}
        {this.props.transactionCardDataSuccess &&
          this.props.transactionCardData.map(transaction => (
            <div key={transaction.id}>
              <span> TYPE --- {transaction.type}</span>
              <br />
              <span> DATE --- {transaction.date}</span>
            </div>
          ))}
        <i onClick={() => this.addTransaction()} class="fas fa-plus" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("transaction map state to props fireing");
  return {
    transactionCardData: state.transactionCardData.transactionData,
    transactionCardDataStart:
      state.transactionCardData.transactionCardDataStart,
    transactionCardDataSuccess:
      state.transactionCardData.transactionCardDataSuccess,
    transactionCardDataFailure:
      state.transactionCardData.transactionCardDataFailure,
    error: state.transactionCardData.error
  };
};

export default connect(
  mapStateToProps,
  { getTransactionCardData }
)(FarmerViewTransactions);
