import React, { Component } from "react";
import styled from "styled-components";
import { Modal } from 'reactstrap';
import UpdateTransactionForm from './UpdateTransactionForm';
import { StyledTd } from "../../styles/InstallmentStyles";
import { theme } from '../../config'

export class FarmerTransactionItem extends Component{
    constructor(props){
        super(props);
        this.state={
            toggleUpdateModal:false
        }
    }

    toggleUpdateModal = () => this.setState({toggleUpdateModal:!this.state.toggleUpdateModal})

    render(){
        return(
            <Row>
                
                <StyledTd>{Math.round(this.props.item.total*100)/100}</StyledTd>
                <StyledTd>{this.props.item.type}</StyledTd>
                <StyledTd>{this.props.item.date.split("T")[0]}</StyledTd>
                <StyledTd>{this.props.item.personnel}</StyledTd>
                <StyledTd className="actions">
                    <i onClick={this.toggleUpdateModal} className="fas fa-edit edit" />
                </StyledTd>
                <StyledTd className="actions">
                    <i onClick={this.props.deleteClientTransaction} className="fas fa-trash delete" />
                </StyledTd>
                <Modal isOpen={this.state.toggleUpdateModal}>
                    <UpdateTransactionForm transaction={this.props.item}/>
                    <button onClick={this.toggleUpdateModal}  color="secondary">Cancel</button>
                </Modal>
            </Row>
        )
    }
}
    



const Row = styled.tr`
  i {
    transition: all .15s ease;
  }

  i.delete:hover {
    color: ${theme.warning}
  }

  i.edit:hover {
    color: ${theme.accent}
  }
`;

