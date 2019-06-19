import React, { Component } from "react";
import styled from "styled-components";
import { Modal } from 'reactstrap';
import FormUpdateClientTransaction from './FormUpdateClientTransaction';

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
            <StyledTransactionContainer>
                
                <h3>{Math.floor(this.props.item.total*100)/100}</h3>
                <h3>{this.props.item.date}</h3>
                <h3>{this.props.item.type}</h3>
                <h3>{this.props.item.personnel}</h3>
                <button onClick={this.toggleUpdateModal} isOpen={this.state.toggleUpdateModal} color="secondary">Update</button>
                <button onClick={()=>{this.props.deleteClientTransaction(this.props.item.id).then(this.props.getClientTransaction(this.props.clientId))}}>DELETE</button>
                <Modal isOpen={this.state.toggleUpdateModal}>
                    <FormUpdateClientTransaction clientId={this.props.clientId} transactionId={this.props.item.id}/>
                    <button onClick={this.toggleUpdateModal}  color="secondary">Cancel</button>
                </Modal>
            </StyledTransactionContainer>
        )
    }
}
    



const StyledTransactionContainer =  styled.div`

    display:flex;
    justify-content:space-between;

    h3{
        margin:5px 10px;

    }




`

