import React, { Component } from "react";
import styled from "styled-components";
import { getNextBranchPage } from "../../actions";
import { connect } from "react-redux";

class OrganizationBranchResultsBtn extends Component {
  render() {
    return (
      <StyledClientResultsBtn>
        {this.props.prevPage && (
          <button
            onClick={() => this.props.getNextBranchPage(this.props.prevPage)}
          >
            Previous
          </button>
        )}
        <div>
          {this.props.currentPage && (
            <div>
              Page {parseInt(this.props.currentPage) + 1} of{" "}
              {this.props.totalPages}
            </div>
          )}
          {this.props.numResults && (
            <div>{this.props.numResults} Branches found</div>
          )}
        </div>
        {this.props.nextPage && (
          <button
            onClick={() => this.props.getNextBranchPage(this.props.nextPage)}
          >
            Next
          </button>
        )}
      </StyledClientResultsBtn>
    );
  }
}

const mapStateToProps = state => {
  return {
    nextPage: state.branchData.nextPage,
    prevPage: state.branchData.prevPage,
    currentPage: state.branchData.currentPage,
    totalPages: state.branchData.totalPages,
    numResults: state.branchData.numResults
  };
};

export default connect(
  mapStateToProps,
  { getNextBranchPage }
)(OrganizationBranchResultsBtn);

const StyledClientResultsBtn = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
