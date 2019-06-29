import React from 'react';
import { connect } from 'react-redux';
import { needHelp } from '../../actions';
import { Button } from 'reactstrap';

const ClientViewHelp = props =>{
    return(
        <div>
            <header>
                <h2>Client View</h2>
            </header>
            <div>
                <p>
                    This is the client view page. Here, you can see all relevant data about a specific client. You can also add Transactions and Installment payments. You can also edit <i className="fas fa-edit edit" /> or delete <i className="fas fa-trash delete" /> any transaction or installment data, or the client itself. Be aware that deleted data can not be recovered.
                </p>
                <Button
                    color="secondary"
                    onClick={() => props.needHelp(props.status)}
                >
                    Got it
                </Button>
            </div>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        status: state.help.needsHelp
    }
}

export default connect(mapStateToProps, { needHelp })(ClientViewHelp);