import React, { Component } from 'react';

import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions';


const initialState = {
    loginStart:false,
    loginSuccess:false,
    loginFailure:false,
    error:''
    

}
const loginR = (state=initialState,action) => {
    switch(action.type){
        case LOGIN_START:
        return{
            ...state,
            loginStart:true
        }

        case LOGIN_SUCCESS:
        return{
            ...state,
            loginSuccess:true,
            loginFailure:false,
            loginStart:false
            
        }

        case LOGIN_FAILURE:
        return{
            ...state,
            loginSuccess:false,
            loginFailure:true,
            loginStart:false,
            error:action.payload.data.error
        }
        default:

            return initialState;
        
        
    }


}

export default loginR;