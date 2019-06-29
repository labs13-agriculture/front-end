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
import { theme } from "../../config";

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
              <DropdownItem key={userRole.role.name}>
                {userRole.role.name}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </ButtonDropdown>
        <button
          className="pencil-btn"
          id="invisible"
          onClick={this.toggleUpdateModal}
          color="secondary"
        >
          <i className="fas fa-pencil-alt" />
        </button>
        <Modal
          isOpen={this.state.toggleUpdateModal}
          toggle={this.toggleUpdateModal}
        >
          <UserDetails
            username={this.props.username}
            userRoles={this.props.userRoles}
            userid={this.props.userid}
            toggleUpdateModal={this.toggleUpdateModal}
          />
        </Modal>
      </StyledProductStatsMini>
    );
  }
}

//begin styling

const StyledProductStatsMini = styled.div`
  height: 55px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5px 20px 5px;
  align-items: center;
  background: white;
  ${'' /* margin: 10px 0px 0px 0px; */}
  border-bottom:1px solid ${theme.inputblack};
  background: ${theme.manageUserItemBackground};

  /* 0 13px 27px -5px rgba(14, 14, 14, 0),
    0 2px 5px -4px rgba(154, 154, 154, 0.18),
    0 10px 16px 1px rgba(31, 31, 31, 0.12); */

  color: white;

  font-family: ${theme.experimentalFont};
  font-size:1.4rem;
  transition: all 0.15s ease;

  &:hover{
    
    transform:scale(1.001,1.001);
    background:${theme.manageUserItemHover};
    box-shadow: 0px 0px 10px rgba(0,0,0,.5);
    
    

    .pencil-btn{
      
    background-color: Transparent;
    border-radius:50%;
    border:none;
    visibility:visible;
    z-index:2;}
    

      

    .pencil-btn {
      background-color: Transparent;
      border: none;
      visibility: visible;
      z-index: 2;

      
    }
  }

  .pencil-btn {
    border: none;
    visibility: hidden;
  }

  .personnel {
    width: 280px;
    
    text-overflow: ellipse;
    
    margin:0xp;

  }
  h4.personnel{
    margin:0px;
  }

  .personnel.creator {
    ${media.phone`display:none;`}
  }

  .fas.fa-pencil-alt {
    color: lightgray;
  }
`;
