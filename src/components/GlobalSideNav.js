import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Axios from "axios";
import "./GSN.css";

export default class GlobalSideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: []
    };
  }

  logout = () =>{
    window.localStorage.removeItem('token');
  }

  render() {
    return (
      <GSN>
        <StyledH1 className="title">Tieme Ndo</StyledH1>
        <StyledDiv className="hvr-underline-reveal">
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <i className="fas fa-home"></i>
            <span>Dashboard</span>
          </Link>
        </StyledDiv>
        <StyledDiv className="hvr-underline-reveal">
          <Link to="/search" style={{ textDecoration: "none" }}>
            <i className="fas fa-search"></i>
            <span>CRM Search</span>
          </Link>
        </StyledDiv>
        <StyledDiv className="hvr-underline-reveal">
          <Link to="/users" style={{ textDecoration: "none" }}>
            <i className="fas fa-user"></i>
            <span>Users</span>
          </Link>
        </StyledDiv>
        <StyledDiv className="hvr-underline-reveal">
          <Link to="/inventory" style={{ textDecoration: "none" }}>
            <i className="fas fa-boxes"></i>
            <span>Inventory</span>
          </Link>
        </StyledDiv>
        <StyledDiv className="hvr-underline-reveal">
          <Link onClick={() => this.logout()} to="#" style={{ textDecoration: "none" }}>
            <i className="fas fa-sign-out-alt"></i>
            <span>Log Out</span>
          </Link>
        </StyledDiv>

        {/* {this.state.names.map(user => <h1>{user.username}</h1>)} */}
      </GSN>
    );
  }
}

const GSN = styled.div`

  align-items: left;
  width: 17%;
  background-image: linear-gradient(
    to top,
    #d5d4d0 0%,
    #d5d4d0 1%,
    #eeeeec 31%,
    #efeeec 75%,
    #e9e9e7 100%
  );
`;

const StyledH1 = styled.h1`
  display: flex;

  background: linear-gradient(to left, transparent, #2800a9, transparent);
  background-size: 100% 2px;
  background-repeat: no-repeat;
  background-position: bottom;
  justify-content: center;
  width: 100%;
  padding: 20px 0;
  text-shadow: 0 1px 3px rgba(57, 55, 70, 0.4);
  font-size: 24px;
  color: #2800a9;
  letter-spacing: -2px;
  letter-spacing: 1px;
  font-weight: 400;
  margin-right: 2px;
`;

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 5px;
  margin: 5px 5px;
  /* font-family: "Josefin Sans", sans-serif; */
  /* text-shadow: 0 1px 3px rgba(57, 55, 70, 0.4); */
  font-size: 1.7rem;
  color: #2800a9;
  letter-spacing: -2px;
  letter-spacing: 1px;
  font-weight: 400;

  a {
    color: inherit;

    span {
      font-family: "Josefin Sans", sans-serif;
      padding-left: 1rem;
    }
  }
`;
