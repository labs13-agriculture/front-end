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
        style={{ textDecoration: "none" }}
        to={`/dashboard/organization/${organization.id}`}
      >
        <StyledGlobalClientCard>
          <StyledContactContainer>
            <div className="identity-icon">
              <div className="circle">
                <div className="first-name">{organization.name[0]}</div>
              </div>
            </div>
            <div className="head-contact-container">
              <h3>{organization.name}</h3>
            </div>
          </StyledContactContainer>
          <div className="demo">
            <p>HEADQUARTERS: {organization.headquarters}</p>
          </div>
        </StyledGlobalClientCard>
      </Link>
    );
  }
}

const StyledGlobalClientCard = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 20px;
  border-radius: 3px;
  ${"" /* box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3); */}
  background:${theme.sideNavBackground};
  width: 325px;
  color: white;
  ${"" /* &:hover {
    cursor: pointer;
    text-decoration:none;
  } */}
  h3 {
    margin-bottom: 0px;
  }
  font-family: ${theme.searchInputFont};

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

    text-align: center;
    background: ${theme.globalViewBackground};
    .first-name {
      height:40px;
      width:20px;
      justify-content: center;
      display: flex;
    font-size: 2rem;
    /* font-weight: 800; */
    color: ${theme.activeblue};
      position:absolute;
    align-items: center;
    position: absolute;
    
    }

    .head-contact-container {
    }
  }
`;

const StyledContactContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1rem;

  .email {
    color: gray;
  }
`;
