import React, { Component } from "react";

import { getYieldCardData } from "../../actions";
import { connect } from "react-redux";

class FarmerViewYield extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getYieldCardData();
  }

  addYieldData() {
    this.props.toggleYield();
  }

  render() {
    return (
      <div>
        <h2>Yield History</h2>
        {this.props.yieldCardDataStart && <h1>Loading ... </h1>}
        {this.props.yieldCardDataSuccess &&
          this.props.yieldCardData.map(yields => (
            <div key={yields.id}>
              <span> NUMBER OF BAGS --- {yields.numBags}</span>
              <br />
              <span> GOAL --- {yields.goal}</span>
            </div>
          ))}
        <i onClick={() => this.addYieldData()} class="fas fa-plus" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("yield map state to props fireing");
  return {
    yieldCardData: state.yieldCardData.data,
    yieldCardDataStart: state.yieldCardData.yieldCardDataStart,
    yieldCardDataSuccess: state.yieldCardData.yieldCardDataSuccess,
    yieldCardDataFailure: state.yieldCardData.yieldCardDataFailure,
    error: state.yieldCardData.error
  };
};

export default connect(
  mapStateToProps,
  { getYieldCardData }
)(FarmerViewYield);
