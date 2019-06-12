import React, { Componen } from 'react';
import { ORGANIZATION_SEARCH_START, ORGANIZATION_SEARCH_SUCCESS, ORGANIZATION_SEARCH_FAILURE } from '../actions/OrganizationSearch';

const initialState = {
    searchStart: false,
    searchSuccess: false,
    searchFailure: false,
    error: '',
}

export default (state=initialState, action) => {
    switch(action.type){
        case ORGANIZATION_SEARCH_START:
            return{
                ...state,
                searchStart: true,
                searchFailure: false,
                searchSuccess: false,
                error: '',
                data: null
            }
        case ORGANIZATION_SEARCH_SUCCESS:
            return{
                ...state,
                searchStart: false,
                searchSuccess: true,
                searchFailure: false,
                error: '',
                data: action.payload
            }
        case ORGANIZATION_SEARCH_FAILURE:
            return{
                ...state,
                searchStart: false,
                searchSuccess: false,
                searchFailure: true,
            }
        default:
            return state;
    }
}