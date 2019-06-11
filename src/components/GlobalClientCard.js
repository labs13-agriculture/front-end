import React, { Component } from "react";
import styled, { css } from "styled-components";



export default class GlobalClientCard extends Component{
    constructor(props){
        super(props);
        this.state = {}

    }


    render(){
        return(
            //loop through keys of card data in props
            //return h3 element with formatted key value pairs 
            <StyledGlobalClientCard>
                
                {Object.keys(this.props.cardData)
                .map((propKey,index) => 
                <h3 key={index}>{`${propKey}: ${this.props.cardData[propKey]}`}</h3>
                )}
                
              

            </StyledGlobalClientCard>
        )
    }
}

const StyledGlobalClientCard = styled.div`
    height:150px;
    width:150px;
    background:white;
    border:1px dashed purple;
    display:flex;
    flex-direction:column;
    overflow:scroll;

    &:hover{
        cursor:pointer;
    }


`
