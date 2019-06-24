import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Modal } from "reactstrap";
import { theme } from "../../config";
import { StyledTd } from "../../styles/InstallmentStyles";
import EditInstallmentForm from "./EditInstallmentForm.js";

import { deleteInstallment } from "../../actions";

function Installment(props) {
  const { installment } = props;

  const [modal, setModal] = useState(false);

  const toggleModal = event => {
    if (event) {
      event.preventDefault();
    }

    setModal(!modal);
  };

  const handleDelete = event => {
    event.preventDefault();
    let d = window.confirm(
      "Are you sure you want to PERMANENTLY DELETE this istallment?"
    );
    if (d) {
      props.deleteInstallment(installment.id);
    }
  };

  return (
    <Row>
      <StyledTd className="amountPaid">{installment.amountPaid}</StyledTd>
      <StyledTd className="mode">{installment.mode}</StyledTd>
      <StyledTd className="datePaid">
        {installment.datePaid.split("T")[0]}
      </StyledTd>
      <StyledTd className="officer">{installment.officer}</StyledTd>
      <StyledTd className="actions">
        <i onClick={toggleModal} className="fas fa-edit edit" />
      </StyledTd>
      <StyledTd className="actions">
        <i onClick={handleDelete} className="fas fa-trash delete" />
      </StyledTd>
      <Modal isOpen={modal} toggle={toggleModal}>
        <EditInstallmentForm
          toggleModal={toggleModal}
          installment={installment}
        />
      </Modal>
    </Row>
  );
}

const mapStateToProps = state => {
  return {};
};

const connected = connect(
  mapStateToProps,
  {
    deleteInstallment
  }
)(Installment);

export default withRouter(connected);

const Row = styled.tr`
  i {
    transition: all 0.15s ease;
  }

  i.delete:hover {
    color: ${theme.warning};
  }

  i.edit:hover {
    color: ${theme.accent};
  }
`;
