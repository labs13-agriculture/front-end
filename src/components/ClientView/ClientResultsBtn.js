import React, { Component } from "react";
import styled from "styled-components";
import { pageClient } from "../../actions";
import { connect } from "react-redux";
import { theme } from "../../config";
import { Spinner } from "reactstrap";
import {media} from "../../styles/searchStyles";

class ClientResultsBtn extends Component {
  render() {
    const {
      searchType,
      resultsPageInfo,
      farmerNextPage,
      farmerPrevPage,
      retailerNextPage,
      retailerPrevPage
    } = this.props;
    return (
      <StyledClientResultsBtn>
        <div className="results total">
          <h1>{`${parseInt(resultsPageInfo.results)}`}</h1>
          <h3>Results</h3>
        </div>
        <div className="search-option-container">
          <div className="search-option-btn-cont">
            {/* condition for: do I need a previous button? */}
            {parseInt(resultsPageInfo.number) !== 0 && (
              <button
                onClick={() =>
                  this.props.pageClient(
                    searchType === "farmer" ? farmerPrevPage : retailerPrevPage,
                    searchType
                  )
                }
                className="results-btn prev"
              >
                <i className="far fa-arrow-alt-circle-left" />
              </button>
            )}
            {/* condition for: do I need a next button? */}
            {parseInt(resultsPageInfo.total_pages) >
              parseInt(resultsPageInfo.number) + 1 && (
              <button
                onClick={() =>
                  this.props.pageClient(
                    searchType === "farmer" ? farmerNextPage : retailerNextPage,
                    searchType
                  )
                }
                className="results-btn next"
              >
                <i className="far fa-arrow-alt-circle-right" />
              </button>
            )}
            {(parseInt(resultsPageInfo.total_pages) === 1 ||
              parseInt(resultsPageInfo.total_pages) === 0) && (
              <i className="fas fa-book-open" />
            )}
          </div>
          {this.props.fetchFarmerPageStart || this.props.fetchRetailerPageStart ? 

          <Spinner className="spinner" />:

          parseInt(resultsPageInfo.total_pages) >= 1 ? (
            <div className="results pages">
              <h3>{`Page ${parseInt(resultsPageInfo.number) + 1} of ${
                resultsPageInfo.total_pages
              }`}</h3>
            </div>
          ) : (
            <div className="results pages">
              <h3>{`Page ${parseInt(resultsPageInfo.number)} of ${
                resultsPageInfo.total_pages
              }`}</h3>
            </div>
          )}
        </div>
      </StyledClientResultsBtn>
    );
  }
}

const mapStateToProps = state => {
  return {
    farmerNextPage: state.clientData.farmerNextPage,
    farmerPrevPage: state.clientData.farmerPrevPage,
    retailerNextPage: state.clientData.retailerNextPage,
    retailerPrevPage: state.clientData.retailerPrevPage,
    fetchFarmerPageStart:state.clientData.fetchingFarmerPage,
    fetchRetailerPageStart:state.clientData.fetchingRetailerPage
  };
};

export default connect(
  mapStateToProps,
  { pageClient }
)(ClientResultsBtn);

const StyledClientResultsBtn = styled.div`
  display: flex;
  width: 400px;
  justify-content: flex-start;
  color: white;
  align-items: flex-end;
  margin-bottom: 10px;
  ${media.phone`margin:20px;`}
  ${media.phone`justify-content:space-between;`}

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

  .spinner{

  }
`;
