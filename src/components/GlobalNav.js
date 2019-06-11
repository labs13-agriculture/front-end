import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Axios from "axios";
import "./GSN.css";
import { Nav, NavItem, NavLink } from "reactstrap";

export default class GlobalSideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: []
    };
  }

  render() {
    return (
      <GN className="navbar">
        <span>Satistics</span>
        <span>Retailers</span>
        <span>Organizations</span>
        <span>Farmers</span>
        <span>Manage Users</span>
      </GN>
    );
  }
}

const GN = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 50px;
  align-items: center;
  border: 1px solid #d3d3d369;
  border-left: none;
  background-image: linear-gradient(
    to top,
    #d5d4d0 0%,
    #d5d4d0 1%,
    #eeeeec 31%,
    #efeeec 75%,
    #e9e9e7 100%
  );
`;
