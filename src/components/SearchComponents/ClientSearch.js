import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Modal } from "reactstrap";

// Custom Components
import ClientCardContainer from "../ClientView/ClientCardContainer";
import SearchForm from "./SearchForm";
import NewFarmerForm from "../ClientView/NewClientForm";

// Actions
import {
  searchFarmers,
  addFarmer,
  clearAdded
} from "../../actions/farmerAction";

class ClientSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  toggleModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  submitSearch = query => {
    this.props.searchFarmers(query);
    this.setState({
      defaultView: false
    });
  };

  submitFarmer = newFarmer => {
    console.log(newFarmer);
    console.log("about to add the farmer!");
    this.props.addFarmer(newFarmer);
  };

  render() {
    if (this.props.farmerAdded) {
      this.props.clearAdded();
      this.props.history.push(`/dashboard/farmer/${this.props.farmer.id}`);
    }

    return (
      <div>
        <StyledSearchToolContainer>
          <StyledHeader>
          <Header>Find Farmer</Header>
          <button onClick={this.toggleModal}>ADD</button>
          </StyledHeader>
         
          
          <SearchForm submitSearch={this.submitSearch} />
          
        </StyledSearchToolContainer>

        <ClientCardContainer />
        <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
          <NewFarmerForm
            submitForm={this.submitFarmer}
            toggleModal={this.toggleModal}
          />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    farmerData: state.farmerData.listData,
    searchStart: state.farmerData.searchStart,
    searchFailure: state.farmerData.searchFailure,
    error: state.farmerData.error,
    searchSuccess: state.farmerData.searchSuccess,
    farmerAdded: state.farmerData.farmerAdded,
    farmerDeleted: state.farmerData.farmerDeleted,
    farmer: state.farmerData.farmer
  };
};

export default connect(
  mapStateToProps,
  { searchFarmers, addFarmer, clearAdded }
)(ClientSearch);

const Header = styled.h1`
  text-align: center;
  color: white;
  font-family: "Josefin Sans",sans-serif;
  margin: 26px 0px 20px 0px;
  font-weight: 800;
  font-size: 30px;
`;

const tempi = {
  color: "white"
};

const StyledSearchToolContainer = styled.div`

  display:flex;
  align-items:flex-start;
  flex-direction:column;

`
const StyledHeader = styled.div`
  display:flex;
  justify-content:space-between;
  width:100%;
  button{
    padding: 10px 40px;

    background: none;

    font-size: 1.5rem;

    margin: auto 0px;

    border: none;
    


    

    color: white;

    font-family: "Josefin Sans",sans-serif;
    border:2px solid rgb(126,121,147);

    &:hover{
      background:rgba(128, 123, 151, 0.08);
     
    }
  }
`
