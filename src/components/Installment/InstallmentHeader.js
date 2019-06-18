import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {Button} from 'reactstrap';

function InstallmentHeader(props) {
    return (
        <HeaderContainer>
            <h3>Installments</h3>
            <Button>New</Button>
        </HeaderContainer>
    )
}

export default connect(null, {
    // Actions
})(InstallmentHeader);

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
`;