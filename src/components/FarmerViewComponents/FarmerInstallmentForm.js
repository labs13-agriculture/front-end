import React, { Component } from "react";
import styled from "styled-components";

class FarmerInstallmentForm extends Component{
    constructor(props){
        super(props);
        //default date form to today
        const today = new Date();
        this.state={
            payment:"MTN Mobile Money",
            amount: "",
            month: today.getMonth() + 1,
            day: today.getDate(),
            year: today.getYear() + 1900,
            needsAmount: false,
            officer: ""
        }
    }



    formSubmit = e => {
        e.preventDefault();
        //make sure an amount has been entered
        //use regex to see if entry is valid dollar amount
        var regex = /\d*\.{1}\d{2}$/;

        if(this.state.amount != "" && regex.test(this.state.amount)){
            this.setState({
                needsAmount: false
            })
            //changed key names here to match java object
            const newInstallment = {
                datePaid: this.state.month + " " + this.state.day + ", " + this.state.year,
                paid: parseFloat(this.state.amount),
                mode: this.state.payment,
                officer: this.state.officer
            }
            this.props.addInstallment(newInstallment);
        }

        else{
            this.setState({
                needsAmount: true
            })
        }
    }

    changeDate = e => {
        console.log(document.querySelector('input[type="date"]').value)
    }

    handleChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    radioChange = e => {
        this.setState({
            payment: e.currentTarget.value
        });
    }


    render(){
        const monthArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        const dayArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
        const yearArray = [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];
        return(
            <Modal>
                <i onClick={() => this.props.toggleInstallment()} className="fas fa-times"></i>
                <form onSubmit={e => this.formSubmit(e)}>
                    <Labels>
                        Payment Date:
                        <div>
                            <Dropdown value={this.state.month} name="month" onChange={this.handleChange}>
                                {monthArray.map((month, index) => <option key={index} value={month}>{month}</option>)}
                            </Dropdown>
                            <Dropdown value={this.state.day} name="day" onChange={this.handleChange}>
                                {dayArray.map((day, index) => <option key={index} value={day}>{day}</option>)}
                            </Dropdown>
                            <Dropdown value={this.state.year} name="year" onChange={this.handleChange}>
                                {yearArray.map((year, index) => <option key={index} value={year}>{year}</option>)}
                            </Dropdown>
                        </div>
                    </Labels>
                    <Labels>
                        Payment Amount:
                        <input 
                            type="text"
                            value={this.state.amount}
                            name={"amount"}
                            onChange={this.handleChange} />
                    </Labels>
                    {this.state.needsAmount && <ErrorStatement>Please enter a valid amount, including decimal</ErrorStatement>}
                    <Labels>
                        Payment Method:
                        <div>
                            <input 
                                type="radio" 
                                name="payment" 
                                value="MTN Mobile Money"
                                checked={this.state.payment === "MTN Mobile Money"}
                                onChange={this.radioChange}
                            />
                            <label for="MTN Mobile Money">MTN Mobile Money</label>
                        </div>
                        <div>
                            <input 
                                type="radio" 
                                name="payment" 
                                value="Bank"
                                checked={this.state.payment === "Bank"}
                                onChange={this.radioChange}
                            />
                            <label for="Bank">Bank</label>
                        </div>
                        <div>
                            <input 
                                type="radio" 
                                name="payment" 
                                value="Cash"
                                checked={this.state.payment === "Cash"}
                                onChange={this.radioChange}
                            />
                            <label for="Cash">Cash</label>
                        </div>
                    </Labels>
                    <Labels>
                        Officer Entering Payment:
                        <input 
                            type="text"
                            value={this.state.officer}
                            name={"officer"}
                            onChange={this.handleChange} />
                    </Labels>
                    <Labels>
                        <input type="submit" />
                    </Labels>
                </form>
            </Modal>
        )
    }
}

export default FarmerInstallmentForm;

const Modal = styled.div`
    width: 65%;
    border: 1px solid red;
    position: absolute;
    margin: auto;
    height: auto;
    z-index: 1000005;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
`;

const Labels = styled.label`
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    width: 50%;
    text-align: center;
`;


const Dropdown = styled.select`
    width: auto;
    margin-left: 2%;
`;

const ErrorStatement = styled.p`
    font-size: 11px;
    letter-spacing: .5px;
    font-weight: 550;
    color: #ff4868;
    text-align: center;
`;