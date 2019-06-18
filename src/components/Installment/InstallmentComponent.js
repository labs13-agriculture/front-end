import React, {useEffect} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import Header from './InstallmentHeader';


import { getInstallmentData } from "../../actions";

// import FarmerViewInstallments from "./FarmerViewComponents/FarmerViewInstallments";
// import FarmerInstallmentForm from "./FarmerViewComponents/FarmerInstallmentForm";
// import FarmerEditInstallment from "./FarmerViewComponents/FarmerEditInstallment";

function InstallmentComponent(props) {

    useEffect(() => {
        // This acts as onMount
        props.getInstallmentData();
    }, [])

    return (
        <InstallmentContainer>
            {/*  Installments Header*/}
            <Header />
            {/* Installments Container */}
            <div className="installmentitem-container">

            </div>
            {/* Installments List */}
        </InstallmentContainer>
    )
}

export default connect(state => ({
    // Map State to Props
    installments: state.installments.installmentList
}), {
    // Actions
    getInstallmentData
})(InstallmentComponent);

const InstallmentContainer = styled.div`
    width: 100%;
    border-radius: 3px;
    background: darkgray;

    .installmentitem-container {
        width: 100%;
    }
`;