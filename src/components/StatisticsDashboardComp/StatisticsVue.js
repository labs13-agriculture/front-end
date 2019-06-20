import React, { Component }  from "react";
import styled from "styled-components";
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


const StyledStatisticsVue = styled.div`
  height:100%;
  width:75%;
  display:flex;
  justify-content:flex-end;
  align-items:center;


`