import React, { Component } from 'react';
import styled, { css } from 'styled-components';

export default class GlobalViewContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            names:[]
        }
    }

    render(){
        return(
            <div>
                <h1>GlobalViewContainer</h1>
            </div>
        )
    }

    // componentDidMount(){
        
    // }
}

