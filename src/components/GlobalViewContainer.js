import React, { Component } from "react";

import styled, { css } from "styled-components";
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
        {/*  Putting these 2 in a private route to */}
        <PrivateRoute path='/dashboard' component={ClientVueContainer}/>

        <PrivateRoute path='/search' component={GlobalNav}/>
        <PrivateRoute path='/search' component={ClientVueContainer}/>

        <PrivateRoute path='/users' components={ManageUsersContainer} />

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

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 250px;
  height: 250px;
  margin: 10px;
  border-radius: 7px;
  background-image: linear-gradient(-60deg, #16a085 0%, #f4d03f 100%);
`;

const IMG = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  border: solid 1px white;
  background-image: linear-gradient(
    to top,
    #c4c5c7 0%,
    #dcdddf 52%,
    #ebebeb 100%
  );
`;
