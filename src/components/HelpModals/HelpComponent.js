import React from "react";
import { withRouter } from "react-router-dom";
import ClientSearchHelp from "./ClientSearchHelp";
import ClientViewHelp from "./ClientViewHelp";
import OrganizationSearchHelp from "./OrganizationSearchHelp";

function HelpComponent(props) {
  let currentPath = props.history.location.pathname;
  // If current path includes dashboard it ends with a unique id.
  // we can break it apart a reassemble it without the id included
  // this better fits the switch statement
  if (currentPath.includes("dashboard")) {
    currentPath = currentPath
      .split("/")
      .slice(0, 3)
      .join("/");
  }

  switch (currentPath.toLowerCase()) {
    case "/search/farmer":
    case "/search/retailer":
      return <ClientSearchHelp />;
    case "/dashboard/farmer":
    case "/dashboard/retailer":
      return <ClientViewHelp />;
    case "/search/organizations":
      return <OrganizationSearchHelp />;
    case "/dashboard/organization/":
    case "/users":
    case "/inventory":
    default:
      return <h1>Search Component Default</h1>;
  }
}

export default withRouter(HelpComponent);
