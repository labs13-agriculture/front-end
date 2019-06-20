import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import { Modal } from "reactstrap";
import {
  getOrganizationById,
  deleteOrganization,
  clearDeletedOrgs
} from "../../actions";

import { theme } from "../../config";
import EditOrganizationForm from "./EditOrganizationForm";

function OrganizationViewDemographics(props) {
  const { organization } = props;
  console.log("ORGANIZATION", organization);
  useEffect(() => {
    props.getOrganizationById(props.id);
  }, []);

  const [modal, setModal] = useState(false);

  const toggleModal = e => {
    if (e) {
      e.preventDefault();
    }
    setModal(!modal);
  };

  const deleteOrganization = () => {
    let confirm = window.confirm(
      "Are you sure you want to\n\nPERMANENTLY DELETE\n\nthis organization and all associated data?"
    );
    if (confirm) {
      props.deleteOrganization(organization.id);
    }
  };

  if (!organization) {
    return (
      <StyledDiv>
        <h1>Organization not Found</h1>
      </StyledDiv>
    );
  }

  if (props.organizationDeleted) {
    props.clearDeletedOrg();
    return <Redirect to="/search" />;
  }
  return (
    <StyledDiv>
      <div className="header">
        <h1>Name: {organization && organization.name}</h1>
      </div>
      <p>Headquarters: {organization && organization.headquarters}</p>
      <p>
        Number of Beneficiaries: {organization && organization.beneficiaries}
      </p>
      <div className="actions">
        <i class="fas fa-edit edit" onClick={toggleModal} />
        <i className="fas fa-trash delete" onClick={deleteOrganization} />
      </div>
      <Modal isOpen={modal} toggle={toggleModal}>
        {/* This is all good to go just need to add in the Edit Form */}
        <EditOrganizationForm
          organization={organization}
          closeModal={toggleModal}
        />
      </Modal>
    </StyledDiv>
  );
}

const mapStateToProps = state => {
  return {
    organization: state.organizationData.organization,
    organizationDemoError: state.organizationData.error,
    organizationDemoDataStart: state.organizationData.getStart
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getOrganizationById, deleteOrganization, clearDeletedOrgs }
  )(OrganizationViewDemographics)
);

const StyledDiv = styled.div`
  padding: 1%;
  background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
  border-radius: 3px;
  display: flex;
  flex-direction: column;

  .demoWrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    p {
      line-height: 1;
    }
  }
`;
