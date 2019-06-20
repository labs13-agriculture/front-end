import React, { Component } from "react";
import { connect } from "react-redux";
import CardContainer from "../../styles/CardContainerStyles";
import OrganizationCard from "./OrganizationCard";

class OrganizationCardContainer extends Component {
  render() {
    return (
      <CardContainer>
        {this.props.searchStart && <h2>Loading...</h2>}
        {this.props.searchSuccess && this.props.data.length === 0 ? (
          <p>No Organizations found</p>
        ) : null}
        {this.props.data &&
          this.props.data.map(o => (
            <OrganizationCard
              key={o.id}
              id={o.id}
              name={o.name}
              headquarters={o.headquarters}
              beneficiaries={o.beneficiaries}
              lead={o.lead}
            />
          ))}
        {this.props.gettingAllOrganizations &&
          this.props.data.map(o => (
            <OrganizationCard
              key={o.id}
              name={o.name}
              headquarters={o.headquarters}
              beneficiaries={o.beneficiaries}
              lead={o.lead}
            />
          ))}
      </CardContainer>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    data: state.organizationData.listData,
    error: state.organizationData.error,
    searchStart: state.organizationData.searchStart,
    searchSuccess: state.organizationData.searchSuccess,
    searchFailure: state.organizationData.searchFailure,
    gettingAllOrganizations: state.organizationData.gettingAllOrganizations
  };
};

export default connect(mapStateToProps)(OrganizationCardContainer);
