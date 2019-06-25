import React, { Component } from "react";
import { connect } from "react-redux";
import ClientCard from "./ClientCard";
import CardContainer from "../../styles/CardContainerStyles";

class ClientCardContainer extends Component {
  render() {

    //Had to do conditional render this way. 
    //MapStateToProps does not have accesss to this.props
    if(this.props.type === "farmer"){
      return (
        <CardContainer>
          {this.props.searchStart && <h2>Loading...</h2>}
          {this.props.farmerData && this.props.farmerData.length === 0 ? (
            <p>No Clients found</p>
          ) : null}
          {this.props.farmerData &&
            this.props.farmerData.map(client => (
              <ClientCard key={client.id} client={client} />
            ))}
        </CardContainer>
      );
    }
    else{
      return (
        <CardContainer>
          {this.props.searchStart && <h2>Loading...</h2>}
          {this.props.retailerData && this.props.retailerData.length === 0 ? (
            <p>No Clients found</p>
          ) : null}
          {this.props.retailerData &&
            this.props.retailerData.map(client => (
              <ClientCard key={client.id} client={client} />
            ))}
        </CardContainer>
      );
    }
    
  }
}

const mapStateToProps = state => {

  return {
    farmerData: state.clientData.farmerListData,
    retailerData: state.clientData.retailerListData,
    error: state.clientData.error,
    searchStart: state.clientData.searchStart,
    searchSuccess: state.clientData.searchSuccess,
    searchFailure: state.clientData.searchFailure
  };
};

export default connect(mapStateToProps)(ClientCardContainer);
