import React, { Component } from "react";
import styled, { css } from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserResultsItem from "./UserResultsItem";
import { connect } from "react-redux";
import { getProductStatData } from "../../actions";



export class UserResultsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
     
    };
  }

  

  render() {
    return (
      <StyledUserResultsVue>
        <StyledMiniNav>
          <h3 className="mini-nav-title">Username</h3>
          <h3 className="mini-nav-title">Created By</h3>
          <h3 className="mini-nav-title">Roles</h3>
        </StyledMiniNav>
        <StyledResultsList>
          {this.props.returnedUserData.length == 0 && <div className="search-placeholder"><i className="fas fa-search"></i></div>}
          {this.props.userSearchSuccess &&
            this.props.returnedUserData.map(user => (
              <UserResultsItem
                username={user.username}
                creator={user.creator}
                userRoles={user.userRoles}
                userid={user.userid}
                
              />
            ))}
        </StyledResultsList>
      </StyledUserResultsVue>
    );
  }
}





//begin styling

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) =>
    css`
      @media (max-width: ${sizes[label]}px) {
        ${css(...args)}
      }
    `;

  return acc;
}, {});

const StyledUserResultsVue = styled.div`
  
  height: 100%;
  display: flex;
  flex-direction: column;
  ${'' /* box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025); */}
  /* margin: 60px 60px 60px 0px; */
  ${'' /* border: 1px solid #d3d3d37a; */}

  h3 {
    font-family: "Mandali", sans-serif;

    margin: 0px;
    font-size: 14px;
    width:200px;
   
  }


  .mini-nav-title {
    font-family: "Mandali", sans-serif;
    font-size: 16px;
    ${'' /* padding: 20px 20px 15px 20px; */}

    
    background: white;

    &:nth-child(3) {

    width: 67px;
    padding-left: 0px;
  }

  
`;
const StyledMiniNav = styled.div`
  
  width: 100%;
  padding: 5px 20px 5px;
  display:flex;
  width:100%;
  justify-content:space-between;
  background:white;
  border-bottom: 2px solid #d3d3d37a;
  &:last-child{
    width:67px;
  }
`;

const StyledResultsList = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  display:flex;
  flex-direction:column;
  
  .search-placeholder{
    display:flex;
   
    font-size:90px;
    

  }
  
`;
