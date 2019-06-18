import React, { Component } from "react";
import styled from "styled-components";
import {FarmerTransactionItem} from "./FarmerTransactionItem";

import { connect } from "react-redux";
import {getClientTransaction} from "../../actions";

class FarmerViewTransactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactionCardData: []
    };
  }

  //write function for submitting form information for update



  componentDidMount() {
    this.props.getClientTransaction(this.props.id)
  }

  render() {
    return (
      <div>
        <h2>Transaction History</h2>
        <i onClick={() => this.props.modalToggle()} className="fas fa-plus" />
        <StyledTransactionNav>
          <h3 className="t-nav-header">DATE</h3>
          <h3 className="t-nav-header">TOTAL</h3>
          <h3 className="t-nav-header">TYPE</h3>
          <h3 className="t-nav-header">OFFICER</h3>
        </StyledTransactionNav>
        {this.props.transactionData && this.props.transactionData.map(t => <FarmerTransactionItem item={t}/>)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("transaction map state to props fireing");
  return {
    transactionData: state.clientTransactions.transactionData,
    transactionDataStart:
      state.clientTransactions.getTransactionStart,
    transactionDataSuccess:
      state.clientTransactions.getTransactionSuccess,
    transactionDataFailure:
      state.clientTransactions.getTransactionFailure,
    error: state.clientTransactions.error
  };
};

export default connect(
  mapStateToProps,
  { getClientTransaction }
)(FarmerViewTransactions);

const StyledTable = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  margin: 5%;
  width: 90%;
`;

const StyledTd = styled.td`
  border: 1px solid black;
  text-align: left;
  padding: 8px;
`;

const StyledTh = styled.th`
  border: 1px solid black;
  text-align: left;
  padding: 8px 0;
`;

// tr:nth-child(even) {
//   background-color: #dddddd;
// }

const StyledTransactionNav = styled.div`
  width:100%;
  height:60px;
  display:flex;
  justify-content:space-between;




`
