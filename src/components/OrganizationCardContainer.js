import React, { Component } from 'react';
import { connect } from 'react-redux';
import GlobalClientCard from './GlobalClientCard';
import CardContainer from '../styles/CardContainerStyles';

class OrganizationCardContainer extends Component{

    render(){
        console.log("re-rendering");
        console.log(this.props.searchSuccess);
        return(
            <CardContainer>
                {this.props.searchStart && <h2>Loading...</h2>}
                {this.props.searchFailure ? <p>No Organizations found</p> : null}
                {this.props.searchSuccess && this.props.data.map(o => <GlobalClientCard key={o.id} contact={Object.keys(o).find(w=>w==='organizationcontacts').replace('contacts','')} id={o.id} name={o.name} location={o.organizationlocations}/>)}
            </CardContainer>
        )
    }
}

const mapStateToProps = state =>{
    console.log("Updating state")
    console.log(state);
    return{
        data: state.organizationData.data,
        error: state.organizationData.error,
        searchStart: state.organizationData.searchStart,
        searchSuccess: state.organizationData.searchSuccess,
        searchFailure: state.organizationData.searchFailure
    }
}

export default connect(mapStateToProps)(OrganizationCardContainer);