import React, { Component } from "react";
import { connect } from "react-redux";
import CardContainer from "../../styles/CardContainerStyles";
import OrganizationCard from "./OrganizationCard";
import { Spinner } from "reactstrap";
import { getNextOrgPage } from '../../actions';

class OrganizationCardContainer extends Component {
  render() {
    return (
      <CardContainer>
        {this.props.searchStart && <Spinner className="spinner" />}
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
          {/*Can't conditionally check for pageLinks.next without making sure there is a pageLinks */}
        {(this.props.pageLinks && this.props.pageLinks.next) && <button onClick={() => this.props.getNextOrgPage(this.props.pageLinks.next)}>View More</button>}
        {this.props.gettingNext && <Spinner className="spinner" />}
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
    pageLinks: state.organizationData.searchHeaders,
    gettingNext: state.organizationData.gettingNextPage
  };
};

export default connect(mapStateToProps, {getNextOrgPage})(OrganizationCardContainer);
