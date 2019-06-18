import React from 'react';
//import styled from 'styled-components';
import {connect} from 'react-redux';

import OrgComponent from './OrgDemoComponent.js'

function OrganizationView(props) {

    return (
    <> 
        {/* Organization View */}
        <OrgComponent />

        {/* Installment Component */}

        {/* Transaction Component */}
    </>
    )
}

export default connect(state => ({
    // state mapping here
}), {
    // mapping actions here
})(OrganizationView)