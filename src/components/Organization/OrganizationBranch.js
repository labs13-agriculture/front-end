import React, { Component } from "react"; // { useState }
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import BranchHeader from "../Branch/BranchHeader";
import { getBranches } from "../../actions";
import OrganizationBranchCard from "./OrganizationBranchCard";
// import { theme } from "../../config";
// import { StyledTd } from "../../styles/InstallmentStyles";

class OrganizationBranch extends Component {
  componentDidMount() {
    this.props.getBranches(this.props.id);
  }

  render() {
    return (
      <BranchContainer>
        <BranchHeader id={this.props.id} />
        <div className="branch-info-container">
          {this.props.data.length > 0 &&
            this.props.data.map(branch => {
              return (
                <OrganizationBranchCard
                  branch={branch}
                  key={branch.branch_id}
                />
              );
            })}
        </div>
        {/* <StyledTable>
          <tbody>
            {this.props.start && <div className="spindiv"><Spinner className="spinner" /></div>}
            {this.props.data.length > 0 &&
              this.props.data.map(branch => {
                return <Branch branch={branch} key={branch.branch_id} />;
              })}
          </tbody>
        </StyledTable> */}
      </BranchContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.branchData.branchData,
    start: state.branchData.getBranchStart
  };
};

const connected = connect(
  mapStateToProps,
  { getBranches }
)(OrganizationBranch);

export default withRouter(connected);

const BranchContainer = styled.div`
  width: 100%;
  border-radius: 3px;
  .branch-info-container {
    /* display: flex;
    justify-content: flex-start;
    flex-wrap: wrap; */
    background: rgb(35, 33, 43);
    height: 100%;
  }
`;
