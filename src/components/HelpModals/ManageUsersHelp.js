import React from "react";
import { connect } from "react-redux";
import { needHelp } from "../../actions";
import { Button } from "reactstrap";
import HelpModal from "../../styles/HelpModal";

const ManageUsersHelp = props => {
  return (
    <HelpModal>
      <header>
        <h2>Manage Users</h2>
      </header>
      <div className="help-content">
        <p>
          This is the users management page.
          <br />
          <br />
          Add a new user by clicking the <strong>Add</strong> button.
          <br />
          <br />
          <strong>Begin typing</strong> to search for existing users.
          <br />
          <br />
          When you've found the user you are looking for <strong>
            hover
          </strong>{" "}
          over their row, then <strong>click the pencil</strong> icon to update
          their <strong>username, password, or privileges</strong>
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
)(ManageUsersHelp);
