import React, { Component } from "react";
import styled, { css } from "styled-components";



export default class GlobalClientCard extends Component{
    constructor(props){
        super(props);
        this.state = {}

    }


    render(){
        console.log(this.props);
        return(
            //loop through keys of card data in props
            //return h3 element with formatted key value pairs 
            <StyledGlobalClientCard>    
                <h3>{this.props.name}</h3>
                {!Array.isArray(this.props.location) ? <p>{this.props.location.address}</p> : this.props.location.length == 1 ? <p>{this.props.location[0].address}</p> : <p>{this.props.location.length} locations</p>}
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
