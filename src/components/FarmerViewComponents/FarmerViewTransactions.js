import React, { Component } from "react";
import styled from "styled-components";

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

  render() {
    return (
      <div>
        <StyledTable>
          <tr>
            <StyledTd>TYPE</StyledTd>
            <StyledTd>DATE</StyledTd>
          </tr>
          <tr>
            <StyledTh>{this.props.type}</StyledTh>
            <StyledTh>{this.props.date}</StyledTh>
          </tr>
        </StyledTable>
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
