import React, { Component } from "react";
import styled from "styled-components";
import PrivateRoute from "./PrivateRoute";
import RetailerSearch from "./SearchComponents/RetailerSearch";
import { ManageUsersContainer } from "./ManageUsers/ManageUsersContainer";
import FarmerSearch from "./SearchComponents/FarmerSearch";
import OrganizationSearch from "./SearchComponents/OrganizationSearch";
import FarmerView from "./FarmerView";
import RetailerView from "./RetailerView";
import OrganizationView from "./OrganizationView/OrganizationView.js"

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
        <PrivateRoute
          exact
          path="/dashboard/farmer/:id"
          component={FarmerView}
        />

        <PrivateRoute
          exact
          path="/dashboard/retailer/:id"
          component={RetailerView}
        />

        <PrivateRoute
          exact
          path="/dashboard/organization/:id"
          component={OrganizationView}
        />

        <PrivateRoute
          path="/dashboard/manage-users"
          component={ManageUsersContainer}
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
