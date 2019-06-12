import React, { Component } from "react";
import styled, { css } from "styled-components";
import GlobalClientCard from './GlobalClientCard';
import {getFarmerCardData} from '../actions';
import { connect } from "react-redux";

class GlobalCardContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            farmerCardData:[]
        }

    }
    
    componentDidMount(){
        this.props.getFarmerCardData().then(() => this.setState({farmerCardData:this.props.farmerCardData}));
        console.log('global card container mounting')

    }

    render(){
        console.log(this.props)
        return(
            <StyledGlobalCardContainer>
                {/* //card components will go here */}
                {this.props.searchStart &&  <h1>Loading ...</h1>}
            </StyledGlobalCardContainer>
        )
    }
}

const StyledGlobalCardContainer = styled.div`
    border:2px solid aquamarine;
    height:100%;
    width:100%;
  
`
const mapStateToProps = state => {
    console.log('global card container map state to props firing')
    return {
        searchStart: state.farmerSearchData.searchStart,
        data: state.farmerSearchData.data,
        searchSuccess: state.farmerSearchData.searchSuccess,
        searchFailure: state.farmerSearchData.searchFailure,
        error: state.farmerSearchData.searchFailure
    };
};

export default connect(
    mapStateToProps,
    {getFarmerCardData}
    )(GlobalCardContainer);

