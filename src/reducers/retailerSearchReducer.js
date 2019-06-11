import React, { Component } from 'react';

import { RETAILER_SEARCH_START, RETAILER_SEARCH_SUCCESS, RETAILER_SEARCH_FAILURE} from "../actions/RetailerSearch"

const initialState = {
    searchStart: false,
    searchSuccess: false,
    searchFailure: false,
    error: ''
}

export default (state=initialState, action) => {
    switch (action.type){
        case RETAILER_SEARCH_START:
        return{
            ...state,
            searchStart: true,
            searchSuccess: false,
            searchFailure: false,
            error: '',
            data: null
        }
        case RETAILER_SEARCH_SUCCESS:
        return{
            ...state,
            data: action.payload,
            searchStart: false,
            searchFailure: false,
            searchSuccess: true,
            error: ''
        }
        case RETAILER_SEARCH_FAILURE:
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