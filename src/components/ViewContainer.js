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
        {/* <PrivateRoute
          exact
          path="/dashboard/statistics"
          component={StatisticsVue}
        /> */}

        {/* ClientSearch and  ClientView are type agnostic, they grab the type from the path to tell it what controllers to hit*/}
        <PrivateRoute exact path="/search/retailer" component={ClientSearch} />
        <PrivateRoute exact path="/search/farmer" component={ClientSearch} />

        <PrivateRoute
          exact
          path="/search/organizations"
          component={OrganizationSearch}
        />

        {/* ClientSearch and  ClientView are type agnostic, they grab the type from the path to tell it what controllers to hit*/}
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
  min-height: 100vh;
  width: 100%;
  padding: 20px;
`;
