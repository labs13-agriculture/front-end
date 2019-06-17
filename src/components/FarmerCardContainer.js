import React, { Component } from "react";
import styled, { css } from "styled-components";
import { connect } from "react-redux";
import GlobalClientCard from "./GlobalClientCard";
import CardContainer from '../styles/CardContainerStyles';

class FarmerCardContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("re-rendering");
    console.log(this.props.data);
    return (
      <CardContainer>
        {this.props.searchStart && <h2>Loading...</h2>}
        {this.props.searchSuccess && this.props.farmerData.length == 0 ? (
          <p>No Farmers found</p>
        ) : null}
        {this.props.searchSuccess && this.props.farmerData.map(f => <GlobalClientCard key={f.id} type={f.type} id={f.id} name={f.name} location={f.farmerlocation}/>)}
      </CardContainer>
    );
  }
}

const mapStateToProps = state => {
  console.log("Updating state");
  console.log(state);
  return{
    farmerData: state.farmerData.listData,
    searchStart: state.farmerData.searchStart,
    searchFailure: state.farmerData.searchFailure,
    error: state.farmerData.error,
    searchSuccess: state.farmerData.searchSuccess
}
};

export default connect(mapStateToProps)(FarmerCardContainer);
