import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "./GSN.css";
import {theme} from "../config"

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
        <NavLink to="/search/farmers">FARMERS</NavLink>
        <NavLink to="/search/retailers">RETAILERS</NavLink>
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

  a {
    font-family: "Josefin Sans", sans-serif;
    margin-left: 30px;
    color: ${theme.background_light};
    font-size: 1.4rem;
    letter-spacing:1px;

    transition: all .15s ease;

    &:firstchild {
      margin-left: 0;
    }

    &:hover {
      text-decoration: none;
      color: #40E0D0;
    }

    &.active:hover {
      text-decoration: none;
      color: ${theme.background_light};
    }

    &.active:after {
      content: "";
      height: 2px;
      background-color: #40E0D0;
      width: 30px;
      position: relative;
      display: block;
      left: 50%;
      bottom: 0;
      margin-left: -15px;
    }
  }
  /* background-image: linear-gradient(
    to top,
    #d5d4d0 0%,
    #d5d4d0 1%,
    #eeeeec 31%,
    #efeeec 75%,
    #e9e9e7 100%
  ); */
`;
