import styled, { css } from "styled-components";
import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { Modal } from 'reactstrap';

import EditClientForm from "./EditClientForm";
import { theme } from "../../config";

import { getFarmer, deleteFarmer, clearDeleted } from "../../actions";

function ClientDemographics(props) {
  const { client } = props;

  useEffect(() => {
    props.getFarmer(props.match.params.id);
  }, []);

  const [modal, setModal] = useState(false);

  const toggleModal = e => {
    if (e) {
      e.preventDefault();
    }
    setModal(!modal);
  };

  const deleteFarmer = () => {
    let confirm = window.confirm(
      "Are you sure you want to\n\nPERMANENTLY DELETE\n\nthis farmer and all associated data?"
    );
    if (confirm) {
      props.deleteFarmer(client.id);
    }
  };

  if (!client) {
    return (
      <StyledDiv>
        <h1>Client not Found</h1>
      </StyledDiv>
    );
  }

  if (props.farmerDeleted) {
    props.clearDeleted();
    return <Redirect to="/search" />;
  }

  return (
    <StyledDiv>
      <div className="header">
        <h1>
        {client.firstName} {client.secondName}, {client.type.toLowerCase()} since {client.startyear} <span className="toggleSpan">-</span> <br className="toggleBreak" /> Amount Owed: ${client.amountOwed}
        <br />
        Lead: {client.lead ? "True" : "False"}
        </h1>
        <div className="actions">
          <i class="fas fa-edit edit" onClick={toggleModal} />
          <i className="fas fa-trash delete" onClick={deleteFarmer} />
        </div>
      </div>

      <div className="demoWrapper">
        <h3>Contact</h3>
        <div className="info-section contact-info">
          <div className="contact-box">
            <p>Phone: {client.phone || "Not In System"}</p>
            <p>Email: {client.email || "Not In System"}</p>
          </div>
          <div className="contact-box address">
            <p>Address:</p>
            <div>
              <p>{client.address || "Not In System"}</p>
              <p>
                {client.community || "Community"},{" "}
                {client.district || "district"}
              </p>
            </div>
            
          </div>
          <div className="contact-box">
            <p>Nearby Landmark: {client.landmark || "Not In System"}</p>
            <p>Region: {client.region || "Not In System"}</p>
          </div>
        </div>

        <h3>Demographics</h3>
        <div className="info-section demo-info">
          <div className="demo-box">
            <p>Position: {client.position || "Not In System"}</p>
            <p>Title: {client.title || "Not In System"}</p>
          </div>
          <div className="demo-box">
            <p>Nationality: {client.nationality || "Not In System"}</p>
            <p>Gender: {client.gender || "Not In System"}</p>
          </div>
          <div className="demo-box">
            <p>Date of Birth: {client.dateofbirth || "Not In System"}</p>
            <p>Education: {client.educationlevel || "Not In System"}</p>
          </div>
        </div>
      </div>

      {/* Modal with Edit Client Form */}
      <Modal isOpen={modal} toggle={toggleModal}>
        {/* This is all good to go just need to add in the Edit Form */}
        <EditClientForm client={client} closeModal={toggleModal} />
      </Modal>
    </StyledDiv>
  );
}

const mapStateToProps = state => {
  return {
    client: state.farmerData.farmer,
    farmerDemoError: state.farmerData.error,
    farmerDemoDataStart: state.farmerData.getStart,
    farmerDeleted: state.farmerData.farmerDeleted
  }
  
}

export default withRouter(connect(
  mapStateToProps,
  {
    getFarmer,
    deleteFarmer,
    clearDeleted
  }
)(ClientDemographics));

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
  width: 100%;

  ${media.tablet`font-size: 1.2rem;`}

  h1{

    ${media.phone`font-size:1.7rem;`}

    .toggleSpan{
      @media(max-width: 950px){
        display: none;
      }
    }

    .toggleBreak{
      display: none;
      @media(max-width: 950px){
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

      .contact-box{
        ${media.tablet`width: 30%;`}
        ${media.phone`width: 100%;`}
      }
    }

    ${media.tablet`flex-direction: column;`}
    ${media.tablet`align-items: center;`}

    p{
      line-height: 1;
      margin-top: 2px;

      ${media.phone`font-size:1.6rem;`}
    }
  }
`;
