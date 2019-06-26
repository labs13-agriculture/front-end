import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Modal } from "reactstrap";
import BranchForm from '../Branch/BranchForm';
import { deleteBranch } from '../../actions';
import { connect } from 'react-redux';


class OrganizationBranchCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  redirect = () => {
    this.setState({
      redirect: true
    });
  };

  toggleUpdateModal = () =>{
    this.setState({
        toggleUpdate: !this.state.toggleUpdate
    })
}

  render() {
    const organization = { ...this.props };

    return (
      
        <StyledGlobalClientCard>
          <StyledContactContainer>
            
            <div className="gen-head-container">
                <div className="title-description">
                    
                    <span className="branch-info location">{this.props.branch.district}</span>
                </div>
                <div className="header-detail">
                    <div className="circle">
                        <div className="first-name">{this.props.branch.name[0]}</div>
                    </div>
                    <h3>{this.props.branch.name}</h3>
                    <div className="edit-options">
                        <i onClick={this.toggleUpdateModal} className="fas fa-edit edit" />
                        <i onClick={() => this.props.deleteBranch(this.props.branch.branch_id)} className="fas fa-trash delete"/>
                    </div>

                </div>
            </div>
              
            <div className="location-detail">
                            <div className="gen-style-container">
                                <h3 className="info-container-heading">Address</h3>
                                <h3 className="branch-info location">{this.props.branch.address}</h3>
                            </div>
                            
                            <div className="gen-style-container">
                                
                                
                                <h3 className="info-container-heading">Landmark</h3>
                                <h3>{this.props.branch.landmark}</h3>
                            </div>
                            
            </div>
                
           
            <div className="contact-detail">
                <div className="gen-style-container">
                
                        <h3 className="info-container-heading">Position</h3>
                        <h3 className="branch-info position">{this.props.branch.position}</h3>
                </div>
                
                <div className="gen-style-container">
                    <h3 className="info-container-heading">Phone</h3>
                    <h3 className="branch-info contact">{this.props.branch.phone}</h3>
                </div>
                <div className="gen-style-container">
                    <h3 className="info-container-heading">Email</h3>
                    <h3 className="branch-info contact">{this.props.branch.email}</h3>
                </div>
                    
            </div>    
                
                
         
        </StyledContactContainer>
          <Modal isOpen={this.state.toggleUpdate}>
                    <BranchForm updating={true} branch={this.props.branch} />
                        <button onClick={this.toggleUpdateModal} color="secondary">
                            Cancel
                        </button>
            </Modal>
        </StyledGlobalClientCard>
      
    );
  }
}

const StyledGlobalClientCard = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  ${'' /* overflow-y:scroll; */}
  margin: 10px;

  border-radius: 3px;
  ${"" /* box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3); */}
  background:rgb(60,57,75);
  width: 260px;
  color: white;
  ${"" /* &:hover {
    cursor: pointer;
    text-decoration:none;
  } */}
  justify-content: flex-start;
  align-items: flex-start;
 
  font-family: "Josefin Sans", sans-serif;
  .gen-head-container{
        width: 100%;

        background: #40e0d000;

        padding: 20px 30px 18px 30px;
        width:100%;
        border-bottom:1px solid #ffffff26;
    }

   

    .header-detail{
        display: flex;
        justify-content: space-evenly;
        flex-direction:column;
        align-items:center;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
        .edit-options{
            width:100%;
            display:flex;
            justify-content:center;
        }
        .fas{
            margin:10px;
            padding:10px;
            background:rgb(35,33,43);
            border-radius:50%;
            &:hover{
                cursor:pointer;
            }
        }
    }
  
  .gen-style-container{
    width: 100%;
    padding:10px;

    border-bottom: 1px solid #ffffff26;
    }
  .location-detail{
      display:flex;
      flex-direction:column;
      align-items:flex-start;
      width:100%;
  }

  .contact-detail{
      width:100%;
  }
  .title-description{
    display: flex;
    justify-content: center;
    padding: 10px;

    h3{
        
        border-radius:20px;
        
    }
  }

  .info-container-heading{
      font-size:1.5rem;
      color:gray;
  }

  .circle {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    color: #40e0d0;
    margin: 15px;
    text-align: center;
    background: rgb(35,33,43);
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    
    justify-content: center;
    
    align-items: center;
    position: relative;
    text-align: center;
    background: rgb(35,33,43);
    .first-name {
        height: 60px;
        width: 20px;
       
        justify-content: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        font-size: 3rem;
        color: #40e0d0;
        position: absolute;
        align-items: center;
        position: absolute;
        top: 2px;
    }
  

`;

const StyledContactContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction:column;
  width:100%;
  
  .email {
    color: gray;
  }
  
  
  
`;

export default connect(null, { deleteBranch })(OrganizationBranchCard);