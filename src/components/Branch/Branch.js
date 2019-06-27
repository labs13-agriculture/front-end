import React, { Component } from "react";
import BranchForm from "./BranchForm";
import { StyledTd } from "../../styles/InstallmentStyles";
import { theme } from "../../config";
import styled from "styled-components";
import { Modal } from "reactstrap";
import { deleteBranch } from "../../actions";
import { connect } from "react-redux";

class Branch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleUpdate: false
    };
  }

  toggleUpdateModal = () => {
    this.setState({
      toggleUpdate: !this.state.toggleUpdate
    });
  };

  render() {
    return (
      <Row>
        <StyledTd>{this.props.branch.name}</StyledTd>
        <StyledTd>{this.props.branch.phone}</StyledTd>
        <StyledTd>{this.props.branch.email}</StyledTd>
        <StyledTd>{this.props.branch.position}</StyledTd>
        <StyledTd>{this.props.branch.address}</StyledTd>
        <StyledTd>{this.props.branch.district}</StyledTd>
        <StyledTd>{this.props.branch.region}</StyledTd>
        <StyledTd>{this.props.branch.landmark}</StyledTd>
        <StyledTd className="actions">
          <i onClick={this.toggleUpdateModal} className="fas fa-edit edit" />
        </StyledTd>
        <StyledTd className="actions">
          <i
            onClick={() => this.props.deleteBranch(this.props.branch.branch_id)}
            className="fas fa-trash delete"
          />
        </StyledTd>
        <Modal isOpen={this.state.toggleUpdate} toggle={this.toggleUpdateModal}>
          <BranchForm
            updating={true}
            branch={this.props.branch}
            toggle={this.state.toggleUpdateModal}
          />
        </Modal>
      </Row>
    );
  }
}

export default connect(
  null,
  { deleteBranch }
)(Branch);

const Row = styled.tr`
  width: 100%;
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
