import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Modal } from "reactstrap";

// Custom Components
import ClientCardContainer from "../ClientView/ClientCardContainer";
import SearchForm from "./SearchForm";
import NewClientForm from "../ClientView/NewClientForm";
import ClientResultsBtn from "../ClientView/ClientResultsBtn";

// Actions
import { searchClients, addClient, clearAdded } from "../../actions";

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

  getType() {
    let type = this.props.match.path.split("/")[2];
    if (type !== "farmer" && type !== "retailer") {
      throw new Error("WE ARE NOT GRABBING A VALID TYPE FROM URL");
    }
    return type;
  }

  submitSearch = query => {
    this.props.searchClients(query, this.getType());
    this.setState({
      defaultView: false
    });
  };

  submitClient = newClient => {
    this.props.addClient(newClient, this.getType());
  };

  capitalize = string => {
    return string.slice(0, 1).toUpperCase() + string.slice(1, string.length);
  };

  render() {
    if (this.props.clientAdded) {
      this.props.clearAdded();
      this.props.history.push(
        `/dashboard/${this.getType()}/${this.props.client.id}`
      );
    }

    return (
      <div>
        <StyledSearchToolContainer>
          <StyledHeader>
            <Header>Find {this.capitalize(this.getType())}</Header>
            <button onClick={this.toggleModal}>ADD</button>
          </StyledHeader>

          <SearchForm submitSearch={this.submitSearch} />
        </StyledSearchToolContainer>
       
        {this.getType() === "farmer" && this.props.farmerSearchSuccess &&
        
            <ClientResultsBtn searchType={this.getType()} resultsPageInfo={this.props.farmerPageData}/>

        }
        {this.getType() === "retailer" && this.props.retailerSearchSuccess &&
            <ClientResultsBtn searchType={this.getType()} resultsPageInfo={this.props.retailerPageData}/>
            
        }


        <ClientCardContainer type={this.getType()} />
        <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
          <NewClientForm
            submitForm={this.submitClient}
            toggleModal={this.toggleModal}
            type={this.getType()}
          />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    clientData: state.clientData.listData,
    searchStart: state.clientData.searchStart,
    searchFailure: state.clientData.searchFailure,
    error: state.clientData.error,
    searchSuccess: state.clientData.searchSuccess,
    clientAdded: state.clientData.clientAdded,
    clientDeleted: state.clientData.clientDeleted,
    client: state.clientData.client,
    farmerPageData:state.clientData.farmerHeaders,
    retailerPageData:state.clientData.retailerHeaders,
    farmerSearchSuccess:state.clientData.farmerSearchSuccess,
    retailerSearchSuccess:state.clientData.retailerSearchSuccess
  };
};

export default connect(
  mapStateToProps,
  { searchClients, addClient, clearAdded }
)(ClientSearch);

const Header = styled.h1`
  text-align: center;
  color: white;
  font-family: "Josefin Sans", sans-serif;
  margin: 26px 0px 20px 0px;
  font-weight: 800;
  font-size: 30px;
`;

const StyledSearchToolContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;
const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  button {
    padding: 10px 40px;
    opacity:.8;
    background: none;

    font-size: 1.5rem;

    margin: auto 0px;

    border: none;

    color: white;

    font-family: "Josefin Sans", sans-serif;
    border: 2px solid rgb(126, 121, 147);

    &:hover {
      &:hover {
    background: rgba(128, 123, 151, 0.08);
  }
     
    }
  }
`;
