import React, { Component } from 'react';

import { PROD_STAT_START, PROD_STAT_SUCCESS, PROD_STAT_FAILURE } from '../actions';


const initialState = {
    prodStatStart:false,
    prodStatSuccess:false,
    prodStatFailure:false,
    error:''
    

}

export default (state=initialState,action) => {
    switch(action.type){
        case PROD_STAT_START:
        return{
            ...state,
            prodStatStart:true
        }

        case PROD_STAT_SUCCESS:
        return{
            ...state,
            data:action.payload,
            prodStatSuccess:true,
            prodStatFailure:false,
            prodStatStart:false,
            
        }

        case PROD_STAT_FAILURE:
        return{
            ...state,
            prodStatSuccess:false,
            prodStatFailure:true,
            prodStatStart:false,
            error:action.payload
        }
        default:

            return initialState;
        
        
    }


}

