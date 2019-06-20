import React, { Component } from "react";
import SearchForm from "./SearchForm";
import { connect } from "react-redux";
import {
  searchOrganizations,
  addOrganization,
  getAllOrganizations,
  clearAddedOrgs
} from "../../actions/organizationActions";
import OrganizationCardContainer from "../Organization/OrganizationCardContainer";
import styled from "styled-components";
import NewOrganizationForm from "../Organization/NewOrganizationForm";
import { Modal } from "reactstrap";

class OrganizationSearch extends Component {
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
    if (query.name == "" && query.location == "") {
      this.props.getAllOrganizations();
    } else {
      this.props.searchOrganizations(query);
      this.setState({
        defaultView: false
      });
    }
  };

  submitOrganization = newOrganization => {
    console.log(newOrganization);
    this.props.addOrganization(newOrganization);
  };

  render() {
    if (this.props.organizationAdded) {
      this.props.clearAddedOrgs();
      this.props.history.push(
        `dashboard/organization/${this.props.organization.id}`
      );
    }
    console.log("ORGANIZATION DATA", this.props.organizationData);
    return (
      <div>
        <Header>Find an Organization</Header>
        <i style={tempi} onClick={this.toggleModal} class="fas fa-plus" />
        <SearchForm submitSearch={this.submitSearch} />
        <OrganizationCardContainer />
        <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
          <NewOrganizationForm
            submitForm={this.submitOrganization}
            toggleModal={this.toggleModal}
          />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    organizationData: state.organizationData.listData,
    searchStart: state.organizationData.searchStart,
    searchFailure: state.organizationData.searchFailure,
    error: state.organizationData.error,
    searchSuccess: state.organizationData.searchSuccess
  };
};

export default connect(
  mapStateToProps,
  { searchOrganizations, addOrganization, getAllOrganizations, clearAddedOrgs }
)(OrganizationSearch);

const Header = styled.h1`
  text-align: center;
  color: white;
`;

const tempi = {
  color: "white"
};
