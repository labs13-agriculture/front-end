import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Modal } from 'reactstrap';

import {theme} from '../../config';

import { getFarmer } from "../../actions";

function ClientDemographics(props) {
  const { client } = props;
  useEffect(() => {
    props.getFarmer(props.match.params.id)
  }, []);

  if (!client) {
    return(<StyledDiv><h1>Client not Found</h1></StyledDiv>)
  }

  return (
    <StyledDiv>
      
      <div className="header">
        <h1>{client.firstName} {client.secondName}, {client.type.toLowerCase()} since {client.startyear} - Amount Owed: ${client.amountOwed}</h1>
        <div className="actions">
          <i class="fas fa-edit edit"></i>
          <i className="fas fa-trash delete"></i>
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
              <p>{client.community || "Community"}, {client.district || "district"}</p>
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
      
    </StyledDiv>
  );
}

const mapStateToProps = state => {
  return{
    client:state.farmerData.farmerDemoData,
    farmerDemoError:state.farmerData.error,
    farmerDemoDataStart:state.farmerData.getStart
  }
  
}

export default withRouter(connect(mapStateToProps,{getFarmer})(ClientDemographics));



const StyledDiv = styled.div`
  width: 100%;
  background: white;
  border-radius: 3px;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.6rem;
    padding: 8px 20px;
    background: lightgray;
  }

  .header {
    background: #3C394B;
    color: ${theme.background_light};

    padding: 10px 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    i {
      font-size: 2rem;
      margin-left: 20px;

      transition: all .15s ease;

      &.edit:hover {
        color: ${theme.accent};
      }

      &.delete:hover {
        color: ${theme.warning};
      }
    }
  }

  .demoWrapper{
    .info-section {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 5px 20px;
    }

    p{
      line-height: 1;
    }
  }
`;
