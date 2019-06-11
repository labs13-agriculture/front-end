import React, { Component } from 'react';
import {DATA_FARMER_CARD_START,DATA_FARMER_CARD_SUCCESS,DATA_FARMER_CARD_FAILURE} from '../actions';

const initialState = {
    farmerCardDataStart:false,
    farmerCardDataSuccess:false,
    farmerCardDataFailure:false,
    error:''
    

}

export default (state=initialState,action) => {
    switch(action.type){
        case DATA_FARMER_CARD_START:
        return{
            ...state,
            farmerCardDataStart:true
        }

        case DATA_FARMER_CARD_SUCCESS:
        return{
            ...state,
            data:action.payload,
            farmerCardDataStart:false,
            farmerCardDataSuccess:true,
            farmerCardDataFailure:false
            
        }

        case DATA_FARMER_CARD_FAILURE:
        return{
            ...state,
            farmerCardDataStart:false,
            farmerCardDataFailure:true,
            farmerCardDataSuccess:false,
            error:action.payload,
           
        }
        default:

            return initialState;
        
        
    }


}