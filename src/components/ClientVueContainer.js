import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FarmerView from "./FarmerView";
import styled, { css } from "styled-components";
import GlobalCardContainer from "./GlobalCardContainer";
import PrivateRoute from "./PrivateRoute";
import RetailerSearch from "./SearchComponents/RetailerSearch";
import FarmerSearch from "./SearchComponents/FarmerSearch";
import OrganizationSearch from "./SearchComponents/OrganizationSearch";

export default class ClientVueContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <StyledClientVueContainer>
        {/* //search component will go here */}
        <PrivateRoute
          exact
          path="/dashboard/retailers"
          component={RetailerSearch}
        />
        <PrivateRoute
          exact
          path="/dashboard/farmers"
          component={FarmerSearch}
        />
        <PrivateRoute
          exact
          path="/dashboard/organizations"
          component={OrganizationSearch}
        />
        {/* <GlobalCardContainer/> */}
      </StyledClientVueContainer>
    );
  }
}

const StyledClientVueContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px;
`;
