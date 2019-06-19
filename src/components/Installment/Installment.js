import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

import { theme } from '../../config';

import { StyledTd } from "../../styles/InstallmentStyles";

import {
  deleteInstallment
} from "../../actions"

function Installment(props) {
  const { installment } = props;

  const handleDelete = event => {
    event.preventDefault();
    props.deleteInstallment(installment.id);
  }

  return (
    <Row>
      <StyledTd className="amountPaid">{installment.amountPaid}</StyledTd>
      <StyledTd className="mode">{installment.mode}</StyledTd>
      <StyledTd className="datePaid">
        {installment.datePaid.split("T")[0]}
      </StyledTd>
      <StyledTd className="officer">{installment.officer}</StyledTd>
      <StyledTd className="actions">
        <i
            onClick={() => installment.toggleEdit(installment.installment)}
            className="fas fa-edit edit"
          />
      </StyledTd>
      <StyledTd className="actions">
        <i
            onClick={handleDelete}
            className="fas fa-trash delete"
          />
      </StyledTd>
    </Row>
  );
}

const mapStateToProps = state => {
  return null;
};

const connected = connect(
  mapStateToProps,
{
  deleteInstallment
})(Installment);

export default withRouter(connected);

const Row = styled.tr`
  i {
    transition: all .15s ease;
  }

  i.delete:hover {
    color: ${theme.warning}
  }

  i.edit:hover {
    color: ${theme.accent}
  }
`;
