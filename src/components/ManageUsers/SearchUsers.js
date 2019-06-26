import React, { Component } from "react";
import { UserResultsList } from "../ManageUsers/UserResultsList";
import { connect } from "react-redux";
import { userSearchResults } from "../../actions";
import styled from "styled-components";
import AddUser from "./AddUser";
import { Modal, Button, FormGroup } from "reactstrap";
import { media } from "../../styles/searchStyles";

class SearchUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      searchQuery: "",
      toggleAddModal: false
    };
  }

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
            <FormGroup>
              <Button
                style={{ width: "100px", marginTop: "1%" }}
                color="warning"
                onClick={this.toggleAddModal}
              >
                Cancel
              </Button>
            </FormGroup>
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
    userSearchStart: state.userReducer.userSearchStart
  };
};

export default connect(
  mapStateToProps,
  { userSearchResults }
)(SearchUsers);

//begin styling

const StyledSearchUsers = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
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
      caret-color: #40e0d0;
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
    border: 2px solid rgb(126, 121, 147);
    &:hover {
    background: rgba(128, 123, 151, 0.08);
  }
  }
  
`;
