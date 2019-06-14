import React, { Component } from "react";
import SearchForm from "./SearchForm";
import { connect } from "react-redux";
import { FarmerSearchResults as SearchAction } from "../../actions/FarmerSearch"
import FarmerCardContainer from '../FarmerCardContainer';
import styled from 'styled-components';
import NewFarmerForm from '../NewFarmerForm';
import { addFarmer } from '../../actions/farmerPost';


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
        this.props.SearchAction(query);
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
        farmerData: state.farmerSearchData.data,
        searchStart: state.farmerSearchData.searchStart,
        searchFailure: state.farmerSearchData.searchFailure,
        error: state.farmerSearchData.error,
        searchSuccess: state.farmerSearchData.searchSuccess
    }
}

export default connect(
    mapStateToProps,
    { SearchAction, addFarmer }
)(FarmerSearch);

const Header = styled.h1`
    text-align: center;
    color: white;
`;

const tempi = {
    color: 'white'
}
