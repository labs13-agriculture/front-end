import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Label, Form, FormGroup, Input, Button } from "reactstrap";
import { getInventoryList, addNewTransaction } from "../../actions";

import FormStyles from "../../styles/FormStyles";

import { theme } from "../../config";

class TransactionForm extends Component {
  constructor(props) {
    super(props);
    const today = new Date();
    this.state = {
      payment: "CASH",
      month: today.getMonth() + 1,
      day: today.getDate(),
      year: today.getYear() + 1900,
      officer: "",
      items: [{ itemName: "", unitPrice: "", quantity: "" }],
      clientId: props.id,
      needItems: false,
      needItemData: false
    };
  }

  componentDidMount() {
    this.props.getInventoryList();
  }

  addItem = () => {
    this.setState(prevState => ({
      items: [
        ...prevState.items,
        { itemName: "", unitPrice: "", quantity: "" }
      ],
      needItems: false
    }));
  };

  removeItem = () => {
    let newItems = this.state.items;
    newItems.pop();
    this.setState({
      items: newItems
    });
  };

  formChange = e => {
    if (
      ["itemName", "unitPrice", "quantity"].includes(e.target.dataset.class)
    ) {
      let items = [...this.state.items];
      items[e.target.dataset.id][e.target.dataset.class] = e.target.value;
      this.setState({ items }, () => console.log(this.state.items));
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };

  radioChange = e => {
    this.setState({
      payment: e.currentTarget.value
    });
  };

  submitForm = e => {
    e.preventDefault();

    if (this.state.items.length === 0) {
      this.setState({
        needItems: true,
        needItemData: false
      });
      return;
    }

    let needDetails = false;
    let finalItems = [];
    this.state.items.map(item => {
      //make sure an item was selected
      if (item.itemName === "") {
        needDetails = true;
      }
      let itemObject = this.props.inventory.filter(
        inventoryItem => inventoryItem.name === item.itemName
      );
      //Make sure quantity and price were filled
      if (item.quantity === "" || item.unitPrice === "") {
        needDetails = true;
      }
      finalItems.push({
        quantity: item.quantity,
        unitPrice: item.unitPrice,
        item: itemObject[0]
      });

      return null;
    });

    if (needDetails) {
      this.setState({
        needItems: false, // We must have had items if we determined that needDetails is true
        needItemData: needDetails
      });
      return;
    }

    //if we've gotten here, we have the required info and can remove our error messages

    this.setState({
      needItemData: false,
      needItems: false
    });

    const transaction = {
      type: this.state.payment,
      personnel: this.state.officer,
      date:
        this.state.year +
        "-" +
        (this.state.month > 9 ? this.state.month : "0" + this.state.month) +
        "-" +
        (this.state.day > 9 ? this.state.day : "0" + this.state.day),
      inputs: finalItems
    };
    this.props.addNewTransaction(transaction, this.state.clientId);
    this.props.toggleModal();
  };

  render() {
    const today = new Date();
    let monthArray = [];
    let dayArray = [];
    let yearArray = [];
    for (let i = 1; i < 13; i++) {
      monthArray.push(i);
    }
    for (let i = 1; i < 32; i++) {
      dayArray.push(i);
    }
    for (let i = today.getYear() + 1895; i < today.getYear() + 1901; i++) {
      yearArray.push(i);
    }
    return (
      <FormStyles>
        <div className="header">
          <h2>New Transaction</h2>
        </div>
        <Form
          onSubmit={e => this.submitForm(e)}
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            background: `${theme.background_light}`
          }}
        >
          <Label>
            Officer:
            <Input
              type="text"
              name="officer"
              value={this.state.officer}
              onChange={e => this.formChange(e)}
            />
          </Label>

          <Label>
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
          </Label>
          <Label>
            Payment Method:
            <div style={{ padding: "0 20px" }}>
              <Input
                type="radio"
                name="payment"
                value="CREDIT"
                checked={this.state.payment === "CREDIT"}
                onChange={this.radioChange}
              />
              <Label style={{ padding: "0 1%" }} for="CREDIT">
                Credit
              </Label>
            </div>
            <div style={{ padding: "0 20px" }}>
              <Input
                type="radio"
                color="warning"
                name="payment"
                value="CASH"
                checked={this.state.payment === "CASH"}
                onChange={this.radioChange}
              />
              <Label style={{ padding: "0 1%" }} for="CASH">
                Cash
              </Label>
            </div>
          </Label>
          {this.state.items.map((item, index) => (
            <FormGroup key={index}>
              <Label>
                Item {index + 1}:
                <Dropdown
                  data-class="itemName"
                  data-item={index}
                  name={`item-${index}`}
                  onChange={e => this.formChange(e)}
                  data-id={index}
                >
                  <option data-class="itemName" data-item="">
                    Select item ...
                  </option>
                  {this.props.inventory.map((item, idx) => (
                    <option className="itemName" key={idx} data-item={item}>
                      {item.name}
                    </option>
                  ))}
                </Dropdown>
              </Label>
              <Label>
                Quantity:
                <Input
                  data-id={index}
                  data-class="quantity"
                  type="text"
                  name="quantity"
                  data-qty={index}
                  onChange={e => this.formChange(e)}
                />
              </Label>
              <Label>
                Price:
                <Input
                  data-id={index}
                  data-class="unitPrice"
                  type="text"
                  name="unitPrice"
                  data-price={index}
                  onChange={e => this.formChange(e)}
                />
              </Label>
            </FormGroup>
          ))}
          <FormGroup
            style={{
              padding: "1% 0",
              display: "flex",
              // flexDirection: "column",
              justifyContent: "space-evenly",
              margin: "0"
            }}
          >
            <Button
              style={{ width: "100px" }}
              type="button"
              onClick={this.addItem}
            >
              Add another item
            </Button>

            <Button
              style={{ width: "100px" }}
              color="danger"
              type="button"
              onClick={this.removeItem}
            >
              Remove item
            </Button>

            <Button
              style={{ width: "100px" }}
              color="warning"
              onClick={this.props.toggleModal}
            >
              Cancel
            </Button>
          </FormGroup>
          <Input type="submit" />
          {this.state.needItems && (
            <ErrorMessage>
              Please add at least one item to this transaction
            </ErrorMessage>
          )}
          {this.state.needItemData && (
            <ErrorMessage>
              All items must include a name, quantity, and price
            </ErrorMessage>
          )}
        </Form>
      </FormStyles>
    );
  }
}

const mapStateToProps = state => {
  return {
    inventory: state.inventory.inventoryList
  };
};

export default connect(
  mapStateToProps,
  { getInventoryList, addNewTransaction }
)(TransactionForm);

const Dropdown = styled.select`
  width: auto;
  margin-left: 1%;
`;

const ErrorMessage = styled.p`
  color: #ff4868;
  font-size: 11px;
  font-weight: 550;
`;
