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
import RetailerSearch from "./components/RetailerSearchComponents/RetailerSearch"

// import ItemList from './components/ItemList';
// import {DashboardVue} from './components/DashboardView';
// import Registration from './components/Registration';



class App extends Component {
  render() {
    return (
      <Router>
        <StyledApp>
          <Route exact path="/" component={Login} />
          <PrivateRoute  path="/dashboard" component={GlobalNav} />
          <PrivateRoute path="/dashboard/statistics" component={StatisticsVue} />
          <PrivateRoute exact path="/dashboard" component={GlobalSideNav} />
          <PrivateRoute exact path="/dashboard" component={GlobalViewContainer} />
          <PrivateRoute exact path="/retailer/search" component ={RetailerSearch} />
          
          {/* <Route path="/testdashboard" component={GlobalSideNav} />
          <Route path="/testdashboard" component={GlobalNav} />
          <Route path="/testdashboard" component={GlobalViewContainer} /> */}
          <PrivateRoute path="/dashboard" component={GlobalSideNav} />
          
          <PrivateRoute exact path="/dashboard" component={GlobalViewContainer} />
          <Route path="/testfarmer" component={FarmerView}/>
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
  justify-content: center;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  height: 100%;

  font-family: "Roboto", sans-serif;
  font-size: 1.4rem;

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
    
  #login-opacity{
    opacity:.5;
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
