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
    console.log("Trying to add yield data");
  }

  render() {
    return (
      <div>
        <h2>Goals History</h2>
        {/* {this.props.yieldCardDataStart && <h1>Loading ... </h1>} */}
        {this.props.goals ?
          this.props.goals.map(yields => (
            <div key={yields.id}> id={yields.id}
            <span> YEAR --- {yields.year}</span>
            <br/>
              <span> GOAL (Turnover) --- {yields.goal}</span>
              <br />
              <span> ACTUAL(Turnover) --- {yields.actual}</span>
              <span> Size Inventory --- {yields.sizeAmount}</span>
              <br />
              <span> GOAL --- {yields.goal}</span>
              
              
            </div>
          )):<h1>LOADING . . . </h1>}
          {this.props.goals.length ==0 && <h1>No goal data</h1>}
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
