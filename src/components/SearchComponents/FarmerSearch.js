import React, { Component } from "react";
import { connect } from "react-redux";
import styled from 'styled-components';
import {Modal} from 'reactstrap';

// Custom Components
import FarmerCardContainer from '../FarmerCardContainer';
import SearchForm from "./SearchForm";
import NewFarmerForm from '../NewFarmerForm';

// Actions
import { searchFarmers, addFarmer } from "../../actions/farmerAction"

class FarmerSearch extends Component{
    constructor(props){
        super(props);
        this.state={
            modal: false
        }
    }

    toggleModal = () =>{
        this.setState({modal: !this.state.modal})
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
                <i style={tempi} onClick={this.toggleModal} class="fas fa-plus"></i>
                <SearchForm submitSearch={this.submitSearch}/>
                <FarmerCardContainer />
                <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
                    <NewFarmerForm submitForm={this.submitFarmer}/>
                </Modal>
            </div>
        );
    }
}


const mapStateToProps = state =>{
    return{
        farmerData: state.farmerData.listData,
        searchStart: state.farmerData.searchStart,
        searchFailure: state.farmerData.searchFailure,
        error: state.farmerData.error,
        searchSuccess: state.farmerData.searchSuccess
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
