import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getOrganizationById } from "../../actions";

class OrganizationViewDemographics extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.getOrganizationById(this.props.id);
  }
  render() {
    console.log("SOME PROPSSSS", this.props);
    return (
      <StyledDiv>
        <h1>{this.props.id}</h1>
        <h1>
          {this.props.organizationDemoData &&
            this.props.organizationDemoData.name}
        </h1>
        <h1>
          {this.props.organizationDemoData &&
            this.props.organizationDemoData.headquarters}
        </h1>
        <h1>
          {this.props.organizationDemoData &&
            this.props.organizationDemoData.beneficiaries}
        </h1>
      </StyledDiv>
    );
  }
}

const mapStateToProps = state => {
  return {
    organizationDemoData: state.organizationData.organization,
    organizationDemoError: state.organizationData.error,
    organizationDemoDataStart: state.organizationData.getStart
  };
};

export default connect(
  mapStateToProps,
  { getOrganizationById }
)(OrganizationViewDemographics);

const StyledDiv = styled.div`
  padding: 1%;
  background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
  border-radius: 3px;
  display: flex;
  flex-direction: column;

  .demoWrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    p {
      line-height: 1;
    }
  }
`;