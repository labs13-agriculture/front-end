import React from "react";
import { withRouter } from "react-router-dom";
import ClientSearchHelp from "./ClientSearchHelp";
import ClientViewHelp from "./ClientViewHelp";

function HelpComponent(props) {
  const currentPath = props.history.location.pathname;
  console.log(currentPath);

  switch (currentPath) {
    case "":
      break;
    default:
      break;
  }
  return <h1>Help Component</h1>;
}

export default withRouter(HelpComponent);
