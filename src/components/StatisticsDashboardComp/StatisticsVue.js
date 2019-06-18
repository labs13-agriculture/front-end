import React, { Component }  from "react";
import styled, { css } from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProductStatsVue from './ProductStatsVue';
import ProductDescriptives from './ProductDescriptives';
import ProductMultiVue from './ProductMultiVue';






export default class StatisticsVue extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            
            <StyledStatisticsVue>
              <ProductMultiVue/>
              <ProductDescriptives/>
                  <ProductStatsVue/>
                
            </StyledStatisticsVue>
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

const StyledStatisticsVue = styled.div`
  height:100%;
  width:75%;
  display:flex;
  justify-content:flex-end;
  align-items:center;


`