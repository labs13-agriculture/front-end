import React from "react";
import { withRouter } from "react-router-dom";
import ClientSearchHelp from "./ClientSearchHelp";
import ClientViewHelp from "./ClientViewHelp";

function HelpComponent(props) {
  return <h1>Help Component</h1>;
}

export default withRouter(HelpComponent);
