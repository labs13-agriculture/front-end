import React, { Component } from "react";
import styled from "styled-components";
import {pageClient} from "../../actions";
import {connect} from "react-redux";

class ClientResultsBtn extends Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }

    

    render(){

        const {farmerNextPage,farmerPrevPage,retailerNextPage,retailerPrevPage} = this.props;
        return(
            
            <StyledClientResultsBtn>
                {/* do I need a previous button? */}
                {parseInt(this.props.resultsPageInfo.number) !== 0 && 
                    <button 
                        onClick={()=>this.props.pageClient(this.props.searchType === 'farmer' ? farmerPrevPage:retailerPrevPage,this.props.searchType)} 
                        className="results-btn prev">
                    Previous</button>}
                
                <div className="results-description">{`Page ${parseInt(this.props.resultsPageInfo.number) +1} of ${this.props.resultsPageInfo.total_pages}`}</div>
                {this.props.resultsPageInfo.total_pages > parseInt(this.props.resultsPageInfo.number) +1 &&
                    <button onClick={()=>this.props.pageClient(this.props.searchType === 'farmer' ? farmerNextPage:retailerNextPage,this.props.searchType)} 
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