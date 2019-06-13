import React, { Component } from 'react';
import {UPDATE_SYSTEM_USER_START,UPDATE_SYSTEM_USER_SUCCESS,UPDATE_SYSTEM_USER_FAILURE} from '../actions';

const initialState = {
    updateSystemUserStart:false,
    updateSystemUserSuccess:false,
    updateystemUserFailure:false,
    error:''
    

}

export default (state=initialState,action) => {
    switch(action.type){
        case UPDATE_SYSTEM_USER_START:
        return{
            ...state,
            updateSystemUserStart:true
        }

        case UPDATE_SYSTEM_USER_SUCCESS:
        return{
            ...state,
            data:action.payload,
            updateSystemUserStart:false,
           updateSystemUserSuccess:true,
            updateSystemUserFailure:false
            
        }

        case UPDATE_SYSTEM_USER_FAILURE:
        return{
            ...state,
            updateSystemUserStart:false,
            updateSystemUserFailure:true,
            updateSystemUserSuccess:false,
            error:action.payload,
           
        }
        default:

            return state;
        
        
    }


}