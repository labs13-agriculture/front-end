import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import OrganizationViewDemographics from "./OrganizationViewDemographics.js";

class OrganizationView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("PROPSPPSPSPSP", this.props);
  }

  render() {
    return (
      <StyledContainer>
        <StyledDemos>
          {/* <OrganizationViewDemographics id={this.props.match.params.id} /> */}

          <OrganizationViewDemographics id={this.props.match.params.id} />
        </StyledDemos>
        <StyledInfoView>
          <h1>INFO HERE</h1>

          {/* <OrganizationViewTransactions /> */}
        </StyledInfoView>

        {/* Installment Component */}

        {/* Transaction Component */}
      </StyledContainer>
    );
  }
}

export default connect(
  state => ({
    // state mapping here
  }),
  {
    // mapping actions here
  }
)(OrganizationView);

const StyledContainer = styled.div`
  display: flex;
  height: 400px;

  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const StyledDemos = styled.div`
  width: 100%;
  height: auto;
`;

const StyledInfoView = styled.div`
  width: 45%;
  background-color: white;
  height: 100%;
  margin-top: 20px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
