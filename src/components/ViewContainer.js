import React, { Component } from "react";
import styled from "styled-components";
import PrivateRoute from "./PrivateRoute";

import ClientSearch from "./SearchComponents/ClientSearch";
import OrganizationSearch from "./SearchComponents/OrganizationSearch";
import ClientView from "./ClientView/ClientView";
import OrganizationView from "./Organization/OrganizationView.js";


export default class ViewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <StyledViewContainer>
        {/* //search component will go here */}
        {/* <PrivateRoute
          exact
          path="/dashboard/statistics"
          component={StatisticsVue}
        /> */}

        <PrivateRoute
          exact
          path="/search/retailers"
          component={ClientSearch}
        />
        <PrivateRoute exact path="/search/farmers" component={ClientSearch} />
        <PrivateRoute
          exact
          path="/search/organizations"
          component={OrganizationSearch}
        />
        <PrivateRoute
          exact
          path="/dashboard/farmer/:id"
          component={ClientView}
        />

        <PrivateRoute
          exact
          path="/dashboard/retailer/:id"
          component={ClientView}
        />

        <PrivateRoute
          exact
          path="/dashboard/organization/:id"
          component={OrganizationView}
        />

       
        
      </StyledViewContainer>
    );
  }
}

const StyledViewContainer = styled.div`
  height: 100vh;
  width: 100%;
  padding: 20px;
`;
