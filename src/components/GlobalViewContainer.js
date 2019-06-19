import React, { Component } from "react";
import styled from "styled-components";
import {Route, Redirect} from "react-router-dom";

import GlobalNav from "./GlobalNav";
import ClientVueContainer from "./ClientVueContainer";
import PrivateRoute from "../components/PrivateRoute";
import {ManageUsersContainer} from "./ManageUsers/ManageUsersContainer";

import InventoryView from './Inventory/InventoryView'


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
        <PrivateRoute path='/dashboard' component={ClientVueContainer}/>

        <PrivateRoute path='/search' component={GlobalNav}/>
        <PrivateRoute path='/search' component={ClientVueContainer}/>
        <Route exact path='/search' render={props => <Redirect to="/search/farmers" {...props}/>} />

        <PrivateRoute path='/users' component={ManageUsersContainer} />

        <PrivateRoute path='/inventory' component={InventoryView} />
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
  ${'' /* background-color: #1f1f1f; */}
  background:rgb(35, 33, 43);;
`;