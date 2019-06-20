import React, { Component } from "react";
import { connect } from "react-redux";
import ClientCard from "./ClientCard";
import CardContainer from "../../styles/CardContainerStyles";

class ClientCardContainer extends Component {
  render() {
    console.log("re-rendering");
    console.log(this.props.data);
    return (
      <CardContainer>
        {this.props.searchStart && <h2>Loading...</h2>}
        {this.props.data && this.props.data.length === 0 ? (
          <p>No Clients found</p>
        ) : null}
        {this.props.data &&
          this.props.data.map(client => (
            <ClientCard key={client.id} client={client} />
          ))}
      </CardContainer>
    );
  }
}

const mapStateToProps = state => {
  console.log("Updating state");
  console.log(state);
  return {
    data: state.clientData.listData,
    error: state.clientData.error,
    searchStart: state.clientData.searchStart,
    searchSuccess: state.clientData.searchSuccess,
    searchFailure: state.clientData.searchFailure
  };
};

export default connect(mapStateToProps)(ClientCardContainer);
