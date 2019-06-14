import React, {useEffect} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {getOrganizationById} from '../../actions'

function OrgDemoComponent(props) {

    useEffect(() => {
        // Get Organizations data
        props.getOrganizationById(props.match.params.id);
    }, [])

    return (
    <DemoComponent> 
        {props.organization ? "We have an Organization" : "We do not have an Organization" }
    </DemoComponent>
    )
}

export default withRouter(connect(state => ({
    // state mapping here
    organization: state.organization.organization,
    error: state.organization.error,
    gettingOrg: state.organization.gettingOrganization
}), {
    // mapping actions here
    getOrganizationById
})(OrgDemoComponent))

const DemoComponent = styled.div`
    color: white;
`;