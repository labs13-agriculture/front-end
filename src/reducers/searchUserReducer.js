import React, { Component } from 'react';

import { USER_SEARCH_START, USER_SEARCH_SUCCESS, USER_SEARCH_FAILURE } from '../actions';


const initialState = {
    userSearchStart:false,
    userSearchSuccess:false,
    userSearchFailure:false,
    data:[],
    error:''
    

}

export default (state=initialState,action) => {
    switch(action.type){
        case USER_SEARCH_START:
        return{
            ...state,
            userSearchStart:true,
            data:[],
        }

        case USER_SEARCH_SUCCESS:
        return{
            ...state,
            data:action.payload,
            userSearchSuccess:true,
            userSearchFailure:false,
            userSearchStart:false,
            
        }

        case USER_SEARCH_FAILURE:
        return{
            ...state,
            userSearchSuccess:false,
            userSearchFailure:true,
            userSearchStart:false,
            error:action.payload
        }
        default:

            return state;
        
        
    }


}

