import React, { Component } from "react";
import styled, { css } from "styled-components";



export default class GlobalClientCard extends Component{
    constructor(props){
        super(props);
        this.state = {}

    }


    render(){
        return(
            <StyledGlobalClientCard>
                <h1>{this.props.name}</h1>
                {/* //client preview details will go here */}
              

            </StyledGlobalClientCard>
        )
    }
}

const StyledGlobalClientCard = styled.div`
    height:150px;
    width:150px;
    background:white;
    border:1px dashed purple;


`
