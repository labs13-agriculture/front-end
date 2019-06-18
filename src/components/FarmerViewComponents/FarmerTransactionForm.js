import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getInventoryList } from "../../actions";

class FarmerTransactionForm extends Component{
    constructor(props){
        super(props);
        const today=new Date();
        this.state={
            payment: "MTN Mobile Money",
            month: today.getMonth() + 1,
            day: today.getDate(),
            year: today.getYear() + 1900,
            officer:'',
            quantity: '',
            itemName: '',
            clientId: props.id,
            unitPrice: ''
        }
    }

    componentDidMount(){
        this.props.getInventoryList()
    }

    formChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    radioChange = e => {
        this.setState({
            payment: e.currentTarget.value
        });
    }

    submitForm = e =>{
        e.preventDefault();
        console.log(this.state);
    }

    

    render(){
        const today=new Date();
        let monthArray=[];
        let dayArray=[];
        let yearArray=[];
        for(let i = 1; i<13; i++){
            monthArray.push(i);
        }
        for(let i=1; i<32; i++){
            dayArray.push(i);
        }
        for(let i=today.getYear()+1895; i < today.getYear() + 1901; i++){
            yearArray.push(i);
        }
        return(
            <form onSubmit={e => this.submitForm(e)}>
                <label>
                    Officer:
                    <input type="text" name="officer" value={this.state.officer} onChange={e => this.formChange(e)} />
                </label>
                <label>
                    Transaction Date:
                    <div>
                        <Dropdown
                            value={this.state.month}
                            name="month"
                            onChange={this.formChange}
                        >
                            {monthArray.map((month, index) => (
                            <option key={index} value={month}>
                                {month}
                            </option>
                            ))}
                        </Dropdown>
                        <Dropdown
                            value={this.state.day}
                            name="day"
                            onChange={this.formChange}
                        >
                            {dayArray.map((day, index) => (
                            <option key={index} value={day}>
                                {day}
                            </option>
                            ))}
                        </Dropdown>
                        <Dropdown
                            value={this.state.year}
                            name="year"
                            onChange={this.formChange}
                        >
                            {yearArray.map((year, index) => (
                            <option key={index} value={year}>
                                {year}
                            </option>
                            ))}
                        </Dropdown>
                    </div>
                </label>
                <label>
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
                </label>
                <label>
                    Item:
                    <Dropdown value={this.state.itemName} name="itemName" onChange={e=> this.formChange}>
                        <option value="">Please select an item</option>
                        {this.props.inventory.map((item, index) => (<option key={index}>{item.name}</option>))}
                    </Dropdown>
                </label>
                <label>
                    Quantity:
                    <input type="text" name="quantity" value={this.state.quantity} onChange={e => this.formChange(e)} />
                </label>
                <label>
                    Price:
                    <input type="text" name="unitPrice" value={this.state.unitPrice} onChange={e => this.formChange(e)} />
                </label>
                <input type="submit" />
            </form>
        )
    }
}

const mapStateToProps = state =>{
    return {
        inventory: state.inventory.inventoryList
    };
}

export default connect(mapStateToProps, { getInventoryList })(FarmerTransactionForm);

const Dropdown = styled.select`
  width: auto;
  margin-left: 2%;
`;