import React, { Component } from "react";
import styled from "styled-components";
import { getNextOrgPage } from "../../actions";
import { connect } from "react-redux";
import {theme} from "../../config";
import { Spinner } from "reactstrap";

class OrgResultsBtn extends Component {
  render() {
    return (
      <StyledClientResultsBtn>
      {this.props.totalPages && 
         <div className="results total">
         
          <h1>{parseInt(this.props.totalPages)}</h1>
          <h3>Results</h3>
        </div>}
        
        <div className="search-option-container">
          <div className="search-option-btn-cont">
          
            {/* condition for: do I need a previous button? */}
            {this.props.numResults && parseInt(this.props.currentPage) !== 0 && (
              <button
                onClick={() =>
                  this.props.getNextOrgPage(this.props.prevPage)
                }
                className="results-btn prev"
              >
                <i className="far fa-arrow-alt-circle-left" />
              </button>
            )}

            {/* condition for: do I need a next button? */}
            {parseInt(this.props.totalPages) >
              parseInt(this.props.currentPage) + 1 && (
              <button
                onClick={() =>
                  this.props.getNextOrgPage(this.props.nextPage)
                }
                className="results-btn next"
              >
                <i className="far fa-arrow-alt-circle-right" />
              </button>
            )}
            
            {/* conditional display for single page results */}
            {(parseInt(this.props.totalPages) === 1 ||
              parseInt(this.props.totalPages) === 0) && (
              <i className="fas fa-book-open" />
            )}
          </div>

          {this.props.getNextOrgsStart ? <Spinner className="spinner" />:

           parseInt(this.props.totalPages) >= 1 ? (
            <div className="results pages">
              <h3>{`Page ${parseInt(this.props.currentPage) + 1} of ${
                this.props.totalPages
              }`}</h3>
            </div>
          ) : (
            
            <div className="results pages">
               <h3>{`Page ${parseInt(this.props.currentPage)} of ${
                this.props.totalPages
              }`}</h3>
            </div>
          )}
       
        </div>


        {/* finish */}

        {/* {this.props.prevPage && (
          <button
            onClick={() => this.props.getNextOrgPage(this.props.prevPage)}
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
            <div>{this.props.numResults} Organizations found</div>
          )}
        </div>
        {this.props.nextPage && (
          <button
            onClick={() => this.props.getNextOrgPage(this.props.nextPage)}
          >
            Next
          </button>
        )} */}
      </StyledClientResultsBtn>
    );
  }
}

const mapStateToProps = state => {
  return {
    nextPage: state.organizationData.nextPage,
    prevPage: state.organizationData.prevPage,
    currentPage: state.organizationData.currentPage,
    totalPages: state.organizationData.totalPages,
    numResults: state.organizationData.numResults,
    getNextOrgsStart:state.organizationData.getNextOrgsStart
  };
};

export default connect(
  mapStateToProps,
  { getNextOrgPage }
)(OrgResultsBtn);

const StyledClientResultsBtn = styled.div`
  display: flex;
  width: 400px;
  justify-content: flex-start;
  color: white;
  align-items: flex-end;
  margin-bottom: 10px;

  h3 {
    font-size: 1.8rem;
  }

  h1 {
    font-size: 2.3rem;
  }

  .search-option-container {
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .search-option-btn-cont {
      width: 200px;

      display: flex;
      transition: all 0.55s ease;
      justify-content: space-around;
    }
  }
  .results-btn.next {
    border: none;
    padding: none;
    background: none;
    width: 98px;
    font-size: 2.3rem;
    color: ${theme.activeblue};
    padding: 0px;
  }

  .results-btn.prev {
    border: none;
    padding: none;
    background: none;
    width: 98px;
    font-size: 2.3rem;
    color: ${theme.activeblue};
    padding: 0px;
  }

  .results.total {
    display: flex;

    flex-direction: column;

    align-items: center;

    width: 100px;

    h1 {
      color: ${theme.activeblue};
    }
  }

  .fas.fa-book-open {
    color: ${theme.activeblue};
    margin: 5px;
    font-size: 2.3rem;
  }
`;
