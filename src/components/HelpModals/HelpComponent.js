import React from "react";
import { withRouter } from "react-router-dom";
import ClientSearchHelp from "./ClientSearchHelp";
import ClientViewHelp from "./ClientViewHelp";

function HelpComponent(props) {
  console.log(props.history.location.pathName);
  return <h1>Help Component</h1>;
}

export default withRouter(HelpComponent);
