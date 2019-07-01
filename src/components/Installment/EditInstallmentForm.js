import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Label, Form, FormGroup, Input, Button } from "reactstrap";
import { updateInstallmentItem } from "../../actions";

import FormStyles from "../../styles/FormStyles";

import { theme } from "../../config";

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
    <FormStyles>
      <div className="header">
        <h2>Edit Installment</h2>
      </div>
      <Form
        style={{ padding: "20px", background: `${theme.background_light}` }}
      >
        {installment && (
          <>
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
    </FormStyles>
  );
}

const mapStateToProps = state => {
  return {};
};

export default withRouter(
  connect(
    mapStateToProps,
    { updateInstallmentItem }
  )(EditInstallmentForm)
);
