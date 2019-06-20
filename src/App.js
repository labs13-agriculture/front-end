import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Login from "./components/LoginComponent/Login";
import PrivateRoute from "./components/PrivateRoute";
import GlobalViewContainer from "./components/GlobalViewContainer";
import GlobalSideNav from "./components/GlobalSideNav";
import GlobalNav from "./components/GlobalNav";
import StatisticsVue from "./components/StatisticsDashboardComp/StatisticsVue";
import FarmerView from "./components/FarmerView";
import ClientVueContainer from "./components/ClientVueContainer";

// import ItemList from './components/ItemList';
// import {DashboardVue} from './components/DashboardView';
// import Registration from './components/Registration';

class App extends Component {
  render() {
    return (
      <Router>
        <StyledApp>
          <Route exact path="/" component={Login} />

          <PrivateRoute path="/dashboard" component={GlobalSideNav} />
          <PrivateRoute path="/search" component={GlobalSideNav} />
          <PrivateRoute path="/users" component={GlobalSideNav} />
          <PrivateRoute path="/inventory" component={GlobalSideNav} />

          <div className="mobilenavbuffer">
            <PrivateRoute path="/dashboard" component={GlobalViewContainer} />
            {/* <Route path="/dashboard/testfarmer" component={FarmerView} /> */}
            <PrivateRoute path="/search" component={GlobalViewContainer} />
            <PrivateRoute path="/users" component={GlobalViewContainer} />
            <PrivateRoute path="/inventory" component={GlobalViewContainer} />
          </div>

            {/* <Route path="/testdashboard" component={GlobalSideNav} />
            <Route path="/testdashboard" component={GlobalNav} />
            <Route path="/testdashboard" component={GlobalViewContainer} /> */}
        </StyledApp>
      </Router>
    );
  }
}

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

const StyledApp = styled.div`
  * {
    box-sizing: border-box;
  }

  display: flex;
  /* flex-flow: row wrap; */
  width: 100%;
  height: 100%;

  font-family: "Roboto", sans-serif;
  font-size: 1.4rem;

  .mobilenavbuffer {
    display: flex;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 500px) {
    display: block;

    .mobilenavbuffer {
      padding-top: 50px;
    }
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  .gen-login-container {
    margin-top: 100px;
    ${media.desktop`margin-top:0px;`}
  }

  #login-opacity {
    opacity: 0.5;
  }
  .complete-dashboard-container {
    height: 100%;
  }
  .footer {
    width: 100%;
    background: lightgray;
    height: 20vh;
  }
`;

export default App;
