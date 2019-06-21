import { Route, Redirect } from "react-router-dom";
import React from "react";

import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, error, loggedIn, ...rest }) => {
  console.log("isLoggedIn " + loggedIn);
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("token") && error !== 403 && loggedIn) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default connect(
  state => ({
    loggedIn: state.login.loggedIn
  }),
  {}
)(PrivateRoute);
