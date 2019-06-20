import React, { Component } from "react";
import styled from "styled-components";
import PrivateRoute from "./PrivateRoute";
import RetailerSearch from "./SearchComponents/RetailerSearch";
import { ManageUsersContainer } from "./ManageUsers/ManageUsersContainer";
import FarmerSearch from "./SearchComponents/FarmerSearch";
import OrganizationSearch from "./SearchComponents/OrganizationSearch";
import FarmerView from "./FarmerView.js";
import OrganizationView from "./OrganizationView/OrganizationView.js";
import UserDetails from "../components/ManageUsers/UserDetails";

export default class ClientVueContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <StyledClientVueContainer>
        {/* //search component will go here */}
        {/* <PrivateRoute
          exact
          path="/dashboard/statistics"
          component={StatisticsVue}
        /> */}
        
        <PrivateRoute
          exact
          path="/search/retailers"
          component={FarmerSearch}
        />
        <PrivateRoute
          exact
          path="/search/farmers"
          component={FarmerSearch}
        />
        <PrivateRoute
          exact
          path="/search/organizations"
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
          component={FarmerView}
        />

        <PrivateRoute
          exact
          path="/dashboard/organization/:id"
          component={OrganizationView}
        />

       
        {/* <GlobalCardContainer/> */}
      </StyledClientVueContainer>
    );
  }
}

const StyledClientVueContainer = styled.div`
  height: 100vh;
  width: 100%;
  padding: 20px;
`;
