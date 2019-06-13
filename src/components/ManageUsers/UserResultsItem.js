import React, { Component }  from "react";
import styled, { css } from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ButtonDropdown, Button,DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';






export default class UserStatsItem extends Component{
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }
    
      toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }

    render(){
        return(
          <Link to={`/dashboard/manage-users/${this.props.userid}`}>
          <StyledProductStatsMini>
            <h4 className="product-name">{this.props.username.toUpperCase()}</h4>
            <h4 className="product-name">{this.props.creator.toUpperCase()}</h4>
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <Button id="caret" color="primary">Roles</Button>
              <DropdownToggle caret color="primary" />
              <DropdownMenu>
              {this.props.userRoles.map(userRole=><DropdownItem>{userRole.role.name}</DropdownItem>)}
                
              </DropdownMenu>
            </ButtonDropdown>
       
            
          </StyledProductStatsMini>
          </Link>
        )
    }
}


//begin styling
const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) =>
    css`
      @media (max-width: ${sizes[label]}px) {
        ${css(...args)}
      }
    `;

  return acc;
}, {});


//begin styling

const StyledProductStatsMini = styled.div`
  height:55px;
  width:100%;
  display:flex;
  justify-content:space-between;
  padding: 5px 20px 5px;
  align-items:center;
  background:white;
  

  &:hover{
    background:#d3d3d324;
    cursor: pointer;
  }

  .product-name{
    width:200px;
    height:20px;
    overflow:scroll;
  }

  
  

`