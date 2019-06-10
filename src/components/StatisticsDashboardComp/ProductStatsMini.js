import React, { Component }  from "react";
import styled, { css } from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Example from './ProductStatsMiniChart';






export default class ProductStatsMini extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
          <StyledProductStatsMini>
            <h4 className="product-name">{this.props.product.toUpperCase()}</h4>
            <Example/>
           
            <h4 className="product-price">{this.props.avgprice}</h4>
          </StyledProductStatsMini>
        )
    }
}


//begin styling
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


//begin styling

const StyledProductStatsMini = styled.div`
  height:55px;
  width:100%;
  display:flex;
  justify-content:space-between;
  padding: 5px 20px 5px;
  align-items:center;
  background:white;

  &:hover{
    background:#d3d3d324;
    cursor: pointer;
  }

  .recharts-surface{
    &:hover{
    
    cursor: pointer;
  }

  

  

  .recharts-dot.recharts-line-dot{
    display:none;
  }
  .recharts-surface {

  border-bottom: 1px dotted lightgray;
  }

  

} 
.recharts-wrapper {
  border-bottom: 1px dotted lightgray;
  }

`