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
            <i className="fas fa-home">
              <span style={{ margin: "0 10px" }}>Home</span>
            </i>
          </Link>
        </StyledDiv>
        <StyledDiv className="hvr-underline-reveal">
          <Link to="#" style={{ textDecoration: "none" }}>
            <i className="fas fa-search">
              <span style={{ margin: "0 10px" }}>Search</span>
            </i>
          </Link>
        </StyledDiv>
        <StyledDiv className="hvr-underline-reveal">
          <Link to="#" style={{ textDecoration: "none" }}>
            <i className="fas fa-user">
              <span style={{ margin: "0 10px" }}>Search</span>
            </i>
          </Link>
        </StyledDiv>
        <StyledDiv className="hvr-underline-reveal">
          <Link to="/inventory" style={{ textDecoration: "none" }}>
            <i className="fas fa-boxes">
              <span style={{ margin: "0 10px" }}>Inventory</span>
            </i>
          </Link>
        </StyledDiv>
        <StyledDiv className="hvr-underline-reveal">
          <Link onClick={() => this.logout()} to="#" style={{ textDecoration: "none" }}>
            <i className="fas fa-sign-out-alt">
              <span style={{ margin: "0 10px" }}>Log Out</span>
            </i>
          </Link>
        </StyledDiv>

        {/* {this.state.names.map(user => <h1>{user.username}</h1>)} */}
      </GSN>
    );
  }
}

const GSN = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* position: fixed; */
  width: 17%;
  left: 0;
  /* height: 100%; */
  border: 1px solid #d3d3d369;
  border-right: none;
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
  font-family: "Josefin Sans", sans-serif;
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
  justify-content: center;
  width: 100%;
  padding: 20px 5px;
  margin: 5px 5px;
  font-family: "Josefin Sans", sans-serif;
  text-shadow: 0 1px 3px rgba(57, 55, 70, 0.4);
  font-size: 24px;
  color: #2800a9;
  letter-spacing: -2px;
  letter-spacing: 1px;
  font-weight: 400;
`;
