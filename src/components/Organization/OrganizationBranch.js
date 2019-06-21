import React, { Component } from "react"; // { useState }
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import { Modal } from "reactstrap";
import BranchHeader from '../Branch/BranchHeader';
import { getBranches } from '../../actions';
import Branch from '../Branch/Branch';
// import { theme } from "../../config";
// import { StyledTd } from "../../styles/InstallmentStyles";

class OrganizationBranch extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getBranches(this.props.id);
  }

  render(){
    return (
      <BranchContainer>
        <BranchHeader id={this.props.id}/>
        <StyledTable>
          <tbody>
            {this.props.data.length > 0 && this.props.data.map(branch => {
            return(<Branch branch={branch} key={branch.branch_id}/>);
            })}
          </tbody>
        </StyledTable>
      </BranchContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    data:state.branchData.branchData
  };
};

const connected = connect(
  mapStateToProps,
  { getBranches }
)(OrganizationBranch);

export default withRouter(connected);


const StyledTable = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  margin: 5%;
  width: 90%;
`;

const BranchContainer = styled.div`
  width: 100%;
  border-radius: 3px;
`;
