import React, { Component } from "react";
import SearchForm from "./SearchForm";
import { connect } from "react-redux";
import {
  searchOrganizations,
  addOrganization,
  getAllOrganizations
} from "../../actions/organizationActions";
import OrganizationCardContainer from "../OrganizationCardContainer";
import styled from "styled-components";
import NewOrganizationForm from "../NewOrganizationForm";

class OrganizationSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addingOrganization: false
    };
  }

  toggleAddOrganization = () => {
    if (this.state.addingOrganization) {
      this.setState({
        addingOrganization: false
      });
    } else {
      this.setState({
        addingOrganization: true
      });
    }
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
    console.log("ORGANIZATION DATA", this.props.organizationData);
    return (
      <div>
        <Header>Find an Organization</Header>
        <SearchForm submitSearch={this.submitSearch} />
        <OrganizationCardContainer />
        {this.state.addingOrganization && (
          <NewOrganizationForm submitForm={this.submitOrganization} />
        )}
        <i
          style={tempi}
          onClick={() => this.toggleAddOrganization()}
          class="fas fa-plus"
        />
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
  { searchOrganizations, addOrganization, getAllOrganizations }
)(OrganizationSearch);

const Header = styled.h1`
  text-align: center;
  color: white;
`;

const tempi = {
  color: "white"
};
