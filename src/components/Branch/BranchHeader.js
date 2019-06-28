import React, { useState } from "react";
import styled, { css } from "styled-components";
import { connect } from "react-redux";
import { Button, Modal, Alert } from "reactstrap";
import { theme } from "../../config";
import BranchForm from "./BranchForm";
import { clearBranchAlerts } from "../../actions";
import OrganizationBranchResultsBtn from "../Organization/OrganizationBranchResultsBtn";

function BranchHeader(props) {
  const [modal, setModal] = useState(false);

  const toggleModal = e => {
    // e.preventDefault();
    setModal(!modal);
  };

  const onDismiss = () => {
    props.clearBranchAlerts();
  };

  return (
    <HeaderContainer>
      <div className="header">
        <h2>Branches</h2>
        <OrganizationBranchResultsBtn />
        <Button className="add-branch" onClick={toggleModal}>
          New
        </Button>
      </div>
      <Alert
        style={{ marginBottom: "0" }}
        color="success"
        isOpen={props.addSuccess}
        toggle={onDismiss}
      >
        Add Success
      </Alert>
      <Alert
        style={{ marginBottom: "0" }}
        color="danger"
        isOpen={props.addFailure}
        toggle={onDismiss}
      >
        Failed To Add
      </Alert>
      <Alert
        style={{ marginBottom: "0" }}
        color="success"
        isOpen={props.updateSuccess}
        toggle={onDismiss}
      >
        Successfully Updated!
      </Alert>
      <Alert
        style={{ marginBottom: "0" }}
        color="danger"
        isOpen={props.updateFailure}
        toggle={onDismiss}
      >
        Successfully Updated!
      </Alert>

      <Modal isOpen={modal} toggle={toggleModal}>
        <BranchForm id={props.id} toggleModal={toggleModal} />
      </Modal>
    </HeaderContainer>
  );
}

export default connect(
  state => ({
    addSuccess: state.branchData.addSuccess,
    addFailure: state.branchData.addFailure,
    updateSuccess: state.branchData.updateSuccess,
    updateFailure: state.branchData.updateFailure
  }),
  { clearBranchAlerts }
)(BranchHeader);

const HeaderContainer = styled.div`
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 5;

  .header {
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 10px;
    background: rgb(35, 33, 43);

    color: ${theme.background_light};

    h2 {
      margin: 0;
    }

    .add-branch {
      &:hover {
        background: ${theme.accent};
      }
    }
  }

  table {
    /* 100% was leaving a super small sliver for some reason */
    width: 100.1%;
    background-color: rgb(60, 57, 75);
    color: ${theme.background_light};

    tr {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
  }
`;

const StyledTd = styled.td`
  padding: 10px 0;

  width: auto;
`;
