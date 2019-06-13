import React, { Component } from 'react';
import {ADD_SYSTEM_USER_START,ADD_SYSTEM_USER_SUCCESS,ADD_SYSTEM_USER_FAILURE} from '../actions';

const initialState = {
    addSystemUserStart:false,
    addSystemUserSuccess:false,
    addSystemUserFailure:false,
    error:''
    

}

export default (state=initialState,action) => {
    switch(action.type){
        case ADD_SYSTEM_USER_START:
        return{
            ...state,
            addSystemUserStart:true
        }

        case ADD_SYSTEM_USER_SUCCESS:
        return{
            ...state,
            data:action.payload,
            addSystemUserStart:false,
            addSystemUserSuccess:true,
            addSystemUserFailure:false
            
        }

        case ADD_SYSTEM_USER_FAILURE:
        return{
            ...state,
            addSystemUserStart:false,
            addSystemUserFailure:true,
            addSystemUserSuccess:false,
            error:action.payload,
           
        }
        default:

            return state;
        
        
    }


}