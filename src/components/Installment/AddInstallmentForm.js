import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { addInstallment } from "../../actions";
import { connect } from "react-redux";
import { Label, Form, FormGroup, Input, Button } from "reactstrap";

function AddInstallmentForm(props) {
  const initialState = {
    amountPaid: 0.0,
    datePaid: "",
    mode: "MTN",
    officer: ""
  };

  const [installment, setInstallment] = useState(initialState);

  const handleInput = e => {
    setInstallment({
      ...installment,
      [e.target.name]: e.target.value
    });
  };

  const submitHandler = e => {
    e.preventDefault();
    props.addInstallment(installment, props.match.params.id);
    props.toggleModal(e);
  };

  return (
    <Form style={{ padding: "20px" }}>
      <h1>Add Installment</h1>
      <FormGroup>
        <Label for="amountPaid">Amount</Label>
        <Input
          type="number"
          step="0.01"
          name="amountPaid"
          onChange={handleInput}
          value={installment.amountPaid}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Mode</Label>
        <Input
          type="select"
          name="mode"
          id="mode"
          onChange={handleInput}
          value={installment.mode}
        >
          <option disabled selected>
            Select ...
          </option>

          <option>MTN</option>
          <option>CASH</option>
          <option>BANK</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="datePaid">Date</Label>
        <Input
          type="date"
          name="datePaid"
          onChange={handleInput}
          value={installment.datePaid}
        />
      </FormGroup>
      <FormGroup>
        <Label for="officer">Officer</Label>
        <Input
          type="officer"
          name="officer"
          onChange={handleInput}
          value={installment.officer}
        />
      </FormGroup>
      <Button onClick={submitHandler}>Add</Button>
      <Button color="warning" onClick={props.toggleModal}>
        Cancel
      </Button>
    </Form>
  );
}

const mapStateToProps = state => {
  return null;
};

export default withRouter(
  connect(
    mapStateToProps,
    { addInstallment }
  )(AddInstallmentForm)
);
