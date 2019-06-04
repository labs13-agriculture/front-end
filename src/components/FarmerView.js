import React, { Component } from "react";
import FarmerViewDemographics from "./FarmerViewComponents/FarmerViewDemographics";
import FarmerViewTransactions from "./FarmerViewComponents/FarmerViewTransactions";
import FarmerViewInventory from "./FarmerViewComponents/FarmerViewInventory";
import FarmerViewInstallments from "./FarmerViewComponents/FarmerViewInstallments";
import FarmerViewYield from "./FarmerViewComponents/FarmerViewYield";
import FarmerInstallmentForm from "./FarmerViewComponents/FarmerInstallmentForm";
import styled from "styled-components";

class FarmerView extends Component{
    constructor(props){
        super(props);
        this.state={
            addingInstallment: false
        }
    }

    componentDidMount(){
        console.log("Mounted");
        //axios call to retrieve farmer data
    }

    toggleInstallment = () => {
        if(this.state.addingInstallment){
            this.setState({
                addingInstallment: false
            })
        }
        else{
            this.setState({
                addingInstallment: true
            })
        }
    }

    addInstallment = installment => {
        console.log(installment);
        //axios call here
    }

    render(){
        return(
            <div>
                <StyledContainer>
                    <StyledDemos>
                        <FarmerViewDemographics name={"Farmer Name"} location={"Farmer location"}/>
                    </StyledDemos>
                    <StyledInfoView>
                        <FarmerViewTransactions />
                    </StyledInfoView>
                    <StyledInfoView>
                        <FarmerViewInstallments toggleInstallment={this.toggleInstallment}/>
                    </StyledInfoView>
                    <StyledInfoView>
                        <FarmerViewYield />
                    </StyledInfoView>
                    <StyledInfoView>
                        <FarmerViewInventory />
                    </StyledInfoView>
                </StyledContainer>
                {this.state.addingInstallment && <FarmerInstallmentForm toggleInstallment={this.toggleInstallment} addInstallment={this.addInstallment} />}
            </div>
        )
    }

}

export default FarmerView;

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const StyledDemos = styled.div`
    width: 95%;
    border: 1px solid red;
`;

const StyledInfoView = styled.div`
    width: 45%;
    border: 1px solid red;
    margin-top: 20px;
`;
