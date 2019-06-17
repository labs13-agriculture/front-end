import React, { Component } from "react";
import SearchForm from "./SearchForm";
import { connect } from "react-redux";
import { searchFarmers, addFarmer } from "../../actions/farmerAction"
import FarmerCardContainer from '../FarmerCardContainer';
import styled from 'styled-components';
import NewFarmerForm from '../NewFarmerForm';

class FarmerSearch extends Component{
    constructor(props){
        super(props);
        this.state={
            addingFarmer: false
        }
    }

    toggleAddFarmer = () =>{
        if(this.state.addingFarmer){
            this.setState({
                addingFarmer: false
            })
        }
        else{
            this.setState({
                addingFarmer: true
            })
        }
    }

    submitSearch = query =>{
        this.props.searchFarmers(query);
        this.setState({
            defaultView: false
        })
    }

    submitFarmer = (newFarmer) =>{
        console.log(newFarmer);
        console.log('about to add the farmer!');
        this.props.addFarmer(newFarmer);
    }
    

    render(){
        //console.log(this.props.farmerData);
        return(
            <div>
                <Header>Find a Farmer</Header>
                <SearchForm submitSearch={this.submitSearch}/>
                <FarmerCardContainer />
                {this.state.addingFarmer && <NewFarmerForm submitForm={this.submitFarmer}/>}
                <i style={tempi} onClick={() => this.toggleAddFarmer()} class="fas fa-plus"></i>
            </div>
        );
    }
}


const mapStateToProps = state =>{
    return{
<<<<<<< HEAD
        farmerData: state.farmerData.listData,
        searchStart: state.farmerData.searchStart,
        searchFailure: state.farmerData.searchFailure,
        error: state.farmerData.error,
        searchSuccess: state.farmerData.searchSuccess
=======
        farmerData: state.retailerData.listData,
        searchStart: state.retailerData.searchStart,
        searchFailure: state.retailerData.searchFailure,
        error: state.retailerData.error,
        searchSuccess: state.retailerData.searchSuccess
>>>>>>> f4cfa9c4d99b8d4d9af7f565ed2a5dfe250e673a
    }
}

export default connect(
    mapStateToProps,
    { searchFarmers, addFarmer }
)(FarmerSearch);

const Header = styled.h1`
    text-align: center;
    color: white;
`;

const tempi = {
    color: 'white'
}
