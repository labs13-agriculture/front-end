import React, { Component } from "react";
import { connect } from "react-redux";
import GlobalClientCard from "./GlobalClientCard";
import CardContainer from '../styles/CardContainerStyles';

class FarmerCardContainer extends Component {

  render() {
    console.log("re-rendering");
    console.log(this.props.data);
    return (
      <CardContainer>
        {this.props.searchStart && <h2>Loading...</h2>}
<<<<<<< HEAD
        {this.props.searchSuccess && this.props.farmerData.length == 0 ? (
          <p>No Farmers found</p>
        ) : null}
        {this.props.searchSuccess && this.props.farmerData.map(f => <GlobalClientCard key={f.id} type={f.type} id={f.id} name={f.name} location={f.farmerlocation}/>)}
=======
        {this.props.searchSuccess && this.props.data.length === 0 ? (
          <p>No Farmers found</p>
        ) : null}
        {this.props.searchSuccess && this.props.data.map(client => <GlobalClientCard key={client.id} client={client}/>)}
>>>>>>> f4cfa9c4d99b8d4d9af7f565ed2a5dfe250e673a
      </CardContainer>
    );
  }
}

const mapStateToProps = state => {
  console.log("Updating state");
  console.log(state);
<<<<<<< HEAD
  return{
    farmerData: state.farmerData.listData,
    searchStart: state.farmerData.searchStart,
    searchFailure: state.farmerData.searchFailure,
    error: state.farmerData.error,
    searchSuccess: state.farmerData.searchSuccess
}
=======
  return {
    data: state.farmerData.listData,
    error: state.farmerData.error,
    searchStart: state.farmerData.searchStart,
    searchSuccess: state.farmerData.searchSuccess,
    searchFailure: state.farmerData.searchFailure
  };
>>>>>>> f4cfa9c4d99b8d4d9af7f565ed2a5dfe250e673a
};

export default connect(mapStateToProps)(FarmerCardContainer);
