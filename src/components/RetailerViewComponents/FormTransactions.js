import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {addNewTransaction} from '../../actions';
import {connect} from 'react-redux';

 class FormTransactions extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            type:'',
            date:'',
            personnel:'',
            quantity:'',
            price:'',
            name:''

            
            // inputs:[
            //     {
            //         quantity:'',
            //         price:'',
            //         item:{
            //             name:''
                       
            //         }

                    
            //     }  
            //  ]
        }
    }

    handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name ;
            
        this.setState({
            [name]: value
        });
        
        
    }
    
    assembleHttpBody = state => {
        return {
            type:state.type,
            personnel:state.personnel,
            date:new Date(state.date).toJSON(),
            inputs:[{
                quantity:parseInt(state.quantity),
                unitPrice:parseFloat(state.unitPrice),
                item:{
                    name:state.name
                }
            }]
        }

    }

    addNewTransaction = (e) =>{
        e.preventDefault();
        const newTransaction = this.assembleHttpBody(this.state)
        console.log("formatted HTTP BODY ",newTransaction);
        this.props.addNewTransaction(newTransaction,this.props.match.params.id);
    }

  render() {
    return (
      <Form>
        <FormGroup>
          <Label >Personnel</Label>
          <Label for="exampleEmail"></Label>
          <Input onChange={this.handleInputChange}
            type="text"
            name="personnel"
            id="exampleEmail"
            placeholder="with a placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Type</Label>
          <Input onChange={this.handleInputChange}
            type="text"
            name="type"
            id="exampleEmail"
            placeholder="with a placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Item Name</Label>
          <Input onChange={this.handleInputChange}
            type="text"
            name="name"
            id="examplePassword"
            placeholder="password placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleUrl">Price</Label>
          <Input onChange={this.handleInputChange}
            type="number"
            step="0.01"
            name="unitPrice"
            id="exampleUrl"
            placeholder="url placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleNumber">Quantity</Label>
          <Input onChange={this.handleInputChange}
            type="number"
            name="quantity"
            id="exampleNumber"
            placeholder="number placeholder"
          />
        </FormGroup>
       
        <FormGroup>
          <Label for="exampleDate">Date</Label>
          <Input onChange={this.handleInputChange}
            type="date"
            name="date"
            id="exampleDate"
            placeholder="date placeholder"
          />
        </FormGroup>
       
        <button onClick={this.addNewTransaction}>Add</button>
      </Form>
      
    );
  }
}

const mapStateToProps = state => {
    return {
        addTransactionStart:state.addTransactionRetailer.addTransactionStart,
        addTransactionFailure:state.addTransactionRetailer.addTransactionFailure,
        addTransactionSuccess:state.addTransactionRetailer.addTransactionSuccess,
        addTransactionData:state.addTransactionRetailer.data,
        addTransactionError:state.addTransactionRetailer.error,


    }
}

export default connect(mapStateToProps,{addNewTransaction})(FormTransactions);