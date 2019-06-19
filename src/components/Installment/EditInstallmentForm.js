import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { addInstallment } from "../../actions";
import { connect } from "react-redux";
import { Label, Dropdown, Form, FormGroup, Input, Button } from "reactstrap";
import {updateInstallmentItem} from "../../actions"

function EditInstallmentForm(props) {
  const [installment, setInstallment] = useState(props.installment);

  const handleInput = e => {
    setInstallment({
      ...installment,
      [e.target.name]: e.target.value
    });
  };

  const submitHandler = e => {
    e.preventDefault();
    props.updateInstallmentItem(installment);
    props.toggleModal(e);
  };

  return (
    <Form style={{ padding: "20px" }}>
      <h1>Edit Installment</h1>
      {installment && (<>
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
            value={installment.datePaid.split("T")[0]}
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
        <Button onClick={submitHandler}>Edit</Button>
        <Button color="warning" onClick={props.toggleModal}>
          Cancel
        </Button>
        </>
      )}
    </Form>
  );
}

const mapStateToProps = state => {
  return null;
};

export default withRouter(
  connect(
    mapStateToProps,
    { updateInstallmentItem }
  )(EditInstallmentForm)
);
