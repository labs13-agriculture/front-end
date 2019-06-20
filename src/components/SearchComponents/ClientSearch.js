import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Modal } from "reactstrap";

// Custom Components
import ClientCardContainer from "../ClientView/ClientCardContainer";
import SearchForm from "./SearchForm";
import NewFarmerForm from "../ClientView/NewClientForm";

// Actions
import {
  searchFarmers,
  addFarmer,
  clearAdded
} from "../../actions/farmerAction";

class ClientSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  toggleModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  submitSearch = query => {
    this.props.searchFarmers(query);
    this.setState({
      defaultView: false
    });
  };

  submitFarmer = newFarmer => {
    console.log(newFarmer);
    console.log("about to add the farmer!");
    this.props.addFarmer(newFarmer);
  };

  render() {
    if (this.props.farmerAdded) {
      this.props.clearAdded();
      this.props.history.push(`/dashboard/farmer/${this.props.farmer.id}`);
    }

    return (
      <div>
        <Header>Find a Farmer</Header>
        <i style={tempi} onClick={this.toggleModal} class="fas fa-plus" />
        <SearchForm submitSearch={this.submitSearch} />
        <ClientCardContainer />
        <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
          <NewFarmerForm
            submitForm={this.submitFarmer}
            toggleModal={this.toggleModal}
          />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    farmerData: state.farmerData.listData,
    searchStart: state.farmerData.searchStart,
    searchFailure: state.farmerData.searchFailure,
    error: state.farmerData.error,
    searchSuccess: state.farmerData.searchSuccess,
    farmerAdded: state.farmerData.farmerAdded,
    farmerDeleted: state.farmerData.farmerDeleted,
    farmer: state.farmerData.farmer
  };
};

export default connect(
  mapStateToProps,
  { searchFarmers, addFarmer, clearAdded }
)(ClientSearch);

const Header = styled.h1`
  text-align: center;
  color: white;
`;

const tempi = {
  color: "white"
};
