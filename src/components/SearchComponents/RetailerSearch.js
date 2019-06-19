import React, { Component } from "react";
import SearchForm from "./SearchForm";
import { connect } from "react-redux";
import styled from "styled-components";
import { searchRetailers, addRetailer } from "../../actions/retailerActions";
import RetailerCardContainer from "../RetailerCardContainer";

class RetailerSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addingRetailer: false
    };
  }

  toggleAddRetailer = () => {
    if (this.state.addingRetailer) {
      this.setState({
        addingRetailer: false
      });
    } else {
      this.setState({
        addingRetailer: true
      });
    }
  };

  submitSearch = query => {
    this.props.searchRetailers(query);
    this.setState({
      defaultView: false
    });
  };

  submitRetailer = newRetailer => {
    console.log(newRetailer);
    this.props.addRetailer(newRetailer);
  };

  render() {
    console.log(this.props.retailerData);
    return (
      <div>
        <Header>Find a Retailer</Header>
        <SearchForm submitSearch={this.submitSearch} />
        <RetailerCardContainer />
        {this.props.error && (
          <p>
            Sorry, we couldn't find any retailers that match your search
            criteria
          </p>
        )}
        <i
          style={tempi}
          onClick={() => this.toggleAddRetailer()}
          class="fas fa-plus"
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    retailerData: state.retailerData.listdata,
    searchStart: state.retailerData.searchStart,
    searchFailure: state.retailerData.searchFailure,
    error: state.retailerData.error,
    searchSuccess: state.retailerData.searchSuccess
  };
};

export default connect(
  mapStateToProps,
  { searchRetailers, addRetailer }
)(RetailerSearch);

const Header = styled.h1`
  text-align: center;
  color: white;
`;

const tempi = {
  color: "white"
};
