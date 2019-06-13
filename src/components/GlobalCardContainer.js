import React, { Component } from "react";
import styled, { css } from "styled-components";
import GlobalClientCard from "./GlobalClientCard";
import { getFarmerCardData } from "../actions";
import { connect } from "react-redux";

class GlobalCardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      farmerCardData: []
    };
  }

  componentDidMount() {
    this.props.getFarmerCardData();
  }

  render() {
    console.log("global card container rendering");
    return (
      <StyledGlobalCardContainer>
        {/* //card components will go here */}
        {this.props.farmerCardDataStart && <h1>Loading ...</h1>}
        {this.props.farmerCardDataSuccess &&
          this.state.farmerCardData.map(farmer => (
            <GlobalClientCard
              key={farmer.id}
              id={farmer.id}
              cardData={farmer}
            />
          ))}
      </StyledGlobalCardContainer>
    );
  }
}

const StyledGlobalCardContainer = styled.div`
  border: 2px solid aquamarine;
  height: 100%;
  width: 100%;
`;
const mapStateToProps = state => {
  console.log("global card container map state to props firing");
  return {
    farmerCardDataStart: state.farmerCardData.farmerCardDataStart,
    error: state.farmerCardData.error,
    farmerCardDataFailure: state.farmerCardData.farmerCardDataFailure,
    farmerCardData: state.farmerCardData.data,
    farmerCardDataSuccess: state.farmerCardData.farmerCardDataSuccess
  };
};

export default connect(
  mapStateToProps,
  { getFarmerCardData }
)(GlobalCardContainer);
