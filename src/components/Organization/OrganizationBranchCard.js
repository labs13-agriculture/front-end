import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Modal, Alert } from "reactstrap";
import BranchForm from "../Branch/BranchForm";
import { deleteBranch, clearBranchAlerts } from "../../actions";
import { connect } from "react-redux";
import { theme } from "../../config";

class OrganizationBranchCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.props.clearBranchAlerts();
  }

  redirect = () => {
    this.setState({
      redirect: true
    });
  };

  toggleUpdateModal = () => {
    this.setState({
      toggleUpdate: !this.state.toggleUpdate
    });
  };

  render() {
    const organization = { ...this.props };

    return (
      <StyledGlobalClientCard>
        <div className="contentContainer">
          <div className="header-detail">
            <div className="circle">
              <div className="first-name">{this.props.branch.name[0]}</div>
            </div>
            <div className="header-content">
              <h3>{this.props.branch.name}</h3>
              <div className="edit-options">
                <i
                  onClick={this.toggleUpdateModal}
                  className="fas fa-edit edit"
                />
                <i
                  onClick={() =>
                    this.props.deleteBranch(this.props.branch.branch_id)
                  }
                  className="fas fa-trash delete"
                />
              </div>
            </div>
          </div>

          <div className="detail-section">
            <div className="location-detail">
              <h2 className="section-header">Branch Location: </h2>
              <div className="gen-style-container">
                <h3 className="info-container-heading">
                  Address:
                  <span className="data">{this.props.branch.address}</span>
                </h3>
              </div>

              <div className="gen-style-container">
                <h3 className="info-container-heading">
                  District:
                  <span className="data">{this.props.branch.district}</span>
                </h3>
              </div>

              <div className="gen-style-container">
                <h3 className="info-container-heading">
                  Region:
                  <span className="data">{this.props.branch.region}</span>
                </h3>
              </div>

              <div className="gen-style-container">
                <h3 className="info-container-heading">
                  Landmark:{" "}
                  <span className="data">{this.props.branch.landmark}</span>
                </h3>
              </div>
            </div>

            <div className="contact-detail">
              <h2 className="section-header">Contact Info: </h2>
              <div className="gen-style-container">
                <h3 className="info-container-heading">
                  Position:{" "}
                  <span className="data">{this.props.branch.position}</span>
                </h3>
              </div>

              <div className="gen-style-container">
                <h3 className="info-container-heading">
                  Phone: <span className="data">{this.props.branch.phone}</span>
                </h3>
              </div>

              <div className="gen-style-container">
                <h3 className="info-container-heading">
                  Email: <span className="data">{this.props.branch.email}</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <Modal isOpen={this.state.toggleUpdate} toggle={this.toggleUpdateModal}>
          <BranchForm
            updating={true}
            branch={this.props.branch}
            toggleModal={this.toggleUpdateModal}
          />
        </Modal>
      </StyledGlobalClientCard>
    );
  }
}

export default connect(
  state => ({
    updateSuccess: state.branchData.updateSuccess,
    updateFailure: state.branchData.updateFailure
  }),
  { deleteBranch, clearBranchAlerts }
)(OrganizationBranchCard);

const StyledGlobalClientCard = styled.div`
  color: ${theme.background_light};
  background: ${theme.navgrey};
  margin-bottom: 20px;
  border-radius: 3px;
  padding: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  .contentContainer {
    display: flex;

    @media (max-width: 600px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }

  .header-detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    min-width: 200px;
    width: 30%;

    @media (max-width: 600px) {
      width: 100%;
      flex-direction: row;
      margin-bottom: 30px;
    }

    h3 {
      margin-bottom: 15px;
    }
  }

  .section-header {
    border-bottom: 1px solid lightgray;
    margin-bottom: 15px;
    padding-bottom: 8px;
  }

  .detail-section {
    display: flex;
    width: 100%;

    @media (max-width: 850px) {
      flex-direction: column;
    }
  }

  .edit-options {
    display: flex;
    justify-content: space-evenly;
    width: 100%;

    margin-bottom: 25px;

    @media (max-width: 600px) {
      margin: 0;
    }

    i {
      max-width: 50px;
    }
  }

  .gen-style-container {
    display: inline-flex;
    /* border-bottom: 1px solid lightgray; */
    padding: 3px 10px;
  }

  .info-container-heading {
    margin: 0;
    font-weight: 700;
    font-size: 1.4rem;
    color: rgba(200, 200, 200, 0.5);
    span.data {
      margin-left: 15px;
      font-weight: 100;
      font-family: ${theme.sideNavFont};
      font-size: 1.8rem;
      color: ${theme.background_light};
    }
  }

  .contact-detail {
    width: 100%;
    margin-right: 15px;

    @media (max-width: 850px) {
      margin-right: 0;
    }

    @media (max-width: 600px) {
      margin: 30px 0;
    }
  }

  .location-detail {
    width: 100%;
  }

  .circle {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    color: #40e0d0;
    margin: 15px;

    text-align: center;
    background: rgb(35, 33, 43);
    display: inline-block;

    .first-name {
      font-size: 3rem;
      color: #40e0d0;
      position: relative;
      top: 8px;
      left: 2px;
    }
  }
`;
