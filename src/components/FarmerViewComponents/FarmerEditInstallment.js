import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

class FarmerEditInstallmentForm extends Component {
  constructor(props) {
    super(props);
    //default date form to today
    const today = new Date();
    this.state = {
      payment: this.props.installment.mode,
      amount: this.props.installment.amountPaid,
      needsAmount: false,
      officer: this.props.installment.officer,
      needsOfficer: false,
      id: this.props.installment.id
    };
  }

  formSubmit = e => {
    e.preventDefault();
    //make sure an amount and an officer have been entered
    //use regex to see if entry is valid dollar amount
    var regex = /\d*\.{1}\d{2}$/;

    if (
      this.state.amount != "" &&
      regex.test(this.state.amount) &&
      this.state.officer != ""
    ) {
      this.setState({
        needsAmount: false,
        needsOfficer: false
      });
      //changed key names here to match java object
      const newInstallment = {
        amountPaid: parseFloat(this.state.amount),
        mode: this.state.payment,
        officer: this.state.officer,
        datePaid: this.state.datePaid,
        id: this.state.id
      };
      this.props.sendEdit(newInstallment);
    }

    if (
      (this.state.amount == "" || !regex.test(this.state.amount)) &&
      this.state.officer == ""
    ) {
      this.setState({
        needsAmount: true,
        needsOfficer: true
      });
    } else if (this.state.amount == "" || !regex.test(this.state.amount)) {
      this.setState({
        needsAmount: true,
        needsOfficer: false
      });
    } else if (this.state.officer == "") {
      this.setState({
        needsOfficer: true,
        needsAmount: false
      });
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  radioChange = e => {
    this.setState({
      payment: e.currentTarget.value
    });
  };

  render() {
    console.log(this.state);
    return (
      <Modal>
        <i
          onClick={() => this.props.toggleInstallment()}
          className="fas fa-times"
        />
        <form onSubmit={e => this.formSubmit(e)}>
          <Labels>
            Payment Amount:
            <input
              type="text"
              value={this.state.amount}
              name={"amount"}
              onChange={this.handleChange}
            />
          </Labels>
          {this.state.needsAmount && (
            <ErrorStatement>
              Please enter a valid amount, including decimal
            </ErrorStatement>
          )}
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
              onChange={this.handleChange}
            />
          </Labels>

          {this.state.needsOfficer && (
            <ErrorStatement>Please enter the officer's name</ErrorStatement>
          )}
          <Labels>
            <input type="submit" />
          </Labels>
        </form>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  console.log("farmer installment form map state to props fireing");
  return {
    installmentCardDataAdd: state.installmentCardData.installmentCardDataAdd
  };
};

export default connect(mapStateToProps)(FarmerEditInstallmentForm);

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
  letter-spacing: 0.5px;
  font-weight: 550;
  color: #ff4868;
  text-align: center;
`;
