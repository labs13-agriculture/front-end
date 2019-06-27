import React, { Component } from "react";
import styled from "styled-components";
import { Route, Redirect } from "react-router-dom";

import SearchNav from "./SearchNav";
import ViewContainer from "./ViewContainer";
import PrivateRoute from "../components/PrivateRoute";
import { ManageUsersContainer } from "./ManageUsers/ManageUsersContainer";
import { theme } from "../config";
import InventoryView from "./Inventory/InventoryView";
//import OrganizationCardContainer from "./OrganizationCardContainer";
import OrganizationCard from "./Organization/OrganizationCard";

export default class GlobalVueContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: []
    };
  }

  render() {
    return (
      <GVC>
        <PrivateRoute path="/dashboard" component={ViewContainer} />

        <PrivateRoute path="/search" component={SearchNav} />
        <PrivateRoute path="/search" component={ViewContainer} />
        <Route
          exact
          path="/search"
          render={props => <Redirect to="/search/farmer" {...props} />}
        />
        <Route
          exact
          path="/organizations/all-organizations"
          component={OrganizationCard}
        />
        <PrivateRoute path="/users" component={ManageUsersContainer} />

        <PrivateRoute path="/inventory" component={InventoryView} />
      </GVC>
    );
  }

  // componentDidMount(){

  // }
}

const GVC = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  background: ${theme.globalViewBackground};
  background-size: cover;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  padding-bottom: -20px;

  @media (max-width: 500px) {
    padding-top: 50px;
  }
`;
