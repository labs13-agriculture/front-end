import React, { Component } from "react";
import styled, { css } from "styled-components";
import { connect } from "react-redux";
import GlobalClientCard from "./GlobalClientCard";

class FarmerCardContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("re-rendering");
    console.log(this.props.data);
    return (
      <div>
        {this.props.searchStart && <h2>Loading...</h2>}
        {this.props.searchSuccess && this.props.data.length == 0 ? (
          <p>No Farmers found</p>
        ) : null}
        {this.props.searchSuccess &&
          this.props.data.map(f => (
            <GlobalClientCard
              key={f.id}
              id={f.id}
              name={f.name}
              location={f.farmerlocation}
            />
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("Updating state");
  console.log(state);
  return {
    data: state.farmerSearchData.data,
    error: state.farmerSearchData.error,
    searchStart: state.farmerSearchData.searchStart,
    searchSuccess: state.farmerSearchData.searchSuccess,
    searchFailure: state.farmerSearchData.searchFailure
  };
};

export default connect(mapStateToProps)(FarmerCardContainer);
