import React from "react";
import { Modal, ModalBody } from "reactstrap";
import styled from "styled-components";

class ClientCardModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <CustomModalDiv>
        <Modal
          style={this.props.style}
          isOpen={this.props.isOpen}
          toggle={this.props.toggle}
          
          className="custom-modal"
        >
          <ModalBody style={{ padding: 0, width: 295 }}>
            {this.props.children}
          </ModalBody>
        </Modal>
      </CustomModalDiv>
    );
  }
}

export default ClientCardModal;

const CustomModalDiv = styled.div`

    .modal-dialog.custom-modal {

    width: 300px;

    }

    .modal-content{
  
 

   !important;
  z-index:9000 !important;

  width: 300px;
  color:white;
  border:none;
  


   
    
  
  


}

`;
