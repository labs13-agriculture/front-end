import React, { Component } from "react";
import styled from "styled-components";

class FarmerViewInstallments extends Component{
    constructor(props){
        super(props);

        this.state={
            addingInstallment: false
        }
    }

    render(){
        return(
            <div>
                <h2>Installment History</h2>
                <i onClick={() => this.props.toggleInstallment()} class="fas fa-plus"></i>
            </div>
        );
    }
}

export default FarmerViewInstallments;
