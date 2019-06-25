import React, { Component } from "react";
import styled from "styled-components";
import {
  ButtonDropdown,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Modal } from "reactstrap";
import UserDetails from "./UserDetails";
import { media } from "../../styles/searchStyles";

export default class UserStatsItem extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,

      toggleUpdateModal: false
    };
  }

  toggleUpdateModal = () =>
    this.setState({ toggleUpdateModal: !this.state.toggleUpdateModal });

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
      // toggleUpdateModal:false
    });
  }

  render() {
    return (
      // <Link to={`/dashboard/manage-users/${this.props.userid}`}>

      <StyledProductStatsMini className="user-search-item">
        <h4 className="personnel username">
          {this.props.username.toUpperCase()}
        </h4>
        <h4 className="personnel creator">
          {this.props.creator.toUpperCase()}
        </h4>
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <Button id="caret" color="primary">
            Roles
          </Button>
          <DropdownToggle caret color="primary" />
          <DropdownMenu>
            {this.props.userRoles.map(userRole => (
              <DropdownItem>{userRole.role.name}</DropdownItem>
            ))}
          </DropdownMenu>
        </ButtonDropdown>
        <button
          className="pencil-btn"
          id="invisible"
          onClick={this.toggleUpdateModal}
          color="secondary"
        >
          <i class="fas fa-pencil-alt" />
        </button>
        <Modal
          isOpen={this.state.toggleUpdateModal}
          toggle={this.toggleUpdateModal}
        >
          <UserDetails
            username={this.props.username}
            userRoles={this.props.userRoles}
            userid={this.props.userid}
          />
          <Button
            style={{ width: "100px", marginBottom: "1%" }}
            onClick={this.toggleUpdateModal}
            color="warning"
          >
            CANCEL
          </Button>
        </Modal>
      </StyledProductStatsMini>
    );
  }
}

//begin styling

const StyledProductStatsMini = styled.div`
  height:55px;
  width:100%;
  display:flex;
  justify-content:space-between;
  padding: 5px 20px 5px;
  align-items:center;
  background:white;
  margin: 10px 0px 0px 0px;
  background: rgba(60, 57, 75, 0.47);

  0 13px 27px -5px rgba(14, 14, 14, 0),0 2px 5px -4px rgba(154, 154, 154, 0.18),0 10px 16px 1px rgba(31, 31, 31, 0.12);

  color: white;

  font-family: "Josefin Sans", sans-serif;

  font-weight: 800;
  transition: all .15s ease;

  &:hover{
    ${"" /* background:lightgray; */}
    cursor: pointer;
    background:rgb(65, 62, 81);

    .pencil-btn{
    background-color: Transparent;
    border:none;
    visibility:visible;
    z-index:2;}
    

      

  }

  .pencil-btn{
  
    border:none;
    visibility:hidden;
  }

  .personnel{
    width:200px;
    height:20px;
    text-overflow: ellipse;
    font-weight: 800;


  }

  .personnel.creator{
    ${media.phone`display:none;`}
  }

  

  .fas.fa-pencil-alt{
      color:lightgray;
      }


  
    
  

  
  


  
  

`;
