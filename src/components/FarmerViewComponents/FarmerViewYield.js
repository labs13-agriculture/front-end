import React, { Component } from "react";
import styled from "styled-components";

import { getYieldCardData } from "../../actions";
import { connect } from "react-redux";

class FarmerViewYield extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getYieldCardData();
  }

  render() {
    return (
      <div>
        <StyledTable>
          <tr>
            <StyledTd>Number of Bags</StyledTd>
            <StyledTd>Goal</StyledTd>
          </tr>
          <tr>
            <StyledTh>{this.props.numBags}</StyledTh>
            <StyledTh>{this.props.goal}</StyledTh>
          </tr>
        </StyledTable>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("yield map state to props fireing");
  return {
    yieldCardData: state.yieldCardData.data,
    yieldCardDataStart: state.yieldCardData.yieldCardDataStart,
    yieldCardDataSuccess: state.yieldCardData.yieldCardDataSuccess,
    yieldCardDataFailure: state.yieldCardData.yieldCardDataFailure,
    error: state.yieldCardData.error
  };
};

export default connect(
  mapStateToProps,
  { getYieldCardData }
)(FarmerViewYield);

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
