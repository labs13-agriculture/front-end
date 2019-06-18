import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
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
        <StyledH1 className="title"><i className="fas fa-seedling" />TIEME NDO</StyledH1>
        <StyledDiv className="hvr-underline-reveal">
          <NavLink to="/dashboard" style={{ textDecoration: "none" }}>
            <i class="fas fa-th"></i>
            <span>DASHBOARD</span>
          </NavLink>
        </StyledDiv>
        <StyledDiv className="hvr-underline-reveal">
          <NavLink to="/search" style={{ textDecoration: "none" }}>
            <i className="fas fa-search"></i>
            <span>SEARCH</span>
          </NavLink>
        </StyledDiv>
        <StyledDiv className="hvr-underline-reveal">
          <NavLink to="/users" style={{ textDecoration: "none" }}>
            <i className="fas fa-user"></i>
            <span>USERS</span>
          </NavLink>
        </StyledDiv>
        <StyledDiv className="hvr-underline-reveal">
          <NavLink to="/inventory" style={{ textDecoration: "none" }}>
            <i className="fas fa-boxes"></i>
            <span>INVENTORY</span>
          </NavLink>
        </StyledDiv>
        <StyledDiv className="hvr-underline-reveal">
          <NavLink onClick={() => this.logout()} to="#" style={{ textDecoration: "none" }}>
            <i className="fas fa-sign-out-alt"></i>
            <span>LOG OUT</span>
          </NavLink>
        </StyledDiv>

        {/* {this.state.names.map(user => <h1>{user.username}</h1>)} */}
      </GSN>
    );
  }
}

const GSN = styled.div`

  align-items: left;
  ${'' /* width: 17%; */}
  width:250px;
  ${'' /* background-image: linear-gradient(
    to top,
    #d5d4d0 0%,
    #d5d4d0 1%,
    #eeeeec 31%,
    #efeeec 75%,
    #e9e9e7 100%
  ); */}
  
  background:rgb(60,57,75);
  box-shadow:  0 13px 27px -5px rgba(50,50,93,0.25),0 8px 16px -8px rgba(0, 0, 0, 0.44),0 10px 16px 1px rgba(0, 0, 0, 0.53);
  z-index:2;
`;

const StyledH1 = styled.h1`
  display: flex;
  margin-top: 2px;
  ${'' /* background: linear-gradient(to left, transparent, #2800a9, transparent); */}
  ${'' /* background-size: 100% 2px;
  background-repeat: no-repeat;
  background-position: bottom; */}
  font-family: "Josefin Sans", sans-serif;
  justify-content: center;
  width: 100%;
  padding: 20px 0;
  text-shadow: 0 1px 3px rgba(57, 55, 70, 0.4);
  font-size: 14px;
  color: white;
  letter-spacing: -3px;
  letter-spacing: 1px;
  margin-bottom:20px;
  

  .fas.fa-seedling{
    margin-right:4px;
    font-size:13px;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  ${'' /* padding: 10px 5px;
  margin: 5px 5px; */}
  /* font-family: "Josefin Sans", sans-serif; */
  /* text-shadow: 0 1px 3px rgba(57, 55, 70, 0.4); */
  font-size: 1.7rem;
  ${'' /* color: #2800a9; */}
  color: gray;
  letter-spacing: -2px;
  letter-spacing: 1px;
  font-weight: 400;
  height: 50px;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-bottom:2px;
  transition: all .55s ease;
  &:hover{
    color:white;
  }
  
}

  a {
    color: inherit;
    width: 100%;
    height:60px;
    display:flex;
    align-items:center;
    
    border-right: 4px solid transparent;
    justify-content: center;

    font-size: 1.3rem;

    letter-spacing: 0px;
    

    &:hover{
      color:inherit;
      border-bottom:none;
    }

    
    span {
      width:100px;
      display:inline-block;
      font-family: "Josefin Sans", sans-serif;
      padding-left: 2rem;
    }

    &.active {
      /* I didnt not steal this from spotify */
      
      color:#40E0D0;
      border-right: 4px solid #40E0D0;
      
      
    }
  }

  
`;
