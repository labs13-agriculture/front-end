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

  componentDidMount() {}

  render() {
    console.log("FARMER VIEW INSTALLMENTS PROPS", this.props);
    return (
      <div>
        <StyledTable>
          <tr>
            <StyledTd>TYPE</StyledTd>
            <StyledTd>DATE</StyledTd>
          </tr>
          <tr>
            <StyledTh>{this.props.amountPaid}</StyledTh>
            <StyledTh>{this.props.datePaid}</StyledTh>
            <i
              onClick={() => this.props.deleteInstallmentById(this.props.id)}
              class="fas fa-trash"
            />
          </tr>
        </StyledTable>
      </div>
    );
  }
}

const mapStateToProps = state => {
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
