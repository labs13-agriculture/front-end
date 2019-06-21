import React, { Component } from "react";
import styled from "styled-components";
import { TransactionItem } from "./TransactionItem";
import { connect } from "react-redux";
import { getClientTransaction, deleteClientTransaction } from "../../actions";
import TransactionHeader from "./TransactionHeader";

class ViewTransactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactionCardData: []
    };
  }

  //write function for submitting form information for update

  componentDidMount() {
    this.props.getClientTransaction(this.props.id);
  }

  render() {
    return (
      <TransactionContainer>
        <TransactionHeader id={this.props.id} />
        <StyledTable>
          <tbody>
            {this.props.transactionDataSuccess &&
              this.props.transactionData.map(t => (
                <TransactionItem
                  deleteClientTransaction={this.props.deleteClientTransaction}
                  getClientTransaction={this.props.getClientTransaction}
                  clientId={this.props.id}
                  item={t}
                />
              ))}
          </tbody>
        </StyledTable>
      </TransactionContainer>
    );
  }
}

const mapStateToProps = state => {
  console.log("transaction map state to props fireing");
  return {
    transactionData: state.clientTransactions.transactionData,
    transactionDataStart: state.clientTransactions.getTransactionStart,
    transactionDataSuccess: state.clientTransactions.getTransactionSuccess,
    transactionDataFailure: state.clientTransactions.getTransactionFailure,
    error: state.clientTransactions.error,
    updatedTransactionData: state.clientTransactions.updatedTransactionData
  };
};

export default connect(
  mapStateToProps,
  { getClientTransaction, deleteClientTransaction }
)(ViewTransactions);

const StyledTable = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
`;

const TransactionContainer = styled.div`
  width: 100%;
  border-radius: 3px;

  .installmentitem-container {
    width: 100%;
  }
`;
