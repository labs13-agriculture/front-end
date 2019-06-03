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

const StyledProductStatsVue = styled.div`
    height:600px;
    width:250px;
    display:flex;
    flex-direction:column;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
    margin:60px;

`
const StyledMiniNav = styled.div`
    height:40px;
    width:100%


`

const StyledProductStatsMiniContainer = styled.div`
    height:100%;
    width:100%;
    overflow:scroll;


`

export default class ProductStatsVue extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        const mockuplist = [
            {product:"corn",
            avgprice:14.99,

            },
            {

},
        ]
        return(
            <StyledProductStatsVue>
                <StyledMiniNav>
                    <h1>Hello Stats</h1>
                </StyledMiniNav>
            </StyledProductStatsVue>
        )
    }
}