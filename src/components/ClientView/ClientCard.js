import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {theme} from "../../config";
import { Modal, Button, FormGroup, Alert } from "reactstrap";

export default class GlobalClientCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      expanded:false,
      toggleAddModal: false,
      xcoord:'',
      ycoord:''
    };
  }

  redirect = () => {
    this.setState({
      redirect: true
    });
  };

  toggleContents = (e) =>{
    
   
    this.setState({expanded:!this.state.expanded});
  }

  toggleModal = (e) => {
  e.preventDefault();

  this.setState({ toggleAddModal: !this.state.toggleAddModal });}

  setCoords = (e) => {
    let rect = e.currentTarget.offsetParent.getBoundingClientRect()
    let x = rect.x;
    let y = rect.y +80;
    this.setState({xcoord:x,ycoord:y,})
    
  }

  

  render() {
    const { client } = this.props;

    return (
      //loop through keys of card data in props
      //return h3 element with formatted key value pairs
      
      <Link 
        style={{ textDecoration: "none" ,margin:"5px",position:"relative"}}
        to={`/dashboard/${client.type}/${client.id}`}
      >
        <StyledGlobalClientCard id={this.state.expanded ? "expanded":''}>
          <StyledContactContainer>
            <div className="identity-icon">
              <div className="circle">
                <div className="first-name">
                  {client.firstName ? client.firstName[0] : "?"}
                </div>
                
              </div>
              {/* <i onClick={(e)=>this.toggleContents(e)} class="fas fa-expand"></i> */}
              <i onMouseEnter={this.setCoords} onClick={(e) => this.toggleModal(e)} class="fas fa-angle-down"></i>
            </div>
            
            <div className="head-contact-container">
              <h3>
                {client.firstName} {client.secondName}
              </h3>
              <p className="email">{client.email}</p>
            </div>
          </StyledContactContainer>
          <Modal
           style={{color: "red",top:this.state.ycoord,left:this.state.xcoord,margin:0}}
            isOpen={this.state.toggleAddModal}
            toggle={this.toggleModal}
          >
            <div className="demo">
              <p>TITLE: {client.title}</p>
              <p>DOB: {client.dateofbirth}</p>
              <p>GENDER: {client.gender}</p>
            </div>
            <div className="contact">
            <p>PHONE: {client.phone}</p>
            </div>
            <div className="location">
              <p>ADDRESS: {client.address}</p>
              <p>REGION: {client.region}</p>
              <p>COMMUNITY: {client.community}</p>
            </div>
          </Modal>
        </StyledGlobalClientCard>
        
      </Link>
     
    );
  }
}


const StyledGlobalClientCard = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  z-index:2000;
  padding: 20px;
  border-radius: 3px;
  ${"" /* box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3); */}
  background: ${theme.manageUserItemBackground};
  width: 300px;
  height:80px;
  overflow:hidden;
  color: white;
  ${'' /* transition: all 0.15s ease; */}
  &:hover{
    .fas.fa-angle-down{
      color:gray;
      cursor:pointer;
      
    }
  }

  

   
   
   
   
 
    
    
  } 
  h3 {
    margin-bottom: 0px;
  }
  font-family: ${theme.experimentalFont};
  
  .demo,.contact,.location{
    color:white;
    
  }
  

  .circle {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    color: ${theme.activeblue};
    
    margin-right: 15px;
    text-align: center;

    background: ${theme.globalViewBackground};

    display: flex;

    justify-content: center;

    align-items: center;
    position:relative;
    text-align: center;
    background: ${theme.globalViewBackground};
    .first-name {
      height:40px;
      width:20px;
      justify-content: center;
      display: flex;
    font-size: 2rem;
    top: -2px;
    /* font-weight: 800; */
    color: ${theme.activeblue};
      position:absolute;
    align-items: center;
    position: absolute;
    
    }

    
  }
  .head-contact-container {
      
      
    }

  .demo{
    margin:10px 5px;
  }

  
  

  
`;

const StyledContactContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  
  
  .identity-icon{
   

    
  }
  .fas.fa-angle-down{
      position:absolute;
      top:0;
      right:0;
      padding:5px;
      color:white;
      z-index:3000
      &:hover{
      color:white;
      background:gray;
      }
      
  }

  .contact{
    .fas.fa-phone-square-alt{
      color:black;
      font-size:20px;
    }
  }
  

  .email {
    color: gray;
  }
`;
