import React, { Component } from "react";


export default class ClientResultsBtn extends Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }

    

    render(){
        return(
            <div>
                {this.props.resultsPageInfo.number !== 0 && <a href={this.props.resultsLinkInfo._links.self.href} className="results-btn prev">Previous</a>}
                <div className="results-description">{`Page ${this.props.resultsPageInfo.number +1} of ${this.props.resultsPageInfo.totalPages}`}</div>
                <a href={this.props.resultsLinkInfo.next.href} className="results-btn next">Next</a>
            </div>
        )
    }
}