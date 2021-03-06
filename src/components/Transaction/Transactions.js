import React, { Component } from "react";
import styled from "styled-components";
import TransactionItem from "./TransactionItem";
import { connect } from "react-redux";
import { getClientTransaction, deleteClientTransaction } from "../../actions";
import TransactionHeader from "./TransactionHeader";
import { Spinner } from "reactstrap";

class ViewTransactions extends Component {
  //write function for submitting form information for update

  componentDidMount() {
    this.props.getClientTransaction(this.props.id);
  }

  render() {
    return (
      <TransactionContainer>
        <TransactionHeader id={this.props.id} />
        {this.props.transactionDataStart ? (
          <div className="spindiv">
            <Spinner className="spinner" />
          </div>
        ) : (
          <StyledTable>
            <tbody>
              {this.props.transactionDataSuccess &&
                this.props.transactionData.map(t => (
                  <TransactionItem
                    key={t.id}
                    getClientTransaction={this.props.getClientTransaction}
                    clientId={this.props.id}
                    item={t}
                  />
                ))}
            </tbody>
          </StyledTable>
        )}
      </TransactionContainer>
    );
  }
}

const mapStateToProps = state => {
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

  tr {
    &:nth-of-type(even) {
      background-color: lightgrey;
    }
    &:nth-of-type(odd) {
      background: white;
    }
  }
`;

const TransactionContainer = styled.div`
  width: 100%;
  border-radius: 3px;

  .installmentitem-container {
    width: 100%;
  }

  .spindiv {
    width: 100%;
    text-align: center;
  }
  .spinner {
    border: 0.5em solid lightgray;
    border-right-color: transparent;
    width: 10rem;
    height: 10rem;
    margin: auto;
  }
`;
