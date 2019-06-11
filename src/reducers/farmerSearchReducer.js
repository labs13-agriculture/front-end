import React, { Component } from 'react';
import { FARMER_SEARCH_START, FARMER_SEARCH_SUCCESS, FARMER_SEARCH_FAILURE } from "../actions/FarmerSearch";

const initialState = {
    searchStart: false,
    searchSuccess: false,
    searchFailure: false,
    error: ''
}

export default (state=initialState, action) => {
    switch (action.type){
        case FARMER_SEARCH_START:
        return{
            ...state,
            searchStart: true,
            searchSuccess: false,
            searchFailure: false,
            error: '',
            data: null
        }
        case FARMER_SEARCH_SUCCESS:
        return{
            ...state,
            data: action.payload,
            searchStart: false,
            searchFailure: false,
            searchSuccess: true,
            error: ''
        }
        case FARMER_SEARCH_FAILURE:
        return{
            ...state,
            data: null,
            searchStart: false,
            searchSuccess: false,
            searchFailure: true,
            error: action.payload
        }
        default:
            return state;
    }
}