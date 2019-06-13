import React, { Component } from 'react';
import {DELETE_SYSTEM_USER_START,DELETE_SYSTEM_USER_SUCCESS,DELETE_SYSTEM_USER_FAILURE} from '../actions';

const initialState = {
    deleteSystemUserStart:false,
    deleteSystemUserSuccess:false,
    deleteSystemUserFailure:false,
    error:''
    

}

export default (state=initialState,action) => {
    switch(action.type){
        case DELETE_SYSTEM_USER_START:
        return{
            ...state,
            deleteSystemUserStart:true
        }

        case DELETE_SYSTEM_USER_SUCCESS:
        return{
            ...state,
            
            deleteSystemUserStart:false,
            deleteSystemUserSuccess:true,
            deleteSystemUserFailure:false
            
        }

        case DELETE_SYSTEM_USER_FAILURE:
        return{
            ...state,
            deleteSystemUserStart:false,
            deleteSystemUserFailure:true,
            deleteSystemUserSuccess:false,
            error:action.payload,
           
        }
        default:

            return state;
        
        
    }


}