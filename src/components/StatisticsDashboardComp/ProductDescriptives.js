import React, { Component }  from "react";
import styled  from "styled-components";
import AgeHistogram from './AgeHistogram';
import GenderPieChart from './GenderPieChart';




export default class ProductDescriptives extends Component{
    constructor(props){
        super(props);
        this.state = {
            products:[]

        }
    }

    componentDidMount(){

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
