import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Axios from 'axios';

export default class GlobalSideNav extends Component{
    constructor(props){
        super(props);
        this.state = {
            names:[]
        }
    }

    render(){
        return(
            <div>
                <h1>GlobalSideNav</h1>
                {this.state.names.map(user => <h1>{user.username}</h1>)}
            </div>
        )
    }

    componentDidMount(){
        Axios.get('https://tieme-ndo-backend.herokuapp.com/users')
        .then(resp => {console.log(resp);this.setState({names:resp.data})})
        .catch(err => console.log(err))
    }
}

