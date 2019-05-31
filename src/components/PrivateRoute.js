import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import React, { Component } from 'react';   

const PrivateRoute = ({component:Component,error,...rest}) =>{
    return(
        <Route 
            {...rest} 
            render={props => {
            if(localStorage.getItem('token') && error !==403 ){
                return <Component {...props}/>
                

            }
            else{
                return <Redirect to="/"/>
                
            }}} 
        />
    )
}

export default PrivateRoute;