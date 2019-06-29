import React from 'react';
import { connect } from 'react-redux';
import { needHelp } from '../../actions';
import { Button } from 'reactstrap';

const OrganizationSearchHelp = props =>{
    return(
        <div>
            <header>
                <h2>Organization Search</h2>
            </header>
            <div>
                <p>
                    This is the organization search page. You can click "View All" to see all organizations of the selected type, or begin typing in the fields to narrow your results by name or location. You can also select if you'd like to search among existing organizations, or potential leads. Once you've found the organization you're looking for, you can click on their name to be directed to a page with more details.
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

export default connect(mapStateToProps, { needHelp })(OrganizationSearchHelp);