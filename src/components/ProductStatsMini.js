import React, { Component }  from "react";
import styled, { css } from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const sizes = {
    desktop: 992,
    tablet: 768,
    phone: 576
};
  
  const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) =>
      css`
        @media (max-width: ${sizes[label]}px) {
          ${css(...args)}
        }
      `;
  
    return acc;
}, {});

const StyledProductStatsMini = styled.div`
    height:40px;
    width:100%;
    display:flex;
    justify-content:space-between;


`



export default class ProductStatsMini extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(

        )
    }
}