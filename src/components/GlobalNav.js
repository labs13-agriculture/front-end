import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Axios from "axios";
import "./GSN.css";
import { Nav, NavItem, NavLink } from "reactstrap";

class GlobalSideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: []
    };
  }

  navRedirect = path => {
    console.log(this.props.history);
    this.props.history.replace(path);
  };

  render() {
    return (
      <GN className="navbar">
        <Link to="/dashboard/statistics">Satistics</Link>
        <Link to="/dashboard/retailers">Retailers</Link>
        <Link to="/dashboard/organizations">Organizations</Link>
        <Link to="/dashboard/farmers">Farmers</Link>
        <Link to="/dashboard/manage-users">Manage Users</Link>
      </GN>
    );
  }
}

export default GlobalSideNav;

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
