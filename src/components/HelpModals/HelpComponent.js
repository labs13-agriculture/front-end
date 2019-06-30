import React from "react";
import { withRouter } from "react-router-dom";
import ClientSearchHelp from "./ClientSearchHelp";
import ClientViewHelp from "./ClientViewHelp";
import OrganizationSearchHelp from "./OrganizationSearchHelp";
import OrgViewHelp from "./OrgViewHelp";
import ManageUsersHelp from "./ManageUsersHelp";
import InventoryHelp from "./InventoryHelp";

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

  let Component = () => <h1>Can Not Find Help Page</h1>;

  switch (currentPath.toLowerCase()) {
    case "/search/farmer":
    case "/search/retailer":
      Component = ClientSearchHelp;
      break;
    case "/dashboard/farmer":
    case "/dashboard/retailer":
      Component = ClientViewHelp;
      break;
    case "/search/organizations":
      Component = OrganizationSearchHelp;
      break;
    case "/dashboard/organization":
      Component = OrgViewHelp;
      break;
    case "/users":
      Component = ManageUsersHelp;
      break;
    case "/inventory":
      Component = InventoryHelp;
      break;
    default:
      break;
  }

  return <Component />;
}

export default withRouter(HelpComponent);
