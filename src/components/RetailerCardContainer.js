import React, { Component } from "react";
import { connect } from "react-redux";
import GlobalClientCard from "./GlobalClientCard";
import CardContainer from "../styles/CardContainerStyles";

class RetailerCardContainer extends Component {
  render() {
    return (
      <CardContainer>
        {this.props.searchStart && <h2>Loading ...</h2>}
        {this.props.data && this.props.data.length === 0 ? (
          <p>No Retailers Found</p>
        ) : null}
        {this.props.searchSuccess &&
          this.props.data.map(client => (
            <GlobalClientCard key={client.id} client={client} />
          ))}
      </CardContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.retailerData.listData,
    error: state.retailerData.error,
    searchStart: state.retailerData.searchStart,
    searchSuccess: state.retailerData.searchSuccess,
    searchFailure: state.retailerData.searchFailure
  };
};

export default connect(mapStateToProps)(RetailerCardContainer);
