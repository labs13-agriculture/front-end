import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "./GSN.css";
import { theme } from "../config";

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
      <GN>
        <NavLink to="/search/farmer">FARMERS</NavLink>
        <NavLink to="/search/retailer">RETAILERS</NavLink>
        <NavLink to="/search/organizations">ORGANIZATIONS</NavLink>
      </GN>
    );
  }
}

export default GlobalSideNav;

const GN = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 75px;
  align-items: center;
  margin-top:20px;
  a {
    font-family: ${theme.searchNavFont};
    margin-left: 30px;
    color: ${theme.background_light};
    font-size: 1.4rem;
    letter-spacing: 1px;
    opacity:.5;

    transition: all 0.55s ease;

    &:firstchild {
      margin-left: 0;
    }

    &:hover {
      text-decoration: none;
      color: white;
      opacity:1;
    }

    &.active {
      opacity:1;
    }
    &.active:hover {
      text-decoration: none;
      color: ${theme.background_light};
    }

    &.active:after {
      content: "";
      height: 2px;
      background-color: ${theme.activeblue};
      width: 30px;
      position: relative;
      display: block;
      left: 50%;
      bottom: 0;
      margin-left: -15px;
    }
  }
  
`;
