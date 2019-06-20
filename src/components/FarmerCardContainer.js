import React, { Component } from "react";
import { connect } from "react-redux";
import GlobalClientCard from "./GlobalClientCard";
import CardContainer from "../styles/CardContainerStyles";

class FarmerCardContainer extends Component {
  render() {
    console.log("re-rendering");
    console.log(this.props.data);
    return (
      <CardContainer>
        {this.props.searchStart && <h2>Loading...</h2>}
        {this.props.data && this.props.data.length === 0 ? (
          <p>No Farmers found</p>
        ) : null}
        {this.props.data &&
          this.props.data.map(client => (
            <GlobalClientCard key={client.id} client={client} />
          ))}
      </CardContainer>
    );
  }
}

const mapStateToProps = state => {
  console.log("Updating state");
  console.log(state);
  return {
    data: state.farmerData.listData,
    error: state.farmerData.error,
    searchStart: state.farmerData.searchStart,
    searchSuccess: state.farmerData.searchSuccess,
    searchFailure: state.farmerData.searchFailure
  };
};

export default connect(mapStateToProps)(FarmerCardContainer);
