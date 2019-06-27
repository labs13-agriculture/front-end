import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import { Modal, Spinner, Alert } from "reactstrap";
import {
  getOrganizationById,
  deleteOrganization,
  clearOrganizationUpdated,
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

  const onDismiss = e => {
    props.clearOrganizationUpdated();
  };
  console.log(props);

  const toggleModal = e => {
    if (e) {
      e.preventDefault();
    }
    setModal(!modal);
  };

  const deleteOrg = () => {
    let confirm = window.confirm(
      "Are you sure you want to\n\nPERMANENTLY DELETE\n\nthis organization and all associated data?"
    );
    if (confirm) {
      props.deleteOrganization(organization.id);
    }
  };

  if (props.organizationDemoDataStart) {
    return (
      <StyledDiv>
        <div className="spindiv">
          <Spinner className="spinner" />
        </div>
      </StyledDiv>
    );
  }

  if (props.organizationDeleted) {
    props.clearDeletedOrgs();
    return <Redirect to="/search/organizations" />;
  } else if (props.organization) {
    return (
      <StyledDiv>
        <Alert
          style={{ marginBottom: "0" }}
          color="success"
          isOpen={props.updateOrganizationSuccess}
          toggle={onDismiss}
        >
          Update Success
        </Alert>
        <Alert
          style={{ marginBottom: "0" }}
          color="danger"
          isOpen={props.updateOrganizationFailure}
          toggle={onDismiss}
        >
          Failed to Update
        </Alert>
        <div className="header">
          <h1>
            {organization && organization.name} <br />
            Lead: {organization.lead ? "True" : "False"}
          </h1>

          <div className="actions">
            <i class="fas fa-edit edit" onClick={toggleModal} />
            <i className="fas fa-trash delete" onClick={deleteOrganization} />
          </div>
        </div>
        <div className="demoWrapper">
          <h3>Headquarters</h3>
          <div className="info-section contact-info">
            <div className="contact-box">
              <p>{organization && organization.headquarters}</p>
            </div>
          </div>
        </div>
        <div className="demoWrapper">
          <h3>Beneficiaries</h3>
          <div className="info-section contact-info">
            <div className="contact-box">
              <p>{organization && organization.beneficiaries}</p>
            </div>
          </div>
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
  } else {
    return <StyledDiv>No Organization Found</StyledDiv>;
  }
}

const mapStateToProps = state => {
  return {
    organization: state.organizationData.organization,
    organizationDemoError: state.organizationData.error,
    organizationDemoDataStart: state.organizationData.getStart,
    organizationDeleted: state.organizationData.organizationDeleted,
    updateOrganizationSuccess: state.organizationData.updateOrganizationSuccess,
    updateOrganizationFailure: state.organizationData.updateOrganizationFailure,
    clearOrganizationUpdated: state.organizationData.clearOrganizationUpdated,
    organizationDemoDataStart: state.organizationData.gettingOrganization
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      getOrganizationById,
      deleteOrganization,
      clearDeletedOrgs,
      clearOrganizationUpdated
    }
  )(OrganizationViewDemographics)
);

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) =>
    css`
      @media (max-width: ${sizes[label]}px) {
        ${css(...args)}
      }
    `;

  return acc;
}, {});

const StyledDiv = styled.div`
  width: 100%;
  background: white;
  border-radius: 3px;
  background: white;
  display: flex;
  flex-direction: column;
 

  ${media.tablet`font-size: 1.2rem;`}

  h1 {
    ${media.phone`font-size:1.7rem;`}

    .toggleSpan {
      @media (max-width: 950px) {
        display: none;
      }
    }

    .toggleBreak {
      display: none;
      @media (max-width: 950px) {
        display: block;
      }
    }
  }

  h3 {
    font-size: 1.6rem;
    padding: 8px 20px;
    background: lightgray;
  }

  .header {
    background: #3c394b;
    color: ${theme.background_light};

    padding: 10px 20px;
    ${media.tablet`padding: 10px 10px;`}

    display: flex;
    justify-content: space-between;
    align-items: center;

    i {
      font-size: 2rem;
      margin-left: 20px;

      transition: all 0.15s ease;

      &.edit:hover {
        color: ${theme.accent};
      }

      &.delete:hover {
        color: ${theme.warning};
      }
    }
  }

  .demoWrapper {
    .info-section {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 5px 20px;

      ${media.phone`flex-direction:column;`}

      .contact-box {
        ${media.tablet`width: 30%;`}
        ${media.phone`width: 100%;`}
      }
    }

    ${media.tablet`flex-direction: column;`}
    ${media.tablet`align-items: center;`}

    p {
      line-height: 1;
      margin-top: 2px;

      ${media.phone`font-size:1.6rem;`}
    }
  }

  .spindiv{
    width: 100%
    text-align: center;
  }
  .spinner{
    border: .5em solid lightgray;
    border-right-color: transparent;
    width: 10rem;
    height: 10rem;
    margin: auto;
  }
`;
