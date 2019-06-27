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
<<<<<<< HEAD
import OrgResultsBtn from '../Organization/OrgResultsBtn';
=======
import {theme} from "../../config";
>>>>>>> 408ea6ba8318d56810dcd9378265c23107d82054

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
    if (query.name === "" && query.location === "") {
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
        <StyledSearchToolContainer>
          <StyledHeader>
            <Header>Find Organization</Header>
            <button onClick={this.toggleModal}>ADD</button>
          </StyledHeader>
          <SearchForm submitSearch={this.submitSearch} />
        </StyledSearchToolContainer>
        <OrgResultsBtn />
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
  font-family: ${theme.searchInputFont};
  margin: 26px 0px 20px 0px;
  font-weight: 800;
  font-size: 30px;
`;

const StyledSearchToolContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;
const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  button {
    padding: 10px 40px;

    background: none;

    font-size: 1.5rem;

    margin: auto 0px;

    border: none;

    color: white;

    font-family: ${theme.searchInputFont};
    border: 2px solid ${theme.searchAddBtnBorder};

    &:hover {
      background: ${theme.searchAddBtnHover};
    }
  }
`;
