import React from "react";
import { connect } from "react-redux";
import { needHelp } from "../../actions";
import { Button } from "reactstrap";
import HelpModal from "../../styles/HelpModal";

const InventoryHelp = props => {
  return (
    <HelpModal>
      <header>
        <h2>Inventory Help</h2>
      </header>
      <div className="help-content">
        <p>
          Here you can view all of the organizations current inventory, as well
          as add new items and update the current stock.
          <br />
          <br />
          <strong>click "Add"</strong> to add a new item.
          <br />
          <br />
          <strong>
            click the pencil
          </strong> <i className="fas fa-edit edit" /> to update an item already
          in the system.
          <br />
          <br />
          <strong>click the trash can</strong>{" "}
          <i className="fas fa-trash delete" /> to remove an item from the
          system, be careful this is permanent. A better option is to mark the
          item as inactive to allow for better records.
        </p>
        <Button color="secondary" onClick={() => props.needHelp(props.status)}>
          Got it
        </Button>
      </div>
    </HelpModal>
  );
};

const mapStateToProps = state => {
  return {
    status: state.help.needsHelp
  };
};

export default connect(
  mapStateToProps,
  { needHelp }
)(InventoryHelp);
