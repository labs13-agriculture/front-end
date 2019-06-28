import React, { Component } from "react";
import { UserResultsList } from "../ManageUsers/UserResultsList";
import { connect } from "react-redux";
import { userSearchResults, clearUserAlerts } from "../../actions";
import styled from "styled-components";
import AddUser from "./AddUser";
import { Modal, Button, FormGroup, Alert } from "reactstrap";
import { media } from "../../styles/searchStyles";
import {theme} from "../../config";

class SearchUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      searchQuery: "",
      toggleAddModal: false
    };
  }

  onDismiss = () => {
    this.props.clearUserAlerts();
  };

  focusCursor() {
    const field = document.querySelector(".search-input");

    field.focus();
  }

  toggleAddModal = () =>
    this.setState({ toggleAddModal: !this.state.toggleAddModal });

  handleChanges = e => {
    e.preventDefault();
    this.setState({ searchQuery: e.target.value });
  };

  componentDidMount() {
    this.focusCursor();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.props.userSearchResults(this.state.searchQuery);
    }
  }

  render() {
    return (
      <StyledSearchUsers>
        <StyledSearchBar>
          <Alert
            color="success"
            isOpen={this.props.addSuccess}
            toggle={this.onDismiss}
          >
            Add Success
          </Alert>
          <Alert
            color="success"
            isOpen={this.props.updateSuccess}
            toggle={this.onDismiss}
          >
            Update Success
          </Alert>
          <Alert
            color="success"
            isOpen={this.props.deleteSuccess}
            toggle={this.onDismiss}
          >
            Delete Success
          </Alert>
          <Alert
            style={{
              marginBottom: "0",
              background: "none",
              color: "palevioletred",
              border: "none"
            }}
            color="danger"
            isOpen={this.props.addFailure}
            toggle={this.onDismiss}
          >
            Failed To Add
          </Alert>
          <Alert
            style={{
              marginBottom: "0",
              background: "none",
              color: "palevioletred",
              border: "none"
            }}
            color="danger"
            isOpen={this.props.updateFailure}
            toggle={this.onDismiss}
          >
            Failed To Update
          </Alert>
          <Alert
            style={{
              marginBottom: "0",
              background: "none",
              color: "palevioletred",
              border: "none"
            }}
            color="danger"
            isOpen={this.props.deleteFailure}
            toggle={this.onDismiss}
          >
            Failed To Delete
          </Alert>
          <div className="search-tools-cont">
            <input
              placeholder="Search Username..."
              onChange={this.handleChanges}
              className="search-input"
              value={this.state.searchQuery}
            />
            {/* <button onClick={()=>{this.props.userSearchResults(this.state.searchQuery)}} className="search-button">Search</button> */}
          </div>
          <div className="new-user-tools-cont">
            <button onClick={this.toggleAddModal} className="search-button">
              ADD NEW
            </button>
          </div>
          <Modal
            isOpen={this.state.toggleAddModal}
            toggle={this.toggleAddModal}
          >
            <AddUser
              userid={this.props.userid}
              toggleModal={this.toggleAddModal}
            />
          </Modal>
        </StyledSearchBar>
        <UserResultsList
          returnedUserData={this.props.returnedUserData}
          userSearchSuccess={this.props.userSearchSuccess}
          userSearchStart={this.props.userSearchStart}
        />
      </StyledSearchUsers>
    );
  }
}

const mapStateToProps = state => {
  return {
    returnedUserData: state.userReducer.data,
    userSearchSuccess: state.userReducer.userSearchSuccess,
    userSearchFailure: state.userReducer.userSearchFailure,
    userSearchStart: state.userReducer.userSearchStart,
    updateSuccess: state.userReducer.updateSystemUserSuccess,
    updateFailure: state.userReducer.updateSystemUserFailure,
    addSuccess: state.userReducer.addSystemUserSuccess,
    addFailure: state.userReducer.addSystemUserFailure,
    deleteSuccess: state.userReducer.deleteSystemUserSuccess,
    deleteFailure: state.userReducer.deleteSystemUserFailure
  };
};

export default connect(
  mapStateToProps,
  { userSearchResults, clearUserAlerts }
)(SearchUsers);

//begin styling

const StyledSearchUsers = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  .modal{
    background: ${theme.background_light}
  }
`;

const StyledSearchBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .search-tools-cont {
    width: 100%;

    .search-input {
      width: 100%;
      height: 70px;
      margin-bottom: 40px;
      background: #00000047;
      border: none;
      border-radius: 0px;
      font-size: 30px;
      font-weight: 600;
      font-family: "Josefin Sans", sans-serif;
      color: white;
      caret-color: ${theme.activeblue};
      padding: 16px 0px 10px 40px;

      ::placeholder {
        color: gray;
        size: 30px;
      }
    }
  }
  .new-user-tools-cont {
    height: 100%;
    padding: 20px;
    ${media.phone`display:flex;`}
    ${media.phone`justify-content:flex-end;`}
  }
  .search-button {
    padding: 10px 40px;
    background: none;
    font-size: 1.5rem;
    margin: auto 0px;
    border: none;
    color: white;
    font-family: "Josefin Sans", sans-serif;
    border: 2px solid ${theme.searchAddBtnBorder};
    &:hover {
    background: ${theme.searchAddBtnHover};
  }

  .alert {
    margin-bottom: 0;
    background: none;
    border: none;

    .alert-danger {
      color: palevioletred;
    }

    .alert-success {
      color: lightgreen;
    }
  }
`;
