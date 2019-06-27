import React, { Component } from "react";
import styled from "styled-components";
import { getNextOrgPage } from '../../actions';
import { connect } from "react-redux";

class OrgResultsBtn extends Component{

    render(){
        return(
            <StyledClientResultsBtn>
                {this.props.prevPage && <button onClick={() => this.props.getNextOrgPage(this.props.prevPage)}>Previous</button>}
                <div>
                    {this.props.currentPage && <div>Page {parseInt(this.props.currentPage) + 1} of {this.props.totalPages}</div>}
                    {this.props.numResults && <div>{this.props.numResults} Organizations found</div>}
                </div>
                {this.props.nextPage && <button onClick={() => this.props.getNextOrgPage(this.props.nextPage)}>Next</button>}
            </StyledClientResultsBtn>
        )
    }
}

const mapStateToProps = state =>{
    return{
        nextPage: state.organizationData.nextPage,
        prevPage: state.organizationData.prevPage,
        currentPage: state.organizationData.currentPage,
        totalPages: state.organizationData.totalPages,
        numResults: state.organizationData.numResults
    }
}

export default connect(mapStateToProps, { getNextOrgPage })(OrgResultsBtn);

const StyledClientResultsBtn = styled.div`
    color:white;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`