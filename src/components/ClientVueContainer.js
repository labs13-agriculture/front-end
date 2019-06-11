import React, { Component } from "react";
import styled, { css } from "styled-components";
import GlobalCardContainer from './GlobalCardContainer';
import PrivateRoute from './PrivateRoute';
import RetailerSearch from './SearchComponents/RetailerSearch';


export default class ClientVueContainer extends Component{
    constructor(props){
        super(props);
        this.state = {}

    }


    render(){
        return(
            <StyledClientVueContainer>
                {/* //search component will go here */}
                <PrivateRoute exact path="/dashboard/retailers" component={RetailerSearch} />
                {/* <GlobalCardContainer/> */}

            </StyledClientVueContainer>
        )
    }
}

const StyledClientVueContainer = styled.div`
    height:100%;
    width: 100%;
    border:2px solid red;
    padding: 20px;



`
