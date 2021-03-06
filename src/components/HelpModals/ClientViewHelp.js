import React from "react";
import { connect } from "react-redux";
import { needHelp } from "../../actions";
import { Button } from "reactstrap";
import HelpModal from "../../styles/HelpModal";

const ClientViewHelp = props => {
  return (
    <HelpModal>
      <header>
        <h2>Client View</h2>
      </header>
      <div className="help-content">
        <p>
          Here, you can see all data about a specific <strong>client</strong>.
          as well as manage their <strong>transactions</strong> and{" "}
          <strong>installments</strong>.
          <br />
          <br />
          You can <strong>edit</strong> <i className="fas fa-edit edit" /> data,
          <strong> delete</strong> <i className="fas fa-trash delete" /> data,
          or record <strong>new</strong> transactions and installments
          <br />
          <br />
          Be aware that deleted data can not be recovered.
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
)(ClientViewHelp);
