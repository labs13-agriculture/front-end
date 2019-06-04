import React, { Component }  from "react";
import styled, { css } from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProductStatsMini from './ProductStatsMini';
import AgeHistogram from './AgeHistogram';
import GenderPieChart from './GenderPieChart';

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

const StyledProductDescriptives = styled.div`
    height:600px;
    width:340px;
    display:flex;
    flex-direction:column;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
    margin:60px 20px 60px 0px;
    background: #615bdb;
    font-family:'Mandali', sans-serif;
    padding:20px;
    color:white;
    border: 1px solid #615bdb;
    
    h3{
        font-family:'Mandali', sans-serif;
        
        margin: 0px;
        font-size: 18px;
    }

    .jumbo-statistic{
        font-size: 55px;
        margin-top: 5px;

           
    }

    .chart-description{
        margin-top:30px;

        h3{
            padding-bottom:5px;
            border-bottom:1px solid  #ffffff73;
            font-size:15px;
            margin-bottom:15px;
        }
    }

    .recharts-text.recharts-cartesian-axis-tick-value{
        font-family:'Mandali', sans-serif;
        font-size:10px;
    }

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


export default class ProductDescriptives extends Component{
    constructor(props){
        super(props);
        this.state = {
            products:[]

        }
    }

    componentDidMount(){
        this.setState({products:[
            {product:"corn",
            avgprice:14.99,

            },
            {product:"seed",
            avgprice:14.99,

            },
            {product:"root",
            avgprice:14.99,

            },
            {product:"yam",
            avgprice:14.99,

            },
            {product:"turnip",
            avgprice:14.99,

            },
            {product:"carrot",
            avgprice:14.99,

            },
            {product:"raddish",
            avgprice:14.99,

            },
            {product:"potato",
            avgprice:14.99,

            },{product:"cabbage",
            avgprice:14.99,

            },
            {product:"random",
            avgprice:14.99,

            },
            {product:"random",
            avgprice:14.99,

            },
            {product:"ranrom",
            avgprice:14.99,

            }
        ]})
    }

    render(){
        
        return(
           
            <StyledProductDescriptives>
                
                    
                    <div className="jumbo-stat-container">
                        <h3 className="jumbo-stat-description">Total Farmers</h3>
                        <h3 className="jumbo-statistic">50</h3>
                    </div>
                    <div className="chart-description age">
                        <h3>Farmers By Age</h3>
                        <AgeHistogram/>
                    </div>
                    <div className="chart-description gender">
                        <h3>Farmers By Gender</h3>
                        <GenderPieChart/>
                    </div>
               
                
            </StyledProductDescriptives>
            
        )
    }
}