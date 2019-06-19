import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getInventoryList, addNewTransaction } from "../../actions";

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
            items: [{itemName: '', unitPrice: '', quantity: ''}],
            clientId: props.id,
        }
    }

    componentDidMount(){
        this.props.getInventoryList()
    }

    addItem = () =>{
        this.setState((prevState) => ({
            items: [...prevState.items, {itemName: '', unitPrice: '', quantity: ''}]
        }))
    }
    
    removeItem = () =>{
        let newItems = this.state.items;
        newItems.pop();
        this.setState({
            items: newItems
        })
    }

    formChange = e =>{
        if(["itemName", "unitPrice", "quantity"].includes(e.target.dataset.class)){
            let items = [...this.state.items];
            items[e.target.dataset.id][e.target.dataset.class] = e.target.value;
            this.setState({items}, () => console.log(this.state.items))
        }
        else{
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }

    radioChange = e => {
        this.setState({
            payment: e.currentTarget.value
        });
    }

    submitForm = e =>{
        e.preventDefault();
        let finalItems = [];
        this.state.items.map(item =>{
            let itemObject = this.props.inventory.filter(inventoryItem => inventoryItem.name === item.itemName)
            finalItems.push({
                quantity: item.quantity,
                unitPrice: item.unitPrice,
                item: itemObject[0]
            })
        })
        
        const transaction = {
            type: this.state.payment,
            personnel: this.state.officer,
            date: this.state.year +
            "-" +
            (this.state.month > 9 ? this.state.month : "0" + this.state.month) +
            "-" +
            (this.state.day > 9 ? this.state.day : "0" + this.state.day),
            inputs: finalItems
        }
        this.props.addNewTransaction(transaction, this.state.clientId);
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
                {this.state.items.map((item, index) =>(
                    <div key={index}>
                        <label>
                            Item {index + 1}:
                            <Dropdown data-class="itemName" data-item={index} name={`item-${index}`} onChange={e=> this.formChange(e)} data-id={index}>
                                <option data-class="itemName" data-item="">Please select an item</option>
                                {this.props.inventory.map((item, idx) => (<option className="itemName" key={idx} data-item={item}>{item.name}</option>))}
                            </Dropdown>
                        </label>
                        <label>
                            Quantity:
                            <input data-id={index} data-class="quantity" type="text" name="quantity" data-qty={index} onChange={e => this.formChange(e)} />
                        </label>
                        <label>
                            Price:
                            <input data-id={index} data-class="unitPrice" type="text" name="unitPrice" data-price={index} onChange={e => this.formChange(e)} />
                        </label>
                    </div>
                ))}
                
                <button type="button" onClick={this.addItem}>Add another item</button>
                <button type="button" onClick={this.removeItem}>Remove item</button>
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

export default connect(mapStateToProps, { getInventoryList, addNewTransaction })(FarmerTransactionForm);

const Dropdown = styled.select`
  width: auto;
  margin-left: 2%;
`;