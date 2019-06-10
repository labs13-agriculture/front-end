import React, { Component}  from "react";
import { NavLink } from 'react-router-dom'
import styled, { css } from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SalesOverTime from './SalesOverTime';
import MultiGraphNav from './MultiGraphNav';


export default class ProductMultiVue extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
   

   

    render(){
        return(
            <StyledProductMultiVue>
                <div className="multivue-nav">
                    <NavLink className="navlink"><div className="menu-link"><h4>Recoll-Rate</h4><h3 className="jumbo-stat">40%</h3></div></NavLink>
                    <NavLink className="navlink"><div className="menu-link"><h4>Crop Yield</h4><h3 className="jumbo-stat">40%</h3></div></NavLink>
                    <NavLink className="navlink"><div className="menu-link"><h4>Revenue</h4><h3 className="jumbo-stat">4K</h3></div></NavLink>
                    <NavLink className="navlink"><div className="menu-link"><h4>Credit Sales</h4><h3 className="jumbo-stat">4%</h3></div></NavLink>
                    <NavLink className="navlink"><div className="menu-link"><h4>Cash Sales</h4><h3 className="jumbo-stat">96%</h3></div></NavLink>
                    
                </div>
                <MultiGraphNav/>
                <SalesOverTime className="sales-over-time-graph"/>
            </StyledProductMultiVue>
        )
    }
}

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


//begin stylig 

const StyledProductMultiVue = styled.div`
    height:600px;
    width:650px;
    display:flex;
    margin-right:20px;
    justify-content:space-between;
    align-items:center;
    flex-direction:column;
    font-family:'Mandali', sans-serif;
    border:1px solid #d3d3d37a;
    
    

    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);

    .multivue-nav{
        display:flex;
        width:100%;
        align-items:flex-start;
        justify-content:space-between;
        height:100px;
       
        /* border-bottom:2px solid #d3d3d37a; */
        .navlink{
            
            text-decoration: none;
            text-decoration: none;
            color:lightgray;
        }

        /* .navlink.active{
                border-top:4px solid #362cff;
        } */

        .menu-link{
            display:flex;
            /* height:80px; */
            flex-direction:column;
            text-align: left;
            box-sizing: border-box;
            padding: 20px 25px 25px 20px;
            &:hover{
                border-top:4px solid #362cff;
                padding-top:16px;  
                color:black;
            }
            h4{
                font-size:16px;
                font-weight:500;
            
            }

            .jumbo-stat{
                text-align:left;
                margin-top:12px;
                font-size:30px;
            }
            
           
            
        }
        
        
    }

    

    .fas.fa-flag{
        margin-right:5px;
    }

    /* .recharts-cartesian-axis-ticks {    
    font-size: .7rem;
    font-family: Roboto, sans-serif;
    } */

    .recharts-layer.recharts-cartesian-axis-tick{
        font-size:1.1rem;
    }

    .recharts-curve.recharts-line-curve{
        stroke-width:3;
    }

    .recharts-layer.recharts-cartesian-axis.recharts-yAxis.yAxis line{
        display:none;
    }

    .recharts-layer.recharts-cartesian-axis.recharts-xAxis.xAxis line{
        display:none;
    }

`
