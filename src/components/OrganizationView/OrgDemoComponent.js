import React, {useEffect} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {getOrganizationById} from '../../actions'

function OrgDemoComponent(props) {
    const {organization} = props;

    

    useEffect(() => {
        // Get Organizations data
        props.getOrganizationById(props.match.params.id);
    }, [])

    return (
        <DemoComponent> 
            <div className="org-info">
            {organization && (<>
                <h2>{organization.name || "Organization Name"}</h2>
                <p>{organization.headquarters || "Headquarters"}</p>
                <p>{organization.beneficiaries || "Beneficiaries"}</p>
            </>)}
            </div>
            
                {organization && (<div className="org-contacts">
                    <h3>Contacts:</h3>
                    {/*
                        name(pin): "Denise"
                        phone(pin): "111-555-1234"
                        email(pin): "email@example.com"
                        position(pin): "Fundraising director"
                    */}
                    {organization && organization.organizationcontacts.map(contact => (
                        <div key={contact.organizationcontactid} className="contact">
                            <p>name: {contact.name}</p>
                            <p>phone: {contact.phone}</p>
                            <p>email: {contact.email}</p>
                            <p>postion: {contact.postion}</p>
                        </div>
                    ))}
                    
                </div>)}
                {organization && (<div className="org-contacts">
                    <h3>Locations:</h3>
                    {/* name(pin): "Denise"
    phone(pin): "111-555-1234"
    email(pin): "email@example.com"
    position(pin): "Fundraising director" */}
                    {organization && organization.organizationlocations.map(location => (
                        <div key={location.organizationlocationid} className="location">
                            {/*
                                address(pin): "wxyz"
                                district(pin): "zzzz"
                                community(pin): "xxxxx"
                                region(pin): "aaaaa"
                                landmark(pin): "abcdefg" 
                            */}
                            <p>address: {location.address}</p>
                            <p>district: {location.district}</p>
                            <p>community: {location.community}</p>
                            <p>region: {location.region}</p>
                            <p>landmark: {location.landmark}</p>
                        </div>
                    ))}
                    
                </div>)}
        </DemoComponent>
    )
}

export default withRouter(connect(state => ({
    // state mapping here
    organization: state.organizationData.organization,
    error: state.organizationData.error,
    gettingOrg: state.organizationData.gettingOrganization
}), {
    // mapping actions here
    getOrganizationById
})(OrgDemoComponent))

const DemoComponent = styled.div`
    color: white;
    display: flex;
    justify-content: space-evenly;
`;