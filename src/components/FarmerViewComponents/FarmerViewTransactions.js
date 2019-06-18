import React, { Component } from "react";
import styled from "styled-components";


import { connect } from "react-redux";
import {getClientTransaction} from "../../actions";

class FarmerViewTransactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactionCardData: []
    };
  }

  componentDidMount() {
    this.props.getClientTransaction(this.props.id)
  }

  render() {
    return (
      <div>
        <h2>Transaction History</h2>
        <i onClick={() => this.props.modalToggle()} className="fas fa-plus" />
        <StyledTable>
          <tr>
            <StyledTd>TOTAL</StyledTd>
            <StyledTd>DATE</StyledTd>
            <StyledTd>TYPE</StyledTd>
            <StyledTd>OFFICER</StyledTd>
          </tr>
          
          {this.props.transactionDataSuccess && this.props.transactionData.map(t => {
            return(<tr>
          <StyledTh>{t.total}</StyledTh>
          <StyledTh>{t.date}</StyledTh>
          <StyledTh>{t.type}</StyledTh>
          <StyledTh>{t.personnel}</StyledTh>
          
          </tr>)})}
          
          
        </StyledTable>
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
