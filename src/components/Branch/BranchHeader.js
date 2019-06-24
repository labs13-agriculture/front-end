import React, { useState } from 'react';
import styled, { css } from "styled-components";
import { connect } from "react-redux";
import { Button, Modal } from "reactstrap";
import { theme } from "../../config";
import BranchForm from "./BranchForm";

function BranchHeader(props){
    const [modal, setModal] = useState(false);

    const toggleModal = e =>{
        e.preventDefault();
        setModal(!modal);
    }

    return (
        <HeaderContainer>
          <div className="header">
            <h2>Branches</h2>
    
            <Button className="add-branch" onClick={toggleModal}>New</Button>
          </div>
          <table>
            <thead>
              <tr>
              <StyledTd className="name-head">
                  Name
                </StyledTd>
                <StyledTd className="phone-head">
                  Phone
                </StyledTd>
                <StyledTd className="email-head">
                  Email
                </StyledTd>
                <StyledTd className="position-head">
                  Position
                </StyledTd>
                <StyledTd className="address-head">
                  Address
                </StyledTd>
                <StyledTd className="district-head">
                  District
                </StyledTd>
                <StyledTd className="region-head">
                  Region
                </StyledTd>
                <StyledTd className="landmark-head">
                  Landmark
                </StyledTd>
                <StyledTd className="actions-head">
                  Actions
                </StyledTd>
              </tr>
            </thead>
          </table>
    
          <Modal isOpen={modal} toggle={toggleModal}>
            <BranchForm id={props.id} toggleModal={toggleModal} />
          </Modal>
        </HeaderContainer>
      );
}

export default connect(null, {})(BranchHeader);


const HeaderContainer = styled.div`
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  top: 0;

  .header {
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 10px;
    background-color: rgb(60, 57, 75);
    color: ${theme.background_light};

    h2 {
      margin: 0;
    }

    .add-branch {

      &:hover {
        background: ${theme.accent}
      }
    }
  }

  table {
    /* 100% was leaving a super small sliver for some reason */
    width: 100.1%;
    background-color: rgb(60, 57, 75);
    color: ${theme.background_light};

    tr{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
  }
`;


const StyledTd = styled.td`
  padding: 10px 0;

  width: auto;
`;

