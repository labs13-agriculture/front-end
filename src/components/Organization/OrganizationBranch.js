import React from "react"; // { useState }
// import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import { Modal } from "reactstrap";

// import { theme } from "../../config";
// import { StyledTd } from "../../styles/InstallmentStyles";

function OrganizationBranch(props) {
  const { organizationBranch } = props;
  return (
    <div>
      <h1>YO FOOL</h1>
    </div>
  );
}

const mapStateToProps = state => {
  return {};
};

const connected = connect(
  mapStateToProps,
  {}
)(OrganizationBranch);

export default withRouter(connected);
