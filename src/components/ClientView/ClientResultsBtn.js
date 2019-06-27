import React, { Component } from "react";
import styled from "styled-components";
import {pageClient} from "../../actions";
import {connect} from "react-redux";

class ClientResultsBtn extends Component{
   

    render(){

        const {searchType,resultsPageInfo,farmerNextPage,farmerPrevPage,retailerNextPage,retailerPrevPage} = this.props;
        return(
            
            <StyledClientResultsBtn>
                {/* condition for: do I need a previous button? */}
                {parseInt(resultsPageInfo.number) !== 0 && 
                    <button 
                        onClick={()=>this.props.pageClient(searchType === 'farmer' ? farmerPrevPage:retailerPrevPage,searchType)} 
                        className="results-btn prev">
                    Previous</button>}
                
                <div className="results pages">{`Page ${parseInt(resultsPageInfo.number) +1} of ${resultsPageInfo.total_pages}`}</div>
                <div className="results total">{`${parseInt(resultsPageInfo.results)} Results`}</div>
                {/* condition for: do I need a next button? */}
                {resultsPageInfo.total_pages > parseInt(resultsPageInfo.number) +1 &&
                    <button onClick={()=>this.props.pageClient(searchType === 'farmer' ? farmerNextPage:retailerNextPage,searchType)} 
                    className="results-btn next">
                    Next</button>
                }
            </StyledClientResultsBtn>
        )
    }
}

const mapStateToProps = state => {

    return {
      farmerNextPage: state.clientData.farmerNextPage,
      farmerPrevPage: state.clientData.farmerPrevPage,
      retailerNextPage:state.clientData.retailerNextPage,
      retailerPrevPage:state.clientData.retailerPrevPage
    };
  };
  
  export default connect(mapStateToProps,{pageClient})(ClientResultsBtn);

const StyledClientResultsBtn = styled.div`
    
    color:white;


`