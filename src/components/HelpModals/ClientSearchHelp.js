import React from "react";
import { connect } from "react-redux";
import { needHelp } from "../../actions";
import { Button } from "reactstrap";
import HelpModal from "../../styles/HelpModal";

const ClientSearchHelp = props => {
  return (
    <HelpModal>
      <header>
        <h2>Client Search</h2>
      </header>
      <div className="help-content">
        <p>
          <strong>click "Add"</strong> to add a new client or lead.
          <br />
          <br />
          You can <strong>click "View All"</strong> to see all clients of the
          selected type, or <strong>begin typing</strong> in the fields to
          narrow your results by name or location.
          <br />
          <br />
          You can also <strong>select</strong> if you'd like to search among
          existing <strong>clients</strong>, or potential <strong>leads</strong>{" "}
          by clicking the <strong>white button</strong>.
          <br />
          <br />
          Once you've found the client you're looking for, you can{" "}
          <strong>click their name</strong> to be directed to a page with more
          details. or <strong>click the caret</strong> to get their contact
          information.
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
)(ClientSearchHelp);
