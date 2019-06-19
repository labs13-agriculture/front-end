import React, { Component } from "react";
import { connect } from "react-redux";
import { StyledTd } from "../../styles/InstallmentStyles";
import { deleteInstallmentById } from "../../actions";

class Installment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("FARMER VIEW INSTALLMENTS PROPS", this.props);

    const { installment } = this.props;

    return (
      <tr>
        <StyledTd className="amountPaid">{installment.amountPaid}</StyledTd>
        <StyledTd className="mode">{installment.mode}</StyledTd>
        <StyledTd className="datePaid">
          {installment.datePaid.split("T")[0]}
        </StyledTd>
        <StyledTd className="officer">{installment.officer}</StyledTd>

        {/* <i
          onClick={() => installment.deleteInstallmentById(installment.id)}
          className="fas fa-trash"
        /> */}
        {/* <i
              onClick={() => installment.toggleEdit(installment.installment)}
              className="fas fa-edit"
            /> */}
      </tr>
    );
  }
}

const mapStateToProps = state => {
  return {
    // installmentCardData: state.installmentCardData.data,
    // installmentCardDataStart:
    //   state.installmentCardData.installmentCardDataStart,
    // installmentCardDataSuccess:
    //   state.installmentCardData.installmentCardDataSuccess,
    // installmentCardDataFailure:
    //   state.installmentCardData.installmentCardDataFailure
  };
};

export default connect(mapStateToProps)(Installment);
