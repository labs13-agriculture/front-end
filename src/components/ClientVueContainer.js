import React, { Component } from "react";
import styled, { css } from "styled-components";
import GlobalCardContainer from './GlobalCardContainer';


export default class ClientVueContainer extends Component{
    constructor(props){
        super(props);
        this.state = {}

    }


    render(){
        return(
            <StyledClientVueContainer>
                {/* //search component will go here */}
                <GlobalCardContainer/>

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
