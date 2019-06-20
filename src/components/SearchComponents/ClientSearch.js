import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Modal } from "reactstrap";

// Custom Components
import ClientCardContainer from "../ClientView/ClientCardContainer";
import SearchForm from "./SearchForm";
import NewClientForm from "../ClientView/NewClientForm";

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

  render() {
    if (this.props.clientAdded) {
      this.props.clearAdded();
      this.props.history.push(
        `/dashboard/${this.getType()}/${this.props.client.id}`
      );
    }

    return (
      <div>
        <Header>Find a Client</Header>
        <i style={tempi} onClick={this.toggleModal} className="fas fa-plus" />
        <SearchForm submitSearch={this.submitSearch} />
        <ClientCardContainer />
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
    client: state.clientData.client
  };
};

export default connect(
  mapStateToProps,
  { searchClients, addClient, clearAdded }
)(ClientSearch);

const Header = styled.h1`
  text-align: center;
  color: white;
`;

const tempi = {
  color: "white"
};
