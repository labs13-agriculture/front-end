import React, { Component } from "react";
import styled from "styled-components";

class FarmerViewDemographics extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyledDiv>
        <h1>{this.props.name}</h1>
        <p>{this.props.location}</p>
      </StyledDiv>
    );
  }
}

export default FarmerViewDemographics;

const StyledDiv = styled.div`
  padding: 1%;
  background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
  border-radius: 3px;
`;
