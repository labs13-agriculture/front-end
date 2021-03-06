import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Modal } from "reactstrap";

import HelpComponent from "./HelpModals/HelpComponent";

import "./GSN.css";
import logo from "../tiemeNdo.svg";
import { BASE_URL, theme } from "../config";
import { connect } from "react-redux";
import { needHelp } from "../actions";

class GlobalSideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [],
      admin: false
    };
  }

  componentDidMount() {
    //Going to do the axios call here, redux seems like overkill,
    //since it will be attached to localStorage

    //check to see if we have localStorage already, can skip this axios call
    if (!window.localStorage.getItem("admin")) {
      axios
        .get(`${BASE_URL}/user/usertype`, {
          headers: {
            "Content-Type": "application/json",

            Authorization: `Bearer ${window.localStorage.getItem("token")}`
          }
        })
        .then(res => {
          //Check if one of the objects is {authority: "ROLE_ADMIN"}
          if (
            res.data.filter(roles => roles.authority === "ROLE_ADMIN").length >
            0
          ) {
            window.localStorage.setItem("admin", true);
            //Have to use state here, since localStorage won't cause re-render
            this.setState({
              admin: true
            });
          } else {
            window.localStorage.setItem("admin", false);
          }
        })
        .catch(err => console.log(err));
    } else {
      if (window.localStorage.getItem("admin") === "true") {
        this.setState({
          admin: true
        });
      } else {
        this.setState({
          admin: false
        });
      }
    }
  }

  logout = () => {
    window.localStorage.removeItem("admin");
    window.localStorage.removeItem("token");
  };

  render() {
    return (
      <GSN>
        <StyledH1 className="title">
          <span className="navspan">TIEME NDO</span>
          <img className="logo" alt="logo" src={logo} />
        </StyledH1>
        {/* <StyledDiv className="hvr-underline-reveal">
          <NavLink to="/dashboard" style={{ textDecoration: "none" }}>
            <i className="fas fa-th" />
            <span className="navspan">DASHBOARD</span>
          </NavLink>
        </StyledDiv> */}
        <StyledDiv className="hvr-underline-reveal">
          <NavLink to="/search" style={{ textDecoration: "none" }}>
            <i className="fas fa-database" />
            <span className="navspan">CRM</span>
          </NavLink>
        </StyledDiv>
        {this.state.admin && (
          <StyledDiv className="hvr-underline-reveal">
            <NavLink to="/users" style={{ textDecoration: "none" }}>
              <i className="fas fa-user" />
              <span className="navspan">USERS</span>
            </NavLink>
          </StyledDiv>
        )}
        <StyledDiv className="hvr-underline-reveal">
          <NavLink to="/inventory" style={{ textDecoration: "none" }}>
            <i className="fas fa-boxes" />
            <span className="navspan">INVENTORY</span>
          </NavLink>
        </StyledDiv>
        <StyledDiv className="hvr-underline-reveal">
          <NavLink
            onClick={() => this.logout()}
            to="#"
            style={{ textDecoration: "none" }}
          >
            <i className="fas fa-sign-out-alt" />
            <span className="navspan">LOG OUT</span>
          </NavLink>
        </StyledDiv>
        <StyledDiv>
          <NavLink
            style={{ textDecoration: "none" }}
            to="#"
            onClick={() => this.props.needHelp(this.props.help)}
          >
            <i className="fas fa-question-circle" />
            <span className="navspan">HELP</span>
          </NavLink>
        </StyledDiv>

        <Modal isOpen={this.props.help} toggle={this.props.needHelp}>
          <HelpComponent toggle={this.props.needHelp} />
        </Modal>
      </GSN>
    );
  }
}

const mapStateToProps = state => {
  return {
    help: state.help.needsHelp
  };
};

export default connect(
  mapStateToProps,
  { needHelp }
)(GlobalSideNav);

const GSN = styled.div`
  align-items: left;

  width: 250px;

  background: ${theme.sideNavBackground};
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.44), 0 10px 16px 1px rgba(0, 0, 0, 0.53);
  z-index: 2;

  @media (max-width: 1000px) {
    width: auto;
  }

  @media (max-width: 500px) {
    display: flex;
    position: fixed;
    width: 100%;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.4);
  }
`;

const StyledH1 = styled.h1`
  display: flex;
  align-items: center;
  margin-top: 2px;
  font-family: ${theme.sideNavFont};
  justify-content: center;
  width: 100%;
  padding: 20px 0;
  text-shadow: 0 1px 3px rgba(57, 55, 70, 0.4);
  font-size: 14px;
  color: white;
  letter-spacing: -3px;
  letter-spacing: 1px;
  margin-bottom: 20px;

  @media (max-width: 1000px) {
    span.navspan {
      display: none;
    }
  }

  @media (max-width: 500px) {
    display: none;
  }

  .logo {
    width: 20px;
    height: 20px;
    display: inline;
    position: relative;
    left: -8px;
    top: -8px;

    @media (max-width: 1000px) {
      left: 0;
      top: 0;
    }
  }
`;

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  font-size: 1.7rem;

  color: gray;
  letter-spacing: -2px;
  letter-spacing: 1px;
  font-weight: 400;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2px;
  transition: all 0.55s ease;
  &:hover {
    color: white;
  }

  a {
    color: inherit;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;

    border-right: 4px solid transparent;
    justify-content: center;

    font-size: 1.3rem;

    letter-spacing: 0px;

    padding: 10px;

    @media (max-width: 1000px) {
      padding: 15px;
      height: 50px;

      span.navspan {
        display: none;
      }
    }

    @media (max-width: 500px) {
      border-right: none;
      border-bottom: 3px solid transparent;
    }

    &:hover {
      color: inherit;
      border-bottom: none;
    }

    span {
      width: 100px;
      display: inline-block;
      font-family: ${theme.sideNavFont};
      padding-left: 2rem;
    }

    &.active {
      color: ${theme.activeblue};
      border-right: 4px solid ${theme.activeblue};

      @media (max-width: 500px) {
        border-right: none;
        border-bottom: 3px solid ${theme.activeblue};
      }
    }
  }
`;
