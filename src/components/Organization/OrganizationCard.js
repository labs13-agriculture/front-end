import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {theme} from "../../config";

export default class OrganizationCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  redirect = () => {
    this.setState({
      redirect: true
    });
  };

  render() {
    const organization = { ...this.props };

    return (
      <Link
        style={{ textDecoration: "none",margin:"5px",position:"relative" }}
        to={`/dashboard/organization/${organization.id}`}
      >
        <StyledGlobalClientCard>
          <StyledContactContainer>
            <div className="identity-icon">
              <div className="circle">
                <div className="first-name">{organization.name[0].toUpperCase()}</div>
              </div>
            </div>
            <div className="head-contact-container">
              <h3>{organization.name}</h3>
              <div className="demo">
                <span className="descriptor">
                  <i class="fas fa-map-marker-alt"></i> 
                  
                </span>
                <p className="headquarters">{organization.headquarters}</p>
                
              </div>
            </div>
          </StyledContactContainer>
          
        </StyledGlobalClientCard>
      </Link>
    );
  }
}

const StyledGlobalClientCard = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  z-index:2000;
  padding: 20px;
  border-radius: 3px;
  ${"" /* box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3); */}
  background:${theme.manageUserItemBackground};
  width: 300px;
  height:80px;
  color: white;
  &:hover {
    cursor: pointer;
    background:rgba(60, 57, 75, 0.6);
  }
  h3 {
    margin-bottom: 0px;
    font-size: 1.75rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 200px;
    display: block;
    overflow: hidden
    
  }
  font-family: ${theme.experimentalFont};

  .circle {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    color: ${theme.activeblue};
    position:relative;
    margin-right: 15px;
    text-align: center;

    background: ${theme.globalViewBackground};

    display: flex;

    justify-content: center;

    align-items: center;
    position:relative;
    text-align: center;
    background: ${theme.globalViewBackground};
    .first-name {
      height:40px;
      width:20px;
      justify-content: center;
      display: flex;
    font-size: 2rem;
    top: -2px;
    /* font-weight: 800; */
    color: ${theme.activeblue};
      position:absolute;
    align-items: center;
    position: absolute;
    
    }

    .head-contact-container {
    }
  }

  .headquarters{
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 200px;
    display: block;
    overflow: hidden
  }

  .demo{
    display:flex;
    color:gray;
  }

  .fas.fa-map-marker-alt{
    margin-right:3px
  }
`;

const StyledContactContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  ${'' /* align-items: center;
  margin-bottom: 1rem; */}

  .email {
    color: gray;
  }
`;
